import * as React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';

/* eslint import/no-anonymous-default-export: [2, {"allowArray": true}] */
export default [
    <Route exact path="/configuration" render={() => <Configuration />} />,
    <Route exact path="/segments" render={() => <Segments />} />,
];
