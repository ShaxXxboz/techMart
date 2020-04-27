import React from "react";
import ApiService from "../../services/api-service";

const apiServiceContext = React.createContext(new ApiService());

export default apiServiceContext;
