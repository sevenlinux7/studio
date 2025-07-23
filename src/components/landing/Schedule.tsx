import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const schedule = [
  { module: "Week 1-2", topic: "Introduction to Forex & Stock Markets", date: "Starts on Enrollment" },
  { module: "Week 3-4", topic: "Advanced Technical Analysis & Charting", date: "Continuous" },
  { module: "Week 5-6", topic: "Fundamental Analysis & Economic Indicators", date: "Continuous" },
  { module: "Week 7-8", topic: "Risk Management & Trading Psychology", date: "Continuous" },
  { module: "Week 9-10", topic: "Developing a Trading Plan", date: "Continuous" },
  { module: "Week 11-12", topic: "Live Trading & Strategy Refinement", date: "Live Sessions Weekly" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-12 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Course Schedule</h2>
          <p className="text-muted-foreground">A structured curriculum to build your skills from the ground up.</p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Curriculum Overview</CardTitle>
            <CardDescription>Our course is designed to be self-paced with live weekly sessions.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Module</TableHead>
                    <TableHead>Topic</TableHead>
                    <TableHead className="text-right w-[200px]">Availability</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {schedule.map((item) => (
                    <TableRow key={item.module}>
                      <TableCell className="font-medium">{item.module}</TableCell>
                      <TableCell>{item.topic}</TableCell>
                      <TableCell className="text-right">{item.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
