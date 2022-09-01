class ViceCityMenuPainter {

    paint(context, geometry, parameters) {
        context.beginPath();

        // Anfang links oben ersten Punkt gesetzt
        //   *----------
        //   |         |
        //   -----------
        context.moveTo(0, 0);
        // von ersten Punkt Linie zum zweiten Punkt oben rechts zeichnen
        //   ----------*
        //   |         |
        //   -----------
        context.lineTo(geometry.width, 10);
        // von zweiten Punkt Linie zum driten Punkt unten rechts zeichnen
        //   -----------
        //   |         |
        //   ----------*
        context.lineTo(geometry.width, geometry.height - 10);
        // von driten Punkt Linie zum vierten Punkt unten links zeichnen
        //   -----------
        //   |         |
        //   *----------
        context.lineTo(0, geometry.height);
        // Farbe setzen
        context.fillStyle = "#1F4882";
        // Context befüllen
        context.fill();
    }
}

registerPaint('vice-city-menu', ViceCityMenuPainter);