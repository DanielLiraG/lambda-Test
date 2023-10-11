import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";
import { LambdaResponse } from "./src/shared/domain/responses/LambdaResponse";
import getPokeData from "./src/controllers/getPokeData";
import { ErrorResponse } from "./src/shared/domain/responses/ErrorResponse";

export const handler = async (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => {
  const httpMethod = event.httpMethod.toLocaleLowerCase();

  // * It would be great to create a router with express, but I'll have opportunities later.
  if (httpMethod === "get" && event.path === "/") {
    const [error, response] = await getPokeData();

    if (response) {
      return {
        statusCode: 200,
        body: new LambdaResponse("ok", 200, response).toString(),
      };
    }

    return {
      statusCode: 500,
      body: new LambdaResponse(
        "Server error",
        500,
        new ErrorResponse("Server Error", 500, error as Error),
      ).toString(),
    };
  }

  return {
    statusCode: 404,
    body: JSON.stringify({
      message: "Not Found",
    }),
  };
};
