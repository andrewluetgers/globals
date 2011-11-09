catch leaked globals

usage

load as first js on the page preferably in the head
load the page with a globals parm like so
http://localhost/myproject/index.html?globals

globals.js will make a list of all the globals then 100ms later make another list and log any new globals. This will repeat continuously every 100ms.

You can also use it interactively in the console. Just load the page without the globals parameter,
then call globals(name, verbose).
the first time it will make a list allsubsequent calls will log any new globals. Optionally add a name that will show up in the logs, and pass true to the secont arguement to see a more verbose log on every call.