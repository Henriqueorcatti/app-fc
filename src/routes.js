import {BrowserRouter, Route, Switch} from 'react-router-dom'

import App from './App'
import Calculadora from './Calculadora'

function Routes (){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {App} />
                <Route path="/calculadora" component = {Calculadora} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;