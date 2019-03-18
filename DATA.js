print('* Database created');
print('%DATA');
var db = connect('127.0.0.1:27017/admin');
db.auth('admin','admin')	
print('* Database created');
db = db.getSiblingDB('continent')
print('*create a database');


//create the names collection and add documents to it
db.names.insert({'name' : 'Don Draper'});
db.names.insert({'name' : 'Peter Campbell'});
db.names.insert({'name' : 'Betty Draper'});
db.names.insert({'name' : 'lohit'});

print('* Documents created');

//set a reference to all documents in the database
allMadMen = db.names.find();

print('* All documents:');

//iterate the names collection and output each document
while (allMadMen.hasNext()) {
   printjson(allMadMen.next());
}

//search for the document whose name property is: "Don Draper"
db.names.find().forEach( function(thisDoc) {
  if(thisDoc.name === 'Don Draper'){
    //update the record that contains "Donald Draper" and change it to "Dick Whitman"
    db.names.update( { "_id" : thisDoc._id }, { "name": "Dick Whitman" } );

    print('* Updated document: ' + thisDoc._id);
  };
});

print('* All documents:');

//set a reference to all documents in the database
allMadMen = db.names.find();

//iterate the names collection and output each document
while (allMadMen.hasNext()) {
   printjson(allMadMen.next());
}


db.names.find().forEach( function(thisDoc) {
  if(thisDoc.name === 'Dick Whitman'){
    //remove the record that contains "Dick Whitman"
    db.names.remove({ "_id" : thisDoc._id });

    print('* Removed document:');

    //output the removed document as json
    printjson(thisDoc);
  };
});

print('* All documents ("Dick Whitman" removed):');

//set a reference to all documents in the database
allMadMen = db.names.find();

//iterate the names collection and output each document
while (allMadMen.hasNext()) {
   printjson(allMadMen.next());
}

drop the database
db.dropDatabase();

print('* Database dropped');
// db.adminCommand({ 'getLog' : 'global' })






