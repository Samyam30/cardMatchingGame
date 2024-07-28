"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function Cardpop({ props, onClick, flipped, matched }) {
  return (
    <div
      className={`card-container ${flipped ? "flipped" : ""} ${matched ? "matched" : ""}`}
      onClick={() => !matched && onClick(props.index)}
    >
      <div className="card-front">
        <Card
          id='card1'
          className="w-[200px] h-[300px] ml-[20px] mt-[20px] border-[2px] border-black bg-brown-20 text-slate-50 box-shadow: inset 0 25px 50px -40px rgba(225,187,118,0.25)"
        >
          <CardHeader>
            <CardTitle className="text-olive-10 pl-6">Card {props.index}</CardTitle>
          </CardHeader>
          <CardContent className="content-center justify-center align-center">
            <h1 className="text-5xl content-center pl-12 pt-12">?</h1>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
      <div className="card-back">
        <Card
          id='card2'
          className="w-[200px] h-[300px] ml-[20px] mt-[20px] border-[2px] border-black bg-olive-10 text-slate-50"
        >
          <CardHeader>
            <CardTitle className="text-brown-20 pl-6">Card {props.index}</CardTitle>
          </CardHeader>
          <CardContent>
            <h1 className="text-6xl content-center pl-12 pt-10">{props.item}</h1>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}
