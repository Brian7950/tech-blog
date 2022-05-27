const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcrypt');

//connect to db
const sequelize = require('../config/connection');

class User extends Model{
    checkPassword(loginPW){
        return bcrypt.compareSync(loginPW, this.password);
    } 
}

User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
        }
    }
)