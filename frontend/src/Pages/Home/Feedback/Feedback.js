import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { feedbackData } from "../../../constants/feedbackData";

const Feedback = () => {
  return (
    <div className="my-20 mx-2">
      <h3 className="text-xl lg:text-3xl my-5 text-center">
        Customers Feedback
      </h3>
      <div className="lg:flex lg:px-10 rounded-lg gap-10 mb-10">
        {feedbackData.map((feedback, index) => (
          <div
            key={index}
            className="card bg-[#F2f2f2] shadow-xl p-5 m-4 rounded-md"
          >
            <p>{feedback.text}</p>
            <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:justify-between">
              <div className="flex items-center gap-4">
                <FaRegUserCircle className="w-12 h-12 rounded-full" />
                <p>{feedback.name}</p>
              </div>
              <div className="rating">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <input
                      key={i}
                      type="radio"
                      name={`rating-${index}`}
                      className={`mask mask-star-2 bg-orange-400 ${
                        i < feedback.rating ? "checked" : ""
                      }`}
                      checked={i < feedback.rating}
                      readOnly
                    />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
