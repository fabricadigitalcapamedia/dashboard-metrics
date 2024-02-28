import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-servicio',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './crearServicio.component.html',
  styleUrl: './crearServicio.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CrearServicioComponent implements OnInit {
  

  openTab = 0;
  public fb = inject(FormBuilder);
  public form: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      nameservice: [null],
      enviroments: this.fb.array(
        [
          this.addEnvironmentDev(),
          this.addEnvironmentQA(),
          this.addEnvironmentProd(),
          this.addEnvironmentHotFix(),
          this.addEnvironmentTraining(),
          this.addEnvironmentPreProd(),
        ]
      )
    })
  }

  toggleTabs($tabNumber: number){
    this.openTab = $tabNumber;
  }

  addEnvironmentDev() {
    return this.fb.group({
      name_enviroment: ['DEV'],
      nameSpace: [null],
      url_aro: ['http://www.desarrollo.com'],
      url_hlb: [null],
      methods: this.fb.array([])
    });
  }

  addEnvironmentQA() {
    return this.fb.group({
      name_enviroment: ['QA'],
      nameSpace: [null],
      url_aro: ['http://www.QA.com'],
      url_hlb: [null],
      methods: this.fb.array([])
    });
  }

  addEnvironmentProd() {
    return this.fb.group({
      name_enviroment: ['PROD'],
      nameSpace: [null],
      url_aro: ['http://www.prod.com'],
      url_hlb: [null],
      methods: this.fb.array([])
    });
  }

  addEnvironmentHotFix() {
    return this.fb.group({
      name_enviroment: ['HOTFIX'],
      nameSpace: [null],
      url_aro: ['http://www.hotfix.com'],
      url_hlb: [null],
      methods: this.fb.array([])
    });
  }

  addEnvironmentTraining() {
    return this.fb.group({
      name_enviroment: ['TRAINING'],
      nameSpace: [null],
      url_aro: ['http://www.training.com'],
      url_hlb: [null],
      methods: this.fb.array([])
    });
  }
  addEnvironmentPreProd() {
    return this.fb.group({
      name_enviroment: ['PRE-PROD'],
      nameSpace: [null],
      url_aro: ['http://www.pre-prod.com'],
      url_hlb: [null],
      methods: this.fb.array([])
    });
  }

  createRoleSecurity() {
    return this.fb.group({
      name: [null],
      iss: [null],
      sub: [null],
      aud: [null],
      enviroment_salesforce: [null],
      grant_type: [null],
      authorization: [null],
      url_salesforce: [null],
      cookie: [null],
      key: [null]
    });
  }

  createMethod() {
    return this.fb.group({
      name: [null, Validators.required],
      type: [null, Validators.required],
      route_salesforce: [null],
      role_security_salesforce: this.fb.array([this.createRoleSecurity()])
    });

  }

  get environmentTabs() {
    return this.form.get('enviroments') as FormArray;
  }

  getMethodsTabs(environmentIndex: number, key: string, form: FormGroup) {
    return (this.form.get('enviroments') as FormArray).at(environmentIndex).get('methods') as FormArray;
  }

  getRoleSecurityTabs(environmentIndex: number, methodIndex: number, key: string, form: FormGroup) {
    return this.getMethodsTabs(environmentIndex, key, form).at(methodIndex).get('role_security_salesforce') as FormArray;
  }
  
  addMethod(environmentIndex: number): void {
    const methods = (this.form.get('enviroments') as FormArray).at(environmentIndex).get('methods') as FormArray;
    methods.push(this.createMethod());
  }

  removeMethod(environmentIndex: number, methodIndex: number): void {
    const methods = (this.form.get('enviroments') as FormArray).at(environmentIndex).get('methods') as FormArray;
    methods.removeAt(methodIndex);
  }
  


  
  
}
