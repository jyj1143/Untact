# 비접촉 키오스크

개발 기간: 2022.03.06 - 2022.06.30

사용 언어 및 라이브러리: Chrome web speech API, EasyOCR, Java, Mysql, OpenCV, YOLO, flask, mediapipe, pyautogui, python, springBoot


![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0ed0f923-5c5e-4ceb-82a7-cbe91aad4f99%2FUntitled.png?table=block&id=1b78ef7e-2a6c-4ab7-899e-773e8c115a34&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=2000&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ffa308217-a04a-4a36-9740-bf848e114568%2FUntitled.png?table=block&id=d51ba5f6-b141-41f5-861d-e7c09cc468b6&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=1580&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)


# 💡 Topic

- **인공지능 기반의 비접촉 키오스크 시스템**
- 컴퓨터공학과 졸업작품 (캡스톤 디자인)
- 교내 졸업논문 경진대회 **대상**
- 교내 공학작품 경진대회 경진대회 **최우수상**
    
    

# 📝 Summary

### 문제점

- 드라이브스루 매장 대부분은 주요 대도시 가운데서도 교통량이 많은 곳에 자리 잡고 있어 드라이브스루로 인한 교통체증이 발생

### 해결책

- 드라이브스루에서 주문받는 인력을 제조하는 인력으로 전환하면 더욱 효율적
- 교통체증의 문제 해결

## **작품 내용**

드라이브스루용 비접촉 키오스크는 드라이브스루의 회전율이 낮은 단점을 보완할 뿐만이 아니라 비접촉으로 인해 질병 예방 또한 가능합니다.

1. 모션 인식 기능을 이용해 비접촉 서비스를 제공
2. 음성 인식을 통해 메뉴 선택을 원활히 할 수 있게 도와줌
3. 차량 번호판을 인식해 이전에 구매했던 목록을 토대로 메뉴를 추천
4. 이전 구매 경험이 있는 기존 회원이라면 기존에 구매했던 제품들, 회원이 아니라면 가장 많이 팔린 메뉴를 출력시켜 메뉴 선택을 원활히 할 수 있도록 도와줌

# 🛠 Tech Stack

`java`, `python`, `Mysql`, `springBoot`, `OpenCV`, `flask`, `mediapipe`, `pyautogui`, `Chrome web speech API`, `YOLO`, `EasyOCR`

# ⚙️ Architecture

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9aa10395-7d30-4428-9cd5-6ea0ffecf1db%2FUntitled.png?table=block&id=5eab6481-a685-4dae-9d43-7d9ba3b3040e&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=2000&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

# ⚙️ ERD

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6d74611c-5a36-4248-b665-9710b03e9344%2FUntitled.png?table=block&id=2929c038-345c-429a-86d1-6c06a1fc3bba&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=2000&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

# 🧑🏻‍💻 Team

- 조영재(팀장): Object Detection (Mediapipe, Tensorflow), Backend (Spring frameworks)
- 박지혜: Backend (Spring frameworks), fronted
- 채종민: Backend (Spring frameworks), fronted

# 🤚🏻 Part

- 팀장
- 프로젝트 총괄
- 시스템 아키텍처 설계
- 딥 러닝 모델을 이용한 자동차 번호판 인식
- 메뉴 추천을 위한 플라스크 서버 구현
- 스프링 메뉴추천기능 구현
- 모션인식

# ⭐️**핵심 기술**

### 모션인식

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F666f6fa3-a519-4a18-a02d-3c3862685c62%2FUntitled.png?table=block&id=f8d3a9cb-ac0a-4317-91e0-738f4281893c&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=1340&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

1. Mediapipe에서 제공하는 손가락 인식 기능을 사용
2. 제스쳐 인식
3. Autopy 라이브러리 안에 마우스 제어 기능을 사용
4. ‘이동 모드’OR ‘클릭 모드’로 설정되어 작동

### 음성인식

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb3402163-037e-4215-9348-ac1820ac04fe%2FUntitled.png?table=block&id=386e90fc-7bdd-4cca-961e-7647671a831f&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=960&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

1. 크롬 웹 스피치를 통해 사용자 음성이 입력
2. 음성 파일로 변환 후 서버에 전달
3. 음성 내용 문자열로 변경하여 반환
4. 해당 문자열을 통해 상세 메뉴 페이지가 실행

### 번호판인식

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F84f40997-d147-4a54-82ed-d129e524b79b%2FUntitled.png?table=block&id=e162272b-3291-4024-a253-a42344e7fbd7&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=960&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

Spring 서버

1. Spring 웹 서버에서 캡쳐한 자동차 번호판을 서버 통신을 통해 Flask로 전송

Flask 서버

1. 자동차 번호판을 라벨링한 데이터 셋을 학습한 YOLO 모델이 번호판 객체를 인식
2. 인식된 이미지를 easyOCR을 통해 문자열로 추출
3. 해당 번호판 문자열을 서버 통신으로 Spring으로 전송

### 메뉴추천

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe7de514a-ea4e-4478-9b2c-68bb7b28ec7d%2FUntitled.png?table=block&id=a7c0711f-016f-4168-8ce4-64bde51775aa&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=960&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

Spring 서버

1. 회원이 가장 많이 구매했던 제품 1개와 사용자의 최근 구매 정보를 Flask 서버에 전달

Flask 서버

1. 영양성분 기준으로 콘텐츠 기반 필터링을 사용해 3개의 제품을 추출과 Word2Vec 모델로 3개의 제품을 추출하여 총 6개의 제품을 Spring 서버에 보냄
2. 받은 제품 목록들을 Spring서버에서 출력

# 🤔 Learned

- 처음 Java Back-end(Spring Boot) 기술을 이용한 웹 사이트 입니다.
- SpringBoot에서 MySQL JPA 연동하는 법에 대해 배울 수 있었음
- flask서버와 Spring서버 2개의 서버를 구현하고 서버 to 서버간(Rest API) 통신을 배울수 있었음
- Yolo딥러닝모델을 통한 차량 번호판 객체인식을 배울수 있었음
- OCR을 통한 광학문자 인식을 배울수 있었음
- 인공지능을 통한 메뉴추천방식중 Wor2vec을 활용한 딥러닝 모델을 통해개인화된 메뉴를 추천을 배울수 있었음
- 모션인식을 위해 OpenCV를 활용해 이미지처리 하는 과정을 배울수 있었음

# 📷 주요 실행화면

### 모션인식 실행화면

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe54f75ba-bf7e-4573-8f7c-75a91e37c83b%2FUntitled.png?table=block&id=40d6b7a1-a60c-429d-8d1a-e330faf43865&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=670&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

### 음성인식 실행 화면

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3727f803-d017-4086-9b7c-0abdd70e0484%2FUntitled.png?table=block&id=1226fa32-cfc4-42d8-89f3-d5144e3580a2&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=1150&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

### 메인페이지

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Feb5f3836-4a04-4396-8c1c-4d93c7affe1d%2FUntitled.png?table=block&id=842c7322-aef3-4f46-9d0a-41518fec1b42&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=1060&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

메뉴를 클릭하면 비회원으로 로그인되며, 로그인 버튼을 누르면 차량번호판으로 로그인된다.

### 메뉴페이지

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F69c35a6c-5d17-4aec-8f45-f2c0d8a0f4b8%2FUntitled.png?table=block&id=06a86e7b-176d-48f9-89b9-02e6894db4fb&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=1060&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

### 상세메뉴 페이지

![Alt text](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5cbfac39-f9a1-403c-851b-f928d78af25d%2FUntitled.png?table=block&id=3b5bfb91-ed94-43c8-b890-6c18c98982cf&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=960&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

### 차량 로그인

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6600eb26-a4ab-44b5-89ce-6439d965ab22%2FUntitled.png?table=block&id=0d16c3f1-7cea-4a64-8947-e2d614cc789e&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=2000&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

차량 로그인 버튼을  눌러 차량 번호판 촬영 및 인식된 번호판 문자열 받아옴

### 이전 구매 및 메뉴 추천

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8b788e7b-897c-4116-bf56-4d663816543a%2FUntitled.png?table=block&id=b10ede82-2b91-4755-a801-a4897974681b&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=960&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

### 장바구니

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e780820-b926-4671-bc16-201091437d87%2FUntitled.png?table=block&id=2163bd09-5541-4766-881e-89d9e1b50225&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=860&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

### 결제

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F022719b0-b4ef-454b-84aa-878214e4365a%2FUntitled.png?table=block&id=3d93ba1f-7585-4fa5-a7bf-2f12ef9eb461&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=1150&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

![Untitled](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F6eff0b8a-6790-4728-aa20-228493884fc9%2FUntitled.png?table=block&id=5d7850ec-a1f5-4d3b-8ea1-b678b8c2a56c&spaceId=06f0f896-1b5a-46cf-aade-df6eca3ea953&width=860&userId=562b3917-adc0-4ead-a11f-a90f8dbc1573&cache=v2)

