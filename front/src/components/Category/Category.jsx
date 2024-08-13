import React, { useState } from "react";
import "./Category.scss";

function Category({ onSelectCategory }) {
  const categories = [
    "전체",
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

  const [selectedCategory, setSelectedCategory] = useState("전체");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="category">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`category-item ${
            category === selectedCategory ? "selected" : ""
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

export default Category;
