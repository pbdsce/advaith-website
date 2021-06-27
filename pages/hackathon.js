import { useRouter } from "next/router";
import { useEffect } from "react";
const hackathon = () => {
  const router = useRouter();
  useEffect(
    () => router.replace("https://www.notion.so/Advaith-2021-Guide-c2cb5de3ca5444ff8f7b338000d28c81", "hackathon", { scroll: true }),
    []
  );
  return <div>Redirecting...</div>;
};

export default hackathon;
