// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Contributors, Guide, ProjectList } from "./pages";
import MasterLayout from "./layouts";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <MasterLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contributors" element={<Contributors />} />
            <Route path="/Docs" element={<Guide />} />
            <Route path="/projects" element={<ProjectList />} />
          </Routes>
        </MasterLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
