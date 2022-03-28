import { INPUT_USER_NAME, INPUT_USER_PASSWORD, INPUT_USER_EMAIL, INPUT_VERIFICATION_CODE, INPUT_CLEAN_DATA, 
SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE,
RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE,
} from '../types'

export const inputState = {
  userName: "",
  userEmail: "",
  userPassword: "",
  verificationCode: "",
}

export const userRegState = {
  userData: null,
  hasError: false,
  isLoading: false,
  error: null, 
}

export const ForgotPasswordState = {
  result: null,
  sendLetter: false,
  hasError: false,
  isLoading: false,
  error: null, 
}

export const inputReduser = (state = inputState, action) => {
  switch (action.type) {
    case INPUT_USER_NAME: {
      return {
        ...state,
        userName: action.userName,
      };
    }
    case INPUT_USER_EMAIL: {
      return {
        ...state,
        userEmail: action.userEmail,
      };
    }
    case INPUT_USER_PASSWORD: {
      return {
        ...state,
        userPassword: action.userPassword,
      };
    }
    case INPUT_VERIFICATION_CODE: {
      return {
        ...state,
        verificationCode: action.verificationCode,
      };
    }
    case INPUT_CLEAN_DATA: {
      return {
        ...state,
        userName: "",
        userEmail: "",
        userPassword: "",
        verificationCode: "",
      };
    }
    default: {
      return state;
    }
  }
};

export const userRegistrationInfo = (state = userRegState, action) => {
  switch (action.type) {
    case SIGN_UP_REQUEST: {
      return {
        ...state,
        //TODO сделать лоадер во всем проекте
        isLoading: true,
      };
    }
    case SIGN_UP_SUCCESS: {
      return {
        ...state,
        userData: action.data,
        isLoading: false,
        hasError: false,
      };
    }
    case SIGN_UP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
};

export const ForgotPasswordReducer = (state = ForgotPasswordState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        result: action.data,
        sendLetter: true,
        hasError: false,
        isLoading: false, 
      };
    }
    case FORGOT_PASSWORD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
        error: action.error,
        sendLetter: false,
      };
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        result: action.data,
        hasError: false,
      };
    }
    case RESET_PASSWORD_FAILURE: {
      return {
        ...state,
        isLoading: false,
        result: null,
        hasError: true,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
};



