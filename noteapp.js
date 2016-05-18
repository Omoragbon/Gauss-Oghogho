var Notesapplication = function (author, notelist) {
	this.author = author;
	this.notelist = notelist;
	this.list = []




}
//This function takes the note content as the parameter and adds it to the notes list of the object.
Noteapplication.prototype.create = function (note_content) {
	this.list.push(note_content)
	return content created

}

//This function lists out each of the notes in the notes list in the following format.
NotesApplication.prototype.listNotes = function(){
	obj = []; // local variable
	for(var i =0; i < this.notelist.length; i++){
		if(this.notelist.length === 0){
			return "Content is Empty";  // inactive
		}
		else{
			obj.push({1: "Note ID: " + i, 
				      2: this.notelist[i],
				      3: "By Author " + this.author + "\n"
				});
		}
	}
	

};

//This function takes a note_id which refers to the index of the note in the notes list and returns the content of that note as a string.

Noteapplication.prototype.get = function (note_id) {
		obj = [];
	for(var i =0; i < this.notelist.length; i++){
		if(note_id === i){
            obj.push(this.notelist[i]) ;
		}
	}
	if(obj.length > 0){
		return obj.join(" ");
	}
	else{
		return "No ID Found";
	}
};
//This function take a search string, search_text and returns all the notes with that text within it in the following format
NotesApplication.prototype.search = function(search_text){
	var obj = [];
	for(var i =0; i < this.notelist.length; i++){
		if( this.notelist[i].search(search_text) == -1){
			return "Text does not exist";
		}
		else{
			obj.push({1: "Note ID: " + i, 
				      2: this.notelist[i],
				      3: "By Author " + this.author + "\n"
				    });
		}
};
//This function deletes the note at the index note_id of the notes list.
NotesApplication.prototype.delete = function(note_id){
	if(note_id > this.notelist.length || note_id < 0){
		return "Id does not Exist";
	}
	else{
		this.notelist.splice(note_id,1);
		return "Content Deleted";	
	}
	
};
//This function replaces the content in the note at note_id with new_content.
NotesApplication.prototype.edit = function(note_id,new_content){
	if(note_id > this.notelist.length || note_id < 0){
		return "Id does not Exist";
	}
	else{
		this.notelist[note_id] = new_content;
		return "Content Updated";
	}
	
};



	

