import React from "react";
import videoFile from "../../assets/images/MainMovie.mp4";
import "./Page1.scss";

export default function Page1() {
  return (
    <div className="page1">
      <div className="movie-container">
        <video src={videoFile} autoPlay loop muted playsInline />
        <h1>당신의 스타트업 인재 매칭, 스매칭</h1>
        <p>스타트업에 공모하고 당신의 포트폴리오를 쌓아보세요.</p>
      </div>
    </div>
  );
}
