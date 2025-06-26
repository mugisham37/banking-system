import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authFormSchema = (type: string) => {
  return z.object({
    // Common fields
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    
    // Sign-up specific fields
    ...(type === 'sign-up' && {
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      address1: z.string().min(1, "Address is required"),
      city: z.string().min(1, "City is required"),
      state: z.string().min(2, "State is required"),
      postalCode: z.string().min(5, "Postal code is required"),
      dateOfBirth: z.string().min(1, "Date of birth is required"),
      ssn: z.string().min(4, "SSN is required"),
    }),
  });
};

export const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const formUrlQuery = ({ params, key, value }: { params: string; key: string; value: string }) => {
  const searchParams = new URLSearchParams(params);
  searchParams.set(key, value);
  return `?${searchParams.toString()}`;
};
