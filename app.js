var Datastore = require('nedb');
var fs = require('fs');

 





 var db = new Datastore({ filename: __dirname + '/nutrient-definition.json', autoload: true });
 db.loadDatabase();


// db.find({ 'Shrt_Desc': { $regex: /butter/i } }, function (err, docs) {
//   console.log('done');
//   if (err) {
//     console.log(err);
//   }
//   for (var index = 0; index < 25; index++) {
//     var element = docs[index];
//     var temp = {
//       Id: element.NDB_No,
//       Name: element.Shrt_Desc,
//       Calories: element.Energ_Kcal,
//       Protein: element.Protein
//     };
//     console.log(temp);
//   }
// });

var obj = JSON.parse(fs.readFileSync(__dirname + '/_nutrient.json'),'utf8');
for (var index = 0; index < obj.length; index++) {
    var element = obj[index];
    try {
        db.insert(element);
    } catch (error) {
        fs.appendFile('err.txt',' error: ' + error.message +' --'+ line + '\r\n', function (err) {});
    } 
}
debugger;
// var lineReader = require('readline').createInterface({
//     input: require('fs').createReadStream(__dirname + '/reader.txt')
// });

// lineReader.on('line', function (line) {
//     try {
//         var str = line.slice(0, -1);//remove trailing coma
//         var obj = JSON.parse(str);
//         db.insert(obj);

//     } catch (error) {
//         fs.appendFile('err.txt',' error: ' + error.message +' --'+ line + '\r\n', function (err) {
//         });
//     }
// });