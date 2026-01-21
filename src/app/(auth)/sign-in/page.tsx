'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Spinner } from '@/components/ui/spinner';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { toast } from 'sonner';
import googleIcon from './google-icon.svg';

const footerPages = [
  { labelName: 'წესები და პირობები', url: '/' },
  { labelName: 'კონფიდენციალურობის პოლიტიკა', url: '/' },
  { labelName: 'ჩვენ შესახებ', url: '/' },
  { labelName: 'კონტაქტი', url: '/' },
];

const Page = () => {
  const { isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const handleSignIn = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
      });
    } catch (error) {
      if (error instanceof Error) {
        toast('დაფიქსირდა შეცდომა');
      }
    }
  };

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-gradient-to-b from-[#f9fafb] to-[#ffffff] font-sans">
      {/* Main login section */}
      <div className="flex h-4/5 w-full items-center justify-center">
        <Card className="w-full max-w-sm rounded-xl shadow-md transition-shadow duration-300">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-semibold text-gray-800">
              მოგესალმებით
            </CardTitle>
            <CardDescription className="text-gray-500">
              გთხოვთ გაიაროთ ავტორიზაცია
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button
              onClick={handleSignIn}
              className="flex w-full cursor-pointer items-center justify-center gap-2 border border-gray-300 transition-colors hover:bg-gray-50"
              variant="outline"
            >
              <Image src={googleIcon} alt="googleIcon" height={20} width={20} />
              Continue with Google
            </Button>
          </CardContent>
        </Card>
      </div>

      <Separator className="border-gray-200" />

      {/* Footer section */}
      <div className="flex h-1/5 w-full flex-col items-center justify-center gap-1.5 bg-[#fdfdfd] text-gray-600">
        <h4 className="text-md">გაეცანი სპორტულ სიახლეებს და ისტორიებს</h4>
        <h2 className="text-3xl font-extrabold tracking-widest text-gray-800">
          BLITZ
        </h2>
        <p className="text-xs">© 2026</p>
        <ul className="mt-2 flex gap-4">
          {footerPages.map((item) => (
            <Link
              className="text-xs transition-colors hover:text-gray-800 hover:underline"
              key={item.labelName}
              href={item.url}
            >
              {item.labelName}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Page;
