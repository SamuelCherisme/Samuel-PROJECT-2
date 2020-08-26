const React = require('react')
const Default = require('../components/Default')

class Edit extends React.Component{
    render(){
        const {_id, name, task, isDone} = this.props.list;
        return(
            <Default>
            <div>
                <h1>Edit To Do List</h1>
                <form action={`/list/${_id}?_method=PUT`} method="POST">
                    Name: <input type="text" name="name"value={name}/><br/>
                    Task: <input type="text" name="task" value={task}/><br/>
                    isDone:
                    <input type="checkbox" name="isDone" checked={isDone}/>
                    <br/>
                    <input type="submit" name="" value="Add a task"/>
                </form>
                
            </div>
            </Default>
        )
    }
}

module.exports = Edit;

