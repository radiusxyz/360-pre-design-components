import styled from "styled-components";

const BentProgressBar = (props) => {
  const { completed } = props;

  const containerStyles = {
    height: 20,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#6a1b9a",
    borderRadius: "inherit%",
    textAlign: "right",
    transition: "width 0.2s ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  const outer = {
    borderRadius: "100px 100px 0px 0px",
    borderBottom: 0,
    backgroundColor: "blue",
    width: 200,
    height: 100,
    position: "relative",
  };

  const inner = {
    borderRadius: "90px 90px 0px 0px",
    borderBottom: 0,
    backgroundColor: "white",
    width: 160,
    height: 80,
    position: "absolute",
    top: 20,
    left: 20,
  };

  return (
    // <div style={containerStyles}>
    //   <div style={fillerStyles}>
    //     <span style={labelStyles}>{`${completed}`}</span>
    //   </div>
    // </div>
    <div style={outer}>
      <div style={inner}></div>
    </div>
  );
};

export default BentProgressBar;
