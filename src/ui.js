/* =====================================================================
   5) ÍCONES (desenho próprio, traço simples)
   ===================================================================== */
const ICP = {
  ball: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3v18M5.6 5.6c3 3 3 9.8 0 12.8M18.4 5.6c-3 3-3 9.8 0 12.8"/>',
  vs: '<path d="M5 5l9 9M19 5l-9 9M12.5 15.5l3-3M8.5 12.5l3 3M15 15l4 4M9 15l-4 4M5 5h3M5 5v3M19 5h-3M19 5v3"/>',
  wallet: '<rect x="3" y="6" width="18" height="14" rx="1.5"/><path d="M3 10h18M16 15h2M6 6V4.5h11"/>',
  grid: '<rect x="4" y="4" width="6.5" height="6.5"/><rect x="13.5" y="4" width="6.5" height="6.5"/><rect x="4" y="13.5" width="6.5" height="6.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.9-3.5M4 4v4h4M4 13a8 8 0 0 0 14.9 3.5M20 20v-4h-4"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 20h8M10 17h4"/>',
  book: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3zM5 17a3 3 0 0 1 3-3h11M9 8h6"/>',
  chip: '<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4M10 10h4v4h-4z"/>',
  gear: '<circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="7"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  save: '<path d="M5 4h11l3 3v13H5zM8 4v5h7V4M8 20v-6h8v6"/>',
  pulse: '<path d="M3 12h4l2-6 4 12 2-6h6"/>',
  phone: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18.5h2M12 6v7M9.5 10.5 12 13l2.5-2.5"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  gem: '<path d="M6 4h12l3 5-9 11L3 9zM3 9h18M9 4 7.5 9 12 20l4.5-11L15 4"/>',
  fire: '<path d="M12 3c1 4 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4 2-7 1 1 2 2 2 4 1-2 1-4 1-7z"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bandage: '<rect x="2.5" y="8.5" width="19" height="7" rx="3.5" transform="rotate(-45 12 12)"/><path d="M10.5 10.5h.01M13.5 13.5h.01M12 12h.01"/>',
  chart: '<path d="M4 20V11M10 20V5M16 20v-7M2 20h20"/>',
  star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  robot: '<rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4.5V8M9 13h.01M15 13h.01M9 16h6M3 12v3M21 12v3"/><circle cx="12" cy="3.5" r="1"/>',
  whistle: '<path d="M3 11a5 5 0 1 0 9.6 2H21V9h-9.6A5 5 0 0 0 3 11zM8 11h.01M14 9V6"/>',
  share: '<circle cx="18" cy="5" r="2.5"/><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="19" r="2.5"/><path d="M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4"/>',
  print: '<path d="M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7z"/>',
  download: '<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  check: '<path d="M5 12l5 5 9-10"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  coins: '<ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  court: '<rect x="3" y="4" width="18" height="16"/><path d="M3 12h18"/><circle cx="12" cy="12" r="3"/><path d="M8 4v3a4 4 0 0 0 8 0V4M8 20v-3a4 4 0 0 1 8 0v3"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  home: '<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>'
};
const ic = (n, cls) => `<svg class="i ${cls || ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICP[n] || ''}</svg>`;
const attr = (label, v, color, txt, max) => `<div class="at" style="--k:${color}"><div class="l"><span>${label}</span><span class="v">${txt != null ? txt : `${v} <small>/ ${max || 99}</small>`}</span></div><div class="bar"><i style="width:${clamp(v / (max || 99) * 100, 0, 100).toFixed(1)}%"></i></div></div>`;
const catH = (icon, text, color, right) => `<div class="cat" style="--k:${color}">${ic(icon)}${text}${right ? `<span class="muted small" style="margin-left:auto;text-transform:none;letter-spacing:0">${right}</span>` : ''}</div>`;
const pnH = (title, right) => `<div class="pn-h">${title}${right ? `<span class="r">${right}</span>` : ''}</div><div class="div"></div>`;

%%FACE%%

/* =====================================================================
   6) ECRÃS
   ===================================================================== */
const VIEWS = ['inicio', 'jogos', 'duelo', 'contas', 'mais'];
let VIEW = (location.hash || '#inicio').slice(1); if (VIEW === 'hoje') VIEW = 'jogos';
if (!VIEWS.includes(VIEW)) VIEW = 'inicio';
let DAY = 0, ACCF = 'all', BT = 'seg', GT = 'ana', SORT = LS.get('sort', 'hora');
function go(v) { VIEW = v; history.replaceState(null, '', '#' + v); render(); window.scrollTo(0, 0); }
function setUpd(t) { $('#upd').textContent = t; }
const tCol = id => '#' + ((DB.teams[id] && DB.teams[id].c) || '33425a');
function logo(id, sz) {
  const t = DB.teams[id] || { ab: '?', c: '33425a', c2: 'ff7a1a' };
  const s = sz ? `width:${sz}px;height:${sz}px;flex-basis:${sz}px;font-size:${sz / 3.3}px;` : '';
  return `<span class="logo" style="${s}background:linear-gradient(160deg,#${esc(t.c)},#${esc(t.c)}aa 60%,#${esc(t.c2)}88)">${esc(t.ab)}</span>`;
}
function renderTop() {
  const s = k => accStats(k);
  $('#chips').innerHTML = ['tu', 'to', 'pi'].map(k => `<span class="st" style="--k:${ACC[k].c}" onclick="ACCF='${k}';go('contas')">${ic(ACC[k].ic)}${eur(s(k).bal)}</span>`).join('');
  const last = LS.get('last', 0);
  setUpd(last ? 'Atualizado ' + new Date(last).toLocaleString('pt-PT', { weekday: 'short', hour: '2-digit', minute: '2-digit' }) + ' · toca em ↻ para ir à ESPN' : 'Ainda sem dados · toca em ↻ para o Tó ir buscar os jogos');
  const nOpen = BETS.filter(b => b.acc === 'tu' && b.st === 'open').length;
  document.querySelectorAll('#nav button').forEach(b => {
    b.classList.toggle('on', b.dataset.v === VIEW);
    const old = b.querySelector('.nb'); if (old) old.remove();
    if (b.dataset.v === 'contas' && nOpen) b.insertAdjacentHTML('beforeend', `<span class="nb">${nOpen}</span>`);
  });
}
function render() {
  renderTop();
  const v = $('#view');
  if (VIEW === 'inicio') v.innerHTML = viewInicio();
  else if (VIEW === 'jogos') v.innerHTML = viewJogos();
  else if (VIEW === 'duelo') v.innerHTML = viewDuelo();
  else if (VIEW === 'contas') v.innerHTML = viewContas();
  else v.innerHTML = viewMais();
  if (VIEW === 'jogos') ssSum();
}
function dayGames(off) {
  const d = ymdAdd(todayET(), off);
  return Object.values(DB.games).filter(g => gValid(g) && g.ed === d).sort((x, y) => x.d < y.d ? -1 : 1);
}
const nmLg = id => { const n = tName(id), w = Math.max(...n.split(/\s+/).map(x => x.length)); return w >= 10 ? ' xl' : w >= 7 ? ' lg' : ''; };
const f1 = v => Math.abs(v).toFixed(1).replace('.', ',');
const okIc = ok => ok == null ? '<span class="muted">—</span>' : ok ? `<span class="pos">${ic('check')}</span>` : `<span class="neg">${ic('x')}</span>`;

/* ---------- veredito: o que o Tó guardou antes do jogo vs o resultado ---------- */
function verdict(g) {
  const p = PREDS[g.id]; if (!p || g.s !== 'post' || g.hs == null) return null;
  const act = g.hs - g.as, tot = g.hs + g.as;
  const v = { p, win: Math.sign(p.m) === Math.sign(act), fav: p.m >= 0 ? g.h : g.a, by: Math.abs(p.m) };
  if (p.hl != null) { const side = Math.sign(p.m + p.hl), r = Math.sign(act + p.hl); v.sp = side && r ? side === r : null; }
  if (p.tl != null) { const side = Math.sign(p.t - p.tl), r = Math.sign(tot - p.tl); v.tot = side && r ? side === r : null; }
  if (p.pk) { const o = outcome({ mk: p.pk.mk, sel: p.pk.sel, line: p.pk.line }, g); v.pk = p.pk; v.pkr = o; v.pku = o === 'won' ? p.pk.odd - 1 : o === 'lost' ? -1 : 0; }
  return v;
}
function dayVerdict(off) {
  const G = dayGames(off).filter(g => g.s === 'post'); let n = 0, w = 0, bn = 0, bw = 0, u = 0;
  const bets = [];
  G.forEach(g => { const v = verdict(g); if (!v) return; n++; if (v.win) w++; if (v.pk && (v.pkr === 'won' || v.pkr === 'lost')) { bn++; if (v.pkr === 'won') bw++; u += v.pku; bets.push({ g, v }); } });
  const S = SLIPS[ymdAdd(todayET(), off)], sr = S ? slipResult(S) : null;
  return { n, w, bn, bw, u, S, sr, bets, G };
}
const unitsTxt = u => (u > 0 ? '+' : u < 0 ? '−' : '') + Math.abs(u).toFixed(2).replace('.', ',') + ' u';

/* ---------- INÍCIO ---------- */
function viewInicio() {
  const G0 = dayGames(0), pre = G0.filter(g => g.s === 'pre'), live = G0.filter(g => g.s === 'in').length;
  const Y = dayVerdict(-1), S0 = SLIPS[todayET()], ST = statsAll();
  const picks = pre.map(g => ({ g, P: predict(g) })).filter(x => x.P.value).sort((a, b) => b.P.value.ev - a.P.value.ev);
  const first = pre[0] || G0[0];
  if (!Object.keys(DB.games).length) return installBanner() + `<div class="pn empty" style="margin-top:14px"><div class="face">${toFace('ok')}</div><div class="pn-h" style="justify-content:center">Olá! Sou o Mister Tó.</div><div class="muted small" style="margin:6px 0 14px">Só percebo de basket. Estudo a força de cada equipa, os jogadores, as lesões e o cansaço, comparo com as odds e faço duelos contigo.</div><button class="btn fill" onclick="refresh()">${ic('refresh')} Ir buscar os jogos</button></div>`;
  let h = `<div class="pn hero"><span class="tag">Esta noite na NBA</span>
    <div class="big">${G0.length} jogo${G0.length === 1 ? '' : 's'}</div>
    <div class="sub">${live ? live + ' a decorrer agora. ' : first ? '1.º às ' + hhmm(first.d) + ' (hora de cá). ' : ''}${picks.length || S0 ? 'O meu boletim está pronto.' : pre.length ? 'Hoje não vejo nada claro.' : ''}</div>
    <div class="face">${toFace(Y.bn && Y.u < 0 ? 'sad' : 'win')}</div>
    <div class="kpis"><div class="kpi" style="--k:var(--c-green)"><small>Ontem · vencedores</small><b>${Y.n ? Y.w + '/' + Y.n : '—'}</b></div>
      <div class="kpi" style="--k:var(--c-orange)"><small>Ontem · apostas</small><b class="${Y.u > 0 ? 'pos' : Y.u < 0 ? 'neg' : ''}">${Y.bn ? Y.bw + '/' + Y.bn : '—'}</b></div>
      <div class="kpi" style="--k:var(--teal)"><small>Ontem · seguro</small><b>${Y.sr ? (Y.sr.st === 'won' ? '<span class="pos">✓</span>' : Y.sr.st === 'lost' ? '<span class="neg">✗</span>' : '…') : '—'}</b></div></div></div>`;
  h += installBanner();
  // veredito de ontem
  h += `<div class="pn hl">${pnH(`${ic('check')} Veredito de ontem`, Y.G.length + ' jogos')}`;
  if (!Y.n) h += `<div class="small muted">${Y.G.length ? 'O Tó não tinha previsões guardadas para ontem (só guarda quando tocas em ↻ antes dos jogos).' : 'Ontem não houve jogos.'}</div>`;
  else {
    h += attr('Acertou no vencedor', Math.round(Y.w / Y.n * 100), 'var(--c-green)', `${Y.w} de ${Y.n}`, 100);
    h += Y.bets.length ? catH('gem', 'Apostas que o Tó guardou', 'var(--c-orange)', `${Y.bw}/${Y.bn} · <b class="${Y.u >= 0 ? 'pos' : 'neg'}">${unitsTxt(Y.u)}</b>`) + Y.bets.map(({ g, v }) => `<div class="why" onclick="GT='ana';openGame('${g.id}')"><span>${okIc(v.pkr === 'won')} ${esc(v.pk.lb)} <span class="muted small">@ ${odd2(v.pk.odd)} · ${esc(tAb(g.h))} ${g.hs}–${g.as} ${esc(tAb(g.a))}</span></span><b class="${v.pku >= 0 ? 'pos' : 'neg'}">${unitsTxt(v.pku)}</b></div>`).join('')
      : `<div class="small muted" style="margin:8px 0">O Tó não encontrou valor ontem: não apostou.</div>`;
    if (Y.S) h += catH('shield', 'Boletim seguro de ontem', 'var(--teal)', Y.sr.st === 'won' ? '<b class="pos">ganhou</b>' : Y.sr.st === 'lost' ? '<b class="neg">perdeu</b>' : 'em curso') + Y.S.legs.map(l => `<div class="why"><span>${okIc(l.r == null ? null : l.r !== 'lost')} ${esc(l.lb)}</span><b class="muted">${pct(l.p)}</b></div>`).join('');
  }
  h += `<button class="btn go full" style="margin-top:10px" onclick="DAY=-1;go('jogos')">${ic('list')} Ver os jogos de ontem</button></div>`;
  // o que o Tó guardou para esta noite
  if (pre.length) {
    h += `<div class="pn">${pnH(`${ic('target')} O Tó guardou para esta noite`, '')}`;
    if (S0) h += catH('shield', 'Boletim seguro', 'var(--teal)', `Tó ${pct(S0.p)} · @ ${S0.odd.toFixed(2)}`) + S0.legs.map(l => `<div class="why"><span>${esc(l.lb)} <span class="muted small">${esc(l.gl)}</span></span><b>${pct(l.p)}</b></div>`).join('');
    if (picks.length) h += catH('gem', 'Apostas com valor', 'var(--c-orange)', picks.length + '') + picks.slice(0, 4).map(({ g, P }) => `<div class="why" onclick="GT='mk';openGame('${g.id}')"><span>${esc(selLabel(g, P.value.mk, P.value.sel, P.value.line))} <span class="muted small">${esc(tAb(g.h))}–${esc(tAb(g.a))} ${hhmm(g.d)}</span></span><b>@ ${odd2(P.value.odd)} <span class="pos small">${sPct(P.value.ev)}</span></b></div>`).join('');
    const pp = pre.flatMap(g => propPicks(g)).sort((a, b) => b.p - a.p).slice(0, 3);
    if (pp.length) h += catH('star', 'Jogadores em destaque', 'var(--c-blue)') + pp.map(x => `<div class="why" onclick="GT='jog';openGame('${x.g.id}')"><span>${esc(x.P.n)} · mais de ${String(x.line).replace('.', ',')} ${STATN[x.k]} <span class="muted small">${esc(tAb(x.P.t))}</span></span><b>${pct(x.p)}</b></div>`).join('');
    if (!S0 && !picks.length && !pp.length) h += `<div class="small muted">Nada com confiança suficiente esta noite. Às vezes o melhor é não apostar.</div>`;
    h += `<button class="btn fill full" style="margin-top:10px" onclick="DAY=0;BT='seg';go('jogos')">${ic('ball')} Abrir os jogos e o boletim</button></div>`;
  }
  // como vai o Tó
  h += `<div class="pn">${pnH(`${ic('chart')} Como vai o Tó`, ST.n + ' jogos previstos')}`;
  h += ST.n ? attr('Vencedor certo', Math.round(ST.win / ST.n * 100), 'var(--c-green)', pct(ST.win / ST.n), 100) +
    (ST.spN ? attr('Lado certo no handicap', Math.round(ST.spW / ST.spN * 100), 'var(--c-blue)', `${pct(ST.spW / ST.spN)} <small>(precisa de 52,4%)</small>`, 100) : '') +
    (ST.bn ? attr('Apostas do Tó', clamp(50 + ST.bu / ST.bn * 100, 0, 100), ST.bu >= 0 ? 'var(--c-green)' : 'var(--c-red)', `${ST.bw}/${ST.bn} · ${unitsTxt(ST.bu)}`, 100) : '')
    : `<div class="small muted">As estatísticas enchem-se sozinhas: toca em ↻ todos os dias antes dos jogos.</div>`;
  h += `<button class="btn go full" style="margin-top:8px" onclick="openStats()">${ic('chart')} Estatísticas completas</button></div>`;
  return h;
}

/* ---------- JOGOS ---------- */
function sortGames(G) {
  const conf = g => { const p = g.s === 'pre' ? predict(g).pH : (PREDS[g.id] ? PREDS[g.id].pH : predict(g).pH); return Math.max(p, 1 - p); };
  const val = g => { if (g.s !== 'pre') { const p = PREDS[g.id]; return p && p.pk ? p.pk.ev : -1; } const v = predict(g).value; return v ? v.ev : -1; };
  if (SORT === 'conf') return G.slice().sort((a, b) => conf(b) - conf(a));
  if (SORT === 'val') return G.slice().sort((a, b) => val(b) - val(a) || (a.d < b.d ? -1 : 1));
  return G;
}
function viewJogos() {
  const G = dayGames(DAY), pre = G.filter(g => g.s === 'pre');
  const picks = pre.map(g => ({ g, P: predict(g) })).filter(x => x.P.value).sort((a, b) => b.P.value.ev - a.P.value.ev);
  const C = DAY >= 0 ? safeCands(DAY) : [];
  const auto = safeAuto(C);
  let h = `<div class="tabs">${['Ontem', 'Esta noite', 'Amanhã'].map((t, i) => `<button class="${DAY === i - 1 ? 'on' : ''}" onclick="DAY=${i - 1};render()">${t}</button>`).join('')}</div>`;
  if (DAY >= 0 && pre.length) h += boletimPanel(C, auto, picks);
  else if (G.some(g => g.s === 'post')) h += pastPanel(DAY);
  if (G.length) {
    h += `<div class="row" style="margin:14px 0 4px"><div class="cat" style="--k:var(--c-blue);margin:0;flex:1">${ic('cal')}Jogos</div><button class="btn sm" onclick="openHelp()" aria-label="Ajuda">${ic('info')} O que quer dizer?</button></div>
      <div class="seg" style="margin-bottom:6px">${[['hora', 'Hora'], ['conf', 'Confiança'], ['val', 'Valor']].map(([k, t]) => `<button class="${SORT === k ? 'on' : ''}" onclick="SORT='${k}';LS.set('sort','${k}');render()">${t}</button>`).join('')}</div>` + sortGames(G).map(gameCard).join('');
  } else h += `<div class="pn small muted">${Object.keys(DB.games).length ? 'Não há jogos da NBA neste dia.' : 'Toca em ↻ para o Tó ir buscar os jogos.'}</div>`;
  return h;
}
/* boletim de um dia que já passou: o que o Tó tinha guardado e se ganhou */
function pastPanel(off) {
  const Y = dayVerdict(off);
  let h = `<div class="pn hl">${pnH(`${ic('check')} Veredito do dia`, Y.n ? `vencedor ${Y.w}/${Y.n}` : '')}`;
  if (!Y.n && !Y.S) return h + `<div class="small muted">O Tó não tinha previsões guardadas para este dia.</div></div>`;
  if (Y.S) h += catH('shield', 'Boletim seguro', 'var(--teal)', `${Y.sr.w}/${Y.sr.n} · ${Y.sr.st === 'won' ? '<b class="pos">ganhou</b>' : Y.sr.st === 'lost' ? '<b class="neg">perdeu</b>' : 'em curso'}`) + Y.S.legs.map(l => `<div class="why"><span>${okIc(l.r == null ? null : l.r !== 'lost')} ${esc(l.lb)} <span class="muted small">${esc(l.gl)}</span></span><b class="muted">${pct(l.p)} · @ ${odd2(l.odd)}</b></div>`).join('');
  h += catH('gem', 'Apostas com valor', 'var(--c-orange)', Y.bn ? `${Y.bw}/${Y.bn} · <b class="${Y.u >= 0 ? 'pos' : 'neg'}">${unitsTxt(Y.u)}</b>` : '') +
    (Y.bets.length ? Y.bets.map(({ g, v }) => `<div class="why"><span>${okIc(v.pkr === 'won')} ${esc(v.pk.lb)} <span class="muted small">@ ${odd2(v.pk.odd)}</span></span><b class="${v.pku >= 0 ? 'pos' : 'neg'}">${unitsTxt(v.pku)}</b></div>`).join('') : '<div class="small muted">O Tó não apostou neste dia (nada com valor).</div>');
  const pr = Object.values(PROPS).filter(x => DB.games[x.g] && DB.games[x.g].ed === ymdAdd(todayET(), off) && x.w != null && x.w >= 0);
  if (pr.length) h += catH('star', 'Jogadores', 'var(--c-blue)', `${pr.filter(x => x.w === 1).length}/${pr.length}`) + pr.slice(0, 8).map(x => `<div class="why"><span>${okIc(x.w === 1)} ${esc(x.n)} · mais de ${String(x.line).replace('.', ',')} ${STATN[x.k]}</span><b class="muted">fez ${x.v}</b></div>`).join('');
  return h + `<div class="small muted" style="margin-top:6px">u = unidades (1 u = o valor de uma aposta). Tudo foi guardado antes de cada jogo começar.</div></div>`;
}

/* ---------- 🛡️ BOLETIM DE HOJE ---------- */
let SS = { k: '', C: [], sel: new Set(), odd: {} };
const legKey = c => c.g.id + '|' + c.mk + '|' + c.sel + '|' + c.line;
function boletimPanel(C, auto, picks) {
  const k = DAY + '|' + todayET();
  if (SS.k !== k) { SS = { k, C, sel: new Set(C.filter((_, i) => auto.has(i)).map(legKey)), odd: {}, stake: Math.max(CFG.min, 1) }; }
  SS.C = C; SS.auto = new Set(C.filter((_, i) => auto.has(i)).map(legKey));
  if (C.length) safeLogSave(C.filter((_, i) => auto.has(i)));
  const pre = dayGames(DAY).filter(g => g.s === 'pre');
  const PP = pre.flatMap(g => propPicks(g)).filter(x => x.p >= 0.72).sort((a, b) => b.p - a.p).slice(0, 14);
  if (PP.length) propLogSave(PP.slice(0, 10));
  let h = `<div class="pn hl">${pnH(`${ic('target')} Boletim ${DAY ? 'de amanhã' : 'de hoje'}`, DAY ? 'só jogos de amanhã' : 'só jogos desta noite')}
    <div class="seg"><button class="${BT === 'seg' ? 'on' : ''}" onclick="BT='seg';render()">${ic('shield')} Seguro</button><button class="${BT === 'val' ? 'on' : ''}" onclick="BT='val';render()">${ic('gem')} Valor${picks.length ? ' ' + picks.length : ''}</button><button class="${BT === 'jog' ? 'on' : ''}" onclick="BT='jog';render()">${ic('star')} Jogadores</button></div>`;
  if (BT === 'seg') {
    if (!C.length) h += `<div class="small muted" style="margin-top:10px">Nenhuma seleção chega aos ${pct(SAFE_LEG)}. Melhor não forçar.</div>`;
    else {
      h += `<div class="small muted" style="margin:10px 0 2px">As seleções mais seguras, juntas enquanto o boletim inteiro passa dos ${pct(SAFE_SLIP)}. <b>Seguro não é certo</b>: num boletim de 70%, 3 em cada 10 falham. As caixas amarelas têm odd estimada: mete a da Betano.</div>` +
        C.map((c, i) => { const key = legKey(c), od = SS.odd[key] != null ? SS.odd[key] : c.odd; return `<div class="leg"><input type="checkbox" ${SS.sel.has(key) ? 'checked' : ''} onchange="ssTog(${i},this.checked)">
        <div><div class="t">${esc(c.lb)}</div><div class="g">${hhmm(c.g.d)} · ${esc(tAb(c.g.h))} – ${esc(tAb(c.g.a))} · ${esc(mkName(c.mk))}</div><div class="p">Tó ${pct(c.p)}</div></div>
        <input class="od${c.est && SS.odd[key] == null ? ' est' : ''}" inputmode="decimal" value="${String(od).replace('.', ',')}" oninput="ssOdd(${i},this)"></div>`; }).join('') + `<div class="sum" id="ssSum"></div>`;
    }
    const st = safeStats();
    if (st) h += `<div class="small muted" style="margin-top:8px">${ic('chart')} Seguro até hoje: acertou <b>${st.w}/${st.n}</b> seleções (${pct(st.w / st.n)}) · prometia ${pct(st.p)}</div>`;
  } else if (BT === 'val') {
    h += picks.length ? picks.map(({ g, P }) => { const v = P.value, i = P.cands.indexOf(v); return `<div class="pick"><div style="min-width:0"><div class="g">${hhmm(g.d)} · ${esc(tAb(g.h))} – ${esc(tAb(g.a))} · ${esc(mkName(v.mk))}</div><div class="l">${esc(selLabel(g, v.mk, v.sel, v.line))}</div><div class="g" style="text-transform:none">Tó ${pct(v.p)} · odd justa ${odd2(v.fair)}${v.der ? ' · odd estimada' : ''}</div></div>
      <div class="o">${odd2(v.odd)}<small>valor ${sPct(v.ev)}</small></div><button class="btn go sm" onclick="openBet('${g.id}',${i})">Apostar</button></div>`; }).join('') + `<div class="small muted" style="margin-top:8px">«Valor» = a odd da casa paga mais do que o Tó acha justo. Ex.: o Tó dá 55% → odd justa 1,82; se a casa paga 1,95, há valor. Não é certeza: é vantagem a longo prazo.</div>`
      : `<div class="small muted" style="margin-top:10px">O Tó não encontra odds com pelo menos ${pct(CFG.evMin)} de valor. Não apostar também é uma decisão.</div>`;
  } else {
    if (!Object.keys(PL.p).length) h += `<div class="small muted" style="margin:10px 0">O Tó ainda não estudou os jogadores. Toca em ↻ (estuda 25 jogos de cada vez) ou estuda tudo de uma vez:</div><button class="btn go full" onclick="openPlayers()">${ic('star')} Estudar jogadores</button>`;
    else if (!PP.length) h += `<div class="small muted" style="margin-top:10px">Ainda sem jogadores com dados suficientes nestes jogos.</div>`;
    else h += `<div class="small muted" style="margin:10px 0 2px">Linhas «seguras» por jogador (o Tó dá ~75-85%). A casa costuma pagar pouco por estas: compara com a odd justa.</div>` +
      PP.map(x => `<div class="pick" onclick="GT='jog';openGame('${x.g.id}')"><div style="min-width:0"><div class="g">${hhmm(x.g.d)} · ${esc(tAb(x.P.t))} vs ${esc(tAb(x.P.t === x.g.h ? x.g.a : x.g.h))}</div><div class="l">${esc(x.P.n)} · mais de ${String(x.line).replace('.', ',')} ${STATN[x.k]}</div><div class="g" style="text-transform:none">previsão ${x.m.toFixed(1).replace('.', ',')} · média ${pStats(x.P)[x.k].toFixed(1).replace('.', ',')}</div></div><div class="o">${pct(x.p)}<small>justa ${odd2(x.fair)}</small></div></div>`).join('');
    const ps = propStats();
    if (ps) h += `<div class="small muted" style="margin-top:8px">${ic('chart')} Jogadores até hoje: ${ps.w}/${ps.n} (${pct(ps.w / ps.n)}) · prometia ${pct(ps.p)}</div>`;
  }
  return h + '</div>';
}
function propStats() { const g = Object.values(PROPS).filter(x => x.w === 0 || x.w === 1); return g.length ? { n: g.length, w: g.filter(x => x.w === 1).length, p: g.reduce((a, x) => a + x.p, 0) / g.length } : null; }

function ssTog(i, on) { const k = legKey(SS.C[i]); if (on) SS.sel.add(k); else SS.sel.delete(k); ssSum(); }
function ssOdd(i, el) { const v = num(el.value); SS.odd[legKey(SS.C[i])] = v; el.classList.remove('est'); ssSum(); }
const ssLegs = () => SS.C.filter(c => SS.sel.has(legKey(c))).map(c => ({ c, odd: SS.odd[legKey(c)] != null ? SS.odd[legKey(c)] : c.odd }));
function ssSum() {
  const el = $('#ssSum'); if (!el) return;
  const L = ssLegs();
  if (!L.length) { el.innerHTML = '<span class="muted">Escolhe pelo menos uma seleção.</span>'; return; }
  const P = L.reduce((a, x) => a * x.c.p, 1), O = L.reduce((a, x) => a * (x.odd > 1 ? x.odd : 1), 1), ev = P * O - 1;
  el.innerHTML = `<div class="n"><span>${L.length} seleç${L.length === 1 ? 'ão' : 'ões'} · Tó dá <b class="pos" style="font-size:1.1rem">${pct(P)}</b></span><b>@ ${O.toFixed(2)}</b></div>
   <div class="small ${ev >= 0 ? 'pos' : 'muted'}">${ev >= 0 ? 'Com estas odds o boletim tem valor ' + sPct(ev) : 'Com estas odds paga ' + sPct(ev) + ' abaixo do justo (normal nas seguras)'}</div>
   <div class="row" style="margin-top:8px"><div style="flex:1"><label class="f" style="margin-top:0">Valor (€)</label><input class="in" id="ssStake" inputmode="decimal" value="${String(SS.stake).replace('.', ',')}" oninput="SS.stake=num(this.value)"></div></div>
   <div class="row" style="margin-top:8px"><button class="btn fill full" onclick="placeSlip()">${ic('check')} Registar múltipla</button><button class="btn go" onclick="shareSlip()" aria-label="Partilhar">${ic('share')}</button></div>`;
}
function placeSlip() {
  const L = ssLegs(); const stake = num(($('#ssStake') || {}).value);
  if (!L.length) return toast('Escolhe as seleções');
  if (L.some(x => !(x.odd > 1))) return toast('Falta a odd de alguma seleção');
  if (!(stake >= CFG.min)) return toast('A aposta mínima é ' + eur(CFG.min));
  if (stake > accStats('tu').bal) return toast('Não tens saldo para isso');
  const duel = 'd' + Date.now().toString(36), P = L.reduce((a, x) => a * x.c.p, 1);
  newMulti('tu', L.map(x => safeLeg(x.c, x.odd)), stake, { duel, src: 'seguro', p: r2(P) });
  // o Tó aposta o boletim que ele montou, com as mesmas odds que meteste
  const mine = SS.C.filter(c => SS.auto.has(legKey(c)));
  const same = mine.length === L.length && L.every(x => SS.auto.has(legKey(x.c)));
  const tstake = Math.min(stake, accStats('to').bal);
  let msg, mood = 'win';
  if (mine.length && tstake >= CFG.min) {
    newMulti('to', mine.map(c => safeLeg(c, SS.odd[legKey(c)] != null && SS.odd[legKey(c)] > 1 ? SS.odd[legKey(c)] : c.odd)), tstake, { duel, src: 'seguro', p: r2(mine.reduce((a, c) => a * c.p, 1)) });
    msg = same ? 'É exatamente o meu boletim. Vou contigo!' : `Mexeste no boletim. Eu fico com o meu: <b>${mine.map(c => esc(c.lb)).join(' + ')}</b>.`;
  } else { BETS.push({ id: 'tp' + Date.now().toString(36), acc: 'to', g: L[0].c.g.id, gl: '', gd: L[0].c.g.d, mk: 'pass', stake: 0, odd: 0, t: Date.now(), st: 'pass', ret: 0, lb: 'Passou', duel }); msg = 'Estou sem saldo… passo esta.'; mood = 'sad'; }
  saveBets();
  openSheet('Duelo marcado', `<div class="opinion"><div class="face">${toFace(mood)}</div><div>${msg}</div></div>
    <div class="row" style="margin-top:14px"><button class="btn full" onclick="closeSheet();render()">Fechar</button><button class="btn fill full" onclick="closeSheet();go('duelo')">Ver duelo</button></div>`, true);
  render();
}
function shareSlip() {
  const L = ssLegs(); if (!L.length) return;
  const P = L.reduce((a, x) => a * x.c.p, 1), O = L.reduce((a, x) => a * x.odd, 1);
  const txt = `🏀 Boletim seguro do Mister Tó · ${new Date(L[0].c.g.d).toLocaleDateString('pt-PT', { day: '2-digit', month: '2-digit' })}\n` + L.map((x, i) => `${i + 1}) ${x.c.lb} @ ${odd2(x.odd)} (${tAb(x.c.g.h)}–${tAb(x.c.g.a)}, ${hhmm(x.c.g.d)})`).join('\n') + `\nOdd total ${O.toFixed(2)} · o Tó dá ${pct(P)}\n(simulação, sem dinheiro real)`;
  shareText(txt);
}
async function shareText(txt) {
  try { if (navigator.share) { await navigator.share({ text: txt }); return; } } catch (e) { if (e && e.name === 'AbortError') return; }
  try { await navigator.clipboard.writeText(txt); toast('Copiado! Cola no WhatsApp ou no Facebook.'); } catch (e) { window.open('https://wa.me/?text=' + encodeURIComponent(txt), '_blank'); }
}

/* ---------- cartão de jogo ---------- */
function gameCard(g) {
  const M = getModel(), P = predict(g), rh = M.rec[g.h] || {}, ra = M.rec[g.a] || {}, o = g.o || {};
  const th = teamRt(g.h), ta = teamRt(g.a);
  let mid, head;
  if (g.s === 'pre') { mid = `<div class="s">${Math.round(P.ph)}–${Math.round(P.pa)}</div><div class="p">previsão</div>`; head = `<span>${ic('clock')} ${hhmm(g.d)} · ${dayLbl(g.d)}</span>`; }
  else if (g.s === 'in') { mid = `<div class="s">${g.hs}–${g.as}</div><div class="p">${esc(g.cl || 'a jogar')}</div>`; head = `<span class="live">Ao vivo</span>`; }
  else if (g.s === 'off') { mid = `<div class="s">—</div><div class="p">adiado</div>`; head = '<span>Adiado</span>'; }
  else { mid = `<div class="s">${g.hs}–${g.as}</div><div class="p">final${g.per > 4 ? ' · prol.' : ''}</div>`; head = `<span>Final · ${dayLbl(g.d)}</span>`; }
  const tags = [];
  if (P.rh === 1) tags.push(`<span class="tg" style="--k:var(--c-red)">${esc(tAb(g.h))} cansado</span>`);
  if (P.ra === 1) tags.push(`<span class="tg" style="--k:var(--c-red)">${esc(tAb(g.a))} cansado</span>`);
  if (g.s === 'pre' && (P.inj.h + P.inj.a) >= 1.5) tags.push(`<span class="tg" style="--k:var(--c-yellow)">lesões</span>`);
  if (g.s === 'pre' && P.value) tags.push(`<span class="tg" style="--k:var(--c-orange)">valor</span>`);
  const mine = BETS.filter(b => b.acc === 'tu' && (b.g === g.id || (b.legs && b.legs.some(l => l.g === g.id)))).length;
  if (mine) tags.push(`<span class="tg" style="--k:var(--c-blue)">${ic('star')} ${mine}</span>`);
  // linha da casa, por extenso
  const favH = o.hl != null ? o.hl <= 0 : null;
  const book = o.hl != null || o.tl != null || o.hml ? `<div class="mk">${ic('coins')} Casa: ${o.hl != null ? (o.hl === 0 ? 'equilibrado' : `${esc(tAb(favH ? g.h : g.a))} favorito por ${f1(o.hl)}`) : ''}${o.tl != null ? ` · total ${String(o.tl).replace('.', ',')} pts` : ''}${o.hml ? ` · vencedor ${esc(tAb(g.h))} ${odd2(o.hml)} / ${esc(tAb(g.a))} ${odd2(o.aml)}` : ''}</div>` : `<div class="mk">Sem odds da ESPN ainda</div>`;
  let say, bet = '';
  const v = g.s === 'post' ? verdict(g) : null;
  if (v) {
    say = `${okIc(v.win)} Vencedor: o Tó dava ${esc(tName(v.fav))} por ${f1(v.by)}${v.sp != null ? ` · handicap ${okIc(v.sp)}` : ''}${v.tot != null ? ` · total ${okIc(v.tot)}` : ''}`;
    bet = v.pk ? `<div class="say"><b>Aposta do Tó:</b> ${esc(v.pk.lb)} @ ${odd2(v.pk.odd)} → ${v.pkr === 'won' ? `<b class="pos">ganhou ${unitsTxt(v.pku)}</b>` : v.pkr === 'lost' ? `<b class="neg">perdeu</b>` : 'devolvida'}</div>` : `<div class="mk">O Tó não apostou neste jogo.</div>`;
  } else if (g.s === 'post') say = `<span class="muted">Sem previsão guardada antes do jogo.</span>`;
  else {
    const fav = P.m >= 0 ? g.h : g.a, by = Math.abs(P.m);
    say = `<b>Tó:</b> ${esc(tName(fav))} ${by < 1 ? 'muito equilibrado' : 'ganha por ' + f1(by)} (${pct(Math.max(P.pH, 1 - P.pH))}) · ${Math.round(P.t)} pts`;
    bet = g.s === 'pre' ? (P.value ? `<div class="say"><b style="color:var(--c-orange)">👉 Aposta do Tó:</b> ${esc(selLabel(g, P.value.mk, P.value.sel, P.value.line))} @ ${odd2(P.value.odd)} <span class="pos small">valor ${sPct(P.value.ev)}</span></div>` : `<div class="mk">Aposta do Tó: nenhuma (nada paga acima do justo)</div>`) : '';
  }
  const team = (id, r, t, side) => `<div class="team${side === 'a' ? ' r' : ''}">${logo(id)}<div style="min-width:0"><div class="nm${nmLg(id)}">${esc(tName(id))}</div><div class="rc"><span class="tg" style="--k:var(--teal);padding:0 4px">${t.ovr}</span> ${r.w || 0}-${r.l || 0}<br>${side === 'h' ? 'casa ' + (r.hw || 0) + '-' + (r.hl || 0) : 'fora ' + (r.aw || 0) + '-' + (r.al || 0)}</div></div></div>`;
  return `<div class="gc" onclick="GT='ana';openGame('${g.id}')"><div class="stripe"><i style="background:${tCol(g.h)}"></i><i style="background:${tCol(g.a)}"></i></div><div class="hd">${head}<span class="r">${tags.join('')}</span></div>
  <div class="tm">${team(g.h, rh, th, 'h')}<div class="score">${mid}</div>${team(g.a, ra, ta, 'a')}</div>
  <div class="ft"><div class="bar two" style="height:6px"><i style="width:${(P.pH * 100).toFixed(1)}%;background:${tCol(g.h)}"></i><i style="width:${((1 - P.pH) * 100).toFixed(1)}%;background:${tCol(g.a)}"></i></div>
  <div class="say">${say}</div>${bet}${book}</div></div>`;
}

/* ---------- FOLHA ---------- */
function openSheet(title, html, short) { const b = $('#sheetBox'); b.className = 'box' + (short ? ' short' : ''); b.innerHTML = `<div class="sh"><h3>${title}</h3><button class="x" onclick="closeSheet()" aria-label="Fechar">${ic('x')}</button></div>${html}`; $('#sheet').classList.add('on'); b.scrollTop = 0; }
function closeSheet() { $('#sheet').classList.remove('on'); }
function askConfirm(msg, okTxt, fnName) { openSheet('Confirmar', `<p>${msg}</p><div class="row"><button class="btn full" onclick="closeSheet()">Cancelar</button><button class="btn red full" onclick="${fnName}">${okTxt}</button></div>`, true); }

/* ---------- FICHA DO JOGO (separadores) ---------- */
function openGame(id) {
  const g = DB.games[id]; if (!g) return;
  const P = predict(g);
  const favH = P.pH >= 0.5, conf = Math.round(Math.max(P.pH, 1 - P.pH) * 100);
  let h = `<div class="pn hdr" style="margin-top:6px"><div class="tm" style="display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px">
   <div class="team">${logo(g.h, 40)}<div style="min-width:0"><div class="nm${nmLg(g.h)}">${esc(tName(g.h))}</div><div class="rc">casa</div></div></div>
   <div class="score">${g.s === 'pre' ? `<div class="s">${Math.round(P.ph)}–${Math.round(P.pa)}</div><div class="p">previsão</div>` : g.hs != null ? `<div class="s">${g.hs}–${g.as}</div><div class="p">${g.s === 'in' ? esc(g.cl) : 'final'}</div>` : '<div class="p">adiado</div>'}</div>
   <div class="team r">${logo(g.a, 40)}<div style="min-width:0"><div class="nm${nmLg(g.a)}">${esc(tName(g.a))}</div><div class="rc">fora</div></div></div></div>
   <div class="small muted" style="text-align:center;margin:4px 0 10px">${dayLbl(g.d)} às ${hhmm(g.d)} (hora de cá)</div>
   <div class="big-ovr"><div class="t">Confiança do Tó<div class="small muted" style="text-transform:none;letter-spacing:0">${esc(tName(favH ? g.h : g.a))} ganha</div></div><div class="grow"></div><div class="n">${conf}</div></div><div class="ruler"></div></div>
   <div class="tabs" style="padding-left:0">${[['ana', 'Análise'], ['mk', 'Odds'], ['eq', 'Equipas'], ['jog', 'Jogadores'], ['les', 'Lesões']].map(([k, t]) => `<button style="font-size:.8rem;padding:10px 2px" class="${GT === k ? 'on' : ''}" onclick="GT='${k}';openGame('${id}')">${t}</button>`).join('')}</div>`;
  if (GT === 'ana') h += tabAnalise(g, P);
  else if (GT === 'mk') h += tabMercados(g, P);
  else if (GT === 'eq') h += tabEquipas(g, P);
  else if (GT === 'jog') h += tabJogadores(g, P);
  else h += tabLesoes(g, P);
  const mine = BETS.filter(b => b.st !== 'pass' && (b.g === g.id || (b.legs && b.legs.some(l => l.g === g.id))));
  if (mine.length) h += catH('list', 'Apostas neste jogo', 'var(--c-blue)') + `<div class="pn" style="margin-top:0">${mine.map(betRow).join('')}</div>`;
  if (g.s === 'pre' && new Date(g.d).getTime() > Date.now()) h += `<div class="cta"><button class="btn fill full" onclick="openBet('${g.id}')">${ic('target')} Apostar neste jogo</button></div>`;
  openSheet(esc(tAb(g.h)) + ' <span class="muted">vs</span> ' + esc(tAb(g.a)), h);
}

function tabJogadores(g, P) {
  if (!Object.keys(PL.p).length) return `<div class="pn small">O Tó ainda não estudou os jogadores. <button class="btn go full" style="margin-top:8px" onclick="openPlayers()">${ic('star')} Estudar jogadores</button></div>`;
  const L = gamePlayers(g), I = INJ[g.id] || { h: [], a: [] };
  const out = I.h.concat(I.a).filter(x => /out/i.test(x.st));
  const done = g.s !== 'pre';
  let h = '';
  [g.h, g.a].forEach(tid => {
    const T = L.filter(x => x.P.t === tid).slice(0, 8);
    h += catH('star', esc(tName(tid)), tCol(tid), done ? 'médias da época' : 'previsão para este jogo');
    if (!T.length) { h += '<div class="small muted">Sem dados destes jogadores ainda.</div>'; return; }
    h += `<table class="tbl"><tr><th>Jogador</th><th>Min</th><th>Pts</th><th>Res</th><th>Ast</th><th>3P</th></tr>` + T.map(x => {
      const pr = x.pr, s = x.s, row = done ? (x.P.g.find(r => r[0] === g.id) || null) : null;
      const cell = (pv, sv, rv) => row ? `<b>${rv}</b>` : `<b>${pv.toFixed(1).replace('.', ',')}</b>`;
      return `<tr><td style="text-align:left">${esc(x.P.n)}<div class="small muted">${esc(x.P.pos)} · ${s.gp} j${impactOf(x.P) >= 3 ? ' · <span style="color:var(--c-orange)">peça-chave</span>' : ''}</div></td><td>${Math.round(row ? row[2] : s.min)}</td><td>${cell(pr.pts, s.pts, row && row[3])}</td><td>${cell(pr.reb, s.reb, row && row[4])}</td><td>${cell(pr.ast, s.ast, row && row[5])}</td><td>${cell(pr.tp, s.tp, row && row[6])}</td></tr>`;
    }).join('') + '</table>';
    if (!done) h += T.slice(0, 3).map(x => { const ln = lineFor('pts', x.pr.pts, 0.78), ln2 = Math.floor(x.pr.pts) + 0.5; return `<div class="why"><span>${esc(x.P.n)}: mais de ${String(ln).replace('.', ',')} pts · mais de ${String(ln2).replace('.', ',')} pts</span><b>${pct(pOverX('pts', x.pr.pts, ln))} · ${pct(pOverX('pts', x.pr.pts, ln2))}</b></div>`; }).join('');
  });
  if (out.length) h += `<div class="small muted" style="margin-top:6px">Fora deste jogo (lesão): ${out.map(x => esc(x.n)).join(', ')}.</div>`;
  return h + `<div class="small muted" style="margin-top:8px">Previsão = época + últimos 10 + últimos 5 jogos, ajustada ao que o adversário concede, casa/fora, tendência de minutos e colegas que faltam (quem joga apanha parte). Fórmula testada em 14 épocas reais. Para valer a pena, a odd da casa tem de pagar mais do que a odd justa.</div>`;
}

function tabAnalise(g, P) {
  const f1 = v => (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(v).toFixed(1).replace('.', ',');
  let h = catH('chart', 'Previsão', 'var(--c-blue)') +
    attr(esc(tName(g.h)) + ' ganha', Math.round(P.pH * 100), tCol(g.h), pct(P.pH), 100) +
    attr(esc(tName(g.a)) + ' ganha', Math.round((1 - P.pH) * 100), tCol(g.a), pct(1 - P.pH), 100) +
    attr('Total de pontos previsto', clamp(P.t - 180, 0, 90), 'var(--c-yellow)', P.t.toFixed(1).replace('.', ','), 90);
  h += catH('chip', 'Porque pensa assim', 'var(--c-purple)', 'pontos para ' + esc(tAb(g.h))) + `<div>` +
    P.reasons.map(([t, v]) => `<div class="why"><span>${esc(t)}</span><b class="${v > 0.05 ? 'pos' : v < -0.05 ? 'neg' : 'muted'}">${Math.abs(v) < 0.05 ? '0' : f1(v)}</b></div>`).join('') +
    `<div class="why"><span>= Só pelo modelo do Tó</span><b>${esc(tAb(P.mModel >= 0 ? g.h : g.a))} ${Math.abs(P.mModel).toFixed(1).replace('.', ',')}</b></div>` +
    (P.W ? `<div class="why"><span>Linha da casa (peso ${pct(P.W)})</span><b>${esc(tAb(g.h))} ${lineTxt(g.o.hl)}</b></div>` : `<div class="why"><span>Sem linha da casa: vai só pelo modelo</span><b>—</b></div>`) +
    (P.absAdj ? `<div class="why"><span>Ausências que marcaste</span><b class="${P.absAdj > 0 ? 'pos' : 'neg'}">${f1(P.absAdj)}</b></div>` : '') +
    `<div class="why" style="border:0"><span><b style="font-size:1.05rem">Conclusão:</b> ${esc(tName(P.m >= 0 ? g.h : g.a))} por ${Math.abs(P.m).toFixed(1).replace('.', ',')} · total ${P.t.toFixed(1).replace('.', ',')}</span></div></div>` +
    (P.gpMin < 6 ? `<div class="small muted">Início de época: com poucos jogos o Tó confia mais na linha da casa.</div>` : '');
  return h;
}
function tabMercados(g, P) {
  if (!P.cands.length) return `<div class="pn small muted">A ESPN ainda não deu odds para este jogo. Costumam sair na véspera.</div>`;
  return catH('coins', 'Mercados', 'var(--c-orange)', esc((g.o && g.o.p) || '')) + `<table class="tbl"><tr><th>Aposta</th><th>Odd</th><th>Tó</th><th>Justa</th><th>Valor</th></tr>` +
    P.cands.map((c, i) => `<tr class="tap ${P.best && c === P.best ? 'best' : ''}" onclick="${g.s === 'pre' ? `openBet('${g.id}',${i})` : ''}"><td>${esc(selLabel(g, c.mk, c.sel, c.line))}</td><td>${odd2(c.odd)}${c.der ? '*' : ''}${c.sus ? ' ⚠' : ''}</td><td>${pct(c.p)}</td><td>${odd2(c.fair)}</td><td class="${c.ev > 0 ? 'pos' : 'neg'}">${sPct(c.ev)}</td></tr>`).join('') +
    `</table><div class="small muted" style="margin:8px 2px">Toca numa linha para apostar nela.${P.cands.some(c => c.der) ? ' * odd estimada (a ESPN só deu a linha).' : ''}${P.cands.some(c => c.sus) ? ' ⚠ odds de vencedor que não batem certo com o handicap: o Tó não aposta nelas.' : ''}</div>`;
}
function tabEquipas(g, P) {
  const M = getModel();
  const card = (id, side) => {
    const t = teamRt(id), r = M.rec[id] || { last: [] }, rest = side === 'h' ? P.rh : P.ra;
    return `<div class="pn"><div class="row">${logo(id, 46)}<div style="flex:1"><div class="pn-h" style="margin:0">${esc(tName(id))}</div><div class="small muted">${side === 'h' ? 'Casa' : 'Fora'} · ${r.w || 0}-${r.l || 0} · ${rest == null ? '—' : rest === 1 ? '<span class="neg">jogou ontem</span>' : rest + ' dias de descanso'}</div></div><div class="ovr"><b>${t.ovr}</b><small>OVR</small></div></div>
     <div class="div" style="margin-top:10px"></div>
     ${attr('Ataque', t.atk, 'var(--c-blue)')}${attr('Defesa', t.def, 'var(--c-red)')}${attr('Forma (últ. 10)', t.form, 'var(--c-green)')}
     ${attr('Em casa ' + (r.hw || 0) + '-' + (r.hl || 0), t.home, 'var(--c-orange)')}${attr('Fora ' + (r.aw || 0) + '-' + (r.al || 0), t.away, 'var(--c-purple)')}${attr('Ritmo (pontos por jogo)', t.pace, 'var(--c-yellow)')}
     <div class="row small muted">Últimos 5 <span class="form">${(r.last || []).slice(-5).map(x => `<i class="${x.w ? 'w' : 'l'}" title="${esc(x.s)}">${x.w ? 'V' : 'D'}</i>`).join('')}</span><span style="margin-left:auto">fator casa/fora ${((M.sp[id] || 0) >= 0 ? '+' : '−') + Math.abs(M.sp[id] || 0).toFixed(1).replace('.', ',')}</span></div></div>`;
  };
  return card(g.h, 'h') + card(g.a, 'a') + `<div class="small muted">Notas de 0 a 99 calculadas pelo Tó com os resultados da época (corrigidas pela força dos adversários).</div>`;
}
function tabLesoes(g, P) {
  const I = INJ[g.id];
  let h = catH('bandage', 'Lesões (ESPN)', 'var(--c-red)', I ? 'lidas ' + new Date(I.t).toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' }) : '');
  if (!I) h += `<div class="small muted">Ainda não lidas. Toca em ↻ (lê as lesões dos jogos de hoje e de amanhã) ou só deste jogo:</div>`;
  else {
    ['h', 'a'].forEach(side => {
      const tid = side === 'h' ? g.h : g.a, L = P.inj.list[side];
      h += `<div class="pn"><div class="row">${logo(tid, 32)}<b style="font:italic 900 1.05rem var(--cond);text-transform:uppercase;flex:1">${esc(tName(tid))}</b><span class="tg" style="--k:${P.inj[side] >= 1 ? 'var(--c-red)' : 'var(--edge2)'}">−${f1(P.inj[side])} pts no modelo</span></div>` +
        (L.length ? L.map(x => `<div class="why"><span>${esc(x.n)} <span class="muted small">${esc(x.pos)}${x.ppg != null ? ' · ' + x.ppg.toFixed(1).replace('.', ',') + ' pts/jogo' : ''}${x.d ? ' · ' + esc(x.d) : ''}</span>${x.eff >= 0.3 ? `<div class="small muted">vale ${f1(x.imp)} pts${x.sh < 0.95 ? ` · já falhou ${Math.round((1 - x.sh) * 10)} dos últimos 10 (a equipa já joga sem ele)` : ''}</div>` : ''}</span><span class="tg" style="--k:${/out/i.test(x.st) ? 'var(--c-red)' : 'var(--c-yellow)'}">${esc(ST_PT(x.st))}</span></div>`).join('') : '<div class="small muted" style="margin-top:6px">sem lesões na lista</div>') + '</div>';
    });
    h += `<div class="small muted">As lesões entram só no modelo do Tó (a casa já as conhece). Quem já falhou os últimos jogos quase não conta: a força recente da equipa já foi medida sem ele. Como o Tó dá ${pct(P.W || 0)} de peso à casa, a previsão final mexe pouco — de propósito.</div>`;
  }
  h += `<button class="btn go full" style="margin-top:10px" onclick="refreshInj('${g.id}',this)">${ic('refresh')} Atualizar lesões deste jogo</button>`;
  if (g.s === 'pre') {
    const ab = ABS[g.id] || { h: 0, a: 0 };
    const row = side => `<div class="row w" style="margin:8px 0"><b style="min-width:96px;font-family:var(--cond);font-size:1rem">${esc(tName(side === 'h' ? g.h : g.a))}</b><span class="tg" style="--k:${ab[side] ? 'var(--c-red)' : 'var(--edge2)'}">${ab[side] ? '−' + String(ab[side]).replace('.', ',') + ' pts' : '—'}</span>
      <button class="btn sm" onclick="absAdd('${g.id}','${side}',4)">+ estrela</button><button class="btn sm" onclick="absAdd('${g.id}','${side}',1.5)">+ titular</button>${ab[side] ? `<button class="btn sm" onclick="absAdd('${g.id}','${side}',0)">limpar</button>` : ''}</div>`;
    h += catH('bolt', 'Notícia de última hora (manual)', 'var(--c-yellow)') + row('h') + row('a') + `<div class="small muted">Só para baixas que ainda não estão na linha da casa (ex.: anunciada 30 min antes). Contam por inteiro.</div>`;
  }
  return h;
}
async function refreshInj(id, btn) {
  const g = DB.games[id]; btn.disabled = true; btn.textContent = 'A perguntar à ESPN…';
  try { const j = await getJSON(`${ESPN}/summary?event=${id}`); if (g.s === 'pre') INJ[id] = parseInj(j, g); else { parseBox(j, g); PL.seen[id] = 1; savePL(); } LS.set('inj', INJ); MODEL = null; GT = 'les'; openGame(id); render(); toast('Lesões atualizadas — análise refeita'); }
  catch (e) { btn.disabled = false; btn.innerHTML = ic('refresh') + ' Atualizar lesões deste jogo'; toast('A ESPN não respondeu'); }
}

function absAdd(id, side, v) {
  const ab = ABS[id] || { h: 0, a: 0 };
  ab[side] = v ? r2((ab[side] || 0) + v) : 0;
  ABS[id] = ab; if (!ab.h && !ab.a) delete ABS[id];
  LS.set('abs', ABS); openGame(id); render();
}
const ST_PT = s => /out/i.test(s) ? 'Fora' : /doubt/i.test(s) ? 'Muito duvidoso' : /question|day-to-day|gtd/i.test(s) ? 'Dúvida' : /prob/i.test(s) ? 'Provável' : s;
/* ---------- APOSTAR (e o Tó responde) ---------- */
let BF = null;
function openBet(id, ci) {
  const g = DB.games[id]; const P = predict(g); const o = g.o || {};
  const c0 = (ci != null && P.cands[ci]) || P.best || { mk: o.hl != null ? 'sp' : 'ml', sel: 'h' };
  BF = { id, mk: c0.mk, sel: c0.sel, stake: Math.max(CFG.min, 1) };
  presetBF(g, P); drawBet();
}
function presetBF(g, P) {
  const c = P.cands.find(x => x.mk === BF.mk && x.sel === BF.sel), o = g.o || {};
  if (BF.mk === 'sp') BF.line = c ? c.line : (BF.sel === 'h' ? (o.hl != null ? o.hl : -1.5) : (o.hl != null ? -o.hl : 1.5));
  else if (BF.mk === 'tot') BF.line = c ? c.line : (o.tl || Math.round(P.t) + 0.5);
  else BF.line = null;
  BF.odd = c ? c.odd : '';
}
function drawBet() {
  const g = DB.games[BF.id];
  const segMk = [['ml', 'Vencedor'], ['sp', 'Handicap'], ['tot', 'Total']].map(([k, t]) => `<button class="${BF.mk === k ? 'on' : ''}" onclick="BF.mk='${k}';BF.sel='${k === 'tot' ? 'o' : 'h'}';presetBF(DB.games[BF.id],predict(DB.games[BF.id]));drawBet()">${t}</button>`).join('');
  const sels = BF.mk === 'tot' ? [['o', 'Mais'], ['u', 'Menos']] : [['h', tName(g.h)], ['a', tName(g.a)]];
  const segSel = sels.map(([k, t]) => `<button class="${BF.sel === k ? 'on' : ''}" onclick="BF.sel='${k}';presetBF(DB.games[BF.id],predict(DB.games[BF.id]));drawBet()">${esc(t)}</button>`).join('');
  openSheet('A tua aposta', `<div class="small muted">${esc(gLabel(g))} · ${dayLbl(g.d)} ${hhmm(g.d)}</div>
   <label class="f">Mercado</label><div class="seg">${segMk}</div>
   <label class="f">Escolha</label><div class="seg">${segSel}</div>
   ${BF.mk !== 'ml' ? `<label class="f">${BF.mk === 'sp' ? 'Handicap da tua escolha' : 'Linha de pontos'}</label><input class="in" id="bLine" inputmode="decimal" value="${BF.line == null ? '' : String(BF.line).replace('.', ',')}" oninput="betOpinion()">` : ''}
   <div class="row"><div style="flex:1"><label class="f">Odd (a da Betano)</label><input class="in" id="bOdd" inputmode="decimal" value="${BF.odd ? String(BF.odd).replace('.', ',') : ''}" oninput="betOpinion()"></div>
   <div style="flex:1"><label class="f">Valor (€)</label><input class="in" id="bStake" inputmode="decimal" value="${String(BF.stake).replace('.', ',')}" oninput="betOpinion()"></div></div>
   <div class="opinion" id="bOp"></div>
   <button class="btn fill full" style="margin-top:12px" id="bGo" onclick="placeBet()">${ic('check')} Registar a minha aposta</button>
   <div class="small muted" style="margin-top:6px">Ao registares, o Tó escolhe a aposta dele neste jogo, com o mesmo valor. Ganha o duelo quem lucrar mais.</div>`, true);
  betOpinion();
}
function readBF() { BF.line = BF.mk === 'ml' ? null : num($('#bLine') && $('#bLine').value); BF.odd = num($('#bOdd').value); BF.stake = num($('#bStake').value); }
function betOpinion() {
  readBF();
  const g = DB.games[BF.id], P = predict(g), box = $('#bOp');
  if (BF.mk !== 'ml' && BF.line == null) { box.className = 'opinion'; box.innerHTML = `<div class="face">${toFace('ok')}</div><div>Diz-me a linha.</div>`; return; }
  const q = probs(P, BF.mk, BF.sel, BF.line), p = q.w, fair = fairOf(q);
  let cls = 'opinion', mood = 'ok', msg;
  if (!(BF.odd > 1)) msg = `Para mim isto acontece ${pct(p)} das vezes${q.push > 0.005 ? ` (e ${pct(q.push)} é devolvida)` : ''}. Odd justa: <b>${odd2(fair)}</b>.`;
  else {
    const ev = evOf(q, BF.odd);
    if (ev >= 0.05) { cls += ' good'; mood = 'win'; msg = `Boa! Dou-lhe ${pct(p)}. Com ${odd2(BF.odd)} tens <b>valor ${sPct(ev)}</b>.`; }
    else if (ev >= 0) msg = `Dou-lhe ${pct(p)}. Valor ${sPct(ev)}: aposta justa, sem grande vantagem.`;
    else { cls += ' bad'; mood = 'sad'; msg = `Hum… dou-lhe ${pct(p)} (justa ${odd2(fair)}). Com ${odd2(BF.odd)} perdes <b>${sPct(ev)}</b> a longo prazo.`; }
  }
  const issues = [];
  if (!(BF.stake >= CFG.min)) issues.push(`a aposta mínima é ${eur(CFG.min)}`);
  if (BF.stake > accStats('tu').bal) issues.push('não tens saldo para isso');
  box.className = cls; box.innerHTML = `<div class="face">${toFace(mood)}</div><div>${msg}${issues.length ? `<div class="neg small" style="margin-top:4px">${issues.join(' · ')}</div>` : ''}</div>`;
  $('#bGo').disabled = !(BF.odd > 1 && BF.stake >= CFG.min && BF.stake <= accStats('tu').bal && (BF.mk === 'ml' || BF.line != null));
}
function placeBet() {
  readBF();
  const g = DB.games[BF.id], P = predict(g);
  if (new Date(g.d).getTime() < Date.now()) { toast('O jogo já começou'); return; }
  const c = { mk: BF.mk, sel: BF.sel, line: BF.line, odd: BF.odd };
  const q = probs(P, c.mk, c.sel, c.line), p = q.w, mineEv = evOf(q, c.odd);
  const duel = 'd' + Date.now().toString(36);
  newBet('tu', g, c, BF.stake, { p: r2(p), ev: r2(mineEv), duel });
  const opts = P.cands.filter(x => x.odd >= CFG.oddMin && x.odd <= CFG.oddMax && x.ev > 0 && !x.sus && !(x.mk === 'ml' && x.der)).sort((a, b) => b.ev - a.ev);
  let tc = opts[0] || null;
  if (mineEv > 0 && (!tc || mineEv > tc.ev)) tc = Object.assign({}, c, { p, ev: mineEv });
  let msg, mood;
  const stake = Math.min(BF.stake, accStats('to').bal);
  if (tc && stake >= CFG.min) {
    newBet('to', g, tc, stake, { p: r2(tc.p), ev: r2(tc.ev), duel, der: !!tc.der });
    const same = tc.mk === c.mk && tc.sel === c.sel && tc.line === c.line;
    msg = same ? `Concordo contigo! Vou no mesmo: <b>${esc(selLabel(g, tc.mk, tc.sel, tc.line))}</b> @ ${odd2(tc.odd)}.` : `Eu vou em <b>${esc(selLabel(g, tc.mk, tc.sel, tc.line))}</b> @ ${odd2(tc.odd)} (dou-lhe ${pct(tc.p)}). Que ganhe o melhor!`;
    mood = 'win';
  } else {
    BETS.push({ id: 'tp' + Date.now().toString(36), acc: 'to', g: g.id, gl: gLabel(g), gd: g.d, mk: 'pass', stake: 0, odd: 0, t: Date.now(), st: 'pass', ret: 0, lb: 'Passou', duel });
    msg = stake < CFG.min ? 'Estou sem saldo… passo esta.' : 'Neste jogo não vejo nada com valor. Passo — fico com o meu dinheiro.'; mood = 'sad';
  }
  saveBets();
  openSheet('Duelo marcado', `<div class="opinion"><div class="face">${toFace(mood)}</div><div>${msg}</div></div>
    <div class="row" style="margin-top:14px"><button class="btn full" onclick="closeSheet();render()">Fechar</button><button class="btn fill full" onclick="closeSheet();go('duelo')">Ver duelo</button></div>`, true);
  render();
}
function voidBet(id) {
  const b = BETS.find(x => x.id === id); if (!b || b.st !== 'open') return;
  BETS.filter(x => x.duel && x.duel === b.duel && (x.st === 'open' || x.st === 'pass')).concat([b]).forEach(x => { if (x.st === 'pass') x.st = 'void'; else { x.st = 'void'; x.ret = x.stake; } x.tset = Date.now(); });
  saveBets(); closeSheet(); toast('Aposta anulada (o dinheiro voltou)'); render();
}

/* ---------- DUELO ---------- */
function duels() {
  const by = {};
  BETS.filter(b => b.duel).forEach(b => { (by[b.duel] = by[b.duel] || {})[b.acc] = b; });
  return Object.entries(by).map(([k, v]) => ({ k, tu: v.tu, to: v.to })).filter(d => d.tu).sort((a, b) => b.tu.t - a.tu.t);
}
const betPL = b => !b || b.st === 'open' || b.st === 'void' || b.st === 'pass' ? 0 : r2((b.ret || 0) - b.stake);
function viewDuelo() {
  const D = duels().filter(d => d.tu.st !== 'void');
  let you = 0, him = 0, w = 0, l = 0, e = 0, open = 0;
  D.forEach(d => {
    if (d.tu.st === 'open' || (d.to && d.to.st === 'open')) { open++; return; }
    const a = betPL(d.tu), b = betPL(d.to); you += a; him += b;
    if (Math.abs(a - b) < 0.005) e++; else if (a > b) w++; else l++;
  });
  const n = w + l + e;
  let h = `<div class="pn hl" style="margin-top:14px">${pnH(`${ic('vs')} Duelo`, open + ' em jogo')}
    <div class="vs"><div><div class="av me">${ic('star')}</div><div class="nm">Tu</div><div class="ovr" style="margin-top:6px"><b class="${you >= 0 ? 'pos' : 'neg'}">${sEur(you)}</b><small>LUCRO</small></div></div>
    <div class="mid">VS</div>
    <div><div class="av">${toFace(him > you ? 'win' : him < you ? 'sad' : 'ok')}</div><div class="nm">Mister Tó</div><div class="ovr" style="margin-top:6px"><b class="${him >= 0 ? 'pos' : 'neg'}">${sEur(him)}</b><small>LUCRO</small></div></div></div>
    <div style="margin-top:14px">${attr('Duelos ganhos por ti', n ? Math.round(w / n * 100) : 0, 'var(--c-blue)', `${w} de ${n}`, 100)}${attr('Duelos ganhos pelo Tó', n ? Math.round(l / n * 100) : 0, 'var(--c-orange)', `${l} de ${n}`, 100)}${e ? `<div class="small muted">${e} empate${e > 1 ? 's' : ''} (mesma aposta)</div>` : ''}</div></div>`;
  if (!D.length) return h + `<div class="pn empty"><div class="face">${toFace('ok')}</div><b>Ainda não houve duelos.</b><div class="muted small" style="margin:6px 0 14px">Abre um jogo em «Jogos» ou regista o Boletim seguro. Eu respondo com a minha aposta.</div><button class="btn fill" onclick="go('jogos')">${ic('ball')} Ver jogos</button></div>`;
  h += catH('list', 'Duelos', 'var(--c-blue)');
  h += D.map(d => {
    const g = d.tu.mk === 'multi' ? null : DB.games[d.tu.g] || {};
    const res = !g ? `${d.tu.legs.length} jogos` : g.s === 'post' && g.hs != null ? `${g.hs}–${g.as}` : g.s === 'in' ? 'a decorrer' : hhmm(d.tu.gd);
    const a = betPL(d.tu), b = betPL(d.to), closed = d.tu.st !== 'open' && (!d.to || d.to.st !== 'open');
    const cell = (x, who, k, win) => `<div class="${closed && win ? 'win' : ''}" style="--k:${k}"><div class="h">${who}</div>${x && x.st !== 'pass' ? `<b>${esc(x.lb)}</b>${x.legs ? `<div class="small muted">${x.legs.map(l => esc(l.lb)).join(' + ')}</div>` : ''}<div class="small muted">@ ${odd2(x.odd)} · ${eur(x.stake)}</div><div class="small" style="margin-top:3px">${stTag(x)}</div>` : '<b class="muted">Passou</b>'}</div>`;
    return `<div class="pn" style="padding:10px 12px"><div class="row small"><b style="font:italic 800 1rem var(--cond)">${esc(d.tu.src === 'seguro' ? 'Boletim seguro' : d.tu.gl)}</b><span class="muted" style="margin-left:auto">${res}</span></div>
     <div class="duel">${cell(d.tu, 'Tu', 'var(--c-blue)', a > b)}${cell(d.to, 'Mister Tó', 'var(--c-orange)', b > a)}</div></div>`;
  }).join('');
  return h;
}
function stTag(b) {
  if (b.st === 'open') return '<span class="tg" style="--k:var(--c-blue)">em jogo</span>';
  if (b.st === 'won') return `<span class="tg" style="--k:var(--pos)">ganhou ${sEur(b.ret - b.stake)}</span>`;
  if (b.st === 'lost') return `<span class="tg" style="--k:var(--neg)">perdeu ${sEur(-b.stake)}</span>`;
  if (b.st === 'push') return '<span class="tg">devolvida</span>';
  if (b.st === 'void') return '<span class="tg">anulada</span>';
  return '<span class="tg">passou</span>';
}

/* ---------- CONTAS ---------- */
function betRow(b) {
  const legs = b.legs ? `<div class="legs">${b.legs.map(l => `${l.r === 'won' ? '<span class="pos">✓</span>' : l.r === 'lost' ? '<span class="neg">✗</span>' : '•'} ${esc(l.lb)} @ ${odd2(l.odd)} <span class="muted">(${esc(tAb((DB.games[l.g] || {}).h))}–${esc(tAb((DB.games[l.g] || {}).a))}${l.res ? ' ' + esc(l.res) : ''})</span>`).join('<br>')}</div>` : '';
  return `<div class="bet"><div class="who" style="--k:${ACC[b.acc].c}">${ic(ACC[b.acc].ic)}</div><div class="m"><div class="t">${esc(b.lb)} <span class="muted" style="font-weight:600">@ ${odd2(b.odd)}</span></div>
   <div class="g">${b.legs ? 'Boletim' : esc(b.gl)} · ${dayLbl(b.gd)} ${hhmm(b.gd)}${b.res ? ' · ' + esc(b.res) : ''}${b.ev != null ? ` · valor Tó ${sPct(b.ev)}` : b.p != null && b.legs ? ` · Tó ${pct(b.p)}` : ''}</div>${legs}
   <div style="margin-top:4px">${stTag(b)}${b.acc === 'tu' && b.st === 'open' ? ` <button class="btn sm" style="min-height:26px;padding:2px 8px" onclick="askConfirm('Anular esta aposta? (se não chegaste a jogá-la na Betano). O duelo do Tó também é anulado.','Anular',&quot;voidBet('${b.id}')&quot;)">anular</button>` : ''}</div></div>
   <div class="v">${eur(b.stake)}<small>${b.st === 'open' ? 'pode dar ' + eur(b.stake * b.odd) : ''}</small></div></div>`;
}
function viewContas() {
  const tile = k => { const s = accStats(k); return `<div class="acct ${ACCF === k ? 'on' : ''}" style="--k:${ACC[k].c}" onclick="ACCF=ACCF==='${k}'?'all':'${k}';render()">${ic(ACC[k].ic)}<div class="n">${ACC[k].n}</div><div class="v">${eur(s.bal)}</div><div class="d"><span class="${s.profit >= 0 ? 'pos' : 'neg'}">${sEur(s.profit)}</span></div></div>`; };
  let h = `<div class="accs">${tile('tu')}${tile('to')}${tile('pi')}</div>`;
  if (ACCF !== 'all') {
    const s = accStats(ACCF), n = s.w + s.l;
    h += `<div class="pn hl">${pnH(`${ic(ACC[ACCF].ic)} ${ACC[ACCF].n}`, 'toca outra vez para ver todas')}
      <div class="big-ovr"><div class="t">Saldo<div class="small muted" style="text-transform:none;letter-spacing:0">começou com ${eur(s.start)}</div></div><div class="grow"></div><div class="n" style="font-size:2rem">${eur(s.bal)}</div></div><div class="ruler"></div>
      <div style="margin-top:12px">${attr('Em jogo', Math.min(s.open, s.start), 'var(--c-orange)', eur(s.open), s.start || 1)}${attr('Taxa de acerto', n ? Math.round(s.w / n * 100) : 0, 'var(--c-green)', n ? `${pct(s.w / n)} (${s.w}/${n})` : '—', 100)}${attr('ROI (lucro por € apostado)', clamp(50 + s.roi * 100, 0, 100), s.roi >= 0 ? 'var(--c-green)' : 'var(--c-red)', sPct(s.roi), 100)}</div></div>`;
  } else h += `<div class="small muted" style="margin:8px 2px">Toca numa conta para ver os números dela.</div>`;
  h += `<div class="row w" style="margin-top:8px"><button class="btn sm" onclick="exportCSV()">${ic('download')} Exportar</button><button class="btn sm" onclick="printBets()">${ic('print')} Imprimir</button><button class="btn sm" onclick="openDeposit()">${ic('coins')} Recarregar</button></div>`;
  const L = BETS.filter(b => b.st !== 'pass' && (ACCF === 'all' || b.acc === ACCF)).sort((a, b) => b.t - a.t);
  const open = L.filter(b => b.st === 'open'), done = L.filter(b => b.st !== 'open');
  h += catH('fire', 'Em jogo', 'var(--c-orange)', `${open.length} · ${eur(open.reduce((s, b) => s + b.stake, 0))}`);
  h += open.length ? `<div class="pn open-box" style="margin-top:0">${open.map(betRow).join('')}</div>` : `<div class="pn small muted" style="margin-top:0">Nada em jogo.</div>`;
  h += catH('list', 'Histórico', 'var(--c-blue)');
  h += done.length ? `<div class="pn" style="margin-top:0">${done.slice(0, 150).map(betRow).join('')}</div>` : `<div class="pn small muted" style="margin-top:0">Ainda sem apostas fechadas.</div>`;
  return h;
}
function openDeposit() {
  openSheet('Recarregar banca', `<label class="f">Conta</label><select class="in" id="dAcc"><option value="tu">Tu</option><option value="to">Mister Tó</option><option value="pi">Piloto</option></select>
   <label class="f">Valor a juntar (€)</label><input class="in" id="dVal" inputmode="decimal" value="50">
   <div class="small muted" style="margin-top:6px">Fica registado à parte: o lucro e o ROI continuam certos.</div>
   <button class="btn fill full" style="margin-top:12px" onclick="doDeposit()">Juntar</button>`, true);
}
function doDeposit() { const v = num($('#dVal').value); if (!(v > 0)) return toast('Valor inválido'); DEPOS.push({ acc: $('#dAcc').value, v: r2(v), t: Date.now() }); LS.set('depos', DEPOS); closeSheet(); toast('Banca recarregada'); render(); }
function betsForOut() { return BETS.filter(b => b.st !== 'pass' && (ACCF === 'all' || b.acc === ACCF)).sort((a, b) => a.t - b.t); }
const ST_TXT = { open: 'em jogo', won: 'ganhou', lost: 'perdeu', push: 'devolvida', void: 'anulada' };
const betDesc = b => b.legs ? b.legs.map(l => l.lb + ' @' + odd2(l.odd)).join(' + ') : b.lb;
function exportCSV() {
  const f = v => String(v == null ? '' : v).replace('.', ',');
  const rows = [['conta', 'registada', 'jogo', 'data_jogo', 'mercado', 'aposta', 'linha', 'odd', 'valor', 'estado', 'retorno', 'lucro', 'prob_to', 'valor_to', 'resultado']];
  betsForOut().forEach(b => rows.push([ACC[b.acc].n, new Date(b.t).toLocaleString('pt-PT'), b.legs ? 'Boletim ' + b.legs.length + ' jogos' : b.gl, new Date(b.gd).toLocaleString('pt-PT'), b.legs ? 'Múltipla' : mkName(b.mk), betDesc(b), f(b.line), f(b.odd), f(b.stake), ST_TXT[b.st] || b.st, b.st === 'open' ? '' : f(b.ret), b.st === 'open' ? '' : f(r2((b.ret || 0) - b.stake)), b.p != null ? f(b.p) : '', b.ev != null ? f(b.ev) : '', b.res || '']));
  const csv = '﻿' + rows.map(r => r.map(x => /[;"\n]/.test(String(x)) ? '"' + String(x).replace(/"/g, '""') + '"' : x).join(';')).join('\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = 'mister-to-apostas-' + todayET() + '.csv'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
  toast('Ficheiro gerado (abre no Excel)');
}
function printBets() {
  const L = betsForOut(); const accs = ACCF === 'all' ? ['tu', 'to', 'pi'] : [ACCF];
  $('#print').innerHTML = `<h2>Mister Tó · NBA — ${ACCF === 'all' ? 'todas as contas' : ACC[ACCF].n}</h2><p>${new Date().toLocaleString('pt-PT')}</p>
   <p>${accs.map(k => { const s = accStats(k); return `<b>${ACC[k].n}</b>: saldo ${eur(s.bal)} · em jogo ${eur(s.open)} · lucro ${sEur(s.profit)} · ROI ${sPct(s.roi)}`; }).join('<br>')}</p>
   <table><tr><th>Conta</th><th>Jogo</th><th>Aposta</th><th>Odd</th><th>Valor</th><th>Estado</th><th>Lucro</th></tr>${L.map(b => `<tr><td>${ACC[b.acc].n}</td><td>${esc(b.legs ? 'Boletim' : b.gl)}<br>${dayLbl(b.gd)}</td><td>${esc(betDesc(b))}</td><td>${odd2(b.odd)}</td><td>${eur(b.stake)}</td><td>${ST_TXT[b.st] || b.st}</td><td>${b.st === 'open' ? '' : sEur((b.ret || 0) - b.stake)}</td></tr>`).join('')}</table>`;
  window.print();
}

/* ---------- MAIS ---------- */
function openHelp() {
  const q = (t, x) => `<div class="pn"><div class="pn-h" style="font-size:1.1rem">${t}</div><div class="small" style="line-height:1.5">${x}</div></div>`;
  openSheet('O que quer dizer', q('Casa: CLE favorito por 4,5', 'É o <b>handicap</b> da casa de apostas. Apostar «Cavaliers −4,5» só ganha se os Cavaliers ganharem por <b>5 ou mais</b>. Apostar «Grizzlies +4,5» ganha se os Grizzlies ganharem, ou perderem por 4 ou menos.') +
    q('Total 238,5 pts', 'Soma dos pontos das duas equipas. «Mais de 238,5» ganha com 239 ou mais; «Menos de 238,5» com 238 ou menos. O prolongamento conta.') +
    q('Vencedor CLE 1,51 / MEM 2,64', 'Odds para quem ganha o jogo (com prolongamento, não há empate). 1 € em CLE a 1,51 devolve 1,51 € se ganhar.') +
    q('Aposta do Tó · valor +6%', 'O Tó calcula a probabilidade de cada aposta e a <b>odd justa</b> (1 ÷ probabilidade). Se a casa paga mais do que a odd justa, há <b>valor</b>: em 100 apostas assim, ganhas mais do que perdes. Só aparece «Aposta do Tó» quando o valor passa dos ' + pct(CFG.evMin) + '. Se não aparece, o Tó acha que não se deve apostar nesse jogo.') +
    q('Seguro', 'Seleções que o Tó dá como muito prováveis (85% ou mais). Pagam pouco; juntas num boletim pagam mais mas o risco soma-se.') +
    q('Confiança e OVR', '<b>Confiança</b> = probabilidade de o favorito ganhar. <b>OVR</b> = nota geral da equipa de 0 a 99 (força na época).') +
    q('u (unidades)', '1 u = o valor de uma aposta. «+0,91 u» = ganhou 0,91 vezes o que apostou.'));
}

function viewMais() {
  const T = [['chart', 'Estatísticas', 'openStats()', 'var(--teal)'], ['star', 'Jogadores', 'openPlayers()', 'var(--c-blue)'], ['trophy', 'Classificação', 'openStand()', 'var(--c-yellow)'], ['chip', 'Como pensa o Tó', 'openHow()', 'var(--c-purple)'], ['info', 'O que quer dizer', 'openHelp()', 'var(--c-green)'], ['gear', 'Definições', 'openCfg()', 'var(--c-blue)'], ['save', 'Cópia de segurança', 'openBackup()', 'var(--c-orange)'], ['pulse', 'Testar ligação', 'openNet()', 'var(--c-red)']];
  if (!isStandalone()) T.push(['phone', 'Instalar app', 'openInstall()', 'var(--teal)']);
  const ST = statsAll();
  return `<div class="pn hl" style="cursor:pointer" onclick="openStats()">${pnH(`${ic('chart')} Estatísticas do Tó`, 'tocar para abrir')}
    ${ST.n ? attr('Vencedor certo', Math.round(ST.win / ST.n * 100), 'var(--c-green)', `${pct(ST.win / ST.n)} (${ST.n})`, 100) + (ST.bn ? attr('Apostas com valor', clamp(50 + ST.bu / ST.bn * 100, 0, 100), ST.bu >= 0 ? 'var(--c-green)' : 'var(--c-red)', `${ST.bw}/${ST.bn} · ${unitsTxt(ST.bu)}`, 100) : '') : '<div class="small muted">Ainda sem jogos previstos e acabados.</div>'}</div>
   <div class="tiles">${T.map(([i, l, f, k]) => `<div class="tile" style="--k:${k}" onclick="${f}">${ic(i)}<b>${l}</b></div>`).join('')}</div>
   <div class="pn small muted" style="text-align:center">Mister Tó v${APP_VER} · dados da ESPN · simulação, sem dinheiro real<br>© 2026 Júlio Melo</div>`;
}

function statsAll() {
  const fin = Object.values(DB.games).filter(g => g.s === 'post' && PREDS[g.id] && g.hs != null);
  const R = { n: 0, win: 0, eT: 0, eM: 0, eMod: 0, nM: 0, spN: 0, spW: 0, toN: 0, toW: 0, bn: 0, bw: 0, bu: 0, mk: {}, conf: {}, team: {}, rows: [] };
  fin.forEach(g => {
    const v = verdict(g); if (!v) return; const p = v.p, act = g.hs - g.as;
    R.n++; if (v.win) R.win++;
    R.eT += Math.abs(p.m - act); R.eMod += Math.abs(p.mm - act);
    if (p.hl != null) { R.nM++; R.eM += Math.abs(-p.hl - act); }
    if (v.sp != null) { R.spN++; if (v.sp) R.spW++; }
    if (v.tot != null) { R.toN++; if (v.tot) R.toW++; }
    const pc = Math.max(p.pH != null ? p.pH : Phi(p.m / SDM), 1 - (p.pH != null ? p.pH : Phi(p.m / SDM)));
    const b = pc < 0.55 ? '50-55' : pc < 0.6 ? '55-60' : pc < 0.7 ? '60-70' : pc < 0.8 ? '70-80' : '80+';
    const C = R.conf[b] = R.conf[b] || { n: 0, w: 0, p: 0 }; C.n++; C.p += pc; if (v.win) C.w++;
    const T = R.team[v.fav] = R.team[v.fav] || { n: 0, w: 0 }; T.n++; if (v.win) T.w++;
    if (v.pk && (v.pkr === 'won' || v.pkr === 'lost')) {
      R.bn++; if (v.pkr === 'won') R.bw++; R.bu += v.pku;
      const K = R.mk[v.pk.mk] = R.mk[v.pk.mk] || { n: 0, w: 0, u: 0 }; K.n++; if (v.pkr === 'won') K.w++; K.u += v.pku;
    }
    R.rows.push({ g, v });
  });
  return R;
}
function wilson(k, n) { if (!n) return [0, 1]; const z = 1.96, p = k / n, d = 1 + z * z / n, c = (p + z * z / (2 * n)) / d, m = z * Math.sqrt(p * (1 - p) / n + z * z / (4 * n * n)) / d; return [c - m, c + m]; }
function openStats() {
  const R = statsAll(), M = getModel(), ss = safeStats(), ps = propStats();
  if (!R.n && !ss && !ps) return openSheet('Estatísticas', `<div class="pn empty"><div class="face">${toFace('ok')}</div>As estatísticas enchem-se sozinhas: o Tó guarda a previsão e a aposta de cada jogo antes de começar, e compara com o resultado. Toca em ↻ todos os dias antes dos jogos.</div>`);
  const sl = Object.values(SLIPS).map(slipResult).filter(x => x && x.st !== 'open');
  const slW = sl.filter(x => x.st === 'won').length;
  const pm = (k, n) => { const [a, b] = wilson(k, n); return `${pct(k / n)} <small>(${Math.round(a * 100)}–${Math.round(b * 100)}%)</small>`; };
  let h = catH('target', 'Previsões', 'var(--c-green)', R.n + ' jogos') +
    attr('Vencedor certo', Math.round(R.win / R.n * 100), 'var(--c-green)', pm(R.win, R.n), 100) +
    (R.spN ? attr('Lado certo no handicap (precisa 52,4%)', Math.round(R.spW / R.spN * 100), 'var(--c-blue)', pm(R.spW, R.spN), 100) : '') +
    (R.toN ? attr('Lado certo no total (precisa 52,4%)', Math.round(R.toW / R.toN * 100), 'var(--c-yellow)', pm(R.toW, R.toN), 100) : '');
  h += catH('gem', 'Apostas do Tó (valor)', 'var(--c-orange)', R.bn ? `${R.bw}/${R.bn} · <b class="${R.bu >= 0 ? 'pos' : 'neg'}">${unitsTxt(R.bu)}</b> · ROI ${sPct(R.bn ? R.bu / R.bn : 0)}` : 'ainda nenhuma') +
    ['ml', 'sp', 'tot'].filter(k => R.mk[k]).map(k => { const K = R.mk[k]; return `<div class="why"><span>${mkName(k)}</span><b>${K.w}/${K.n} · <span class="${K.u >= 0 ? 'pos' : 'neg'}">${unitsTxt(K.u)}</span></b></div>`; }).join('');
  h += catH('shield', 'Seguro e jogadores', 'var(--teal)') +
    (ss ? attr('Seleções seguras', Math.round(ss.w / ss.n * 100), 'var(--teal)', `${ss.w}/${ss.n} · prometia ${pct(ss.p)}`, 100) : '') +
    (sl.length ? attr('Boletins seguros inteiros', Math.round(slW / sl.length * 100), 'var(--teal)', `${slW}/${sl.length}`, 100) : '') +
    (ps ? attr('Linhas de jogadores', Math.round(ps.w / ps.n * 100), 'var(--c-blue)', `${ps.w}/${ps.n} · prometia ${pct(ps.p)}`, 100) : '') +
    (!ss && !sl.length && !ps ? '<div class="small muted">Ainda sem resultados.</div>' : '');
  h += catH('chip', 'Quando o Tó diz X%, acontece…', 'var(--c-purple)') + `<table class="tbl"><tr><th>Confiança</th><th>Jogos</th><th>Tó dizia</th><th>Aconteceu</th></tr>` +
    ['50-55', '55-60', '60-70', '70-80', '80+'].filter(b => R.conf[b]).map(b => { const C = R.conf[b]; return `<tr><td>${b}%</td><td>${C.n}</td><td>${pct(C.p / C.n)}</td><td class="${Math.abs(C.w / C.n - C.p / C.n) < 0.08 ? 'pos' : 'neg'}">${pct(C.w / C.n)}</td></tr>`; }).join('') + `</table><div class="small muted" style="margin:4px 0">Verde = bate certo (dentro de 8 pontos). Com poucos jogos é normal haver diferenças.</div>`;
  const avgW = R.n ? R.win / R.n : 0.5;
  const TM = Object.entries(R.team).filter(([, T]) => T.n >= 5).map(([id, T]) => ({ id, T, r: T.w / T.n, ci: wilson(T.w, T.n) })).sort((a, b) => b.r - a.r);
  if (TM.length >= 4) {
    const tag = x => x.ci[0] > avgW ? '<span class="tg" style="--k:var(--pos)">real</span>' : x.ci[1] < avgW ? '<span class="tg" style="--k:var(--neg)">real</span>' : '<span class="tg">pode ser sorte</span>';
    h += catH('fire', 'Onde o Tó está quente / frio', 'var(--c-red)', 'quando dá a equipa como favorita') +
      TM.slice(0, 3).map(x => `<div class="why"><span>🔥 ${esc(tName(x.id))} ${tag(x)}</span><b>${x.T.w}/${x.T.n}</b></div>`).join('') +
      TM.slice(-3).reverse().map(x => `<div class="why"><span>❄️ ${esc(tName(x.id))} ${tag(x)}</span><b>${x.T.w}/${x.T.n}</b></div>`).join('') +
      `<div class="small muted">«Real» só quando a margem de sorte não chega à média do Tó (${pct(avgW)}).</div>`;
  }
  h += catH('chart', 'Tó contra a casa', 'var(--c-blue)', 'erro médio na diferença') +
    `<div class="why"><span>Tó (final)</span><b>${f1(R.eT / Math.max(1, R.n))} pts</b></div><div class="why"><span>Só o modelo do Tó</span><b>${f1(R.eMod / Math.max(1, R.n))} pts</b></div>${R.nM ? `<div class="why"><span>Casa de apostas</span><b>${f1(R.eM / R.nM)} pts</b></div>` : ''}<div class="why"><span>Peso que o Tó dá à casa (aprendido)</span><b>${pct(M.cal.m.w)} · total ${pct(M.cal.t.w)}</b></div>`;
  h += catH('wallet', 'Contas', 'var(--c-yellow)') + ['tu', 'to', 'pi'].map(k => { const s = accStats(k); return `<div class="why"><span>${ACC[k].n}</span><b class="${s.profit >= 0 ? 'pos' : 'neg'}">${sEur(s.profit)} · ROI ${sPct(s.roi)} · ${s.w}/${s.w + s.l}</b></div>`; }).join('');
  h += `<div class="row" style="margin-top:12px"><button class="btn go full" onclick="exportPreds()">${ic('download')} Exportar previsões (Excel)</button></div>
   <div class="pn small muted">Os números entre parênteses são a margem de sorte (95%). Enquanto 52,4% estiver dentro dela, ainda não se sabe se o Tó bate a casa ou teve sorte. Tudo foi guardado antes de cada jogo começar.</div>`;
  openSheet('Estatísticas', h);
}
function exportPreds() {
  const f = v => String(v == null ? '' : v).replace('.', ',');
  const rows = [['dia', 'casa', 'fora', 'resultado', 'tó_diferença', 'tó_total', 'tó_prob_casa', 'linha_casa', 'total_casa', 'vencedor_certo', 'handicap_certo', 'total_certo', 'aposta_tó', 'odd', 'resultado_aposta', 'unidades']];
  statsAll().rows.forEach(({ g, v }) => rows.push([g.ed, tName(g.h), tName(g.a), g.hs + '-' + g.as, f(v.p.m), f(v.p.t), f(v.p.pH), f(v.p.hl), f(v.p.tl), v.win ? 1 : 0, v.sp == null ? '' : v.sp ? 1 : 0, v.tot == null ? '' : v.tot ? 1 : 0, v.pk ? v.pk.lb : '', v.pk ? f(v.pk.odd) : '', v.pk ? v.pkr : '', v.pk ? f(r2(v.pku)) : '']));
  const csv = '﻿' + rows.map(r => r.map(x => /[;"\n]/.test(String(x)) ? '"' + String(x).replace(/"/g, '""') + '"' : x).join(';')).join('\n');
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
  a.download = 'mister-to-previsoes-' + todayET() + '.csv'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}

function openPlayers() {
  const left = studyLeft(), n = Object.keys(PL.p).length, seen = Object.keys(PL.seen).length;
  const top = Object.values(PL.p).filter(P => P.g.length >= 3).map(P => ({ P, s: pStats(P), imp: impactOf(P) })).sort((a, b) => b.imp - a.imp).slice(0, 30);
  openSheet('Jogadores', `<div class="pn"><div class="small">Estudados <b>${seen}</b> jogos · <b>${n}</b> jogadores · faltam <b>${left}</b> jogos.</div>
    ${left ? `<button class="btn fill full" style="margin-top:10px" id="stBtn" onclick="studyAll(this)">${ic('download')} Estudar tudo (${left} jogos · ~${Math.max(1, Math.round(left * 0.15))} MB)</button><div class="small muted" style="margin-top:6px">Melhor com Wi-Fi. Pode demorar ${Math.max(1, Math.round(left * 0.4 / 60))} min. Também estuda 25 jogos em cada ↻.</div>` : ''}</div>
    ${top.length ? catH('star', 'Peças-chave da liga', 'var(--c-blue)', 'quanto vale cada um (pts de diferença)') + `<table class="tbl"><tr><th>Jogador</th><th>Pts</th><th>Res</th><th>Ast</th><th>Vale</th></tr>${top.map(x => `<tr><td style="text-align:left">${esc(x.P.n)}<div class="small muted">${esc(tAb(x.P.t))} · ${x.s.gp} j · ${Math.round(x.s.min)} min</div></td><td>${x.s.pts.toFixed(1).replace('.', ',')}</td><td>${x.s.reb.toFixed(1).replace('.', ',')}</td><td>${x.s.ast.toFixed(1).replace('.', ',')}</td><td><b>${f1(x.imp)}</b></td></tr>`).join('')}</table><div class="small muted" style="margin-top:6px">«Vale» = quantos pontos a equipa perde, em média, quando ele falta.</div>` : ''}`);
}
async function studyAll(btn) {
  btn.disabled = true;
  let tot = 0;
  for (let i = 0; i < 40; i++) {
    const left = studyLeft(); if (!left) break;
    const r = await studyGames(30, false, (k, n) => { btn.textContent = `A estudar… faltam ${Math.max(0, left - k)}`; });
    tot += r.fin; if (!r.fin) break;
  }
  propGrade(); MODEL = null; toast(`✓ ${tot} jogos estudados`); openPlayers(); render();
}
let CONFV = 'E';
function openStand() {
  const M = getModel(); const set = CONFV === 'E' ? EAST : WEST;
  const ts = Object.values(DB.teams).filter(t => set.includes(t.ab)).map(t => ({ t, r: M.rec[t.id] || { w: 0, l: 0, hw: 0, hl: 0, aw: 0, al: 0, last: [] }, o: teamRt(t.id).ovr }))
    .sort((a, b) => (b.r.w / Math.max(1, b.r.w + b.r.l)) - (a.r.w / Math.max(1, a.r.w + a.r.l)) || M.net(b.t.id) - M.net(a.t.id));
  const h = `<div class="tabs" style="margin-top:4px"><button class="${CONFV === 'E' ? 'on' : ''}" onclick="CONFV='E';openStand()">Este</button><button class="${CONFV === 'W' ? 'on' : ''}" onclick="CONFV='W';openStand()">Oeste</button></div>
   <table class="tbl" style="margin-top:6px"><tr><th>#</th><th>Equipa</th><th>OVR</th><th>V-D</th><th>Casa</th><th>Fora</th><th>Últ. 10</th></tr>
   ${ts.map((x, i) => `<tr><td>${i + 1}</td><td style="text-align:left"><b>${esc(x.t.nm)}</b></td><td><span class="tg" style="--k:var(--teal)">${x.o}</span></td><td>${x.r.w}-${x.r.l}</td><td>${x.r.hw}-${x.r.hl}</td><td>${x.r.aw}-${x.r.al}</td><td style="white-space:nowrap">${(x.r.last || []).slice(-10).map(z => `<span class="dot" style="background:${z.w ? 'var(--pos)' : 'var(--neg)'}"></span>`).join('')}</td></tr>`).join('')}
   </table><div class="small muted" style="margin-top:6px">Feita pelo Tó com os resultados guardados. OVR = nota geral da equipa (0–99).</div>`;
  openSheet('Classificação', ts.length ? h : '<p class="muted">Toca primeiro em ↻.</p>');
}
function openHow() {
  const M = getModel();
  openSheet('Como pensa o Tó', `<div class="pn" style="line-height:1.5">
   ${catH('chart', '1. Força de cada equipa', 'var(--c-blue)')}<p>Pontos marcados e sofridos em todos os jogos da época, com mais peso nos mais recentes e corrigidos pela força dos adversários.</p>
   ${catH('court', '2. Casa e fora', 'var(--c-orange)')}<p>Na NBA quem joga em casa ganha, em média, <b>${M.HCA.toFixed(1).replace('.', ',')} pts</b> (${M.n} jogos desta época). No basket isto pesa muito menos do que no futebol: a diferença varia ±12 pts de jogo para jogo e o fator casa é quase igual em todas as equipas. O Tó mede o de cada uma, mas trava-o (máx. ±1,5 pts).</p>
   ${catH('clock', '3. Cansaço', 'var(--c-red)')}<p>Quem jogou na véspera perde cerca de 1,4 pts.</p>
   ${catH('coins', '4. Mercado', 'var(--c-yellow)')}<p>Junta a opinião dele com a linha da casa de apostas. Começa com ${pct(CFG.mktW)} de peso na casa e depois <b>aprende sozinho</b> com as previsões que guardou antes de cada jogo. Peso atual: <b>${pct(M.cal.m.w)}</b>.</p>
   ${catH('bandage', '5. Ausências', 'var(--c-purple)')}<p>As lesões da ESPN (lidas a cada ↻) entram no modelo do Tó com o valor de cada jogador; quem já falhou os últimos jogos quase não conta. As baixas de última hora que marcas tu contam por inteiro.</p>
   ${catH('gem', '6. Valor e seguro', 'var(--c-green)')}<p><b>Valor:</b> a odd paga pelo menos ${pct(CFG.evMin)} acima do justo. <b>Seguro:</b> seleções com ${pct(SAFE_LEG)} ou mais, juntas enquanto o boletim passa dos ${pct(SAFE_SLIP)}.</p>
   <p class="small muted">Contas: <b>Tu</b> apostas o que quiseres e o Tó dá opinião; <b>Mister Tó</b> responde a cada aposta tua com a dele (duelo); <b>Piloto</b> aposta sozinho ${eur(CFG.piStake)} em cada «valor» e no boletim seguro da noite.</p></div>`);
}
function openCfg() {
  const inp = (id, lbl, v, hint) => `<label class="f">${lbl}</label><input class="in" id="${id}" inputmode="decimal" value="${String(v).replace('.', ',')}">${hint ? `<div class="small muted">${hint}</div>` : ''}`;
  openSheet('Definições', `<div class="row">${['tu', 'to', 'pi'].map(k => `<div style="flex:1">${inp('c_' + k, 'Banca ' + ACC[k].n, CFG.bank[k])}</div>`).join('')}</div>
   ${inp('c_min', 'Aposta mínima da tua casa (€)', CFG.min)}
   ${inp('c_pis', 'Valor de cada aposta do piloto (€)', CFG.piStake)}
   ${inp('c_ev', 'Valor mínimo para o Boletim (%)', Math.round(CFG.evMin * 100), 'Mais alto = menos apostas, mais exigentes.')}
   ${inp('c_w', 'Peso inicial da linha da casa (%)', Math.round(CFG.mktW * 100), 'Ponto de partida (o Tó ajusta com os resultados). Mínimo usado: 50.')}
   <label class="f">Piloto automático</label><div class="seg"><button id="c_pon" class="${CFG.piOn ? 'on' : ''}" onclick="this.classList.add('on');$('#c_poff').classList.remove('on')">Ligado</button><button id="c_poff" class="${!CFG.piOn ? 'on' : ''}" onclick="this.classList.add('on');$('#c_pon').classList.remove('on')">Desligado</button></div>
   <button class="btn fill full" style="margin-top:14px" onclick="saveCfg()">Guardar</button>
   <button class="btn red full" style="margin-top:10px" onclick="askConfirm('Apagar TODAS as apostas e recomeçar as três contas? Os jogos guardados ficam.','Apagar apostas','wipeBets()')">Recomeçar as contas</button>`);
}
function saveCfg() {
  const v = id => num($('#' + id).value);
  ['tu', 'to', 'pi'].forEach(k => { const x = v('c_' + k); if (x >= 0) CFG.bank[k] = r2(x); });
  const mn = v('c_min'); if (mn > 0) CFG.min = r2(mn);
  const ps = v('c_pis'); if (ps > 0) CFG.piStake = r2(ps);
  const ev = v('c_ev'); if (ev != null) CFG.evMin = clamp(ev, 0, 50) / 100;
  const w = v('c_w'); if (w != null) CFG.mktW = clamp(w, 0, 100) / 100;
  CFG.piOn = $('#c_pon').classList.contains('on');
  LS.set('cfg', CFG); MODEL = null; closeSheet(); toast('Guardado'); render();
}
function wipeBets() { BETS = []; DEPOS = []; saveBets(); LS.set('depos', DEPOS); closeSheet(); toast('Contas a zero'); render(); }
function openBackup() {
  openSheet('Cópia de segurança', `<p class="small">Guarda as apostas, contas e definições num ficheiro. Serve para mudar de telemóvel ou para não perder nada.</p>
   <button class="btn fill full" onclick="exportAll()">${ic('download')} Exportar tudo</button>
   <label class="f" style="margin-top:14px">Importar um ficheiro</label><input type="file" accept=".json,application/json" class="in" onchange="importAll(this)">
   <div class="small muted" style="margin-top:6px">Importar substitui o que está neste telemóvel.</div>`, true);
}
function exportAll() {
  const data = {}; ['bets', 'preds', 'abs', 'depos', 'cfg', 'safe', 'db'].forEach(k => data[k] = LS.get(k, null));
  const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify({ app: 'mister-to', ver: APP_VER, t: Date.now(), data })], { type: 'application/json' }));
  a.download = 'mister-to-copia-' + todayET() + '.json'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
}
function importAll(inp) {
  const f = inp.files && inp.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => { try { const j = JSON.parse(r.result); if (j.app !== 'mister-to' || !j.data) throw new Error('não é uma cópia do Mister Tó'); Object.entries(j.data).forEach(([k, v]) => { if (v != null) LS.set(k, v); }); toast('Importado'); setTimeout(() => location.reload(), 700); } catch (e) { toast(esc(e.message)); } };
  r.readAsText(f);
}
function openNet() { openSheet('Testar ligação', `<p class="small">Testa cada caminho até à ESPN e guarda o mais rápido.</p><button class="btn fill full" onclick="netTest(this)">Testar agora</button><div id="netBox" style="margin-top:10px"></div>`, true); }
async function netTest(btn) {
  btn.disabled = true; btn.textContent = 'A testar…';
  const url = `${ESPN}/scoreboard?dates=${todayET()}`; const rows = []; let best = null;
  for (let i = 0; i < BRIDGES.length; i++) {
    const t0 = Date.now();
    try { const ctrl = new AbortController(); const tm = setTimeout(() => ctrl.abort(), 12000); const r = await fetch(BRIDGES[i].f(url), { signal: ctrl.signal, cache: 'no-store' }); clearTimeout(tm); const j = await r.json(); const ms = Date.now() - t0; rows.push(`<span class="pos">✓</span> ${BRIDGES[i].n}: ${(j.events || []).length} jogos (${ms} ms)`); if (best == null || ms < best.ms) best = { i, ms }; }
    catch (e) { rows.push(`<span class="neg">✗</span> ${BRIDGES[i].n}: ${esc(e.name === 'AbortError' ? 'demorou demais' : e.message)}`); }
  }
  if (best) LS.set('bridge', best.i);
  $('#netBox').innerHTML = `<div class="pn small">${rows.join('<br>')}${best ? `<br><b>A usar: ${BRIDGES[best.i].n}</b>` : '<br><b class="neg">Nenhum caminho funcionou. Tens internet?</b>'}</div>`;
  btn.disabled = false; btn.textContent = 'Testar outra vez';
}

/* ---------- instalar como app ---------- */
let DEFER_INSTALL = null;
const isStandalone = () => (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
const isIOS = () => /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); DEFER_INSTALL = e; if (VIEW === 'inicio' || VIEW === 'mais') render(); });
window.addEventListener('appinstalled', () => { DEFER_INSTALL = null; LS.set('instHide', 1); toast('Mister Tó instalado! Já está no teu ecrã.'); render(); });
function installBanner() {
  if (isStandalone() || LS.get('instHide', 0)) return '';
  return `<div class="pn inst" style="border-left:3px solid var(--teal)"><span style="color:var(--teal)">${ic('phone')}</span><div class="t"><b>Instala o Mister Tó</b><small>Fica no ecrã do telemóvel, como uma app. Usa o Chrome.</small></div><button class="btn fill sm" onclick="doInstall()">Instalar</button><button class="x" onclick="LS.set('instHide',1);render()" aria-label="Fechar">${ic('x')}</button></div>`;
}
const INSTALL_HELP = () => isIOS()
  ? '<p><b>iPhone:</b> abre no <b>Safari</b>, toca em <b>Partilhar</b> (□↑) e escolhe <b>«Adicionar ao ecrã principal»</b>.</p>'
  : '<p><b>Android (Chrome):</b> toca nos <b>⋮</b> em cima à direita e escolhe <b>«Instalar app»</b> ou <b>«Adicionar ao ecrã principal»</b>.</p><p class="small muted">No Samsung Internet: menu ☰ → «Adicionar página a» → «Ecrã inicial».</p>';
async function doInstall() {
  if (DEFER_INSTALL) { DEFER_INSTALL.prompt(); try { const r = await DEFER_INSTALL.userChoice; if (r && r.outcome === 'accepted') LS.set('instHide', 1); } catch (e) {} DEFER_INSTALL = null; render(); return; }
  openInstall();
}
function openInstall() {
  openSheet('Instalar como app', isStandalone() ? '<div class="pn">Já estás a usar o Mister Tó como app.</div>' :
    `<div class="pn"><div class="row" style="gap:12px"><div style="width:64px;height:64px;flex:0 0 64px">${toFace('win')}</div><div>Fica com o ícone do Tó no ecrã, abre em ecrã inteiro e funciona mesmo sem internet (só o ↻ precisa de rede).</div></div></div>
     ${DEFER_INSTALL ? `<button class="btn fill full" onclick="doInstall()">${ic('phone')} Instalar agora</button>` : ''}
     <div class="pn">${INSTALL_HELP()}</div>`, true);
}

/* ---------- arranque ---------- */
$('#topFace').innerHTML = toFace('ok');
$('#btnRefresh').innerHTML = ic('refresh');
document.querySelectorAll('[data-ic]').forEach(el => { el.outerHTML = ic(el.dataset.ic); });
window.addEventListener('hashchange', () => { let v = location.hash.slice(1); if (v === 'hoje') v = 'jogos'; if (VIEWS.includes(v) && v !== VIEW) { VIEW = v; render(); } });
settleAll();
render();
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});
