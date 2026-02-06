import React from "react";
import { grahamData } from "./data/grahamData";
import Card from "./components/Card";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">{grahamData.title}</h1>
          <p className="app-subtitle">
            Benjamin Graham's Investment Philosophy
          </p>
        </div>
      </header>

      <main className="app-main">
        <div className="cards-grid">
          {/* Princípios e Fundamentos */}
          <Card title="Princípios e Fundamentos" icon="⚖️">
            <div className="subsections">
              <List
                title="Investimento vs. Especulação"
                items={grahamData.sections[0].subsections[0].items}
              />
              <List
                title="Margem de Segurança"
                items={grahamData.sections[0].subsections[1].items}
              />
              <List
                title="Senhor Mercado"
                items={grahamData.sections[0].subsections[2].items}
              />
              <List
                title="Disclaimer (Passivo)"
                items={grahamData.sections[0].subsections[3].items}
              />
            </div>
          </Card>

          {/* Tipos de Investidor */}
          <Card title="Tipos de Investidor" icon="👤">
            <List
              title="Empreendedor (Ativo)"
              items={grahamData.sections[1].subsections[0].items}
            />
          </Card>

          {/* Critérios de Seleção */}
          <Card title="Critérios de Seleção (quantitativos)" icon="📊">
            <List items={grahamData.sections[2].items} numbered={true} />
          </Card>

          {/* Estratégias Quantitativas */}
          <Card title="Estratégias Quantitativas" icon="📈">
            <List
              title="Net-Net (NCAV)"
              items={grahamData.sections[3].subsections[0].items}
            />
            <List
              title="Fórmula de Graham"
              items={grahamData.sections[3].subsections[1].items}
            />
          </Card>

          {/* Psicologia e Comportamento */}
          <Card title="Psicologia e Comportamento" icon="🧠">
            <List items={grahamData.sections[4].items} />
          </Card>

          {/* Legados e Discípulos */}
          <Card title="Legados e Discípulos" icon="🏆">
            <List items={grahamData.sections[5].items} />
          </Card>
        </div>
      </main>

      <footer className="app-footer">
        <p>Based on Benjamin Graham's teachings - The Intelligent Investor</p>
      </footer>
    </div>
  );
}

export default App;
