import React, { useEffect, useState } from "react";
import Category from "../../components/Category/Category";
import MyCard from "../../components/MyCard/MyCard";
import "./Page2.scss";

export default function Page2() {
  // State to store the selected category
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Expanded dummy data with the category field
  // const projectData = [
  //   {
  //     cardImage: DefaultImage,
  //     title: "프로젝트 Alpha",
  //     content1:
  //       "홍길동aaaaaaasdfsdfasdffffffffffaasdfasdfasdfasdfasdfasdfasdfasdfasdfasdasdg",
  //     content2: "2024-01-01",
  //     content3: "2024-06-30",
  //     category: "건축",
  //   },
  //   {
  //     cardImage: DefaultImage,
  //     title: "프로젝트 Beta",
  //     content1: "김철수",
  //     content2: "2024-03-01",
  //     content3: "2024-09-30",
  //     category: "과학",
  //   },
  //   {
  //     cardImage: DefaultImage,
  //     title: "프로젝트 Gamma",
  //     content1: "이영희",
  //     content2: "2024-05-01",
  //     content3: "2024-12-31",
  //     category: "기획/아이디어",
  //   },
  //   {
  //     cardImage: DefaultImage,
  //     title: "프로젝트 Delta",
  //     content1: "박민수",
  //     content2: "2024-02-15",
  //     content3: "2024-08-15",
  //     category: "디자인",
  //   },
  //   // ... other projects
  // ];

  // Fetch data from API on component mount
  useEffect(() => {
    // 데이터 요청 함수
    const fetchProjectData = async () => {
      try {
        // 비동기 요청
        const response = await fetch(
          "http://15.165.192.29:8000/api/contest/all",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              // 필요에 따라 인증 헤더를 추가합니다.
              // "Authorization": `Bearer YOUR_API_KEY_HERE`,
            },
          }
        );

        if (!response.ok) {
          // 응답이 좋지 않을 경우 오류를 발생시킵니다.
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // JSON 데이터로 변환
        const data = await response.json();

        // 데이터 상태 업데이트
        setProjectData(data);
        setLoading(false);

        console.log(data);
      } catch (error) {
        // 오류 처리
        setError(error);
        setLoading(false);
      }
    };

    fetchProjectData();
  }, []);

  // Function to filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "전체"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  // Display loading or error messages if needed
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message} </div>;

  return (
    <div className="page2">
      {/* Pass the setSelectedCategory function to Category to handle category selection */}
      <Category onSelectCategory={setSelectedCategory} />
      <div className="item-container">
        {/* Render MyCard components with the filtered data */}
        {filteredProjects.map((project, index) => (
          <MyCard
            key={index} // Using the index as the key
            cardImage={project.image}
            title={project.title} //제목
            content1={project.category} //분야
            content2={project.startDate} //시작일
            content3={project.endDate} //종료일
            content4={project.content} //내용
            content5={project.comEmail} //기업email
          />
        ))}
      </div>
    </div>
  );
}
