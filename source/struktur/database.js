var fs = require ("fs");

const THE_PATH = __dirname + "/../../voresdata";
const THE_FILES = "/data.json";

class database {
    constructor (){
        this.users = this.openFile(THE_FILES);
    }

    saveFile(fileName, contentString) {
        fs.writeFileSync(THE_PATH + fileName, contentString);
    }
    openFile(fileName) {
        const file = fs.readFileSync(THE_PATH + fileName);
        return JSON.parse(file);
    }
    saveUser(user){
        this.users.push(user);
        this.saveFile(THE_FILES, JSON.stringify(this.users));
    }
    findUser(user){
        return this.users.find((x) => user.email == x.email);
    }
    deleteUser(user){
        this.users=this.users.filter((x) => x.email != user.email);
        this.saveFile(THE_FILES, JSON.stringify(this.users));
    }
}
module.exports = new database();