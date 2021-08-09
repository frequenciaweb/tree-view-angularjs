# tree-view-angularjs
Componente Tree View AngularJS

## Overview

Componente escrito para angularJS com javascript puro para montar uma treeview com diversos níveis e quando o volume de informações for muito grande você pode
definir o nível que será mostrado antes do clique do mouse.

## Version

- Angular 1.8

## License

O código de tree-view-angularjs está licenciado sob a [Licença MIT] (http://opensource.org/licenses/MIT)

## Credits

https://github.com/frequenciaweb/

## Example code


```html

<!--  
  max representa o máximo de níveis mostrados antes do clique do mouse pode colocar 0 
  model representa a arvore que será construida
-->

 <tree-view max="2" model="nodes"></tree-view>

```

```javascript
nodes.push(
{
  id:  1
  name: 'ITEM 1 NIVEL 1',
  open: false,
  checked: true,                                            
  children: [
      {
        id:  2
        name: 'ITEM 1 NIVEL 2',
        open: false,
        checked: true,  
        children: [
         {
           id:  3
           name: 'ITEM 1 NIVEL 3',
           open: false,
           checked: true
         }
      }
     ]
  ] 
});

```
![Alt text](/../main/screenshot.PNG?raw=true "Exemplo")
