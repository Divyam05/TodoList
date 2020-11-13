import React from 'react';
import PropTypes from 'prop-types';  
import './list-items.css'

class Todoitem extends React.Component{
render()
      {
    return <li className="li">
    {this.props.todo.content}
    <button className="button" onClick={this.props.onDelete}>Delete</button>
    </li>
      }
}
Todoitem.propTypes ={
    todo: PropTypes.object,
    onDelete: PropTypes.func
}

export default Todoitem