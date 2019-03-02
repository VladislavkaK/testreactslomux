import React from 'react';
import ToDoComponent from '../components/ToDoComponent';
import { connect } from 'react-redux';
import addTodo from '../actions/addTodo';

function mapStateToProps(state) {
    return {
        todos: state,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo(text) {
            dispatch(addTodo(text));
        }
    }
}

const ToDo = connect(mapStateToProps, mapDispatchToProps)(ToDoComponent);

export default ToDo;