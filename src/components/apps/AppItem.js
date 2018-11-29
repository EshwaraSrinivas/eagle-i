import React from 'react';

const appList = ({app}) => {
    return (
        <div className="item">
            <i className={`large ${app.appname} middle aligned icon`}></i>
            <div className="content">
                <a className="header">{app.appname}</a>
                <div className="description">Updated 10 mins ago</div>
            </div>
        </div>
    );
}

export default appList;