import {useState, useEffect} from 'react';
import firebase from '../firebase';

function useCounter(env) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const unsubscribe = firebase
            .firestore()
            .collection('button')
            .doc(env)
            .onSnapshot(doc => {
                setCount(doc.data().count);
            });
        
        return () => unsubscribe();
    }, []);

    return count;
}

const Counter = (props) => {
    const count = useCounter(props.env);

    return (
        <span className="presses">{formatNumber(count)}</span>
    )
}

// format number to comma separated thousands
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default Counter;