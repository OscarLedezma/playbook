
const User = require("./../app/models/User.js")

describe("Prueba de jest", () => {
   
    test("Prueba 1",() => {

        const user = new User(1,"OscarLed","Oscar","Bio","DateCreated","lastUpdated")
        expect(user.id).toBe(1);
        expect(user.username).toBe("OscarLed");
        expect(user.name).toBe("Oscar");
        expect(user.bio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();

    });

    test("Add Getters",() => {

        const user = new User(1,"OscarL","Oscar","Bio")
        expect(user.getUsername).toBe("OscarL");
        expect(user.getBio).toBe("Bio");
        expect(user.getDateCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    });

    test("Add Setters",() => {

        const user = new User(1,"OscarL","Oscar","Bio")
        user.setUsername = "OscarL";
        expect(user.username).toBe("OscarL");
        user.setBio = "newBio";
        expect(user.bio).toBe("newBio");
    })


});