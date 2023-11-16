//imported modules...

import {React, ReactDOM} from 'react';
import './DefaultCard.css';

//DefaultCard function...
const DefaultCard = (props) => {
  //return statement...
    return (
            <div class="custom-input" contenteditable="false">
              {props.about}
            </div>   
 );
    }

export default DefaultCard;