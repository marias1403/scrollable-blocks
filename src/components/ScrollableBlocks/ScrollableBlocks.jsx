import React, { useEffect, useRef, useState } from 'react';
import './ScrollableBlocks.css';

const ScrollableBlocks = ({ blocks }) => {
  const [currentBlockId, setCurrentBlockId] = useState(null);
  const observerRef = useRef();

  console.log(observerRef);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentBlockId(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.5
    });

    blocks.forEach((block) => {
      const element = document.getElementById(block.id);
      if (element) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [blocks]);

  const scrollToBlock = (blockId) => {
    const element = document.getElementById(blockId);
    if (element) {
      const elementTop = element.offsetTop;
      const windowHeight = window.innerHeight;
      const elementHeight = element.clientHeight;
      const centerOffset = windowHeight / 2 - elementHeight / 2;
      const topOffset = 200;

      window.scrollTo({
        top: elementTop - centerOffset + topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <div className='currentBlock'>Текущий блок: {currentBlockId}</div>
      <div className='buttons'>
        {blocks.map((block) => (
          <button
            key={block.id}
            className={`button ${currentBlockId == block.id ? 'button-active' : ''}`}
            onClick={() => scrollToBlock(block.id)}>
            {block.id}
          </button>
        ))}
      </div>

      <div className='block'>
        {blocks.map((block) => (
          <div key={block.id} id={block.id} className='element'>
            <p>{block.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollableBlocks;
