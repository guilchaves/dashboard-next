"use client";
import { ResponsiveTimeRange } from "@nivo/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { data } from "../../lib/data_calendar";
const MyResponsiveTimeRange = ({ data }: any) => {
  return (
    <ResponsiveTimeRange
      data={data}
      from="2018-01-01"
      to="2018-12-31"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
      dayBorderWidth={2}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          justify: false,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
          translateX: -60,
          translateY: -60,
          symbolSize: 20,
        },
      ]}
    />
  );
};

export default function Calendar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar</CardTitle>
        <CardDescription>Calendar description</CardDescription>
      </CardHeader>
      <CardContent className="h-[100px] flex items-center w-full">
        <MyResponsiveTimeRange data={data} />
      </CardContent>
    </Card>
  );
}
