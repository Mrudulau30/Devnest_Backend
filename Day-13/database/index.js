const {Sequelize}=require("sequelize");
const{sequelize_database,sequelize_username,sequelize_password,sequelize_host,sequelize_dialect,}=require("../config");
const sequelize =new Sequelize(
    sequelize_database,
    sequelize_username,
    sequelize_password,
    {
        host:sequelize_host,
        dialect:sequelize_dialect
    }
);

sequelize.sync({alter:true});
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