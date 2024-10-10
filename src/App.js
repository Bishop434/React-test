import { useState } from "react";

const courses = [
  {
    id: 1,
    name: "HTML, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
];
function App() {
  const [checked, setChecketd] = useState();

  const handleSubmit = () => {
    // call API
    console.log({ id: checked });
  };
  return (
    <div style={{ padding: 32 }}>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            checked={checked === course.id}
            onChange={() => setChecketd(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Lựa chọn</button>
    </div>
  );
}

export default App;
