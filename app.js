const express = require('express');
const app = express();
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    console.log('woooow works now')
})
app.listen(port, () => console.log('running on port', port))

