const React = require('react');
const Default = require('../components/Default')



class Index extends React.Component{
    render(){
        const {list} = this.props;
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
                                    The <a href={`/list/${list._id}`}>{list.name}</a> is{list.task}<br/>
                                    {list.isDone ? `Is it done`: `Is it Done`}

                                    <form action={`/list/${list._id}?_method=DELETE`} method="Post">
                                        <input type="submit" value="delete"/>

                                    </form>
                                    <div>
                                    <a href={`/list/${list._id}/edit`}>Edit Task</a><br/>
                                
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
}

module.exports = Index;