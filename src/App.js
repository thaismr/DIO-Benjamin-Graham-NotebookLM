import React, { useState } from "react";
import { grahamData } from "./data/grahamData";
import Card from "./components/Card";
import List from "./components/List";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    content: "",
  });

  const handleItemClick = (item) => {
    setModalData({
      isOpen: true,
      title: item.nome,
      content: item.descricao,
    });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">{grahamData.nome}</h1>
          <p className="app-subtitle">{grahamData.descricao}</p>
        </div>
      </header>

      <main className="app-main">
        <div className="cards-grid">
          {grahamData.children.map((section, sectionIndex) => (
            <Card
              key={sectionIndex}
              title={section.nome}
              icon={getSectionIcon(sectionIndex)}
            >
              {section.children.map((item, itemIndex) => (
                <div key={itemIndex} className="subsection">
                  {item.children && item.children.length > 0 ? (
                    // Item with nested children
                    <List
                      title={item.nome}
                      items={item.children}
                      onItemClick={handleItemClick}
                      numbered={false}
                    />
                  ) : (
                    // Leaf item
                    <List
                      items={[item]}
                      onItemClick={handleItemClick}
                      numbered={false}
                    />
                  )}
                </div>
              ))}
            </Card>
          ))}
        </div>
      </main>

      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
      >
        {modalData.content}
      </Modal>

      <footer className="app-footer">
        <p>
          Baseado nos ensinamentos de Benjamin Graham - O Investidor Inteligente
          | Conteúdo pesquisado com auxílio do NotebookLM
        </p>
      </footer>
    </div>
  );
}

// Helper function to get icons for each section
function getSectionIcon(index) {
  const icons = ["⚖️", "👤", "📊", "📈", "🧠", "🏆"];
  return icons[index] || "📋";
}

export default App;
