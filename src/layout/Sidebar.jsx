import dashboard from "../assets/dashboard.svg";
import academy from "../assets/academy.svg";
import arrow from "../assets/arrow-down.svg";

const Sidebar = () => {
  return (
    <aside className="kzui-sidebar">
      <a href="#" className="kzui-sidebar__flex">
        <img src={ dashboard } alt="Dashboard" />
        <h6>Dashboard</h6>
      </a>
      <a href="#" className="kzui-sidebar__flex kzui-sidebar__highlight">
        <img src={ academy } alt="Academy" />
        <h6>Academy LMS</h6>
      </a>
      <div className="kzui-sidebar__menu">
        <a href="#" className="kzui-sidebar__navlink kzui-sidebar__navlink--active">
          <p>Analytics</p>
        </a>
        <hr />
        <a href="#" className="kzui-sidebar__navlink">
          <p>Course</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Lessons</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Quizzes</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Meeting</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Tutor booking</p>
          <img src={ arrow } alt="Arrow" />
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Assignment</p>
          <img src={ arrow } alt="Arrow" />
        </a>
        <hr />
        <a href="#" className="kzui-sidebar__navlink">
          <p>Announcement</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Question & Answer</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Withdraw Request</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Instructors</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Students</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink kzui-sidebar__navlink--highlight">
          <p>Add-ons</p>
        </a>
        <a href="#" className="kzui-sidebar__navlink">
          <p>Tools</p>
        </a>
        <hr />
        <a href="#" className="kzui-sidebar__navlink">
          <p>Settings</p>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;