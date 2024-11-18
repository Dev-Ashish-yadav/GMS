import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AppService } from '../../services/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrl: './create-member.component.scss'
})
export class CreateMemberComponent implements OnInit {

  membreFrom!:FormGroup;
  isEdit:boolean=false;
  editDataObj:any={};
  memberId:number = 0;
  constructor(
    private appService : AppService,
    private route: ActivatedRoute,
    private router : Router
  ){}
  ngOnInit(): void {
    this.fomrInit();
    this.route.params.subscribe(params => {
      this.memberId = Number(params['id']); // Access the 'id' parameter from the URL
      if(this.memberId && !Number.isNaN(this.memberId)){
        this.isEdit = true;
        this.editDataObj =  this.appService.getDataById(this.memberId);
        this.patchData();
      }else{
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Invalid ID Found',
        //   text: 'Please try again.',
        //   showConfirmButton: true,
        //   timer: 2000
        // });
      }

      
    });
  }

  patchData(){
    if(this.editDataObj){
      this.membreFrom.patchValue({...this.editDataObj});
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Invalid ID Found',
        text: 'Data not found.',
        showConfirmButton: true,
        timer: 2000
      });
    }
  }


  formReset(){
    this.membreFrom.reset();
    this.membreFrom.patchValue({
      memeberShipNo:0,
      isNewMember:true
    });
  }

  formSubmit(){
    if(this.membreFrom.invalid){
      alert("Please fill member name");
      return;
    }

    let data = this.membreFrom.value;
    if(this.isEdit){
      this.appService.removeDataById(this.memberId);
    }else{
      data.memeberShipNo = (this.appService.getData().length+1);
    }

    
    console.log("form",data);

    if(this.appService.setData(data)){
      Swal.fire({
        icon: 'success',
        title: 'Data added successfully!',
        text: 'Member details added.',
        showConfirmButton: true,
        timer: 1000
      });

      this.formReset();
      this.router.navigate(['/dashboard/view-member'])
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Data not Inserted',
        text: 'Please try again.',
        showConfirmButton: true,
        timer: 2000
      });
    }
  }

  fomrInit(){
    this.membreFrom = new FormGroup({
      memeberShipNo : new FormControl(0,Validators.required),
      memberName : new FormControl(null,Validators.required),
      dob : new FormControl(null,),
      aadharNo : new FormControl(null,),
      panNo : new FormControl(null,),
      email : new FormControl(null,),
      phone : new FormControl(null,),
      gender : new FormControl(null,),
      memberShipType : new FormControl(null,),
      planType : new FormControl(null,),
      address : new FormControl(null,),
      medicalHistory : new FormControl(null,),
      
      profilePhoto : new FormControl(null,),
      aadharCardPhoto : new FormControl(null,),
      panCardPhoto : new FormControl(null,),

      isNewMember : new FormControl(true,),
      status : new FormControl(true,),
      });
  }



}
