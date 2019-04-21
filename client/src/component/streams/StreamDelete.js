import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onRenderAction() {
    return (
      //react fragment is used to not affect the dom when it is rendered on the screen
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui negative basic button"
        >
          Delete
        </button>
        <Link to="/" className="ui basic button">
          cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are You Sure To Delete  The Stream?";
    }

    return `Are You Sure To Delete  The Stream ${this.props.stream.title}`;
  }
  render() {
    return (
      <Modal
        title="Delete Stream "
        content={this.renderContent()}
        action={this.onRenderAction()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToprops = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(
  mapStateToprops,
  { fetchStream, deleteStream }
)(StreamDelete);
