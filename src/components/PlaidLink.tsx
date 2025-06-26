import React, { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { PlaidLinkOnSuccess, PlaidLinkOptions, usePlaidLink } from 'react-plaid-link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface User {
  $id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface PlaidLinkProps {
  user: User;
  variant?: 'primary' | 'ghost' | 'default';
}

// Placeholder functions until the actual actions are provided
const createLinkToken = async (user: User) => {
  console.log('Creating link token for user:', user);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return {
    linkToken: 'link-sandbox-sample-token'
  };
};

const exchangePublicToken = async ({
  publicToken,
  user,
}: {
  publicToken: string;
  user: User;
}) => {
  console.log('Exchanging public token:', publicToken, 'for user:', user);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return { success: true };
};

const PlaidLink = ({ user, variant = 'primary' }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    const getLinkToken = async () => {
      const data = await createLinkToken(user);
      setToken(data?.linkToken);
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(async (public_token: string) => {
    await exchangePublicToken({
      publicToken: public_token,
      user,
    });

    router.push('/');
  }, [user, router]);
  
  const config: PlaidLinkOptions = {
    token,
    onSuccess
  };

  const { open, ready } = usePlaidLink(config);
  
  return (
    <>
      {variant === 'primary' ? (
        <Button
          onClick={() => open()}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === 'ghost' ? (
        <Button onClick={() => open()} variant="ghost" className="plaidlink-ghost">
          <Image 
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className='hidden text-[16px] font-semibold text-black-2 xl:block'>Connect bank</p>
        </Button>
      ) : (
        <Button onClick={() => open()} className="plaidlink-default">
          <Image 
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className='text-[16px] font-semibold text-black-2'>Connect bank</p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
