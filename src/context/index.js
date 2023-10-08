import React, { Component } from 'react';

const MyContext = React.createContext();
const DEFAULT={
    stage:1,
    player:[],
    looser:''
};

class MyProvider extends Component {

    state= DEFAULT 

    nameHandler = (name) => {
        this.setState((prevState) => ({
            player: [...prevState.player, name]
        }));
    };

    removePlayer=(idx)=>{
        let arr=this.state.player;
        arr.splice(idx,1)
        this.setState({
            player:arr,
        })
    }

    stage2Function=()=>{
        this.setState({
            stage:2
        },
        ()=>this.regenerate()
        );
        
    }

    restart=()=>{
        this.setState(
            DEFAULT
        )
    }

    regenerate=()=>{
        this.setState({
            looser:this.state.player[(Math.floor(Math.random() * this.state.player.length))]
        })
    }

    modify=(idx,inputValue)=>{
        if(inputValue===''){
            return null
        }
        else {
            let arr=this.state.player;
        arr[idx]=inputValue;
        this.setState({
            player:arr
        })
        }
    }

    render() {
        return (
            <MyContext.Provider value={{
                state:this.state,
                passName:this.nameHandler,
                deletePlayer:this.removePlayer,
                stage2:this.stage2Function,
                restart:this.restart,
                regenerate:this.regenerate,
                modify:this.modify
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

export {MyProvider,MyContext};

