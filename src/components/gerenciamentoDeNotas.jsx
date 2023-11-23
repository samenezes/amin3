import React, { useState } from "react";
import './style.css'

const gerenciamentoNotas = () => {
  
  const [notas, setNotas] = useState([]);
  const [newNota, setNewNota] = useState("");

  const handleAddNota = () => {
    if (newNota.trim() !== "") {
      setNotas([...notas, { text: newNota.trim(), checked: false }]);
      setNewNota("");
    }
  };

  const handleToggleNota = (index) => {
    const newNotas = [...notas];
    newNotas[index].checked = !newNotas[index].checked;
    setNotas(newNotas);
  };

  const handleDeleteNota = (index) => {
    const newNotas = [...notas];
    newNotas.splice(index, 1);
    setNotas(newNotas);
  };

  return (
    <div className="input-send">
      <input
        type="text"
        value={newNota}
        onChange={(e) => setNewNota(e.target.value)}
        className="input-text"
      />
      <button onClick={handleAddNota}>Adicionar</button>
      <ul>
        {notas.map((Nota, index) => (
          <li key={index}>
            <div>
              <input
                type="checkbox"
                checked={Nota.checked}
                onChange={() => handleToggleNota(index)}
              />
              <span style={{ marginRight: "10px", textDecoration: Nota.checked ? "line-through" : "none" }}>
                {Nota.text}
              </span>
            </div>
            <button onClick={() => handleDeleteNota(index)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default gerenciamentoNotas;
