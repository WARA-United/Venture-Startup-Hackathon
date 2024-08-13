import { HeartOutlined, ShareAltOutlined } from "@ant-design/icons";
import { Button, Image, Modal, Typography, message } from "antd";

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SubPage.scss";

const { Title, Paragraph, Text } = Typography;

export default function SubPage() {
  const location = useLocation();
  const { cardImage, title, content1, content2, content3, content4, content5 } =
    location.state || {};

  const dummyData = {
    organizer: "와라 Company",
    coOrganizers: "해양경찰청, 포스코이앤씨, 한국전력공사, 월드비전",
    sponsor: "사랑의열매 인천사회복지공동모금회",
    category: "디자인미술영상/UCC",
    submissionMethod: "홈페이지",
    submissionPeriod: "2024-07-29 00:00 ~ 2024-08-30 23:59",
    eligibility: "대학생 | 대학원생 | 일반인 | 제한 없음",
    prizeType: "상금",
    prizeAmount: "200만원",
    website: "공모전 홈페이지 바로가기",
    keywords:
      "해양환경보전 | 숏폼 | 포스터 | 블루카본 | 지속가능한 바다 | 염생식물 | 해양환경보호 | 해양경찰청 | 씽굿 공모전 | 씽굿공모전",
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 여부

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="subpage">
      <div className="image-container">
        <Title level={2}>{title}</Title>
        <Image width={400} height={600} src={cardImage} alt={title} />
      </div>

      <div className="content-container">
        <Paragraph strong>
          주최 : <Text style={{ fontSize: "18px" }}>{dummyData.organizer}</Text>
        </Paragraph>
        <Paragraph>
          주관 :{" "}
          <Text style={{ fontSize: "18px" }}>{dummyData.coOrganizers}</Text>
        </Paragraph>
        <Paragraph>
          후원사 : <Text style={{ fontSize: "18px" }}>{dummyData.sponsor}</Text>
        </Paragraph>
        <Paragraph>
          응모분야 : <Text style={{ fontSize: "18px" }}>{content1}</Text>
        </Paragraph>
        <Paragraph>
          접수방법 :{" "}
          <Text style={{ fontSize: "18px" }}>
            {content2} ~ {content3}
          </Text>
        </Paragraph>
        <Paragraph>
          접수기간 :{" "}
          <Text style={{ fontSize: "18px" }}>{dummyData.submissionPeriod}</Text>
        </Paragraph>
        <Paragraph>
          참가자격 :{" "}
          <Text style={{ fontSize: "18px" }}>{dummyData.eligibility}</Text>
        </Paragraph>
        <Paragraph>
          시상종류 :{" "}
          <Text style={{ fontSize: "18px" }}>{dummyData.prizeType}</Text>
        </Paragraph>
        <Paragraph>
          시상금(1등) :{" "}
          <Text style={{ fontSize: "18px" }}>{dummyData.prizeAmount}</Text>
        </Paragraph>

        <Paragraph>
          내용 : <Text style={{ fontSize: "18px" }}>{content4}</Text>
        </Paragraph>

        <Paragraph>
          홈페이지 : <a href="#">{dummyData.website}</a>
        </Paragraph>

        <Paragraph>
          이메일 : <Text style={{ fontSize: "18px" }}>{content5}</Text>
        </Paragraph>
        <Paragraph>
          키워드 :{" "}
          <Text style={{ fontSize: "18px" }}>{dummyData.keywords}</Text>
        </Paragraph>

        <div className="button-container">
          <Button
            size="large"
            onClick={() => {
              setIsModalOpen(true);
              message.success("챌린지에 참가되었습니다.");
            }}
          >
            지원하기
          </Button>
          <Button size="large" icon={<HeartOutlined />} />
          <Button size="large" icon={<ShareAltOutlined />} type="primary" />
        </div>
      </div>

      {/* 모달 */}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        width={500} // 모달의 전체 크기 조정
        footer={null}
        style={{ padding: 0 }} // 모달의 패딩 제거
      >
        <div className="modal-content">
          <img src={cardImage} alt="cardImage" />
        </div>
        <Title level={3}>{title}</Title>
        <Paragraph>지원을 완료했습니다!</Paragraph>
      </Modal>
    </div>
  );
}
