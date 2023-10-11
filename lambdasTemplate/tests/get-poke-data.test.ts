import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { expect, describe, it } from "@jest/globals";
import { handler } from "../index";

const event: APIGatewayProxyEvent = {
  httpMethod: "get",
  body: "",
  headers: {},
  isBase64Encoded: false,
  multiValueHeaders: {},
  multiValueQueryStringParameters: {},
  path: "/",
  pathParameters: {},
  queryStringParameters: {},
  requestContext: {
    accountId: "123456789012",
    apiId: "1234",
    authorizer: {},
    httpMethod: "get",
    identity: {
      accessKey: "",
      accountId: "",
      apiKey: "",
      apiKeyId: "",
      caller: "",
      clientCert: {
        clientCertPem: "",
        issuerDN: "",
        serialNumber: "",
        subjectDN: "",
        validity: { notAfter: "", notBefore: "" },
      },
      cognitoAuthenticationProvider: "",
      cognitoAuthenticationType: "",
      cognitoIdentityId: "",
      cognitoIdentityPoolId: "",
      principalOrgId: "",
      sourceIp: "",
      user: "",
      userAgent: "",
      userArn: "",
    },
    path: "/",
    protocol: "HTTP/1.1",
    requestId: "c6af9ac6-7b61-11e6-9a41-93e8deadbeef",
    requestTimeEpoch: 1428582896000,
    resourceId: "123456",
    resourcePath: "/",
    stage: "dev",
  },
  resource: "",
  stageVariables: {},
};

describe("Unit test for GetPokeData", () => {
  it("Verifies succesful response", async () => {
    const result: APIGatewayProxyResult = await handler(event);

    expect(result.statusCode).toEqual(200);
    expect(result.body).toEqual(
      '{"name":"LambdaResponse","message":"ok","statusCode":200,"data":[{"height":5,"id":43,"name":"oddish","weight":54,"hp":45,"attack":50,"defense":55,"special-attack":75,"special-defense":65,"speed":30},{"height":8,"id":44,"name":"gloom","weight":86,"hp":60,"attack":65,"defense":70,"special-attack":85,"special-defense":75,"speed":40},{"height":12,"id":45,"name":"vileplume","weight":186,"hp":75,"attack":80,"defense":85,"special-attack":110,"special-defense":90,"speed":50},{"height":3,"id":46,"name":"paras","weight":54,"hp":35,"attack":70,"defense":55,"special-attack":45,"special-defense":55,"speed":25},{"height":10,"id":47,"name":"parasect","weight":295,"hp":60,"attack":95,"defense":80,"special-attack":60,"special-defense":80,"speed":30},{"height":10,"id":48,"name":"venonat","weight":300,"hp":60,"attack":55,"defense":50,"special-attack":40,"special-defense":55,"speed":45},{"height":15,"id":49,"name":"venomoth","weight":125,"hp":70,"attack":65,"defense":60,"special-attack":90,"special-defense":75,"speed":90},{"height":2,"id":50,"name":"diglett","weight":8,"hp":10,"attack":55,"defense":25,"special-attack":35,"special-defense":45,"speed":95},{"height":7,"id":51,"name":"dugtrio","weight":333,"hp":35,"attack":100,"defense":50,"special-attack":50,"special-defense":70,"speed":120},{"height":4,"id":52,"name":"meowth","weight":42,"hp":40,"attack":45,"defense":35,"special-attack":40,"special-defense":40,"speed":90},{"height":10,"id":53,"name":"persian","weight":320,"hp":65,"attack":70,"defense":60,"special-attack":65,"special-defense":65,"speed":115},{"height":8,"id":54,"name":"psyduck","weight":196,"hp":50,"attack":52,"defense":48,"special-attack":65,"special-defense":50,"speed":55},{"height":17,"id":55,"name":"golduck","weight":766,"hp":80,"attack":82,"defense":78,"special-attack":95,"special-defense":80,"speed":85},{"height":5,"id":56,"name":"mankey","weight":280,"hp":40,"attack":80,"defense":35,"special-attack":35,"special-defense":45,"speed":70},{"height":10,"id":57,"name":"primeape","weight":320,"hp":65,"attack":105,"defense":60,"special-attack":60,"special-defense":70,"speed":95},{"height":7,"id":58,"name":"growlithe","weight":190,"hp":55,"attack":70,"defense":45,"special-attack":70,"special-defense":50,"speed":60},{"height":19,"id":59,"name":"arcanine","weight":1550,"hp":90,"attack":110,"defense":80,"special-attack":100,"special-defense":80,"speed":95},{"height":6,"id":60,"name":"poliwag","weight":124,"hp":40,"attack":50,"defense":40,"special-attack":40,"special-defense":40,"speed":90},{"height":10,"id":61,"name":"poliwhirl","weight":200,"hp":65,"attack":65,"defense":65,"special-attack":50,"special-defense":50,"speed":90},{"height":13,"id":62,"name":"poliwrath","weight":540,"hp":90,"attack":95,"defense":95,"special-attack":70,"special-defense":90,"speed":70},{"height":9,"id":63,"name":"abra","weight":195,"hp":25,"attack":20,"defense":15,"special-attack":105,"special-defense":55,"speed":90},{"height":13,"id":64,"name":"kadabra","weight":565,"hp":40,"attack":35,"defense":30,"special-attack":120,"special-defense":70,"speed":105},{"height":15,"id":65,"name":"alakazam","weight":480,"hp":55,"attack":50,"defense":45,"special-attack":135,"special-defense":95,"speed":120},{"height":8,"id":66,"name":"machop","weight":195,"hp":70,"attack":80,"defense":50,"special-attack":35,"special-defense":35,"speed":35},{"height":15,"id":67,"name":"machoke","weight":705,"hp":80,"attack":100,"defense":70,"special-attack":50,"special-defense":60,"speed":45},{"height":16,"id":68,"name":"machamp","weight":1300,"hp":90,"attack":130,"defense":80,"special-attack":65,"special-defense":85,"speed":55},{"height":7,"id":69,"name":"bellsprout","weight":40,"hp":50,"attack":75,"defense":35,"special-attack":70,"special-defense":30,"speed":40},{"height":10,"id":70,"name":"weepinbell","weight":64,"hp":65,"attack":90,"defense":50,"special-attack":85,"special-defense":45,"speed":55},{"height":17,"id":71,"name":"victreebel","weight":155,"hp":80,"attack":105,"defense":65,"special-attack":100,"special-defense":70,"speed":70},{"height":9,"id":72,"name":"tentacool","weight":455,"hp":40,"attack":40,"defense":35,"special-attack":50,"special-defense":100,"speed":70},{"height":16,"id":73,"name":"tentacruel","weight":550,"hp":80,"attack":70,"defense":65,"special-attack":80,"special-defense":120,"speed":100},{"height":4,"id":74,"name":"geodude","weight":200,"hp":40,"attack":80,"defense":100,"special-attack":30,"special-defense":30,"speed":20},{"height":10,"id":75,"name":"graveler","weight":1050,"hp":55,"attack":95,"defense":115,"special-attack":45,"special-defense":45,"speed":35},{"height":14,"id":76,"name":"golem","weight":3000,"hp":80,"attack":120,"defense":130,"special-attack":55,"special-defense":65,"speed":45}]}',
    );
  });
  it("Check number of pokemons", async () => {
    const result: APIGatewayProxyResult = await handler(event);

    expect(result.statusCode).toEqual(200);
    expect(JSON.parse(result.body)?.data?.length).toEqual(34);
  }, 10000);
  it("Verifies not found response", async () => {
    const eventNotFound: APIGatewayProxyEvent = {
      ...event,
      path: "/other-path",
      requestContext: {
        ...event.requestContext,
        path: "/other-path",
        resourcePath: "/other-path",
      },
    };

    const result: APIGatewayProxyResult = await handler(eventNotFound);

    expect(result.statusCode).toEqual(404);
    expect(result.body).toEqual('{"message":"Not Found"}');
  });
});
