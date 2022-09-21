import Dropdown from "./Dropdown";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* multiple select example */}
      <Dropdown
        multi={true}
        title="vegetables"
        items={[
          "tomato",
          "carrot",
          "cucumber",
          "zucchini",
          "broccoli",
          "celery",
          "avocado",
        ]}
      />

      {/* single select example */}
      <Dropdown
        multi={false}
        title="fruits"
        items={["grapes", "watermelon", "mango", "stawberry", "lychee"]}
      />
    </div>
  );
}

export default App;
