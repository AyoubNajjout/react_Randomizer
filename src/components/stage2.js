import React,{useContext} from 'react';
import { MyContext } from '../context';

const Stage2 = () => {
    const context=useContext(MyContext)
    return (
        <div>
            <h2>{context.state.looser}</h2>
            <button onClick={()=>context.regenerate()}>Regenerate looser</button>
            <button onClick={()=>context.restart()}>Restart</button>
        </div>
    );
};

export default Stage2;