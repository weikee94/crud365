import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { saveGame } from '../actions';

class gameForm extends Component {

    state = {
        title: '',
        cover: '',
        errors: {},
        loading: false
    }

    handleChange = (e) => {

        if (!!this.state.errors[e.target.name]) {
            // copy 
            let errors = Object.assign({}, this.state.errors);
            delete errors[e.target.name];
    
            this.setState({
                [e.target.name]: e.target.value,
                errors
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let errors = {};
        if (this.state.title === '') {
            errors.title = "Cant be empty";
        }
        if (this.state.cover === '') {
            errors.cover = "Cant be empty";
        }

        this.setState({ errors });

        const isValid = Object.keys(errors).length === 0;

        if (isValid) {
            const { cover, title } = this.state;
            this.setState({ loading: true });
            this.props.saveGame({ title, cover });
        }

    }

    render() {
        return (
        <form className={ classnames('ui', 'form', { loading: this.state.loading }) } onSubmit={this.handleSubmit}>
            <h1>Add New Game</h1>
            <div className={ classnames('field', { error: !!this.state.errors.title }) }>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <span>{ this.state.errors.title }</span>
            </div>
            <div className={ classnames('field',{ error: !!this.state.errors.cover }) }>
                <label htmlFor="cover">Cover Url</label>
                <input 
                    type="text" 
                    name="cover" 
                    value={this.state.cover}
                    onChange={this.handleChange}
                />
                <span>{ this.state.errors.cover }</span>
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

export default connect(null, { saveGame })(gameForm);