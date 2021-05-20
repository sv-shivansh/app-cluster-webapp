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
    generateNewArray();
  }, [generateNewArray]);

  const [delay, setDelay] = useState(10);

  const onChange = (e) => {
    setDelay(e.target.value);
  };

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
        <label for="delay">Delay : </label>
        <input
          type="range"
          id="delay"
          min="10"
          max="1000"
          disabled={isSorting}
          onChange={(e) => onChange(e)}
        ></input>
        <button
          className="visualizer"
          disabled={isSorting}
          onClick={() => generateNewArray()}
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
