import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemData);
  
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={ ()=> setIsDarkMode((isDarkMode) => !isDarkMode) } />
      <ShoppingList items={items} setItems={setItems} />
    </div>
  );
}

export default App;
