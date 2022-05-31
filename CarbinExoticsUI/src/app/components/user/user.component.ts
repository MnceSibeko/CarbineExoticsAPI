import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/helpers';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  registerForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    fullname: new FormControl(''),
    creditCard: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder,
    private userService : UserService,
    private route: Router,
    private notifyService : NotificationService
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.email, Validators.required ] ],
      password: ['', [ Validators.required, Validators.minLength(6) ]]
    });

    this.registerForm = this.formBuilder.group({
      email:['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      fullname: ['', [Validators.required]],
      creditCard: ['', [Validators.required, Validators.maxLength(10)]],
      address: ['', [Validators.required]]
    },
    {
      validator: ConfirmedValidator('password', 'confirmPassword')
    });
  }

  title = 'CarbineAPI_FrontEnd';


  register(data: any){
    console.log(data);
  }

  login(data: any){
    console.log(data);
    this.userService.login(data).subscribe( x => {
      sessionStorage.setItem('jwt', x.token);
      this.route.navigateByUrl('/cars')
    })
    this.notifyService.showSuccess("Successfuly logged in!")
  }

  createUser(data: any){
    console.log(data);
    this.userService.createUser(data).subscribe(x => {
      console.log(x);
    })
    this.notifyService.showSuccess("Registration succesful!")
  }

  get f() {
    return this.loginForm.controls;
  }

  get regForm() {
    return this.registerForm.controls;
  }
}
