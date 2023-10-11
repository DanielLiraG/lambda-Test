import { APIGatewayEvent, APIGatewayProxyResult } from "aws-lambda";

import getUTAData from "./src/controllers/getUTAData";

export const handler = async (
  event: APIGatewayEvent,
): Promise<APIGatewayProxyResult> => {
  const httpMethod = event.httpMethod.toLocaleLowerCase();

  if (httpMethod === "get" && event.path === "/") {
    try {
      const response = await getUTAData();

      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "Some error happened",
        }),
      };
    }
  }

  return {
    statusCode: 404,
    body: JSON.stringify({
      message: "Not Found",
    }),
  };
};
