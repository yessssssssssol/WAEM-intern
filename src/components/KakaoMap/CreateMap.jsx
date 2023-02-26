import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const CreateMap = () => {
  const [position, setPosition] = useState();
  return (
    <div className='w-full flex justify-center'>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 37.485034,
          lng: 127.116088,
        }}
        style={{
          width: '100%',
          height: '450px',
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_t, mouseEvent) =>
          setPosition({
            lat: mouseEvent.latLng.getLat(),
            lng: mouseEvent.latLng.getLng(),
          })
        }
      >
        {position && <MapMarker position={position} />}
      </Map>
      {position && (
        <p>
          {'클릭한 위치의 위도는 ' +
            position.lat +
            ' 이고, 경도는 ' +
            position.lng +
            ' 입니다'}
        </p>
      )}
    </div>
  );
};

export default CreateMap;
