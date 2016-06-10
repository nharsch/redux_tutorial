import { VisibilityFilters } from './actions'
import { combineReducers } from 'redux'
const { SHOW_ALL } = VisibilityFilters

// state as simple object
function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
          {
            text: action.text,
            completed: false
          }
      ]
    case TOGGLE_TODO:
      // map onto array of todos
      return state.map((todo, index) => {
        // if this is the action item
        if (index === action.index) {
          // update todo object in a funcitonal way
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
