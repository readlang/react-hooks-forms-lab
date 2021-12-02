import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [searchField, setSearchField] = useState("")
  const [filterCategory, setFilterCategory] = useState("All");
  const [newItemField, setNewItemField] = useState({name: "", category: "Produce"})

  function handleFormSubmit(event) {
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: newItemField.name,
      category: newItemField.category,
    }
    setItems([...items, newItem])
  }

  const itemsToDisplay = items.filter((item) => {
    if (filterCategory === "All") return true;
    return item.category === filterCategory;
  });

  const filterBySearch = itemsToDisplay.filter((item) => {return item.name.includes(searchField) })

  return (
    <div className="ShoppingList">

      <ItemForm 
        newItemField={newItemField} 
        handleNewItemChange={(e)=> setNewItemField({ ...newItemField, [e.target.name]:e.target.value})} 
        onItemFormSubmit={handleFormSubmit} 
      />

      <Filter onCategoryChange={(e)=> setFilterCategory(e.target.value)} 
        search={searchField} onSearchChange={(e)=> setSearchField(e.target.value)} 
      />

      <ul className="Items">
        {filterBySearch.map((item)=> ( <Item key={item.id} name={item.name} category={item.category} /> ))}
      </ul>

    </div>
  );
}

export default ShoppingList;
