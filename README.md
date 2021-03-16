# Select C8 jQuery

SelectC8 es una librería que hace el uso del elemento select más sencillo.

>*La idea base de este componente es llenar de manera dinámica los controles select en tu aplicación, centralizando código y haciendo tus llamadas más limpias, puedes utilizarlo >dentro de peticiones ajax, o en tu funciones con json listos para ser utilizados.*

## Demo
Si deseas ver mas a detalle el uso de esta librería, puedes visitar  [SelectC8 jQuery](https://jacms.github.io/Select-C8-jQuery/).

 ``` javascript
let $example4 = $("#example4");
            const fruits4 = [{
                    id: 1,
                    name: "Apple",
                    family: "Rosaceae"
                },
                {
                    id: 2,
                    name: "Lemon",
                    family: "Rutaceae"
                },
                {
                    id: 3,
                    name: "Mango",
                    family: "Anacardiaceae"
                },
                {
                    id: 4,
                    name: "Watermelon",
                    family: "Cucurbitaceae"
                }
            ];
            
            $example4.SelectC8({
                data: fruits4,
                valueProperty: "id",
                textProperty: "name",
                dataExtended: "family",
                onChange: onChangeC8
            });

            function onChangeC8(select) {
                console.log(select.val(), $("option:selected", select).text(), $("option:selected", select).data("extended"));
                alert($("option:selected", select).text());
            }
```

## Creditos
* Concept and development by [jacms](https://github.com/jacms) & [reneezy87](https://github.com/Reneezy87).
* By ArtisCode