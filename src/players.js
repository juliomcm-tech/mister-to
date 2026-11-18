
/* =====================================================================
   7) JOGADORES + LESÕES (estatísticas dos jogos da ESPN)
   - A cada ↻ o Tó lê as estatísticas dos jogos acabados que ainda não
     estudou (até 25 de cada vez; «Estudar tudo» faz o resto) e as lesões
     dos jogos de hoje e de amanhã.
   - Lesões entram só no MODELO do Tó (a casa de apostas já as conhece),
     e só a parte que a força recente da equipa ainda não reflete
     (se o jogador já falhou os últimos jogos, a equipa já joga sem ele).
   ===================================================================== */
let PL = LS.get('pl', { seen: {}, p: {} });
let INJ = LS.get('inj', {});
let PROPS = LS.get('props', {});
function savePL() {
  if (LS.set('pl', PL)) return;
  Object.values(PL.p).forEach(p => { p.g = p.g.slice(-12); });          // memória cheia: guarda menos jogos por jogador
  LS.set('pl', PL);
}
const nv = s => { const v = parseFloat(String(s == null ? '' : s).split('-')[0]); return isFinite(v) ? v : 0; };
function boxIdx(st) {
  const lab = (st.labels || st.names || []).map(x => String(x).toUpperCase()), keys = (st.keys || []).map(String);
  const f = (L, K) => { let i = lab.indexOf(L); if (i < 0) i = keys.findIndex(k => K.test(k)); return i; };
  return { min: f('MIN', /^minutes$/i), pts: f('PTS', /^points$/i), reb: f('REB', /^rebounds$/i), ast: f('AST', /^assists$/i), tp: f('3PT', /^threePointFieldGoals/i), pm: f('+/-', /plusMinus/i) };
}
/* uma linha por jogo: [jogo, dia, min, pts, ress, assist, triplos, +/-, casa?, adversário, titular?] */
function parseBox(j, g) {
  const B = j && j.boxscore && j.boxscore.players; if (!B || !B.length) return 0;
  let n = 0;
  B.forEach(tb => {
    const tid = String(tb.team && tb.team.id), st = (tb.statistics || [])[0];
    if (!st || !st.athletes || (tid !== g.h && tid !== g.a)) return;
    const I = boxIdx(st), home = tid === g.h, opp = home ? g.a : g.h;
    if (I.min < 0 || I.pts < 0) return;
    st.athletes.forEach(a => {
      if (!a || !a.athlete || a.didNotPlay || !a.stats || !a.stats.length) return;
      const min = nv(a.stats[I.min]); if (!(min > 0)) return;
      const id = String(a.athlete.id);
      const P = PL.p[id] || (PL.p[id] = { n: a.athlete.displayName || a.athlete.shortName || '?', sn: a.athlete.shortName || '', pos: (a.athlete.position && a.athlete.position.abbreviation) || '', t: tid, g: [] });
      P.n = a.athlete.displayName || P.n; if (g.ed >= (P.lastEd || '')) { P.t = tid; P.lastEd = g.ed; }
      if (P.g.some(x => x[0] === g.id)) return;
      P.g.push([g.id, g.ed, min, nv(a.stats[I.pts]), I.reb >= 0 ? nv(a.stats[I.reb]) : 0, I.ast >= 0 ? nv(a.stats[I.ast]) : 0, I.tp >= 0 ? nv(a.stats[I.tp]) : 0, I.pm >= 0 ? (parseFloat(a.stats[I.pm]) || 0) : 0, home ? 1 : 0, opp, a.starter ? 1 : 0]);
      P.g.sort((x, y) => x[1] < y[1] ? -1 : 1); if (P.g.length > 25) P.g = P.g.slice(-25);
      n++;
    });
  });
  return n;
}
function parseInj(j, g) {
  const out = { t: Date.now(), h: [], a: [] };
  (j.injuries || []).forEach(blk => {
    const tid = String(blk.team && blk.team.id), side = tid === g.h ? 'h' : tid === g.a ? 'a' : (blk.team && blk.team.abbreviation === tAb(g.h)) ? 'h' : (blk.team && blk.team.abbreviation === tAb(g.a)) ? 'a' : null;
    if (!side) return;
    (blk.injuries || []).forEach(x => { const at = x.athlete || {}; out[side].push({ id: String(at.id || ''), n: at.displayName || at.shortName || '?', pos: (at.position && at.position.abbreviation) || '', st: x.status || (x.type && x.type.description) || '', d: (x.details && (x.details.type || x.details.detail)) || x.shortComment || '' }); });
  });
  return out;
}
let STUDY_BUSY = false;
async function studyGames(maxFin, withInj, prog) {
  if (STUDY_BUSY) return { fin: 0, inj: 0 };
  STUDY_BUSY = true;
  const now = Date.now(), T = todayET();
  const fin = Object.values(DB.games).filter(g => gValid(g) && g.s === 'post' && !PL.seen[g.id]).sort((a, b) => a.d < b.d ? 1 : -1).slice(0, maxFin);
  const pre = withInj ? Object.values(DB.games).filter(g => gValid(g) && g.s === 'pre' && (g.ed === T || g.ed === ymdAdd(T, 1)) && new Date(g.d).getTime() > now - 3600e3) : [];
  let nf = 0, ni = 0, k = 0; const tot = fin.length + pre.length;
  try {
    for (const g of pre.concat(fin)) {
      k++; if (prog) prog(k, tot);
      try {
        const j = await getJSON(`${ESPN}/summary?event=${g.id}`, 12000);
        if (g.s === 'post') { parseBox(j, g); PL.seen[g.id] = 1; nf++; } else { INJ[g.id] = parseInj(j, g); ni++; }
      } catch (e) { if (e && e.status === 404 && g.s === 'post') PL.seen[g.id] = 1; }
      await new Promise(r => setTimeout(r, 140));
    }
  } finally {
    Object.keys(INJ).forEach(id => { const g = DB.games[id]; if (!g || g.s !== 'pre') delete INJ[id]; });
    savePL(); LS.set('inj', INJ); STUDY_BUSY = false; MODEL = null;
  }
  return { fin: nf, inj: ni };
}
const studyLeft = () => Object.values(DB.games).filter(g => gValid(g) && g.s === 'post' && !PL.seen[g.id]).length;

/* ---------- números de cada jogador ---------- */
const wAvg = (G, i, half) => { let s = 0, w = 0; G.forEach((x, k) => { const ww = Math.pow(0.5, (G.length - 1 - k) / half); s += ww * x[i]; w += ww; }); return w ? s / w : 0; };
const avg = (G, i) => G.length ? G.reduce((s, x) => s + x[i], 0) / G.length : 0;
function pStats(P) {
  const G = P.g || [], l5 = G.slice(-5);
  return { gp: G.length, min: avg(G, 2), pts: avg(G, 3), reb: avg(G, 4), ast: avg(G, 5), tp: avg(G, 6), pm: avg(G, 7), l5pts: avg(l5, 3), l5min: avg(l5, 2), wpts: wAvg(G, 3, 8), wreb: wAvg(G, 4, 8), wast: wAvg(G, 5, 8), wtp: wAvg(G, 6, 8), wmin: wAvg(G, 2, 8) };
}
/* impacto (pontos de diferença) quando o jogador falta — fórmula simples a partir das médias */
const IMP = { pts: 0.11, reb: 0.05, ast: 0.10, pm: 0.12, max: 7, minRef: 30 };
function impactOf(P) {
  if (!P || !P.g || P.g.length < 3) return 0;
  const s = pStats(P);
  return clamp((IMP.pts * s.pts + IMP.reb * s.reb + IMP.ast * s.ast + IMP.pm * s.pm) * Math.min(1, s.min / IMP.minRef), 0, IMP.max);
}
/* dos últimos 10 jogos estudados da equipa, em quantos jogou (se já falhou, a força da equipa já o reflete) */
function playedShare(P, tid) {
  const M = getModel(), G = (M.sched[tid] || []).filter(x => x.s === 'post' && PL.seen[x.id]).slice(-10);
  if (!G.length) return 1;
  const ids = new Set((P.g || []).map(x => x[0]));
  return G.filter(x => ids.has(x.id)).length / G.length;
}
const ST_W = s => /out/i.test(s) ? 1 : /doubt/i.test(s) ? 0.75 : /question|day-to-day|gtd/i.test(s) ? 0.4 : /prob/i.test(s) ? 0.1 : 0.5;
function findPlayer(x, tid) {
  if (x.id && PL.p[x.id]) return PL.p[x.id];
  const n = normName(x.n);
  return Object.values(PL.p).find(p => p.t === tid && normName(p.n) === n) || null;
}
const normName = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z ]/g, '').trim();
function injInfo(g) {
  const I = INJ[g.id]; const out = { h: 0, a: 0, list: { h: [], a: [] } };
  if (!I) return out;
  ['h', 'a'].forEach(side => {
    const tid = side === 'h' ? g.h : g.a;
    (I[side] || []).forEach(x => {
      const P = findPlayer(x, tid), imp = impactOf(P), sh = P ? playedShare(P, tid) : 0, w = ST_W(x.st);
      const eff = imp * sh * w;
      out[side] += eff;
      out.list[side].push(Object.assign({}, x, { imp, sh, w, eff, ppg: P ? pStats(P).pts : null }));
    });
    out[side] = Math.min(out[side], 12);
  });
  return out;
}

/* ---------- projeções de jogadores (pontos, ressaltos, assistências, triplos) ---------- */
const PROP = { wW: 0.55, wS: 0.30, wL: 0.15, home: 0.015, b2b: -0.03, sdPts: [3.2, 0.30], sdReb: [1.6, 0.40], sdAst: [1.3, 0.45], sdTp: [0.9, 0.55] };
function projOf(P, g) {
  const s = pStats(P), M = getModel(), home = P.t === g.h, opp = home ? g.a : g.h;
  const restDays = restOf(M, P.t, g);
  const base = v => v;
  let pts = PROP.wW * s.wpts + PROP.wS * s.pts + PROP.wL * s.l5pts;
  const oppF = clamp((M.L + (M.def[opp] || 0)) / M.L, 0.9, 1.1);
  const f = (1 + (home ? PROP.home : -PROP.home) + (restDays === 1 ? PROP.b2b : 0));
  pts = pts * oppF * f;
  const reb = (PROP.wW * s.wreb + (1 - PROP.wW) * s.reb) * f, ast = (PROP.wW * s.wast + (1 - PROP.wW) * s.ast) * f, tp = (PROP.wW * s.wtp + (1 - PROP.wW) * s.tp) * oppF * f;
  const sd = (a, v) => Math.max(a[0], a[1] * v + (a === PROP.sdPts ? 1.5 : 0));
  return { pts, reb, ast, tp, sdPts: sd(PROP.sdPts, pts), sdReb: sd(PROP.sdReb, reb), sdAst: sd(PROP.sdAst, ast), sdTp: sd(PROP.sdTp, tp), s, home, opp };
}
const pOver = (mean, sd, line) => 1 - Phi((line - mean) / sd);
const STATN = { pts: 'pontos', reb: 'ressaltos', ast: 'assistências', tp: 'triplos' };
/* jogadores de um jogo que contam (≥18 min, ≥3 jogos, não estão «Fora») */
function gamePlayers(g) {
  const I = INJ[g.id] || { h: [], a: [] };
  const out = I.h.concat(I.a).filter(x => /out/i.test(x.st)).map(x => x.id);
  return Object.entries(PL.p).filter(([id, P]) => (P.t === g.h || P.t === g.a) && P.g.length >= 3 && !out.includes(id))
    .map(([id, P]) => ({ id, P, s: pStats(P) })).filter(x => x.s.min >= 18).map(x => Object.assign(x, { pr: projOf(x.P, g) }))
    .sort((a, b) => b.pr.pts - a.pr.pts);
}
/* sugestões do Tó: a linha «segura» (~80%) para cada estatística forte */
function propPicks(g) {
  const L = gamePlayers(g), out = [];
  L.slice(0, 8).forEach(x => {
    [['pts', x.pr.pts, x.pr.sdPts, 10], ['reb', x.pr.reb, x.pr.sdReb, 6], ['ast', x.pr.ast, x.pr.sdAst, 5], ['tp', x.pr.tp, x.pr.sdTp, 2]].forEach(([k, m, sd, minM]) => {
      if (m < minM) return;
      const line = half(m - 0.85 * sd); if (line < 0.5) return;
      const p = pOver(m, sd, line);
      out.push({ g, id: x.id, P: x.P, k, m, sd, line, p, fair: 1 / p });
    });
  });
  return out.sort((a, b) => b.p - a.p || b.m - a.m);
}
function propLogSave(list) {
  let ch = false;
  list.forEach(x => { const key = x.g.id + '|' + x.id + '|' + x.k + '|' + x.line; if (PROPS[key]) return; PROPS[key] = { g: x.g.id, pid: x.id, n: x.P.n, k: x.k, line: x.line, p: r2(x.p), m: r2(x.m), t: Date.now() }; ch = true; });
  const ks = Object.keys(PROPS); if (ks.length > 600) { ks.sort((a, b) => PROPS[a].t - PROPS[b].t).slice(0, ks.length - 600).forEach(k => delete PROPS[k]); ch = true; }
  if (ch) LS.set('props', PROPS);
}
function propGrade() {
  let ch = false;
  Object.values(PROPS).forEach(x => {
    if (x.w != null) return; const g = DB.games[x.g]; if (!g || g.s !== 'post' || !PL.seen[g.id]) return;
    const P = PL.p[x.pid], row = P && P.g.find(r => r[0] === x.g);
    if (!row) { x.w = -1; ch = true; return; }                       // não jogou → devolvida
    const v = { pts: row[3], reb: row[4], ast: row[5], tp: row[6] }[x.k];
    x.v = v; x.w = v > x.line ? 1 : 0; ch = true;
  });
  if (ch) LS.set('props', PROPS);
}

/* ---------- boletins guardados (o modelo de aposta do Tó, congelado no início) ---------- */
let SLIPS = LS.get('slips', {});
function snapshotSlips() {
  const T = todayET(), now = Date.now();
  [0, 1].forEach(off => {
    const d = ymdAdd(T, off), cur = SLIPS[d];
    if (cur && cur.d0 && now > cur.d0 - 10 * 60e3) return;               // já começou: fica como estava
    const C = safeCands(off), pick = safeAuto(C), legs = C.filter((_, i) => pick.has(i));
    if (!legs.length) { if (cur && !cur.d0) delete SLIPS[d]; return; }
    SLIPS[d] = { legs: legs.map(c => safeLeg(c)), p: r2(legs.reduce((a, c) => a * c.p, 1)), odd: r2(legs.reduce((a, c) => a * c.odd, 1)), t: now, d0: Math.min(...legs.map(c => new Date(c.g.d).getTime())) };
  });
  const ks = Object.keys(SLIPS).sort(); if (ks.length > 120) ks.slice(0, ks.length - 120).forEach(k => delete SLIPS[k]);
  LS.set('slips', SLIPS);
}
function slipResult(S) {
  if (!S) return null;
  let pend = false, lost = false, w = 0;
  S.legs.forEach(l => { const g = DB.games[l.g]; const r = g ? outcome(l, g) : null; l.r = r; if (r === null) pend = true; else if (r === 'lost') lost = true; else if (r === 'won') w++; });
  return { st: lost ? 'lost' : pend ? 'open' : 'won', w, n: S.legs.length };
}
