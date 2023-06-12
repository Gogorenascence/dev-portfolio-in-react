function AboutMe(props) {
    const { data } = props;

    return (
      <div className="white-space">
        <h1>{props.data.basic_info.name}</h1>
      </div>
    );
  }

  export default AboutMe;
