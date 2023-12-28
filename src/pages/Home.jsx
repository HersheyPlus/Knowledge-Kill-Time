import "../components/Home/home.module.css"
import Introduction from "../components/Home/Introduction";

function HomePage() {
  return (
    <div className="h-fit p-4 md:p-8 md:py-10 bg-white dark:bg-black">
      <Introduction /> 
    </div>
  );
}

export default HomePage;
