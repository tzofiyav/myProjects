
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true });


//const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
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

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());


function CreateMember(){
  app.post('/api/member', (req, res) => {
    const myData = new Member(req.body);
    myData.save((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  });
}

function getMembers(){
  app.get('/api/member', (req, res) => {
    MyModel.find({}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(data);
      }
    });
  });
}

app.listen(3000, () => {
  console.log('Server started on port 3000');
});

