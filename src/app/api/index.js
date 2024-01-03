const express = require("express")
const User = require('./models/User')
require("./db")
const cors = require("cors")


require("dotenv").config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send(User);
})

const handleLogin = async (req, res) => {
    const { username, password } = req.body
    if(!username || !password) {
        return res.status(400).json("incorrect form submission")
    }


    const user = await User.findOne({ username, password })
    if (!user) {
        return res.status(400).json("wrong credentials")
    }
    res.json(user)
}
const handleRegister = async (req, res) => {
    const { username, password } = req.body

    if(!username || !password) {
        return res.status(400).json("incorrect form submission")
    }

    const user = await User.findOne({ username })
    if (user) {
        return res.status(400).json("user already exists")
    }

    const newUser = await User.create({
        username,
        password
    })

    res.json({
        message: "User Registered Successfully",
        user: newUser
    })
}
const handleChangePassword = async (req, res) => {
    const { id } = req.params
    const { newPassword } = req.body

    const user = await User.findOne({ _id: id })
    if (!user) {
        return res.status(400).json("wrong credentials")
    }

    user.password = newPassword
    await user.save()

    res.json({
        message: "Password Changed Successfully",
        user
    })
 }

 app.post("/login", handleLogin)
 app.post("/register", handleRegister)
 app.put("/:id", handleChangePassword)

app.listen(PORT, () => console.log("Server started on port " +PORT))