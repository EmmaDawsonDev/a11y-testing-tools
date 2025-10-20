import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const StatsChart = () => {
  const lineData = [
    { month: "Jan", tests: 2400, issues: 1800, fixed: 1600 },
    { month: "Feb", tests: 3200, issues: 2100, fixed: 1900 },
    { month: "Mar", tests: 4100, issues: 2400, fixed: 2200 },
    { month: "Apr", tests: 3800, issues: 2200, fixed: 2100 },
    { month: "May", tests: 5200, issues: 2800, fixed: 2600 },
    { month: "Jun", tests: 6100, issues: 3200, fixed: 3100 },
  ];

  const barData = [
    { category: "Color", score: 95 },
    { category: "Keyboard", score: 88 },
    { category: "ARIA", score: 92 },
    { category: "Semantics", score: 85 },
    { category: "Forms", score: 90 },
  ];

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Real Impact, Real Results
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            See how our tools help teams improve accessibility across millions
            of web pages
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Testing Activity Trends</CardTitle>
              <CardDescription>
                Monthly overview of tests run and issues resolved
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={lineData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="tests"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    name="Tests Run"
                  />
                  <Line
                    type="monotone"
                    dataKey="issues"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    name="Issues Found"
                  />
                  <Line
                    type="monotone"
                    dataKey="fixed"
                    stroke="hsl(262 90% 70%)"
                    strokeWidth={2}
                    name="Issues Fixed"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Scores by Category</CardTitle>
              <CardDescription>
                Average compliance scores across different test categories
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={barData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis dataKey="category" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="score"
                    fill="hsl(var(--accent))"
                    radius={[8, 8, 0, 0]}
                    name="Compliance Score"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
