import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="container m-auto mt-5">
      <h1 className="text-center text-2xl">TailwindCss Incorporado con PostCss</h1>
      <h2 className="text-center text-lg mt-5">Mi primer aplicacion de Reactjs</h2>
      {/* <button className="btn btn-blue btn-blue:hover">Boton</button> */}

      <div className="my-5 flex flex-wrap -mx-2">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo="https://picsum.photos/800/600" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo="https://picsum.photos/800/600" />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
          <Card photo="https://picsum.photos/800/600" />
        </div>
      </div>
    </div>
  );
}

export default App;
