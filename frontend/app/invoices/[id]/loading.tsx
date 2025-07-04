import React from "react";
import { PencilIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import MainLayout from "@/components/layouts/Main";

export default function InvoiceDetailLoadingPage() {
  return (
    <MainLayout
      title={<Skeleton className="h-8 w-40" />}
      headerActions={
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Button variant="outline" disabled>
            <XMarkIcon className="size-4" />
            Reject
          </Button>
          <Button disabled>
            <Skeleton className="h-4 w-16" />
          </Button>
          <Button variant="outline" disabled>
            <PencilIcon className="h-4 w-4" />
            Edit invoice
          </Button>
        </div>
      }
    >
      <div className="flex flex-col gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </CardContent>
        </Card>
      </div>
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Skeleton className="mt-0.5 h-5 w-5 flex-shrink-0 rounded-full" />
            <div className="flex-1 space-y-1">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          </div>
        </CardContent>
      </Card>

      <section>
        <form>
          <div className="grid gap-4">
            <div className="grid auto-cols-fr gap-3 md:grid-flow-col print:grid-flow-col">
              <div className="space-y-1">
                <Skeleton className="h-4 w-8" />
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-6" />
                <Skeleton className="h-5 w-36" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div className="space-y-1">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-4" />
              </div>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>
                    <Skeleton className="h-4 w-16" />
                  </TableHead>
                  <TableHead className="text-right">
                    <Skeleton className="h-4 w-20" />
                  </TableHead>
                  <TableHead className="text-right">
                    <Skeleton className="h-4 w-16" />
                  </TableHead>
                  <TableHead className="text-right">
                    <Skeleton className="h-4 w-20" />
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 2 }, (_, i) => (
                  <TableRow key={i}>
                    <TableCell>
                      <Skeleton className="h-4 w-40" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="ml-auto h-4 w-12" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="ml-auto h-4 w-16" />
                    </TableCell>
                    <TableCell className="text-right">
                      <Skeleton className="ml-auto h-4 w-16" />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Card>
              <CardContent>
                <div className="mb-3 flex justify-between gap-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Separator />
                <div className="mt-3 flex justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-48" />
                  </div>
                  <Skeleton className="h-4 w-16" />
                </div>
                <Separator className="my-3" />
                <div className="flex justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                  <Skeleton className="h-4 w-16" />
                </div>
              </CardContent>
            </Card>
            <footer className="flex justify-between">
              <div className="space-y-2">
                <Skeleton className="h-5 w-12" />
                <div className="space-y-1">
                  <Skeleton className="h-3 w-64" />
                  <Skeleton className="h-3 w-48" />
                </div>
              </div>
              <Card>
                <CardContent>
                  <div className="flex justify-between gap-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between gap-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between gap-2">
                    <Skeleton className="h-4 w-10" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </CardContent>
              </Card>
            </footer>
          </div>
        </form>
      </section>
    </MainLayout>
  );
}
