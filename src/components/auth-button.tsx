import Image from "next/image";
import { auth, signIn, signOut } from "../../auth";
import { Button } from "./ui/button";
import googleIcon from "./../../public/googleLogo.png";

export async function SignIn() {
  const session = await auth();
  return (
    <form
      action={async () => {
        "use server";
        if (session) {
          await signOut({ redirectTo: "/" });
        } else {
          await signIn("google", { redirectTo: "/todos" });
        }
      }}
    >
      <Button type="submit">{session ? "Signout" : "Signin with Google"}</Button>
    </form>
  );
}
