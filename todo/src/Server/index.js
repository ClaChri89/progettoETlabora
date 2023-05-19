const express= require('express')
const cors= require('cors')
const App= express();
App.use(cors());
const axios = require('axios');
const db = require('./database');

db.database();

App.post('/login', (req, res) => {

  const email = req.headers['email'];
  const password = req.headers['password'];

  users.forEach((user) => {

      

  });

});

  {/*App.get('/categorie',async (req, res) => {
   
    try{ 
    const response = await axios.get('https://pixabay.com/api/?key=36409829-9c7fcd3fa53c53e871238a94b&q=nature&image_type=photo&orientation=horizontal');
    const response2 = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const data = response.data;
    const data2 = response2.data;
    for (let key in data2) {
        if (data2.hasOwnProperty(key) && data.hasOwnProperty(key)) {
     combinedData[key] = {
        field1: data[key].id,
        field2: data[key].title,
        field3: data[key].body,
        field4: data2[key].webformatURL,
      };}
     }
     console.log("contenuto response" + Object.keys(combinedData).length !== 0);
     res.json(combinedData);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Errore nella chiamata API' });
      }
  });*/}

App.listen(4000, () => {
    console.log("Server avviato sulla porta 4000");
  });