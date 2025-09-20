"use client";

import type React from "react";

import { Analytics } from "@vercel/analytics/next";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import LoadingSpinner from "@/components/loading-spinner";

function SearchParamsHandler() {
  const searchParams = useSearchParams();
  return null;
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <LoadingSpinner />
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsHandler />
        {children}
      </Suspense>
      <Analytics />
    </>
  );
}
