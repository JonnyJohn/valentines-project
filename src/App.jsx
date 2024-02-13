import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Background from "./components/background";
import { useState } from "react";
import "./App.css";

function App() {
  const [optionSelected, setOptionSelected] = useState("");
  const [timesNoClick, setTimesNoClick] = useState(0);

  if (optionSelected === "yes") {
    return (
      <>
        <Background />
        <div className="container">
          <div className="block">
            <h2>
              I can't believe you really said yes!. This is really the best day of my life 🤣. 
              All jokes aside, I couldn't have picked a better valentine / girlfriend / life partner / supporter / everything.
              The time that we have spent together has been the best time of my life. I don't regret any of it.
              I know that we go through our struggles every now and then, but I honestly wouldn't want to go through them with anyone else.
              I love you so much and I hope that we can continue to grow together and be happy together. Lets make the rest of 2024 the best year of our lives. 
            </h2>

            <br />
            <h2>
              signed, <br />
              your loving boyfriend <br />
              <br />
            </h2>
          </div>
        </div>
      </>
    );
  } else if (optionSelected === "no") {
    let reallies = "";
    for (var i = 0; i < timesNoClick; i++) {
      reallies += "really ";
    }

    return (
      <>
        <Background />
        <div className="container">
          <h1> Do you {reallies} mean that? </h1>
          <Stack spacing={2} direction="row">
            <Button
              className="button"
              variant="contained"
              color="success"
              onClick={() => {
                setOptionSelected("no");
                setTimesNoClick(timesNoClick + 1);
              }}
            >
              Yes
            </Button>
            <Button
              className="button"
              variant="contained"
              color="error"
              onClick={() => setOptionSelected("yes")}
            >
              No
            </Button>
          </Stack>
        </div>
      </>
    );
  } else {
    return (
      <>
        <Background />
        <div className="container">
          <h1> Will you be my valentine? </h1>
          <Stack spacing={2} direction="row">
            <Button
              className="button"
              variant="contained"
              color="success"
              onClick={() => setOptionSelected("yes")}
            >
              Yes
            </Button>
            <Button
              className="button"
              variant="contained"
              color="error"
              onClick={() => {
                setOptionSelected("no");
                setTimesNoClick(timesNoClick + 1);
              }}
            >
              No
            </Button>
          </Stack>
        </div>
      </>
    );
  }
}

export default App;
