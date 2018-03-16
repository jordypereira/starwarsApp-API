import Sequelize from 'sequelize';
import { DB } from '../config';

const sequelize = new Sequelize(DB.url, {
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
