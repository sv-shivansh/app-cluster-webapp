/* eslint-disable no-loop-func */
import React, { useEffect, useState } from "react";
import { generateNewArray } from "../../../actions/array";
import { bubbleSort } from "../../../actions/bubblesort";
import { quickSort } from "../../../actions/quicksort";
import { mergeSort } from "../../../actions/mergesort";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./SortingVisualizer.css";

const Sortingvisualizer = ({
  generateNewArray,
  bubbleSort,
  array,
  isSorting,
  quickSort,
  mergeSort,
}) => {
  useEffect(() => {
    generateNewArray(arraySize);
  }, [generateNewArray]);

  const [delay, setDelay] = useState(10);
  const [arraySize, setArraySize] = useState(100);

  const onChange = (e) => {
    console.log(e.target.value);
    setDelay(e.target.value);
  };

  const changeSize = (e) => {
    console.log(e.target.value);
    setArraySize(e.target.value);
    generateNewArray(arraySize)
  }

  async function BubbleSort() {
    bubbleSort(array.slice(), delay);
  }

  async function QuickSort() {
    quickSort(array.slice(), delay);
  }

  function MergeSort() {
    mergeSort(array.slice(), delay);
  }

  return (
    <div>
      <div className="App"> Sorting Visualizer</div>
      <div className="array-container">
        {array.map((value, id) => (
          <div
            className="array-bars"
            key={id}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <div className="button-container">
        <div className="size-container">
        <label for="size">Size : </label>
        <input
          type="range"
          id="size"
          min="10"
          max="120"
          defaultValue = {arraySize}
          disabled={isSorting}
          onChange={(e) => changeSize(e)}
        ></input>
        </div>
        <div className="speed-container">
          <div className="speed-selector">
            <label for="name"> Speed:</label>
            <input
              type="radio"
              name="speed"
              value="500" 
              onChange={(e) => onChange(e)}
              disabled={isSorting}
            />
          </div>
          <label for="500">Slow</label>
          <div className="speed-selector">
            <input
              type="radio"
              name="speed"
              value="250"
              onChange={(e) => onChange(e)}
              disabled={isSorting}
            />
            <label for="250">Medium</label>
          </div>
          <div className="speed-selector">
            <input
              type="radio"
              name="speed"
              value="10"
              defaultChecked="true"
              onChange={(e) => onChange(e)}
              disabled={isSorting}
            />
            <label for="10">Fast</label>
          </div>
        </div>
        <button
          className="visualizer"
          disabled={isSorting}
          onClick={() => generateNewArray(arraySize)}
        >
          Generate new Array
        </button>
        <button
          className="visualizer"
          disabled={isSorting}
          onClick={() => BubbleSort()}
        >
          Bubble Sort
        </button>
        <button
          className="visualizer"
          disabled={isSorting}
          onClick={() => MergeSort()}
        >
          Merge Sort
        </button>
        <button
          className="visualizer"
          disabled={isSorting}
          onClick={() => QuickSort()}
        >
          Quick Sort
        </button>
        <button className="visualizer" onClick={() => window.location.reload()}>
          Reset
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  array: state.sorting.array,
  isSorting: state.sorting.isSorting,
});
Sortingvisualizer.protoTypes = {
  generateNewArray: PropTypes.func.isRequired,
  bubbleSort: PropTypes.func.isRequired,
  quickSort: PropTypes.func.isRequired,
  mergeSort: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  generateNewArray,
  bubbleSort,
  quickSort,
  mergeSort,
})(Sortingvisualizer);
