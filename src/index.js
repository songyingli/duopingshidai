import React from 'react';
import {render} from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routers from './routes';

import 'highlight.js/styles/github.css'
import Test from './test'

import './main.css'
import './post.css'

render(<Routers />,document.getElementById('root'));
