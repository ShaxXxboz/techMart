import React from "react";
import Typography from "@material-ui/core/Typography";

const NotFoundPage = () => {
  return (
    <>
      <Typography variant="h1" align="center" color="textSecondary" paragraph>
        404
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        The page you were looking for was not found.
      </Typography>
    </>
  );
};

export default NotFoundPage;
