import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import swaggerDataProvider from './dataProvider';
import endpoint from './endpoint';


const dataProvider = swaggerDataProvider(endpoint);

const App = () => 
    <Admin dataProvider={dataProvider}>
        <Resource name="action-tracks" list={ListGuesser} />
    </Admin>

export default App;
