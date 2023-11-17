//imported modules...
import React, { useState } from 'react';
import './InputCard.css';

//InputCard function ... Child of App.js....
const InputCard = (props) => {
  const [editableContent, setEditableContent] = useState('');

  //This function is called when user type something in the input field...
  const handleContentChange = (e) => {
    setEditableContent(e.target.textContent);
  };

  //This function is called when user click on the add button...
  const message = () => {
    if (editableContent.trim() !== '') {
      props.updateArr(editableContent.trim());
      setEditableContent('');
    }
  };

  //This function is called when user click on the clear all button...
  const deleteAll = () => {
    props.deleteMessage();
  };

  //return statement...
  return (
    <div className="container">
      <div className="enterText" contentEditable="true" onInput={handleContentChange} >
       {/* {editableContent}  */}
      </div>
      <div className="circular-button" data-tooltip="Add something..." onClick={message}>
        +
      </div>
      <div className="circular-button" data-tooltip="Clear All..." onClick={deleteAll}>
        -
      </div>
    </div>
  );
};

export default InputCard;
