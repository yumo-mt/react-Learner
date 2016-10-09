import React from 'react';
import {Link} from 'react-router';

let styles = {
    leftNav:{
        width: '170px',
        position: 'fixed',
        top: '56px',
        height: '100%',
        background:'lightblue'
    },
    content: {
        background:'#fff',
        position: 'absolute',
        top:'56px',
        left:'200px',
        width: '70%',
        height: '90%',
    },
    menu:{
        display: 'block',
        overflow:'hidden'
    },
    list:{
        fontSize:"20px",
        listStyle:"none",
    },
    reset:{
        textDecoration: "none"
    }
}
let leftNav =()=>{
    return(
        <nav>
            <ul>
                <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/com1">one</Link></li>
                <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/com2">two</Link></li>
                <li style={styles.list}><Link activeStyle={{color: 'red'}} style={styles.reset} to="/com3">three</Link></li>
            </ul>
        </nav>
    )
}
class App extends React.Component {
    render() {
        return (
            <div>

                <div className="leftNav" style={styles.leftNav}>
                    {leftNav()}
                </div>

                <div className="content" style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default App;