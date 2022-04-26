
const UserView = require("./../../app/view/UserView")

/*Sprint 3 Views*/
describe("Prueba for UserVIew", () =>{

    
    test("Regresa an error object when try to create a new user with an null payload", () => {
        const payload = null;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/Payload no existe/);
        
    });

    test("Regresa an error object when try to create a new user with a payload con propiedades invalidas", () => {
        const payload = {username:"oscar", id:null, name:"Oscar"};;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
        
    });

    test("Regresa an error object when try to create a new user with a payload con propiedades faltantes", () => {
        const payload = {username:"oscar"};;
        const result = UserView.createUser(payload);
        expect(result.error).toMatch(/necesitan tener un valor válido/);
        
    });

    test("Create a new user by a given payload", () => {
        const payload = {username:"OscarLedesma", id:1, name:"Oscar"};
        const result = UserView.createUser(payload);
        expect(result.name).toBe("Oscar");
        expect(result.username).toBe("OscarLedesma");
        expect(result.id).toBe(1);
        
    });

});