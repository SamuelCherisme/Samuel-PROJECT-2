const React = require('react');

class Default extends React.Component {
    render() {
        return (
            <html>
                <head>
                 
                    <meta charset="utf-8"></meta>  
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                   
                    <link rel="stylesheet" href="/css/style.css" />
                    <title> Samuel's To-do-List</title>
                </head>
                <body> 
                    <nav>
                        <li><a href="/list">Index</a></li>
                        <li><a href="/list/New">Create New</a></li>
                    </nav>
                    {this.props.children}
                    <footer>
                        <h4>Created By SAM</h4>
                    </footer>
                </body>
            </html>
        )
    }
}
module.exports = Default;