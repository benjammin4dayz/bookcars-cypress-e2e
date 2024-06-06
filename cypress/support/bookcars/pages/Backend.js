import { BACKEND_PORT, BACKEND_URL } from "../env";
import { PageHelper } from "./util";

const page = new PageHelper(BACKEND_URL + ":" + BACKEND_PORT);

export class Backend {
  static AppBar = {
    chooseLanguageDropdown: "",
  };

  static HomePage = page.create("/");

  static SignInPage = page.create("/sign-in", {
    emailInput: "#email",
    passwordInput: "#password",
    staySignedInCheckbox: "",
    submitButton:
      "#root > div.app > div > div.signin > div > form > div.signin-buttons > button",
  });
}
