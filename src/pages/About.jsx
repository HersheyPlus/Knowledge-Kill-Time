// import Role from "../components/About/Role";
import AdminRole from "../components/About/AdminRole";
// import { members, roles } from "../components/About/roles";

function AboutPage() {
  // const { design, frontend, backend, infra } = roles;
  
  return (
      <div className="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 bg-white dark:bg-gray-900">
        <h1 className="text-3xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white text-black text-center mb-12">
          Developer Team
        </h1>
        <AdminRole />
        {/* <div className="mx-auto flex flex-col md:flex-row md:justify-between mb-8 md:mb-12 xl:mb-16 w-[85%] xl:w-[95%]">
          <div className="grid grid-cols-2 gap-6 md:gap-4 xl:mx-auto">
            <Role roles={[design,frontend,infra]} links={members[0].links} />
            <Role roles={[frontend,backend]} link={"#"} />
          </div>
        </div> */}
      </div>
  );
}

export default AboutPage;
