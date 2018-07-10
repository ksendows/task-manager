/*eslint-disable*/
import users from '../users';

export const signIn = ({ login, password }) => {
    const user = users.find(user => user.login === login);

    if (!user) return ({ error: 'User does not exist'});

    if (user.password !== password) return ({ error: 'Invalid password' });

    return({
        name: user.name,
        login: user.login
    });
};

export const register = ({ name, login, password }) => {
    const user = users.find(user => user.login === login);

    if (!user) {
        const newUser = {
            name: name,
            login: login,
            password: password
        };
        users.push(newUser);
        return newUser;
    }

    return (
        { error: 'User already exist' });
};

    // return new Promise((resolve, reject) => {
    //     const user = users.find(user => user.login === login);

    //     setTimeout(() => {
    //         if (!user) {
    //             reject('User does not exist!');
    //             return;
    //         }

    //         if (user.password !== password) {
    //             reject('Invalid password!');
    //             return;
    //         }

    //         resolve({
    //             name: user.name,
    //             login: user.login
    //         });
    //     }, 300);
    // });

// export const signOut = () => {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve();
//         }, 300);
//     });
// };