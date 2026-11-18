/* =====================================================================
   4) A CARA DO MISTER TÓ — crachá «modo pro» (desenho original)
   Hexágono de néon, óculos espelhados, auscultadores com microfone,
   casaco técnico e o bigode grisalho de sempre.
   mood: 'ok' · 'win' (ganhou / tem valor) · 'sad' (perdeu / não gosta)
   ===================================================================== */
function toFace(mood) {
  const mouth = mood === 'win'
    ? '<path d="M50 85 Q60 96 70 85 Q60 90 50 85Z" fill="#3a0d12"/><path d="M52.5 86 Q60 89 67.5 86" stroke="#fff" stroke-width="2" fill="none"/>'
    : mood === 'sad' ? '<path d="M51.5 90 Q60 83.5 68.5 90" stroke="#3a0d12" stroke-width="2.6" fill="none" stroke-linecap="round"/>'
    : '<path d="M52 86.5 Q60 91.5 68 86.5" stroke="#3a0d12" stroke-width="2.6" fill="none" stroke-linecap="round"/>';
  const brow = mood === 'sad' ? ['M38 47.5 L51 44', 'M82 47.5 L69 44'] : mood === 'win' ? ['M38 44 Q44.5 39 51.5 42.5', 'M82 44 Q75.5 39 68.5 42.5'] : ['M38 45.5 Q44.5 41.5 51.5 44', 'M82 45.5 Q75.5 41.5 68.5 44'];
  const led = mood === 'sad' ? '#ff9f1a' : '#ff2a3c';
  return `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
<defs>
 <linearGradient id="tqBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#162233"/><stop offset=".55" stop-color="#0b111b"/><stop offset="1" stop-color="#05070b"/></linearGradient>
 <radialGradient id="tqGlow" cx=".5" cy=".42" r=".55"><stop offset="0" stop-color="#ff7a1a" stop-opacity=".38"/><stop offset="1" stop-color="#ff7a1a" stop-opacity="0"/></radialGradient>
 <linearGradient id="tqSkin" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2c29b"/><stop offset="1" stop-color="#d2946a"/></linearGradient>
 <linearGradient id="tqLens" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#7ff5d8"/><stop offset=".35" stop-color="#19d3a2"/><stop offset=".7" stop-color="#1b3f8f"/><stop offset="1" stop-color="#6b2cc4"/></linearGradient>
 <linearGradient id="tqJack" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1c2738"/><stop offset="1" stop-color="#0a0f17"/></linearGradient>
 <clipPath id="tqHex"><path d="M60 4 L108.5 32 V88 L60 116 L11.5 88 V32 Z"/></clipPath>
</defs>
<path d="M60 4 L108.5 32 V88 L60 116 L11.5 88 V32 Z" fill="url(#tqBg)"/>
<g clip-path="url(#tqHex)">
 <circle cx="60" cy="52" r="56" fill="url(#tqGlow)"/>
 <g stroke="#ff7a1a" stroke-opacity=".22" stroke-width="1.6" fill="none"><circle cx="60" cy="52" r="46"/><path d="M14 52 H106 M60 6 V98 M27 19 Q47 52 27 85 M93 19 Q73 52 93 85"/></g>
 <path d="M0 96 H120" stroke="#ff2a3c" stroke-opacity=".5" stroke-width="1"/>
 <!-- casaco técnico -->
 <path d="M22 122 Q24 99 48 94 L60 100 L72 94 Q96 99 98 122 Z" fill="url(#tqJack)"/>
 <path d="M48 94 L60 108 L72 94" fill="none" stroke="#19d3a2" stroke-width="2.4" stroke-linejoin="round"/>
 <path d="M60 108 V122" stroke="#ff7a1a" stroke-width="2"/>
 <path d="M30 108 Q38 102 46 100 M90 108 Q82 102 74 100" stroke="#ff2a3c" stroke-width="1.6" fill="none" opacity=".8"/>
 <path d="M53 93 L60 99.5 L67 93 Q66 88 60 88 Q54 88 53 93Z" fill="#c98a60"/>
</g>
<!-- cabeça -->
<ellipse cx="33" cy="62" rx="5.5" ry="7.5" fill="#dca17a"/><ellipse cx="87" cy="62" rx="5.5" ry="7.5" fill="#dca17a"/>
<path d="M60 26 C79 26 89 39 89 58 C89 78 77 92 60 92 C43 92 31 78 31 58 C31 39 41 26 60 26Z" fill="url(#tqSkin)"/>
<path d="M31.5 57 Q30 40 38 33 L40 52Z M88.5 57 Q90 40 82 33 L80 52Z" fill="#b9bcc6"/>
<path d="M41 33 Q60 23 79 33 Q70 29 60 29 Q50 29 41 33Z" fill="#c9ccd5" opacity=".9"/>
<ellipse cx="51" cy="31.5" rx="9" ry="3.2" fill="#fff" opacity=".28"/>
<!-- auscultadores -->
<path d="M30 56 C28 30 92 30 90 56" fill="none" stroke="#0e141e" stroke-width="6.5" stroke-linecap="round"/>
<path d="M30.6 52 C30 33 90 33 89.4 52" fill="none" stroke="#19d3a2" stroke-width="1.6" stroke-linecap="round" opacity=".9"/>
<rect x="22.5" y="53" width="11" height="17" rx="4" fill="#0e141e" stroke="#19d3a2" stroke-width="1.6"/>
<rect x="86.5" y="53" width="11" height="17" rx="4" fill="#0e141e" stroke="#19d3a2" stroke-width="1.6"/>
<path d="M28 68 Q30 84 47 86" fill="none" stroke="#0e141e" stroke-width="3" stroke-linecap="round"/>
<circle cx="48.5" cy="86" r="3.2" fill="#0e141e"/><circle cx="48.5" cy="86" r="1.5" fill="${led}"/>
<!-- sobrancelhas + óculos espelhados -->
<path d="${brow[0]}" stroke="#9a9dab" stroke-width="4.2" stroke-linecap="round" fill="none"/><path d="${brow[1]}" stroke="#9a9dab" stroke-width="4.2" stroke-linecap="round" fill="none"/>
<path d="M36 50 Q36 47.5 39 47.5 H55 Q58 47.5 57.5 51 L56 59 Q55 63 50 63 H43 Q37.5 63 36.5 58Z" fill="url(#tqLens)" stroke="#0a0f17" stroke-width="2"/>
<path d="M84 50 Q84 47.5 81 47.5 H65 Q62 47.5 62.5 51 L64 59 Q65 63 70 63 H77 Q82.5 63 83.5 58Z" fill="url(#tqLens)" stroke="#0a0f17" stroke-width="2"/>
<path d="M57.5 50.5 Q60 48.5 62.5 50.5" stroke="#0a0f17" stroke-width="2.4" fill="none"/>
<path d="M39.5 50.5 L47 50.5 L41 58Z M66 50.5 L72 50.5 L67 56Z" fill="#fff" opacity=".45"/>
<!-- nariz, bigode, boca -->
<path d="M60 60 Q65.5 70.5 62 73 Q58.5 75 55.5 72.2" fill="#c98660"/>
<path d="M41 81 Q50.5 71 60 76 Q69.5 71 79 81 Q71.5 79 66 82 Q60 78.5 54 82 Q48.5 79 41 81Z" fill="#a5a8b5" stroke="#6f7380" stroke-width="1"/>
${mouth}
<!-- moldura de néon -->
<path d="M60 4 L108.5 32 V88 L60 116 L11.5 88 V32 Z" fill="none" stroke="#19d3a2" stroke-width="3.2" stroke-linejoin="round"/>
<path d="M60 9 L104 34.5 V85.5 L60 111 L16 85.5 V34.5 Z" fill="none" stroke="#ff2a3c" stroke-opacity=".55" stroke-width="1"/>
<path d="M48 4.8 L60 4 L72 4.8 M48 115.2 L60 116 L72 115.2" stroke="#7ff5d8" stroke-width="3.2" stroke-linecap="round"/>
</svg>`;
}

