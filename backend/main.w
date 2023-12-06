bring ex;
bring cloud;
bring http;

let api = new cloud.Api(
  cors: true
);

api.get("/title", inflight () => {
  log("Someone called me");
  return {
    status: 200,
    body: "Hello from the API Pull Request"
  };
});

let react = new ex.ReactApp(
  projectPath: "../client",
  localPort: 4003
);
react.addEnvironment("title", "Learn React with Wing");
react.addEnvironment("apiUrl", api.url);

