
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
    render(){
        return(
            <div>


                <nav class="navbar navbar-inverse">
                  <div class="container-fluid">
                    <div class="navbar-header">
                      <a class="navbar-brand" href="#"> oppo WebSite</a>
                    </div>
                    <ul class="nav navbar-nav">
                      <li><Link to="/" activeclassname="active">Home</Link></li>
                      <li><Link to="/phones" activeclassname="active">Phones</Link></li>
                      <li><Link to="/about" activeclassname="active">About phone</Link></li>

                    </ul>
                  </div>
                </nav>


                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main
