import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";
import { useState } from "react";
interface ProjectListProps {
	projects: Project[];
	onSave: (project: Project) => void;
}
export default function ProjectList({ projects, onSave }: ProjectListProps) {
	const [projectBeingEdited, setProjectBeingEdited] = useState<Project | null>(null);
	
	const handleEdit = (project: Project) => {
		setProjectBeingEdited(project);
	};
	const handleCancel = () => {
		setProjectBeingEdited(null);
	};
	return (
		<div>
			<h1>Projects</h1>
			{projects.map((project: Project) => ( 
				<div key={project.id} className="cols-sm">
					<ProjectCard project={project} onEdit={handleEdit}/>
					{project === projectBeingEdited ? (
            			<ProjectForm 
							project={projectBeingEdited}
							onSave={onSave}
							onCancel={handleCancel} />
          			) : (
            		<ProjectCard project={project} onEdit={handleEdit} />
          			)}				
				</div>
			))};
		</div>
	)
}
