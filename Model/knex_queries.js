const knex = require('./data_base_connection')

let post_data = (details) =>{
   return knex('Important_Notes').insert(details)
}

let read_data = () =>{
    return knex.select("*").from('Important_Notes').orderBy('timer', 'asc')
}
let search_data = (search) =>{
   return knex('Important_Notes').where('title', 'like', "%" +search+ "%")
}

let update_data =(notes_details,notes_id)=>{
    return knex('Important_Notes').update({"title":notes_details.title,"notes":notes_details.notes,"timer":notes_details.timer})
    .where('Important_Notes.notes_id',notes_id)

}

let delete_data  = (notes_details,notes_id)=>{
    return knex('Important_Notes').del(notes_details).where("notes_id",notes_id)
} 

let for_update_null = (id)=>{
    return  knex('Important_Notes').update({"Important_Notes.timer":null} ).where ("notes_id",id)
}



module.exports = {post_data , read_data,update_data, delete_data, for_update_null,search_data}