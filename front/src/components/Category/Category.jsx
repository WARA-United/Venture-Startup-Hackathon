import React from "react";
import "./Category.scss";

function Category() {
  const categories = [
    "건축",
    "과학",
    "기획/아이디어",
    "디자인",
    "마케팅",
    "뷰티",
    "스포츠",
    "영상/사진",
    "음악",
    "패션",
    "푸드",
    "개발",
    "프리랜서",
    "학습",
  ];

  return (
    <div className="category">
      {categories.map((category, index) => (
        <div key={index} className="category-item">
          {category}
        </div>
      ))}
    </div>
  );
}

export default Category;
