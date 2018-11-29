import React from 'react';

class appList extends React.Component {
    render() {
        return (
            <div className="item">
                <i className={`large ${this.props.app.appname} middle aligned icon`}></i>
                <div className="content">
                    <a className="header" href={this.props.app.appurl}>{this.props.app.appname}</a>
                    <div className="description">Updated 10 mins ago</div>
                </div>
            </div>
        );
    }
}

export default appList;