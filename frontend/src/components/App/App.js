import * as React from "react";
import "./App.css";
import api from "../../utils/api";
import { useState } from "react";
import TableOfSongs from "../TableOfSongs/TableOfSongs";

const App = () => {
  const [songs, setSongs] = useState();

  React.useEffect(() => {
    api
        .getAllData()
        .then((data) => setSongs(data))
        .catch((err) => {
          console.log(err);
        });
  }, []);

  return <div className="App">{songs && <TableOfSongs songs={songs} />}</div>;
};

export default App;