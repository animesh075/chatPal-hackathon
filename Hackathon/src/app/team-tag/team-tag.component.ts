import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-team-tag',
  templateUrl: './team-tag.component.html',
  styleUrls: ['./team-tag.component.css']
})
export class TeamTagComponent implements OnInit {
  public users:any;
  alert=true;
  public selectedTeam:any[]=[]
  phone:any;
  timer:any;
  phoneSearch:String='';
  conutrySearch:String='';
  countryList:any;
  states:any;
  namesInCart=[]
  selectedCountry:any={
    id:0,name:''
  };
  selectedState:any={
    id:0,name:''
  };
  cities:any;
  url="../../assets/img/upload-cloud.svg"
  reactiveForm =this.fb.group({
  bussinessName: ['',[Validators.required]],
  address:['',[Validators.required]],
  country: ['',[Validators.required]],
  state: ['',[Validators.required]],
  city: ['',[Validators.required]],
  zipcode: ['',[Validators.required]],
  image:[''],
  choose:['',[Validators.required]],
  phone: ['',[Validators.required]],
  })
  @ViewChild('fileInput')
  el!: ElementRef;
  imageUrl: any = "../../assets/img/upload-cloud.svg";
  editFile: boolean = true;
  removeUpload: boolean = false;

  constructor(
    private commonService: CommonService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.commonService.getNumber().subscribe(num=>{
      this.users=num;
    })
    this.commonService.getCountries().subscribe(res=>{
      this.countryList=res;
    })
    this.commonService.getStates(1).subscribe(res=>{
      this.states=res;
    })
    this.commonService.getCities(1).subscribe(res=>{
      this.cities=res;
    })
  }
  addDetails(){
      this.commonService.submit(this.reactiveForm.value).subscribe((res)=>{
        console.log("Get Data From Service",res)
      })
  }

sendData(val:any){
  this.timer=setTimeout(()=>{
    if(this.phone){
      this.users=this.users.filter((res:any)=>{
        this.alert=true;
        return res.phone.match(this.phone);
      })
    }
  },500)
}

addTeam(currentUser:any){
  this.selectedTeam.push(currentUser);
}

delete(currentUser:any){
  this.selectedTeam.splice(currentUser,1)
}

createData(){
  console.log("All data available",this.reactiveForm.value);
  this.reactiveForm.reset();
}

uploadFile(event:any) {
  let reader = new FileReader();
  let file = event.target.files[0];
  if (event.target.files && event.target.files[0]) {
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageUrl = reader.result;
      this.reactiveForm.patchValue({
        file: reader.result
      });
      this.editFile = false;
      this.removeUpload = true;
    }
    this.cd.markForCheck();
  }
}
rotateLeft(){
  let img:any=document.getElementById('myImg');
  img.style.transform=`rotate(${90}deg)`
}
removeUploadedFile() {
  let newFileList = Array.from(this.el.nativeElement.files);
  this.imageUrl = "../../assets/img/upload-cloud.svg";
  this.editFile = true;
  this.removeUpload = false;
  this.reactiveForm.patchValue({
    file: [null]
  });
}
}
