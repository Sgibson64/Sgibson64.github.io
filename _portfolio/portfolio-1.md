---
title: "Alaska Airports, Major Rivers, Lakes, and Trees"
excerpt: "Map of different Alaskan features.  <br/><img src='/images/Map 3.jpeg'>"
collection: portfolio
---

Following the same steps that Kyle Walker did in his book "Analyzing US Census Data: Methods, Maps, and Models in R", I completed the Alaska map. My personal changes are found below:

<br> </br>

Map 1: 

  a. On page 88, I changed the classification from continuous to equal interval for the sr_50m_alaska_nad raster file. 
  <br>
  b. On page 88, I choose 6 classes for the classification instead of the suggest five for the same layer. 
  <br>
  c. On page 88, I choose bilinear instead of continuous for the mode of the same layer. 
  <br>
  d. I reprojected all the layers to be 3857 instead of the 2964 crs.  
  e. On page 88, I did a different color scheme from the viridis to mako.
  <br>
  f. On page 89, I played with the resampling to do bilinear instead of Nearestneighbor. 
  <br>
  g. I lightened the color setting. 
<br> </br>

Map 2:

  a. On page 98, I changed the color of the sr_50m_alaska_nad raster file to be white to black instead of black to white.
  <br>
  b. On page 105, I changed one of the line colors for the major rivers shapefile to be blue and black instead of blue and gray.  

Map 3: 

  a. On page 109, I set the stroke width to be .4 mm thickness instead of the .5 mm. 
  <br>
  b. On page 110, I change the lakes shapefile to be a darker shade of blue with a black hairline stroke outline.  
  c. On page 111, instead of a point pattern fill for the trees shapefile, I wanted to make it look like a tree canopy, so I did a gradient green fill. 

Links to the direct chapters are included below:

1. [Walker Chapter 2](https://walker-data.com/census-r/an-introduction-to-tidycensus.html)
2. [Walker Chapter 3](https://walker-data.com/census-r/wrangling-census-data-with-tidyverse-tools.html)
3. [Walker Chapter 4](https://walker-data.com/census-r/exploring-us-census-data-with-visualization.html)
