import React, { Component } from 'react';
import Registration from './registration';
import Health from './health';


let partsOfBody = [['./character/samer/head.png', './character/misses/head.png', './character/poopybutthole/head.png'],
['./character/samer/body.png', './character/misses/body.png', './character/poopybutthole/body.png'],

['./character/samer/hair.png', './character/misses/hair.png', './character/poopybutthole/hair.png'],

['./character/samer/leg.png', './character/misses/leg.png', './character/poopybutthole/leg.png'],

['./character/samer/handRigth.png', './character/misses/handRigth.png', './character/poopybutthole/handRigth.png',],

['./character/samer/handLeft.png', './character/misses/handLeft.png', './character/poopybutthole/handLeft.png'],

['head', 'body', 'hair', 'leg', 'handRigth', 'handLeft']];


class Сharacters extends React.Component {
    constructor(props) {
        super(props);
        this.context;
        this.contextEnemy;
        this.number = 0;

        this.breathInterval = setInterval(() => {
            this.updateBreath();
        }, 100);
        this.breathInc = 0.9;
        this.breathDir = 1;
        this.breathAmt = 0;
        this.breathMax = 2;
        this.img = {};
        this.drawCharacters;
        this.state = {
            hero: false,
            sound: null,
            healthEnemy: 0,
            healthHero: 0,
            game: false
        }
    }


    answer(result) {
        if (result !== undefined) {
            clearInterval(this.drawCharacters);
            clearInterval(this.breathInterval);
            this.img['attack'] = new Image();
            this.img['attack'].src = './images/attack.png';
            this.img['attack'].onload = () => {
                this.draw(result);
            }
        }
        this.props.stateСharacter(this.answer.bind(this));
    }

    draw(result) {
        if (result) {
            this.contextEnemy.drawImage(this.img["attack"], 500, 0, 300, 300);
            this.setState((state) => ({
                healthEnemy: state.healthEnemy + 1
            }));
            this.healthChange('enemy', this.state.healthEnemy);
        }
        else {
            this.setState((state) => ({
                healthHero: state.healthHero + 1
            }));
            this.context = this.refs.canvas.getContext('2d');
            this.context.drawImage(this.img["attack"], 0, 0, 300, 300);
            this.healthChange('hero', this.state.healthHero);
        }
        let promise = new Promise((resolve, rejects) => {
            setTimeout(resolve, 1000);
        });
        promise.then(() => {
            this.drawCharacters = setInterval(() => { this.redraw() }, 100);
            this.breathInterval = setInterval(() => { this.updateBreath() }, 100);
        })
    }


    healthChange(changeHealth, stateHealth) {
        if (typeof changeHealth == 'function') {
            this.changeHealthHeroAndEnemy = changeHealth;
        }
        else {
            this.changeHealthHeroAndEnemy(changeHealth, stateHealth);
        }
    }

    changeRound(result) {
        if (result) {
            this.setState(() => ({
                healthEnemy: 0
            }));
            this.healthChange('enemy', this.state.healthEnemy);
            this.props.changeRound();
            this.choiceOfPartsOfBody();

        }
        else {
            this.setState(() => ({
                game: true
            }));
        }
    }

    createHero(newNumber) {
        this.totalResources = 6;
        this.number = newNumber;

        this.numResourcesLoaded = 0;
        this.images = {};

        this.totalResourcesEnemy = 6;
        this.numResourcesLoadedEnemy = 0;
        this.imagesEnemy = {};


        this.context = this.refs.canvas.getContext('2d');
        this.contextEnemy = this.refs.canvasEnemy.getContext('2d');
        this.loadHero();
        this.choiceOfPartsOfBody();

    }

    loadHero() {
        this.loadImage("leg");
        this.loadImage("handLeft");
        this.loadImage("handRigth");
        this.loadImage("body");
        this.loadImage("hair");
        this.loadImage("head");
    }

    choiceOfPartsOfBody() {
        for (let i = 0; i < partsOfBody.length - 1; i++) {
            let number = Math.floor(Math.random() * 3);
            this.loadImage(partsOfBody[6][i], partsOfBody[i][number]);
        }
    }

    createImg(name, src) {
        this.images[name] = new Image();
        this.images[name].src = src;
        if (this.state.hero === false) {
            this.images[name].onload = () => {
                this.resourceLoaded('hero');
            }
        }
    }

    loadImage(name, src) {
        let source;
        if (this.number === 1 && src === undefined) {
            source = './character/rick/' + name + '.png'
            this.createImg(name, source);
        }
        if (this.number === 2 && src === undefined) {
            source = './character/morti/' + name + '.png';
            this.createImg(name, source);
        }
        if (this.number === 3 && src === undefined) {
            source = './character/jerry/' + name + '.png'
            this.createImg(name, source);
        }
        if (src !== undefined) {
            this.imagesEnemy[name] = new Image;
            this.imagesEnemy[name].src = src;
            if (this.state.hero === false) {
                this.imagesEnemy[name].onload = () => {
                    this.resourceLoaded('enemy');
                }
            }
        }
    }

    resourceLoaded(key) {
        if (key === 'hero') {
            this.numResourcesLoaded += 1;
        }
        if (key === 'enemy') {
            this.numResourcesLoadedEnemy += 1;
        }
        if (this.numResourcesLoaded === this.totalResources && this.numResourcesLoadedEnemy === this.totalResourcesEnemy) {
            this.setState(() => ({
                hero: true
            }));
            this.drawCharacters = setInterval(() => { this.redraw() }, 100);

        }

    }
    drawHero(...coordinate) {
        this.context = this.refs.canvas.getContext('2d');
        this.context.canvas.width = this.context.canvas.width;

        this.context.drawImage(this.images["hair"], coordinate[0], coordinate[6] - this.breathAmt);
        this.context.drawImage(this.images["head"], coordinate[1], coordinate[7] - this.breathAmt);
        this.context.drawImage(this.images["handLeft"], coordinate[2], coordinate[8] - this.breathAmt);
        if (coordinate[12] === 1) {
            this.context.drawImage(this.images["body"], coordinate[3], coordinate[9] - this.breathAmt);
            this.context.drawImage(this.images["leg"], coordinate[4], coordinate[10]);
        }
        else {
            this.context.drawImage(this.images["leg"], coordinate[3], coordinate[9]);
            this.context.drawImage(this.images["body"], coordinate[4], coordinate[10] - this.breathAmt);
        }

        this.context.drawImage(this.images["handRigth"], coordinate[5], coordinate[11] - this.breathAmt);
    }

    redraw() {
        if (this.number === 1) {
            this.drawHero(128, 149, 178, 95, 102, 69, 58, 87, 119, 173, 305, 178, 1);
        }
        if (this.number === 2) {
            this.drawHero(85, 100, 152, 92, 95, 80, 52, 70, 170, 300, 163, 160);
        }
        if (this.number === 3) {
            this.drawHero(98, 100, 166, 85, 95, 79, 58, 70, 183, 318, 173, 180);
        }

        this.redrawEnemy();
    }

    redrawEnemy() {
        this.contextEnemy.canvas.width = this.contextEnemy.canvas.width;
        let x = (window.innerWidth - 10) / 2 - 300;

        this.contextEnemy.drawImage(this.imagesEnemy["leg"], x + 125, 362);
        if (this.imagesEnemy['handRigth'].getAttribute('src') === './character/misses/handRigth.png') {
            this.contextEnemy.drawImage(this.imagesEnemy["handRigth"], x + 81, 235 - this.breathAmt);
        }
        else {
            this.contextEnemy.drawImage(this.imagesEnemy["handRigth"], x + 120, 235 - this.breathAmt);
        }
        this.contextEnemy.drawImage(this.imagesEnemy["body"], x + 140, 218 - this.breathAmt);
        this.contextEnemy.drawImage(this.imagesEnemy["handLeft"], x + 175, 240 - this.breathAmt);
        this.contextEnemy.drawImage(this.imagesEnemy["hair"], x + 150, 104 - this.breathAmt);
        this.contextEnemy.drawImage(this.imagesEnemy["head"], x + 139, 117 - this.breathAmt);
    }
    updateBreath() {

        if (this.breathDir === 1) {
            this.breathAmt -= this.breathInc;
            if (this.breathAmt < -this.breathMax) {
                this.breathDir = -1;
            }
        } else {
            this.breathAmt += this.breathInc;
            if (this.breathAmt > this.breathMax) {
                this.breathDir = 1;
            }
        }
    }



    render() {
        this.answer();
        return (
            <div>
                <Health round={this.props.rounds} health={this.healthChange.bind(this)} newRound={this.changeRound.bind(this)} healthEnemy={this.state.healthEnemy} healthHero={this.state.healthHero} />
                <div className="wrapperForCanvas flex">
                    <div>
                        <canvas ref='canvas' width={(window.innerWidth - 30) / 2} height={window.innerHeight - 170}></canvas>
                    </div>
                    <div>
                        <canvas ref='canvasEnemy' width={(window.innerWidth - 30) / 2} height={window.innerHeight - 170}></canvas>
                    </div>
                    <Registration numberHero={this.createHero.bind(this)} hero={this.state.hero} />
                </div>
                {(this.state.game) ? <div className='gameOver'>Game Over <p>rounds : {this.props.rounds}</p> <button><a href='../gameMenu/menuGame.html'>Exit</a></button></div> : ''}
            </div>
        )
    }
}


export default Сharacters;



