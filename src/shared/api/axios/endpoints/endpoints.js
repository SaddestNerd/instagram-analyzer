export const endpoints = {
  general: {
    auth: {
      post: {
        playerAuth: "api/auth/player",
        checkSignUpToken: "api/auth/check-sign-up-eligibility",
        logout: "api/auth/logout",
        signUp: "api/auth/sign-up",
      },
      get: {
        getMe: "api/auth/me",
      },
    },
    payment: {
        get:{
          plan: "api/payment/plan",
          currency: "api/payment/currency", 
        },
        post: {
          subscribeWithCard: "api/payment/subscribe-with-card",
          subscribeWithGooglePay: "api/payment/subscribe-with-google-pay",
          subscribeWithApplePay: "api/payment/subscribe-with-apple-pay"
        }
    },
    instagram: {
      get:{
        instagramProfile: "api/instagram/profile",
        analyticProfile: "api/instagram/profile-analytic",
      }
   },
   user: {
    patch: {
      instagramUserByUsername:  "api/user/instagram-username",
    },
    get: {
      me: "api/user/me"
    }
   }
  },
}


