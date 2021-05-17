/* eslint-disable no-loop-func */
import React, {useState, useEffect, useCallback} from 'react'
import BubbleSort from './sorting-algos/BubbleSort'
import QuickSort from './sorting-algos/QuickSort'
import MergeSort from './sorting-algos/MergeSort'
import './SortingVisualizer.css'

const Sortingvisualizer = () => {
    const DELAY = 10;
  const [arr, setArr] = useState([]);
  const resetArray = useCallback(() => {
    var i = 0;
    var x = [];
    for (i = 0; i < 100; i++) {
      x.push(getRandomArbitrary(10, 500));
    }
    setArr(x);
  }, []);

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  useEffect(() => {
    resetArray();
  }, [resetArray]);

  async function bubbleSort() {
    const animations = await BubbleSort(arr);
    const prevAnimation = [];
    for (let i = 0; i < animations.length; i++) {
      prevAnimation.push(animations[i].comparision);
      prevAnimation.push(animations[i].comparision);
      prevAnimation.push(animations[i].swap);
    }
    for (let i = 0; i < prevAnimation.length; i++) {
      var bars = document.getElementsByClassName("array-bars");
      const colorChange = i % 3 !== 2;
      if (colorChange) {
        const color = i % 3 === 0 ? "green" : "rgb(255, 0, 234)";
        const [one, two] = prevAnimation[i];
        setTimeout(() => {
          bars[one].style.backgroundColor = color;
          bars[two].style.backgroundColor = color;
        }, i * DELAY);
      } else {
        setTimeout(() => {
          const [one, two] = prevAnimation[i];
          const tempHeight = bars[two].style.height;
          bars[two].style.height = `${bars[one].style.height}`;
          bars[one].style.height = `${tempHeight}`;
        }, i * DELAY);
      }
    }
  }

  async function quickSort() {
    const animations = await QuickSort(arr);
    console.log(animations, arr)
    const prevAnimation = [];
    for (let i = 0; i < animations.length; i++) {
      if(!animations[i].swapPivot) {
        prevAnimation.push(animations[i].comparision)
        prevAnimation.push(animations[i].comparision)
        prevAnimation.push(animations[i].swap)
      }else{
        prevAnimation.push(animations[i].swapPivot)
        prevAnimation.push(animations[i].swapPivot)
        prevAnimation.push(animations[i].swapPivot)
      }
    }
    console.log(prevAnimation);
    for (let i = 0; i < prevAnimation.length; i++) {
      var bars = document.getElementsByClassName("array-bars");
      const colorChange = i % 3 !== 2;
      if (colorChange) {
        const color = i % 3 === 0 ? "green" : "rgb(255, 0, 234)";
        const [one, two] = prevAnimation[i];
        setTimeout(() => {
          bars[one].style.backgroundColor = color;
          bars[two].style.backgroundColor = color;
        }, i * DELAY);
      } else {
        setTimeout(() => {
          const [one, two] = prevAnimation[i];
          const tempHeight = bars[two].style.height;
          bars[two].style.height = `${bars[one].style.height}`;
          bars[one].style.height = `${tempHeight}`;
        }, i * DELAY);
      }
    }
  }

  function mergeSort() {
    const animations = MergeSort(arr);
    console.log(animations)
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bars');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'green' : 'rgb(255, 0, 234)';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * DELAY);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * DELAY);
      }
    }
  }

  return (
    <div className='App'>
    <h1>Sorting Visualizer</h1>
    <div className="array-container">
      {arr.map((value, id) => (
        <div
          className="array-bars"
          key={id}
          style={{ height: `${value}px` }}
        ></div>
      ))}
      <div className="button-container">
        <button className= 'visualizer' onClick={() => resetArray()}>Generate new Array</button>
        <button className= 'visualizer' onClick={() => bubbleSort()}>Bubble Sort</button>
        <button className= 'visualizer' onClick={() => mergeSort()}>Merge Sort</button>
        <button className= 'visualizer' onClick={() => quickSort()}>Quick Sort</button>
      </div>
    </div>
    </div>
  );
};

export default Sortingvisualizer;

