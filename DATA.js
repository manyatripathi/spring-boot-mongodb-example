var db = connect('127.0.0.1:27017/madMen'),
    allMadMen = null;
 
print('* Database created');
 
//create the names collection and add documents to it
db.names.insert({'name' : 'Don Draper'});
db.names.insert({'name' : 'Peter Campbell'});
db.names.insert({'name' : 'Betty Draper'});
db.names.insert({'name' : 'Joan Harris'});
 

