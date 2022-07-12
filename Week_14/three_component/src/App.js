import React from "react";

const courses = [
  {
    title: "Title - AAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    author: "AAAAAAAAAA AAAAAAAAAAAAA",
    hours_video: 40.5,
    number_of_lectures: 490,
    rating: 4.6,
    url: "https://testA/",
  },
  {
    title: "Title - BBBBBBBBB BBBBBBBBBB",
    author: "BBBBBB BBBBBBB",
    hours_video: 47.5,
    number_of_lectures: 488,
    rating: 4.6,
    url: "https://testB/",
  },
  {
    title: "Title - CCCCCC CCCCCCCC",
    author: "CCCCCC CCCCCCCCC",
    hours_video: 39,
    number_of_lectures: 200,
    rating: 4.7,
    url: "https://testC/",
  },
];

function App() {
  return (
    <div>
      <h1>List of Courses</h1>
      <hr />
      {courses.map(function (course) {
        return <div>{course.title}</div>;
      })}
    </div>
  );
}
export default App;
