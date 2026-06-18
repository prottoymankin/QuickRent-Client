'use client';

import Link from "next/link";
import {Button, Description, FieldError, Form, Input, Label, Separator, TextField} from "@heroui/react";
import { SelectField } from "@/components/shared/SelectField";
import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const SignUpPage = () => {
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const signUpData = Object.fromEntries(formData.entries());

    if (!signUpData.role) signUpData.role = 'Tenant';

    const { data, error } = await authClient.signUp.email({
      name: signUpData.name,
      email: signUpData.email,
      image: signUpData.image,
      password: signUpData.password,
      role: signUpData.role
    }, {
      onSuccess: () => {
        console.log('success')
      },
      onError: (ctx) => {
        console.log(ctx.error.message);
      }
    });
  }

  return (
    <div 
      className="flex flex-col gap-10 items-center justify-center min-h-screen p-5"
    >

      <header className="text-center">
        <h2 className='font-bold text-2xl md:text-3xl'>Create your account</h2>

        <p>
          Join QuickRent to explore, book, and manage rental properties with ease.
        </p>

        <div className="flex gap-2 justify-center text-sm">
          <p className="text-muted">Already have an account?</p>
          <Link className="hover:underline font-medium" href='/auth/signin'>
            Sign in to continue.
          </Link>
        </div>
      </header>
      

      <section className="border p-6 rounded-2xl max-w-xl mx-auto w-full">
        <Form 
          className="flex flex-col gap-4 w-full" 
          onSubmit={handleOnSubmit}
        >
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label>Name</Label>
            <Input
              className="focus:ring-0" 
              placeholder="John Doe" 
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input 
              className="focus:ring-0"
              placeholder="john@example.com" 
            />
            <FieldError />
          </TextField>
          
          <TextField
            isRequired
            name="image"
          >
            <Label>Image Url</Label>
            <Input
              className="focus:ring-0" 
              placeholder="https://example.com/image.jpg" 
            />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input
              className="focus:ring-0" 
              placeholder="Enter your password" 
            />
            <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
            <FieldError />
          </TextField>

          <SelectField
            label={'Sign up as'}
            name={'role'}
            options={['Tenant', 'Owner']}
          />

          <div className="flex gap-2">
            <Button
              className='bg-orange-400 w-full' 
              type="submit"
            >
              Create Account
            </Button>
          </div>
        </Form>

        <Separator className="my-4" />

        <div className="flex justify-center">
          <Button variant="tertiary">
            <FcGoogle />
            Continue with Google
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;