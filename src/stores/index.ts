import { combineStores } from "dob"
import { TodoAction, TodoStore } from "./todo"

export default combineStores({ TodoAction, TodoStore })
