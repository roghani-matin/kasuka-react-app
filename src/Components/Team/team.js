import "../Team/team.css";
import { Component } from "react";
import TeamMember from "./TeamMember/tmember";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamInformation: [
        {id: 1,role: "مدیر ارشد اجرایی",memberName: "والتر وایت",imageName: "team-1.jpg",},
        {id: 2,role: "مدیر تولید",memberName: "سارا جونسون",imageName: "team-2.jpg",},
        {id: 3,role: "CTO",memberName: "ویلیام اندرسون",imageName: "team-3.jpg",},
        {id: 4,role: "حسابدار",memberName: "آماندا جپسون",imageName: "team-4.jpg",},
      ],
    };
  }

  render() {
    return (
      <div className="teamMainContainer">
        <div className="teamTextContainer">
          <h2> تیم </h2>
          <p>تیم ما را بررسی کنید</p>
        </div>
        <div className="teamMamberItems">
          {this.state.teamInformation.map( memberCards => (
            <TeamMember key={memberCards.id} {...memberCards} />
          ))}
        </div>
      </div>
    );
  }
}
