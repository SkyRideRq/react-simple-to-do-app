import React, { Component } from 'react';

class AddToDo extends Component {
    state = {
        content:''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addToDo(this.state)
        this.setState({
            content:''
        })
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Dodaj nowe zadanie</label>
                    <input type="text" value={this.state.content} onChange={this.handleChange}/>
                </form>
            </div>
        )
        
    }
}
export default AddToDo