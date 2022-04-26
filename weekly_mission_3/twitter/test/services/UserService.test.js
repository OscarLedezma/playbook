
const UserService = require('./../../app/services/UserService')

describe ("Test for UserService",()=>{
    test("1. Create a new User using the UserService",()=>{
        const user = UserService.create(1,"OscarLedesma", "Oscar");
        expect(user.username).toBe("OscarLedesma");
        expect(user.username).toBe("OscarLedesma");
        expect(user.username).toBe("OscarLedesma");
        expect(user.username).toBe("OscarLedesma");
        expect(user.name).toBe("Oscar");
        expect(user.name).toBe("Oscar");
        expect(user.name).toBe("Oscar");
        expect(user.name).toBe("Oscar");
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined();
    });


    test("2. Get All user data in a list",() =>{
        const user = UserService.create(1,"OscarLedesma","Oscar");
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("OscarLedesma");
        expect(userInfoInList[2]).toBe("Oscar");
        expect(userInfoInList[3]).toBe("Sin bio");
    })

    test ("3. Update Username", () => {
        const user = UserService.create(1,"OscarLedesma","Oscar");
        UserService.updateUserUsername(user,"OscarL");
        expect(user.username).toBe("OscarL");
    })
    test ("4.Given a List of Users Give me th list of usernames", () => {
        const user1 = UserService.create(1,"OscarLedesma1","Oscar");
        const user2 = UserService.create(1,"OscarLedesma2","Oscar");
        const user3 = UserService.create(1,"OscarLedesma3","Oscar");
        const usernames = UserService.getAllUsernames([user1,user2,user3]);
        expect(usernames).toContain("OscarLedesma1");
        expect(usernames).toContain("OscarLedesma2");
        expect(usernames).toContain("OscarLedesma3");
    })
});
