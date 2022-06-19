import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("")

    const onInputChanged = (e) => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    }

    const onSubmit = (e) => {        
        e.preventDefault();
        if (inputValue.trim().length <= 3) return;

        // setCategories(c => [...c,inputValue]);  
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="Buscar Gifs"
            value={ inputValue }
            onChange= { (e) => onInputChanged(e) }>   
        </input>
    </form>
  )
}
