import { Calendar, Modal } from "antd";
import React, { useState } from "react";
import "./ProjectPage.scss";

export default function ProjectPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null); //YYYY-MM-DD
  const [selectedDayData, setSelectedDayData] = useState([]);

  const projectData = [
    {
      title: "프로젝트 Alpha",
      content1: "홍길동",
      content2: "2024-08-01",
      content3: "2024-08-10",
    },
  ];

  const getDateArray = (start, end) => {
    const dateArray = [];
    let currentDate = new Date(start);

    while (currentDate <= new Date(end)) {
      dateArray.push(new Date(currentDate).toISOString().split("T")[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dateArray;
  };

  const newProjectData = projectData.flatMap((project) => {
    const dateArray = getDateArray(project.content2, project.content3);

    return dateArray.map((date) => ({
      title: project.title,
      content1: project.content1,
      date: date,
    }));
  });

  const getListData = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const listData = newProjectData.filter((item) => item.date === dateStr);
    return listData.map((item, index) => ({
      content: item.title,
      key: index,
    }));
  };

  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.key}>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    );
  };

  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const cellClickHandler = (value) => {
    const dateStr = value.format("YYYY-MM-DD");
    const dayData = newProjectData.filter((item) => item.date === dateStr);
    setSelectedDayData(dayData);
    setSelectedDate(value);
    setIsModalOpen(true);
  };
  return (
    <div className="project-page">
      <div className="project-calendar">
        <Calendar cellRender={cellRender} onSelect={cellClickHandler} />
      </div>

      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        width={300}
        footer={null}
      >
        <h3>
          {selectedDate
            ? `${selectedDate.format("YYYY-MM-DD")}의 진행상황`
            : "상세내용"}
        </h3>
        <br />
        {selectedDayData.length > 0 ? (
          <ul>
            {selectedDayData.map((item, index) => (
              <li key={index}>{`담당자 : ${item.content1}`}</li>
            ))}
          </ul>
        ) : (
          <p>해당 날짜에는 프로젝트가 진행되지 않습니다.</p>
        )}
      </Modal>
    </div>
  );
}
