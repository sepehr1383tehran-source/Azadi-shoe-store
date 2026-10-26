import users from "../constants/users.js"
const doesPasswordExist = (username = "",password = '') => {
    let doesPasswordExist = false;
    users.forEach(user => {
        if (user.username == username && user.password==password) {
            doesPasswordExist = true;
            return;
        }
    })
    return doesPasswordExist;
};

export default doesPasswordExist