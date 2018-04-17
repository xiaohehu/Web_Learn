import { Injectable } from '@angular/core';

declare var io: any; // io is already imported in .angular.cli.json

@Injectable()
export class CollaborationService {
	collaborationSocket : any;

  	constructor() { }

  	init(editor: any, sessionID: string): void {
  		this.collaborationSocket = io(window.location.origin, 
  			{query: 'sessionID= ' + sessionID});

  		// handler changes sent from server
  		this.collaborationSocket.on("change", (delta: string) =>{
  			console.log('collabration: editor changes by ' + delta);
  			delta = JSON.parse(delta);
  			editor.lastAppliedChange = delta;
  			// apply the changes on editor
            editor.getSession().getDocument().applyDeltas([delta]);
  		});
  	}

  	// emit event to make changes and inform server and other collaborators
    change(delta: string): void {
        // emit "change" event
        this.collaborationSocket.emit("change", delta);
	}

    restoreBuffer(): void {
      // user emit "restoreBuffer" event
      // let server to handle that this event
      this.collaborationSocket.emit("restoreBuffer");
    }

}
