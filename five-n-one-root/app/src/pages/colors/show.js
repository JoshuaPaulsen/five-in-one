import React from "react";
import { Link } from "react-router-dom";
import { getColor } from "../../action-creators/colors"
import { connect } from "react-redux"
import Component from "@reactions/component"

const ShowColor = props => (
  <Component didMount={() => props.getColor(props.match.params.id)}>
    {() =>
      props.currentColor.id === props.match.params.id ? (
        <div style={{ backgroundColor: props.currentColor.value }}>
          <h1>{props.currentColor.name}</h1>
          <Link to={`/colors/${props.currentColor.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button
            onClick={e =>
              props.removeColor(props.currentColor.id, props.history)
            }
          >
            Remove
          </button>
        </div>
      ) : (
        <h1>Loading Color...</h1>
      )
    }
  </Component>
);

const mapStateToProps = state => {
  return {
    currentColor: state.currentColor
    //  id: state.currentColor.id,
    //name: state.currentColor.name,
    //value: state.currentColor.value
  };
};

const mapActionToProps = dispatch => {
  return {
    getColor: id => dispatch(getColor(id)),
    removeColor: () => null
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(ShowColor);
