const friendsLengthEven = arr => {
    const evenFriends = [];
    for (const friends of arr) {
        const validate = friends.split(" ").join('')
        if (validate.length % 2 === 0) {
            evenFriends.push(friends)
        }
    }
    return evenFriends;
}

const friendList = ["Sajjad", "Sakil", "Halim", "Atik", "Minhaz", "Pabel", "Shamin", "Rahul", "Borhan Uddin Mishkat", "johan Smith"]
console.log(friendsLengthEven(friendList));