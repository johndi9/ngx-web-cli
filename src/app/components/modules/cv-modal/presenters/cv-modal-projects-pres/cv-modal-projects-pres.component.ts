import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { getModalDataTitleFromProject } from '../../../../../helpers/modal.helper';
import { EmployInt } from '../../../../../interfaces/cv/employ/employ.int';
import { ProjectInt } from '../../../../../interfaces/cv/project/project.int';

@Component({
  selector: 'app-cv-modal-projects-pres',
  templateUrl: './cv-modal-projects-pres.component.html',
  styleUrls: [ './cv-modal-projects-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalProjectsPresComponent {
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() project: ProjectInt;
  @Input() employ: EmployInt;

  getModalDataTitleFromProject = getModalDataTitleFromProject;

  closeModal() {
    this.onCloseModal.emit();
  }
}
