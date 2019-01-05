const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use("/api",apiRoutes);

app.get("*", function(req, res) {
    res.sendfile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
    console.log(`:earth_americas: ===> API server now on port ${PORT}!`)
})