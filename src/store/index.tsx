import { configureStore } from '@reduxjs/toolkit'
// import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducer/rootReducer'
// import rootSagas from './Sagas/rootSaga'
// const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  // middleware: [sagaMiddleware],
})
// sagaMiddleware.run(rootSagas);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store
