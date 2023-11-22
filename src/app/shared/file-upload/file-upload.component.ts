import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  
  selectedFile: File | undefined;
  //Progress Bar
  counter: number = 0;
  incrementAmount: number = 10; // Amount to increment the counter by
  delayBetweenIncrements: number = 10; // Delay in milliseconds

  @Output() onFileChangeEvent = new EventEmitter<any>();
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onFileChange(event: any) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      this.selectedFile = fileList[0];            
    }
    this.incrementCounter();
    this.onFileChangeEvent.emit(event);
  }
  incrementCounter() {
    setTimeout(() => {
      this.counter += this.incrementAmount;     
      if (this.counter < 100) {
        this.incrementCounter(); // Continue incrementing if not reached a desired value
      }
    }, this.delayBetweenIncrements);
  }
}
