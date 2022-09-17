
let projectData = {
    name: 'git',
    age: 1, 
    getInfo: function(){
        return `Name: ${this.name}`
    }
}
console.log(projectData.getInfo());