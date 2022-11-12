/**
 * If the user is logged in, return the user's information, otherwise clear the local storage.
 * @returns The userInfo object is being returned.
 */
export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  return userInfo;
};
