import React from 'react'

class AddProfileForm extends React.Component{
    state = {
        username : ''
    }

    handleInputChange = (event) => {
        this.setState({ username : event.target.value })
    }

    handleFormSubmit = (event) => {
        event.preventDefault()
        this.props.handleSubmit(this.state.username)
        this.setState({ username : '' })
    }

    render() {
        return (    
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" value={this.state.username} onChange = {this.handleInputChange} />
                <button type="submit">Add Profile</button>
            </form>
        )
    }
}

export default AddProfileForm