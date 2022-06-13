import { authActionType } from "../actionTypes"
import { Auth } from "aws-amplify"
import { setLoading } from '../../store/actions/app'


async function getAccessToken(data) {
    await Auth.currentSession().then(res => {
        let idToken = res.getIdToken().getJwtToken()
        localStorage.setItem('token', idToken)
    })
}

function setDataUser(result) {
    const dataUser = {
        groups: result.signInUserSession.idToken.payload["cognito:groups"],
        email: result.signInUserSession.idToken.payload["email"]
    }
    localStorage.setItem('dataUser', JSON.stringify(dataUser))
}

export function login(data) {
    return async function (dispatch) {
        dispatch(setLoading(true))
        await Auth.signIn(data)
            .then((result) => {
                getAccessToken(data)
                setDataUser(result)
                dispatch(setLoading(false))
                dispatch({
                    type: authActionType.LOGIN_SUCCESS,
                    payload: true
                })
                dispatch({
                    type: authActionType.REMEMBER_ME,
                })
            })
            .catch((err) => {
                dispatch(setLoading(false))
                dispatch({
                    type: authActionType.ERROR_LOGIN,
                    payload: 'The email or password you entered is incorrect. Please try again!',
                })
            })
    }
}


export function logout() {
    return async function (dispatch) {
        localStorage.clear()
        dispatch({
            type: authActionType.LOGOUT
        })
    }
}

export function clearErrorMessage() {
    return async function (dispatch) {
        dispatch({
            type: authActionType.CLEAR_ERROR_MESSAGE,
            payload: ''
        })
    }
}

export function  azureLoginSuccess(result) {
    return async function (dispatch) {
        getAccessToken(result)
        setDataUser(result)
        dispatch({
            type: authActionType.LOGIN_SUCCESS,
            payload: true
        })
        dispatch({
            type: authActionType.REMEMBER_ME,
        })
    }
}