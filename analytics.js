const ctx =
document.getElementById("scoreChart");

new Chart(ctx, {

  type:"bar",

  data:{

    labels:[
      "Confidence",
      "Technical",
      "Communication"
    ],

    datasets:[{

      label:"Interview Score",

      data:[
        85,
        75,
        90
      ]

    }]

  }

});