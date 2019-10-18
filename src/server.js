const app = require('./app');

const PORT = 3000

// Initialization of the server in port 3000
app.listen(process.env.PORT || PORT, () => {
    console.log(`Server on in PORT ${PORT}`);
});