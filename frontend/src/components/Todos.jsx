import PropTypes from 'prop-types';


export function Todos({todos}){
    // create state for todos - title, descritption
    // map through each todo one by one


    return <div>
        {todos.map(function (todo){
            return <div key={todo.id}> 
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button>{todos.completed == true ? "Completed": "Mark as complete"}</button>
            </div>
        })}
    </div>
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
};
