import "../Team/team.css";
import TeamMember from "./TeamMember/tmember";

export default function Team() {
  const teamInformation = [
    {
      id: 1,
      role: "مدیر ارشد اجرایی",
      memberName: "والتر وایت",
      imageName: "team-1.jpg",
    },
    {
      id: 2,
      role: "مدیر تولید",
      memberName: "سارا جونسون",
      imageName: "team-2.jpg",
    },
    {
      id: 2,
      role: "CTO",
      memberName: "ویلیام اندرسون",
      imageName: "team-3.jpg",
    },
    {
      id: 2,
      role: "حسابدار",
      memberName: "آماندا جپسون",
      imageName: "team-4.jpg",
    },
  ];
  return (
    <div className="teamMainContainer">
      <div className="teamTextContainer">
        <h2> تیم </h2>
        <p>تیم ما را بررسی کنید</p>
      </div>
      <div className="teamMamberItems">
        <TeamMember {...teamInformation[0]} />
        <TeamMember {...teamInformation[1]} />
        <TeamMember {...teamInformation[2]} />
        <TeamMember {...teamInformation[3]} />
      </div>
    </div>
  );
}
