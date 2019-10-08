import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import asyncComponent from '../../Utilities/asyncComponent';

const List = asyncComponent(() => import(/* webpackChunkName: "TopicsList" */ './List'));
const Details = asyncComponent(() => import(/* webpackChunkName: "TopicDetails" */ './Details'));

const Topics = () =>
    <React.Fragment>
        <Switch>
            <Route exact path='/topics' component={ List } />
            <Route exact path='/topics/:id' component={ Details }/>
            <Redirect path='*' to='/topics'  push/>
        </Switch>
    </React.Fragment>;

export default Topics;
