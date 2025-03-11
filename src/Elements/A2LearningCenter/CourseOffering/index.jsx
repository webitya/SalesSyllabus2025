import { Card } from "antd";
import { BookOutlined, TeamOutlined, CrownOutlined } from "@ant-design/icons";

const courses = [
  {
    title: "Client-Facing Team Program",
    icon: <BookOutlined className="text-4xl text-primary" />,
    description: "12 online courses + 30+ business case studies",
  },
  {
    title: "Team Managers Program",
    icon: <TeamOutlined className="text-4xl text-secondary" />,
    description: "15+ online courses + 30+ business case studies",
  },
  {
    title: "Leadership Program",
    icon: <CrownOutlined className="text-4xl text-accent" />,
    description: "Multiple courses covering various aspects of entrepreneurship",
  },
];

export default function A2LeCourseOfferings() {
  return (
    <div className="py-12 bg-background px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-primary">
        Course Offerings
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="rounded-lg shadow-sm border border-border bg-white hover:shadow-md transition-all"
          >
            <div className="flex flex-col items-center text-center p-4">
              {course.icon}
              <h3 className="text-lg font-medium text-secondary mt-4">
                {course.title}
              </h3>
              <p className="text-muted mt-2">{course.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}