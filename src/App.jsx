import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData.js";
import Folder from "./components/Folder";
import { useTraverse } from "./hooks/useTraverse";
function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverse();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };
  return (
    <div className="App">
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </div>
  );
}

export default App;
