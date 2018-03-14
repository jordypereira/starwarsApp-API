export default (sequelize, DataTypes) => {
  const Planet = sequelize.define(
    'planet',
    {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
      climate: DataTypes.STRING,
      population: DataTypes.STRING,
    },
  );

  Planet.associate = (models) => {
    Planet.belongsToMany(models.Resident, {
      through: 'planetResidents',
      foreignKey: {
        name: 'planetId',
        field: 'planet_id',
      },
    });
  };

  return Planet;
};
