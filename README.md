Este proyecto fue hecho con React js, vite, TypeScript y con el framework de CSS llamado Tailwinds css

Se trabajo con un Hook que llame useOrder para trabajar la mayot parte de la lógica fuera de las vistas para su mayor legibilidad del código

Igual se utilizo useState, useMemo al igual que useCallback

En el caso de useMemo lo utilize para renderizar ciertos componentes cuando sea necesario, que igual se puede utilizar useCallback pero esta vez preferi utilizar useMemo

Tambien se creamos una base de datos estatica con los productos y poder trabajar sobre ellos, con su id , name y price

Asi como la creación de types para especificarle a TypeSript que tipo de datos son y poder utilizarlos donde se necesitan, asi crear nuevos types con base en otro utilizando la herencia y adicionando nuevas propiedades para su uso en otros compoenentes necesarios.
