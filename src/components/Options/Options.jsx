import { useState } from "react";
import css from './Options.module.css'

const Options = ({good, neutral, bad, totalFeedback, onUpdate}) => {

    return (
    totalFeedback ? 
      (<ul className={css.list}>
        <li><button className={css.button} onClick={() => onUpdate('good')}>Good</button></li>
        <li><button className={css.button} onClick={() => onUpdate('neutral')}>Neutral</button></li>
        <li><button className={css.button} onClick={() => onUpdate('bad')}>Bad</button></li>
        <li><button className={css.button} onClick={() => onUpdate('reset')}>Reset</button></li>
      </ul>)
      : (<ul className={css.list}>
        <li><button className={css.button} onClick={() => onUpdate('good')}>Good</button></li>
        <li><button className={css.button} onClick={() => onUpdate('neutral')}>Neutral</button></li>
        <li><button className={css.button} onClick={() => onUpdate('bad')}>Bad</button></li>
      </ul>)
  );
};

export default Options; 