import React, { useState } from "react";
import { FaLinkedin, FaEnvelope, FaGlobe } from 'react-icons/fa';
import '../style/carousel.css';

interface Member {
  Name: string;
  Position: string;
  img: string;
  linkedin?: string;
  collegeMailId?: string;
  website?: string;
}

interface MembersDetailsProps {
  data: Member[];
  team?: string;
  header?: React.ReactNode;
}

const MembersDetails: React.FC<MembersDetailsProps> = ({ data }) => {
  const [isPaused, setIsPaused] = useState(false);
  // Duplicate the data for seamless looping
  const duplicatedData = [...data, ...data];

  // Calculate duration based on number of items (3 seconds per item)
  const duration = `${data.length * 3}s`;

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`flex w-fit gap-7 flex-nowrap shrink-0 p-5 animate-marquee ${isPaused ? 'paused' : ''}`}
        style={{ animationDuration: duration }}
      >
        {duplicatedData.map((member, index) => (
          <div key={index} className="member-card">
            <img
              className="member-image"
              src={member.img}
              alt={member.Name}
            />
            <div className="member-overlay">
              <div className="social-links">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaLinkedin size={30} />
                  </a>
                )}
                {member.collegeMailId && (
                  <a
                    href={`mailto:${member.collegeMailId}`}
                    className="social-link"
                  >
                    <FaEnvelope size={30} />
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <FaGlobe size={30} />
                  </a>
                )}
                
              </div>
            </div>
            <div className="member-info">
              <h1 className="member-name">{member.Name}</h1>
              <h3 className="member-position">{member.Position}</h3>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default MembersDetails;