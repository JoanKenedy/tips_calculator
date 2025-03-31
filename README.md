Es una calculadora de consumo y propinas.

Este proyecto fue hecho con React js, vite, TypeScript y con el framework de CSS Tailwinds css

Cree un customHook llamado useOrder para separar la lógica fuera de las vistas para mayor legibilidad del código

Igual se utilizo useState, useMemo al igual que useCallback

En el caso de useMemo lo utilize para renderizar ciertos componentes cuando sea necesario, que igual se puede utilizar useCallback pero esta vez preferi utilizar useMemo

Tambien cree una base de datos estatica con los productos para poder trabajar sobre ellos, con sus propiedades id , name y price

Asi como la creación de types para especificarle a TypeSript que tipo de datos son y poder utilizarlos donde sean necesarios, asi como crear nuevos types con base en otros, utilizando la herencia entre types y adicionando nuevas propiedades para poder utilizarlo componentes donde deben utilizarse.
