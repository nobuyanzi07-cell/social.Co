require(`datejs`);

function combineUser(...args) {
    const combinedObject = {
        user: {}
    };

for (const usernameArray of args) {
    combineObject.users = [...combinedObject.users, ...usernameArray];
}

combineObject.merge_date = Date.today().toString(`M/d/yyyy`);

return combineObject;
}