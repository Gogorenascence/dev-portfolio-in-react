function Projects(props) {
    const { data, resume, projects, skills } = props;

    return (
      <div className="white-space">
        <h1>{props.data.basic_info.name}</h1>
      </div>
    );
  }

  export default Projects;
