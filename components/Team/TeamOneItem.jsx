import React from "react";

const TeamOneItem = (props) => {
  const { src, name, designation, social } = props.item;

  return (
    <div className="team-item">
      <div className="team-thumb">
        <img src={src} alt={name} />
      </div>
      <div className="team-content">
        <h2 className="title">{name}</h2>
        <span>{designation}</span>

        <ul className="team-social">
          {social.linkedin && (
            <li>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          )}
          {social.twitter && (
            <li>
              <a
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          )}
          {social.facebook && (
            <li>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
          )}
          {social.instagram && (
            <li>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TeamOneItem;
