declare var ace : any
import { Component, OnInit } from '@angular/core';
import { CollaborationService } from '../../services/collaboration.service'
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {

	languages: string[] = ['Java', 'Python'];
	language: string = 'Java';
	editor: any;
	sessionID: string;

	defaultContent = {
		"Java": ` public class Example {
       	public static void main(String[] args) {
        	// Type your Java code here
       	}
	}`,

	'Python': `class Solution:
		def example():
    		# write your python code here.
		`	
	};

  	constructor(private collaboration: CollaborationService,
  				private route: ActivatedRoute) { }

  	ngOnInit() {

  		// use problem id as session id
        // since we subscribe the changes, every time the params changes
        // sessionId will be updated and the editor will be initilized
        this.route.params
        .subscribe(params => {
        	this.sessionID = params['id'];
        	this.initEditor();
        });
  	}

  	initEditor() : void {
  		this.editor = ace.edit("editor");
  		this.editor.setTheme("ace/theme/eclipse");

  		// setup collaboration socket
  		this.collaboration.init(this.editor, this.sessionID);
  		this.editor.lastAppliedChange = null;

  		// register change callback
  		this.editor.on("change", (e) => {
  			console.log('editor changes: ' + JSON.stringify(e));
            // check if the change is same as last change,
            // if they are the same, skip this change
            if (this.editor.lastAppliedChange != e) {
            	this.editor.change(JSON.stringify(e));
            }
  		});
  	}

  	resetEditor(): void {
  		this.editor.setValue(this.defaultContent[this.language]);
  		this.editor.getSession().setMode(
  			"ace/mode" + this.language.toLowerCase());
  		}

 	setLanguage(language: string): void {
  		this.language = language;
  		this.resetEditor
  	} 

  	submit() : void {
  		let user_code = this.editor.getValue();
  		console.log(user_code);
  	}
}


