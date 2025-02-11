import React from "react";
import { BookOutlined } from "@ant-design/icons";
import { Card } from "antd";

const A2CBAbout = () => {
  return (
    <div className="py-20">
      <Card className="shadow-sm border-none bg-white rounded-sm  transition-shadow">
        {/* Icon and Title */}
        {/* <div className="flex items-center mb-6 justify-center">
          <BookOutlined className="text-4xl text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900 text-center">Content Marketing</h2>
        </div> */}

        {/* Content */}
        <h1 className="text-center text-3xl pb-5">What is Community Building ?</h1>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          {" "}
          <span className="font-semibold"></span> Community building is the strategic process of engaging with prospects and customers by providing value, fostering discussions, and building relationships around shared interests, with the goal of nurturing trust, credibility, and long- term business growth.
        </p>
      </Card>
    </div>
  );
};

export default A2CBAbout;
