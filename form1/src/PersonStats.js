import React, { Component } from 'react';

class PersonStats extends Component {
    constructor(props){
        super(props);
        this.state = {name:"",
                    age: "",
                    feel: "",
                    message: ""}
    }

    nameChange = (event) => {
        this.setState({name: event.target.value})
    };

    ageChange = (event) => {
        this.setState({age: event.target.value})
    };

    feelChange = (event) => {
        this.setState({feel: event.target.value})
    };

    submitFunc = (event) => {
        this.setState({message: "Hello " + this.state.name +"." + " Your age is " + this.state.age + " and you're feeling " + this.state.feel});
        console.log(this.state.message);
        document.getElementById("message").innerHTML = this.state.message;
        event.preventDefault();
    };

    render() {
        return (
            <div className="PersonStats">
                <form onSubmit={this.submitFunc}>
                    <label htmlFor="name">Name: </label>
                    <input type="text" value={this.state.name} onChange={this.nameChange}/>
                    <label htmlFor="age"> Age: </label>
                    <input type="text" value={this.state.age} onChange={this.ageChange}/>
                    <label htmlFor="feel"> How Are You Feeling: </label>
                    <input type="text" value={this.state.feel} onChange={this.feelChange}/>

                    <div>
                        <br/>
                        <button>Submit</button>

                    </div>

                    <div>
                        <br/>
                        <h2 id="message"></h2>
                    </div>
                </form>

            </div>
        );
    }
}

export default PersonStats;