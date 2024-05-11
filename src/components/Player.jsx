import { useState } from 'react';
import './Player.css';

function Player(props) {


    useState(props.playerName)

    let[playerName,setplayerName]= useState(props.name);
   let [isEditing,setISEditing]= useState(false);


  function handleChange(event) {
    setplayerName(event.target.value);
}

   function handleClick(){
         if(isEditing == true) {
            props.setPlayer(playerName);
            setISEditing(false);
         }
        else {
                 setISEditing(true);
            }
   }

   function handleKey(event) {
    if(event.key =="Enter") {
        props.setPlayer(playerName);
        setISEditing(false);
    }

   }

   let editableplayerName=<span className='player-name'>{playerName}</span>
   if(isEditing==true) {
    editableplayerName =
     <input type = "text"
      required
       onChange={handleChange}
       onKeyDown={handleKey} />
   }
   

    return (
        <div className="Player-container">
            
            {editableplayerName}
            <span className='symbol'> {props.symbol}</span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"} </button>
        </div>
    );
}

export default Player;