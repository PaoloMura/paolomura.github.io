"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[551],{7551:function(e,t,i){i.r(t);var a=i(2592),o=i(184);t.default=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:"This project was the paired programming coursework for my second year Computer Systems A unit (Parallel and Distributed Computing). The task was to implement a parallelised and distributed version of John Conway's Game of Life simulation."}),(0,o.jsx)("p",{children:"The fundamental simulation is simple: you are given a grid of black and white pixels. Each turn of the simulation, every given pixel is changed to either black or white based on a small set of rules to do with the adjacent cells' colours."}),(0,o.jsx)(a.Z,{fluid:!0,src:"/images/parallelised-simulation/WorkerAllocation.jpeg"}),(0,o.jsx)("p",{children:"We parallelised the solution by splitting the grid into strips and allocating each strip to a different thread. Each thread could only write to their given strip, but were allowed to read from the row immediately above and below. This allowed for a safe memory-sharing approach, which reduced both the time and space complexity that would have been required with a message-passing alternative."}),(0,o.jsx)(a.Z,{fluid:!0,src:"/images/parallelised-simulation/PointerSwitching.jpeg"}),(0,o.jsx)("p",{children:"All in all, we only ever kept two copies of the grid in memory at any time; one for reading and the other for writing. At the end of a given turn, the pointers to the grids were swapped. Since each worker thread only ever kept an indirect pointer to the grid, this helped minimise the amount of data being copied or passed around."}),(0,o.jsx)(a.Z,{fluid:!0,src:"/images/parallelised-simulation/DistributedDiagram.jpeg"}),(0,o.jsx)("p",{children:"We also developed a distributed version of the application. It split the functionality of the client-side version into a controller and engine. The controller is a local application that connects to the engine, which can be hosted on an AWS EC2 instance. The controller can connect to the engine via RPC calls and send commands such as play, pause, stop and get status or results. Although our distributed solution only worked on a single machine, the controller was able to disconnect from and reconnect to the engine at any time. This allows for simulation processing to take place on a remote environment instead of your local machine."})]})}}}]);
//# sourceMappingURL=551.da79abc3.chunk.js.map