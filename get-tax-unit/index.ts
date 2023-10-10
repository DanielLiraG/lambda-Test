import {
  Context,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from "aws-lambda";

import getUTAData from "./src/controllers/getUTAData";

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
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
};
