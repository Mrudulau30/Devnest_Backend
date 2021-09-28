const {Sequelize}=require("sequelize");

const sequelize =new Sequelize(
    "postgres",
    "postgres",
    "Pratibha",
    {
        host:"localhost",
        dialect:"postgres"
    }
);

sequelize.sync();
(async()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection establisged with database");
    }
    catch (err){
         console.error("Unable to connect to database")
    }
})()

module.exports=sequelize;