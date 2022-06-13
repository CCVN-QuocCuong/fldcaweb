import { takeEvery, takeLatest } from 'redux-saga/effects'
import { decrement, increment } from '../actions'
export function* sayHello() {
    yield true
    // console.log('Hello saga !')
}

function* logIncrement() {
    // yield delay(2000) // blocking
    yield true
    console.log('This is increment saga !')
}

export function* watchIncrement() {
    yield takeLatest(increment().type, logIncrement)
}

function* logDecrement() {
    // yield delay(2000)
    yield true
    console.log('This is decrement saga !')
}

export function* watchDecrement() {
    yield takeEvery(decrement().type, logDecrement)
}