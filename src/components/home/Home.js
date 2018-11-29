import React from "react";
import "./Home.css";
import AppList from '../apps/AppsList';
import Axios from 'axios';

class Home extends React.Component {

    checkStatus(){
        Axios.get('https://api.github.com/users/maecapozzi').then((response) => {
            console.log(response);
        })
    }
    render() {
        return (
            <div className="applications">
                <div className="test-status">
                    <button className="ui button button-status" onClick={this.checkStatus}>Check Status</button>
                </div>
                <AppList />
            </div>
        );
    }
}

export default Home;
