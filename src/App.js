import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  let data = require('./portfolio_shared_data.json')
  console.log(data)
  let resume = require('./resume.json')
  console.log(data)
  let projects = require('./projects.json')
  console.log(data)
  let skills = require('./skills.json')
  console.log(data)

  return (
    <div className="App">
      <AboutMe data={data} resume={resume} projects={projects} skills={skills}/>
      <Skills data={data} resume={resume} projects={projects} skills={skills}/>
      <Projects data={data} resume={resume} projects={projects} skills={skills}/>
      <Experience data={data} resume={resume} projects={projects} skills={skills}/>
    </div>
  );
}

export default App;
