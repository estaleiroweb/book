# Vega/Vega Lite

<https://vega.github.io/vega/>

<https://vega.github.io/vega-lite/examples/>

```kroki-vegalite
    {
    "description": "A simple bar chart with embedded data.",
    "data": {
        "values": [
        {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
        {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
        {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "a", "type": "nominal", "axis": {"labelAngle": 0}},
        "y": {"field": "b", "type": "quantitative"}
    }
    }
```

```kroki-vegalite
    {
    "data": {
        "values": [
        {"category":"A", "group": "x", "value":0.1},
        {"category":"A", "group": "y", "value":0.6},
        {"category":"A", "group": "z", "value":0.9},
        {"category":"B", "group": "x", "value":0.7},
        {"category":"B", "group": "y", "value":0.2},
        {"category":"B", "group": "z", "value":1.1},
        {"category":"C", "group": "x", "value":0.6},
        {"category":"C", "group": "y", "value":0.1},
        {"category":"C", "group": "z", "value":0.2}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {"field": "category"},
        "y": {"field": "value", "type": "quantitative"},
        "xOffset": {"field": "group"},
        "color": {"field": "group"}
    }
    }
```

```kroki-vegalite
    {
    "data": {
        "values": [
        {"category":"A", "group": "x", "value":0.1},
        {"category":"A", "group": "y", "value":0.6},
        {"category":"A", "group": "z", "value":0.9},
        {"category":"B", "group": "x", "value":0.7},
        {"category":"B", "group": "y", "value":0.2},
        {"category":"B", "group": "z", "value":1.1},
        {"category":"C", "group": "x", "value":0.6},
        {"category":"C", "group": "y", "value":0.1},
        {"category":"C", "group": "z", "value":0.2}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "type": "ordinal",
            "field": "category"
        },
        "y": {
            "field": "value", 
            "aggregate": "sum",
            "type": "quantitative"
        },
        "color": {
            "type": "nominal",
            "field": "group"
        }
    }
    }
```

```kroki-vegalite
    {
    "data": {
        "values": [
        {"category":"A", "group": "x", "value":0.1},
        {"category":"A", "group": "y", "value":0.6},
        {"category":"A", "group": "z", "value":0.9},
        {"category":"B", "group": "x", "value":0.7},
        {"category":"B", "group": "y", "value":0.2},
        {"category":"B", "group": "z", "value":1.1},
        {"category":"C", "group": "x", "value":0.6},
        {"category":"C", "group": "y", "value":0.1},
        {"category":"C", "group": "z", "value":0.2}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "type": "ordinal",
            "field": "category"
        },
        "y": {
            "field": "value", 
            "type": "quantitative"
        },
        "color": {
            "type": "nominal",
            "field": "group"
        }
    }
    }
```

```kroki-vegalite
    {
    "data": {
        "values": [
        {"bin_start": 8, "bin_end": 10, "count": 7},
        {"bin_start": 10, "bin_end": 12, "count": 29},
        {"bin_start": 12, "bin_end": 14, "count": 71},
        {"bin_start": 14, "bin_end": 16, "count": 127},
        {"bin_start": 16, "bin_end": 18, "count": 94},
        {"bin_start": 18, "bin_end": 20, "count": 54},
        {"bin_start": 20, "bin_end": 22, "count": 17},
        {"bin_start": 22, "bin_end": 24, "count": 5}
        ]
    },
    "mark": "bar",
    "encoding": {
        "x": {
        "field": "bin_start",
        "bin": {"binned": true, "step": 2}
        },
        "x2": {"field": "bin_end"},
        "y": {
        "field": "count",
        "type": "quantitative"
        }
    }
    }
```

```kroki-vegalite
    {
    "description": "Bump chart",
    "data": {
        "values": [
        {"build": 1, "result": "PASSED"},
        {"build": 2, "result": "PASSED"},
        {"build": 3, "result": "FAILED"},
        {"build": 4, "result": "FAILED"},
        {"build": 5, "result": "SKIPPED"},
        {"build": 6, "result": "PASSED"},
        {"build": 7, "result": "PASSED"},
        {"build": 8, "result": "FAILED"},
        {"build": 9, "result": "PASSED"},
        {"build": 10, "result": "PASSED"},
        {"build": 11, "result": "SKIPPED"},
        {"build": 12, "result": "PASSED"},
        {"build": 13, "result": "PASSED"},
        {"build": 14, "result": "FAILED"},
        {"build": 15, "result": "PASSED"},
        {"build": 16, "result": "SKIPPED"}
        ]
    },
    "mark": {"type": "line", "point": true},
    "encoding": {
        "x": {"field": "build", "type": "quantitative"},
        "y": {"field": "result", "type": "nominal"},
        "order": {"field": "build", "type": "quantitative"}
    }
    }
```

```kroki-vegalite
    {
    "description": "Bump chart",
    "data": {
        "values": [
        {"build": 1, "result": 1},
        {"build": 2, "result": 2},
        {"build": 3, "result": 3},
        {"build": 4, "result": 4},
        {"build": 5, "result": 5},
        {"build": 6, "result": 6},
        {"build": 7, "result": 7},
        {"build": 8, "result": 8},
        {"build": 9, "result": 9},
        {"build": 10, "result": 10},
        {"build": 11, "result": 11},
        {"build": 12, "result": 12},
        {"build": 13, "result": 13},
        {"build": 14, "result": 14},
        {"build": 15, "result": 15},
        {"build": 16, "result": 16}
        ]
    },
    "mark": {"type": "line", "point": true},
    "encoding": {
        "x": {"field": "build", "type": "quantitative"},
        "y": {"field": "result", "type": "quantitative"},
        "order": {"field": "build", "type": "quantitative"}
    }
    }
```

```kroki-vegalite
    {
    "description": "Bump chart",
    "data": {
        "values": [
        {"build": "2024-01-01", "result": 1},
        {"build": "2024-01-02", "result": 2},
        {"build": "2024-01-03", "result": 3},
        {"build": "2024-01-04", "result": 4},
        {"build": "2024-01-05", "result": 5},
        {"build": "2024-01-06", "result": 6},
        {"build": "2024-01-07", "result": 7},
        {"build": "2024-01-08", "result": 8},
        {"build": "2024-01-09", "result": 9},
        {"build": "2024-01-10", "result": 10},
        {"build": "2024-01-11", "result": 11},
        {"build": "2024-01-12", "result": 12},
        {"build": "2024-01-13", "result": 13},
        {"build": "2024-01-14", "result": 14},
        {"build": "2024-01-15", "result": 15},
        {"build": "2024-01-16", "result": 16}
        ]
    },
    "mark": {"type": "line", "point": true},
    "encoding": {
        "x": {"field": "build", "type": "temporal"},
        "y": {"field": "result", "type": "quantitative"},
        "order": {"field": "build", "type": "quantitative"}
    }
    }
```

```kroki-vega
    {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A radar chart example, showing multiple dimensions in a radial layout.",
    "width": 400,
    "height": 400,
    "padding": 40,
    "autosize": {"type": "none", "contains": "padding"},

    "signals": [
        {"name": "radius", "update": "width / 2"}
    ],

    "data": [
        {
        "name": "table",
        "values": [
            {"key": "key-0", "value": 19, "category": 0},
            {"key": "key-1", "value": 22, "category": 0},
            {"key": "key-2", "value": 14, "category": 0},
            {"key": "key-3", "value": 38, "category": 0},
            {"key": "key-4", "value": 23, "category": 0},
            {"key": "key-5", "value": 5, "category": 0},
            {"key": "key-6", "value": 27, "category": 0},
            {"key": "key-0", "value": 13, "category": 1},
            {"key": "key-1", "value": 12, "category": 1},
            {"key": "key-2", "value": 42, "category": 1},
            {"key": "key-3", "value": 13, "category": 1},
            {"key": "key-4", "value": 6, "category": 1},
            {"key": "key-5", "value": 15, "category": 1},
            {"key": "key-6", "value": 8, "category": 1}
        ]
        },
        {
        "name": "keys",
        "source": "table",
        "transform": [
            {
            "type": "aggregate",
            "groupby": ["key"]
            }
        ]
        }
    ],

    "scales": [
        {
        "name": "angular",
        "type": "point",
        "range": {"signal": "[-PI, PI]"},
        "padding": 0.5,
        "domain": {"data": "table", "field": "key"}
        },
        {
        "name": "radial",
        "type": "linear",
        "range": {"signal": "[0, radius]"},
        "zero": true,
        "nice": false,
        "domain": {"data": "table", "field": "value"},
        "domainMin": 0
        },
        {
        "name": "color",
        "type": "ordinal",
        "domain": {"data": "table", "field": "category"},
        "range": {"scheme": "category10"}
        }
    ],

    "encode": {
        "enter": {
        "x": {"signal": "radius"},
        "y": {"signal": "radius"}
        }
    },

    "marks": [
        {
        "type": "group",
        "name": "categories",
        "zindex": 1,
        "from": {
            "facet": {"data": "table", "name": "facet", "groupby": ["category"]}
        },
        "marks": [
            {
            "type": "line",
            "name": "category-line",
            "from": {"data": "facet"},
            "encode": {
                "enter": {
                "interpolate": {"value": "linear-closed"},
                "x": {"signal": "scale('radial', datum.value) * cos(scale('angular', datum.key))"},
                "y": {"signal": "scale('radial', datum.value) * sin(scale('angular', datum.key))"},
                "stroke": {"scale": "color", "field": "category"},
                "strokeWidth": {"value": 1},
                "fill": {"scale": "color", "field": "category"},
                "fillOpacity": {"value": 0.1}
                }
            }
            },
            {
            "type": "text",
            "name": "value-text",
            "from": {"data": "category-line"},
            "encode": {
                "enter": {
                "x": {"signal": "datum.x"},
                "y": {"signal": "datum.y"},
                "text": {"signal": "datum.datum.value"},
                "align": {"value": "center"},
                "baseline": {"value": "middle"},
                "fill": {"value": "black"}
                }
            }
            }
        ]
        },
        {
        "type": "rule",
        "name": "radial-grid",
        "from": {"data": "keys"},
        "zindex": 0,
        "encode": {
            "enter": {
            "x": {"value": 0},
            "y": {"value": 0},
            "x2": {"signal": "radius * cos(scale('angular', datum.key))"},
            "y2": {"signal": "radius * sin(scale('angular', datum.key))"},
            "stroke": {"value": "lightgray"},
            "strokeWidth": {"value": 1}
            }
        }
        },
        {
        "type": "text",
        "name": "key-label",
        "from": {"data": "keys"},
        "zindex": 1,
        "encode": {
            "enter": {
            "x": {"signal": "(radius + 5) * cos(scale('angular', datum.key))"},
            "y": {"signal": "(radius + 5) * sin(scale('angular', datum.key))"},
            "text": {"field": "key"},
            "align": [
                {
                "test": "abs(scale('angular', datum.key)) > PI / 2",
                "value": "right"
                },
                {
                "value": "left"
                }
            ],
            "baseline": [
                {
                "test": "scale('angular', datum.key) > 0", "value": "top"
                },
                {
                "test": "scale('angular', datum.key) == 0", "value": "middle"
                },
                {
                "value": "bottom"
                }
            ],
            "fill": {"value": "black"},
            "fontWeight": {"value": "bold"}
            }
        }
        },
        {
        "type": "line",
        "name": "outer-line",
        "from": {"data": "radial-grid"},
        "encode": {
            "enter": {
            "interpolate": {"value": "linear-closed"},
            "x": {"field": "x2"},
            "y": {"field": "y2"},
            "stroke": {"value": "lightgray"},
            "strokeWidth": {"value": 1}
            }
        }
        }
    ]
    }
```

```kroki-vega
    {
    "$schema": "https://vega.github.io/schema/vega/v5.json",
    "description": "A searchable, stacked area chart of U.S. occupations from 1850 to 2000.",
    "width": 800,
    "height": 500,
    "padding": 5,

    "signals": [
        {
        "name": "sex", "value": "all",
        "bind": {"input": "radio", "options": ["men", "women", "all"]}
        },
        {
        "name": "query", "value": "",
        "on": [
            {"events": "area:click!", "update": "datum.job"},
            {"events": "dblclick!", "update": "''"}
        ],
        "bind": {"input": "text", "placeholder": "search", "autocomplete": "off"}
        }
    ],

    "data": [
        {
        "name": "jobs",
        "url": "data/jobs.json",
        "transform": [
            {
            "type": "filter",
            "expr": "(sex === 'all' || datum.sex === sex) && (!query || test(regexp(query,'i'), datum.job))"
            },
            {
            "type": "stack",
            "field": "perc",
            "groupby": ["year"],
            "sort": {
                "field": ["job", "sex"],
                "order": ["descending", "descending"]
            }
            }
        ]
        },
        {
        "name": "series",
        "source": "jobs",
        "transform": [
            {
            "type": "aggregate",
            "groupby": ["job", "sex"],
            "fields": ["perc", "perc"],
            "ops": ["sum", "argmax"],
            "as": ["sum", "argmax"]
            }
        ]
        }
    ],

    "scales": [
        {
        "name": "x",
        "type": "linear",
        "range": "width",
        "zero": false, "round": true,
        "domain": {"data": "jobs", "field": "year"}
        },
        {
        "name": "y",
        "type": "linear",
        "range": "height", "round": true, "zero": true,
        "domain": {"data": "jobs", "field": "y1"}
        },
        {
        "name": "color",
        "type": "ordinal",
        "domain": ["men", "women"],
        "range": ["#33f", "#f33"]
        },
        {
        "name": "alpha",
        "type": "linear", "zero": true,
        "domain": {"data": "series", "field": "sum"},
        "range": [0.4, 0.8]
        },
        {
        "name": "font",
        "type": "sqrt",
        "range": [0, 20], "round": true, "zero": true,
        "domain": {"data": "series", "field": "argmax.perc"}
        },
        {
        "name": "opacity",
        "type": "quantile",
        "range": [0, 0, 0, 0, 0, 0.1, 0.2, 0.4, 0.7, 1.0],
        "domain": {"data": "series", "field": "argmax.perc"}
        },
        {
        "name": "align",
        "type": "quantize",
        "range": ["left", "center", "right"], "zero": false,
        "domain": [1730, 2130]
        },
        {
        "name": "offset",
        "type": "quantize",
        "range": [6, 0, -6], "zero": false,
        "domain": [1730, 2130]
        }
    ],

    "axes": [
        {
        "orient": "bottom", "scale": "x", "format": "d", "tickCount": 15
        },
        {
        "orient": "right", "scale": "y", "format": "%",
        "grid": true, "domain": false, "tickSize": 12,
        "encode": {
            "grid": {"enter": {"stroke": {"value": "#ccc"}}},
            "ticks": {"enter": {"stroke": {"value": "#ccc"}}}
        }
        }
    ],
    
    "marks": [
        {
        "type": "group",
        "from": {
            "data": "series",
            "facet": {
            "name": "facet",
            "data": "jobs",
            "groupby": ["job", "sex"]
            }
        },

        "marks": [
            {
            "type": "area",
            "from": {"data": "facet"},
            "encode": {
                "update": {
                "x": {"scale": "x", "field": "year"},
                "y": {"scale": "y", "field": "y0"},
                "y2": {"scale": "y", "field": "y1"},
                "fill": {"scale": "color", "field": "sex"},
                "fillOpacity": {"scale": "alpha", "field": {"parent": "sum"}}
                },
                "hover": {
                "fillOpacity": {"value": 0.2}
                }
            }
            }
        ]
        },
        {
        "type": "text",
        "from": {"data": "series"},
        "interactive": false,
        "encode": {
            "update": {
            "x": {"scale": "x", "field": "argmax.year"},
            "dx": {"scale": "offset", "field": "argmax.year"},
            "y": {"signal": "scale('y', 0.5 * (datum.argmax.y0 + datum.argmax.y1))"},
            "fill": {"value": "#000"},
            "fillOpacity": {"scale": "opacity", "field": "argmax.perc"},
            "fontSize": {"scale": "font", "field": "argmax.perc", "offset": 5},
            "text": {"field": "job"},
            "align": {"scale": "align", "field": "argmax.year"},
            "baseline": {"value": "middle"}
            }
        }
        }
    ]
    }
```
