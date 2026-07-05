require(`datejs`);

function combineUsers(...args) {
    const combinedObject = {
        user: []
    };

for (const usernameArray of args) {
    combinedObject.users = [...combinedObject.users, ...usernameArray];
}

combineObject.merge_date = Date.today().toString(`M/d/yyyy`);

return combinedObject;
}

module.exports = combineUsers;