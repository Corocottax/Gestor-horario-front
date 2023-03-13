const INITIAL_STATE = {
    user: null,
    token: null,
    loading: false,
    error: null
}

export const starterReducer = (state = INITIAL_STATE, action) => {

    const comprobacion = {
        LOGIN_OK: { ...state, user: action.payload?.userDB, token: action.payload?.token, loading: false },
        REGISTER_OK: {...state, loading: false},
        ERROR:{...state, loading: false, error: action.payload},
        LOADING: {...state, loading: true}
    }

    return comprobacion[action.type] || state;

}