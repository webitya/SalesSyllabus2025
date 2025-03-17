import { Card } from "antd";
import { BookOutlined, TeamOutlined, CrownOutlined } from "@ant-design/icons";

const courses = [
  {
    title: "Client-Facing Team Program",
    icon: <BookOutlined className="text-4xl text-blue-800" />,
    description: "12 structured courses + 30+ business case studies",
  },
  {
    title: "Team Managers Program",
    icon: <TeamOutlined className="text-4xl text-gray-700" />,
    description: "15+ advanced courses + 30+ business case studies",
  },
  {
    title: "Leadership Program",
    icon: <CrownOutlined className="text-4xl text-yellow-600" />,
    description: "Executive-level training on strategy & business growth",
  },
];

export default function A2LeCourseOfferings() {
  return (
    <div className="py-10 bg-blue-50 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-bold text-blue-900 mb-6">Foundation Course Offering</h2>
      
      <p className="text-lg text-gray-600 my-5">
      Designed for marketing and sales professionals at all levels, this program provides real-world insights and best practices to enhance expertise and execution.
        </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="rounded-lg shadow-md border border-gray-300 bg-white hover:shadow-xl transition-all"
          >
            <div className="flex flex-col items-center text-center p-5">
              {course.icon}
              <h3 className="text-lg font-semibold text-gray-900 mt-3">{course.title}</h3>
              <p className="text-gray-700 mt-2">{course.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
