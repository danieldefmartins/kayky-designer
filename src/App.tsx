import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import Home from "./pages/Home";
import Story from "./pages/Story";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [location]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/story" component={Story} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route>
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-display text-4xl text-accent">Page not found</h1>
            </div>
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}
