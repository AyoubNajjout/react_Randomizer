import React, { useContext, useRef, useState } from 'react';
import { MyContext } from '../context';
import Stage2 from './stage2';

const Stage1 = () => {

    const [error, setError] = useState([false, '']);
    const context = useContext(MyContext);
    const inputValue = useRef();



    const handleSubmit = (e) => {
        e.preventDefault();
        const name = inputValue.current.value;
        const validate = validateInput(name);
        if (validate) {
            setError([false, '']);
            context.passName(name);
            inputValue.current.value = ''
        }

    }

    const validateInput = (name) => {
        if (name === '') {
            setError([true, 'a name is required !'])
            return false
        }
        if (name.length < 3) {
            setError([true, 'please enter a valid name !'])
            return false
        }
        return true
    }



    return (
        <div>
            <h2>Randomizer</h2>
            {context.state.stage === 1 ?
                <div>
                    
                    <form>
                        <input type='text' placeholder='enter a name' ref={inputValue}></input>
                        <button onClick={handleSubmit}>Add player</button>
                    </form>
                    {error[0] ? <p>{error[1]}</p> : null}
                    <div>
                        {context.state.player && context.state.player.length > 0 ?
                            <ul>
                                {context.state.player.map((P, idx) => (
                                    <li key={idx}>{P}<button onClick={() => context.modify(idx,inputValue.current.value)}>Modify</button><button onClick={() => context.deletePlayer(idx)}>delete</button></li>
                                ))}
                            </ul>
                            :
                            null
                        }
                    </div>
                    <div>
                        {context.state.player.length >= 2 ? <button onClick={()=>context.stage2()}>Play</button> : null}
                    </div>
                </div>
                : <Stage2/>}
        </div>
    );
};

export default Stage1;