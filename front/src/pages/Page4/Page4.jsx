import React, { useEffect, useState } from "react";
import UserDefaultImage from "../../assets/images/UserDefaultImage.png";
import UserCard from "../../components/UserCard/UserCard";
import "./Page4.scss";

export default function Page4() {
  // 기본적인 사용자 더미 데이터
  const defaultUsers = [
    {
      userName: "홍길동",
      userContent: "프론트엔드 개발자",
    },
    {
      userName: "김철수",
      userContent: "백엔드 개발자",
    },
    {
      userName: "이영희",
      userContent: "UI/UX 디자이너",
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
