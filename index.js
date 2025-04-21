import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/js", express.static(__dirname + "/js"));
app.use("/db", express.static(__dirname + "/db"));
app.use(express.static("partials"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
app.get("/pass-reset", (req, res) => {
  res.render("pass-reset.ejs");
});
app.get("/user", (req, res) => {
  res.render("user.ejs", { currentPage: "user" });
});
app.get("/post", (req, res) => {
  res.render("post.ejs");
});
app.get("/details", (req, res) => {
  res.render("post-detail.ejs");
});
app.get("/support", (req, res) => {
  res.render("support.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});
app.post("/contact-submit", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});
app.post("/signup/submit", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

/// product-details id
app.get("/post/:id", (req, res) => {
  const postId = req.params.id; // Get the 'id' from the URL
  res.send(`Post ID is ${postId}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
