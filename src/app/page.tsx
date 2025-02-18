"use client";
import Calendar from "@/components/Cards/Calendar";
import { DataTableDemo } from "@/components/Cards/DataTable";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import TableComponent from "@/components/Cards/Table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-8">
      <div className="grid grid-cols-2 gap-8">
        <General />
        <div className="grid gap-8">
          <Calendar />
          <Calendar />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8 h-[300px] overflow-hidden">
        <Lines />
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Table</CardTitle>
            <CardDescription>These are the stats of this year.</CardDescription>
          </CardHeader>
          <CardContent className="">
            <TableComponent />
          </CardContent>
        </Card>
        <Card className="overflow-y-scroll">
          <CardHeader>
            <CardTitle>Users</CardTitle>
            <CardDescription>These are the users of this month.</CardDescription>
          </CardHeader>
          <CardContent className="">
            <DataTableDemo />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
