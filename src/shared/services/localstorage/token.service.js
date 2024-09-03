const getLocalAccessToken = () => {
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));
  return accessToken;
};

const updateLocalAccessToken = (token) => {
  let accessToken = JSON.parse(localStorage.getItem("accessToken"));
  accessToken = token;
  localStorage.setItem("accessToken", JSON.stringify(accessToken));
};

const setLocalAccessToken = (token) => {
  localStorage.setItem("accessToken", JSON.stringify(token));
};

const removeLocalAccessToken = () => {
  localStorage.removeItem("accessToken");
};

export const TokenService = {
  getLocalAccessToken,
  updateLocalAccessToken,
  setLocalAccessToken,
  removeLocalAccessToken,
};
