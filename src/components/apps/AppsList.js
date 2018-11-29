import React from 'react';
import AppItem from './AppItem';

const apps = [
    {
        appname: 'facebook',
        appUrl: 'https://www.facebook.com'
    },
    {
        appname: 'google',
        appUrl: 'https://www.google.com'
    }
]
class AppsList extends React.Component{
    
    render(){
        const renderedList = apps.map((app) => {
            return (
                <AppItem app={app}/>
            );
        })

        return (
            <div className="ui relaxed divided list">
                {renderedList}
            </div>
        );
    }
}

export default AppsList;