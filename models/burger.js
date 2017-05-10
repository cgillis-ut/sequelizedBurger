module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING,
    	allowNull: false,
		},
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: null
    },
    date_: {
    	type: DataTypes.DATE(6)
    }
  });
  return Burger;
};


