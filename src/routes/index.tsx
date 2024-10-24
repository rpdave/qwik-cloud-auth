import { component$ } from "@builder.io/qwik";
import { Form, type DocumentHead } from "@builder.io/qwik-city";
import { useSignIn } from "./plugin@auth";

export default component$(() => {
  const signIn = useSignIn();
  return (
    <Form action={signIn}>
      <input type="hidden" name="providerId" value="github" />
      <input
        type="hidden"
        name="options.redirectTo"
        value="/"
      />
      <button>Sign In</button>
    </Form>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
