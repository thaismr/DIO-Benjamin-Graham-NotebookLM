// Benjamin Graham Investment Philosophy Mind Map Data
// Based on Week 3: Value Investing Summary

export const grahamData = {
  title: "Resumo: Investimento em Valor",
  sections: [
    {
      id: "principles",
      title: "Princípios e Fundamentos",
      icon: "⚖️",
      subsections: [
        {
          id: "investment-speculation",
          title: "Investimento vs. Especulação",
          items: ["Segurança do principal", "Retorno satisfatório"],
        },
        {
          id: "margin-safety",
          title: "Margem de Segurança",
          items: ["Preço abaixo do valor intrínseco"],
        },
        {
          id: "mr-market",
          title: "Senhor Mercado",
          items: ["Aproveitar volatilidade emocional"],
        },
        {
          id: "disclaimer",
          title: "Disclaimer (Passivo)",
          items: [
            "Monitorar estritamente",
            "Alocação 50-50 (ativos/renda)",
            "Focar em empresas líderes",
          ],
        },
      ],
    },
    {
      id: "investor-types",
      title: "Tipos de Investidor",
      icon: "👤",
      subsections: [
        {
          id: "entrepreneur",
          title: "Empreendedor (Ativo)",
          items: [
            "Análise original e dedicada",
            "Busca por barganhas",
            "Estratégias específicas",
          ],
        },
      ],
    },
    {
      id: "selection-criteria",
      title: "Critérios de Seleção (quantitativos)",
      icon: "📊",
      isList: true,
      items: [
        "Tamanho adequado da empresa",
        "Condição financeira forte (2:1 corrente)",
        "Estabilidade de lucros (10 anos)",
        "Registro de dividendos (20 anos)",
        "Crescimento de lucros (1/3 em 10 anos)",
        "P/L moderado (máx. 12x)",
        "P/VP moderado (máx. 1.5x ou Regra 22.5)",
      ],
    },
    {
      id: "strategies",
      title: "Estratégias Quantitativas",
      icon: "📈",
      subsections: [
        {
          id: "net-net",
          title: "Net-Net (NCAV)",
          items: ["Comprar abaixo do capital circulante líquido"],
        },
        {
          id: "formula",
          title: "Fórmula de Graham",
          items: ["V = √(2 x 1.5 x 2c)"],
        },
      ],
    },
    {
      id: "psychology",
      title: "Psicologia e Comportamento",
      icon: "🧠",
      isList: true,
      items: [
        "Discrição emocional",
        "Resistência à psicologia do rebanho",
        "Paciência a longo prazo",
      ],
    },
    {
      id: "legacy",
      title: "Legados e Discípulos",
      icon: "🏆",
      isList: true,
      items: [
        "Warren Buffett (10 anos mentor)",
        "Security Analysis (1934)",
        "The Intelligent Investor (1949)",
        "Pai da Análise Fundamentalista",
      ],
    },
  ],
};
