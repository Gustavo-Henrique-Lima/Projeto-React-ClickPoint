import { useEffect, useState } from 'react';
import Image from 'next/image';
import share from 'public/icons/share.png';
import undo from 'public/icons/undo.png'
import Point from '@/components/point';

export default function Home() {
  const [points, setPoints] = useState([]);
  const [oldPoints, setOldPoints] = useState([]);
  const [showBack, setShowBack] = useState(true);
  const [showNext, setShowNext] = useState(true);

  const handleMouseClick = (e) => {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
  };

  const buttonBack = () => {
    const newPoints = [...points];
    const saveOldPoint = newPoints.pop();
    setPoints(newPoints);
    setOldPoints([...oldPoints, saveOldPoint]);
  };

  const buttonNext = () => {
    if (oldPoints.length > 0) {
      const getOldPoint = oldPoints.pop();
      setPoints([...points, getOldPoint]);
    }
    else{
      setShowNext(oldPoints.length != 0 ? false : true);
    }
  }

  useEffect(() => {
    setShowNext(oldPoints.length != 0 ? false : true);
  }, [oldPoints]);

  useEffect(() => {
    setShowBack(points.length > 0 ? false : true);
  }, [points]);


  return (
    <main className='bg-white w-full '>
      <header>
        <nav className='flex flex-row justify-between align-middle pt-30 bg-blue-950 pb-30'>
          <button className='bg-slate-500 text-white ml-7 rounded-10 px-15 py-5' onClick={buttonBack} disabled={showBack}>
            <Image src={undo} alt="Imagem com símbolo de voltar" />
          </button>
          <h1 className='text-white font-serif text-lg'>Área não clicável  </h1>
          <button className='bg-slate-500 rounded-10 px-15 py-5 text-white mr-7' onClick={buttonNext} disabled={showNext}>
            <Image src={share} alt="Imagem com símbolo de restaurar" />
          </button>
        </nav>
      </header>
      <section className='mx-10 min-h-screen' onClick={handleMouseClick}>
        {points.map((point, index) => {
          return <div key={index} style={{ position: "absolute", left: point.x - 5, top: point.y - 5 }}><Point /></div>
        })}
      </section>
    </main>
  )
}
