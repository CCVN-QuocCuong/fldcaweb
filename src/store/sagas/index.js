import { fork } from 'redux-saga/effects'
import { sayHello, watchDecrement, watchIncrement } from './counterSagas'

export default function* rootSaga() {
    // yield all([
    //     call(sayHello),
    //     call(watchDecrement),
    //     call(watchIncrement)
    // ])
    yield fork(sayHello)
    yield fork(watchDecrement)
    yield fork(watchIncrement)
}