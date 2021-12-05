const fs = require ("fs");

const THE_PATH = __dirname + "/../../voresdata";
const THE_FILES = "/data.json";

class database {
    constructor (){
        this.users = this.openFile(THE_FILES);
    }

    saveFile(fileName, contentString){
        fs.writeFileSync(THE_PATH + fileName, contentString);
    }
    openFile(fileName) {
        const fil = fs.readFileSync(THE_PATH + fileName);
        return JSON.parse(fil);
    }
    saveUser(user){
        this.users.push(user);
        this.saveFile(THE_FILES, JSON.stringify(this.users));
    }
    findUser(user){
        this.users = this.users.filter((x) => x.mail != user.email);
        this.saveFile(THE_FILES, JSON.stringify(this.users));
    }
}
module.exports = new database();