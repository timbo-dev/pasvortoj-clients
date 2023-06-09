import { Component } from "@angular/core";

import { UserVerificationPromptComponent as BaseUserVerificationPrompt } from "@bitwarden/angular/auth/components/user-verification-prompt.component";

@Component({
  templateUrl: "user-verification-prompt.component.html",
})
export class UserVerificationPromptComponent extends BaseUserVerificationPrompt {}
