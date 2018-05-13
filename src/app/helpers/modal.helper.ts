import { EmployInt } from '../interfaces/cv/employ/employ.int';
import { ProjectInt } from '../interfaces/cv/project/project.int';
import { ModalTitleInt } from '../interfaces/modal/modal.int';

export const getModalDataTitleFromEmploy = (employ: EmployInt) => ({
  title: employ.employer,
  color: employ.color,
  backgroundColor: employ.backgroundColor
}) as ModalTitleInt;

export const getModalDataTitleFromProject = (project: ProjectInt) => ({
  title: project.title,
  color: project.color,
  backgroundColor: project.backgroundColor
}) as ModalTitleInt;
