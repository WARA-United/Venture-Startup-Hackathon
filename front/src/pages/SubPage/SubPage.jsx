import React from "react";
import "./SubPage.scss";
import { Divider , Flex, Button, Image, Tag } from "antd";

import { HeartOutlined, ShareAltOutlined } from '@ant-design/icons';

import { Typography } from 'antd';
const { Title } = Typography;

export default function SubPage() {
  return (
    <>
    <Flex justify={"space-evenly"} style={{height:"100%"}}>
    <div style={{padding :"2%", width:"60%"}}>
      <Title>공모전 제목</Title>
      <Title level={4}>부제목</Title>
      <Tag style={{padding:"1%"}}>카테고리</Tag>
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

    <div style={{width:"20%", padding:"2%"}} >
    <Image
    width={200}
    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
  />
     <Title level={2}>공모전 제목</Title> 
     <Button size="large" style={{marginRight:"5%"}}>지원하기</Button>
     <Button icon={<HeartOutlined />} style={{marginRight:"5%", padding:"5%"}}/>
     <Button icon={<ShareAltOutlined />} type="primary"/>
      </div>
    </Flex>
    </>
  );
}
