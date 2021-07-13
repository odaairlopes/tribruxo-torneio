import { useEffect, useState } from "react";
import "./App.css";
import Students from "./components/Students";
import HomePage from "./components/HomePage";

function App() {
  const [students, setStudents] = useState([]);
  const [page, setPage] = useState(false);
  const [sorteados, setSorteados] = useState([]);

  useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/students?=${students}`)
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);

  const getRandom = (arr, nr) =>
    arr
      /* .filter((arr) => students.house !== arr.house) */
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, nr);

  /* 
  function getRandom() {
    const array = [Math.floor(Math.random() * students.length)];

    setSorteados([students[array[0]]]);

    while (sorteados.length <= 3) {
      const num = Math.floor(Math.random() * students.length);
      /* setSorteados([
        students[array[0]],
        students[array[1]],
        students[array[2]],
      ]); 
      const char = students[num];
      if (array !== num) {
        if (sorteados.length === 0) setSorteados(char)
        else if (
          sorteados.length === 1 &&
          char.house !== sorteados[0].house &&
          char.name !== sorteados[0].name
        )
          setSorteados(char)
        else if (
          sorteados.length === 2 &&
          char.house !== sorteados[0].house &&
          char.name !== sorteados[0].name &&
          char.house !== sorteados[1].house &&
          char.name !== sorteados[1].name
        )
          setSorteados(char)
      }
    }
  }*/

  return (
    <div className="App">
      <div className="App-header">
        {page ? (
          <Students students={students} getRandom={getRandom} />
        ) : (
          <HomePage setPage={setPage} />
        )}
      </div>
    </div>
  );
}

export default App;
