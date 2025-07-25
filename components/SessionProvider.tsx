"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react"

type props = {
    children: React.ReactNode,
    session: Session | null
}

const SessionProvider = ({ children, session }: props) => {
    return (
        <Provider session={session}>{children}</Provider>
    );
}

export default SessionProvider;