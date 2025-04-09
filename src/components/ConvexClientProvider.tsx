"use client";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth,SignIn } from "@clerk/nextjs";
import {  ConvexReactClient,Authenticated,Unauthenticated,AuthLoading } from "convex/react";
import { FullScreenLoader } from "./full-screen";
import Image from "next/image";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
   <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!} appearance={{
    layout : {
      unsafe_disableDevelopmentModeWarnings : true,
    }
   }}>
     <ConvexProviderWithClerk
      useAuth={useAuth}
       client={convex}
       >
        <Authenticated>
        {children}
        </Authenticated>
        <Unauthenticated>
         <div className="flex flex-col items-center justify-center min-h-screen gap-y-5">
         <div className="flex gap-3 flex-col items-center shrink-0 pr-6">
         <Image src={'/logo.svg'} alt="Logo" width={70} height={50} />
                <h3 className="text-xl">Fdev Docs</h3>
            </div>
         <SignIn routing="hash"/>
         </div>
        </Unauthenticated>

        <AuthLoading>
          <FullScreenLoader label="Auth Loading..."/>
        </AuthLoading>
   
        </ConvexProviderWithClerk>
   </ClerkProvider>
  );
}