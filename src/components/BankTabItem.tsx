"use client";

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

interface Account {
  appwriteItemId: string;
  name: string;
}

interface BankTabItemProps {
  account: Account;
  appwriteItemId?: string;
}

export const BankTabItem = ({ account, appwriteItemId }: BankTabItemProps) => {
  const router = useRouter();
  const isActive = appwriteItemId === account?.appwriteItemId;

  const handleBankChange = () => {
    // Note: formUrlQuery function will be available when lib/utils is fully implemented
    const newUrl = `?id=${account?.appwriteItemId}`;
    router.push(newUrl, { scroll: false });
  };

  return (
    <div
      onClick={handleBankChange}
      className={cn(`banktab-item`, {
        " border-blue-600": isActive,
      })}
    >
      <p
        className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
          " text-blue-600": isActive,
        })}
      >
        {account.name}
      </p>
    </div>
  );
};
