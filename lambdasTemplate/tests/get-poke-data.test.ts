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
      '{"name":"LambdaResponse","message":"ok","statusCode":200,"data":[{"weight":300,"name":"raichu","height":8,"hp":60,"attack":90,"defense":55,"special-attack":90,"special-defense":80,"speed":110},{"weight":295,"name":"sandslash","height":10,"hp":75,"attack":100,"defense":110,"special-attack":45,"special-defense":55,"speed":65},{"weight":200,"name":"nidorina","height":8,"hp":70,"attack":62,"defense":67,"special-attack":55,"special-defense":55,"speed":56},{"weight":600,"name":"nidoqueen","height":13,"hp":90,"attack":92,"defense":87,"special-attack":75,"special-defense":85,"speed":76},{"weight":195,"name":"nidorino","height":9,"hp":61,"attack":72,"defense":57,"special-attack":55,"special-defense":55,"speed":65},{"weight":620,"name":"nidoking","height":14,"hp":81,"attack":102,"defense":77,"special-attack":85,"special-defense":75,"speed":85},{"weight":75,"name":"clefairy","height":6,"hp":70,"attack":45,"defense":48,"special-attack":60,"special-defense":65,"speed":35},{"weight":400,"name":"clefable","height":13,"hp":95,"attack":70,"defense":73,"special-attack":95,"special-defense":90,"speed":60},{"weight":199,"name":"ninetales","height":11,"hp":73,"attack":76,"defense":75,"special-attack":81,"special-defense":100,"speed":100},{"weight":55,"name":"jigglypuff","height":5,"hp":115,"attack":45,"defense":20,"special-attack":45,"special-defense":25,"speed":20},{"weight":120,"name":"wigglytuff","height":10,"hp":140,"attack":70,"defense":45,"special-attack":85,"special-defense":50,"speed":45},{"weight":550,"name":"golbat","height":16,"hp":75,"attack":80,"defense":70,"special-attack":65,"special-defense":75,"speed":90},{"weight":86,"name":"gloom","height":8,"hp":60,"attack":65,"defense":70,"special-attack":85,"special-defense":75,"speed":40},{"weight":186,"name":"vileplume","height":12,"hp":75,"attack":80,"defense":85,"special-attack":110,"special-defense":90,"speed":50},{"weight":295,"name":"parasect","height":10,"hp":60,"attack":95,"defense":80,"special-attack":60,"special-defense":80,"speed":30},{"weight":125,"name":"venomoth","height":15,"hp":70,"attack":65,"defense":60,"special-attack":90,"special-defense":75,"speed":90},{"weight":333,"name":"dugtrio","height":7,"hp":35,"attack":100,"defense":50,"special-attack":50,"special-defense":70,"speed":120},{"weight":320,"name":"persian","height":10,"hp":65,"attack":70,"defense":60,"special-attack":65,"special-defense":65,"speed":115},{"weight":766,"name":"golduck","height":17,"hp":80,"attack":82,"defense":78,"special-attack":95,"special-defense":80,"speed":85},{"weight":320,"name":"primeape","height":10,"hp":65,"attack":105,"defense":60,"special-attack":60,"special-defense":70,"speed":95},{"weight":1550,"name":"arcanine","height":19,"hp":90,"attack":110,"defense":80,"special-attack":100,"special-defense":80,"speed":95},{"weight":200,"name":"poliwhirl","height":10,"hp":65,"attack":65,"defense":65,"special-attack":50,"special-defense":50,"speed":90},{"weight":540,"name":"poliwrath","height":13,"hp":90,"attack":95,"defense":95,"special-attack":70,"special-defense":90,"speed":70},{"weight":565,"name":"kadabra","height":13,"hp":40,"attack":35,"defense":30,"special-attack":120,"special-defense":70,"speed":105},{"weight":480,"name":"alakazam","height":15,"hp":55,"attack":50,"defense":45,"special-attack":135,"special-defense":95,"speed":120},{"weight":705,"name":"machoke","height":15,"hp":80,"attack":100,"defense":70,"special-attack":50,"special-defense":60,"speed":45},{"weight":1300,"name":"machamp","height":16,"hp":90,"attack":130,"defense":80,"special-attack":65,"special-defense":85,"speed":55},{"weight":64,"name":"weepinbell","height":10,"hp":65,"attack":90,"defense":50,"special-attack":85,"special-defense":45,"speed":55},{"weight":155,"name":"victreebel","height":17,"hp":80,"attack":105,"defense":65,"special-attack":100,"special-defense":70,"speed":70},{"weight":550,"name":"tentacruel","height":16,"hp":80,"attack":70,"defense":65,"special-attack":80,"special-defense":120,"speed":100},{"weight":1050,"name":"graveler","height":10,"hp":55,"attack":95,"defense":115,"special-attack":45,"special-defense":45,"speed":35},{"weight":300,"name":"ponyta","height":10,"hp":50,"attack":85,"defense":55,"special-attack":65,"special-defense":65,"speed":90},{"weight":360,"name":"slowpoke","height":12,"hp":90,"attack":65,"defense":65,"special-attack":40,"special-defense":40,"speed":15}]}',
    );
  });
  it("Check number of pokemons", async () => {
    const result: APIGatewayProxyResult = await handler(event);

    expect(result.statusCode).toEqual(200);
    expect(JSON.parse(result.body)?.data?.length).toEqual(33);
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
