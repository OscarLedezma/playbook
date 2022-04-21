const Spiderman = require("./../app/spiderman.js");

describe("Unit Test for Spiderman class", () => {
    test('1) Crea un objeto de spiderman', () => {
      
      //Aqui escribimos el codigo que quereos usar tal cual
      //Quiero poder instanciar un objeto Spiderman con esta informacion
      const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2,"Sony")


      expect(andrewGarfield.name).toBe("Spiderman Sony");
      expect(andrewGarfield.age).toBe(31);
      expect(andrewGarfield.actor).toBe("Andrew Garfield");
      expect(andrewGarfield.movies).toBe(2);
      expect(andrewGarfield.studio).toBe("Sony");
    });
  })