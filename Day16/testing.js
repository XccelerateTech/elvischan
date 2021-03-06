class Selection extends PaintFunction{
    constructor(canvasReal,canvasDraft,contextReal,contextDraft){
        super();
        this.canvasReal = canvasReal;
        this.canvasDraft = canvasDraft;
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.selectionBox = 0;
        this.capSelection_canvas;
        this.capSelection_ctx;
        this.capSelection_img;
        this.origX2;
        this.origY2;
        this.endX;
        this.endY;
        this.selectedImage = new Image();
        this.firstMove = 0;
    }
    
    //When selectionBox = 0, dragging draw a dashed line box
    //When selectionBox = 1, dragging inside the dashed line box move the selected image
    //When selectionBox = 1, dragging outside the dashed line box will fix the selected image to its current position, and reset selectionBox to 0

    onMouseDown(coord,event){
        if (this.selectionBox == 0) {
            this.origX = coord[0];
            this.origY = coord[1];
        } else if (
            (coord[0] <= this.endX) &&
            (coord[0] >= this.origX) &&
            (coord[1] <= this.endY) &&
            (coord[1] >= this.origY)
            ) {
            if (this.firstMove==0){
                this.contextReal.clearRect(this.origX,this.origY,this.endX- this.origX,this.endY - this.origY);
                this.firstMove = 1;
            }

            this.origX2 = coord[0];
            this.origY2 = coord[1];
        } else {
            this.selectionBox = 0;
            this.drawCapture(this.contextReal,this.origX,this.origY)
            contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.origX = coord[0];
            this.origY = coord[1];
        }
    }
    onDragging(coord,event){
        if (this.selectionBox == 0) {
            this.drawSelectionBox(this.origX,this.origY,coord[0],coord[1]);
        } else if (this.selectionBox == 1) {
            contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawSelectionBox(
                this.origX + coord[0] - this.origX2,
                this.origY + coord[1] - this.origY2,
                this.endX + coord[0] - this.origX2,
                this.endY + coord[1] - this.origY2
            );
            this.drawCapture(
                this.contextDraft,
                this.origX + coord[0] - this.origX2,
                this.origY + coord[1] - this.origY2
            )
        }
    }

    onMouseMove(coord){
        if (
            (this.selectionBox==1)&&
            (coord[0] <= this.endX) &&
            (coord[0] >= this.origX) &&
            (coord[1] <= this.endY) &&
            (coord[1] >= this.origY)) {
            $('#canvas-draft').css('cursor','all-scroll');
            $('body').css('cursor', 'all-scroll');
        } else {
            $('#canvas-draft').css('cursor','default');
            $('body').css('cursor', 'default');
        }
    }
    
    onMouseUp(coord){
        if (this.selectionBox == 0){
            coord = this.adjustxy(coord[0],coord[1]);
            this.drawSelectionBox(this.origX,this.origY,coord[0],coord[1]);
            this.captureSelection(coord[0],coord[1]);
            this.selectionBox = 1;
            this.endX = coord[0];
            this.endY = coord[1];
        } else if (this.selectionBox == 1) {
            contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
            this.drawSelectionBox(
                this.origX + coord[0] - this.origX2,
                this.origY + coord[1] - this.origY2,
                this.endX + coord[0] - this.origX2,
                this.endY + coord[1] - this.origY2
            );
            this.drawCapture(
                this.contextDraft,
                this.origX + coord[0] - this.origX2,
                this.origY + coord[1] - this.origY2
            )
            this.origX = this.origX + coord[0] - this.origX2;
            this.origY = this.origY + coord[1] - this.origY2;
            this.endX = this.endX + coord[0] - this.origX2;
            this.endY = this.endY + coord[1] - this.origY2;
        } else {
            this.selectionBox = 0;
        }
    }
    onMouseLeave(){}
    onMouseEnter(){}

    drawSelectionBox(x1,y1,x2,y2){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
        this.drawLine(x1,y1,x2,y1);
        this.drawLine(x1,y1,x1,y2);
        this.drawLine(x2,y1,x2,y2);
        this.drawLine(x1,y2,x2,y2);
    }

    drawLine(x1,y1,x2,y2){
        this.contextDraft.strokeStyle = "#888";
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = 2;
        this.contextDraft.beginPath();
        this.contextDraft.setLineDash([5,15]);
        this.contextDraft.moveTo(x1,y1);
        this.contextDraft.lineTo(x2,y2);
        this.contextDraft.closePath();
        this.contextDraft.stroke();
        this.contextDraft.setLineDash([]);
    }

    captureSelection(x,y){
        this.capSelection_canvas = document.createElement('canvas');
        this.capSelection_canvas.style.display = 'none';
        document.body.appendChild(this.capSelection_canvas);
        this.capSelection_canvas.width = x - this.origX;
        this.capSelection_canvas.height = y - this.origY;

        this.capSelection_ctx = this.capSelection_canvas.getContext('2d');
        this.capSelection_ctx.drawImage(
            this.canvasReal, 
            this.origX,//Start Clipping
            this.origY,//Start Clipping
            x - this.origX,//Clipping Width
            y - this.origY,//Clipping Height
            0,//Place X
            0,//Place Y
            this.capSelection_canvas.width,//Place Width
            this.capSelection_canvas.height//Place Height
        );

        this.selectedImage.src = this.capSelection_canvas.toDataURL();
        this.firstMove = 0;
    }
    
    drawCapture(ctx,x,y){
        ctx.drawImage(this.selectedImage, x, y);
    }

    adjustxy(x,y){
        let medX, medY;
        if (x < this.origX) {
            medX = x;
            x = this.origX
            this.origX = medX;
        };
        if (y < this.origY) {
            medY = y;
            y = this.origY
            this.origY = medY;
        };
        return [x,y];
    }
}

//fill
pixelStack = [[startX, startY]];

while(pixelStack.length)
{
  var newPos, x, y, pixelPos, reachLeft, reachRight;
  newPos = pixelStack.pop();
  x = newPos[0];
  y = newPos[1];
  
  pixelPos = (y*canvasWidth + x) * 4;
  while(y-- >= drawingBoundTop && matchStartColor(pixelPos))
  {
    pixelPos -= canvasWidth * 4;
  }
  pixelPos += canvasWidth * 4;
  ++y;
  reachLeft = false;
  reachRight = false;
  while(y++ < canvasHeight-1 && matchStartColor(pixelPos))
  {
    colorPixel(pixelPos);

    if(x > 0)
    {
      if(matchStartColor(pixelPos - 4))
      {
        if(!reachLeft){
          pixelStack.push([x - 1, y]);
          reachLeft = true;
        }
      }
      else if(reachLeft)
      {
        reachLeft = false;
      }
    }
	
    if(x < canvasWidth-1)
    {
      if(matchStartColor(pixelPos + 4))
      {
        if(!reachRight)
        {
          pixelStack.push([x + 1, y]);
          reachRight = true;
        }
      }
      else if(reachRight)
      {
        reachRight = false;
      }
    }
			
    pixelPos += canvasWidth * 4;
  }
}
context.putImageData(colorLayer, 0, 0);
  
function matchStartColor(pixelPos)
{
  var r = colorLayer.data[pixelPos];	
  var g = colorLayer.data[pixelPos+1];	
  var b = colorLayer.data[pixelPos+2];

  return (r == startR && g == startG && b == startB);
}

function colorPixel(pixelPos)
{
  colorLayer.data[pixelPos] = fillColorR;
  colorLayer.data[pixelPos+1] = fillColorG;
  colorLayer.data[pixelPos+2] = fillColorB;
  colorLayer.data[pixelPos+3] = 255;
}