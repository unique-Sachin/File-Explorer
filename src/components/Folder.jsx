import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      ...showInput,
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      //* add logic
      setShowInput({ ...showInput, visible: false });
    }
  };

  return explorer.isFolder ? (
    <div>
      <div className="folder" onClick={() => setExpand(!expand)}>
        <span>📂{explorer.name}</span>
        <div>
          <button onClick={(e) => handleNewFolder(e, true)}>Folder+</button>
          <button onClick={(e) => handleNewFolder(e, false)}>File+</button>
        </div>
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: "25px" }}>
        {showInput.visible && (
          <div className="inputContainer">
            <span>{showInput.isFolder ? "📁" : "📃"}</span>
            <input
              type="text"
              onKeyDown={onAddFolder}
              autoFocus
              onBlur={() => setShowInput({ ...showInput, visible: false })}
            />
          </div>
        )}
        {explorer.items?.map((el) => (
          <Folder key={el.id} explorer={el} />
        ))}
      </div>
    </div>
  ) : (
    <span className="file">📃{explorer.name}</span>
  );
};

export default Folder;
