# Junta src/ num único index.html (a app continua a ser um ficheiro só)
import pathlib
S = pathlib.Path(__file__).parent / 'src'
shell = (S / 'shell.html').read_text()
ui = (S / 'ui.js').read_text().replace('%%FACE%%', (S / 'face.js').read_text())
js = "'use strict';\n" + (S / 'engine.js').read_text().replace("'use strict';\n", '', 1) + '\n' + ui
out = shell.replace('%%SCRIPT%%', js)
(S.parent / 'index.html').write_text(out)
print('index.html', len(out), 'bytes')
