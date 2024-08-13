import React from "react";
import videoFile from "../../assets/images/MainMovie.mp4";
import "./Page1.scss";

export default function Page1() {
  return (
    <div className="page1">
      <div className="movie-container">
        <video src={videoFile} autoPlay loop muted playsInline />
        <h1>당신의 프로젝트 매니저</h1>
        <p>
          프로젝트 매니저를 통해서 프로젝트를 관리하고, 기업을 성장시키세요.
        </p>
      </div>
    </div>
  );
}
