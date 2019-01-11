import React, { Component } from 'react';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: 'Введите имя',
        }
    }
    createHero(e) {
        this.props.numberHero(+e.target.alt.substring(6, 8));
    }
    inputLogin(event) {
        this.newValue = event.target.value;
        this.setState(() => ({
            login: this.newValue
        }));

    }

    overImg(e) {
        if (e.target.attributes.src === undefined) {
            return
        }
        else {
            this.changeSrc('./images/rick.png', e.target.attributes.src.nodeValue, './images/rickActiv.png', e);
            this.changeSrc('./images/morti.png', e.target.attributes.src.nodeValue, './images/mortiActiv.png', e);
            this.changeSrc('./images/jerry.png', e.target.attributes.src.nodeValue, './images/jerryActiv.png', e);
        }

    }

    outImg(e) {
        if (e.target.attributes.src === undefined) {
            return
        }
        else {
            this.changeSrc('./images/rickActiv.png', e.target.attributes.src.nodeValue, './images/rick.png', e);
            this.changeSrc('./images/mortiActiv.png', e.target.attributes.src.nodeValue, './images/morti.png', e);
            this.changeSrc('./images/jerryActiv.png', e.target.attributes.src.nodeValue, './images/jerry.png', e);
        }
    }

    changeSrc(src, compareSrc, newSrc, e) {
        if (compareSrc === src) {
            e.target.attributes.src.nodeValue = newSrc;
        }
    }

    startGame() {
        if (this.props.hero === true && this.state.login !== 'Введите имя') {
            this.refs.buttonStartGame.parentElement.classList.add('none')
            this.refs.buttonStartGame.setAttribute("disabled", "disabled");
        }
    }
    render() {
        return (
            <div id="signWindow" className="signWindow">
                <div className="wrapperForSign">
                    <input id="loggin" value={this.state.login} onChange={this.inputLogin.bind(this)} />
                    <div className="character">
                        <p>Выберите пресонажа</p>
                        <div id="avatars" onMouseOver={this.overImg.bind(this)} onMouseOut={this.outImg.bind(this)} onClick={this.createHero.bind(this)} >
                            <figure ><img src="./images/rick.png" alt="hero - 1" /></figure>
                            <figure ><img src="./images/morti.png" alt="hero - 2" /></figure>
                            <figure ><img src="./images/jerry.png" alt="hero - 3" /></figure>
                        </div>
                    </div>
                </div>

                <button ref='buttonStartGame' id="playButton" onClick={this.startGame.bind(this)}>И<br />г<br />р<br />а<br />т<br />ь</button>
            </div>
        )
    }
}


export default Registration;


