import React, { Component } from 'react';

export default class UserInput extends Component {
  render() {
    return (
        <div>
            <label htmlFor={this.props.id}>
              {this.props.label}
            </label>
            <br/> 
            <input
            id={this.props.id} 
            type={this.props.type} 
            name={this.props.name}
            onChange={this.props.onChange}
            value={this.props.value} 
            />
        </div>    
    );
  }
}
