import React from "react";
import { createRoot } from "react-dom/client"

import App from "./App";

const divHtml = document.getElementById('root')
const root = createRoot(divHtml)

root.render( < App / > )