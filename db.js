const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}

/*webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }*/

const memberSchema = new mongoose.Schema({
  fName: String,
  lName: String,
  id: Number,
  aCity: String,
  aStreet: String,
  aNumHome: Number,
  dateBorn: Date,
  tel: Number,
  phon: Number

});

const Member = mongoose.model('Member', memberSchema);

let input = new Array();
input = document.getElementsByName("check");

const details = new Member({
  fName: input[0],
  lName: input[1],
  id: input[2],
  aCity: input[3],
  aStreet: input[4],
  aNumHome: input[5],
  dateBorn: input[6],
  tel: input[7],
  phon: input[8]
 });

 await details.save();

 