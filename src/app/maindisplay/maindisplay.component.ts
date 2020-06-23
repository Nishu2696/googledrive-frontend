import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerservService } from '../serverserv.service';
import { ToastService } from '../toast.service';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-maindisplay',
  templateUrl: './maindisplay.component.html',
  styleUrls: ['./maindisplay.component.css']
})
export class MaindisplayComponent implements OnInit {

  faPlus=faPlus;
  loader = true;
  userData;
  perecentUsed;

  constructor(
    private router: Router,
    public serv: ServerservService,
    private toastService: ToastService
  ) { 
    this.serv.getUserData().subscribe(
      (data) => {
        this.loader = false;
        // console.log(data);
        this.userData = data;
        this.serv.updateBucketName(data['bucketName']);
        this.serv.totalsize=parseFloat('0.5');
      },
      (err) => {
        console.log(err);
        // alert(err.error.message);
        this.showDanger(err.error.message);
        this.router.navigate(['/']);
      }
    );
    serv.getObjectList().subscribe((data)=>{
      console.log(data);
      this.serv.updateObjectList(data);
      let total=0;
      data.Contents.forEach((item)=>{
        total+=item.Size;
      })
      console.log(total);
      console.log(total/ 1024 / 1024 / 1024);
      this.serv.currenttotal=(total/ 1024 / 1024 / 1024).toFixed(4);
      this.perecentUsed=String((parseFloat(this.serv.currenttotal)/this.serv.totalsize)*100)+"%";
      console.log(this.perecentUsed,this.serv.currenttotal,this.serv.totalsize)
    },(err)=>{
      console.log(err);
    })
  }

  ngOnInit(): void {
  }

  showStandard(msg) {
    this.toastService.show(msg);
  }

  showSuccess(msg) {
    this.toastService.show(msg, {
      classname: 'bg-success text-light',
      delay: 2000,
    });
  }

  showDanger(msg) {
    this.toastService.show(msg, {
      classname: 'bg-danger text-light',
      delay: 5000,
    });
  }


  // component.ts for drag and drop
  // ADD THIS AT THE TOP 
  // import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';


  // public files: NgxFileDropEntry[] = [];
 
  // public dropped(files: NgxFileDropEntry[]) {
  //   this.files = files;
  //   for (const droppedFile of files) {
 
  //     // Is it a file?
  //     if (droppedFile.fileEntry.isFile) {
  //       const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
  //       fileEntry.file((file: File) => {
 
  //         // Here you can access the real file
  //         console.log(droppedFile.relativePath, file);
 
  //         /**
  //         // You could upload it like this:
  //         const formData = new FormData()
  //         formData.append('logo', file, relativePath)
 
  //         // Headers
  //         const headers = new HttpHeaders({
  //           'security-token': 'mytoken'
  //         })
 
  //         this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
  //         .subscribe(data => {
  //           // Sanitized logo returned from backend
  //         })
  //         **/
 
  //       });
  //     } else {
  //       // It was a directory (empty directories are added, otherwise only files)
  //       const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
  //       console.log(droppedFile.relativePath, fileEntry);
  //     }
  //   }
  // }
 
  // public fileOver(event){
  //   console.log(event);
  // }
 
  // public fileLeave(event){
  //   console.log(event);
  //}

}
