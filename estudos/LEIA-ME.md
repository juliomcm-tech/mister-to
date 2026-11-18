# Estudos do Mister Tó (novembro 2026)

## 1. Teste às cegas — equipas (11 épocas reais, 2014-15 a 2025-26)
Dados: resultados e linhas de fecho (spread, total, vencedor) do repositório público
`kyleskom/NBA-Machine-Learning-Sports-Betting`. Cada jogo previsto só com o passado.
Afinado em 2015-24, confirmado em 2024-25 e 2025-26.

- O Tó está **bem calibrado** (quando diz 75%, acontece ~75%).
- Boletim seguro **honesto**: seleções 87,1% (prometia 87,7%), boletins 75,2% (prometia 76,1%).
- **Não bate a linha de fecho**: o modelo sozinho erra ~0,4 pts mais do que a casa; o «valor»
  (5%, 8%, 10%) não deu lucro provado; 10%+ em odds altas de vencedor perdeu −14,5%.
- Alterações aplicadas (v3.2): desvio 13, partida da época anterior a 50%, cansaço −1,3/+1,0,
  fator casa/fora por equipa quase desligado (KSPLIT 200, ±1), vantagem casa 2,0,
  peso da casa 90% (diferença) / 95% (total), vencedor a partir da odd da casa sem margem.
- Padrões: 23 testados, 21 falharam. Ficam **só a medir**: «descanso 2+ dias»
  (55% / 57% fora da amostra) e «azarão de 3+ no início da época» (54% / 52%).
- Ficheiros: `equipas-parametros.json`, `padroes.json`.

## 2. Jogadores (14 épocas reais, 2010-11 a 2023-24)
Dados: estatísticas de jogo de `NocturneBear/NBA-Data-2010-2024` (424 mil linhas).
Afinado em 2010-22, confirmado em 2022-24.

- Impacto de quem falta: `0,12·pts + 0,07·ress + 0,20·assist + 0,105·(+/-) − 0,065·min`
  × parte dos jogos recentes em que jogou. Superestrela ≈4 pts, all-star ≈2,5, bom titular ≈1.
- A casa já mete ~66% de uma estrela fora na linha → lesões só no modelo do Tó.
- Previsões de pontos/ressaltos/assistências/triplos calibradas (ex.: 24,5 pts → previsto 30,7%, real 31,4%).
- Ruído (não usar): mão quente, vingança, descanso.
- Ficheiro: `jogadores-formulas.json`.

## Conclusão honesta
A vantagem real não está em «adivinhar melhor que a casa», mas em **apostar quando a Betano
paga mais do que o preço justo** (comparar odds) e em **notícias que a linha ainda não tem**.
