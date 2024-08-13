import React, { useState } from "react";
import DefaultImage from "../../assets/images/DefaultImage.jpg";
import Category from "../../components/Category/Category";
import MyCard from "../../components/MyCard/MyCard";
import "./Page2.scss";

export default function Page2() {
  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("전체");

  // Expanded dummy data with the category field
  const projectData = [
    {
      cardImage: DefaultImage,
      title: "프로젝트 Alpha",
      content1:
        "홍길동aaaaaaasdfsdfasdffffffffffaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdasdg",
      content2: "2024-01-01",
      content3: "2024-06-30",
      category: "건축",
    },
    {
      cardImage: DefaultImage,
      title: "프로젝트 Beta",
      content1: "김철수",
      content2: "2024-03-01",
      content3: "2024-09-30",
      category: "과학",
    },
    {
      cardImage: DefaultImage,
      title: "프로젝트 Gamma",
      content1: "이영희",
      content2: "2024-05-01",
      content3: "2024-12-31",
      category: "기획/아이디어",
    },
    {
      cardImage: DefaultImage,
      title: "프로젝트 Delta",
      content1: "박민수",
      content2: "2024-02-15",
      content3: "2024-08-15",
      category: "디자인",
    },
    // ... other projects
  ];

  // Function to filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "전체"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  return (
    <div className="page2">
      {/* Pass the setSelectedCategory function to Category to handle category selection */}
      <Category onSelectCategory={setSelectedCategory} />
      <div className="item-container">
        {/* Render MyCard components with the filtered data */}
        {filteredProjects.map((project, index) => (
          <MyCard
            key={index} // Using the index as the key
            cardImage={project.cardImage}
            title={project.title} //제목
            content1={project.category} //분야
            content2={project.content2} //시작일
            content3={project.content3} //종료일
            content4={project.content1} //내용
            content5={project.content5} //기업email
          />
        ))}
      </div>
    </div>
  );
}
