export default (sequelize, DataTypes) => {
  const Resident = sequelize.define(
    'resident', {
      name: {
        type: DataTypes.STRING,
        unique: true,
      },
    },
  );

  Resident.associate = (models) => {
    Resident.belongsToMany(models.Planet, {
      through: 'planetResidents',
      foreignKey: {
        name: 'residentId',
        field: 'resident_id',
      },
    });
  };

  return Resident;
};
