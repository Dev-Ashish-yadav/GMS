import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  sideBarStatus = signal<boolean>(true);

  //get member
  getData() {
    let data = localStorage.getItem("memberData");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  //set member
  setData(items: any) {
    try {
      let data = this.getData();
      data.push(items)
      localStorage.setItem("memberData", JSON.stringify(data));
      return true;
    } catch (e) {
      return false
    }
  }

  getDataById(id:number){
    let allData = this.getData();
    if(allData.length){
      let data =  allData.filter((x:any)=> x.memeberShipNo == id);
      if(data && data.length){
        return data[0];
      }else{
        return null;
      }
    }else{
      return null;
    }
  }
  removeDataById(id:number){
    let allData = this.getData();
    if(allData.length){
      let data =  allData.filter((x:any)=> x.memeberShipNo != id);
      if(data && data.length){
        localStorage.setItem("memberData", JSON.stringify(data));
        return true;
      }else{
        localStorage.removeItem("memberData");
        return true;
      }
    }else{
      return null;
    }
  }

}
