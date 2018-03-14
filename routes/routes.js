const config = require("../config") ;
let planets = require("../planets") ;

const appRouter = (app) => {
  // GET ALL PLANET
  app.get('/planets', (req, res) => {
    console.log('Get all planets');

    if (planets && planets.length) {
      res.send({
        status: config.STATUS.OK,
        message: planets,
      });
    } else {
      res.send({
        status: config.STATUS.ERROR,
        message: 'Could not find any planet',
      });
    }
  });

  // GET PLANET DETAILS
  app.get('/planets/:id', (req, res) => {
    let planet = null;
    console.log('Get planet', req.params.id);

    if (planets && planets.length) {
      planet = planets.filter((planet) => ('' + planet.id) === req.params.id);
    }
    if (planet) {
      res.send({
        status: config.STATUS.OK,
        message: planet[0],
      });
    } else {
      res.send({
        status: config.STATUS.ERROR,
        message: 'Could not find any planet',
      });
    }
  });

  // UPDATE PLANET
  app.put('/planets/:id', (req, res) => {
    let planet = null;
    console.log('update planet', req.body);

    if (planets && planets.length) {
      planet = planets.filter((planet) => ('' + planet.id) === req.params.id);
    }

    if (planet[0]) {
      // planets[req.params.id] = req.body;
      planets = planets.map((s) => {
        return ('' + s.id) === req.params.id ? req.body : s;
      });
      res.send({
        status: config.STATUS.OK,
        message: req.body,
      });
    } else {
      res.send({
        status: config.STATUS.ERROR,
        message: 'Could not find planet for update',
      });
    }


  });

  // REMOVE PLANET
  app.delete('/planets/:id', (req, res) => {
    console.log('Remove planet', req.params.id);
    planets = planets.filter((student) => ('' + student.id) !== req.params.id);

    res.send({
      status: config.STATUS.OK,
      message: 'Planet removed',
    });
  });

  // ADD PLANET
  app.post('/planets/add', (req, res) => {
    const maxIndex = Math.max.apply(Math, planets.map((o) => o.id));
    console.log('Add planet', req.body, maxIndex);
    let planet = req.body;
    planet.id = maxIndex + 1;


    planets.push(planet);

    if (planets[planets.length - 1] === planet) {
      res.send({
        status: config.STATUS.OK,
        message: planet,
      });
    } else {
      res.send({
        status: config.STATUS.ERROR,
        message: 'Could not add planet',
      });
    }
  });
};

module.exports =  appRouter;