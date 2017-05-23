import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './route';

/*class Main extends Component {
    render() {
        return (<div>
            <ApiCalls />
        </div>
        );
    }
}*/
ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
