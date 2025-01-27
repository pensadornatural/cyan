cyan.AddDocument(cyan.Col5, cyan.Row3, cyan.B4W, cyan.B4H, 'Documento "Hola mundo"', 'DocHolaMundo')
DocHolaMundo.AddLabel(cyan.Col2, cyan.Row2, '¡Hola mundo!')

function ComponentDocHolaMundo_OnLoaded() {
    DocHolaMundo.Bring()
}
