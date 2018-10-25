import constants from '../constants';

export default {
  setCurrentUser: user => {
    return {
      type: constants.APP_USER_LOGIN,
      data: user
    };
  },
  doLogout: () => {
    return {
      type: constants.APP_USER_LOGOUT,
      data: null
    };
  },
  setPage: value => {
    return {
      type: constants.APP_PAGE_SHOW,
      data: value
    };
  },
  setProposalContainer: container => {
    return {
      type: constants.APP_PROPOSAL_CONTAINER,
      data: container
    };
  },
  setProposalShow: propHash => {
    return {
      type: constants.APP_PROPOSAL_SHOW,
      data: propHash
    };
  },
  toggleChat: () => {
    return {
      type: constants.APP_CHAT_TOGGLE,
      data: null
    };
  },
  toggleMenu: () => {
    return {
      type: constants.APP_MENU_TOGGLE,
      data: null
    };
  },
  platformGet: value => {
    return {
      type: constants.APP_PLATFORM_GET,
      data: value
    };
  },

  loading: value => {
    return {
      type: constants.APP_LOADING_GLOBAL,
      data: value
    };
  },
  setAuth: value => {
    return {
      type: constants.SET_AUTH,
      data: value
    };
  }
};
