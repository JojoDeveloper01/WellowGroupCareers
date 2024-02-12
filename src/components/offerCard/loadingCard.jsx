const LoadingCard = () => (
  <div className='flex flex-col items-center justify-center' style={{ padding: "0px 20px 0px 20px" }}>
    <div className='hoverdiv relative w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden border-box mb-4' style={{ maxWidth: "1200px" }}>
      <div className='vertical-line bg-gray-300'></div>
      <div className='flex flex-col lg:flex-row justify-between' style={{ padding: "24px 24px 20px", color: "#4c4f51" }}>
        <div className='flex flex-col lg:w-2/3 lg:pr-4' style={{ padding: "0px 10px 0px 0px" }}>
          <div className='flex items-center'>
            <div className='skeleton-text h-6 rounded bg-gray-300' style={{ width: "650px" }}></div>
          </div>
          <div className='flex items-center'>
            <div className='skeleton-text h-5 rounded bg-gray-300' style={{ width: "530px", margin: "20px 0px 15px 4px" }}></div>
          </div>
        </div>
        <div className='flex justify-end lg:w-1/3' style={{ margin: "10px 10px 0px 0px" }}>
          <div className='skeleton-button rounded-md bg-gray-300' style={{ width: "120px", height: "45px" }}></div>
          <div className='skeleton-button rounded-md bg-gray-300 ml-2' style={{ width: "150px", height: "45px" }}></div>
        </div>
      </div>
    </div>
  </div>
);

export default LoadingCard;