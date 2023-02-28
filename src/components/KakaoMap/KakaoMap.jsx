import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import rabbit from '../../assets/images/rabbit.jpeg';
const KakaoMap = ({ product }) => {
  const { product_image } = product;
  return (
    <div className='w-full flex justify-center mt-10'>
      <Map
        center={{
          // 지도의 중심좌표
          lat: 37.485034,
          lng: 127.116088,
        }}
        style={{
          // 지도의 크기
          width: '1020px',
          height: '450px',
        }}
        level={3} // 지도의 확대 레벨
      >
        <MapMarker // 마커를 생성합니다
          position={{
            // 마커가 표시될 위치입니다
            lat: 37.485034,
            lng: 127.116088,
          }}
          image={{
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png', // 마커이미지의 주소입니다
            size: {
              width: 64,
              height: 69,
            }, // 마커이미지의 크기입니다
            options: {
              offset: {
                x: 27,
                y: 69,
              }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
            },
          }}
        />
      </Map>
    </div>
  );
};

export default KakaoMap;
