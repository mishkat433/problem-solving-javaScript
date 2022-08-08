const bestFriend = (frind) => {

    var longName = frind[0]
    for (let i = 0; i < frind.length; i++) {

        if (longName.length < frind[i].length) {
            longName = (frind[i])
        }

    }
    return longName

}

const friends = bestFriend(["Zahedul Islam", "Nobel Raj", "Manik Chowdhury", "Kausar Alam shisir",
    "Karim Billah", "Sayed Abdul Mutaleb", "Kazi Rashedul Karim"])
console.log(friends);
