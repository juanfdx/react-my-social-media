# React + TypeScript + Vite

User
 ├── creates ──> Posts
 └── writes ──> Comments

Post
 └── has many ──> Comments

Comment
 ├── belongs to ──> User
 └── belongs to ──> Post



 Post
 ├── author (User)
 └── comments[]
       └── author (User)