import React, { Component } from 'react';
import Attack from './attack';
import { TaskOne, TaskFour, Task, TaskAll } from './tasks';


class ModalWindow extends React.Component {

    constructor(props) {
        super(props);
        this.arrayTaskTwo = [['автомобиль', 'car'], ['яблоко', 'apple'], ['хлеб', 'bread'], ['диван', 'sofa'], ['солнце', 'sun'], ['телефон', 'phone'], ['комната', 'room'], ['окно', 'window'], ['собака', 'dog'], ['кот', 'cat']]
        this.randomElementTaskTwoAndFiveAndSix = Math.floor(Math.random() * 10);


        this.arrayTaskThree = [['./ringtones/fill.mp3', 'цвет настроения синий'], ['./ringtones/krid.mp3', 'слеза'], ['./ringtones/eldzhej.mp3', 'минимал'], ['./ringtones/numb.mp3', 'numb'],
        ['./ringtones/matrang.mp3', 'медуза'], ['./ringtones/nezabudka.mp3', 'незабудка']]
        this.randomElementTaskThree = Math.floor(Math.random() * 5);

        this.arrayTaskFive = [['день', 'ночь'], ['небо', 'земля'], ['темный', 'светлый'], ['сладкое', 'соленое'], ['толстый', 'худой'],
        ['радость', 'грусть'], ['твердый', 'мягкий'], ['высокий', 'низкий'], ['широкий', 'узкий'], ['тихий', 'громкий']];


        this.arrayTaskSix = [['Франция', 'Париж'], ['Беларусь', 'Минск'], ['Китай', 'Пекин'], ['Россия', 'Москва'], ['Италия', 'Рим'],
        ['Япония', 'Токио'], ['Украина', 'Киев'], ['Германия', 'Берлин'], ['Польша', 'Варшава'], ['Латвия', 'Рига']];
        this.state = {
            task: 0
        }
    }

    removeClassHide() {
        this.refs.windowTasks.classList.remove('none');
    }
    showClassHide(result) {
        this.props.getAnswer(result);
        this.passToTask(0);
        this.refs.windowTasks.classList.add('none');
    }

    passToTask(numberTask) {
        this.setState({
            task: +numberTask
        })
    }

    render() {
        return (
            <div>
                <Attack removeNone={this.removeClassHide.bind(this)} />
                <div ref='windowTasks' className='modalWindow flex none'>
                    {(this.state.task === 0) ? <TaskAll numberTask='0' taskActive={this.passToTask.bind(this)} /> :
                        (this.state.task === 1) ? <TaskOne numberTask='1' taskActive={this.passToTask.bind(this)} showNone={this.showClassHide.bind(this)} /> :
                            (this.state.task === 2) ? <Task numberTask='2' ruleOfTask={'Переведите слово'} randomElement={10} array={this.arrayTaskTwo}  taskActive={this.passToTask.bind(this)} showNone={this.showClassHide.bind(this)} /> :
                                (this.state.task === 3) ? <Task numberTask='3' ruleOfTask={'Напишите название песни'} randomElement={5} array={this.arrayTaskThree} taskActive={this.passToTask.bind(this)} showNone={this.showClassHide.bind(this)} /> :
                                    (this.state.task === 4) ? <TaskFour numberTask='4' taskActive={this.passToTask.bind(this)} showNone={this.showClassHide.bind(this)} /> :
                                        (this.state.task === 5) ? <Task numberTask='5' ruleOfTask={'Антоним'} randomElement={10} array={this.arrayTaskFive} taskActive={this.passToTask.bind(this)} showNone={this.showClassHide.bind(this)} /> :
                                            (this.state.task === 6) ? <Task numberTask='6' ruleOfTask={'Напишите столицу'} randomElement={10} array={this.arrayTaskSix} taskActive={this.passToTask.bind(this)} showNone={this.showClassHide.bind(this)} /> : null}
                </div>
            </div>
        )
    }
}


export default ModalWindow;