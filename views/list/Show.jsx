const React = require('react');
const Default = require('../components/Default');


class Show extends React.Component{
    render(){
        const {name, task , isDone} = this.props.list
        return(
            <Default>
           <div>
               <h1>To Do List Show</h1>
                <p>Add {name} to {task}</p>
                <p>{isDone}? `This is the Task</p>
                <a href="/list">Back</a>
           </div>
           </Default>
        )
    }
}

module.exports = Show