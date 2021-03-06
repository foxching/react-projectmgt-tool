import React, { useEffect, useRef } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

const ProjectInfo = props => {
  const modal1 = useRef();

  useEffect(() => {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(modal1.current, options);
  }, []);

  const { id, project } = props;
  dayjs.extend(relativeTime);
  return (
    <div>
      <div ref={modal1} id={id} className="modal">
        <div className="modal-content">
          <h4>Project Info </h4>
          <p className="grey-text">
            Posted by:<span>{project.handle}</span>
          </p>
          <p className="grey-text">
            Posted :
            <span>
              {dayjs(project.createdAt).format("ddd, MMM D, YYYY h:mm A")}
            </span>
          </p>
          {project.updatedAt && (
            <p className="grey-text">
              Updated :
              <span>
                {dayjs(project.updatedAt).format("ddd, MMM D, YYYY h:mm A")}
              </span>
            </p>
          )}
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn-flat">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
