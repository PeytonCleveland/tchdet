import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/sign-in");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Sign out</button>
    </div>
  );
};

export default Dashboard;
