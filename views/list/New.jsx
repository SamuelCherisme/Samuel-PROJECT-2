const React = require('react');
const Default = require('../components/Default')


class New extends React.Component{
        render(){
            return(
                <Default>
                <div>
                    <h1>New Lists</h1>
                    <form action="/list" method="POST">
                        Name: <input type="text" name="name"/><br/>
                        Task: <input type="text" name="task"/><br/>
                        Is it Done?: <input type="Checkbox" name="Is it Done?"/>
                        <br/>
                        <input type="submit" name="" value="Create Task"/>
                    </form>
                </div>
                </Default>
            )
        }
}

module.exports = New;