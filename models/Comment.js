const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        //Columns will go here
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement:true
        },
        comment_text:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[4]
            }
        },
        user_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'User',
                key:'id'
            }
        },
        post_id:{
            type:DataTypes.INTEGER,
            references:{
                model:'Post',
                key:'id'
            }
        }
    },

    {
        sequelize,
        freezeTableName:true,
        underscored:true,
        modelName:'comment'
    }
);

module.exports = Comment;