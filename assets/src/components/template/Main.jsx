import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Header from "./Header";

export default function Main() {
  return (
    <React.Fragment>
      <Header />
      <main className="content">
        <h1>Conteúdo Principal</h1>
      </main>
   </React.Fragment>
  );
}

