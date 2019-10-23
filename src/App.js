import React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import Dashboard from './Dashboard';
import dataProvider from './dataProvider';
import authProvider from './authProvider';
import endpoint from './endpoint';

const App = () => 
    <Admin dashboard={Dashboard} dataProvider={dataProvider(endpoint)} authProvider={authProvider}>
        <Resource name="action-tracks" list={ListGuesser} edit={EditGuesser} />
        <Resource name="partners" list={ListGuesser} edit={EditGuesser} />
        <Resource name="lead-agencies" list={ListGuesser} edit={EditGuesser} />
        <Resource name="exec-offices" list={ListGuesser} edit={EditGuesser} />
        <Resource name="users" list={ListGuesser} edit={EditGuesser} />
        <Resource name="primary-climate-interactions" list={ListGuesser} edit={EditGuesser} />
        <Resource name="shmcap-goals" list={ListGuesser} edit={EditGuesser} />
        <Resource name="funding-sources" list={ListGuesser} edit={EditGuesser} />
        <Resource name="agency-priorities" list={ListGuesser} edit={EditGuesser} />
    </Admin>

export default App;
