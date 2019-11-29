cd ..
mkdir config
cd config
touch database.js
echo -e "const mongoose = require('mongoose');\n" >> database.js
echo -e "module.exports = mongoose.connect(" >> database.js
echo -e "   'mongodb://localhost:27017/'+process.env.MONGOLAB_DB," >> database.js
echo -e "   {" >> database.js
echo -e "       useNewUrlParser: true," >> database.js
echo -e "       useUnifiedTopology: true" >> database.js
echo -e "   }" >> database.js
echo -e ");" >> database.js
echo "Setup Ok"