import React from 'react';
import './Page6.scss';
import { Button, Input } from "antd";


export default function Page6() {
  return (
    <div className="Page6"> 

    <div className="contract">
      <h1>고용계약서</h1>

      <div className="contract-section">
        <h2>계약건명</h2>
        <Input placeholder="여기에 계약건명을 입력하세요" variant="borderless" />
      </div>

      <div className="contract-section">
        <h2>계약기간</h2>
        <Input placeholder="여기에 계약기간을 입력하세요" variant="borderless" />
      </div>

      <p>
        (이하 “갑”이라 한다.)와 (이하 “을”이라 한다.)은 계약건명에 명시된 업무작업을 수행하기 위해 다음과 같이 계약을 체결한다.
      </p>

      <div className="contract-section">
        <h2>제1조【 목 적 】</h2>
        <p>
          본 계약은 “갑”이 “을”에게 의뢰한 
          {<Input 
          placeholder="OOO" 
          variant="borderless" 
          className="small-input" 
        />}
          
          의 업무를 “갑”에게 공급함에 있어 “갑”과 “을” 사이에 필요한 사항을 정하는 것을 목적으로 한다.
        </p>
      </div>

      <div className="contract-section">
        <h2>제2조【 계 약 기 간 】</h2>
        <p>
          계약 기간은           {<Input 
          placeholder="시작일" 
          variant="borderless" 
          className="small-input"
          style={{ width: "100px" }} 
        />}로부터 {<Input 
            placeholder="마감일" 
            variant="borderless" 
            className="small-input"
            style={{ width: "100px" }} 
          />}까지로 하며, 갑과 을의 합의 하에 본 계약기간은 연장될 수 있다.
        </p>
      </div>

      <div className="contract-section">
        <h2>제3조【 계 약 금 액 】</h2>
        <p>
          총 계약금액은 <span>          {<Input 
          placeholder="금액" 
          variant="borderless" 
          className="small-input" 
        />}</span> 만원으로 하며, 계약금액 중 <span>          {<Input 
            placeholder="금액" 
            variant="borderless" 
            className="small-input" 
          />}</span> 만원은 착수시점에 지급하고 잔금 {<Input 
            placeholder="금액" 
            variant="borderless" 
            className="small-input" 
          />} 만원은 작업완료 시 작업완료납품과 동시에 “갑”은 “을”에게 지급하기로 한다.
          단, 회사업무 수행을 위한 출장 등이 발생할 경우에는 “갑”이 그 비용을 지급하고 식대 등은 “을”의 비용으로 한다.
        </p>
      </div>

      <div className="contract-section">
        <h2>제4조【 납 품 】</h2>
        <p>
          “을”은 작업 진행 중 중간 완료된 성과물을 매월 {<Input 
          placeholder="일자" 
          variant="borderless" 
          className="small-input" 
          style={{ width: "5%" }}
        />} 등 {<Input 
            placeholder="회수" 
            variant="borderless" 
            className="small-input" 
            style={{ width: "5%" }}
          />} 회에 걸쳐 중간 납품을 하며 최종 자료는 검토 및 수정 후 완성품으로 납품하기로 한다.
        </p>
      </div>

      <div className="contract-section">
        <h2>제5조【 비 밀 유 지 】</h2>
        <p>
          “을”은 본 작업과 관련된 어떠한 일체의 정보를 외부에 누설하거나 유출해서는 안되며, 이로 인해 발생하는 모든 책임은 “을”이 진다.
        </p>
      </div>

      <div className="contract-section">
        <h2>제6조【 자 료 제 공 】</h2>
        <p>
          “갑”은 “을”이 작업을 수행하는데 필요한 일체의 자료를 제공하기로 한다.
        </p>
      </div>

      <div className="contract-section">
        <h2>제7조【 근 무 조 건 】</h2>
        <p>
          (1) 본 계약상의 업무를 수행하기 위해 출근 등과 관련된 사항은 자유로 한다.
          <br />
          (2) 본 계약 내용 외에도 다른 필요한 업무가 필요한 경우 “갑”은 “을”이 추가로 작업을 수행하는 부분에 대한 인건비와 계약 기간은 상호 협의 하에 결정한다.
        </p>
      </div>

      <div className="contract-section">
        <h2>제8조【 해 지 】</h2>
        <p>
          “갑”과 “을”은 다음 각 호에 해당될 경우 본 계약을 해지할 수 있다.
          <br />
          (1) 정당한 이유 없이 작업 진행이 이루어지지 않을 때
          <br />
          (2) 정당한 이유 없이 계약기간에 작업완료가 불가능하다고 판단될 때
          <br />
          (3) “갑”이 계약금액을 지급하지 않았을 경우
        </p>
      </div>

      <div className="contract-section">
        <h2>제9조【 손 해 배 상 】</h2>
        <p>
          “을”의 귀책사유로 인하여 본 계약이 불이행이 되었을 경우 “을”은 “갑”이 제시한 손해배상의 책임을 진다. (이때 손해배상은 {<Input 
          placeholder="세부사항" 
          variant="borderless" 
          className="small-input" 
            style={{ width: "20%" }}
        />}으로 한다.)
        </p>
      </div>

      <div className="contract-section">
        <h2>제10조【 소 송 관 할 】</h2>
        <p>
          본 계약으로 발생하는 분쟁은 {<Input 
          placeholder="관할법원" 
          variant="borderless" 
          className="small-input" 
            style={{ width: "10%" }}
        />} 법원을 관할법원으로 한다. 각 당사자는 위 계약을 증명하기 위하여 본 계약서 2통을 작성하여 각각 서명(또는 기명)날인 후 “갑“과 “을“이 각각 1통씩을 보관한다.
        </p>
      </div>

      <div className="contract-section">
        <h2>계약일자</h2>
        {<Input 
          placeholder="계약일자" 
          variant="borderless" 
          className="small-input" 
          style={{ width: "50%" }}
        />}
      </div>

      <div className="signature-section">
        <div className="party">
          <h3>(갑)</h3>
          <p>주 소: {<Input 
          placeholder="주 소" 
          variant="borderless" 
          className="small-input" 
          style={{ width: "50%" }}
        />}</p>
          <p>회 사 명: {<Input 
          placeholder="회사명" 
          variant="borderless" 
          className="small-input" 
          style={{ width: "50%" }}
        />}</p>
          <p>대 표 자: <span>(대표자명)</span> (인)</p>
          <p>연 락 처: {<Input 
          placeholder="연락처" 
          variant="borderless" 
          className="small-input" 
          style={{ width: "50%" }}
        />}</p>
        </div>

        <div className="party">
          <h3>(을)</h3>
          <p>주 소:           {<Input 
          placeholder="주 소" 
          variant="borderless" 
          className="small-input" 
          style={{ width: "50%" }}
        />}</p>
          <p>주민번호:           {<Input 
          placeholder="주민번호" 
          variant="borderless" 
          className="small-input" 
          style={{ width: "50%" }}
        />}</p>
          <p>성 명: <span>(성명)</span> (인)</p>
          <p>연 락 처: {<Input 
          placeholder="연락처" 
          variant="borderless" 
          className="small-input" 
          style={{ width: "50%" }}
        />}</p>
        </div>
      </div>

      <div className="footer-note">
        <p>이 곳에 회사 로고를 입력하여 사용하세요</p>
        <p>자비스가 제공하는 양식샘플입니다. 수정하여 사용하세요.</p>
      </div>
    </div>

    <div style={{display:"flex", justifyContent:"center", padding:"3%"}}>
    <Button 
          type="primary"
          size="large"> 계약서 작성 </Button>

    </div>
    </div>

    
  );
}
