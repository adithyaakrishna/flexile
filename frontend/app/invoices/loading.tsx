import React from "react";
import { Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import MainLayout from "@/components/layouts/Main";

export default function InvoicesLoadingPage() {
  return (
    <MainLayout
      title="Invoices"
      headerActions={
        <Button variant="outline" size="small" disabled>
          <Plus className="size-4" />
          New invoice
        </Button>
      }
    >
      <div className="grid gap-4">
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 items-start gap-x-8 gap-y-6 lg:grid-cols-[1fr_auto_1fr]">
              <div className="grid gap-6">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-72" />
                  <Skeleton className="h-6 w-full" />
                </div>
              </div>
              <Separator orientation="horizontal" className="block w-full lg:hidden" />
              <Separator orientation="vertical" className="hidden lg:block" />
              <div className="grid gap-2">
                <div className="mt-2 mb-2 pt-2 text-right lg:mt-16 lg:mb-3 lg:pt-0">
                  <Skeleton className="mb-2 ml-auto h-4 w-20" />
                  <Skeleton className="mb-1 ml-auto h-10 w-32" />
                  <Skeleton className="ml-auto h-4 w-40" />
                </div>
                <div className="flex flex-wrap items-center justify-end gap-3">
                  <Skeleton className="h-10 w-32" />
                  <Skeleton className="h-10 w-36" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="flex justify-between md:hidden">
          <Skeleton className="h-7 w-24" />
          <Skeleton className="h-5 w-20" />
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="hidden items-center justify-between border-b p-4 md:flex">
              <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-9 w-64" />
              </div>
              <Skeleton className="h-9 w-32" />
            </div>
            <div className="hidden grid-cols-5 gap-4 border-b bg-gray-50 p-4 md:grid">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-12" />
              <Skeleton className="h-4 w-16" />
            </div>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="grid grid-cols-1 gap-4 border-b p-4 last:border-b-0 md:grid-cols-5">
                <div className="flex items-center gap-3 md:contents">
                  <Skeleton className="h-4 w-4 md:hidden" />
                  <div className="space-y-1">
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
                <div className="space-y-1 md:contents">
                  <Skeleton className="h-4 w-20" />
                </div>
                <div className="space-y-1 md:contents">
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="space-y-1 md:contents">
                  <Skeleton className="h-6 w-24 rounded-full" />
                </div>
                <div className="space-y-1 md:contents">
                  <Skeleton className="h-4 w-4" />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="flex items-center justify-between">
          <Skeleton className="h-4 w-32" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
