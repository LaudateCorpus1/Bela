export var Bela: string 		            = '/root/Bela/';
export var webserver_root: string	      = Bela+'IDE/public/';
export var projects: string 		        = Bela+'projects/';
export var uploads: string 		          = Bela+'uploads/';
export var examples: string 		        = Bela+'examples/';
export var libraries: string 	  	      = Bela+'libraries/';
export var gui: string 		              = webserver_root+'gui/';
export var exampleTempProject: string 	= projects+'exampleTempProject/';
export var media: string 		            = Bela+'IDE/public/media/';
export var templates: string 		        = Bela+'IDE/templates/';
export var ide_settings: string       	= Bela+'IDE/settings.json';
export var startup_env: string		      = '/opt/Bela/startup_env';
export var lockfile: string		          = Bela+'IDE/.lockfile';
export var xenomai_stat: string	       	= '/proc/xenomai/sched/stat';
export var update: string		            = Bela+'updates/';
export var tmp: string = "/tmp/";
export function set_xenomai_stat(new_path: string){ xenomai_stat = new_path; };
