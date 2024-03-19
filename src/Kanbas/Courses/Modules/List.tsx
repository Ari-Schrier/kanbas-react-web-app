import React, { useState } from "react";
import "./index.css";
import modules from "../../Database/modules.json";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const [modulesList, setModuleList] = useState<any[]>(modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });
  const addModule = (module: any) => {
    const newModule = { ...module,
      _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...modulesList];
    setModuleList(newModuleList);
  };
  const deleteModule = (moduleId: string) => {
    const newModuleList = modulesList.filter(
      (module) => module._id !== moduleId );
    setModuleList(newModuleList);
  };
  const updateModule = () => {
    const newModuleList = modulesList.map((m) => {
      if (m._id === module._id) {
        return module;
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
  };

  return (
    <>
      <div>
      <button type="button" className="border btn btn-light">Collapse All</button>
      <button type="button" className="border btn btn-light">View Progress</button>
      <button type="button" className="border btn btn-light"><span className="text-success"><FaCheckCircle /></span> Publish All</button>
      <button type="button" className="border btn btn-danger"><FaPlus /> Module</button>
      <button type="button" className="border btn btn-light"><FaEllipsisV /></button>
      </div>
      <hr/>
      <ul className="list-group wd-modules">

        <li className="list-group-item">
        <div className="row">
        <div className="col-6">
        <span className="float-end">
        <label htmlFor="wd-module-name">Name of New Module:</label><br />
        <input value={module.name}
          id="wd-module-name"
          onChange={(e) => setModule({
            ...module, name: e.target.value })}
        />
        </span>
        </div>
        <div className="col-6">
        <label htmlFor="wd-module-description">New Module Description:</label><br />
        <textarea value={module.description}
          id="wd-module-description"
          onChange={(e) => setModule({
            ...module, description: e.target.value })}
        />
        </div>
        <button className="btn btn-success" onClick={() => { addModule(module) }}>Add</button>
        <button className="btn btn-secondary" onClick={updateModule}>
                Update
        </button>
        </div>

      </li>

        {modulesList.filter((module) => module.course === courseId)
        .map((module) => (
          <li
            className="list-group-item">
            <div>

              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <button className="btn btn-danger btn-small"
                onClick={() => deleteModule(module._id)}>
                Delete
              </button>
              <button className="btn btn-secondary btn-small"
                onClick={(event) => { setModule(module); }}>
                Edit
              </button>

                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {
              <ul className="list-group">
                {module.lessons?.map((lesson:any) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;