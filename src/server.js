const app = require('./app');

// Initialization of the server in port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Server on');
});