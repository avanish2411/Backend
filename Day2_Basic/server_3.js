var _ = require('lodash');
//very use full package

var data = ['name','gae',1,3,3,2,1,'2','2','rahul'];
var unique = _.uniq(data);
console.log(unique);

var concat_data = _.concat(data,5);
console.log(concat_data);