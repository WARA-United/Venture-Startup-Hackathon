import React, { useEffect, useState } from "react";
import UserDefaultImage from "../../assets/images/UserDefaultImage.png";
import UserCard from "../../components/UserCard/UserCard";
import "./Page4.scss";

export default function Page4() {
  // 기본적인 사용자 더미 데이터
  const defaultUsers = [
    {
      userName: "홍길동",
      userContent:
        "프론트엔드 개발자. 최신 웹 기술에 관심이 많고, 사용자 경험 향상에 중점을 둡니다.",
    },
    {
      userName: "김철수",
      userContent:
        "백엔드 개발자. 데이터베이스 설계와 API 개발에 주력하고 있습니다.",
    },
    {
      userName: "이영희",
      userContent:
        "디자이너. 사용자 인터페이스 디자인과 그래픽 디자인에 경험이 풍부합니다.",
    },
    {
      userName: "박민수",
      userContent:
        "풀스택 개발자. 프론트엔드와 백엔드 모두에 능숙하며, 문제 해결 능력이 뛰어납니다.",
    },
    {
      userName: "최수정",
      userContent:
        "프로젝트 매니저. 팀을 이끌며 프로젝트를 성공적으로 완료하는 데 중점을 둡니다.",
    },
    {
      userName: "손흥민",
      userContent:
        "풀스택 개발자. 프론트엔드와 백엔드 모두에 능숙하며, 문제 해결 능력이 뛰어납니다.",
    },
    {
      userName: "최수진",
      userContent:
        "프로젝트 매니저. 팀을 이끌며 프로젝트를 성공적으로 완료하는 데 중점을 둡니다.",
    },
  ];

  // useState로 users를 관리하고, 초기값으로 더미 데이터를 설정
  const [users, setUsers] = useState(defaultUsers);

  // useEffect로 컴포넌트가 마운트될 때 로컬 스토리지에서 users를 불러옴
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length > 0) {
      setUsers(storedUsers);
    }
  }, []);

  return (
    <div className="page4">
      {/* UserCard들을 렌더링 */}
      {users.map((user, index) => (
        <UserCard
          key={index}
          userName={user.userName}
          userImage={UserDefaultImage}
          userNickname={user.userContent}
        />
      ))}
    </div>
  );
}
