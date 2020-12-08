export default function define(runtime, observer) {
  const main = runtime.module();

  main.variable(observer()).define(["md"], function (md) {
    return md`
# Lebanese immigration throughout the years`;
  });

  main
    .variable(observer())
    .define(["countryData", "chart"], function (countryData, chart) {
      var state = {
        valueAccessor: "Amount",
        countryCodeType: "name",
        countryCodeAccessor: "Country",
        data: countryData,
        view: "classic",
      };
      return chart.update(state);
    });

  main.variable(observer()).define(["html"], function (html) {
    return html`
      <label><b>Choose a Year</b></label>
      <div id="sliderContainer">
        <input
          id="timeslide"
          type="range"
          min="0"
          max="34"
          value="0"
          step="1"
        /><br />
        <span id="range">1982</span>
      </div>
    `;
  });

  main
    .variable(observer("chart"))
    .define(
      "chart",
      [
        "SquareMapChart",
        "classicalWorld",
        "gridWorld",
        "d3",
        "DOM",
        "topojson",
        "require",
      ],
      function (
        SquareMapChart,
        classicalWorld,
        gridWorld,
        d3,
        DOM,
        topojson,
        require
      ) {
        var chart = new SquareMapChart();
        chart.create(classicalWorld, gridWorld);

        var width = 3000,
          height = 500;

        const svg = d3
          .select(DOM.svg(width, height))
          .style("width", "100%")
          .style("height", "100%");

        var inputValue = 1982;
        var time = [
          "1982",
          "1983",
          "1984",
          "1985",
          "1986",
          "1987",
          "1988",
          "1989",
          "1990",
          "1991",
          "1992",
          "1993",
          "1994",
          "1995",
          "1996",
          "1997",
          "1998",
          "1999",
          "2000",
          "2001",
          "2002",
          "2003",
          "2004",
          "2005",
          "2006",
          "2007",
          "2008",
          "2009",
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
        ];

        var color = d3
          .scaleThreshold()
          .range([
            "#fde0dd",
            "#fcc5c0",
            "#fa9fb5",
            "#f768a1",
            "#dd3497",
            "#ae017e",
            "#7a0177",
            "#49006a",
          ])
          .domain([0.014, 0.032, 0.045, 0.075, 0.1, 0.15, 0.3, 0.56]);

        var colorFB = d3
          .scaleThreshold()
          .range([
            "#4d9900",
            "#66cc00",
            "#80ff00",
            "#99ff33",
            "#b3ff66",
            "#ccff99",
          ])
          .domain([-40000, -15000, -10000, -5000, -2500, 0]);

        var colorDem = d3
          .scaleThreshold()
          .range([
            "#809fff",
            "#4d79ff",
            "#1a53ff",
            "#0039e6",
            "#002db3",
            "#002080",
            "#001a66",
          ])
          .domain([1, 2500, 10000, 25000, 40000, 55000, 70000]);

        var colorRep = d3
          .scaleThreshold()
          .range([
            "#ffcccc",
            "#ff9999",
            "#ff6666",
            "#ff3333",
            "#ff0000",
            "#cc0000",
            "#990000",
          ])
          .domain([1, 2500, 10000, 25000, 40000, 55000, 70000]);

        var tooltip = d3
          .select("body")
          .append("div")
          .attr("class", "tooltip")
          .style("background", "black")
          .style("position", "absolute")
          .style("z-index", "10")
          .style("visibility", "hidden");

        var projection = d3.geoMercator().scale(1).translate([0, 0]);
        var path = d3.geoPath().projection(projection);

        const files = [
          "data_files/immigrants.csv",
          "data_files/immigrants.json",
        ];
        const promises = [];

        files.forEach(function (url, index) {
          promises.push(index ? d3.json(url) : d3.csv(url));
        });

        Promise.all(promises).then(ready);

        function ready(mov_vs_fb) {
          const mov_vs_fbByDist1982 = {};
          const mov_vs_fbByDist1983 = {};
          const mov_vs_fbByDist1984 = {};
          const mov_vs_fbByDist1985 = {};
          const mov_vs_fbByDist1986 = {};
          const mov_vs_fbByDist1987 = {};
          const mov_vs_fbByDist1988 = {};
          const mov_vs_fbByDist1989 = {};
          const mov_vs_fbByDist1990 = {};
          const mov_vs_fbByDist1991 = {};
          const mov_vs_fbByDist1992 = {};
          const mov_vs_fbByDist1993 = {};
          const mov_vs_fbByDist1994 = {};
          const mov_vs_fbByDist1995 = {};
          const mov_vs_fbByDist1996 = {};
          const mov_vs_fbByDist1997 = {};
          const mov_vs_fbByDist1998 = {};
          const mov_vs_fbByDist1999 = {};
          const mov_vs_fbByDist2000 = {};
          const mov_vs_fbByDist2001 = {};
          const mov_vs_fbByDist2002 = {};
          const mov_vs_fbByDist2003 = {};
          const mov_vs_fbByDist2004 = {};
          const mov_vs_fbByDist2005 = {};
          const mov_vs_fbByDist2006 = {};
          const mov_vs_fbByDist2007 = {};
          const mov_vs_fbByDist2008 = {};
          const mov_vs_fbByDist2009 = {};
          const mov_vs_fbByDist2010 = {};
          const mov_vs_fbByDist2011 = {};
          const mov_vs_fbByDist2012 = {};
          const mov_vs_fbByDist2013 = {};
          const mov_vs_fbByDist2014 = {};
          const mov_vs_fbByDist2015 = {};
          const mov_vs_fbByDist2016 = {};

          mov_vs_fb[1].forEach(function (d) {
            d.Country = d.Country;
            d.Amount = +d.Amount;
            d.Date = +d.Date;
            if (d.Date == 1982) {
              mov_vs_fbByDist1982[d.Country] = d;
            } else if (d.Date == 1983) {
              mov_vs_fbByDist1983[d.Country] = d;
            } else if (d.Date == 1984) {
              mov_vs_fbByDist1984[d.Country] = d;
            } else if (d.Date == 1985) {
              mov_vs_fbByDist1985[d.Country] = d;
            } else if (d.Date == 1986) {
              mov_vs_fbByDist1986[d.Country] = d;
            } else if (d.Date == 1987) {
              mov_vs_fbByDist1987[d.Country] = d;
            } else if (d.Date == 1988) {
              mov_vs_fbByDist1988[d.Country] = d;
            } else if (d.Date == 1989) {
              mov_vs_fbByDist1989[d.Country] = d;
            } else if (d.Date == 1990) {
              mov_vs_fbByDist1990[d.Country] = d;
            } else if (d.Date == 1991) {
              mov_vs_fbByDist1991[d.Country] = d;
            } else if (d.Date == 1992) {
              mov_vs_fbByDist1992[d.Country] = d;
            } else if (d.Date == 1993) {
              mov_vs_fbByDist1993[d.Country] = d;
            } else if (d.Date == 1994) {
              mov_vs_fbByDist1994[d.Country] = d;
            } else if (d.Date == 1995) {
              mov_vs_fbByDist1995[d.Country] = d;
            } else if (d.Date == 1996) {
              mov_vs_fbByDist1996[d.Country] = d;
            } else if (d.Date == 1997) {
              mov_vs_fbByDist1997[d.Country] = d;
            } else if (d.Date == 1998) {
              mov_vs_fbByDist1998[d.Country] = d;
            } else if (d.Date == 1999) {
              mov_vs_fbByDist1999[d.Country] = d;
            } else if (d.Date == 2000) {
              mov_vs_fbByDist2000[d.Country] = d;
            } else if (d.Date == 2001) {
              mov_vs_fbByDist2001[d.Country] = d;
            } else if (d.Date == 2002) {
              mov_vs_fbByDist2002[d.Country] = d;
            } else if (d.Date == 2003) {
              mov_vs_fbByDist2003[d.Country] = d;
            } else if (d.Date == 2004) {
              mov_vs_fbByDist2004[d.Country] = d;
            } else if (d.Date == 2005) {
              mov_vs_fbByDist2005[d.Country] = d;
            } else if (d.Date == 2006) {
              mov_vs_fbByDist2006[d.Country] = d;
            } else if (d.Date == 2007) {
              mov_vs_fbByDist2007[d.Country] = d;
            } else if (d.Date == 2008) {
              mov_vs_fbByDist2008[d.Country] = d;
            } else if (d.Date == 2009) {
              mov_vs_fbByDist2009[d.Country] = d;
            } else if (d.Date == 2010) {
              mov_vs_fbByDist2010[d.Country] = d;
            } else if (d.Date == 2011) {
              mov_vs_fbByDist2011[d.Country] = d;
            } else if (d.Date == 2012) {
              mov_vs_fbByDist2012[d.Country] = d;
            } else if (d.Date == 2013) {
              mov_vs_fbByDist2013[d.Country] = d;
            } else if (d.Date == 2014) {
              mov_vs_fbByDist2014[d.Country] = d;
            } else if (d.Date == 2015) {
              mov_vs_fbByDist2015[d.Country] = d;
            } else if (d.Date == 2016) {
              mov_vs_fbByDist2016[d.Country] = d;
            }
          });

          var format = d3.format(".2%");
          var commas = d3.format(",");

          var path = d3
            .geoPath()
            .projection(d3.geoMercator().scale(1).translate([0, 0]));

          // var subset = topojson
          // .feature(mov_vs_fb[1], mov_vs_fb[1].Amount)
          // .features.filter(function (d) {
          //   return d.Country in mov_vs_fbByDist1982;
          // });

          d3.json("./data_files/countries.json").then((subset) => {
            console.log(subset);
            svg
              .append("g")
              .attr("class", "congress")
              .selectAll("path")
              .data(subset)
              .enter()
              .append("path")
              .attr("d", path)
              .style("fill", initialState)
              .on("mouseover", function (d) {
                console.log("Hi");
                var val = mov_vs_fbByDist1982[d.Country];
                var fill_color = color(val["poe_2018"]);
                tooltip.html("");
                tooltip
                  .style("visibility", "visible")
                  .style("border", "7px solid " + fill_color);

                tooltip.append("h3").style("color", "white").text(val);

                d3.selectAll(".congress path")
                  .style("opacity", 0.3)
                  .style("stroke", null);
                d3.select(this)
                  .style("opacity", 1)
                  .style("stroke", "#222")
                  .raise();
                d3.selectAll(".STATE_FIPS").style("opacity", 0);
                return d.Amount;
              })
              .on("mousemove", function () {
                return tooltip
                  .style("top", d3.event.pageY - 52 + "px")
                  .style("left", d3.event.pageX + 18 + "px");
              })
              .on("mouseout", function () {
                tooltip.style("visibility", "hidden");
                d3.selectAll(".congress path").style("opacity", 1);
                d3.selectAll(".STATE_FIPS").style("opacity", 1);
              });
            // when the input range changes update the rectangle
            d3.select("#timeslide").on("input", function () {
              update(+this.value);
            });

            function update(value) {
              document.getElementById("range").innerHTML = time[value];
              inputValue = time[value];

              d3.selectAll(".congress path").remove();
              svg
                .append("g")
                .attr("class", "congress")
                .selectAll("path")
                .data(subset)
                .enter()
                .append("path")
                .attr("d", path)
                .style("fill", function (d) {
                  return timeMatch(d);
                })
                .on("mouseover", function (d) {
                  var val = use_data(d);
                  var fill_color = color(val["poe_2018"]);
                  tooltip.html("");
                  tooltip
                    .style("visibility", "visible")
                    .style("border", "7px solid " + fill_color);

                  tooltip
                    .append("h3")
                    .text(val.geolabel)
                    .style("color", "white");
                  tooltip
                    .append("div")
                    .style("color", "white")
                    .text("Margin of Victory: " + commas(val["mov_2016"]));
                  tooltip
                    .append("div")
                    .style("color", "white")
                    .text(
                      "Margin of Victory Compared to Foreign Born Growth: " +
                        commas(val["mov_vs_FB"])
                    );
                  tooltip
                    .append("div")
                    .style("color", "white")
                    .text(
                      "Foreign Born Percentage of Electorate 2018: " +
                        format(val["poe_2018"])
                    );

                  d3.selectAll(".congress path")
                    .style("opacity", 0.3)
                    .style("stroke", null);
                  d3.select(this)
                    .style("opacity", 1)
                    .style("stroke", "#222")
                    .raise();
                  d3.selectAll(".STATE_FIPS").style("opacity", 0);
                })
                .on("mousemove", function () {
                  return tooltip
                    .style("top", d3.event.pageY - 52 + "px")
                    .style("left", d3.event.pageX + 18 + "px");
                })
                .on("mouseout", function () {
                  tooltip.style("visibility", "hidden");
                  d3.selectAll(".congress path").style("opacity", 1);
                  d3.selectAll(".STATE_FIPS").style("opacity", 1);
                });
            }
          });

          // svg.append("path")
          //     .datum(topojson.mesh(us, us.objects.STATE_FIPS, function(a, b) { return a.id !== b.id; }))
          //     .attr("class", "STATE_FIPS")
          //     .attr("d", path);

          svg
            .append("text")
            .style("font-weight", "bold")
            .attr("x", width - 430)
            .attr("y", height - 170)
            .text("Margin of Victory vs");
          svg
            .append("text")
            .style("font-weight", "bold")
            .attr("x", width - 430)
            .attr("y", height - 152)
            .text("Foreign Born Growth");

          var legend1 = svg
            .selectAll(".legend")
            .data(colorDem.domain().reverse())
            .enter()
            .append("g")
            .attr("transform", function (d, i) {
              return (
                "translate(" +
                (width - 410) +
                "," +
                (height - 144 + 16 * i) +
                ")"
              );
            });

          legend1
            .append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", function (d) {
              return colorDem(d);
            });

          legend1
            .append("text")
            .attr("x", 16)
            .attr("y", 9)
            .style("font-size", "10px")
            .text(function (d) {
              return commas(d);
            });

          var legend2 = svg
            .selectAll(".legend")
            .data(colorRep.domain().reverse())
            .enter()
            .append("g")
            .attr("transform", function (d, i) {
              return (
                "translate(" +
                (width - 425) +
                "," +
                (height - 144 + 16 * i) +
                ")"
              );
            });

          legend2
            .append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", function (d) {
              return colorRep(d);
            });

          var legend3 = svg
            .selectAll(".legend")
            .data(colorFB.domain().reverse())
            .enter()
            .append("g")
            .attr("transform", function (d, i) {
              return (
                "translate(" +
                (width - 350) +
                "," +
                (height - 144 + 16 * i) +
                ")"
              );
            });

          legend3
            .append("rect")
            .attr("width", 10)
            .attr("height", 10)
            .style("fill", function (d) {
              return colorFB(d);
            });

          legend3
            .append("text")
            .attr("x", 16)
            .attr("y", 9)
            .style("font-size", "10px")
            .text(function (d) {
              return commas(d);
            });

          function use_data(d) {
            if (d.Date == 1982) {
              return mov_vs_fbByDist1982[d.Country];
            } else if (d.Date == 1983) {
              return mov_vs_fbByDist1983[d.Country];
            } else if (d.Date == 1984) {
              return mov_vs_fbByDist1984[d.Country];
            } else if (d.Date == 1985) {
              return mov_vs_fbByDist1985[d.Country];
            } else if (d.Date == 1986) {
              return mov_vs_fbByDist1986[d.Country];
            } else if (d.Date == 1987) {
              return mov_vs_fbByDist1987[d.Country];
            } else if (d.Date == 1988) {
              return mov_vs_fbByDist1988[d.Country];
            } else if (d.Date == 1989) {
              return mov_vs_fbByDist1989[d.Country];
            } else if (d.Date == 1990) {
              return mov_vs_fbByDist1990[d.Country];
            } else if (d.Date == 1991) {
              return mov_vs_fbByDist1991[d.Country];
            } else if (d.Date == 1992) {
              return mov_vs_fbByDist1992[d.Country];
            } else if (d.Date == 1993) {
              return mov_vs_fbByDist1993[d.Country];
            } else if (d.Date == 1994) {
              return mov_vs_fbByDist1994[d.Country];
            } else if (d.Date == 1995) {
              return mov_vs_fbByDist1995[d.Country];
            } else if (d.Date == 1996) {
              return mov_vs_fbByDist1996[d.Country];
            } else if (d.Date == 1997) {
              return mov_vs_fbByDist1997[d.Country];
            } else if (d.Date == 1998) {
              return mov_vs_fbByDist1998[d.Country];
            } else if (d.Date == 1999) {
              return mov_vs_fbByDist1999[d.Country];
            } else if (d.Date == 2000) {
              return mov_vs_fbByDist2000[d.Country];
            } else if (d.Date == 2001) {
              return mov_vs_fbByDist2001[d.Country];
            } else if (d.Date == 2002) {
              return mov_vs_fbByDist2002[d.Country];
            } else if (d.Date == 2003) {
              return mov_vs_fbByDist2003[d.Country];
            } else if (d.Date == 2004) {
              return mov_vs_fbByDist2004[d.Country];
            } else if (d.Date == 2005) {
              return mov_vs_fbByDist2005[d.Country];
            } else if (d.Date == 2006) {
              return mov_vs_fbByDist2006[d.Country];
            } else if (d.Date == 2007) {
              return mov_vs_fbByDist2007[d.Country];
            } else if (d.Date == 2008) {
              return mov_vs_fbByDist2008[d.Country];
            } else if (d.Date == 2009) {
              return mov_vs_fbByDist2009[d.Country];
            } else if (d.Date == 2010) {
              return mov_vs_fbByDist2010[d.Country];
            } else if (d.Date == 2011) {
              return mov_vs_fbByDist2011[d.Country];
            } else if (d.Date == 2012) {
              return mov_vs_fbByDist2012[d.Country];
            } else if (d.Date == 2013) {
              return mov_vs_fbByDist2013[d.Country];
            } else if (d.Date == 2014) {
              return mov_vs_fbByDist2014[d.Country];
            } else if (d.Date == 2015) {
              return mov_vs_fbByDist2015[d.Country];
            } else if (d.Date == 2016) {
              return mov_vs_fbByDist2016[d.Country];
            }
            // if (inputValue == "2018") {
            //   return mov_vs_fbByDist18[d.id];
            // } else if (inputValue == "2020") {
            //   return mov_vs_fbByDist20[d.id];
            // } else if (inputValue == "2022") {
            //   return mov_vs_fbByDist22[d.id];
            // } else if (inputValue == "2024") {
            //   return mov_vs_fbByDist24[d.id];
            // }
          }

          function initialState(d) {
            if (document.getElementById("range").innerHTML == 1982) {
              return;
            }
          }
        }
        d3.select("#timeslide").on("input", function () {
          update(+this.value);
        });

        function update(value) {
          document.getElementById("range").innerHTML = time[value];
          inputValue = time[value];
        }

        return chart;
      }
    );

  main
    .variable(observer("SquareMapChart"))
    .define(
      "SquareMapChart",
      ["d3", "DOM", "flubber"],
      function (d3, DOM, flubber) {
        return class SquareMapChart {
          create(classicalWorld, squaredWorld) {
            this.width = 960;
            this.height = 500;
            this.margin = { top: 0, left: 0, right: 0, bottom: 0 };
            this.world = classicalWorld;
            this.worldTile = squaredWorld;
            this.svg = d3.select(
              DOM.svg(
                this.width - (this.margin.left + this.margin.right),
                this.height - (this.margin.top + this.margin.bottom)
              )
            );
            this.main = this.svg
              .append("g")
              .attr("class", "main")
              .attr(
                "transform",
                `translate(${this.margin.left},${this.margin.top})`
              );

            this.map = this.main.append("g").attr("class", "map");

            this.labels = this.main.append("g").attr("class", "labels");
          }
          update(state) {
            this.valueAccessor = state.valueAccessor;
            this.countryCodeType = state.countryCodeType;
            this.countryCodeAccessor = state.countryCodeAccessor;
            if (
              state.data &&
              JSON.stringify(this.data) !== JSON.stringify(state.data)
            ) {
              this._drawMap(state.data);
            }
            if (state.view && this.view !== state.view) {
              if (state.view === "classic") {
                this.switchToClassic();
              } else {
                this.switchToSquares();
              }
            }
            this.data = state.data;
            this.view = state.view;
            return this.svg.node();
          }
          _drawMap(data) {
            const dataDomain = d3.extent(data, (d) => d[this.valueAccessor]);
            const dataMapping = data.reduce((agg, v) => {
              var country;
              if (this.countryCodeType === "name") {
                country = this.worldTile.find(
                  (d) => d.name === v[this.countryCodeAccessor]
                );
              }
              if (country) agg[country.alpha2] = v[this.valueAccessor];
              return agg;
            }, {});
            var colorScale = d3
              .scaleSequential()
              .domain([dataDomain[1], dataDomain[0]])
              .interpolator(d3.interpolateGnBu);
            // create a first guess for the projection
            var projection = d3.geoMercator().scale(1).translate([0, 0]);
            // create the path
            var path = d3.geoPath().projection(projection);
            // using the path determine the bounds of the current map and use
            // these to determine better values for the scale and translation
            var bounds = path.bounds(this.world);
            var scale =
              0.95 /
              Math.max(
                (bounds[1][0] - bounds[0][0]) / this.width,
                (bounds[1][1] - bounds[0][1]) / this.height
              );
            var xGridDomain = d3.extent(this.worldTile, (d) => d.x);
            var yGridDomain = d3.extent(this.worldTile, (d) => d.y);
            var xWidth = this.width / (xGridDomain[1] - xGridDomain[0]);
            var yWidth = this.height / (yGridDomain[1] - yGridDomain[0]);
            var squareWidth = Math.min(xWidth, yWidth);
            var xOffset =
              (this.width - (xGridDomain[1] - xGridDomain[0]) * squareWidth) /
              2;
            var yOffset =
              (this.height - (yGridDomain[1] - yGridDomain[0]) * squareWidth) /
              2;
            var squarePosition = this.worldTile.reduce((agg, v) => {
              agg[v.alpha2] = {
                x: v.x * squareWidth + xOffset,
                y: v.y * squareWidth + yOffset,
              };
              return agg;
            }, {});
            var offset = [
              (this.width - scale * (bounds[1][0] + bounds[0][0])) / 2,
              (this.height - scale * (bounds[1][1] + bounds[0][1])) / 2,
            ];
            // new projection
            projection = d3.geoMercator().scale(scale).translate(offset);
            path = path.projection(projection);
            this.squarePosition = squarePosition;
            this.squareWidth = squareWidth;
            this.path = path;
            this.map
              .selectAll("path")
              .data(this.world.features)
              .enter()
              .append("path")
              .attr("d", path)
              .style(
                "fill",
                (d) =>
                  dataMapping[d.properties.iso_a2] !== undefined
                    ? colorScale(dataMapping[d.properties.iso_a2])
                    : "#F0F0F0" //the color of the not included countries
              )
              .style("stroke", "gray")
              .style("stroke-width", 1)
              .on("mouseover", function (d) {
                console.log(d);
              });
            this.labels
              .selectAll("text")
              .data(this.world.features)
              .enter()
              .append("text")
              .text((d) => d.properties.iso_a2)
              .attr(
                "x",
                (d) =>
                  this.squarePosition[d.properties.iso_a2].x +
                  this.squareWidth / 2
              )
              .attr(
                "y",
                (d) =>
                  this.squarePosition[d.properties.iso_a2].y +
                  this.squareWidth / 2
              )
              .style("fill", "black")
              .style("alignment-baseline", "central")
              .style("text-anchor", "middle")
              .style("font-size", "10px")
              .style("font-family", "Helvetica, Arial, sans-serif")
              .style("opacity", 0);
          }

          switchToClassic() {
            this.map
              .selectAll("path")
              .transition()
              .duration(3000)
              .attrTween("d", (d) => {
                if (this.squarePosition[d.properties.iso_a2]) {
                  var x = this.squarePosition[d.properties.iso_a2].x;
                  var y = this.squarePosition[d.properties.iso_a2].y;
                  if (d.geometry.type === "MultiPolygon") {
                    var square = [
                      [x, y],
                      [x + this.squareWidth, y],
                      [x + this.squareWidth, y + this.squareWidth],
                      [x, y + this.squareWidth],
                      [x, y],
                    ];
                    var filteredPolygons = d.geometry.coordinates.map(
                      (coordinates) =>
                        this.path({ type: "Polygon", coordinates: coordinates })
                    );
                    return flubber.separate(square, filteredPolygons, {
                      single: true,
                    });
                  } else {
                    return flubber.fromRect(
                      x,
                      y,
                      this.squareWidth,
                      this.squareWidth,
                      this.path(d),
                      { maxSegmentLength: 10 }
                    );
                  }
                } else {
                  console.log("Unmatched country " + d.properties.iso_a2);
                  return null;
                }
              });

            this.labels
              .selectAll("text")
              .transition()
              .duration(300)
              .style("opacity", 0);
          }
        };
      }
    );

  main
    .variable(observer("classicalWorld"))
    .define("classicalWorld", ["d3"], function (d3) {
      return d3.json(
        "https://gist.githubusercontent.com/KarimDouieb/fbd29d80918c0b16aef837680eddb865/raw/0a2243629bf4c95f1853aac2aa6e2ebdda61cd38/world.geo.json"
      );
    });

  main
    .variable(observer("gridWorld"))
    .define("gridWorld", ["d3"], function (d3) {
      return d3.json("data_files/countries.json");
    });

  main
    .variable(observer("countryData"))
    .define("countryData", ["d3"], function (d3) {
      return d3.json("data_files/immigrants.json");
    });

  main.variable(observer("d3")).define("d3", ["require"], function (require) {
    return require("https://d3js.org/d3.v5.min.js");
  });

  main
    .variable(observer("topojson"))
    .define("topojson", ["require"], function (require) {
      return require("topojson-client@3");
    });

  main
    .variable(observer("flubber"))
    .define("flubber", ["require"], function (require) {
      return require("https://unpkg.com/flubber");
    });

  return main;
}
