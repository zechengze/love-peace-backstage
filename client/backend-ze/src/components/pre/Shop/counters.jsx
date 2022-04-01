import React, { Component } from 'react';
import Counter from './counter';

class Counters extends React.Component {
    state = { 
        counters: [
            {id: 10, value: 0},
            {id: 20, value: 2},
            {id: 30, value: 3},
            {id: 40, value: 4}
        ],
        total: 9
    } 
    handleIncrement = (e) => {
        var newState = {...this.state};
        newState.counters[e].value += 1;
        newState.total = this.getTotal();
        this.setState(newState);
    }
    handleDelete = (e) => {
        // alert("OK");
        // this.state.counters.pop();
        // this.setState({});

        // ----------method 1

        // var newState = {...this.state};
        // var index = -1;
        // for (let i = 0; i < newState.counters.length; i++) {
        //     if (newState.counters[i].id == e) {
        //         index = i;
        //         break;
        //     }
        // }
        // if (index >= 0) {
        //     newState.counters.splice(index, 1);
        //     this.setState(newState);
        // }

        // ----------method 2

        var newState = {...this.state};
        newState.counters = newState.counters.filter( x => x.id !== e );
        var result = 0;
        for (let i = 0; i < newState.counters.length; i++) {
            result += newState.counters[i].value;
        }
        newState.total = result;
        this.setState(newState);


        // newState.counters.splice
        // alert("Counter List: " + e);
    }
    getTotal = () => {
        var result = 0;
        for (let i = 0; i < this.state.counters.length; i++) {
            result += this.state.counters[i].value;
        }
        return result;
    }
    render() {
        return (
            <React.Fragment>
                <div>Total: {this.state.total} </div>
                {this.state.counters.map(
                    (c, idx) => <Counter
                        onIcrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        index={idx}
                        id={c.id}
                        key={c.id}
                        value={c.value} />)}
            </React.Fragment>
        );
    }
}

export default Counters;