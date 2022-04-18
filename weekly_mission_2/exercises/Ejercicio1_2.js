const issue = {
    title: "Problema X",
    repositoryNameAssociated: "LaunchX",
    status:"En progresso",
    numberOfComments:3,
    labels:"launcX2022",    
    author: "OscarLedesma",
    language: "JavaScript",
    dateCreated: Date("2022-01-12"),
    lastUpdated: Date("2022-04-15"),
    getTitleAndAuthor: function(){
      return "Titulo " + this.title + ", Autor: " +this.author
    },
    getGeneralInfo: function(){
      return `El problema ${this.title} fue descubierto por ${this.author} el dia ${this.dateCreated}`
    }
   }
   
   console.log("Nombre del Issue: " + issue.title)
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())

