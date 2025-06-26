"use client";

import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface BankInfoProps {
  account: {
    appwriteItemId: string;
    name: string;
    subtype: string;
    currentBalance: number;
    type: string;
  };
  appwriteItemId?: string;
  type: "card" | "full";
}

type AccountTypes = "depository" | "credit" | "loan" | "investment";

// Temporary implementation until constants file is provided
const getAccountTypeColors = (type: AccountTypes) => {
  const colorMap = {
    depository: {
      bg: "bg-blue-25",
      lightBg: "bg-blue-100",
      title: "text-blue-900",
      subText: "text-blue-700",
    },
    credit: {
      bg: "bg-success-25",
      lightBg: "bg-success-100",
      title: "text-success-900",
      subText: "text-success-700",
    },
    loan: {
      bg: "bg-pink-25",
      lightBg: "bg-pink-100",
      title: "text-pink-900",
      subText: "text-pink-700",
    },
    investment: {
      bg: "bg-yellow-25",
      lightBg: "bg-yellow-100",
      title: "text-yellow-900",
      subText: "text-yellow-700",
    },
  };
  
  return colorMap[type] || colorMap.depository;
};

// Temporary implementation until lib/utils is fully provided
const formatAmount = (amount: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// Temporary implementation until lib/utils is fully provided
const formUrlQuery = ({ params, key, value }: { params: string; key: string; value: string }) => {
  const searchParams = new URLSearchParams(params);
  searchParams.set(key, value);
  return `?${searchParams.toString()}`;
};

const BankInfo = ({ account, appwriteItemId, type }: BankInfoProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account?.appwriteItemId,
    });
    router.push(newUrl, { scroll: false });
  };

  const colors = getAccountTypeColors(account?.type as AccountTypes);

  return (
    <div
      onClick={handleBankChange}
      className={cn(`bank-info ${colors.bg}`, {
        "shadow-sm border-blue-700": type === "card" && isActive,
        "rounded-xl": type === "card",
        "hover:shadow-sm cursor-pointer": type === "card",
      })}
    >
      <figure
        className={cn("flex-center h-fit rounded-full bg-blue-100", colors.lightBg)}
      >
        <Image
          src="/icons/connect-bank.svg"
          width={20}
          height={20}
          alt={account.subtype}
          className="m-2 min-w-5"
        />
      </figure>
      <div className="flex w-full flex-1 flex-col justify-center gap-1">
        <div className="bank-info_content">
          <h2
            className={cn("text-16 line-clamp-1 flex-1 font-bold text-blue-900", colors.title)}
          >
            {account.name}
          </h2>
          {type === "full" && (
            <p
              className={cn("text-12 rounded-full px-3 py-1 font-medium text-blue-700", colors.subText, colors.lightBg)}
            >
              {account.subtype}
            </p>
          )}
        </div>

        <p className={cn("text-16 font-medium text-blue-700", colors.subText)}>
          {formatAmount(account.currentBalance)}
        </p>
      </div>
    </div>
  );
};

export default BankInfo;
