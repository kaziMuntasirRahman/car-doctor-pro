'use client'

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

const icons = [
  {
    img: "/assets/images/login/google.png",
    provider: 'google'
  },
  {
    img: "/assets/images/login/facebook.png",
    provider: 'facebook'
  },
  {
    img: "/assets/images/login/linkedin.png",
    provider: 'linkedin'
  }
]

const SocialSignIn = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const session = useSession()
  const path = searchParams.get('redirect')

  const handleSocialSignIn = async (provider) => {
    console.log(provider);
    try {
      const response = await signIn(provider, { redirect: true, callbackUrl: path ? path: '/' })
      console.log(response);
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex gap-4 mb-5">
      {
        icons.map(({ img, provider }) =>
          <button
            className={`bg-[#F5F5F8] size-[55px] flex items-center justify-center rounded-full cursor-pointer ${provider === 'google' ? "" : 'tooltip'} tooltip-top`}
            data-tip="Not Set yet"
            key={provider}
            onClick={() => handleSocialSignIn(provider)}
          >
            <Image src={img} height={20} width={20} alt={provider} />
          </button>
        )}
    </div>
  );
};

export default SocialSignIn;