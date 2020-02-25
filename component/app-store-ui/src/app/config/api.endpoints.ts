const baseUrl = new URL(window.location.href);
const apiContext = baseUrl.protocol + '//' + baseUrl.host + '/api/am/store/v0.13';
const appStoreApi = baseUrl.protocol + '//' + baseUrl.host + "/app-store/public/api";

export const ApiEndpoints = {
  apiContext: apiContext,
  authentication: {
    login: appStoreApi + "/auth/login",
    logout: appStoreApi + "/auth/logout",
    signup: appStoreApi + "/user/add",
    changePassword: appStoreApi + "/user/change-password-by-user",
    updateForgetPassword: appStoreApi + "/user/update-password",
    forgetPassword: appStoreApi + "/user/forget-password",
    clientRegistration: baseUrl.protocol + '//' + baseUrl.host + '/client-registration/v0.13/register',
    tokenGeneration: baseUrl.protocol + '//' + baseUrl.host + '/oauth2/token',

  },
  apis: {
    search: apiContext + '/apis',
    apiOverview: apiContext + '/apis/',
    applications: apiContext + '/subscriptions',
    subscribe: "./assets/files/subscribe.json",
    tag: apiContext + '/tags',
    sdk: apiContext + '/apis/generate-sdk',
    availableApp: apiContext + '/applications',
  },
  global: {
    countries:
      "https://raw.githubusercontent.com/pbakondy/mcc-mnc-list/master/mcc-mnc-list.json",
    tiers: "./assets/files/tiers.json"
  },
  applications: {
    applications: apiContext + '/applications',
    generateKeys: apiContext + '/applications/generate-keys',
    regenerateSecret: apiContext + '/applications/regenerate-consumersecret'
  },
  subscriptions: apiContext + '/subscriptions',
  forum: {
    topicList     : appStoreApi + "/user/forum/list",
    createTopic   : appStoreApi + "/user/forum/createTopic",
    deleteTopic   : appStoreApi + "/user/forum/deleteTopic",
    postReply     : appStoreApi + "/user/forum/postReply",
    deleteReply   : appStoreApi + "/user/forum/deleteReply",
    search        : appStoreApi + "/user/forum/search"
  }
};