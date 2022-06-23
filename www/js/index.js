//open the data database
document.addEventListener('deviceready', onDeviceReady, false);
$(function onDeviceReady(){
    db = window.sqlitePlugin.openDatabase(
        {name: 'employee.db', location: 'default'},
        function(){
            alert("DB Opened SUccessfully!");
        }
        function(){
            alert("DB Failed to open!");
        }
    );
    
    //create a table
    db.transaction(
        function(tx){
            var query="CREATE TABLE IF NOT EXISTS employee1 (employeeNumber INTEGER PRIMARY KEY, firstName TEXT NOT NULL, lastName TEXT NOT NULL, officeCode INTEGER, extension TEXT NOT NULL, email TEXT NOT NULL, jobTitle TEXT NOT NULL, reportsTO INTEGER)";
            tx.executeSql(query, [],
                function(tx, result){
                    alert("Table created successfully!");
                },
                function(err) {
                    alert("error occured:" +err.code);
                });
            });
        

})