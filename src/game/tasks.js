import React, { Component } from 'react';


export class TaskAll extends React.Component {

    constructor(props) {
        super(props);
    }
    click(event) {
        this.props.taskActive(event.target.childNodes[0].parentNode.getAttribute('data-number'));
    }
    render() {

        return (
            <div className='flex' onClick={this.click.bind(this)}>
                <div className='columnOne flex'>
                    <div data-number='1'>
                        математика
                </div>
                    <div data-number='2'>
                        перевод слова
                </div>
                    <div data-number='3'>
                        угадай мелодию
                </div>
                </div>
                <div className='columnTwo flex'>
                    <div data-number='4'>
                        выбрать лишнее
                </div>
                    <div data-number='5'>
                        напишите антоним к слову
                </div>
                    <div data-number='6'>
                        города
                </div>
                </div>
            </div>
        )
    }
}





export class TaskOne extends React.Component {

    constructor(props) {
        super(props);
        this.numberOne = Math.floor(Math.random() * 100);
        this.numberTwo = Math.floor(Math.random() * 100);
        this.sign = (Math.floor(Math.random() * 2) === 1) ? ' + ' : ' - ';
        this.state = {
            value: ''
        }
    }

    calculate() {
        let expression = this.refs.expression.innerHTML;

        this.props.showNone(eval(expression) === +this.state.value);
    }

    changeValue(event) {
        let newValue = event.target.value;
        this.setState({
            value: newValue
        })
    }
    render() {
        return (

            <div className='flex math settingsFlex'>
                <p>
                    Посчитайте выражение
                        </p>
                <p ref='expression'>
                    {this.numberOne}
                    {this.sign}
                    {this.numberTwo}
                </p>

                <input value={this.state.value} onChange={this.changeValue.bind(this)} />
                <button onClick={this.calculate.bind(this)}>Ответить</button>
            </div>

        )
    }
}




export class TaskFour extends React.Component {

    constructor(props) {
        super(props);
        this.array = [['желтый', 'зеленый', 'красивый', 'голубой', 2], ['шкаф', 'рыба', 'диван', 'стул', 1], ['мышка', 'шапка', 'штаны', 'носки', 0],
        ['карандаш', 'ручка', 'гора', 'пенал', 2], ['лимон', 'ананас', 'мясо', 'киви', 2], ['тюлень', 'олень', 'заяц', 'волк', 0], ['телефон', 'планшет', 'ноутбук', 'блокнот', 3],
        ['мыло', 'бокал', 'чашка', 'тарелка', 0]];
        let randomElementFromArray = Math.floor(Math.random() * 7);

        this.state = {
            activ: this.array[randomElementFromArray]
        }
    }
    handlerClick(event) {
        this.props.showNone(this.state.activ[this.state.activ[4]] === event.target.childNodes[0].data);
    }
    render() {

        return (
            <div className='flex taskFour settingsFlex' onClick={this.handlerClick.bind(this)}>
                    <p>Нажмите на лишнее</p>
                <div>
                    <div className='flex taskFour'>

                        <button>{this.state.activ[0]}</button>
                        <button>{this.state.activ[1]}</button>
                    </div>
                    <div className='flex taskFour'>

                        <button>{this.state.activ[2]}</button>
                        <button>{this.state.activ[3]}</button>
                    </div>
                </div>

            </div>
        )
    }
}

export class Task extends React.Component {

    constructor(props) {
        super(props);
        this.array = props.array;
        let randomElementFromArray = Math.floor(Math.random() * props.randomElement);
        this.state = {
            answer: '',
            active: this.array[randomElementFromArray]
        }

    }
    changeValue(event) {
        let newValue = event.target.value;
        this.setState({
            answer: newValue
        })
    }
    compare() {
        this.props.showNone(this.state.active[1].toLowerCase() === this.state.answer.toLowerCase());
    }

    render() {

        return (
            <div className='flex  settingsFlex'>
                <p>
                    {this.props.ruleOfTask}
                </p>
                {(+this.props.numberTask === 3)? <audio src={this.state.active[0]} controls></audio> : <p>{this.state.active[0]}</p>}
                <input value={this.state.answer} onChange={this.changeValue.bind(this)} />
                <button onClick={this.compare.bind(this)}>Ответить</button>
            </div>
        )
    }
}
