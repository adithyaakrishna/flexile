import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import MainLayout from "@/components/layouts/Main";

export default function InvoiceEditLoadingPage() {
  return (
    <MainLayout
      title={<Skeleton className="h-8 w-32" />}
      headerActions={
        <>
          <Button variant="outline" asChild>
            <Link href="/invoices">Cancel</Link>
          </Button>
          <Button variant="primary" disabled>
            <PaperAirplaneIcon className="size-4" />
            <Skeleton className="ml-2 h-4 w-20" />
          </Button>
        </>
      }
    >
      <section className="mb-6">
        <Card>
          <CardContent>
            <div className="grid gap-2">
              <Label>
                <Skeleton className="h-4 w-56" />
              </Label>
              <Skeleton className="h-6 w-full" />
            </div>
            <div className="mt-4 space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <div className="grid gap-4">
          <div className="grid auto-cols-fr gap-3 md:grid-flow-col">
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
            <div className="flex flex-col gap-2">
              <Label>
                <Skeleton className="h-4 w-20" />
              </Label>
              <Skeleton className="h-10 w-full" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>
                <Skeleton className="h-4 w-24" />
              </Label>
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50%]">Line item</TableHead>
                <TableHead>Hours / Qty</TableHead>
                <TableHead>Rate</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 2 }, (_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-10 w-full" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-10 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-10 w-20" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-16" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-4" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5}>
                  <div className="flex gap-3">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-28" />
                  </div>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Expense</TableHead>
                <TableHead>Merchant</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-4" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </TableCell>
                <TableCell>
                  <Skeleton className="h-10 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-10 w-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-10 w-20" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-4" />
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5}>
                  <Skeleton className="h-6 w-28" />
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <footer className="flex flex-col gap-3 lg:flex-row lg:justify-between">
            <div className="w-full lg:w-96">
              <Skeleton className="h-24 w-full" />
            </div>
            <div className="flex flex-col gap-2 md:self-start lg:items-end">
              <div className="flex flex-col items-end gap-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-6 w-20" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-6 w-20" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-6 w-20" />
              </div>
              <Separator className="ml-auto w-24" />
              <div className="flex flex-col items-end gap-1">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          </footer>
        </div>
      </section>
    </MainLayout>
  );
}
