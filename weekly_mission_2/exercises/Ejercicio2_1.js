const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

    console.log("Ejemplo 1: Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")

    explorers.forEach(element => {
        console.log(element.name)
    });
  
    console.log("Ejemplo 2: Imprime el stack de cada explorer, usa FOR EACH")

    explorers.forEach(element => {
        console.log(element.name + " Su stack es: ")
        element.stack.forEach(element2 => {
            console.log(element2)
        });
    });
  
    console.log("Ejemplo 3: Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")

    const explorersStack = explorers.map(function(element){ return element.stack})
    console.log(explorersStack)
  
    console.log("Ejemplo 4: Obtén la lista de explorers que tengan en su stack js, usa FILTER (para validar un elemento en un lista se usa el método includes")

    const explorersStackJs = explorers.filter((element) => element.stack.includes('js'))
    console.log(explorersStackJs)
  
    console.log("Ejemplo 5: Busca el primer explorer que sea de la CDMX, usa FIND")

    const explorersCDMX = explorers.find((element) => element.city == 'CDMX')
    console.log(explorersCDMX)
  
    console.log("Ejemplo 6: Obtén la suma de todos los exercises_completed, usa REDUCE")

    const explorersExercises_completed = explorers.reduce((num, element) => num + element.exercises_completed,0)
    console.log(explorersExercises_completed)

    console.log("Ejemplo 7: Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")

    const explorersExercisesFinished = explorers.some((e) => e.missions.frontend.exercisesFinished === true)
    console.log(explorersExercisesFinished)

    console.log("Ejemplo 8: Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")

    const explorersIsFinished = explorers.every((e) => e.missions.onboarding.isFinished === true)
    console.log(explorersIsFinished)

