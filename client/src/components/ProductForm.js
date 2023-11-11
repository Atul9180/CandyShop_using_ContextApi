import React, { useState } from "react";

const ProductForm = () => {
  const [formData, setFormData] = useState({
    CandyName: "",
    CandyDescription: "",
    CandyPrice: "",
  });

  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  //   console.log(items);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevdata) => ({ ...prevdata, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.CandyName &&
      formData.CandyDescription &&
      formData.CandyPrice
    ) {
      const newItem = {
        CandyName: formData.CandyName,
        CandyDescription: formData.CandyDescription,
        CandyPrice: formData.CandyPrice,
      };
      const updatedItems = [...items, newItem];

      localStorage.setItem("items", JSON.stringify(updatedItems));
      setItems(updatedItems);
      setFormData({ CandyName: "", CandyDescription: "", CandyPrice: "" });
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div>
      <h1 className="text-center">Product Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="CandyName"
          value={formData.CandyName}
          onChange={handleChange}
          placeholder="CandyName"
          required
        />
        <input
          type="text"
          name="CandyDescription"
          value={formData.CandyDescription}
          onChange={handleChange}
          placeholder="CandyDescription"
          required
        />
        <input
          type="number"
          name="CandyPrice"
          value={formData.CandyPrice}
          onChange={handleChange}
          min={0}
          max={999999}
          placeholder="CandyPrice"
          required
        />
        <button type="submit">Add Candy</button>
      </form>

      <hr />
    </div>
  );
};

export default ProductForm;
