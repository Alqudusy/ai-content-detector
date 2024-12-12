import { useState } from "react";
import Footer from "./components/Footer";
import InputField from "./components/InputField";
import NavBar from "./components/NavBar";
import Results from "./components/Result";

const App = () => {
  const [analysisResult, setAnalysisResult] = useState(null); // State to store API result

  // Function to handle the API call
  const analyzeText = async (text: string) => {
    const url = "https://ai-content-detector-ai-gpt.p.rapidapi.com/api/detectText/";
    const options = {
      method: "POST",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": "ai-content-detector-ai-gpt.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setAnalysisResult(JSON.parse(result)); // Update state with API response
    } catch (error) {
      console.error("Error fetching analysis:", error);
    }
  };

  return (
    <>
      <NavBar />
      <InputField analyzeText={analyzeText} />
      {analysisResult && <Results data={analysisResult} />} {/* Render Results only if analysisResult exists */}
      <Footer />
    </>
  );
};

export default App;
