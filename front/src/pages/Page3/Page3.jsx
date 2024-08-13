import React, { useState } from "react";
import "./Page3.scss";
import { InboxOutlined } from '@ant-design/icons';


import { Input, Space, Button, Select, Tag, Upload, message, DatePicker} from "antd";
import { faL } from "@fortawesome/free-solid-svg-icons";

const { Dragger } = Upload;
const { TextArea } = Input;
const { RangePicker } = DatePicker;


export default function Page3() {

  const [competitionName, setCompetitionName] = useState(""); // 공모전 명
  const [category, setCategory] = useState(""); // 카테고리
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

  const handleSubmit = () => {
    console.log('공모전 명:', document.querySelector('.ant-input').value);
    console.log('카테고리:', document.querySelector('.ant-select-selection-item').textContent);
    console.log('공모전 기간:', startDate, '~', endDate);
    console.log('이미지:', previewImage);
    console.log('공모전 내용:', document.querySelector('.ant-input').value);
  };


  return (
  <div className="page3">

      <div className="inputArea">
          <h1>공모전 명</h1>

          <div className="inputDiv">
              <Input placeholder="공모전 명을 입력하시오"/>
          </div>

      </div>

<div className="inputArea">
      <h2>카테고리</h2>
      <Select
          showSearch
          placeholder="카테고리 검색"
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={[
            {
              value: '1',
              label: 'IT/학술/논문',
            },
            {
              value: '2',
              label: '아이디어/기획',
            },
            {
              value: '3',
              label: '스포츠/음악',
            },
          ]}

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
