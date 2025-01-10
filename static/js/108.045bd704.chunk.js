"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[108],{3108:function(e,i,o){o.r(i);o(2791);var s=o(2592),t=o(3466),a=o(184);i.default=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("p",{children:["This project was the coursework for my fourth year High Performance Computing module. We were given some starter code written in C, which was a serial implementation of the",(0,a.jsx)(t.Z,{href:"https://en.wikipedia.org/wiki/Lattice_Boltzmann_methods",target:"_blank",children:"Lattice Boltzmann fluid dynamics simulation"}),". The task was to improve the efficiency of this code in three stages:"]}),(0,a.jsxs)("ol",{children:[(0,a.jsx)("li",{children:"Serial optimisations"}),(0,a.jsx)("li",{children:"Parallelise it across multiple cores using OpenMP"}),(0,a.jsx)("li",{children:"Distribute it across multiple nodes using MPI"})]}),(0,a.jsx)("p",{children:"We also had to analyse the performance of each iteration on Blue Crystal phase 4 (BCp4), the University's supercomputer."}),(0,a.jsx)("p",{children:"Initially, I performed compiler optimisations, loop fusion (collapsing separate functions under a single loop) and optimised complex arithemtic operations (such as divisions). This improved the efficiency of the serial version of the code."}),(0,a.jsx)("p",{children:"Next, I vectorised the code and applied OpenMP parallelism. This allowed the code to run in parallel across all 28 cores of a Blue Crystal node."}),(0,a.jsx)("p",{children:"Finally, I refactored to use MPI instead of OpenMP for parallelism. This allowed the code to be distributed via a halo exchange system, shown in the image below."}),(0,a.jsx)(s.Z,{fluid:!0,src:"/images/hpc/halo-exchange.jpeg",className:"image"}),(0,a.jsx)("p",{children:'Consider the kth rank (i.e. node), which has n+1 local rows. Its 0th and nth rows are used as "halo" regions; local copies of the adjacent rows belonging to the rank above and below. The kth rank only performs processing on the rows under its domain: 1 to n-1.'}),(0,a.jsx)("p",{children:'The "halo exchange" involves echanging rows between adjacent ranks and is performed after each round of computation. In the diagram above, the kth rank sends a copy of its n-1th row above, while receiving a row from below, which it stores into its 0th row. Then, it sends a copy of its 1st row below, while receiving a row from above, which it stores into its nth row.'}),(0,a.jsx)("p",{children:"The results showed a massive speed-up, with the parallel version being 94X faster when compared to the unoptimised code on a grid size of 256x256. The distributed version was 443X faster than the optimised serial code on an input grid size of 1024x1024."})]})}}}]);
//# sourceMappingURL=108.045bd704.chunk.js.map