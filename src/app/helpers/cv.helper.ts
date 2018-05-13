import { CurriculumInt } from '../interfaces/cv/curriculum.int';
import { EmployInt } from '../interfaces/cv/employ/employ.int';
import { ProjectInt } from '../interfaces/cv/project/project.int';

export const getEmployerFromCv = (cv: CurriculumInt, employerId: number): EmployInt =>
  cv.employment.history.find((employ: EmployInt) => employ.id === employerId);

export const getEmployerFromProject = (employs: EmployInt[] = [], employerId: number): EmployInt =>
  employs.find((employ: EmployInt) => employ.id === employerId);

export const getProject = (projects: ProjectInt[] = [], idProject: number): ProjectInt =>
  projects.find((project: ProjectInt) => project.id === idProject);
