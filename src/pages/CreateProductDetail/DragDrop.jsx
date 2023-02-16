import React, { useCallback, useRef, useState, useEffect } from 'react';
import { API } from '../../config';

const DragDrop = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);

  const dragRef = useRef(null);
  const fileId = useRef(0);

  const onChangeFiles = useCallback(
    (e) => {
      let selectFiles = [];
      let tempFiles = files;

      if (e.type === 'drop') {
        selectFiles = e.dataTransfer.files;
      } else {
        selectFiles = e.target.files;
      }

      for (const file of selectFiles) {
        tempFiles = [
          ...tempFiles,
          {
            id: fileId.current++,
            object: file,
          },
        ];
      }

      setFiles(tempFiles);
    },
    [files]
  );

  const handleFilterFile = useCallback(
    (id) => {
      setFiles(files.filter((file) => file.id !== id));
    },
    [files]
  );

  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    setIsDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.files) {
      setIsDragging(true);
    }
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      onChangeFiles(e);
      setIsDragging(false);
    },
    [onChangeFiles]
  );

  const initDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.addEventListener('dragenter', handleDragIn);
      dragRef.current.addEventListener('dragleave', handleDragOut);
      dragRef.current.addEventListener('dragover', handleDragOver);
      dragRef.current.addEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback(() => {
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener('dragenter', handleDragIn);
      dragRef.current.removeEventListener('dragleave', handleDragOut);
      dragRef.current.removeEventListener('dragover', handleDragOver);
      dragRef.current.removeEventListener('drop', handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents]);

  const previewImg = () => {
    const file = document.querySelector('input[type=file]').files[0];
    const preview = document.querySelector('#imgBox');
    const reader = new FileReader();
    reader.onLoad = () => {
      const dataURL = reader.result;
      preview.src = `${dataURL}`;
    };
    console.log('reader : ', reader);
    console.log('file : ', file);
    console.log('files : ', files);

    if (file) {
      reader.readAsDataURL(file);
      console.log('reader.result : ', reader.result);
    }
  };

  const onSaveImage = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const formData = new FormData();
    files.map((images, i) => {
      formData.append('images', i);
      console.log('get All : ', formData.values());
    });

    console.log(formData);

    fetch(`${API.REGISTRATION}`, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/formData',
        authorization:
          'eyJhbGciOiJIUzI1NiJ9.OA.VYStx-i_AZ2phDOgkeV2XjaKd9AqG8P12RLypD-cBog',
      },

      body: JSON.stringify({
        formData,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <form id='form'>
      <label htmlFor='fileUpload' ref={dragRef} onChange={previewImg}>
        <div className='font-mono w-[300px] h-[300px] bg-[#333333] text-white'>
          파일 첨부
          <div className='DragDrop-Files'>
            {files.length > 0 &&
              files.map((file) => {
                const {
                  id,
                  object: { name },
                } = file;

                return (
                  <div className='w-[300px] flex' key={id}>
                    <div className='font-mono'>{name}</div>
                    <img
                      id='imgBox'
                      className='w-10 h-10'
                      alt='img'
                      src=''
                    ></img>
                    <div
                      className='ml-3  text-sm text-white'
                      onClick={() => handleFilterFile(id)}
                    >
                      x
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <input
          type='file'
          id='fileUpload'
          style={{ display: 'none' }}
          multiple={true}
          onChange={onChangeFiles}
        />
      </label>
      <button onClick={onSaveImage}>이미지 저장</button>
    </form>
  );
};

export default DragDrop;
