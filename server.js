const express = require ('express');
const pool = require ('./db');

const port = 1337;

const app = express()
app.use(express.json()) //make the app to take in json data


//routes
app.get('/',async(req,res) => {
    try {
        const data = await pool.query('SELECT * FROM schools') //selecting all data from the schools table
        res.status(200).json(data.rows) //returning the data in json format
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        
    }
})



//body,passing data via a json request
app.post('/',async(req,res)=> {
    const { name, location} = req.body //takes data name and location data from the boddy of the request
    try {
        await pool.query('INSERT INTO schools(name,address) ($1,$2),[name,location]') //inserting data into the db 1 reps name 2 reps location
        res.status(201).send('Sucessfully added child to the db')
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
        
    }
    })


//setup page-trying to interact with db 

app.post('/setup', async(req,res)=>{
    try{
        await pool.query('CREATE TABLE schools(id SERIAL PRIMARY KEY,name VARCHAR(100),adress VARCHAR(100))') //using pool.query  to run sql commands
        res.status(200).send('Table created')
    } catch (err){
        console.log(err)
        res.sendStatus(500)
    }


})

app.listen(port, () => console.log(`server is running on port: ${port}`) )