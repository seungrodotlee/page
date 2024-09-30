import { operationEnv } from "@/@shared/utils/env";
import { loginWithGithub } from "./actions";

export default function LoginPage() {
  return (
    <form>
      <button formAction={loginWithGithub}>Log in</button>
      <p>
        {process.env.NODE_ENV}
        {operationEnv()}
      </p>
    </form>
  );
}
