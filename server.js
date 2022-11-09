const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jonathan-crepeau:hello123@city-cluster.quinohu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => console.log('Database connection successful...'))
    .catch(() => console.log('Database connetion error'));

const citySchema = {
    name: String,
    description: String,
}

const City = mongoose.model(
    'City',
    citySchema,
    'Cities'
);

City.findOne({name: "Boston"}, (err, foundItem) => {
    if (err) {
        console.log(err);
    } else {
        console.log(foundItem)
    }
});

app.listen(3200, () => {
    console.log('Application listening on port 3200...');
});