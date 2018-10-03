import React, { Component } from 'react';

class gameForm extends Component {

    state = {
        title: '',
        cover: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
        <form className="ui form" onSubmit={this.handleSubmit}>
            <h1>Add New Game</h1>
            <div className="field">
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleChange}
                />
            </div>
            <div className="field">
                <label htmlFor="cover">Cover Url</label>
                <input 
                    type="text" 
                    name="cover" 
                    value={this.state.cover}
                    onChange={this.handleChange}
                />
            </div>
            <div className="field">   
                {
                    this.state.cover !== '' &&  <img src={this.state.cover} alt="cover" className="ui small bordered image" />

                }
            </div>
            <div className="field">
                <button className="ui primary button">save</button>
            </div>
        </form>
        );
    }
}

export default gameForm;