import React, { Component } from 'react';


class Health extends React.Component {

    constructor(props) {
        super(props);
        this.name = ['рик','морти','джерри','самер','бет','директор'];
        this.surname = ['санчес','головешкин','шмаль','попов','сюткин','гончар'];
        this.middleName = ['рикимович','мортичь','александров','филипович','олегович','dj']

        this.nameHero = this.name[Math.floor((Math.random() * 6))] + ' ' + this.surname[Math.floor((Math.random() * 6))] + ' ' + this.middleName[Math.floor((Math.random() * 6))];
        this.state = {
            nameEnemy: this.name[Math.floor((Math.random() * 6))] + ' ' + this.surname[Math.floor((Math.random() * 6))] + ' ' + this.middleName[Math.floor((Math.random() * 6))]
        }
        this.sendFunctionChangeHelth();
    }
    sendFunctionChangeHelth() {
        this.props.health(this.changeHelth.bind(this));
    }
    changeHelth(character, health) {
        if (character === 'hero') {
            this.refs.hero.classList.add(this.addClass(health));
            this.refs.hero.classList.remove(this.addClass(health - 1));
        }
        if (character === 'enemy') {
            this.refs.enemy.classList.add(this.addClass(health));
            this.refs.enemy.classList.remove(this.addClass(health - 1));
        }
        if(health === 4){
            this.setState(() => ({
                nameEnemy: this.name[Math.floor((Math.random() * 6))] + ' ' + this.surname[Math.floor((Math.random() * 6))] + ' ' + this.middleName[Math.floor((Math.random() * 6))]
            }));
            this.refs.enemy.classList.remove(this.addClass(health));
            (this.props.healthHero > this.props.healthEnemy)? this.props.newRound(false) : this.props.newRound(true);
        }

    }

    addClass(width) {
        switch (width) {
            case 0:
                return 'full';
            case 1:
                return 'quarter'
            case 2:
                return 'half'
            case 3:
                return 'oneQuarter'
            case 4:
                return 'zero'
        }
        
    }
    render() {
        return (
            <div className="stateCharecters">
                <div className='valueHero flex'>
                    <span>{this.nameHero}</span>
                    <input ref='hero' className='full' />
                </div>
                <div className='round flex'>
                    <span>{this.props.round}</span>
                </div>
                <div className='valueEnemy flex'>
                    <span>{this.state.nameEnemy}</span>
                    <input ref='enemy' className='full' />
                </div>
            </div>
        )
    }
}


export default Health;



