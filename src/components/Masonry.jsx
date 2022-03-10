import '../assets/css/masonry.css';
import { useEffect, useState } from 'react';

function Masonry({ columns, children }) {
  const [childrenColumns, setChildrenColumns] = useState([]);
  useEffect(() => {
    let cols = Array(columns).fill([]);
  });

  return (
    <ul className="masonry-container">
      {children.map((c) => (
        <li>{c}</li>
      ))}
    </ul>
  );
}

export default Masonry;
