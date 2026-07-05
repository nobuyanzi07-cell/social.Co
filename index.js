require(`datejs`);

function combineUser(...args) {
    const combinedObject = {
        user: {}
    };
};

for (const usernameArray of args) {
    combineObject.users = [...combinedObject.users, ...usernameArray];
}