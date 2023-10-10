import { AxiosError } from "axios";
import { BaseResponse } from "./BaseResponse";

export class ErrorResponse extends BaseResponse {
  constructor(
    public message: string,
    public statusCode: number,
    public error: AxiosError | Error,
  ) {
    super("ErrorResponse");
    this.message = message;
    this.error = error;
    this.statusCode = statusCode;
  }
}
