import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Miss Bag, I am <span className="purple">the guy </span>
            in <span className="purple"> your Phone</span>
            <br />I think I am starting to like you a lot.
            <br />
            <br />
            Apart from day dreaming about you, I like to listen to same song on the repeat.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing stupid letters
            </li>
            <li className="about-activity">
              <ImPointRight /> Fail at life
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Calling you stupid would be an insult to stupid people!"{" "}
          </p>
          <footer className="blockquote-footer">Aditya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
