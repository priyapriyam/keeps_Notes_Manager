var knex = require ("knex")({
    client : 'mysql',
    connection:{
        host :"127.0.0.1",
        user:"root",
        password:"password",
        database: "Notes"
    },
    useNullAsDefault: true
})

module.exports = knex;

knex.schema.hasTable("Important_Notes").then((exists)=>{
    if(!exists){
        return knex.schema.createTable("Important_Notes",(table) =>{
            table.increments ('notes_id')
            table.string('title')
            table.string('notes')
            table.INT('timer')
        })
    .catch((err) =>{
        console.log(err,"there is some error")
    })
   }
   return console.log("table is created")
})