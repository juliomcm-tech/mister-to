/* =====================================================================
   4) A CARA DO MISTER TÓ (desenho original)
   ===================================================================== */
function toFace(mood) {
  const mouth = mood === 'win' ? '<path d="M47 86 Q60 99 73 86 Q60 92 47 86Z" fill="#5a1a1a"/><path d="M50 87 Q60 91 70 87" stroke="#fff" stroke-width="2.4" fill="none"/>'
    : mood === 'sad' ? '<path d="M50 92 Q60 84 70 92" stroke="#5a1a1a" stroke-width="3" fill="none" stroke-linecap="round"/>'
    : '<path d="M50 87 Q60 94 70 87" stroke="#5a1a1a" stroke-width="3" fill="none" stroke-linecap="round"/>';
  const brow = mood === 'sad' ? ['M36 50 L50 46', 'M84 50 L70 46'] : ['M36 47 Q43 42 51 46', 'M84 47 Q77 42 69 46'];
  return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<defs><radialGradient id="tb" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#ffb04d"/><stop offset=".7" stop-color="#ef7414"/><stop offset="1" stop-color="#b9500a"/></radialGradient>
<clipPath id="tclip"><circle cx="60" cy="60" r="56.8"/></clipPath><linearGradient id="ts" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4c39c"/><stop offset="1" stop-color="#dc9f74"/></linearGradient></defs>
<circle cx="60" cy="60" r="58" fill="url(#tb)" stroke="#5a2400" stroke-width="2.5"/>
<path d="M2 60 H118 M60 2 V118 M20 18 Q44 60 20 102 M100 18 Q76 60 100 102" stroke="#5a2400" stroke-width="2.2" fill="none" opacity=".55"/>
<g clip-path="url(#tclip)"><path d="M26 122 Q28 98 60 96 Q92 98 94 122Z" fill="#1d428a"/><path d="M48 97 L60 110 L72 97" fill="none" stroke="#ff8a1f" stroke-width="4" stroke-linejoin="round"/>
<path d="M50 99 Q60 116 74 101" stroke="#d9d9e6" stroke-width="1.6" fill="none"/><rect x="67" y="100" width="9" height="6" rx="2" fill="#cfd3dc" stroke="#7a7f8c"/></g>
<ellipse cx="29" cy="64" rx="6" ry="8" fill="#e5ad83"/><ellipse cx="91" cy="64" rx="6" ry="8" fill="#e5ad83"/>
<ellipse cx="60" cy="62" rx="30" ry="34" fill="url(#ts)"/>
<path d="M30 58 Q29 44 36 38 L38 56Z M90 58 Q91 44 84 38 L82 56Z" fill="#b8b8c4"/>
<rect x="30" y="36" width="60" height="10" rx="4" fill="#ff8a1f" stroke="#a84a00" stroke-width="1.2"/><rect x="30" y="40" width="60" height="2.6" fill="#1d428a"/>
<ellipse cx="50" cy="31" rx="9" ry="4" fill="#fff" opacity=".35"/>
<path d="${brow[0]}" stroke="#8d8d99" stroke-width="4" stroke-linecap="round" fill="none"/><path d="${brow[1]}" stroke="#8d8d99" stroke-width="4" stroke-linecap="round" fill="none"/>
<ellipse cx="45" cy="57" rx="4" ry="4.6" fill="#2a1630"/><ellipse cx="75" cy="57" rx="4" ry="4.6" fill="#2a1630"/><circle cx="46.4" cy="55.4" r="1.4" fill="#fff"/><circle cx="76.4" cy="55.4" r="1.4" fill="#fff"/>
<path d="M60 58 Q66 70 62 73 Q58 75 55 72" fill="#d8946a"/>
<path d="M40 82 Q50 72 60 77 Q70 72 80 82 Q72 80 66 83 Q60 79 54 83 Q48 80 40 82Z" fill="#9a9aa8" stroke="#6f6f7c" stroke-width="1"/>
${mouth}
<ellipse cx="38" cy="72" rx="5" ry="3" fill="#ff7a6a" opacity=".25"/><ellipse cx="82" cy="72" rx="5" ry="3" fill="#ff7a6a" opacity=".25"/>
</svg>`;
}

