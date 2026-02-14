"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { useForm } from "@tanstack/react-form";
import { toast } from "sonner";
import * as z from "zod";

// schema
const formSchema = z.object({
  //name: z.string().min(2, "This field is required"),
  email: z.email(),
  password: z.string().min(8, "Minimum 8 charecters Need"),
});

export function LoginForm({
  ...props
}: React.ComponentProps<typeof Card>) {
  const form = useForm({
    defaultValues: {email: "", password: "" },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log("clickedddddddd", value);
      const toastId = toast.loading("Logging in...");
      try {
        const { data, error } = await authClient.signIn.email(value);
        if(error){
          toast.error(error.message,{id: toastId});
          return

        }
        toast.success("Logged in successfully!",{id: toastId});
      } catch (error) {
        toast.error("Failed to login. Please try again.",{id: toastId});
      }
    },
  });

  const handleGoogleLogin = async() => {
    // Implement Google login logic here
    const data = await authClient.signIn.social({ provider: 'google', callbackURL: 'http://localhost:3000' })
  }

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Login to Your Account</CardTitle>
        <CardDescription>
          Enter your information below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="reg-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        ></form>

        <FieldGroup>
        
          {/* email */}
          <form.Field
            name="email"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="email"
                    placeholder="md.selim.reza@example.com"
                    required
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />

          {/* password */}
          <form.Field
            name="password"
            children={(field) => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;

              return (
                <Field data-invalid={isInvalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
        </FieldGroup>
      </CardContent>
      <CardFooter className="flex flex-col gap-5 justify-end">
        <Button className="w-full" form="reg-form" type="submit">
          Login
        </Button>
          <Button className="w-full" onClick={()=>handleGoogleLogin()} variant="outline" type="button">
                  Login with Google
                </Button>
      </CardFooter>
    </Card>
  );
}