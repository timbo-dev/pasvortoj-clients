import { PaymentMethodType } from "../../enums";

import { OrganizationTaxInfoUpdateRequest } from "./organization-tax-info-update.request";

export class PaymentRequest extends OrganizationTaxInfoUpdateRequest {
  paymentMethodType: PaymentMethodType;
  paymentToken: string;
}
