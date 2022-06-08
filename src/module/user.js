import {createAction, handleActions} from "redux-actions";

const CHANGE_INPUT = "LOGIN/CHANGE_INPUT";
const LOGIN = "LOGIN/LOGIN";
export const changeInput = createAction(CHANGE_INPUT,({form,name,value})=>({form,name,value}));

const initState = {
    login:{
        id:"",
        password:""    
    }
}

const user = handleActions({
[CHANGE_INPUT]: (state,{payload:{form,name,value}})=>
                ({  
                    ...state,
                    [form]:{
                        ...state[form],
                        [name]:value
                    }
                    
                })
                },initState);

export default user;