import { ApplicationState } from 'store';

const getProjects = (state: ApplicationState) => state.projects.data;
const getTotalProjects = (state: ApplicationState) => state.projects.data.length;
const getProjectsSelected = (state: ApplicationState) => state.projects.selected;

const projectsSelectors = {
  getProjects,
  getTotalProjects,
  getProjectsSelected,
};

export default projectsSelectors;
