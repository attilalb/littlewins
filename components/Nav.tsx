"use client";

import Link from "next/link";
import Image from "next/image";
import { Session } from "next-auth";
import { GiClover } from "react-icons/gi";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav: React.FC = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setupProviders();
  }, []);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <GiClover width={30} height={30} className="text-green-500" />
        <p className="logo_text">littlewins.</p>
      </Link>

      {/* Desktop navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="green_btn">
              Share a Win
            </Link>
            <button
              type="button"
              onClick={handleSignOut}
              className="outline_btn"
            >
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={session?.user?.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map(
                (provider: { id: string; name: string }) => {
                  return (
                    <button
                      key={provider.name}
                      type="button"
                      onClick={() => signIn(provider.id)}
                      className="black_btn"
                    >
                      Sign In
                    </button>
                  );
                }
              )}
          </>
        )}
      </div>

      {/* Mobile Navigaton */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user?.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Share Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map(
                (provider: { id: string; name: string }) => {
                  return (
                    <button
                      key={provider.name}
                      type="button"
                      onClick={() => signIn(provider.id)}
                      className="black_btn"
                    >
                      Sign In
                    </button>
                  );
                }
              )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
