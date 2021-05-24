import {combineReducers} from "redux"

const laporState = {
    id:0,
    nama:"",
    kejadian:"",
    alamat:"",
    keterangan:"",
    gambar:"",
}

const userData = {
    id:0,
    nama:"",
    email:"",
    password:"",
    hp:"",
    alamat:"",
    isLogin:false
}

function laporReducer (state=laporState,action) {
    if (action.type === "SET_LAPOR"){
        return{
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}

function userReducer (state=userData,action) {
    if (action.type === "SET_USER"){
        return{
            ...state,
            [action.inputType]:action.inputValue
        }
    }
    return state;
}


const reducer = combineReducers({
    laporReducer, userReducer
})

export default reducer