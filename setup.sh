mkdir config
cd config
touch database.js
echo -e "const mongoose = require('mongoose')\n\nmodule.exports = mongoose.connect('mongodb://localhost:27017/rpg_db', { useNewUrlParser: true })" > database.js
echo "Setup Ok"