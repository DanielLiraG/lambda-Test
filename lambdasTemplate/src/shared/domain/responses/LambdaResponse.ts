import { BaseResponse } from "./BaseResponse";

export class LambdaResponse extends BaseResponse {
  constructor(
    public message: string,
    public statusCode: number,
    public data: object,
  ) {
    super("LambdaResponse");
    this.message = message;
    this.statusCode = statusCode;
    this.data = data;
  }
}
