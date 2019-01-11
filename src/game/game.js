import React, { Component } from 'react';
import Сharacters from './characters';
// import Attack from './attack';
import ModalWindow from './modalWindow';

class Game extends Component{
    constructor(){
        super();
        this.state = {
            countOfRounds: 0,
            resultTask: false

        }
    }

    nextRound(){
        this.setState((state) => ({
            countOfRounds: state.countOfRounds + 1 
          }));
    }
    attack(result){
        if(typeof result == "boolean"){

            this.func(result);
        }
        else{
            this.func = result;
        }
    }
    render(){
        return(
            <div>
            <Сharacters rounds={this.state.countOfRounds} changeRound={this.nextRound.bind(this)} stateСharacter={this.attack.bind(this)}/>
            <ModalWindow getAnswer={this.attack.bind(this)}/>
            </div>
        )
    }
}

export default Game;