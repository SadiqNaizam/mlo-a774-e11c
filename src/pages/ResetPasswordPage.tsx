import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AuthFormWrapper from '@/components/AuthFormWrapper';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from "@/components/ui/use-toast"

// Validation schema using Zod
const formSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long.",
  }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], // Point error to the confirmPassword field
});

const ResetPasswordPage = () => {
  console.log('ResetPasswordPage loaded');
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  // Handler for form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // In a real application, you would make an API call here.
    // The password reset token would typically be retrieved from the URL.
    console.log('Password reset successful with values:', values);

    toast({
      title: "Success",
      description: "Your password has been reset successfully. Redirecting to login...",
    });

    // Redirect to login page after a short delay
    setTimeout(() => {
      navigate('/'); // Navigate to the login page
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <AuthFormWrapper
          title="Reset Your Password"
          footer={
            <Link to="/" className="hover:underline">
              Remembered your password? Login
            </Link>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          </Form>
        </AuthFormWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default ResetPasswordPage;