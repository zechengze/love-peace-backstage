import React, { Component } from 'react';


class Counter extends React.Component {
    state = {
        count: this.props.value,
        tags: ["AAA", "BBB", "CCC"]
    };

    stylelist = {
        fontSize: 24,
        fontWeight: "bold"
    };

    render() {
        return (
            <React.Fragment>
                <span style={this.stylelist} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    // onClick={this.handleIncrement}
                    onClick={() => { this.props.onIcrement(this.props.index) }}
                    className="btn btn-outline-success">
                    Increment
                </button>
                &nbsp; | &nbsp;
                <button
                    className="btn btn-outline-danger"
                    onClick={() => { this.props.onDelete(this.props.id) }}>
                    &times;
                </button>
                {this.renderTags()}
            </React.Fragment>
        );
    }

    handleIncrement = (e) => {
        console.log(e);

        // -----method 1

        // this.state.count += 1;
        // this.setState({});
        // console.log("Increment Clicked", this.state.count)

        // -----method 2

        // this.setState({ count: ++this.state.count })

        // -----method 3

        var newState = {...this.state};
        newState.count += 1;
        this.setState(newState);
    }
    // constructor(props) {
    //     super(props);
    //     console.log(this.props);
    //     this.state.count = this.props.value;
    //     console.log("constructor: ", this);
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state.count = this.props.value;
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    renderTags() {
        if (this.state.tags.length === 0)
            return <p>There are no tags.</p>;

        return (<ul>
            {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
            {/* {this.state.tags.map(function (tag) { return <li key={tag}>{tag}</li> })} */}
        </ul>);
    }

    getBadgeClasses() {
        var classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        return (this.props.value === 0) ? "Zero" : this.props.value;
        // const { count } = this.state;
        // return count === 0 ? 'Zero' : count;
    }
}

export default Counter;