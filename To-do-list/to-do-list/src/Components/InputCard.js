import { React, ReactDOM, useState} from 'react';
import './InputCard.css';

const InputCard = () => {

  const [editableContent, setEditableContent] = useState('');

  const handleContentChange = (e) => {
    setEditableContent(e.target.textContent);
  };


  return <>
<div className="container">
    <div
        className="enterText"
        contentEditable="true"
        onInput={handleContentChange}
      >
      </div>
      <div class="circular-button" data-tooltip="Add something...">
    +
      </div>
</div>
  </>
}

export default InputCard;