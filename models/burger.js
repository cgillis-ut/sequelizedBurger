module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
    	type: DataTypes.STRING,
    	allowNull: false,
		},
    devoured: {
    	type: DataTypes.BOOLEAN,
    	defaultValue: false
    },
    date_: {
    	type: DataTypes.DATE(6)
    }
  },
  {
    classMethods: {
      associate: function(models) {
        Burger.belongsTo(models.Customer, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Burger;
};


