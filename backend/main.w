bring ex;
bring cloud;
bring http;

let bucket = new cloud.Bucket();
bucket.addObject("title", "default bucket title");

let api = new cloud.Api(
  cors: true
);

api.get("/title", inflight () => {
  log("Someone called me");
  return {
    status: 200,
    body: bucket.get("title")
  };
});

let react = new ex.ReactApp(
  projectPath: "../client",
  localPort: 4003
);
react.addEnvironment("title", "Learn React with Wing");
react.addEnvironment("apiUrl", api.url);

