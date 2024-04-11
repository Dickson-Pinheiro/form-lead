import { Routes, Route, BrowserRouter } from "react-router-dom";
import BasicLead from "./pages/basic-lead/BasicLead";
import VideoPage from "./pages/video-page/VideoPage";
import Colab from "./pages/colab/Colab";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasicLead />} />
                <Route path="/course" element={<VideoPage />} />
                <Route path="/colab" element={<Colab />} />
            </Routes>
        </BrowserRouter>

    )
}