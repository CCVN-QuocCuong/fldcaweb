import { authActionType } from "../actionTypes";

const initialState = {
    token: '',
    refreshToken: '',
    rememberMe: false,
    isLoginSuccess: false,
    isRememberMe: false,
    errorLogin: '',

}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case authActionType.LOGIN:
            return {
                ...state
            }
        case authActionType.LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.payload,
            }
        case authActionType.REMEMBER_ME:
            return {
                ...state,
                isRememberMe: true,
            }
        case authActionType.LOGOUT:
            return {
                ...state,
                isLoginSuccess: false,
            }
        case authActionType.ERROR_LOGIN:
            return {
                ...state,
                errorLogin: action.payload,
            }
        case authActionType.CLEAR_ERROR_MESSAGE:
            return {
                ...state,
                errorLogin: ''
            }
        default:
            return state
    }
}

export default auth;
