import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BankCard from './BankCard';
import { countTransactionCategories } from '@/lib/utils';
import Category from './Category';

interface User {
  $id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Transaction {
  id: string;
  category: string;
}

interface Bank {
  $id: string;
  name: string;
  currentBalance: number;
  mask?: string;
  shareableId?: string;
}

interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[];
}

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  const categories = countTransactionCategories(transactions);

  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">{user.firstName[0]}</span>
          </div>

          <div className="profile-details">
            <h1 className='profile-name'>
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">
              {user.email}
            </p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Image 
               src="/icons/plus.svg"
              width={20}
              height={20}
              alt="plus"
            />
            <h2 className="text-14 font-semibold text-gray-600">
              Add Bank
            </h2>
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-5">
            <div className='relative z-10'>
              <BankCard 
                key={banks[0].$id}
                account={{
                  appwriteItemId: banks[0].$id,
                  name: banks[0].name,
                  currentBalance: banks[0].currentBalance,
                  mask: banks[0].mask,
                  sharaebleId: banks[0].shareableId
                }}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard 
                  key={banks[1].$id}
                  account={{
                    appwriteItemId: banks[1].$id,
                    name: banks[1].name,
                    currentBalance: banks[1].currentBalance,
                    mask: banks[1].mask,
                    sharaebleId: banks[1].shareableId
                  }}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}

        <div className="mt-10 flex flex-1 flex-col gap-6">
          <h2 className="header-2">Top categories</h2>

          <div className='space-y-5'>
            {categories.map((category) => (
              <Category key={category.name} category={category} />
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
};

export default RightSidebar;
