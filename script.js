        document.addEventListener('DOMContentLoaded', function() {
            // Taxas de câmbio (poderiam ser buscadas de uma API)
            const taxas = {
                dolar: 63.89,
                euro: 69.17,
                rand: 3.53
            };
            
            // Símbolos das moedas
            const simbolos = {
                dolar: "$",
                euro: "€",
                rand: "R"
            };
            
            // Elementos do DOM
            const elementos = {
                compra: {
                    input: document.getElementById('valor-compra'),
                    resultado: document.getElementById('resultado-compra')
                },
                venda: {
                    input: document.getElementById('valor-venda'),
                    resultado: document.getElementById('resultado-venda')
                }
            };
            
            // Função para formatar o resultado
            function formatarResultado(valor, moeda, operacao) {
                if (operacao === 'compra') {
                    return `${valor.toFixed(2)} Meticais`;
                } else {
                    return `${valor.toFixed(2)} ${simbolos[moeda]}`;
                }
            }
            
            // Função principal de conversão
            function converter(operacao, moeda) {
                const input = elementos[operacao].input;
                const resultado = elementos[operacao].resultado;
                
                const valor = parseFloat(input.value) || 0;
                let valorConvertido;
                
                if (operacao === 'compra') {
                    valorConvertido = valor * taxas[moeda];
                } else {
                    valorConvertido = valor / taxas[moeda];
                }
                
                resultado.textContent = formatarResultado(valorConvertido, moeda, operacao);
            }
            
            // Adiciona event listeners a todos os botões
            document.querySelectorAll('button').forEach(botao => {
                botao.addEventListener('click', function() {
                    const moeda = this.dataset.moeda;
                    const operacao = this.dataset.operacao;
                    converter(operacao, moeda);
                });
            });
        });