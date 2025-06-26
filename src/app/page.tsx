"use client"
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import React from "react";

const Page =  () => {
  const trpc = useTRPC()
  const invoke = useMutation(trpc.invoke.mutationOptions({}))
  
  return(
    <div>
    <h1>TRPC INNGEST DEMO</h1>
    <Button onClick={()=>invoke.mutate({text: "ABCABC"})}>
      Invoke Backgroud Job
    </Button>
    </div>
  );
};

export default Page;
