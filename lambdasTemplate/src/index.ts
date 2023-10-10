import { Context, APIGatewayEvent } from "aws-lambda";
import { LambdaResponse } from "./shared/domain/responses/LambdaResponse";

export const handler = async (
  event: APIGatewayEvent,
  context: Context,
): Promise<LambdaResponse> => {
  console.log("event for lambdaTemplate: ", { ...event });
  console.log("context for lambdaTemplate: ", { ...context });
  console.log("initial lambdaTemplate ");

  return new LambdaResponse("hello world", 200, []);
};
