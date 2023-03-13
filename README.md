# 📌 WAEM project

[사이트 방문하기🔗](http://bookmarketwaem.s3-website-us-east-1.amazonaws.com/)

## 1️⃣ 프로젝트 기간

- 2023/ 2 / 13 ~ 3 / 3

## 2️⃣ 프론트 사용 기술

- Jira
- React.js, TailwindCSS(모든 화면 반응형으로 구현)
- react-kakao-maps-sdk, react-slick

## 3️⃣ 팀원

- FE : 박예솔 [github](https://github.com/yessssssssssol/WAEM-intern)

- BE : 김승기 [github](https://github.com/seuungkei/waem-daangn)

## 4️⃣ 사이트 소개

- 중고책 거래 사이트로 사용자가 원하는 위치에서 책을 거래할 수 있음

## 5️⃣ 페이지 구현 및 소개

#### 1. 메인 페이지

- [x] useSearchParams를 통해 검색으로 책 리스트를 찾을 수 있음
- [x] 백엔드와 통신으로 전체 상품을 볼 수 있음
- [x] 웹/테블릿/모바일 반응형 구현

#### 2. 상품 등록 페이지

- [x] 유저의 위치를 카카오 맵으로 클릭한 후 거래할 장소를 선택할 수 있음
- [x] 웹/테블릿/모바일 반응형 구현
- [x] useRef를 사용하여 이미지를 drag & drop으로 올릴 수 있음
- [ ] 상품을 등록한 후 수정할 수 있음 -ing

#### 3. 상품 상세 페이지

- [x] useParams를 활용해 각 상품 id로 상세페이지 보여주기
- [x] 웹/테블릿/모바일 반응형 구현
- [x] kakao Map으로 거래 장소 보여주기

#### 4. 유저 페이지

- [x] 유저가 올린 상품을 한 눈에 확인 할 수 있음
- [x] 유저가 올린 상품 삭제
- [x] 유저가 올린 상품 수정
- [x] 웹/테블릿/모바일 반응형 구현

#### 5. 회원가입

- [x] 회원가입 이메일 유효성 체크
- [x] 회원가입 error code 정리해서 알람으로 보여주기
- [x] 웹/테블릿/모바일 반응형 구현

#### 6. 로그인

- [x] 로그인 유효성 확인 후 알람창
- [x] 웹/테블릿/모바일 반응형 구현
- [x] WAEM LiveCERT 연결

#### 7. 채팅창

- [x] 웹/테블릿/모바일 반응형 구현
- [ ] 유저끼리 채팅할 수 있도록 soket.io로 구현 -ing
