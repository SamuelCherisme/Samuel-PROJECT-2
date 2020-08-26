const React = require('react');
const Default = require('../components/Default')
import { Draggable, Droppable } from 'react-drag-and-drop'




class Index extends React.Component{
    render(){
        const {list, data} = this.props;
        return(
            <Default>
            <div>
                <h1>To do List</h1>

                <nav>
                    <a href='/list/new'>Create A new Task</a>
                </nav>
                <ul>
                    {
                        list.map((list, i)=> {
                            return(
                                <li>
                                    <Draggable><a href={`/list/${list._id}`}>{list.name}</a>  {list.task}<br/>
                                    {list.isDone }</Draggable>

                                    <form action={`/list/${list._id}?_method=DELETE`} method="Post">
                                        <input type="submit" value="DELETE"/>

                                    </form>

                                    
                                    <div>
                                    <a href={`/list/${list._id}/edit`}>Edit Task</a><br/>
                                            
                                    <Droppable types={['list']} onDrop={this.onDrop.bind(this)}>
                                    <ul className="to-do-list"></ul>
                                    </Droppable>

                                    </div>
                                 
                                    
                                   
                                </li>
                                
                                
                            )
                        })
                    }
                </ul>
            </div>

          

            </Default>
        )
    }
    onDrop(data) {
        console.log(data) }
}

module.exports = Index;