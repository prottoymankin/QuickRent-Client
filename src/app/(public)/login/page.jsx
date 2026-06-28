'use client';

import Link from "next/link";
import {Button, Description, FieldError, Form, Input, Label, Separator, TextField, toast} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import GoogleLoginBtn from "@/components/shared/GoogleLoginBtn";

const LoginPage = () => {
  const router = useRouter();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: loginData.email,
      password: loginData.password,
    });

    if (data) {
      toast.success('Login Successful');
      router.push('/');
    } else {
      toast.danger(error.message);
    }
  }
  
  return (
    <div
      className="flex flex-col gap-10 items-center justify-center min-h-screen p-5"
    >

      <header className="text-center">
        <h2 className='font-bold text-2xl md:text-3xl'>
          Welcome Back to QuickRent
        </h2>

        <div className="flex gap-2 justify-center text-sm">
          <p className="text-muted">Already have an account?</p>
          <Link className="hover:underline font-medium" href='/register'>
            Sign up to continue.
          </Link>
        </div>
      </header>


      <section className="border p-6 rounded-2xl max-w-xl mx-auto w-full">
        <Form className="flex w-full flex-col gap-4" onSubmit={handleOnSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
          >
            <Label>Email</Label>
            <Input
              className='focus:ring-0'  
              placeholder="john@example.com" 
            />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
          >
            <Label>Password</Label>
            <Input 
              className='focus:ring-0' 
              placeholder="Enter your password" 
            />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>

          <div className="flex gap-2">
            <Button
              className='bg-emerald-600 hover:bg-emerald-700 rounded-lg text-white w-full' 
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>

        <Separator className="my-4" />
        
        <div className="flex justify-center">
          <GoogleLoginBtn />
        </div>
      </section>
      
    </div>
  );
};

export default LoginPage;