import ListItem from './ListItem';

function List({ items, onDelete, onToggle }) {
    console.log(items);
    return (
        <ul>
            {items.map((item) => (
                <ListItem
                    key={item.id}
                    item={item}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
}

export default List;
