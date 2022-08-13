import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

 export const GifExpertApp = () => {

  const [categories,setCategories] = useState(['Goku']);

  const onAddCategory = (newCategory) => {
    // const newCategory = "Naruto";
    if ( categories.includes(newCategory)) return;
 
    setCategories([newCategory,...categories]);
    console.log(newCategory);
  }
  
  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={ onAddCategory }/>
      
      {
        categories.map((category) => (
        <GifGrid key={ category } category = { category }/>

    ))
      }

    </>
  )
}
