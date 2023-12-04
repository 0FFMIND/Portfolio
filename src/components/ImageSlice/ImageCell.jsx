import './index.css';
import React from 'react';
import { Image } from 'antd';

const ImageCell = ({isReversed, isDark, cardTitle, cardText, coverContent, imageUrl}) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="imgCellContainer"         
    onMouseEnter={() => setVisible(true)}
    onMouseLeave={() => setVisible(false)}>
      <Image
        preview={false}
        width={"400"}
        height={"300"}
        style={{marginTop: "175px"}}
        src={imageUrl}
      />
      {!visible && <div
      className="upTab"
      style={
        {
          color : isDark ? "#ffffff" : "#000000",
          backgroundColor: isDark ? "#000000" : "#ffffff"
        }
      }>
        <div className="tabTitle">
            {cardTitle}
        </div>
        <div className="tabText">
            {cardText}
        </div>
      </div>}
      { visible && <div className={isDark ? "dark-cover" : "light-cover"}>{coverContent}</div>}
    </div>
  );
}


export default ImageCell;