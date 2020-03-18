'use strict';
const mongoose = require('mongoose'),
    Todo = mongoose.model('todo');

/**
 * returns a promise for search results
 *
 * @param search param
 * */
exports.search = function (params) {
    const  promise = Todo.find(params).exec();
    return promise;
}

/**
 * save the new todo object
 *
 * @param todo
 * */
exports.save = (todo) => {
    const newTodo = new Todo(todo);
    return newTodo.save();
};


/**
 * returns the todo object by id
 *
 * @param todoId
 * */
exports.get = (todoId) => {
    const orderPromise = Todo.findById(todoId).exec();
    return orderPromise;
}

/**
 * updates an existing todo
 *
 * @param updatedTodo
 * */
exports.update = (updatedTodo) => {
    const promise = Todo.findByIdAndUpdate(
        {_id: updatedTodo.id} ,
        updatedTodo
        ).exec();
    return promise;
};


/**
 * deletes an existing todo
 *
 * @param todoId
 * */
exports.delete = (todoId) => {
    const promise = Todo.findByIdAndRemove(
        {_id: todoId}
    ).exec();
    return promise;
}