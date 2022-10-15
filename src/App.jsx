import "./App.css";
import Table from "react-bootstrap/Table";
import Axios from "axios";
import { useState } from "react";

function App() {
  const url = "https://estagio.geopostenergy.com/WorldCup/GetAllTeams";

  const [data, setData] = useState([]);

  let rodadas = 0;
  const maxRodadas = 3;
  const jogos = 2;

  const match = async () => {
    const res = await Axios.get(url, {
      method: "GET",
      headers: {
        "git-user": "AlissonDevPort",
        Response: JSON,
      },
    });
    setData(res.data.Result);
    /*     console.log(res.data.Result);
     */
  };

  const array = data.map((obj) => {
    return Object.keys(obj).map((key) => {
      return obj[key];
    });
  });

  const narr = [];
  for (let i = 0; i < array.length; i++) {
    narr.push(array[i][1]);
  }
  /*  console.log(narr.length); */

  const times = [];
  let grupo = [];
  narr.forEach((time, index) => {
    grupo.push({
      [index]: {
        nome: time,
        gols: 0,
        pontos: 0,
      },
    });
    if (grupo.length === 4) {
      times.push(grupo);
      grupo = [];
    }
  });
  console.log(times)
  for (let i = 0; i < times.length; i++) {
    for (let j = 0; j < 4; j++) {}
  }

  /*   async function resultado() {
    const resultadof = await timesc;
    console.log(resultadof);
  } */

  // for > times  time x time, time = time continue, prpg .mathrandom 2 times, ver quem marcou+ +vitoria

  return (
    <div className="App">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Fase de grupo</th>
          </tr>
        </thead>
        <tbody className="bd">
          <tr>
            {data.map((key) => (
              <td className="row2" key={key.Name}>
                {key.Name}
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Oitavas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>grupo 1</td>
            <td></td>
          </tr>
          <tr>
            <td>grupo 2</td>
            <td></td>
          </tr>
          <tr>
            <td>grupo 3</td>
            <td></td>
          </tr>
          <tr>
            <td>grupo 4</td>
            <td></td>
          </tr>
          <tr>
            <td>grupo 5</td>
            <td></td>
          </tr>
          <tr>
            <td>grupo 6</td>
            <td></td>
          </tr>
          <tr>
            <td>grupo 7</td>
            <td></td>
          </tr>
          <tr>
            <td>grupo 8</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Quartas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>grupo 1</td>
            <td></td>
          </tr>
          <tr>
            <td>grupo 2</td>
            <td></td>
          </tr>
          <tr>
            <td>grupo 3</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Semi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Finalistas</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>Campeao</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="champ"></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <button onClick={match}>Iniciar Convocação</button>
      <button>Iniciar jogo</button>
    </div>
  );
}

export default App;
