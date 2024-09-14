const express = require("express");
const {users} = require("./data/users.json")

// importing routes
const usersRouter = require("./routes/users");
const booksRouter = require("./routes/books")

const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/",(req, res)=>{
    res.status(200).json({
        message: "Server is up n running!"
    })
})

app.use("/users", usersRouter);
app.use("/books", booksRouter)


 app.all("*", (req, res)=>{
    res.status(404).json({
        message: "This route does not exist"
    })
})

app.listen(PORT, ()=>{
    console.log(`Server is up n running on port ${PORT}`)
})