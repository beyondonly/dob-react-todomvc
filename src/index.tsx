import { Provider } from "dob-react"
import * as React from "react"
import { render } from "react-dom"

import App from "./containers/app"

import store from "./stores"

declare const require: any

// tslint:disable-next-line:no-var-requires no-submodule-imports
require("todomvc-app-css/index.css")

render(
    <Provider {...store}>
        <App />
    </Provider>,
    document.getElementById("react-dom")
)
