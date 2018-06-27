
export const getVisibleTodos = ({ todos, priorityFilter, search}, statusFilter) =>
    
  todos.filter(todo => {
    const contentMatch = todo.task.toLowerCase().includes(search);
    const statusMatch = todo.status === statusFilter;

    if (priorityFilter === 'all') return contentMatch && statusMatch;

    const priorityMatch = todo.priority === priorityFilter;
    const match = priorityMatch && contentMatch && statusMatch;

    return match;
  });

export const getPagesToShow = (currentPage, totalPages) => {

  const pagesNumbers = Array.from({ length: totalPages }, (v, i) => i + 1);

  const startPage = (currentPage <= 3) ? 0 : currentPage - 2;
  const endPage = (currentPage <= totalPages - 3) ? currentPage + 1 : totalPages;

  const arrPagesToShow = pagesNumbers.slice(startPage, endPage);
  if (endPage !== totalPages) {
    arrPagesToShow.push("...", totalPages);
  }
  if (startPage !== 0) {
    arrPagesToShow.unshift(1, "...");
  }

  return arrPagesToShow;
}




