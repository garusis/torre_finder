import React, { useContext, createContext } from "react";
import MUISkeleton from "@material-ui/lab/Skeleton";
import PropTypes from "prop-types";

export const LoadingContext = createContext(false);

function Skeleton({ children, ...props }) {
  const isLoading = useContext(LoadingContext);
  if (!isLoading) return children;
  return <MUISkeleton {...props} />;
}

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  variant: PropTypes.oneOf(["text", "rect", "circle"]),
};

export default Skeleton;
