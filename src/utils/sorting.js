const sortByDate = todos => {
    const getDate = string => new Date(JSON.parse(JSON.stringify(string)));
    const copyTodos = todos.slice();
    return copyTodos.sort((todoA, todoB) =>
        getDate(todoA.dueDate) - getDate(todoB.dueDate));
}

export default sortByDate;