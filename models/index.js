import Sequelize from 'sequelize';

const sequelize = new Sequelize('postgres://nhlgudacwpbmui:4f1d4c0a71438522e818818cbe76e03bba35bb9741bbdd69d921460988ade9ac@ec2-54-243-185-195.compute-1.amazonaws.com:5432/d9h6t49uj0mgn4', {
  dialect: 'postgres',
  operatorsAliases: Sequelize.Op,
  define: {
    underscored: true,
  },
});

const models = {
  Planet: sequelize.import('./planet'),
  Resident: sequelize.import('./resident'),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
