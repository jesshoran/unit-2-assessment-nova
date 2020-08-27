const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>ToDo List</h1>
                {this.props.toDos <= 0 ? 
                    <h3>There are no todos yet!</h3> :
                <ul>
                    {this.props.toDos.map((toDo, i) => {
                            return (
                                <li>
                                    <div> 
                                        {toDo.todo} - {toDo.done ? `Done` : `Not Done`}
                                    </div>    
                                    {/* <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="delete"/>
                                    </form> */}
                                    
                                </li>

                                // : <h3>There are no todos yet!</h3>
                            )
                        })
                    }
                </ul>}

                <form action="/" method="POST">
                    <input type="text" name="todo"/>
                    <input type="submit" name="" value="ADD TO DO"/>
                </form>
            </div>
        )
    }
}

module.exports = Index;