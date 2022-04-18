const PullRequest = {
    title: "Nuevo PR",
    branchName: "Main",
    author:"OscarLedesma",
    dateCreated: Date("2022-01-12"),
    status:"En progresso",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
      return "Status :" + this.status
    },
    getTitleAndAutor: function(){
      return `PR ${this.title} creado por ${this.author} el dia ${this.dateCreated}`
    }
   }
   
   console.log("Nombre del Issue: " + PullRequest.title)
   console.log(PullRequest.getStatus())
   console.log(PullRequest.getTitleAndAutor())

