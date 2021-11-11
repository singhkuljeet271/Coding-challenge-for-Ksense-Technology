const getUserData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};
const getPostData = async (userId) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};
export { getUserData, getPostData };
