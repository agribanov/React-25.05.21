function ListItem({ item, onDelete, onToggle }) {
    function deleteClickHandler(e) {
        e.stopPropagation();
        onDelete(item.id);
    }

    function toggleClickHandler() {
        onToggle(item.id);
    }

    return (
        <li onClick={toggleClickHandler}>
            {item.title} - {'' + item.isDone}
            <button onClick={deleteClickHandler}>Delete</button>
        </li>
    );
}

export default ListItem;
