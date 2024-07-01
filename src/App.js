import './App.css';
import { Helmet } from 'react-helmet';
import React from "react";
import Home from './screens/home';
import Layout from './layout';
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import OurStory from './screens/about';
import What from './screens/what';
import Single from './screens/programs/single';
import Impacts from './screens/impacts';
import Team from './screens/team';
import News from './screens/news';
import Recognition from './screens/recognition';
import Contact from './screens/contact';
import Admins from './screens/admin';
import ReportForm from './screens/admin/reports';
import Youtube from './screens/youtube';
import ReportsUser from './screens/reports';
import SuccessStories from './screens/successStory';
import NewBlogForm from './screens/admin/blog';

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      </Helmet>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<OurStory />} />
            <Route path="what" element={<What />} />
            <Route path="single" element={<Single />} />
            <Route path="impacts" element={<Impacts />} />
            <Route path="team" element={<Team />} />
            <Route path="news" element={<News />} />
            <Route path="success-stories" element={<SuccessStories />} />
            <Route path="contact" element={<Contact />} />
            <Route path="recognitions" element={<Recognition />} />
            <Route path="admins" element={<Admins />} />
            <Route path="blogUpload" element={<NewBlogForm />} />
            <Route path="AdminReports" element={<ReportForm />} />
            <Route path="reports" element={<ReportsUser />} />
            <Route path="youtube" element={<Youtube />} />
          </Route>
        </Routes>
      </HashRouter>
      {/* <Home /> */}
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
