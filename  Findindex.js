function findUserByUsername(arr, username) {
    // Use the find method to search for the first object with the matching username
    return arr.find(function(obj) {
        return obj.username === username;
    });
}

function removeUser(arr, username) {
    // Find the index of the object with the matching username
    let index = arr.findIndex(function(obj) {
        return obj.username === username;
    });

    // If the object is found, remove it from the array and return it
    if (index !== -1) {
        return arr.splice(index, 1)[0];
    }

    // If the object is not found, return undefined
    return undefined;
}
