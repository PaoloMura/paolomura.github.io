"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[438],{7574:function(e,t,a){a.r(t);var r=a(2592),i=a(184);t.default=function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"This project was the coursework for my fourth year team project. The task was to work in a group of seven to create a computer game. The only restrictions were that it had to be a web game and include a novel aspect."}),(0,i.jsx)("p",{children:"Having spent the year rewatching Doctor Who, I proposed that we make a multiplayer time-travel game to fulfill the 'novel' requirement. The finished game is unlike anything we've seen before: it's a multiplayer 3D web game where at any point, players are free to time-travel within elapsed time. Each player can time-travel whenever they like, irrespective and independently of other players."}),(0,i.jsx)("p",{children:"My main contributions to the project were:"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Conceptual ideation"}),(0,i.jsx)("li",{children:"Project maintenance"}),(0,i.jsx)("li",{children:"Algorithms and data structures for time-travel"}),(0,i.jsx)("li",{children:"Test framework"})]}),(0,i.jsx)("p",{children:"The way I implemented time-travel is by taking inspiration from existing replay systems. Many games have replay systems that capture the state of the game (e.g. player positions) at regular intervals. When the game is over, this stored state is read in order, allowing the computer to reconstruct events in the sequence that they occurred."}),(0,i.jsx)(r.Z,{fluid:!0,src:"/images/multiplayer-game/DataStructure.jpeg"}),(0,i.jsx)("p",{children:"The Time Travel System (TTS) is a collection of C# data structures that facilitate time travel. At its core, it has an array where each item represents a frame of the game. As players move through time, they store their state at the frame they're at. Unlike regular games, players can time-travel. All this means is that they don't have to store their state at sequential frames in the array; they can jump ahead to future frames or revisit earlier frames."}),(0,i.jsx)(r.Z,{fluid:!0,src:"/images/multiplayer-game/Ghosts.jpeg"}),(0,i.jsx)("p",{children:"As long as we keep track of which frame each player is currently visiting, we can determine which characters any individual player should see. This is done by looking up the that frame in the array. If there is already stored state there, this represents past versions of some players. The game then uses this state to recreate what these players were doing at that point in the past, visualised as 'ghost' versions of those characters."}),(0,i.jsx)(r.Z,{fluid:!0,src:"/images/multiplayer-game/RealityManager.jpeg"}),(0,i.jsx)("p",{children:"We keep track of all player's currently perceived frame. So, if two players' perceived frames are the same, we can let them see and interact with each other (they're playing in the same time). Otherwise, we set them invisible to each other so that they can't interact."}),(0,i.jsx)("p",{children:"The project was a large and complex undertaking with the TTS making up a small fraction of the total project. I was responsible for maintaining documentation, UML diagrams and refactoring the codebase. I also implemented a testing framework specifically for analysing and debugging our TTS."}),(0,i.jsx)(r.Z,{fluid:!0,src:"/images/multiplayer-game/UML.jpeg"})]})}}}]);
//# sourceMappingURL=438.30c821cc.chunk.js.map