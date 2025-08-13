# Taller de Programación 2

## Clase 1
En esta clase vimos los comando basicos de Git y creamos/vinculamos un repo en Github

### Git
> Con `--global` la configuracion de GIT es para todos los proyectos. Sin eso la configuracion es específica para el proyecto que tengo abierto
* Inicializar GIT (abajo a la derecha esta la branch)
    * `pwd` es power directory y nos indica donde estamos parados. Tiene que ser la carpeta del proyecto/materia para la instalacion
    * `git` init inicializa GIT en la carpeta
    * Configurar Nombre de Usuario de Git y un Mail
        * `git config --global user.name "Nombre Apellido"`
        * `git config --global -l` para ver la configuracion que tengo
        * `git config --global user.email ""` para configurar el mail
    * Crear el repo en Github 
    * `git remote add origin https://github.com/xxxxxx.git` para sociar el repo al main
    * `git push -u origin main` para enviar los archivos committed al repo
* `git -v` o `git version` ver la version de git
* `clear` limpia la terminar
* `ls` lista los archivos (excepto los ocultos)
* `ls -al` lista los archivos, todos incluso los ocultos (all)
* `git branch` para ver en que branch estoy parado
*  `git config --global core.editor "code --wait"` Configura a VSC como editor general de codigo
* `git config --global core.autocrlf true` para unificar los saltos de linea (solo p/windows) && `git config --global core.autocrlf input` (Mac/Linux)
* `ls` lista los archivos sobre la carpeta que estoy parado
    * `la -l` me muestra los detalles de los archivos de la carpeta
    * `ls -al` me muestra los archivos ocultos y los detalles
* `cd carpeta/` change directory es para cambiar de carpeta, donde `carpeta/` es la carpeta a ir
    * `cd ..` vuelve un nivel arriba
* `git checkout -b clase1` crea una branch llamada clase1
* `git add .env` agrega un archivo al area de staging para luego ser committed
    * `git add .` agrega todos los archivos al area de staging
* `git commit` abre el dialogo para el commit (hay que guardar para volver a la terminar)
* `git push -u origin main` me traigo el repo remoto
* `git pull origin main` envio los cambios al repo remoto
* `get remote -v` me lista los repos remotos que tengo asociados
* `git merge clase1` me traigo los cambios de una branch local
* `git push origin clase1` si no exite la branch, la crea