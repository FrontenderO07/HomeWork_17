import { Route, Routes } from "react-router-dom";
import "./App.css";
import Aside from "./components/Aside";
import MaterialDeatails from "./components/details/MaterialDeatails";
import StudentDetails from "./components/details/StudentDetails";
import AmouncementPage from "./pages/AmouncementPage";
import CoursePage from "./pages/CoursePage";
import LatePage from "./pages/LatePage";
import Materials from "./pages/Materials";
import NotificationPage from "./pages/NotificationPage";
import RatingPages from "./pages/RatingPages";
import SchedulePage from "./pages/SchedulePage";
import StudentsPage from "./pages/StudentsPage";
import SubmitadPage from "./pages/SubmitadPage";
import WaitingPage from "./pages/WaitingPage";

const materials = [
  {
    id: 1,
    title: "First Material",
  },
  {
    id: 2,
    title: "Second Material",
  },
];
const students = [
  {
    id: 1,
    title: "First Student",
  },
  {
    id: 2,
    title: "Second Student",
  },
];
function App() {
  return (
    <div className="App">
      <Aside />
      <Routes>
        <Route path="/courses/" element={<CoursePage />}>
          <Route
            path="materials/"
            element={<Materials materials={materials} />}
          />

          <Route
            path="materials/:id/details/"
            element={<MaterialDeatails materials={materials} />}
          >
            <Route path="subbmited" element={<SubmitadPage />} />
            <Route path="waiting" element={<WaitingPage />} />
            <Route path="late" element={<LatePage />} />
          </Route>

          <Route
            path="students"
            element={<StudentsPage students={students} />}
          />
          <Route
            path="students/:id/details/"
            element={<StudentDetails students={students} />}
          />
          <Route path="rating" element={<RatingPages />} />
        </Route>

        {/* ///////////////////////////////////////////////////// */}
        <Route path="/anouncements" element={<AmouncementPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="*" element={<h1>404 PAGE NOT FOUND</h1>} />
        {/* ///////////////////////////////////////////////////// */}
      </Routes>
    </div>
  );
}

export default App;
