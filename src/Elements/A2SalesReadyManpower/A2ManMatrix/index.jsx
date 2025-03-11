import { ProfileOutlined } from "@ant-design/icons";

export default function A2ManRecruitmentMatrix() {
  return (
    <div className="py-12 bg-background px-4 md:px-12 text-center">
      <div className="flex justify-center mb-4">
        <ProfileOutlined className="text-5xl text-primary" />
      </div>
      <h2 className="text-3xl font-bold text-primary mb-4">Recruitment Matrix - Sponsored Training cum Recruitment Program</h2>
      <p className="text-lg text-secondary max-w-3xl mx-auto mb-6">
        We have developed a unique Sponsored Training cum Recruitment Program,
        where we train candidates before recruitment to ensure they have the necessary
        competencies to perform effectively.
      </p>
      <p className="text-lg text-secondary max-w-3xl mx-auto">
        The curriculum and learning modules are designed by the Sales Syllabus team
        and are an intellectual property of our brand. This program is structured around
        proven market insights and real-world business scenarios, making our
        candidates industry-ready from day one.
      </p>
    </div>
  );
}