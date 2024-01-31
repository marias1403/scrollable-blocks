import React, { useEffect, useRef, useState } from 'react';
import './ScrollableBlocks.css';

const ScrollableBlocks = ({ blocks }) => {
  const [currentBlockId, setCurrentBlockId] = useState(null);
  const [observer, setObserver] = useState(null);

  const options = {
    root: null,
    threshold: 1
  };

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry);
          setCurrentBlockId(entry.target.id);
        }
      });
    }, options);

    setObserver(obs);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll('.element');
    targets.forEach(target => observer?.observe(target));

    return () => {
      targets.forEach(target => observer?.unobserve(target));
    };
  }, [blocks, observer]);



  const scrollToBlock = (blockId) => {
    const element = document.getElementById(blockId);
    if (element) {
      const elementTop = element.offsetTop;
      const topOffset = 100;

      window.scrollTo({
        top: elementTop - topOffset,
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
