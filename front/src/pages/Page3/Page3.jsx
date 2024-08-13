import React, { useState } from "react";
import "./Page3.scss";
import { InboxOutlined } from '@ant-design/icons';


import { Input, Space, Button, Select, Tag, Upload, message, DatePicker} from "antd";
import { faL } from "@fortawesome/free-solid-svg-icons";

const { Dragger } = Upload;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

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

// 카테고리 배열을 Select 옵션으로 변환하는 함수
const convertCategoriesToOptions = (categories) => {
  return categories.map((category, index) => ({
    value: index.toString(), // 또는 다른 고유한 값
    label: category,
  }));
};

// 카테고리 번호를 텍스트로 변환하는 함수
const getCategoryText = (categoryIndex) => {
  return categories[parseInt(categoryIndex)] || ""; // 번호에 해당하는 카테고리 텍스트를 반환
};



export default function Page3() {

  const [competitionName, setCompetitionName] = useState(""); // 공모전 명
  const [selectedCategory, setSelectedCategory] = useState(""); // 선택된 카테고리
  const [competitionContent, setCompetitionContent] = useState(""); // 공모전 내용

  const [startDate, setStartDate] = useState(null); // 시작 날짜 상태
  const [endDate, setEndDate] = useState(null); // 종료 날짜 상태

  const [previewImage, setPreviewImage] = useState(null); // 미리보기 이미지
  const [fileList, setFileList] = useState([]); // 파일 리스트 상태

  const handleChange = info => {
    const newFileList = info.fileList.slice(-1); // 최신 파일만 유지
    setFileList(newFileList);

    if (info.file.status === 'removed') {
      setPreviewImage(null); // 파일이 삭제된 경우 미리보기 이미지 초기화
    } else {
      const file = info.file.originFileObj || info.file; // originFileObj가 있으면 사용, 없으면 file 사용

      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          setPreviewImage(e.target.result); // 미리보기 이미지 설정
        };
        reader.readAsDataURL(file); // 파일 객체를 읽어와 미리보기 설정
      }
    }
  };

  // 파일 삭제 시 호출되는 함수
  const handleRemove = file => {
    setFileList([]); // 파일 리스트를 빈 배열로 설정하여 삭제
    setPreviewImage(null); // 미리보기 이미지도 초기화
  };

  // 파일 업로드 전 처리 함수
  const beforeUpload = file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('JPG 또는 PNG 파일만 업로드할 수 있습니다.');
      return Upload.LIST_IGNORE; // 파일을 업로드하지 않고 무시
    }
    return false; // 파일을 업로드하지 않도록 설정
  };

  const props = {
    name: 'file',
    multiple: false,
    fileList, // fileList를 상태로 전달
    onChange: handleChange,
    beforeUpload: beforeUpload,
    onRemove: handleRemove, // 파일 삭제 동작 제어
    showUploadList: true,
  };

  const handleRangeChange = (dates, dateStrings) => {
    if (dates) {
      console.log('포맷된 시작 날짜:', dateStrings[0]);
      console.log('포맷된 종료 날짜:', dateStrings[1]);

      setStartDate(dateStrings[0]);
      setEndDate(dateStrings[1]);
    } else {
      setStartDate(null);
      setEndDate(null);
    }
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  const handleSubmit = async () => {
    const categoryText = getCategoryText(selectedCategory);

    console.log('공모전 명:', competitionName); // 상태 변수에서 공모전 명을 가져옵니다.
    console.log('카테고리:', categoryText); // 상태 변수에서 카테고리 값을 가져옵니다.
    console.log('공모전 기간:', startDate, '~', endDate); // 상태 변수에서 공모전 기간을 가져옵니다.
    console.log('이미지:', previewImage); // 상태 변수에서 미리보기 이미지를 가져옵니다.
    console.log('공모전 내용:', competitionContent); // 상태 변수에서 공모전 내용을 가져옵니다.


    const formData = new FormData();

    // JSON 데이터 객체 생성
    const jsonData = {
        compEmail: "comp@naver.com",
        category: categoryText,
        title: competitionName,
        content: competitionContent,
        startDate: startDate,
        endDate: endDate,
    };

    // JSON 데이터를 문자열로 변환하여 'content'라는 키로 추가
    formData.append('contest', JSON.stringify(jsonData));

    // 파일 추가 (첫 번째 파일만 추가, 여러 파일을 지원할 경우 반복문 사용)
    if (fileList.length > 0) {
      formData.append('image', fileList[0].originFileObj || fileList[0].file);
    }

    try {
      const response = await fetch(
          `http://15.165.192.29:8000/api/contest`,
          {
              method: 'POST',
              headers: {
                  // 'Content-Type': `multipart/form-data`,
              },
              body: formData,
            //   JSON.stringify({
            //     compEmail : "comp@naver.com",
            //     category : categoryText,
            //     title :  competitionName,
            //     content : competitionContent,
            //     startDate : startDate,
            //     endDate : endDate
            // }),
          }
      );
      const result = await response.json();
      console.log(result);

      if (response.ok) {
          console.log('response ok');
      }
      else {
          console.log('response not ok');
      }


  } catch (e) {
      console.error(e);
  }

  };


  return (
  <div className="page3">

      <div className="inputArea">
          <h1>공모전 명</h1>

          <div className="inputDiv">
              <Input 
                    placeholder="공모전 명을 입력하시오"
                    value={competitionName} // 상태 값으로 설정
                    onChange={(e) => setCompetitionName(e.target.value)} // 상태 업데이트
              />
          </div>

      </div>

<div className="inputArea">
      <h2>카테고리</h2>
      <Select
          showSearch
          placeholder="카테고리 검색"
          value={selectedCategory}
          onChange={handleCategoryChange}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={convertCategoriesToOptions(categories)} // 변환된 옵션 전달
          style={{ width: 200 }} // Select 컴포넌트의 스타일

          // 키 값이 다를 경우 사용
          // fieldNames={{ value: 'id', label: 'name' }} 
        />
        </div>


    <div className="inputArea">
      <h2>공모전 기간</h2>
      <RangePicker onChange={handleRangeChange} />
    </div>


      <div className="inputArea">
      <h2>이미지 업로드</h2>

          {/* <Dragger {...props}>
              <p className="ant-upload-drag-icon">
          <InboxOutlined />
              </p>
        <p className="ant-upload-text">이 영역을 클릭하거나 파일을 드래그하여 업로드하세요</p>
        <p className="ant-upload-hint">
        단일 또는 여러 파일 업로드를 지원합니다. 회사 데이터나 기타 금지된 파일의 업로드는 엄격히 금지됩니다.
        </p>
      </Dragger> */}
            <Dragger {...props}>
        {previewImage ? (
          <img
            src={previewImage}
            alt="미리보기"
            style={{ maxHeight: '400px', maxWidth: '100%' }} // 미리보기 이미지 스타일 설정
          />
        ) : (
          <>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">이 영역을 클릭하거나 파일을 드래그하여 업로드하세요</p>
            <p className="ant-upload-hint">
              단일 이미지 업로드를 지원합니다. 회사 데이터나 기타 금지된 파일의 업로드는 엄격히 금지됩니다.
            </p>
          </>
        )}
      </Dragger>

      </div>


    <div style={{ padding: "1% 0" }}>
      <h1>공모전 내용</h1>
    <div className="inputDiv">
        <TextArea
            showCount
            maxLength={500}
            placeholder="텍스트를 입력하시오"
            value={competitionContent} // 상태 값으로 설정
            onChange={(e) => setCompetitionContent(e.target.value)} // 상태 업데이트
            style={{
              height: 250,
              justifyContent: 'center',
              resize: 'none',
          }}
        />
    </div>
    </div>



    <div style={{
      display:"flex",
      justifyContent: "flex-end",
      padding: "7% 0"
      }}>
      <Button 
          onClick={handleSubmit}
          type="primary"
          size="large"> 공모전 등록</Button>
    </div>
    </div>
  );
}
