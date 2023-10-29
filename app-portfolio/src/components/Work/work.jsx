'use client'
import React from 'react';
import Image from 'next/image';
import timelineElements from './timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

const work = () => {
  const centeredElementStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  let workIconStyles = { background: "#B6A7C3" };
  let schoolIconStyles = { background: "#8284B7" };

  return (
    <div style={centeredElementStyle}> 
      <h1>Timeline</h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";

          const imageStyle = {
            margin: '0 auto',
            marginTop: '10px', // Adjust the value to move it further downwards
          };

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={{
                background: isWorkIcon ? workIconStyles.background : schoolIconStyles.background,
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              {element.icon === 'work' ? (
                <img src="/work.svg" alt="Work Icon" width={30} height={30} style={imageStyle} />

              ) : (
                <img
                  src="/school.svg"
                  alt="School Icon"
                  width={30}
                  height={30}
                  style={imageStyle} 
                />
              )}

            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default work;
