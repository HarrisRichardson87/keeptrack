import './App.css';
import ProjectsPage from './projects/ProjectsPage';
import Greeter from './greeter/Greeter';
import { Project } from './projects/Project';
import { useState } from 'react';
import { useEffect } from 'react';
import { projectAPI } from './projects/projectAPI';


function App() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [loading, setLoading] = useState(false);
  	const [error, setError] = useState<string | undefined>(undefined);

	useEffect(() => {
		setLoading(true);
		projectAPI.get(1)
			.then((projects: Project[]) => {
				setProjects(projects);
				setLoading(false);
			})
			.catch((error: Error) => {
				setError(error.message);
				setLoading(false);
			});
	}, []);
	const saveProject = (project: Project) => {
		let updatedProjects = projects.map((p: Project) => {
			  return p.id === project.id ? project : p;
			});
		setProjects(updatedProjects);	
	};

	return (
		<div className="App">
			<Greeter first="Hello" last='World' />
			
			{error && (
				<div className="row">
					<div className="card large error">
					<section>
						<p>
						<span className="icon-alert inverse "></span>
						{error}
						</p>
					</section>
					</div>
				</div>
			)}
		    {loading && (
		        <div className="center-page">
		          <span className="spinner primary"></span>
		          <p>Loading...</p>
		        </div>
			)}
			<ProjectsPage projects={projects} onSave={saveProject} />
		</div>
	);
}

export default App;
