import React from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/**
 * Props for the AuthFormWrapper component.
 */
interface AuthFormWrapperProps {
  /**
   * The title to be displayed at the top of the form, e.g., "Login" or "Create an account".
   */
  title: string;
  /**
   * The main content of the form, typically input fields and a submit button.
   */
  children: React.ReactNode;
  /**
   * The content for the footer, usually containing links for alternative actions,
   * e.g., navigating to the sign-up or password reset page.
   */
  footer: React.ReactNode;
}

/**
 * A reusable container component that standardizes the appearance of all authentication forms.
 * It provides a consistent structure for a title, form content, and a footer for links.
 */
const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({ title, children, footer }) => {
  console.log('AuthFormWrapper loaded');

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <div className="w-full text-center text-sm text-muted-foreground">
          {footer}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthFormWrapper;