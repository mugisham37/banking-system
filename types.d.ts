/* eslint-disable no-unused-vars */

import { UseFormSetValue } from "react-hook-form";

declare global {
  type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };

  type SignUpParams = {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    email: string;
    password: string;
  };

  type LoginUser = {
    email: string;
    password: string;
  };

  type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
  };

  type NewUserParams = {
    userId: string;
    email: string;
    name: string;
    password: string;
  };

  type Account = {
    id: string;
    availableBalance: number;
    currentBalance: number;
    officialName: string;
    mask: string;
    institutionId: string;
    name: string;
    type: string;
    subtype: string;
    appwriteItemId: string;
    shareableId: string;
  };

  type Transaction = {
    id: string;
    $id: string;
    name: string;
    paymentChannel: string;
    type: string;
    accountId: string;
    amount: number;
    pending: boolean;
    category: string;
    date: string;
    image: string;
    $createdAt: string;
    channel: string;
    senderBankId: string;
    receiverBankId: string;
  };

  type Bank = {
    $id: string;
    accountId: string;
    bankId: string;
    accessToken: string;
    fundingSourceUrl: string;
    userId: string;
    shareableId: string;
  };

  type AccountTypes =
    | "depository"
    | "credit"
    | "loan "
    | "investment"
    | "other";

  type Category = "Food and Drink" | "Travel" | "Transfer";

  type CategoryCount = {
    name: string;
    count: number;
    totalCount: number;
  };

  type Receiver = {
    firstName: string;
    lastName: string;
  };

  type TransferParams = {
    sourceFundingSourceUrl: string;
    destinationFundingSourceUrl: string;
    amount: string;
  };

  type AddFundingSourceParams = {
    dwollaCustomerId: string;
    processorToken: string;
    bankName: string;
  };

  type NewDwollaCustomerParams = {
    firstName: string;
    lastName: string;
    email: string;
    type: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
  };

  interface CreditCardProps {
    account: Account;
    userName: string;
    showBalance?: boolean;
  }

  interface BankInfoProps {
    account: Account;
    appwriteItemId?: string;
    type: "full" | "card";
  }

  interface HeaderBoxProps {
    type?: "title" | "greeting";
    title: string;
    subtext: string;
    user?: string;
  }

  interface MobileNavProps {
    user: User;
  }

  interface PageHeaderProps {
    topTitle: string;
    bottomTitle: string;
    topDescription: string;
    bottomDescription: string;
    connectBank?: boolean;
  }

  interface PaginationProps {
    page: number;
    totalPages: number;
  }

  interface PlaidLinkProps {
    user: User;
    variant?: "primary" | "ghost";
    dwollaCustomerId?: string;
  }

  interface AuthFormProps {
    type: "sign-in" | "sign-up";
  }

  interface BankDropdownProps {
    accounts: Account[];
    setValue?: UseFormSetValue<any>;
    otherStyles?: string;
  }

  interface BankTabItemProps {
    account: Account;
    appwriteItemId?: string;
  }

  interface TotalBalanceBoxProps {
    accounts: Account[];
    totalBanks: number;
    totalCurrentBalance: number;
  }

  interface FooterProps {
    user: User;
    type?: 'mobile' | 'desktop'
  }

  interface RightSidebarProps {
    user: User;
    transactions: Transaction[];
    banks: Bank[] & Account[];
  }

  interface SiderbarProps {
    user: User;
  }

  interface RecentTransactionsProps {
    accounts: Account[];
    transactions: Transaction[];
    appwriteItemId: string;
    page: number;
  }

  interface TransactionHistoryTableProps {
    transactions: Transaction[];
    page: number;
  }

  interface CategoryBadgeProps {
    category: string;
  }

  interface TransactionTableProps {
    transactions: Transaction[];
  }

  interface CategoryProps {
    category: CategoryCount;
  }

  interface DoughnutChartProps {
    accounts: Account[];
  }

  interface PaymentTransferFormProps {
    accounts: Account[];
  }

  // Actions
  interface getAccountsProps {
    userId: string;
  }

  interface getAccountProps {
    appwriteItemId: string;
  }

  interface getInstitutionProps {
    institutionId: string;
  }

  interface getTransactionsProps {
    accessToken: string;
  }

  interface CreateFundingSourceOptions {
    customerId: string; // Dwolla Customer ID
    fundingSourceName: string; // Dwolla Funding Source Name
    plaidToken: string; // Plaid Account Processor Token
    _links: object; // Dwolla On Demand Authorization Link
  }

  interface CreateTransactionProps {
    name: string;
    amount: string;
    senderId: string;
    senderBankId: string;
    receiverId: string;
    receiverBankId: string;
    email: string;
  }

  interface getTransactionsByBankIdProps {
    bankId: string;
  }

  interface signInProps {
    email: string;
    password: string;
  }

  interface getUserInfoProps {
    userId: string;
  }

  interface exchangePublicTokenProps {
    publicToken: string;
    user: User;
  }

  interface createBankAccountProps {
    accessToken: string;
    userId: string;
    accountId: string;
    bankId: string;
    fundingSourceUrl: string;
    shareableId: string;
  }

  interface getBanksProps {
    userId: string;
  }

  interface getBankProps {
    documentId: string;
  }

  interface getBankByAccountIdProps {
    accountId: string;
  }
}

export {};
