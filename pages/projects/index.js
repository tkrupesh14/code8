import { useEffect } from "react";
import Explorecategories from "../../components/project/Explorecategories";
import Projects from "../../components/project/projects";
import { useAllProjectsQuery } from "../../redux/features/allSlice";
import styles from "../../styles/projects/Projectpage.module.css";
const Projectpage = () => {
  const allProjects = useAllProjectsQuery();
  useEffect(() => {
    allProjects.refetch();
  }, []);
  return (
    <div className={`${styles.Projectpage}`}>
      <div className={`${styles.proj_head}`}>
        <div className={`${styles.proj_intro}`}>
          <div className={`${styles.proj_page_heading}`}>
            Web Devlopment Projects
          </div>
          <div className={`${styles.proj_sub_intr}`}>
            Interesting and completely free projects for all web developers.
          </div>
        </div>
        <div className={`${styles.proj_face}`}>
          <img src="/images/projects/Projectpage.png" alt="" />
        </div>
      </div>
      <div className={`${styles.Projects_holder}`}>
        {allProjects?.data?.projects?.map((project) => (
          <Projects
            key={project?._id}
            title={project?.title}
            description={project?.description}
            id={project?._id}
          />
        ))}
      </div>
      <div className={`${styles.Categories}`}>
        <h1>Explore our categories</h1>
        <div className={`${styles.Category_holder}`}>
          <Explorecategories
            topic={"Web Development"}
            image={"category3"}
            options={false}
          />
          <Explorecategories
            topic={"Android Development"}
            image={"category2"}
            options={false}
          />
          <Explorecategories
            topic={"Blockchain"}
            image={"category1"}
            options={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Projectpage;
