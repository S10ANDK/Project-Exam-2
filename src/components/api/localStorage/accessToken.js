const user = JSON.parse(localStorage.getItem('user'));
const accessToken = user && user.accessToken;

export default accessToken;
