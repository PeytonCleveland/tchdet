import { useState } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import Link from "next/link";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const supabase = useSupabaseClient();
  const user = useUser();
  const router = useRouter();

  const redirectQuery = router.query.redirectedFrom as string;

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: redirectQuery
          ? `http://localhost:3000${redirectQuery}`
          : "http://localhost:3000/app",
      },
    });

    if (data) {
      setSubmitted(true);
    }
  }

  if (user) {
    router.push("/app");
  }

  return (
    <>
      <header className="w-screen h-[70px] bg-[#0a0c0e] flex items-center fixed border-b border-[#b4edff] drop-shadow-[0_0_8px_rgba(10,200,255,0.25)] px-8">
        <h1 className="text-[#f2f2f2] font-semibold text-2xl font-primary">
          tchdet
        </h1>
      </header>
      <main className="w-screen h-screen flex flex-col gap-12 justify-center items-center bg-gradient-to-br from-[#141518] to-[#0b0c0e]">
        <form className="w-[520px] bg-[#17191b] border border-[#b4edff] drop-shadow-[0_0_8px_rgba(10,200,255,0.25)] rounded-[8px] flex flex-col p-6 gap-4">
          {submitted ? (
            <>
              <h1 className="text-[#f2f2f2] font-semibold text-2xl font-primary">
                Check your email
              </h1>
              <p className="text-[#cbcbcb] font-light font-primary">
                {`We sent a magic link to ${email}. Click on the link to sign in.`}
              </p>
            </>
          ) : (
            <>
              <h1 className="text-[#f2f2f2] font-semibold text-2xl font-primary">
                Welcome back!
              </h1>
              <div className="flex flex-col gap-2.5">
                <label className="text-[#7ccbff] font-light font-primary">
                  Enter your email
                </label>
                <span className="relative flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute left-0 top-1 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>

                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent focus:outline-none text-[#f2f2f2] placeholder:text-[#6f747a] font-primary pl-9"
                    placeholder="Email@domain.com"
                  />
                  <button
                    type="button"
                    className="bg-[#7ccbff] rounded-[4px] font-semibold font-primary px-4 py-1 whitespace-nowrap"
                    onClick={signInWithEmail}
                  >
                    Sign in
                  </button>
                </span>
              </div>
            </>
          )}
        </form>
        <h6 className="text-[#848484]">
          Or{" "}
          <Link href="/sign-up" className="text-[#7ccbff]">
            click here&nbsp;
          </Link>
          to create your free account
        </h6>
      </main>
    </>
  );
};

export default SignIn;
