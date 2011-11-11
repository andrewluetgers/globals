A handy tool to catch leaked globals. Some kind of global leakage detection should be built into the js inspectors but untill then I'll use this.

Usage:

load as first js on the page preferably in the head <br/>
load the page with a globals parm like so<br/>
http://localhost/myproject/index.html?globals

globals.js will make a list of all the globals then 100ms later make another list and log any new globals. This will repeat continuously every 100ms.<br/>

You can also use it interactively in the console. Just load the page without the globals parameter, then call globals(name, verbose).
The first time it will make a list all subsequent calls will log any new globals. <br/>
Optionally add a name that will show up in the logs. <br/>
Optionally pass true to the second arguement to see a more verbose log on every call.<br/><br/>


Copyright:

http://creativecommons.org/licenses/by/3.0/