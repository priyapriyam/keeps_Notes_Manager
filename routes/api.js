const knex = require('../Model/knex_queries')
module.exports = (note, sleep) =>{
    note.post('/add', (req,res) => {
        let details = {                                                                                  
            title:req.body.title,
            notes:req.body.notes,
            timer:req.body.timer
        }
        knex.post_data(details)
        .then((result )=>{
            res.send("data inserted")
        })
        .catch ((err)=>{
            res.send (err)
    
        })
    });

    knex.read_data()
    .then((result) => {
        var empty = 0;
        for (var i = 0; i < result.length; i++){         
            var timer=(result[i].timer)
            var title =result[i]['title']
            var id = result[i].notes_id
            // console.log(timer);
            
            if (timer!=null){
                sleep(timer*60000) // 1 second = 1000,1 minute = 60000 
                    console.log("priya see ,what you have to do in this time",title)
                    knex.for_update_null(id)
                    .then((result)=>{
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }
            }

        })
        .catch((err)=>{
            console.log({"message":err});
        })



    note.put('/change_data/:notes_id',(req,res) => {
        let notes_id = req.params.notes_id;
            let notes_details = {
                title:req.body.title,
                notes:req.body.notes,
                timer:req.body.timer
            }
        knex.update_data(notes_details,notes_id)
        .then((result) => {
            res.send("data updated")
            console.log("data updated")  
        })
        .catch((err) => {
            res.send ("err")
            console.log("there is error")
        })
    })


    note.delete('/delete_data/:notes_id',(req,res) => {
        let notes_id = req.params.notes_id;
        // console.log(notes_id)
        let notes_details = {
            title:req.body.title,
            notes:req.body.notes
        }
        // console.log(notes_details)
        knex.delete_data(notes_details,notes_id)
        .then(() => {
            res.send("data deleted")
        })
        .catch((err) => {
            res.send(err)
            console.log("there is error")
        })
    })

    note.get('/search_data/:search',(req,res) => {
        let search = req.params.search
        knex.search_data(search)
        .then((result) => {
            res.send(result)  
        })
        .catch((err) => {
            res.send ("err")
        })
    })
}

