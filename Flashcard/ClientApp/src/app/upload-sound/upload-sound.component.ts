import { HttpClient, HttpEventType } from "@angular/common/http";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { environment } from "../../environments/environment";


@Component({
  selector: 'app-uploadSound',
  templateUrl: './upload-sound.component.html',
  styleUrls: ['./upload-sound.component.css']
})
export class UploadSoundComponent implements OnInit {

  public progress: number;
  public message: string;
  public message_error: string;
  errorflag: boolean;
  @Output() public onSoundUploadFinished = new EventEmitter();

  constructor(private http: HttpClient) { }

    ngOnInit(): void {
      this.errorflag = false;
  }

  public uploadFile = (files) => {
    if (files.length === 0) {
      return;
    }
    let reader = new FileReader();
    if (files && files.length > 0) {
      let file = files[0];

      this.message_error = 'Nem jó a fájlformátum!';
      var _validFileExtensions = ["audio/mpeg"];
      for (var j = 0; j < _validFileExtensions.length; j++) {
        var sCurExtension = _validFileExtensions[j];
        if (file.type.substr(file.type.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
          this.errorflag = false;
          this.message_error = '';
        }
      }
      if (this.errorflag == false) {
          let sound = new Audio();
          sound.src = window.URL.createObjectURL(file);
          reader.readAsDataURL(file);
          setTimeout(() => {
            this.message_error = "";
            let fileToUpload = <File>files[0];
            const formData = new FormData();
            let date = new Date();
            let currentDate = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + "_" + date.getHours();
            let fileToUploadName = currentDate + "_" + fileToUpload.name;
            formData.append('file', fileToUpload, fileToUploadName);

            this.http.post(`${environment.apiBaseUrl}/api/UploadAudio`, formData, { reportProgress: true, observe: 'events' })
              .subscribe(event => {
                if (event.type === HttpEventType.UploadProgress)
                  this.progress = Math.round(100 * event.loaded / event.total);
                else if (event.type === HttpEventType.Response) {
                  this.message_error = '';
                  this.message = 'Sikeres hangfeltöltés!';
                  this.onSoundUploadFinished.emit(event.body);
                  this.errorflag = true;
                }
              });
          }, 2000);
        }
    }
  }

}
