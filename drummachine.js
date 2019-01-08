
function setUpGrid(){
    panel = new Interface.Panel()
    setUpSeqGrid(panel);
    setUpGridLabels(panel);
    setUpBPM(panel);
    setButtons(panel);
}

function setUpSeqGrid(panel){
 
    let mb = new Interface.MultiButton({
    rows:4, 
    columns:16,
    fill:'orange',
    bounds:[.2,.1,.7,.4],
    onvaluechange : function(row, col, value) {
    lbl.setValue( 'row : ' + row + ' , col : ' + col + ' , value : ' + value);
    },
    });
      
    let lbl =  new Interface.Label({ 
        bounds:[.05,.9, .9, .1],
        hAlign:"left",
        value:""
    });


    panel.add(mb, lbl);
}

function setUpGridLabels(panel){
    let kickLbl = new Interface.Label({
        bounds:[-0.81,0.13,1,1],
        hAlign:"right",
        size:30,
        value:"Kick"
    });
    let snareLbl = new Interface.Label({
        bounds:[-0.81,0.23,1,1],
        hAlign:"right",
        size:30,
        value:"Snare"
    });
    let clapLbl = new Interface.Label({
        bounds:[-0.81,0.33,1,1],
        hAlign:"right",
        size:30,
        value:"Clap"
    });
    let hhLbl = new Interface.Label({
        bounds:[-0.81,0.43,1,1],
        hAlign:"right",
        size:30,
        value:"Hi Hat - Closed"
    });
    
    panel.add(kickLbl, snareLbl, clapLbl, hhLbl);
}

function setUpBPM(panel){
    let bpmKnob = new Interface.Knob({
        bounds:[0.65, 0.6, 0.25, 0.25],
        value:.50,
        usesRotation:true,
        centerZero:false
    });
    
    let bpmLbl = new Interface.Label({
        bounds:[0.7, 0.6, 1,1],
        hAlign:"left",
        size:30,
        value:""
    })
    
    let bpmTxt = new Interface.TextField({
        bounds:[0.7, 0.6, .1, .1],
        hAlign:'left',
        value:'120',
        background:'white',
        stroke: 'black',
        onvaluechange: function(){
            var iBPM = Number(bpmTxt.value);
            if((iBPM >= bpmKnob.min) && (iBPM <= bpmKnob.max)){
                bpmKnob.setValue(iBPM);
            } else {
                bpmTxt.setValue(bpmKnob.value);
                bpmTxt.refresh();
            }
        },
    });
    panel.add(bpmKnob, bpmLbl, bpmTxt);
}

function setButtons(panel){
    let playBtn = new Interface.Button({
        bounds:[.2,.6,.1,.1],
        mode:'toggle',
        label:'Play',
        background:'green',
        stroke:'black'
    });
    
    let stopBtn = new Interface.Button({
        bounds:[.35,.6,.1,.1],
        mode:'toggle',
        label:'Stop',
        background:'red',
        stroke:'black'
    })
    
    panel.add(playBtn, stopBtn);
}


setUpGrid();
setUpGridLabels();
setUpBPM();
setButtons();