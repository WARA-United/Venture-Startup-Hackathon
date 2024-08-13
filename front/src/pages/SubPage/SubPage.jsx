import React from "react";
import "./SubPage.scss";
import { Divider } from "antd";
import { Flex } from "antd";
import { Button } from "antd";
import { Image } from "antd";

export default function SubPage() {
  return (
    // <Flex justify={"space-evenly"} style={{height:"100%"}}>
    <>
    <div style={{padding :"2%", width:"70%"}}>
      <h1>공모전 제목</h1>
      <div>부제목</div>
      <div>2024/01/05 ~ 2024/05/05</div>
      <Divider />

      <p>
        <p>
        - 공모전 이름
        </p>
        <p>
        - 공모전 내용
        </p>
        <p>
        - 공모전 주최
        </p>
        <p>
        - 공모전 주관
        </p>
        <p>
        - 공모전 후원
        </p>
        <p>
        - 공모전 일정
        </p>
        <p>
        - 공모전 참가자격
        </p>
        <p>
        - 공모전 신청방법
        </p>
        <p>
        - 공모전 신청기간
        </p>
        <p>
        - 공모전 신청비용
        </p>
        <p>
        - 공모전 심사기준
        </p>
        <p>
        - 공모전 시상내역
        </p>
        <p>
        - 공모전 문의사항
        </p>
        <p>
        - 공모전 홈페이지
        </p>
        <p>
        - 공모전 첨부파일
        </p>
      </p>
    </div>

    <div style={{width:"20%", padding:"2%", position: "fixed",right: "2%",
        top: "10%",}} >
    <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
     <h1 style={{padding:"1%"}}>공모전 제목</h1> 
     <Button size="large">지원하기</Button>
      </div>
    {/* </Flex> */}
    </>
  );
}
