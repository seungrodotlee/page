import { loginWithGithub } from "./actions";

export default function LoginPage() {
  return (
    <form>
      <button formAction={loginWithGithub}>Log in</button>
    </form>
  );
}
