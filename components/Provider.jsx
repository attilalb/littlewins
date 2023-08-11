"use client";

import { SessionProvider } from "next-auth/react";

// interface ProviderProps {
//   children: React.ReactNode;
//   session: Session;
// }

const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
