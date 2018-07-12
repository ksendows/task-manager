import users from '../users';

export const signIn = ({ login, password }) => {
    let loggedUser;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].login === login) {
            loggedUser = users[i];
            break;
        }    
    };

    if (!loggedUser) return ({ error: 'User does not exist'});

    if (loggedUser.password !== password) return ({ error: 'Invalid password' });

    return({
        name: loggedUser.name,
        login: loggedUser.login
    });
};

export const register = ({ name, login, password }) => {
    let registeredUser;
    for (let i = 0; i < users.length; i += 1) {
        if (users[i].login === login) {
            registeredUser = users[i];
            break;
        }
    };

    if (!registeredUser) {
        const newUser = {
            name,
            login,
            password
        };
        users.push(newUser);
        return newUser;
    }

    return (
        { error: 'User already exist' });
};
