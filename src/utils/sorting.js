const sortByDate = (todos, sortMethod) => {
    const getDate = string => new Date(JSON.parse(JSON.stringify(string)));
    const copyTodos = todos.slice();
    const field = sortMethod.sortBy;
    const direction = sortMethod.direction;

    if (direction) {
        return copyTodos.sort((todoA, todoB) =>
            getDate(todoA[field]) - getDate(todoB[field]));
    }
        
    return copyTodos.sort((todoA, todoB) =>
            getDate(todoB[field]) - getDate(todoA[field]));
}

export default sortByDate;