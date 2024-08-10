import React,{useState} from "react";

function InputArea(props) {
    const [newEntry, SetEntry] = useState("");

    function handleChange(event){
        const value = event.target.value;
        SetEntry(value);
    }

    return (
        <div className="form">
        <input onChange={handleChange} type="text" value={newEntry}/>
        <button onClick = {()=>{
            props.onClick(newEntry);
            SetEntry("");
        }} >
          <span>Add</span>
        </button>
      </div>
    );
}

export default InputArea;