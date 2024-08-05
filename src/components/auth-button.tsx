import { auth, signIn, signOut } from "../../auth";
import { Button } from "./ui/button";

export async function SignIn() {
  const session = await auth();
  return (
    <form
      action={async () => {
        "use server";
        if (session) {
          await signOut({ redirectTo: "/" });
        } else {
          await signIn("google");
        }
      }}
    >
      <Button variant="outline" type="submit">
        {session ? "Signout" : "Signin with Google"}
      </Button>
    </form>
  );
}
