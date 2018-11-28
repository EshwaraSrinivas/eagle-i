import React from "react";
import "./Home.css";
import AppList from '../apps/AppsList';

class Home extends React.Component {
    render() {
        return (
            <div className="applications">
                <div className="test-status">
                    <button className="ui button button-status">Check Status</button>
                </div>
                <AppList />
            </div>
        );
    }
}

export default Home;
