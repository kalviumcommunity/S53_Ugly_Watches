import React from "react";

const Posts = () => {
  return (
    <div>
      <div className="grid">
        <div className="parentCard">
          <div className="card">
            <div>
              {/* <button className="btns">delete</button> */}
              {/* <button className="btns">update</button> */}
              <img
                className="postImgCard"
                src="https://i.ibb.co/7S1NZWR/Corum-Rolls-Royce18-KWhite-Gold-Second-Hand-Watch-Collectors7.webp"
              ></img>
            </div>
            <h2 className="cardTitle">CORUM</h2>
            <p className="descriptionCard">Lorem ipsum dolor sit amet consectetur. Vulputate arcu feugiat mattis fermentum hendrerit imperdiet. Dictum tincidunt at eget nunc vestibulum vulputate nulla. Non ultricies ipsum erat tristique. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
