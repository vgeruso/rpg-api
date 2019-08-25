cd ..
mkdir config
cd config
touch database.js
echo -e "const mongoose = require('mongoose');\n" >> database.js
echo -e "module.exports = mongoose.connect(" >> database.js
echo -e "   'mongodb://rpg:p3GWunjc5vL0KYVe@rpgdb-shard-00-00-lb7ko.mongodb.net:27017/'+process.env.MONGOLAB_DB+'?ssl=true&replicaSet=rpgDB-shard-0&authSource=admin&retryWrites=true&w=majority'," >> database.js
echo -e "   {" >> database.js
echo -e "       useNewUrlParser: true" >> database.js
echo -e "   }" >> database.js
echo -e ");" >> database.js
echo "Setup Ok"