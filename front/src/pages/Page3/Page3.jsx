import React, { useState } from "react";
import "./Page3.scss";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';


import { Input, Space, Button, Select, Tag } from "antd";

const { TextArea } = Input;

export default function Page3() {

  const [members, setMembers] = useState(['']); // 팀원 명단

  const handleAddMember = () => {
    setMembers([...members, '']);
  };

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleInputChange = (index, event) => {
    const newMembers = [...members];
    newMembers[index] = event.target.value;
    setMembers(newMembers);
  };


  return (
  <div className="page3">
      <h1>등록 페이지</h1>

      <div style={{ padding: "1% 0" }}>
          <h1>지원 팀명</h1>

          <div className="inputDiv">
              <Input placeholder="Basic usage"/>
          </div>

      </div>

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

    <div>
      <h2>팀원 명단</h2>
      
      <Space direction="vertical" style={{ marginBottom: '10px' }}>
      {members.map((member, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          
          <Input
            placeholder="팀원 명"
            value={member}
            onChange={(event) => handleInputChange(index, event)}
          />
          {/* <Button onClick={handleAddMember}>
            추가
          </Button> */}
          <Button
            style={{ backgroundColor: 'red', color: 'white' }}
            onClick={() => handleRemoveMember(index)}
          >
            삭제
          </Button>
          </div>
      ))}
      </Space>
      <Button onClick={handleAddMember}>
        추가
      </Button>

    </div>


    <div style={{ padding: "1% 0" }}>
      <h1>공모전 내용</h1>
    <div className="inputDiv">
        <TextArea
            showCount
            maxLength={100}
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
          type="primary"
          size="large"> 공모전 등록</Button>
    </div>
    </div>
  );
}
