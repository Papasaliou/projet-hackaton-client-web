import {Component, OnInit} from '@angular/core';
import {InnovativeMemoryService} from "./services/innovative-memory.service";
import {Discussion} from "../utils/discussion";

// declare function Tester(): any;
// declare function fixed_div(): any;
// declare function handleScroll():any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  question!:string;
  file!:File;
  result!:string;
  discussions:Array<Discussion>=[];
  discussion!:Discussion;
  constructor(private innovativeMemoryService:InnovativeMemoryService) {
  }
  onFileselected(event:Event){
    const fileInput = event.target as HTMLInputElement;
    if(fileInput.files && fileInput.files.length > 0){
      this.file = fileInput.files[0];
    }
  }
  ngOnInit() {
    // Tester();
    // fixed_div();
    // handleScroll();
  }
  title = 'client-web';

  uploadFile() {
    if(this.file){
      this.innovativeMemoryService.upload(this.file).subscribe({
      next: value => {
        console.log("le document est bien envoye")
      },
        error:err => {
        console.log("erreur de soumission du fichier"+ err)
      }
      }

      )
    }

  }

  chatComponent(){
    console.log("===================>"+this.question)
    this.discussion.messages=this.question;
    this.discussion.identite=false;
    this.discussions.push(this.discussion)
    this.innovativeMemoryService.chat(this.question).subscribe({
      next: result=>{
        this.result = result;
        this.discussion.messages=this.question;
        this.discussion.identite=true;
        this.discussions.push(this.discussion)
    },
      error: err=>{
        console.log("Pas de reponse"+err);
        // localStorage.ge
      }
    })

  }
}
