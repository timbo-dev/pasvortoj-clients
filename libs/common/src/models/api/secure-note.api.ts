import { SecureNoteType } from "../../enums";
import { BaseResponse } from "../response/base.response";

export class SecureNoteApi extends BaseResponse {
  type: SecureNoteType;

  constructor(data: any = null) {
    super(data);
    if (data == null) {
      return;
    }
    this.type = this.getResponseProperty("Type");
  }
}
