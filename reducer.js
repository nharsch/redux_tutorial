import { VisibilityFilters } from './actions'

// state as simple object
const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todoApp(state = initialState, action) {
    switch (action.type) {
      case SET_VISIBILITY_FILTER:
        // assign state plus new change to empty obj
        return Object.assign({}, state, {
          visibilityFilter: action.filter
      })
      case ADD_TODO:
        return Object.assign({}, state, {
          todos: [
            ...state.todos,
            {
              text: action.text,
              completed: false
            }
          ]
        })
        // TODO: wtf is this??
      case TOGGLE_TODO:
        return Object.assign({}, state, {
          todos: state.todos.map((todo, index) => {
            if (index === action.index) {
              return Object.assign({}, todo, {
                completed: !todo.completed
              })
            }
          return todo
          })
        })
      default:
        return state
    }
}
