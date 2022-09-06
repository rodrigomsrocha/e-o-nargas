import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [isNargasActive, setIsNargasActive] = useState(false);

  function toggleNargas() {
    setIsNargasActive((state) => !state);
  }

  return (
    <div className={styles.container}>
      {isNargasActive && (
        <video width="400" autoPlay>
          <source src="/assets/e-o-narga.mp4" type="video/mp4" />
          support no
        </video>
      )}
      <button onClick={toggleNargas}>
        {isNargasActive ? "Tossiu passou!" : "E o narga?"}
      </button>
    </div>
  );
}

export default App;
