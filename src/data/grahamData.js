// Benjamin Graham Investment Philosophy Mind Map Data
// Updated structure matching grahamData.json

export const grahamData = {
  nome: "Benjamin Graham e Investimento em Valor",
  children: [
    {
      nome: "Princípios Fundamentais",
      children: [
        {
          nome: "Investimento vs. Especulação",
          children: [
            {
              nome: "Análise profunda",
              descricao:
                "O investimento deve ser baseado em uma análise cuidadosa e detalhada dos fundamentos da empresa, como balanço patrimonial, demonstração de resultados, fluxo de caixa, posição competitiva e qualidade da gestão. Graham defendia que investir sem compreender profundamente o negócio é especulação.",
            },
            {
              nome: "Segurança do principal",
              descricao:
                "O objetivo primário do investidor não é maximizar ganhos, mas preservar o capital investido. Um investimento só é válido quando oferece alta probabilidade de não resultar em perda permanente do principal.",
            },
            {
              nome: "Retorno satisfatório",
              descricao:
                "O retorno esperado deve ser adequado ao risco assumido, sem depender de cenários excessivamente otimistas. Graham enfatizava retornos consistentes e razoáveis ao longo do tempo, em vez de ganhos extraordinários e incertos.",
            },
          ],
        },
        {
          nome: "Margem de Segurança",
          children: [
            {
              nome: "Preço abaixo do valor intrínseco",
              descricao:
                "A margem de segurança consiste em comprar ativos por um preço significativamente inferior ao seu valor intrínseco estimado. Essa diferença protege o investidor contra erros de análise, mudanças econômicas adversas e eventos inesperados.",
            },
          ],
        },
        {
          nome: "Senhor Mercado",
          children: [
            {
              nome: "Aproveitar volatilidade emocional",
              descricao:
                "O conceito do Senhor Mercado representa o mercado como um parceiro emocionalmente instável, que diariamente oferece preços irracionais. O investidor inteligente deve ignorar o humor do mercado e aproveitar suas oscilações para comprar barato e vender caro.",
            },
          ],
        },
      ],
    },
    {
      nome: "Tipos de Investidor",
      children: [
        {
          nome: "Empreendedor (Ativo)",
          children: [
            {
              nome: "Análise original e dedicação",
              descricao:
                "O investidor empreendedor dedica tempo e esforço para realizar análises próprias, indo além do consenso do mercado. Ele busca identificar oportunidades negligenciadas ou mal precificadas.",
            },
            {
              nome: "Busca por barganhas",
              descricao:
                "Esse perfil procura ações negociadas a preços muito abaixo de seu valor real, explorando ineficiências temporárias do mercado.",
            },
            {
              nome: "Situações especiais",
              descricao:
                "Incluem eventos como reestruturações, spin-offs, fusões, falências ou mudanças regulatórias. Graham via nessas situações oportunidades únicas de retorno elevado, desde que analisadas com rigor.",
            },
          ],
        },
        {
          nome: "Defensivo (Passivo)",
          children: [
            {
              nome: "Minimizar esforço e erro",
              descricao:
                "O investidor defensivo busca simplicidade e segurança, evitando decisões complexas. Seu foco é reduzir a chance de erros graves por meio de regras claras, diversificação e disciplina.",
            },
            {
              nome: "Alocação 50/50 (Ações/Títulos)",
              descricao:
                "Recomendação clássica de dividir o portfólio igualmente entre ações de alta qualidade e títulos de renda fixa para equilibrar risco e retorno. Graham sugere que essa proporção pode variar entre 25% e 75% dependendo das condições de mercado, mas deve ser rebalanceada anualmente.",
            },
            {
              nome: "Focar em empresas líderes",
              descricao:
                "Empresas grandes, consolidadas e financeiramente sólidas tendem a apresentar menor risco. O investidor defensivo prioriza companhias com histórico estável, posição dominante no setor e boa governança.",
            },
          ],
        },
      ],
    },
    {
      nome: "Critérios de Seleção (Defensivo)",
      children: [
        {
          nome: "Tamanho adequado da empresa",
          descricao:
            "Empresas de grande porte oferecem maior estabilidade operacional, acesso a capital e resiliência em períodos de crise, reduzindo riscos para o investidor conservador.",
        },
        {
          nome: "Condição financeira forte (2:1 corrente)",
          descricao:
            "A relação entre ativos circulantes e passivos circulantes deve ser de pelo menos 2 para 1, garantindo liquidez suficiente para cumprir obrigações de curto prazo.",
        },
        {
          nome: "Estabilidade de lucros (10 anos)",
          descricao:
            "Lucros consistentes ao longo de pelo menos dez anos indicam um modelo de negócios sólido e capacidade de atravessar diferentes ciclos econômicos.",
        },
        {
          nome: "Registro de dividendos (20 anos)",
          descricao:
            "O pagamento contínuo de dividendos por longos períodos demonstra disciplina financeira, geração de caixa consistente e compromisso com os acionistas.",
        },
        {
          nome: "Crescimento de lucros (1/3 em 10 anos)",
          descricao:
            "Um crescimento moderado, porém constante, é preferível a expansões agressivas. Graham valorizava empresas que aumentassem seus lucros em pelo menos 33% ao longo de uma década.",
        },
        {
          nome: "P/L moderado (max 15x)",
          descricao:
            "O índice Preço/Lucro deve permanecer em níveis razoáveis, evitando pagar caro demais por expectativas futuras. Graham considerava múltiplos elevados um risco adicional.",
        },
        {
          nome: "P/VP moderado (max 1.5x ou Regra 22.5)",
          descricao:
            "O preço da ação não deve ultrapassar excessivamente o valor patrimonial da empresa. A Regra 22.5 combina P/L e P/VP para garantir avaliações conservadoras.",
        },
      ],
    },
    {
      nome: "Estratégias Quantitativas",
      children: [
        {
          nome: "Net-Net (NCAV)",
          children: [
            {
              nome: "Comprar abaixo do capital circulante liquido",
              descricao:
                "A estratégia Net-Net busca empresas cujo valor de mercado seja inferior ao valor de seus ativos circulantes líquidos, desconsiderando ativos fixos. Essa abordagem oferece extrema margem de segurança.",
            },
          ],
        },
        {
          nome: "Fórmula de Graham",
          children: [
            {
              nome: "V = √(2 x 1.5 x 2c)",
              descricao:
                "Também conhecida como Número de Graham, essa fórmula simplificada (V = √(22.5 × EPS × BVPS) calcula o preço máximo que um investidor defensivo deve pagar para manter os limites de P/L de 15 e P/VP de 1,5.",
            },
          ],
        },
      ],
    },
    {
      nome: "Psicologia e Comportamento",
      children: [
        {
          nome: "Disciplina emocional",
          descricao:
            "O investidor deve controlar emoções como medo e ganância, seguindo princípios racionais mesmo em momentos de euforia ou pânico do mercado.",
        },
        {
          nome: "Resistência a psicologia de massas",
          descricao:
            "Evitar seguir a multidão é essencial. Graham alertava que decisões baseadas no comportamento coletivo frequentemente levam a erros sistemáticos.",
        },
        {
          nome: "Paciência e foco no longo prazo",
          descricao:
            "Resultados consistentes exigem tempo. O investidor inteligente mantém paciência, permitindo que o valor intrínseco se reflita no preço ao longo dos anos.",
        },
      ],
    },
    {
      nome: "Legado e Discípulos",
      children: [
        {
          nome: "Warren Buffett (O maior pupilo)",
          descricao:
            "Buffett aplicou e expandiu os princípios de Graham, combinando margem de segurança com foco em qualidade e vantagens competitivas duráveis.",
        },
        {
          nome: "Security Analysis (1934)",
          descricao:
            "Obra seminal que estabeleceu as bases da análise fundamentalista, introduzindo métodos rigorosos para avaliação de ativos.",
        },
        {
          nome: "The Intelligent Investor (1949)",
          descricao:
            "Livro mais acessível de Graham, focado no comportamento do investidor e na aplicação prática do investimento em valor.",
        },
        {
          nome: "Pai da Análise Fundamentalista",
          descricao:
            "Benjamin Graham é reconhecido como o fundador da análise fundamentalista moderna, influenciando gerações de investidores e analistas financeiros.",
        },
      ],
    },
  ],
};
