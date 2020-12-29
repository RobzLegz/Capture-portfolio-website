import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <AboutUs />
      <GlobalStyle />
    </div>
  );
}

export default App;
