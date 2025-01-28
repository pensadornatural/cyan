//--------------------------------------------------------------------------------------------------------
cyan.AddDocument(cyan.Col5, cyan.Row2, cyan.B2W, cyan.B2H + cyan.D4, 'Datos personales', 'DocFormulario')
    DocFormulario.SetClosable(false) //Documento no puede cerrarse.

    function ComponentDocFormulario_OnLoaded() { //Mostrar el documento en la mesa virtual actual.
        DocFormulario.Bring()
    }

    //Función para validar si los campos obligatorios están ingresados y si
    //los valores ingresados son correctos.
    function DocFormulario_FormularioValidado() {
        if (!DocFormulario_txtNombres.GetReady()) { return false }
        if (!DocFormulario_txtApellidos.GetReady()) { return false }
        if (!DocFormulario_txtFechaNacimiento.GetReady()) { return false }
        if (!DocFormulario_txtEmail.GetReady()) { return false }

        return true
    }


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddLabel(cyan.Col2, cyan.Row2, 'Ingrese los siguientes datos:')


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddLabel(cyan.Col2, cyan.Row3, 'Nombres:')


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddTextBox(cyan.Col6, cyan.Row3, 'Nombres', 'DocFormulario_txtNombres')
    DocFormulario_txtNombres.SetNeeded(true) //Campo es obligatorio.
    DocFormulario_txtNombres.SetInputType(cyan.Const.WordsEs) //Solo se aceptan palabras en español.


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddLabel(cyan.Col15, cyan.Row3, 'Apellidos:')


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddTextBox(cyan.Col19, cyan.Row3, 'Apellidos', 'DocFormulario_txtApellidos')
    DocFormulario_txtApellidos.SetInputType(cyan.Const.WordsEs)


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddLabel(cyan.Col2, cyan.Row5, 'Fecha nac.:')


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddTextBox(cyan.Col6, cyan.Row5, 'DD-MM-AAAA', 'DocFormulario_txtFechaNacimiento')
    DocFormulario_txtFechaNacimiento.SetInputType(cyan.Const.DDMMYYYY) //Solo se aceptan fechas en este formato.


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddLabel(cyan.Col15, cyan.Row5, 'Sexo:')


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddRadioButtonGroup(cyan.Col19, cyan.Row5, 'DocFormulario_optSexo')
    DocFormulario_optSexo.AddList('Masculino, Femenino') //Lista de radio buttons.
    DocFormulario_optSexo.SetSelected(1, true) //Seleccionar por defecto el primer valor.


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddLabel(cyan.Col2, cyan.Row7, 'Email:')


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddTextBox(cyan.Col6, cyan.Row7, 'Email', 'DocFormulario_txtEmail')
    DocFormulario_txtEmail.SetNeeded(true) //Campo es obligatorio.
    DocFormulario_txtEmail.SetInputType(cyan.Const.Email) //Solo se aceptan textos de tipo email.


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddLabel(cyan.Col15, cyan.Row7, 'Residencia:')


//--------------------------------------------------------------------------------------------------------
DocFormulario.AddComboBox(cyan.Col19, cyan.Row7, 'DocFormulario_cboResidencia')
    DocFormulario_cboResidencia.AddList('América del Sur, América del Norte, Europa, Asia, Oceanía, África')
    

//--------------------------------------------------------------------------------------------------------
DocFormulario.AddButton(cyan.Col21, cyan.Row9, 'Aceptar', 'DocFormulario_btnAceptar')

    function DocFormulario_btnAceptar_OnClick() { //Código a ejecutar cuando se pulse el botón Aceptar.
        if (DocFormulario_FormularioValidado()) { alert('Datos ingresados correctamente.') }
        if (!DocFormulario_FormularioValidado()) { alert('Datos incorrectos o faltantes.') }
    }