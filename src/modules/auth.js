import produce from "immer";
import { createAction, handleActions } from "redux-actions";

const CHANGE_FIELD = "auth/CHANGE_FIELD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";

export const changeField = createAction(
  CHANGE_FIELD,

  ({ form, key, value }) => ({
    form, // register, login
    key, // username, password, passwordConfirm
    value, // 실제 바꾸려는 값
  })
);

// register / login
export const initalizeFrom = createAction(INITIALIZE_FORM, (form) => form);

const initialState = {
  register: {
    username: "",
    password: "",
    passwordConfirm: "",
  },
  login: {
    username: "",
    password: "",
  },
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value; // 예: state.register.username을 바꾼다.
      }),
    [INITIALIZE_FORM]: (state, { payload: { form } }) =>
      produce(state, (draft) => ({
        ...state,
        [form]: initialState[form],
      })),
  },
  initialState
);

export default auth;

/*  
리덕스 모듈 : 
Ducks 패턴을 사용하여 액션 타입, 액션 생성 함수, 리듀서가 
하나의 파일에 다 정의되어 있는 리덕스 모듈을 작성.
*/
