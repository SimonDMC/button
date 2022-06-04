import {useState} from 'react';
import firebase from '../firebase';
import pressed from '../pressed.svg';
import unpressed from '../unpressed.svg';
import pressedIcon from '../pressed.ico';
import unpressedIcon from '../favicon.ico';

const Button = (props) => {

  const [pressState, setPressed] = useState(false);

  const firestore = firebase.firestore();
  const increment = firebase.firestore.FieldValue.increment(1);
  const dbRef = firestore.collection('button').doc(props.env);

  // increment and write to db
  async function press() {
    if (pressState) return;
    setPressed(true);
    document.querySelector("#favicon").href = pressedIcon;
    dbRef.update({ count: increment });
    await new Promise(resolve => setTimeout(resolve, 500));
    setPressed(false);
    document.querySelector("#favicon").href = unpressedIcon;
  };

  return (
    <img
      className="Button"
      onClick={press}
      src={pressState ? pressed : unpressed}
      alt="Button"
      />
  )
}

export default Button;