'use client';

import { useState, useEffect, createContext, useContext } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { ClerkProvider } from '@clerk/nextjs';

const SupabaseContext = createContext();
export const useSupabase = () => useContext(SupabaseContext);

export function Providers({ children }) {
    const [supabase] = useState(() =>
        createBrowserClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        )
    );

    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => {
            listener?.subscription.unsubscribe();
        };
    }, [supabase]);

    return (
        <ClerkProvider
            signInUrl="/sign-in"
            signUpUrl="/sign-up"
            afterSignInUrl="/"
            afterSignUpUrl="/"
        >
            <SupabaseContext.Provider value={{ supabase, session }}>
                {children}
            </SupabaseContext.Provider>
        </ClerkProvider>
    );
}
