import React, { Component } from 'react';


class Attack extends React.Component {

    constructor(props) {
        super(props);
    }

    chooseTask() {
        this.props.removeNone();
    }
    render() {
        return (
            <div className='tasks flex'>
                <button onClick={this.chooseTask.bind(this)}>Выберите задание</button>
            </div>
        )
    }
}


export default Attack;


