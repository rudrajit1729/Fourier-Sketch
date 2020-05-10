# Fourier-Sketch


  Sketching out anything just by using numerous sine waves.
  In Engineering Mathematics, Fourier Transform is a way to actually generate any wave/signal by just using collection of sine waves.
  Here we scale it to the extent to draw out any random shape just by using a similar logic.
  
  So go ahead and draw out any shape and watch it being drawn by just a collection of numerous sine waves.

  Click on the link and watch the algortihm in action : https://rudrajit1729.github.io/Fourier-Sketch/.
 
  Came across this wonderful description by a maths youtube channel(3blue1brown) that actually inspired me in building this algorithm.
 
  Watch their intuitive and pretty well described explanations on 
 
 - Fourier Series - https://www.youtube.com/watch?v=r6sGWTCMz2k
 
 - Fourier Transform - https://www.youtube.com/watch?v=spUNpyF58BY
 
  to have a much better understanding of the topic.
 
 
 While building this I have used two sets of nested orbits and their frequencies, amplitudes, & phases are all calculated from the Discrete Fourier Transform Algrithm.
 
 # Discrete Fourier Transform(DFT)
 
 Takes a signal (path - [here array of pair of numbers] - similar to ScalableVectorGraphics(SVG)) and breaks it down into collection 
 of wave patterns(each having own frequency, amplitude, phase)
 
 We visualize these wave patterns as rotating circles(epicycles) and have the harmonics render out the path and thus draw out the shape.
 
 A much detailed description of DFT : https://en.wikipedia.org/wiki/Discrete_Fourier_transform
