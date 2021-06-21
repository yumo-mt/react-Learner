import React from 'react';
import store from './store'
export default class Com1 extends React.Component{
    render(){

        return (
            <div>
                <h1>组件1</h1>
                <h2>{store.data.a}</h2>
            </div>
        )
    }
}