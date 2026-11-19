'use strict';
/* =====================================================================
   MISTER TÓ · NBA  —  análise e duelo de apostas, só basket.
   Um ficheiro, quatro ecrãs: Hoje · Duelo · Contas · Mais.
   Dados: ESPN (grátis, sem token). Só vai à internet quando carregas em 🔄.
   Tudo fica guardado no telemóvel (localStorage, chaves «to_…»).
   ===================================================================== */
const APP_VER = '3.3.2';

/* ---------- utilitários ---------- */
const $ = s => document.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const clamp = (x, a, b) => Math.max(a, Math.min(b, x));
const r2 = x => Math.round(x * 100) / 100;
const LS = {
  get(k, d) { try { const v = localStorage.getItem('to_' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem('to_' + k, JSON.stringify(v)); return true; } catch (e) { toast('⚠️ A memória do telemóvel está cheia'); return false; } }
};
const eur = v => (Number(v) || 0).toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
const sEur = v => (v > 0 ? '+' : v < 0 ? '−' : '') + eur(Math.abs(v));
const odd2 = v => v ? Number(v).toFixed(2) : '—';
const pct = v => Math.round(v * 100) + '%';
const sPct = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(Math.round(v * 100)) + '%';
const lineTxt = v => v == null ? '' : (v > 0 ? '+' : v < 0 ? '−' : '') + String(Math.abs(v)).replace('.', ',');
const num = x => { const v = parseFloat(String(x == null ? '' : x).replace(',', '.').replace(/[^\d.+-]/g, '')); return isFinite(v) ? v : null; };
function toast(msg, ms) { const t = $('#toast'); t.innerHTML = msg; t.classList.add('on'); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('on'), ms || 2600); }
/* curva normal (para passar de «pontos de vantagem» a probabilidade) */
function Phi(x) { const t = 1 / (1 + 0.3275911 * Math.abs(x) / Math.SQRT2), y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x / 2); return x >= 0 ? (1 + y) / 2 : (1 - y) / 2; }
/* odds americanas (−110, +150) → decimais (1.91, 2.50) */
function american(x) {
  if (x == null || x === '') return null;
  if (typeof x === 'object') return american(x.american != null ? x.american : x.value != null ? x.value : x.odds != null ? x.odds : x.decimal);
  const s = String(x).trim();
  if (/^even$/i.test(s) || /^evs?$/i.test(s)) return 2;
  const v = Number(s.replace('+', ''));
  if (!isFinite(v) || v === 0) return null;
  if (Math.abs(v) >= 100) return r2(v > 0 ? 1 + v / 100 : 1 + 100 / Math.abs(v));
  return v > 1 && v < 30 ? r2(v) : null;
}

/* ---------- datas (a NBA conta os dias pela hora de Nova Iorque) ---------- */
const fmtET = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/New_York', year: 'numeric', month: '2-digit', day: '2-digit' });
const etYmd = d => fmtET.format(d).replace(/-/g, '');
const ymdAdd = (s, n) => { const d = new Date(Date.UTC(+s.slice(0, 4), +s.slice(4, 6) - 1, +s.slice(6, 8) + n)); return d.toISOString().slice(0, 10).replace(/-/g, ''); };
const ymdDiff = (a, b) => Math.round((Date.UTC(+b.slice(0, 4), +b.slice(4, 6) - 1, +b.slice(6, 8)) - Date.UTC(+a.slice(0, 4), +a.slice(4, 6) - 1, +a.slice(6, 8))) / 864e5);
const hhmm = iso => new Date(iso).toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
const dayLbl = iso => new Date(iso).toLocaleDateString('pt-PT', { weekday: 'short', day: '2-digit', month: '2-digit' }).replace('.', '');
const todayET = () => etYmd(new Date());
/* época NBA de um dia (out–jun): 2026-27 → 2027 */
const seasonOf = ed => { const y = +ed.slice(0, 4), m = +ed.slice(4, 6); return m >= 8 ? y + 1 : y; };
const CUR_SY = () => seasonOf(todayET());

/* ---------- as 30 equipas (conferência + nome curto de reserva) ---------- */
const EAST = ['ATL', 'BOS', 'BKN', 'CHA', 'CHI', 'CLE', 'DET', 'IND', 'MIA', 'MIL', 'NY', 'NYK', 'ORL', 'PHI', 'TOR', 'WSH', 'WAS'];
const WEST = ['DAL', 'DEN', 'GS', 'GSW', 'HOU', 'LAC', 'LAL', 'MEM', 'MIN', 'NO', 'NOP', 'OKC', 'PHX', 'PHO', 'POR', 'SAC', 'SA', 'SAS', 'UTAH', 'UTA'];
const NBA30 = new Set(EAST.concat(WEST));

/* ---------- guardado ---------- */
let DB = LS.get('db', { teams: {}, games: {}, months: {} });
let BETS = LS.get('bets', []);
let PREDS = LS.get('preds', {});
let ABS = LS.get('abs', {});
let DEPOS = LS.get('depos', []);
const CFG_DEF = { bank: { tu: 100, to: 100, pi: 250 }, min: 0.25, piOn: true, piStake: 2.5, evMin: 0.05, mktW: 0.90, mktWt: 0.95, oddMin: 1.30, oddMax: 4.00 };
let CFG = Object.assign({}, CFG_DEF, LS.get('cfg', {}));
if (!CFG.v3) { CFG.mktW = 0.90; CFG.mktWt = 0.95; CFG.v3 = 1; CFG.v2 = 1; }   // v3: teste às cegas em 11 épocas reais → mais peso na casa
CFG.bank = Object.assign({}, CFG_DEF.bank, CFG.bank || {});
if (CFG.botV !== 1) { CFG.piOn = true; CFG.botV = 1; }   // o piloto passou a ser o «Tó sozinho», ligado de origem
const saveDB = () => LS.set('db', DB);
const saveBets = () => LS.set('bets', BETS);

/* =====================================================================
   1) IR BUSCAR À ESPN
   ===================================================================== */
const ESPN = 'https://site.api.espn.com/apis/site/v2/sports/basketball/nba';
const BRIDGES = [
  { n: 'Direto', f: u => u },
  { n: 'corsproxy.io', f: u => 'https://corsproxy.io/?url=' + encodeURIComponent(u) },
  { n: 'allorigins', f: u => 'https://api.allorigins.win/raw?url=' + encodeURIComponent(u) }
];
async function getJSON(url, tmo) {
  const pref = clamp(LS.get('bridge', 0), 0, BRIDGES.length - 1);
  const order = [pref].concat(BRIDGES.map((_, i) => i).filter(i => i !== pref));
  let last = null;
  for (const i of order) {
    const ctrl = new AbortController(); const tm = setTimeout(() => ctrl.abort(), tmo || 15000);
    try {
      const r = await fetch(BRIDGES[i].f(url), { signal: ctrl.signal, cache: 'no-store' });
      if (!r.ok) { const e = new Error('HTTP ' + r.status); e.status = r.status; throw e; }
      const j = await r.json();
      if (i !== pref) LS.set('bridge', i);
      return j;
    } catch (e) { last = e; if (e.status === 400 || e.status === 404) throw e; }
    finally { clearTimeout(tm); }
  }
  throw last || new Error('sem ligação');
}
const scoreVal = x => x == null ? null : typeof x === 'object' ? Number(x.value != null ? x.value : x.displayValue) : Number(x);
function pickSide(s) { return s ? (s.close || s.current || s.open || s) : null; }
function parseOdds(o, hab, aab) {
  if (!o) return null;
  const r = { p: (o.provider && o.provider.name) || 'casa' };
  let hl = null, tl = null;
  try {   // formato novo: pointSpread / total / moneyline com open/close
    const ps = o.pointSpread;
    if (ps && ps.home) { const x = pickSide(ps.home), y = pickSide(ps.away); if (x && x.line != null) hl = num(x.line); r.hso = american(x && x.odds); r.aso = american(y && y.odds); }
    const T = o.total;
    if (T && T.over) { const x = pickSide(T.over), y = pickSide(T.under); if (x && x.line != null) tl = num(String(x.line).replace(/^[ou]/i, '')); r.ovo = american(x && x.odds); r.uno = american(y && y.odds); }
    const ML = o.moneyline;
    if (ML && ML.home) { r.hml = american(pickSide(ML.home) && pickSide(ML.home).odds); r.aml = american(pickSide(ML.away) && pickSide(ML.away).odds); }
  } catch (e) {}
  if (hl == null && o.details) {   // formato antigo: «BOS -6.5»
    const m = String(o.details).match(/^([A-Z]{2,4})\s+([+-]?\d+(?:\.\d+)?)/);
    if (m) { const v = Math.abs(+m[2]); hl = m[1] === hab ? -v : m[1] === aab ? v : null; }
    else if (/\b(EVEN|PK|PICK)\b/i.test(o.details)) hl = 0;
  }
  if (hl == null && o.spread != null && o.homeTeamOdds) { const v = Math.abs(+o.spread); if (o.homeTeamOdds.favorite) hl = -v; else if (o.awayTeamOdds && o.awayTeamOdds.favorite) hl = v; }
  if (tl == null && o.overUnder != null) tl = num(o.overUnder);
  const H = o.homeTeamOdds || {}, A = o.awayTeamOdds || {};
  if (!r.hml && H.moneyLine != null) r.hml = american(H.moneyLine);
  if (!r.aml && A.moneyLine != null) r.aml = american(A.moneyLine);
  if (!r.hso && H.spreadOdds != null) r.hso = american(H.spreadOdds);
  if (!r.aso && A.spreadOdds != null) r.aso = american(A.spreadOdds);
  if (!r.ovo && o.overOdds != null) r.ovo = american(o.overOdds);
  if (!r.uno && o.underOdds != null) r.uno = american(o.underOdds);
  r.hl = hl != null && Math.abs(hl) < 40 ? hl : null;
  r.tl = tl != null && tl > 150 && tl < 320 ? tl : null;
  Object.keys(r).forEach(k => { if (r[k] == null) delete r[k]; });
  return (r.hl != null || r.tl != null || r.hml) ? r : null;
}
function ingest(ev) {
  const c = ev && ev.competitions && ev.competitions[0];
  if (!c || !c.competitors) return;
  const H = c.competitors.find(x => x.homeAway === 'home'), A = c.competitors.find(x => x.homeAway === 'away');
  if (!H || !A || !H.team || !A.team) return;
  if (!NBA30.has(H.team.abbreviation) || !NBA30.has(A.team.abbreviation)) return;   // All-Star, pré-época contra clubes de fora…
  const ty = ev.season && ev.season.type;
  if (ty && [2, 3, 5].indexOf(Number(ty)) < 0) return;                               // só época regular, play-in e playoffs
  [H.team, A.team].forEach(t => { const lg = t.logo || (t.logos && t.logos[0] && t.logos[0].href); DB.teams[t.id] = { id: String(t.id), ab: t.abbreviation, nm: t.shortDisplayName || t.name || t.displayName, fn: t.displayName || t.name, c: t.color || '553399', c2: t.alternateColor || 'ff8a1f', lg: lg && /^https:\/\//.test(lg) ? lg : undefined }; });
  const S = (c.status || ev.status || {}), st = S.type || {};
  const off = /POSTPON|CANCEL|SUSPEND|FORFEIT/i.test(String(st.name || '') + ' ' + String(st.description || ''));
  const s = off ? 'off' : (st.completed || st.state === 'post') ? 'post' : st.state === 'in' ? 'in' : 'pre';
  const id = String(ev.id), old = DB.games[id];
  const g = { id, d: ev.date || c.date, h: String(H.team.id), a: String(A.team.id), s, ty: Number(ty) || 2 };
  g.ed = etYmd(new Date(g.d));
  if (s === 'post' || s === 'in') { g.hs = scoreVal(H.score); g.as = scoreVal(A.score); g.per = Number(S.period) || 0; g.cl = st.shortDetail || st.detail || ''; }
  const o = parseOdds(c.odds && c.odds[0], H.team.abbreviation, A.team.abbreviation);
  // as odds de antes do jogo ficam guardadas (durante e depois do jogo a ESPN pode trocar ou tirar)
  g.o = s === 'pre' ? (o || (old && old.o) || null) : ((old && old.o) || o || null);
  if (!g.o) delete g.o;
  DB.games[id] = g;
}
async function fetchMonth(ym) {
  try {
    const j = await getJSON(`${ESPN}/scoreboard?dates=${ym}&limit=1000`);
    (j.events || []).forEach(ingest);
    return true;
  } catch (e) {
    // reserva: dia a dia (só até amanhã)
    const y = +ym.slice(0, 4), m = +ym.slice(4, 6), last = new Date(Date.UTC(y, m, 0)).getUTCDate(), lim = ymdAdd(todayET(), 1);
    let ok = 0;
    for (let d = 1; d <= last; d++) {
      const day = ym + String(d).padStart(2, '0'); if (day > lim) break;
      try { const j = await getJSON(`${ESPN}/scoreboard?dates=${day}`); (j.events || []).forEach(ingest); ok++; } catch (e2) {}
      await new Promise(r => setTimeout(r, 120));
    }
    return ok > 0;
  }
}
let BUSY = false;
async function refresh() {
  if (BUSY) return; BUSY = true;
  const btn = $('#btnRefresh'); btn.classList.add('spin');
  const T = todayET(), y = +T.slice(0, 4), mo = +T.slice(4, 6);
  const sy = mo >= 8 ? y : y - 1;                                  // a época começa em outubro
  const months = []; for (let d = new Date(Date.UTC(sy, 9, 1)); d <= new Date(Date.UTC(y, mo - 1, 1)); d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1))) months.push(d.toISOString().slice(0, 7).replace('-', ''));
  const tom = ymdAdd(T, 1); if (!months.includes(tom.slice(0, 6))) months.push(tom.slice(0, 6));
  // época anterior (out–jun), só uma vez: o Tó parte das forças de lá (teste às cegas: erro menor no início da época)
  for (let d = new Date(Date.UTC(sy - 1, 9, 1)); d <= new Date(Date.UTC(sy, 5, 1)); d = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + 1, 1))) months.unshift(d.toISOString().slice(0, 7).replace('-', ''));
  let fails = 0;
  try {
    for (const ym of months) {
      const M = DB.months[ym];
      if (M && M.done) continue;
      setUpd(`⏳ A buscar ${ym.slice(4)}/${ym.slice(0, 4)} à ESPN…`);
      const ok = await fetchMonth(ym);
      if (!ok) { fails++; continue; }
      const endM = ymdAdd(ym + String(new Date(Date.UTC(+ym.slice(0, 4), +ym.slice(4, 6), 0)).getUTCDate()).padStart(2, '0'), 3);
      DB.months[ym] = { t: Date.now(), done: T > endM };
    }
    // ontem, hoje e amanhã: pedido a pedido (resultados finais e odds frescas)
    for (const d of [ymdAdd(T, -1), T, tom]) {
      setUpd('⏳ Odds e resultados de ' + d.slice(6) + '/' + d.slice(4, 6) + '…');
      try { const j = await getJSON(`${ESPN}/scoreboard?dates=${d}`); (j.events || []).forEach(ingest); } catch (e) { fails++; }
    }
    saveDB();
    MODEL = null;
    // jogadores (jogos acabados ainda por estudar) + lesões dos jogos de hoje e amanhã
    let stu = { fin: 0, inj: 0 };
    try { stu = await studyGames(25, true, (k, n) => setUpd(`⏳ Jogadores e lesões ${k}/${n}…`)); } catch (e) {}
    snapshotPreds();
    snapshotSlips();
    const sett = settleAll();
    propGrade();
    const pil = pilotRun(); bossFeed();
    LS.set('last', Date.now());
    const n = Object.keys(DB.games).length;
    toast(fails && !n ? 'Sem ligação à ESPN. Experimenta «Testar ligação» no Mais.' : `✓ ${n} jogos${stu.inj ? ` · lesões de ${stu.inj} jogos` : ''}${stu.fin ? ` · ${stu.fin} jogos estudados` : ''}${sett ? ` · ${sett} apostas fechadas` : ''}${pil ? ` · piloto fez ${pil}` : ''}`, 4200);
  } catch (e) {
    toast('❌ Falhou: ' + esc(e.message || e));
  } finally {
    BUSY = false; btn.classList.remove('spin'); render();
  }
}

/* =====================================================================
   2) O CÉREBRO DO TÓ
   Pontos esperados de cada equipa = média da liga
     + ataque da equipa + defesa do adversário (corrigidos pelo calendário)
     + vantagem de jogar em casa (da liga) + fator casa/fora de cada equipa
     − cansaço (jogou ontem) − ausências que tu marcas
   Depois junta com a linha da casa de apostas (o mercado sabe coisas
   que o Tó não sabe, como lesões) e passa a probabilidades.
   Números (NBA): diferença final varia ±12 pts à volta do esperado
   (desvio-padrão), o total ±18; força real das equipas varia ±4,7 pts.
   → com o ruído de um jogo, a média de uma equipa fica «meio fiável»
     ao fim de ~6-8 jogos (KPRIOR). O fator casa/fora próprio de cada
     equipa varia só ±1 pt e precisava de >100 jogos: fica muito travado.
   O peso da casa de apostas começa em 90% (diferença) / 95% (total) e o
   Tó afina-o com as previsões que guardou antes de cada jogo (calibW).
   Teste às cegas em 11 épocas reais (2014-26, linhas de fecho): o Tó está
   bem calibrado mas NÃO bate a linha de fecho; daí os valores abaixo.
   ===================================================================== */
const SDM = 13, SDT = 18, HALF = 20, KPRIOR = 8, KSPLIT = 200, SPCAP = 1.0, HCA0 = 2.0, CARRY = 0.5, B2B_OWN = 1.3, B2B_OPP = 1.0;
let MODEL = null;
const gValid = g => g && DB.teams[g.h] && DB.teams[g.a];
/* forças ataque/defesa (iterativo, corrigido pelos adversários); prior = época anterior × CARRY */
function fitRatings(fin, L, HCA, pOff, pDef) {
  const byT = {}; fin.forEach(g => { (byT[g.h] = byT[g.h] || []).push(g); (byT[g.a] = byT[g.a] || []).push(g); });
  const W = {}; for (const t in byT) { const a = byT[t]; a.forEach((g, i) => { W[t + '|' + g.id] = Math.pow(0.5, (a.length - 1 - i) / HALF); }); }
  let off = {}, def = {};
  for (let it = 0; it < 6; it++) {
    const no = {}, nd = {};
    for (const t in byT) {
      let so = 0, sd = 0, sw = 0;
      for (const g of byT[t]) {
        const w = W[t + '|' + g.id], home = g.h === t, o = home ? g.a : g.h, pf = home ? g.hs : g.as, pa = home ? g.as : g.hs, hb = home ? HCA / 2 : -HCA / 2;
        so += w * (pf - (L + hb + (def[o] || 0))); sd += w * (pa - (L - hb + (off[o] || 0))); sw += w;
      }
      no[t] = (so + KPRIOR * CARRY * ((pOff && pOff[t]) || 0)) / (sw + KPRIOR); nd[t] = (sd + KPRIOR * CARRY * ((pDef && pDef[t]) || 0)) / (sw + KPRIOR);
    }
    off = no; def = nd;
  }
  return { off, def, byT, W };
}
const leagueOf = fin => { const n = fin.length; if (!n) return { L: 114, HCA: HCA0, n }; const l = fin.reduce((s, g) => s + g.hs + g.as, 0) / (2 * n), ho = fin.reduce((s, g) => s + g.hs - g.as, 0) / n; return { L: (n * l + 60 * 114) / (n + 60), HCA: (n * ho + 300 * HCA0) / (n + 300), n }; };
let PREV_MEM = null;
function buildModel() {
  const cs = CUR_SY();
  const allG = Object.values(DB.games).filter(gValid);
  const all = allG.filter(g => seasonOf(g.ed) === cs).sort((x, y) => x.d < y.d ? -1 : 1);
  const fin = all.filter(g => g.s === 'post' && g.hs != null && g.as != null);
  // época anterior: forças finais (guardadas em memória)
  const prevFin = allG.filter(g => seasonOf(g.ed) === cs - 1 && g.s === 'post' && g.hs != null).sort((x, y) => x.d < y.d ? -1 : 1);
  if (!PREV_MEM || PREV_MEM.n !== prevFin.length) { const lp = leagueOf(prevFin); const r = prevFin.length > 200 ? fitRatings(prevFin, lp.L, lp.HCA) : { off: {}, def: {} }; PREV_MEM = { n: prevFin.length, off: r.off, def: r.def }; }
  const n = fin.length, lg = leagueOf(fin), L = lg.L, HCA = lg.HCA;
  const { off, def, byT, W } = fitRatings(fin, L, HCA, PREV_MEM.off, PREV_MEM.def);
  const net = t => (off[t] || 0) - (def[t] || 0);
  const sp = {};
  for (const t in byT) {
    let rh = 0, wh = 0, ra = 0, wa = 0;
    for (const g of byT[t]) {
      const w = W[t + '|' + g.id], r = (g.hs - g.as) - (HCA + net(g.h) - net(g.a));
      if (g.h === t) { rh += w * r; wh += w; } else { ra += w * (-r); wa += w; }
    }
    sp[t] = clamp((rh / (wh + KSPLIT) - ra / (wa + KSPLIT)) / 2, -SPCAP, SPCAP);
  }
  // registos, forma, último jogo (para o cansaço)
  const rec = {}; const R = t => rec[t] = rec[t] || { w: 0, l: 0, hw: 0, hl: 0, aw: 0, al: 0, pf: 0, pa: 0, last: [] };
  fin.forEach(g => {
    const hw = g.hs > g.as;
    const h = R(g.h), a = R(g.a);
    if (hw) { h.w++; h.hw++; a.l++; a.al++; } else { h.l++; h.hl++; a.w++; a.aw++; }
    h.pf += g.hs; h.pa += g.as; a.pf += g.as; a.pa += g.hs;
    h.last.push({ w: hw, s: g.hs + '-' + g.as, vs: g.a, home: true, id: g.id }); a.last.push({ w: !hw, s: g.as + '-' + g.hs, vs: g.h, home: false, id: g.id });
  });
  const sched = {}; all.filter(g => g.s !== 'off').forEach(g => { (sched[g.h] = sched[g.h] || []).push(g); (sched[g.a] = sched[g.a] || []).push(g); });
  return { L, HCA, off, def, sp, net, rec, sched, n, gp: t => (byT[t] || []).length, cal: calibW(), prevN: PREV_MEM.n };
}
/* o Tó aprende quanto confiar na casa de apostas: com as previsões que guardou ANTES
   de cada jogo, procura o peso w que mais reduz o erro de  w·casa + (1−w)·modelo */
function calibW() {
  const one = (getK, getM, getA, W0, Wmin) => {
    let ed = 0, dd = 0, n = 0, eMod = 0, eMkt = 0;
    Object.keys(PREDS).forEach(id => {
      const g = DB.games[id], p = PREDS[id]; if (!g || g.s !== 'post' || g.hs == null) return;
      const k = getK(p), mm = getM(p); if (k == null || mm == null) return;
      const a = getA(g), d = k - mm; ed += (a - mm) * d; dd += d * d; n++; eMod += Math.abs(a - mm); eMkt += Math.abs(a - k);
    });
    const raw = dd > 0 ? ed / dd : W0;
    return { n, raw, w: clamp((n * clamp(raw, 0, 1) + 80 * W0) / (n + 80), Wmin, 0.98), eMod: n ? eMod / n : null, eMkt: n ? eMkt / n : null };
  };
  return {
    m: one(p => p.hl == null ? null : -p.hl, p => p.mm, g => g.hs - g.as, CFG.mktW, Math.min(0.80, CFG.mktW)),
    t: one(p => p.tl == null ? null : p.tl, p => p.tm, g => g.hs + g.as, CFG.mktWt || 0.95, Math.min(0.85, CFG.mktWt || 0.95))
  };
}
/* probabilidade com resultados inteiros: ganha se X > k; se k for inteiro, X = k devolve a aposta */
function cover(mean, sd, k) {
  if (Math.abs(k - Math.round(k)) < 1e-9) { const hi = Phi((k + 0.5 - mean) / sd), lo = Phi((k - 0.5 - mean) / sd); return { w: 1 - hi, push: hi - lo }; }
  return { w: 1 - Phi((k - mean) / sd), push: 0 };
}
const getModel = () => MODEL || (MODEL = buildModel());
function restOf(M, t, g) {
  const a = M.sched[t] || []; const i = a.findIndex(x => x.id === g.id);
  if (i <= 0) return null;
  return ymdDiff(a[i - 1].ed, g.ed);
}
function predict(g) {
  const M = getModel(), h = g.h, a = g.a, o = g.o || {};
  const spT = (M.sp[h] || 0) + (M.sp[a] || 0);
  let Eh = M.L + M.HCA / 2 + (M.off[h] || 0) + (M.def[a] || 0) + spT / 2;
  let Ea = M.L - M.HCA / 2 + (M.off[a] || 0) + (M.def[h] || 0) - spT / 2;
  const rh = restOf(M, h, g), ra = restOf(M, a, g);
  let restAdj = 0;
  if (rh === 1) { Eh -= B2B_OWN; Ea += B2B_OPP; restAdj -= B2B_OWN + B2B_OPP; }
  if (ra === 1) { Ea -= B2B_OWN; Eh += B2B_OPP; restAdj += B2B_OWN + B2B_OPP; }
  // lesões da ESPN: só no modelo (a casa já as conhece), só a parte que a equipa ainda não absorveu
  const ij = (typeof injInfo === 'function') ? injInfo(g) : { h: 0, a: 0, list: { h: [], a: [] } };
  Eh -= 0.6 * ij.h; Ea += 0.4 * ij.h; Ea -= 0.6 * ij.a; Eh += 0.4 * ij.a;
  const injAdj = -ij.h + ij.a;
  const mModel = Eh - Ea, tModel = Eh + Ea;
  const gpMin = Math.min(M.gp(h), M.gp(a));
  const hasM = o.hl != null, hasT = o.tl != null;
  const early = Math.max(0, 8 - gpMin) * 0.015;                      // início de época: ainda mais peso na casa
  const W = clamp(M.cal.m.w + early, 0, 0.98), Wt = clamp(M.cal.t.w + early, 0, 0.98);
  let m = hasM ? W * (-o.hl) + (1 - W) * mModel : mModel;
  let t = hasT ? Wt * o.tl + (1 - Wt) * tModel : tModel;
  // ausências que tu marcas: notícia que a casa ainda não meteu na linha → conta por inteiro
  const ab = ABS[g.id] || { h: 0, a: 0 };
  const absAdj = -(ab.h || 0) + (ab.a || 0);
  m += absAdj; t -= 0.25 * ((ab.h || 0) + (ab.a || 0));
  const P = { g, Eh, Ea, mModel, tModel, m, t, W: hasM ? W : 0, Wt: hasT ? Wt : 0, ph: (t + m) / 2, pa: (t - m) / 2, pH: Phi(m / SDM), rh, ra, restAdj, absAdj, injAdj, inj: ij, gpMin };
  P.reasons = [
    ['Força na época (ataque e defesa)', M.net(h) - M.net(a)],
    ['Vantagem de jogar em casa (média da liga)', M.HCA],
    ['Fator casa/fora destas duas equipas', spT],
    ['Cansaço (jogou na véspera)', restAdj],
    ['Lesões da ESPN (só no modelo)', injAdj]
  ];
  P.cands = candidates(g, P);
  const elig = P.cands.filter(c => c.odd >= CFG.oddMin && c.odd <= CFG.oddMax && !c.sus && !(c.mk === 'ml' && c.der)).sort((x, y) => y.ev - x.ev);
  P.best = elig[0] || null;
  P.value = P.best && P.best.ev >= CFG.evMin + (P.best.der ? 0.02 : 0) ? P.best : null;
  return P;
}
function probs(P, mk, sel, line) {
  if (mk === 'ml') { const ph = P.pML != null ? P.pML : P.pH; return { w: sel === 'h' ? ph : 1 - ph, push: 0 }; }
  if (mk === 'sp') return sel === 'h' ? cover(P.m, SDM, -line) : cover(-P.m, SDM, -line);   // casa ganha se diferença > −linha
  if (mk === 'tot') return sel === 'o' ? cover(P.t, SDT, line) : cover(-P.t, SDT, -line);
  return { w: 0, push: 0 };
}
const probFor = (P, mk, sel, line) => probs(P, mk, sel, line).w;
const evOf = (q, odd) => q.w * odd + q.push - 1;                     // devolvida = recebes o valor de volta
const fairOf = q => q.w > 0 ? (1 - q.push) / q.w : 99;
function candidates(g, P) {
  const o = g.o || {}, out = [];
  // vencedor: no teste às cegas, as vitórias batiam com a odd da casa SEM margem, não com a curva normal.
  // Por isso: probabilidade = odd da casa sem margem + (1 − peso da casa) × opinião do modelo.
  if (o.hml && o.aml) { const pNV = (1 / o.hml) / (1 / o.hml + 1 / o.aml); P.pML = clamp(pNV + (1 - (P.W || CFG.mktW)) * (Phi(P.mModel / SDM) - pNV), 0.01, 0.99); }
  const add = (mk, sel, line, odd, der) => { if (!(odd > 1)) return; const q = probs(P, mk, sel, line); out.push({ mk, sel, line, odd: r2(odd), der: !!der, p: q.w, push: q.push, ev: evOf(q, odd), fair: fairOf(q) }); };
  // salvaguarda: a odd de vencedor tem de bater certo com o handicap da mesma casa (senão é erro de dados)
  const sus = o.hml && o.aml && o.hl != null && Math.abs((1 / o.hml) / (1 / o.hml + 1 / o.aml) - Phi(-o.hl / SDM)) > 0.04;
  if (o.hml && o.aml) { add('ml', 'h', null, o.hml); add('ml', 'a', null, o.aml); if (sus) out.forEach(c => { if (c.mk === 'ml') c.sus = true; }); }
  else if (o.hl != null) { const pm = Phi(-o.hl / SDM); add('ml', 'h', null, 1 / (pm + 0.0225), true); add('ml', 'a', null, 1 / (1 - pm + 0.0225), true); }
  if (o.hl != null) { add('sp', 'h', o.hl, o.hso || 1.91, !o.hso); add('sp', 'a', -o.hl, o.aso || 1.91, !o.aso); }
  if (o.tl != null) { add('tot', 'o', o.tl, o.ovo || 1.91, !o.ovo); add('tot', 'u', o.tl, o.uno || 1.91, !o.uno); }
  return out;
}
const tName = id => (DB.teams[id] && DB.teams[id].nm) || '?';
const tAb = id => (DB.teams[id] && DB.teams[id].ab) || '?';
function selLabel(g, mk, sel, line) {
  if (mk === 'ml') return tName(sel === 'h' ? g.h : g.a) + ' ganha';
  if (mk === 'sp') return tName(sel === 'h' ? g.h : g.a) + ' ' + lineTxt(line);
  return (sel === 'o' ? 'Mais de ' : 'Menos de ') + String(line).replace('.', ',') + ' pts';
}
const mkName = mk => ({ ml: 'Vencedor (c/ prolongamento)', sp: 'Handicap', tot: 'Total de pontos' }[mk] || mk);
const gLabel = g => tName(g.h) + ' – ' + tName(g.a);
const conf = ev => ev >= 0.10 ? ['forte', 'b-or'] : ev >= 0.05 ? ['boa', 'b-gr'] : ev > 0 ? ['ligeira', 'b-bl'] : ['sem valor', 'b-mu'];

/* previsões congeladas até ao início (para o Diário do Tó) */
function snapshotPreds() {
  const now = Date.now();
  Object.values(DB.games).forEach(g => {
    if (!gValid(g) || g.s !== 'pre' || new Date(g.d).getTime() < now - 6e5) return;
    if (ymdDiff(todayET(), g.ed) > 2) return;
    const P = predict(g);
    const pat = {};
    if (g.o && g.o.hl != null) {
      if (P.rh != null && P.ra != null) { const rh = Math.min(5, P.rh), ra = Math.min(5, P.ra); if (Math.abs(rh - ra) >= 2) { const sel = rh > ra ? 'h' : 'a'; pat.rest = { sel, line: sel === 'h' ? g.o.hl : -g.o.hl }; } }
      if (P.gpMin < 10 && Math.abs(g.o.hl) >= 3) { const sel = g.o.hl < 0 ? 'a' : 'h'; pat.dog = { sel, line: sel === 'h' ? g.o.hl : -g.o.hl }; }
    }
    PREDS[g.id] = { pat, m: r2(P.m), t: r2(P.t), mm: r2(P.mModel), tm: r2(P.tModel), pH: r2(P.pH), hl: g.o && g.o.hl, tl: g.o && g.o.tl, ed: g.ed, pk: P.value ? { mk: P.value.mk, sel: P.value.sel, line: P.value.line, odd: P.value.odd, ev: r2(P.value.ev), p: r2(P.value.p), der: !!P.value.der, lb: selLabel(g, P.value.mk, P.value.sel, P.value.line) } : null, ts: now };
  });
  // limpeza: só os últimos 600
  const ks = Object.keys(PREDS); if (ks.length > 600) ks.sort((a, b) => PREDS[a].ts - PREDS[b].ts).slice(0, ks.length - 600).forEach(k => delete PREDS[k]);
  LS.set('preds', PREDS);
}

/* =====================================================================
   3) CONTAS: Tu · Mister Tó · Tó sozinho (bot)
   ===================================================================== */
const ACC = { tu: { n: 'Tu', ic: 'star', c: 'var(--c-blue)' }, to: { n: 'Mister Tó', ic: 'whistle', c: 'var(--c-orange)' }, pi: { n: 'Tó sozinho', ic: 'robot', c: 'var(--c-purple)' } };
function accStats(acc) {
  const B = BETS.filter(b => b.acc === acc);
  const dep = DEPOS.filter(d => d.acc === acc).reduce((s, d) => s + d.v, 0);
  let staked = 0, ret = 0, open = 0, setSt = 0, setRet = 0, w = 0, l = 0;
  B.forEach(b => {
    staked += b.stake;
    if (b.st === 'open') open += b.stake;
    else { ret += b.ret || 0; if (b.st !== 'void') { setSt += b.stake; setRet += b.ret || 0; if (b.st === 'won') w++; if (b.st === 'lost') l++; } }
  });
  const start = (CFG.bank[acc] || 0) + dep;
  return { start, bal: r2(start - staked + ret), open: r2(open), profit: r2(setRet - setSt), roi: setSt ? (setRet - setSt) / setSt : 0, w, l, n: B.length, nOpen: B.filter(b => b.st === 'open').length };
}
function newBet(acc, g, c, stake, extra) {
  const b = Object.assign({ id: acc + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), acc, g: g.id, gl: gLabel(g), gd: g.d, mk: c.mk, sel: c.sel, line: c.line == null ? null : c.line, odd: r2(c.odd), stake: r2(stake), t: Date.now(), st: 'open', ret: 0, lb: selLabel(g, c.mk, c.sel, c.line) }, extra || {});
  BETS.push(b); return b;
}
function outcome(b, g) {
  if (g.s === 'off') return 'void';
  if (g.s !== 'post' || g.hs == null) return null;
  const hs = g.hs, as = g.as;
  let d;
  if (b.mk === 'ml') d = b.sel === 'h' ? hs - as : as - hs;
  else if (b.mk === 'sp') d = (b.sel === 'h' ? hs - as : as - hs) + b.line;
  else d = b.sel === 'o' ? hs + as - b.line : b.line - (hs + as);
  return d > 0 ? 'won' : d < 0 ? 'lost' : 'push';
}
/* múltipla: cada seleção com o seu jogo; uma perdida → perdida; devolvidas contam odd 1 */
function newMulti(acc, legs, stake, extra) {
  const odd = r2(legs.reduce((a, l) => a * l.odd, 1));
  const b = Object.assign({ id: acc + 'm' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), acc, mk: 'multi', legs: legs.map(l => Object.assign({}, l)), g: legs[0].g, gl: legs.length + ' jogos', gd: legs.reduce((m, l) => l.gd > m ? l.gd : m, legs[0].gd), odd, stake: r2(stake), t: Date.now(), st: 'open', ret: 0, lb: 'Múltipla · ' + legs.length + ' seleções' }, extra || {});
  BETS.push(b); return b;
}
function settleMulti(b) {
  let eff = 1, pending = false, lost = false;
  b.legs.forEach(l => { const g = DB.games[l.g]; const r = g ? outcome(l, g) : null; l.r = r; if (g && g.hs != null) l.res = g.hs + '-' + g.as; if (r === null) pending = true; else if (r === 'lost') lost = true; else if (r === 'won') eff *= l.odd; });
  if (lost) { b.st = 'lost'; b.ret = 0; }
  else if (pending) return false;
  else { b.st = eff > 1.0001 ? 'won' : 'push'; b.ret = r2(b.stake * eff); }
  b.tset = Date.now(); return true;
}
function settleAll() {
  let n = 0;
  BETS.forEach(b => {
    if (b.st !== 'open') return;
    if (b.mk === 'multi') { if (settleMulti(b)) n++; return; }
    const g = DB.games[b.g]; if (!g) return;
    const r = outcome(b, g); if (!r) return;
    b.st = r; b.ret = r === 'won' ? r2(b.stake * b.odd) : (r === 'push' || r === 'void') ? b.stake : 0; b.res = g.hs != null ? g.hs + '-' + g.as : ''; b.tset = Date.now(); n++;
  });
  if (n) saveBets();
  safeGrade();
  return n;
}
/* 🤖 piloto: aposta sozinho em cada «valor» do Tó (uma por jogo, antes do início) */
/* =====================================================================
   🤖 Tó SOZINHO: um bot que aposta sozinho, sem ninguém lhe mexer.
   Regra fixa: em cada jogo das próximas 36 horas, aposta no vencedor que a
   cabeça dele (o modelo puro, sem copiar as odds) prefere, à odd da ESPN do
   momento. Valor fixo. Serve para ver como ele se porta de verdade.
   Teste às cegas 2024-25 e 2025-26 (1.785 jogos) às odds de fecho: acertou 66% e deu −3% por aposta.
   ===================================================================== */
const BOT_TEST = { acerto: 0.661, roi: -0.030, n: 1785, txt: '2024-26 (1.785 jogos): 66% · −3% por aposta' };
function pilotRun() {
  if (!CFG.piOn) return 0;
  const now = Date.now(); let n = 0;
  const done = new Set(BETS.filter(b => b.acc === 'pi' && b.mk !== 'multi').map(b => b.g));
  Object.values(DB.games).filter(g => gValid(g) && g.s === 'pre' && !done.has(g.id) && g.o && g.o.hml > 1 && g.o.aml > 1).sort((x, y) => x.d < y.d ? -1 : 1).forEach(g => {
    const t0 = new Date(g.d).getTime(); if (t0 < now + 5 * 60e3 || t0 > now + 36 * 3600e3) return;
    const P = predict(g), ph = Phi(P.mModel / SDM), sel = ph >= 0.5 ? 'h' : 'a', odd = sel === 'h' ? g.o.hml : g.o.aml;
    const nva = (1 / g.o.hml) / (1 / g.o.hml + 1 / g.o.aml);
    const stake = Math.max(CFG.min, r2(CFG.piStake)); if (accStats('pi').bal < stake) return;
    newBet('pi', g, { mk: 'ml', sel, line: null, odd }, stake, { auto: 1, pk: r2(sel === 'h' ? ph : 1 - ph), nv: r2(sel === 'h' ? nva : 1 - nva), src: g.o.p || 'ESPN' });
    n++;
  });
  if (n) saveBets();
  return n;
}
function botStats() {
  const B = BETS.filter(b => b.acc === 'pi' && b.auto), S = B.filter(b => b.st === 'won' || b.st === 'lost' || b.st === 'push');
  const w = S.filter(b => b.st === 'won').length, l = S.filter(b => b.st === 'lost').length;
  const plOf = L => r2(L.reduce((s, b) => s + (b.ret || 0) - b.stake, 0));
  const dog = S.filter(b => b.nv != null && b.nv < 0.5), fav = S.filter(b => b.nv != null && b.nv >= 0.5), conf = S.filter(b => b.pk >= 0.7);
  const st = S.reduce((s, b) => s + b.stake, 0), ret = S.reduce((s, b) => s + (b.ret || 0), 0);
  const byD = {}; S.forEach(b => { const k = String(b.gd).slice(0, 10); (byD[k] = byD[k] || []).push(b); });
  const days = Object.entries(byD).map(([k, L]) => ({ k, w: L.filter(b => b.st === 'won').length, l: L.filter(b => b.st === 'lost').length, pl: plOf(L) })).sort((a, b) => a.k < b.k ? 1 : -1);
  const byG = {}; S.forEach(b => { const k = ''; if (!k) return; const o = byG[k] = byG[k] || { n: 0, w: 0, pl: 0 }; o.n++; if (b.st === 'won') o.w++; o.pl += (b.ret || 0) - b.stake; });
  let run = 0; const curve = S.slice().sort((a, b) => (a.tset || a.t) - (b.tset || b.t)).map(b => (run += (b.ret || 0) - b.stake));
  return { n: B.length, open: B.filter(b => b.st === 'open').length, openL: B.filter(b => b.st === 'open'), w, l, p: S.length - w - l, hit: w + l ? w / (w + l) : null, roi: st ? (ret - st) / st : null, pl: r2(ret - st),
    dogN: dog.length, dogW: dog.filter(b => b.st === 'won').length, dogPl: plOf(dog), favN: fav.length, favW: fav.filter(b => b.st === 'won').length, favPl: plOf(fav), confN: conf.length, confW: conf.filter(b => b.st === 'won').length, days, byG, curve };
}


/* =====================================================================
   🛡️ BOLETIM SEGURO (como no Mister Zé: só jogos do próprio dia)
   Cada seleção com ≥85% para o Tó; junta-as enquanto o boletim inteiro
   fica ≥70%. No basket não há empate nem dupla hipótese, por isso usa:
   favorito a ganhar, handicap alternativo e total alternativo — sempre
   no lado para onde o Tó inclina em relação à casa de apostas.
   As odds das linhas alternativas são estimadas: mete as da Betano.
   ===================================================================== */
const SAFE_LEG = 0.85, SAFE_SLIP = 0.70, Z86 = 1.08;
const half = v => Math.round(v - 0.5) + 0.5;                          // linha acabada em ,5 (sem devolução)
function safeCands(dayOff) {
  const d = ymdAdd(todayET(), dayOff), now = Date.now(), out = [];
  Object.values(DB.games).filter(g => gValid(g) && g.s === 'pre' && g.ed === d && new Date(g.d).getTime() > now + 10 * 60e3).forEach(g => {
    const P = predict(g), o = g.o || {};
    const mm = o.hl != null ? -o.hl : P.m, mt = o.tl != null ? o.tl : P.t;
    const estOdd = pm => r2(Math.max(1.01, 1 / (Math.min(0.97, pm) * 1.045)));
    const opts = [];
    // a) favorito ganha
    const sH = P.m >= 0, pML = probs(P, 'ml', sH ? 'h' : 'a').w, pMm = Phi((sH ? mm : -mm) / SDM);
    const mlC = P.cands.find(c => c.mk === 'ml' && c.sel === (sH ? 'h' : 'a') && !c.der && !c.sus);
    opts.push({ mk: 'ml', sel: sH ? 'h' : 'a', line: null, p: pML, odd: mlC ? mlC.odd : estOdd(pMm), est: !mlC });
    // b) handicap alternativo no lado do Tó
    const side = P.m - mm >= 0 ? 'h' : 'a';
    const L = side === 'h' ? half(Z86 * SDM - mm) : half(mm + Z86 * SDM);
    const pMs = side === 'h' ? 1 - Phi((-L - mm) / SDM) : Phi((L - mm) / SDM);
    opts.push({ mk: 'sp', sel: side, line: L, p: probs(P, 'sp', side, L).w, odd: estOdd(pMs), est: true });
    // c) total alternativo no lado do Tó
    const ov = P.t - mt >= 0, TL = ov ? half(mt - Z86 * SDT) : half(mt + Z86 * SDT);
    const pMt = ov ? 1 - Phi((TL - mt) / SDT) : Phi((TL - mt) / SDT);
    opts.push({ mk: 'tot', sel: ov ? 'o' : 'u', line: TL, p: probs(P, 'tot', ov ? 'o' : 'u', TL).w, odd: estOdd(pMt), est: true });
    bossPool(g, opts);
    const best = opts.filter(x => x.p >= SAFE_LEG).sort((a, b) => b.p - a.p)[0];
    if (best) out.push(Object.assign(best, { g, lb: selLabel(g, best.mk, best.sel, best.line) }));
  });
  return out.sort((a, b) => b.p - a.p);
}
function safeAuto(C) {
  const pick = new Set(); let P = 1;
  C.forEach((c, i) => { if (pick.size < 5 && (i === 0 || P * c.p >= SAFE_SLIP)) { P *= c.p; pick.add(i); } });
  return pick;
}
const safeLeg = (c, odd) => ({ g: c.g.id, gl: gLabel(c.g), gd: c.g.d, mk: c.mk, sel: c.sel, line: c.line, odd: r2(odd || c.odd), lb: c.lb, p: r2(c.p), est: !!c.est });
/* diário do seguro: cada seleção que o Tó escolheu, uma vez */
function safeLogSave(list) {
  const L = LS.get('safe', {}); let ch = false;
  list.forEach(c => { const k = c.g.id + '|' + c.mk + '|' + c.sel + '|' + c.line; if (L[k]) return; L[k] = { g: c.g.id, mk: c.mk, sel: c.sel, line: c.line, p: r2(c.p), t: Date.now() }; ch = true; });
  const ks = Object.keys(L); if (ks.length > 500) ks.sort((a, b) => L[a].t - L[b].t).slice(0, ks.length - 500).forEach(k => delete L[k]);
  if (ch) LS.set('safe', L);
}
function safeGrade() {
  const L = LS.get('safe', {}); let ch = false;
  Object.values(L).forEach(l => { if (l.w != null) return; const g = DB.games[l.g]; if (!g) return; const r = outcome(l, g); if (r === 'won') l.w = 1; else if (r === 'lost') l.w = 0; else if (r) l.w = -1; else return; ch = true; });
  if (ch) LS.set('safe', L);
}
function safeStats() {
  const g = Object.values(LS.get('safe', {})).filter(l => l.w === 0 || l.w === 1);
  return g.length ? { n: g.length, w: g.filter(l => l.w === 1).length, p: g.reduce((a, l) => a + l.p, 0) / g.length } : null;
}

/* =====================================================================
   📊 CARTÃO DA EQUIPA (estilo jogo: 0–99)
   ===================================================================== */
function teamRt(t) {
  const M = getModel(), r = M.rec[t] || { w: 0, l: 0, hw: 0, hl: 0, aw: 0, al: 0, pf: 0, pa: 0, last: [] };
  const gp = r.w + r.l, l10 = (r.last || []).slice(-10), wf = l10.length ? l10.filter(x => x.w).length / l10.length : 0.5;
  const hp = r.hw + r.hl ? r.hw / (r.hw + r.hl) : 0.5, ap = r.aw + r.al ? r.aw / (r.aw + r.al) : 0.5;
  const tot = gp ? (r.pf + r.pa) / gp : 2 * M.L;
  const k = v => Math.round(clamp(v, 25, 99));
  return { ovr: k(78 + M.net(t) * 1.8), atk: k(76 + (M.off[t] || 0) * 2.4), def: k(76 - (M.def[t] || 0) * 2.4), form: k(45 + wf * 54), home: k(42 + hp * 57), away: k(42 + ap * 57), pace: k(72 + (tot - 2 * M.L) * 1.1), gp, l10 };
}

/* =====================================================================
   📤 FICHA PARA O MISTER BOSS
   Em cada atualização, o Tó deixa no telemóvel as seleções do dia que
   passam dos 80% (e as apostas de valor), e confere as antigas com o seu
   próprio código de liquidação. O Mister Boss só lê esta ficha.
   ===================================================================== */
let BPOOL = null;
function bossPool(g, opts) {
  if (!BPOOL) return;
  opts.forEach(x => { const p = x.c != null ? x.c : x.p; if (p >= 0.80 && p <= 0.985) BPOOL.push({ g, mk: x.mk, sel: x.sel, line: x.line == null ? null : x.line, p, odd: x.odd || null, est: x.est !== false }); });
}
function bossFeed() {
  try {
    const F = LS.get('boss', null) || { v: 1, legs: {} }, now = Date.now();
    const gameOf = id => DB.games[id], segOf = g => ({ lg: 'NBA' }), glOf = g => gLabel(g);
    BPOOL = []; [0, 1].forEach(d => { try { safeCands(d); } catch (e) {} }); const pool = BPOOL; BPOOL = null;
    Object.values(DB.games).filter(g => g && g.s === 'pre' && new Date(g.d).getTime() > now && new Date(g.d).getTime() < now + 36 * 3600e3).forEach(g => {
      try { const v = predict(g).value; if (v) pool.push({ g, mk: v.mk, sel: v.sel, line: v.line == null ? null : v.line, p: v.p, odd: v.odd, est: false, val: r2(v.ev) }); } catch (e) {}
    });
    pool.forEach(x => {
      const id = x.g.id + '|' + x.mk + '|' + x.sel + '|' + x.line + (x.val != null ? '|v' : ''), L = F.legs[id];
      const rec = { id, g: x.g.id, gl: glOf(x.g), d: x.g.d, mk: x.mk, mkn: mkName(x.mk), sel: x.sel, line: x.line, lb: selLabel(x.g, x.mk, x.sel, x.line), p: Math.round(x.p * 1000) / 1000, odd: x.odd ? r2(x.odd) : null, est: !!x.est, val: x.val != null ? x.val : null, seg: segOf(x.g), st: 'open', t: now };
      if (!L) F.legs[id] = rec; else if (L.st === 'open' && new Date(L.d).getTime() > now) Object.assign(L, { p: rec.p, odd: rec.odd, est: rec.est, val: rec.val, t: now });
    });
    Object.values(F.legs).forEach(l => { if (l.st !== 'open') return; const g = gameOf(l.g); if (!g) return; let r = null; try { r = outcome(l, g); } catch (e) {} if (r) { l.st = r; l.tset = now; } });
    const ks = Object.keys(F.legs); if (ks.length > 900) ks.sort((a, b) => F.legs[a].t - F.legs[b].t).slice(0, ks.length - 900).forEach(k => delete F.legs[k]);
    Object.assign(F, { app: 'to', name: 'Mister Tó', sport: 'Basquetebol · NBA', ver: APP_VER, t: now });
    LS.set('boss', F);
  } catch (e) { console.warn('bossFeed', e); }
}
