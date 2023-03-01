import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './views/App'
import {Provider} from "react-redux";
import store from "./redux/store";

import './views/styles/reset.scss';
import './views/styles/common.scss';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
)
