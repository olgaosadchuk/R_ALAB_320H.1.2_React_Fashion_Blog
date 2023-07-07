import React from 'react';
import blogImage1 from './images/blog-image-1.jpg';
import blogImage2 from './images/blog-image-2.jpg';
import Article from './Article';

function Main() {
  return (
    <main>
      <Article
        date="11/12/20"
        title="On the street in Brooklyn"
        image={blogImage1}
        text={
          <div>
            <div className="all-text">
              <div className="first-letter">L</div>
              <div className='text'>
                orem, ipsum dolor sit amet consectetur adipisicing elit.
                Illum magnam aliquam qui neque, delectus placeat quis?
                Libero, velit alias reiciendis dolores consequatur
                exercitationem voluptates minima pariatur.
                Magnam amet dolorem beatae? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.
                Illum magnam aliquam qui neque, delectus
                placeat quis? Libero, velit alias reiciendis
                dolores consequatur exercitationem voluptates
                minima pariatur. Magnam amet dolorem beatae?
                Lorem, ipsum
              </div>

            </div>
            <div className="rest-text">dolor sit amet consectetur
              adipisicing elit. Illum magnam aliquam qui neque,
              delectus placeat quis? Libero, velit alias
              reiciendis dolores consequatur exercitationem
              voluptates minima pariatur. Magnam amet dolorem beatae?
            </div>

          </div>

        }
      />

      <Article
        date="11/12/20"
        title="On the street in Brooklyn"
        image={blogImage2}
        text={
          <div>
            <div className="all-text">
              <div className="first-letter">L
              </div>
              <div className='text'>
                orem, ipsum dolor sit amet consectetur adipisicing elit.
                Illum magnam aliquam qui neque, delectus placeat quis?
                Libero, velit alias reiciendis dolores consequatur
                exercitationem voluptates minima pariatur.
                Magnam amet dolorem beatae? Lorem, ipsum
                dolor sit amet consectetur adipisicing elit.
                Illum magnam aliquam qui neque, delectus
                placeat quis? Libero, velit alias reiciendis
                dolores consequatur exercitationem voluptates
                minima pariatur. Magnam amet dolorem beatae?
                Lorem, ipsum
              </div>
            </div>
            <div className="rest-text">dolor sit amet consectetur
              adipisicing elit. Illum magnam aliquam qui neque,
              delectus placeat quis? Libero, velit alias
              reiciendis dolores consequatur exercitationem
              voluptates minima pariatur. Magnam amet dolorem beatae?
            </div>
          </div>
        }
      />


    </main>
  );
}

export default Main;