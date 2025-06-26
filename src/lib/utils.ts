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

export const formatDateTime = (dateTime: Date) => {
  const dateTimeString = dateTime.toLocaleString("en-US", {
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    year: "numeric", // numeric year (e.g., '2023')
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  });

  const dateOnly = dateTime.toLocaleString("en-US", {
    month: "short", // abbreviated month name (e.g., 'Oct')
    day: "numeric", // numeric day of the month (e.g., '25')
    year: "numeric", // numeric year (e.g., '2023')
  });

  const timeOnly = dateTime.toLocaleString("en-US", {
    hour: "numeric", // numeric hour (e.g., '8')
    minute: "numeric", // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  });

  return {
    dateTime: dateTimeString,
    dateOnly,
    timeOnly,
  };
};

export function getTransactionStatus(date: Date) {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return date > twoDaysAgo ? "Processing" : "Success";
}

export const removeSpecialCharacters = (str: string) => {
  return str.replace(/[^\w\s]/gi, "");
};

export function encryptId(id: string) {
  return btoa(id);
}

export function decryptId(id: string) {
  return atob(id);
}

export const countTransactionCategories = (
  transactions: Transaction[]
): CategoryCount[] => {
  const categoryCounts: { [category: string]: number } = {};
  let totalCount = 0;

  // Count occurrences of each category
  if (transactions) {
    transactions.forEach((transaction) => {
      const category = transaction.category;

      if (categoryCounts.hasOwnProperty(category)) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }

      totalCount++;
    });
  }

  // Convert the categoryCounts object to an array of objects
  const aggregatedCategories: CategoryCount[] = Object.keys(categoryCounts).map(
    (category) => ({
      name: category,
      count: categoryCounts[category],
      totalCount,
    })
  );

  // Sort categories by count in descending order
  aggregatedCategories.sort((a, b) => b.count - a.count);

  return aggregatedCategories;
};

// Types for the utility functions
interface Transaction {
  id: string;
  category: string;
}

interface CategoryCount {
  name: string;
  count: number;
  totalCount: number;
}
