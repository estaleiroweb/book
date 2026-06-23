# Gráficos

<svg style="display: none;">
   <defs>
      <style>
         svg {
            & text { font-family: 'Segoe UI', sans-serif; font-size: 14px; fill: #2D3748; text-anchor: middle;}
            & path { stroke: #44444444; stroke-width: 3; fill: none; }
            & .ok, & .ok path { stroke: green!important; }
            & .nok, & .nok path { stroke: red!important; }
            & .axis {
               & line {stroke: #2D3748; stroke-width: 2; }
               & text { font-size: 14px; fill: #2D3748; text-anchor: end; }
            }
            & .bold { font-size: 16px; font-weight: bold; }
            & .sign { font-weight: bold; font-size: 18px; }
            & circle { fill: white; stroke: gray; stroke-width: 3; r:5; z-index:255; }
            & circle.closed, g.closed circle { fill: green; stroke: green; }
            & circle.opened, g.opened circle { stroke: red; }
            & .vertical { stroke: #88888890; stroke-width: 2; stroke-dasharray: 5,5; }
         }
      </style>
   </defs>
</svg>

<!-- x>0 / -->
<svg viewBox="0 0 600 250">
   <g transform="translate(0,125)">
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">x&gt;0</text></g>
      <g class="sign">
         <text x="85%" y="-30" class="ok">+</text>
         <text x="15%" y="30" class="nok">-</text>
      </g>
      <g transform="translate(300,0)" class="opened"><!-- opened|closed -->
         <path d="M 0 0  -150 125" class="nok"/>
         <path d="M 0 0  150 -125" class="ok"/>
         <line class="vertical" y1="-100%" y2="100%" />
         <g><circle /><text y="25">x=??</text></g>
      </g>
   </g>
</svg>

<!-- -x>0 \ -->
<svg viewBox="0 0 600 250">
   <g transform="translate(0,125)">
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">-x&gt;0</text></g>
      <g class="sign">
         <text x="85%" y="-30" class="ok">+</text>
         <text x="15%" y="30" class="nok">-</text>
      </g>
      <g transform="translate(300,0)" class="opened"><!-- opened|closed -->
         <path d="M 0 0  -150 -125" class="ok"/>
         <path d="M 0 0  150 125" class="nok"/>
         <line class="vertical" y1="-100%" y2="100%" />
         <g><circle /><text y="25">x=??</text></g>
      </g>
   </g>
</svg>

<!-- x<0 / -->
<svg viewBox="0 0 600 250">
   <g transform="translate(0,125)">
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">x&lt;0</text></g>
      <g class="sign">
         <text x="85%" y="-30" class="nok">+</text>
         <text x="15%" y="30" class="ok">-</text>
      </g>
      <g transform="translate(300,0)" class="opened"><!-- opened|closed -->
         <path d="M 0 0  -150 125" class="ok"/>
         <path d="M 0 0  150 -125" class="nok"/>
         <line class="vertical" y1="-100%" y2="100%" />
         <g><circle /><text y="25">x=??</text></g>
      </g>
   </g>
</svg>

<!-- -x<0 \ -->
<svg viewBox="0 0 600 250">
   <g transform="translate(0,125)">
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">-x&lt;0</text></g>
      <g class="sign">
         <text x="85%" y="-30" class="nok">+</text>
         <text x="15%" y="30" class="ok">-</text>
      </g>
      <g transform="translate(300,0)" class="opened"><!-- opened|closed -->
         <path d="M 0 0  -150 -125" class="nok"/>
         <path d="M 0 0  150 125" class="ok"/>
         <line class="vertical" y1="-100%" y2="100%" />
         <g><circle /><text y="25">x=??</text></g>
      </g>
   </g>
</svg>

<!-- x²>0 U -->
<svg viewBox="0 0 600 300">
   <g transform="translate(0,150)" class="opened"><!-- opened|closed -->
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">x²&gt;0</text></g>
      <g class="sign">
         <g transform="translate(0,-30)" class="ok"><!-- ok|nok -->
            <text x="15%">+</text>
            <text x="85%">+</text>
         </g>
         <g transform="translate(0,30)" class="nok"><!-- ok|nok -->
            <text x="50%">-</text>
         </g>
      </g>
      <g transform="translate(200,0)"><!-- x1 pos -->
         <path class="nok" d="M 0 0 C 65 80 130 80 200 0" /><!-- ok|nok -->
         <path class="ok" d="M -80 -140 C -55 -80 -30 -35 0 0" /><!-- ok|nok -->
         <line class="vertical" y1="-100%" y2="100%" />
         <circle /><text y="25">x₁=??</text>
         <g transform="translate(200,0)"><!-- x2 pos -->
            <path class="ok" d="M 0 0 C 25 -35 50 -80 80 -140" /><!-- ok|nok -->
            <line class="vertical" y1="-100%" y2="100%" />
            <circle /><text y="25">x₂=??</text>
         </g>
      </g>
   </g>
</svg>

<!-- x²<0 U -->
<svg viewBox="0 0 600 300">
   <g transform="translate(0,150)" class="opened"><!-- opened|closed -->
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">x²&lt;0</text></g>
      <g class="sign">
         <g transform="translate(0,-30)" class="nok"><!-- ok|nok -->
            <text x="15%">+</text>
            <text x="85%">+</text>
         </g>
         <g transform="translate(0,30)" class="ok"><!-- ok|nok -->
            <text x="50%">-</text>
         </g>
      </g>
      <g transform="translate(200,0)"><!-- x1 pos -->
         <path class="ok" d="M 0 0 C 65 80 130 80 200 0" /><!-- ok|nok -->
         <path class="nok" d="M -80 -140 C -55 -80 -30 -35 0 0" /><!-- ok|nok -->
         <line class="vertical" y1="-100%" y2="100%" />
         <circle /><text y="25">x₁=??</text>
         <g transform="translate(200,0)"><!-- x2 pos -->
            <path class="nok" d="M 0 0 C 25 -35 50 -80 80 -140" /><!-- ok|nok -->
            <line class="vertical" y1="-100%" y2="100%" />
            <circle /><text y="25">x₂=??</text>
         </g>
      </g>
   </g>
</svg>

<!-- -x²>0 ∩ -->
<svg viewBox="0 0 600 300">
   <g transform="translate(0,150)" class="opened"><!-- opened|closed -->
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">-x²&gt;0</text></g>
      <g class="sign">
         <g transform="translate(0,-30)" class="ok"><!-- ok|nok -->
            <text x="50%">+</text>
         </g>
         <g transform="translate(0,30)" class="nok"><!-- ok|nok -->
            <text x="15%">-</text>
            <text x="85%">-</text>
         </g>
      </g>
      <g transform="translate(200,0)"><!-- x1 pos -->
         <path d="M 0 0 C 70 -65 130 -70 200 0" class="ok"/><!-- ok|nok -->
         <path d="M -90 110 C -60 60 -30 25 0 0" class="nok"/><!-- ok|nok -->
         <line class="vertical" y1="-100%" y2="100%" />
         <circle /><text y="25">x₁=??</text>
         <g transform="translate(200,0)"><!-- x2 pos -->
            <path d="M 0 0 C 30 25 60 60 90 110" class="nok"/><!-- ok|nok -->
            <line class="vertical" y1="-100%" y2="100%" />
            <circle /><text y="25">x₂=??</text>
         </g>
      </g>
   </g>
</svg>

<!-- -x²<0 ∩ -->
<svg viewBox="0 0 600 300">
   <g transform="translate(0,150)" class="opened"><!-- opened|closed -->
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">-x²&lt;0</text></g>
      <g class="sign">
         <g transform="translate(0,-30)" class="nok"><!-- ok|nok -->
            <text x="50%">+</text>
         </g>
         <g transform="translate(0,30)" class="ok"><!-- ok|nok -->
            <text x="15%">-</text>
            <text x="85%">-</text>
         </g>
      </g>
      <g transform="translate(200,0)"><!-- x1 pos -->
         <path d="M 0 0 C 70 -65 130 -70 200 0" class="nok"/><!-- ok|nok -->
         <path d="M -90 110 C -60 60 -30 25 0 0" class="ok"/><!-- ok|nok -->
         <line class="vertical" y1="-100%" y2="100%" />
         <circle /><text y="25">x₁=??</text>
         <g transform="translate(200,0)"><!-- x2 pos -->
            <path d="M 0 0 C 30 25 60 60 90 110" class="ok"/><!-- ok|nok -->
            <line class="vertical" y1="-100%" y2="100%" />
            <circle /><text y="25">x₂=??</text>
         </g>
      </g>
   </g>
</svg>

---

<!-- x≥0 / -->
<svg viewBox="0 0 600 250">
   <g transform="translate(0,125)">
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">x≥0</text></g>
      <g class="sign">
         <text x="85%" y="-30" class="ok">+</text>
         <text x="15%" y="30" class="nok">-</text>
      </g>
      <g transform="translate(300,0)" class="closed"><!-- opened|closed -->
         <path d="M 0 0  -150 125" class="nok"/>
         <path d="M 0 0  150 -125" class="ok"/>
         <line class="vertical" y1="-100%" y2="100%" />
         <g><circle /><text y="25">x=??</text></g>
      </g>
   </g>
</svg>

<!-- -x≥0 \ -->
<svg viewBox="0 0 600 250">
   <g transform="translate(0,125)">
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">-x≥0</text></g>
      <g class="sign">
         <text x="85%" y="-30" class="ok">+</text>
         <text x="15%" y="30" class="nok">-</text>
      </g>
      <g transform="translate(300,0)" class="closed"><!-- opened|closed -->
         <path d="M 0 0  -150 -125" class="ok"/>
         <path d="M 0 0  150 125" class="nok"/>
         <line class="vertical" y1="-100%" y2="100%" />
         <g><circle /><text y="25">x=??</text></g>
      </g>
   </g>
</svg>

<!-- x≤0 / -->
<svg viewBox="0 0 600 250">
   <g transform="translate(0,125)">
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">x≤0</text></g>
      <g class="sign">
         <text x="85%" y="-30" class="nok">+</text>
         <text x="15%" y="30" class="ok">-</text>
      </g>
      <g transform="translate(300,0)" class="closed"><!-- opened|closed -->
         <path d="M 0 0  -150 125" class="ok"/>
         <path d="M 0 0  150 -125" class="nok"/>
         <line class="vertical" y1="-100%" y2="100%" />
         <g><circle /><text y="25">x=??</text></g>
      </g>
   </g>
</svg>

<!-- -x≤0 \ -->
<svg viewBox="0 0 600 250">
   <g transform="translate(0,125)">
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">-x≤0</text></g>
      <g class="sign">
         <text x="85%" y="-30" class="nok">+</text>
         <text x="15%" y="30" class="ok">-</text>
      </g>
      <g transform="translate(300,0)" class="closed"><!-- opened|closed -->
         <path d="M 0 0  -150 -125" class="nok"/>
         <path d="M 0 0  150 125" class="ok"/>
         <line class="vertical" y1="-100%" y2="100%" />
         <g><circle /><text y="25">x=??</text></g>
      </g>
   </g>
</svg>

<!-- x²≥0 U -->
<svg viewBox="0 0 600 300">
   <g transform="translate(0,150)" class="closed"><!-- opened|closed -->
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">x²≥0</text></g>
      <g class="sign">
         <g transform="translate(0,-30)" class="ok"><!-- ok|nok -->
            <text x="15%">+</text>
            <text x="85%">+</text>
         </g>
         <g transform="translate(0,30)" class="nok"><!-- ok|nok -->
            <text x="50%">-</text>
         </g>
      </g>
      <g transform="translate(200,0)"><!-- x1 pos -->
         <path class="nok" d="M 0 0 C 65 80 130 80 200 0" /><!-- ok|nok -->
         <path class="ok" d="M -80 -140 C -55 -80 -30 -35 0 0" /><!-- ok|nok -->
         <line class="vertical" y1="-100%" y2="100%" />
         <circle /><text y="25">x₁=??</text>
         <g transform="translate(200,0)"><!-- x2 pos -->
            <path class="ok" d="M 0 0 C 25 -35 50 -80 80 -140" /><!-- ok|nok -->
            <line class="vertical" y1="-100%" y2="100%" />
            <circle /><text y="25">x₂=??</text>
         </g>
      </g>
   </g>
</svg>

<!-- x²≤0 U -->
<svg viewBox="0 0 600 300">
   <g transform="translate(0,150)" class="closed"><!-- opened|closed -->
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">x²≤0</text></g>
      <g class="sign">
         <g transform="translate(0,-30)" class="nok"><!-- ok|nok -->
            <text x="15%">+</text>
            <text x="85%">+</text>
         </g>
         <g transform="translate(0,30)" class="ok"><!-- ok|nok -->
            <text x="50%">-</text>
         </g>
      </g>
      <g transform="translate(200,0)"><!-- x1 pos -->
         <path class="ok" d="M 0 0 C 65 80 130 80 200 0" /><!-- ok|nok -->
         <path class="nok" d="M -80 -140 C -55 -80 -30 -35 0 0" /><!-- ok|nok -->
         <line class="vertical" y1="-100%" y2="100%" />
         <circle /><text y="25">x₁=??</text>
         <g transform="translate(200,0)"><!-- x2 pos -->
            <path class="nok" d="M 0 0 C 25 -35 50 -80 80 -140" /><!-- ok|nok -->
            <line class="vertical" y1="-100%" y2="100%" />
            <circle /><text y="25">x₂=??</text>
         </g>
      </g>
   </g>
</svg>

<!-- -x²≥0 ∩ -->
<svg viewBox="0 0 600 300">
   <g transform="translate(0,150)" class="closed"><!-- opened|closed -->
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">-x²≥0</text></g>
      <g class="sign">
         <g transform="translate(0,-30)" class="ok"><!-- ok|nok -->
            <text x="50%">+</text>
         </g>
         <g transform="translate(0,30)" class="nok"><!-- ok|nok -->
            <text x="15%">-</text>
            <text x="85%">-</text>
         </g>
      </g>
      <g transform="translate(200,0)"><!-- x1 pos -->
         <path d="M 0 0 C 70 -65 130 -70 200 0" class="ok"/><!-- ok|nok -->
         <path d="M -90 110 C -60 60 -30 25 0 0" class="nok"/><!-- ok|nok -->
         <line class="vertical" y1="-100%" y2="100%" />
         <circle /><text y="25">x₁=??</text>
         <g transform="translate(200,0)"><!-- x2 pos -->
            <path d="M 0 0 C 30 25 60 60 90 110" class="nok"/><!-- ok|nok -->
            <line class="vertical" y1="-100%" y2="100%" />
            <circle /><text y="25">x₂=??</text>
         </g>
      </g>
   </g>
</svg>

<!-- -x²≤0 ∩ -->
<svg viewBox="0 0 600 300">
   <g transform="translate(0,150)" class="closed"><!-- opened|closed -->
      <g class="axis"><line x1="5%" y1="0" x2="95%" y2="0" /><text x="95%" y="15">-x²≤0</text></g>
      <g class="sign">
         <g transform="translate(0,-30)" class="nok"><!-- ok|nok -->
            <text x="50%">+</text>
         </g>
         <g transform="translate(0,30)" class="ok"><!-- ok|nok -->
            <text x="15%">-</text>
            <text x="85%">-</text>
         </g>
      </g>
      <g transform="translate(200,0)"><!-- x1 pos -->
         <path d="M 0 0 C 70 -65 130 -70 200 0" class="nok"/><!-- ok|nok -->
         <path d="M -90 110 C -60 60 -30 25 0 0" class="ok"/><!-- ok|nok -->
         <line class="vertical" y1="-100%" y2="100%" />
         <circle /><text y="25">x₁=??</text>
         <g transform="translate(200,0)"><!-- x2 pos -->
            <path d="M 0 0 C 30 25 60 60 90 110" class="ok"/><!-- ok|nok -->
            <line class="vertical" y1="-100%" y2="100%" />
            <circle /><text y="25">x₂=??</text>
         </g>
      </g>
   </g>
</svg>
