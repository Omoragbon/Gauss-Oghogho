var Notesapplication = function (author, notelist) {
	this.author = author;
	this.notelist = notelist;
	this.list = []




}

Noteapplication.prototype.create = function (note_content) {
	this.list.push(note_content)
	return content created

}


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
	//for testing purposes 
		for(var j = 0; j <obj.length; j++){
		for(var key in obj[j]){
			console.log(obj[j][key]);
		}
	}

};

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

NotesApplication.prototype.delete = function(note_id){
	if(note_id > this.notelist.length || note_id < 0){
		return "Id does not Exist";
	}
	else{
		this.notelist.splice(note_id,1);
		return "Content Deleted";	
	}
	
};

NotesApplication.prototype.edit = function(note_id,new_content){
	if(note_id > this.notelist.length || note_id < 0){
		return "Id does not Exist";
	}
	else{
		this.notelist[note_id] = new_content;
		return "Content Updated";
	}
	
};



	

