import React from "react";

function ItemForm({ newItemField, handleNewItemChange, onItemFormSubmit }) {

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItemField.name} onChange={handleNewItemChange} />
      </label>

      <label>
        Category:
        <select name="category" value={newItemField.category} onChange={handleNewItemChange} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;