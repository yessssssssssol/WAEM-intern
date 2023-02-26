import React, { useCallback, useState, useEffect } from 'react';

const DragDrop = ({ files, setFiles, onChangeFiles, dragRef, fileId }) => {
  const [isDragging, setIsDragging] = useState(false);

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

  /*
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
*/

  return (
    <div
      ref={dragRef}
      onChange={onChangeFiles}
      className='mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6'
    >
      <label
        htmlFor='fileUpload'
        className='relative cursor-pointer rounded-md bg-white font-medium text-main focus-within:outline-none focus-within:ring-2 focus-within:ring-main focus-within:ring-offset-2 hover:text-green-800'
      >
        <div className='relative cursor-pointer rounded-md bg-white font-bold text-sm text-main focus-within:outline-none focus-within:ring-2 focus-within:ring-main focus-within:ring-offset-2'>
          Upload a file
          <div className='justify-center'>
            {files.length > 0 &&
              files.map((file) => {
                const {
                  id,
                  object: { name },
                } = file;

                return (
                  <div className='w-auto flex font-sans font-light' key={id}>
                    <div className='font-sans'>{name}</div>
                    <div
                      className='ml-3  text-sm text-green-800'
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
        />
      </label>
    </div>
  );
};

export default DragDrop;
