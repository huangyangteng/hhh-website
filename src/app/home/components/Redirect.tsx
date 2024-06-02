"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

const getHash = () =>
  typeof window !== "undefined"
    ? decodeURIComponent(window.location.hash.replace("#", ""))
    : undefined;

const useHash = () => {
  const [hash, setHash] = useState(getHash());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleHashChange = () => {
      setHash(getHash());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return isClient ? hash : null;
};

export default function Redirect() {
  const router = useRouter();
  const hash = useHash();
  // 针对之前hash的路由做一个兼容，匹配到之后，就跳转到新的页面
  useEffect(() => {
    if (!hash) return;
    if (hash.includes("read") || hash.includes("workbench")) {
      router.push("/g" + hash);
    }
  }, [hash]);
  return <></>;
}
