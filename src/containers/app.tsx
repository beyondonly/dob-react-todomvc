import { Connect } from "dob-react"
import * as React from "react"
import Header from "../components/header"
import MainSection from "../components/main-section"

const App = (props: any) => (
  <div>
    <Header addTodo={props.TodoAction.addTodo} />
    <MainSection todos={props.TodoStore.todos} actions={props.TodoAction} />
  </div>
)

export default Connect()(App)
