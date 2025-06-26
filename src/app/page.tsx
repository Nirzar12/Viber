import { Suspense } from "react";
import { dehydrate,HydrationBoundary } from "@tanstack/react-query";
import { getQueryClient,trpc } from "@/trpc/server";
import {Client} from "./client"
import React from "react";

const Page = async () => {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(trpc.hello.queryOptions({text:"shyam prefetch"}))

  return(<HydrationBoundary state={dehydrate(queryClient)}>
    <Suspense fallback={<p>Loading...</p>}>
      <Client/>
    </Suspense>
  </HydrationBoundary>);
};

export default Page;
