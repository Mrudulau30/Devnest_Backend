const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.get('/',slash);
app.post('/',slash);
app.put('/',slash);
app.delete('/',slash);

app.get('/',(req,res)=>{
    res.sendStatus(400);
});

app.get('/',(req,res)=>{
    res.status(500).send("database not connected");
});

app.get("/a?b?cd", (req, res) => res.status(201).send("hello"));

  app.get("/ab*cd", (req, res) => res.status(201).send("hello there"));
app.get(/.*fly$/, (req, res) =>
  res.status(200).send("?")
);


app.listen(5000);