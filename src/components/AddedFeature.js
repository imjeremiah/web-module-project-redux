import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions";

const AddedFeature = props => {
  const { feature } = props;
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeFeature(feature)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeature })(AddedFeature);
