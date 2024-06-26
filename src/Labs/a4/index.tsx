import React from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import ReduxExamples from "./ReduxExamples";

const Assignment4 = () => {
  function sayHello() {
    alert("Hello");
  }

  function speak() {
    alert("Woof!");
  }

  return(
    <>
      <h1>Assignment 4</h1>
      <ReduxExamples/>
      <EventObject />
      <PassingFunctions theFunction={sayHello} />
      <PassingFunctions theFunction={speak} />
      <ClickEvent />
      <PassingDataOnEvent />
    </>
  );
};
export default Assignment4;