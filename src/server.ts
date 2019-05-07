import app from "./app";
// import { PORT } from "./config";

app.listen('8080', () => {
  console.log("Express server listening on port " + '8080');
});

// (async () => {
//     await sequelize.sync({force: true});

//     createServer(app)
//       .listen(
//         port,
//         () => console.info(`Server running on port ${port}`)
//       );
//   })();