# Cronômetro para o OBS

Adiciona um cronômetro para contagem regressiva no OBS.

## Configuração

No OBS, adicione uma fonte `Navegador` na cena desejada, com a URL `https://tavaresgs.github.io/timer/`.

Por padrão, a contagem será feita em relação ao próximo quarto de hora (15, 30, 45 minutos ou hora completa). Caso deseje informar alguma hora específica, o mesmo pode ser feito adicionado `?t=hh:mm` ao final da URL, onde `hh:mm` deve ser substituido pela hora desejada. Exemplo: `https://tavaresgs.github.io/timer/?t=17:00`.

Caso deseje adicionar uma mensagem ao final da contagem regressiva, a mesma pode ser adicionada como com o parêmetro `msg=Mensagem` na URL. Exemplo: `https://tavaresgs.github.io/timer/?t=17:00&msg=Iniciando em instantes`.

## Personalização

A fonte, tamanho e cor do cronômetro e da mensagem ao finalizâ-lo podem ser personalizadas no parâmetro `CSS Personalizado`, adicionando as propriedades CSS no id `timer`. Exemplo: `#timer { color: #ffffff; font-size: 90pt; font-weight: bolder; }`.
