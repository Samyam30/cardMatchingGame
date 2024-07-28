"use client";
import { useEffect, useState } from "react";
import Cardpop from "@/components/comp/cardpop";
import { Button } from "@/components/ui/button";


export default function Home() {
  const [numbers, setNumbers] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    let initialNumbers = [];
    for (let i = 0; i < 6; i++) {
      initialNumbers.push(Math.floor(Math.random() * 10));
    }
    initialNumbers = [...initialNumbers, ...initialNumbers];
    initialNumbers.sort(() => Math.random() - 0.5);
    setNumbers(initialNumbers);
  };

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || matchedCards.includes(index) || flippedCards.includes(index)) return;

    setFlippedCards((prev) => [...prev, index]);

    if (flippedCards.length === 1) {
      const firstIndex = flippedCards[0];
      const secondIndex = index;

      if (numbers[firstIndex] === numbers[secondIndex]) {
        setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const reset = () => {
    setNumbers([]);
    setFlippedCards([]);
    setMatchedCards([]);
    initializeGame();
  };

  return (
    <div>
      <div className="inttt fixed" >
        <div className="container2" id="cont1"></div>
        <div className="container2" id="cont2"></div>
        <div className="container2" id="cont3"></div>
        <div className="container2" id="cont4"></div>
        <div className="container2" id="cont5"></div>
        <div className="container2" id="cont6"></div>
        <div className="container2" id="cont7"></div>
        <div className="container2" id="cont8"></div>
      </div>
      <div className="container1">
        <div className="box1">
          <h1 className="text-5xl text-brown-20 content-center">Welcome to CardGame</h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-[20px] relative ml-[40px]">
        {numbers.map((item, index) => {
          if (matchedCards.includes(index)) return null;

          const props = {
            item: item,
            index: index,
          };

          return (
            <Cardpop
              key={index}
              props={props}
              onClick={handleCardClick}
              flipped={flippedCards.includes(index)}
              matched={matchedCards.includes(index)}
              
            />
          );
        })}
      </div>
      <div className="flex justify-center content-center mt-4">
        <Button
          variant="outline"
          onClick={reset}
          className="bg-red-700 border-red-700 hover:bg-red-700 text-slate-50 hover:text-slate-50 w-[80px] h-[40px]"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
