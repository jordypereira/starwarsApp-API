import Sequelize from 'sequelize';
import { DB } from '../config';

let sequelize;

if (DB.url) {
  sequelize = new Sequelize(DB.url, {
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op,
    define: {
      underscored: true,
    },
  });
}
else {
  sequelize = new Sequelize(
    DB.database,
    DB.user,
    DB.password, {
      host: DB.host,
      dialect: 'postgres',
      operatorsAliases: Sequelize.Op,
      define: {
        underscored: true,
      },
    },
  );
}

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
