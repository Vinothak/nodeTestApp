const express = require('express');
const app = express();
const port = 8080
app.get('/', (req, res) => {
    console.log('woooow works now')
})
app.listen(port, () => console.log('running on port', port))

