"use strict";(self.webpackChunksupport_phoenix=self.webpackChunksupport_phoenix||[]).push([[7290],{842:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"dna-knowledge-base/technical-documentation/version_control_in_dna","title":"Version Control in DNA","description":"This documents list git and its usage strategy for the sake of the DNA project.","source":"@site/docs/dna-knowledge-base/technical-documentation/version_control_in_dna.mdx","sourceDirName":"dna-knowledge-base/technical-documentation","slug":"/dna-knowledge-base/technical-documentation/version_control_in_dna","permalink":"/docs/dna-knowledge-base/technical-documentation/version_control_in_dna","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Version Control in DNA","sidebar":"TechnicalDocumentsSidebar","sidebar_position":3},"sidebar":"TechnicalDocumentsSidebar","previous":{"title":"A List of all Data Lineages in DNA","permalink":"/docs/dna-knowledge-base/technical-documentation/data_lineage"}}');var r=s(4848),t=s(8453),o=s(3297);const l={title:"Version Control in DNA",sidebar:"TechnicalDocumentsSidebar",sidebar_position:3},d=void 0,c={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Objectives of Version Control",id:"objectives-of-version-control",level:3},{value:"Version Control Tool/Platform",id:"version-control-toolplatform",level:3},{value:"Key Features",id:"key-features",level:3},{value:"Repository Structure",id:"repository-structure",level:3},{value:"Branching and Merging Strategy",id:"branching-and-merging-strategy",level:3},{value:"HOT_FIX Scenario",id:"hot_fix-scenario",level:4},{value:"Conventions\xa0",id:"conventions",level:3},{value:"Commit Guidelines\xa0",id:"commit-guidelines",level:3},{value:"Merge Protocol\xa0",id:"merge-protocol",level:3},{value:"Access and Permissions\xa0",id:"access-and-permissions",level:3},{value:"Backup and Recovery\xa0",id:"backup-and-recovery",level:3},{value:"Customization\xa0",id:"customization",level:3},{value:"References\xa0",id:"references",level:3},{value:"Annexure",id:"annexure",level:3},{value:"Naming Convention Table",id:"naming-convention-table",level:4},{value:"Flow Illustration",id:"flow-illustration",level:3},{value:"Folder Structure",id:"folder-structure",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return o.A||x("FileTree",!1),o.A.File||x("FileTree.File",!0),o.A.Folder||x("FileTree.Folder",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This documents list git and its usage strategy for the sake of the DNA project."}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"Version Control is an important part of any development process. It helps revert changes, as well as track forward changes effectively to ensure smooth and ongoing development."}),"\n",(0,r.jsx)(n.p,{children:"Version control also helps us keep the product afloat in case of bugs, crashes, production issues, or any other unlikely event(s) which may hamper the product."}),"\n",(0,r.jsx)(n.p,{children:"Another useful feature of version control is to let various teams work on their own thing, collaborate, and maintain multiple versions of the product."}),"\n",(0,r.jsx)(n.h3,{id:"objectives-of-version-control",children:"Objectives of Version Control"}),"\n",(0,r.jsx)(n.p,{children:"- To maintain a history of changes in the codebase."}),"\n",(0,r.jsx)(n.p,{children:"- To enable collaborative development across teams."}),"\n",(0,r.jsx)(n.p,{children:"- To ensure the stability and reliability of releases."}),"\n",(0,r.jsx)(n.p,{children:"- To streamline the review and approval processes for code changes."}),"\n",(0,r.jsx)(n.h3,{id:"version-control-toolplatform",children:"Version Control Tool/Platform"}),"\n",(0,r.jsx)(n.p,{children:"For DNA and its initiatives, we use GitHub for version control."}),"\n",(0,r.jsxs)(n.p,{children:["Link: ",(0,r.jsx)(n.a,{href:"https://att.sharepoint.com/sites/DevCentral/SitePages/Logging-into-GitHub-with-User-ID(1).aspx",children:"https://att.sharepoint.com/sites/DevCentral/SitePages/Logging-into-GitHub-with-User-ID(1).aspx"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"NOTE: To open the GitHub repository, you will need to login to the AT&T HVD first."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsx)(n.p,{children:"- Branching | Forking | Merging."}),"\n",(0,r.jsx)(n.p,{children:"- Distributed or centralized repository support."}),"\n",(0,r.jsx)(n.p,{children:"- Integration with CI/CD pipelines."}),"\n",(0,r.jsx)(n.h3,{id:"repository-structure",children:"Repository Structure"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Master:"})," This is the most important branch of the entire project. The master branch can only be used to clone or pull data from. The master branch will serve as the backup branch where the last known stable PROD ready code will be stored."]}),"\n",(0,r.jsxs)(n.p,{children:["This branch is ",(0,r.jsx)("u",{children:"NOT TO BE TOUCHED"})," since it will contain the production ready code. The master branch can only be used to clone or pull data from. As a developer, do not, under any circumstances, push your code to master branch."]}),"\n",(0,r.jsxs)(n.p,{children:["Name of the branch: ",(0,r.jsx)(n.code,{children:"master"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"prod"}),": This is the branch used for the deployment of production ready code with all the sign-off granted features. When post-production testing and sanity testing is complete, the stable code on the production branch will become the last known stable production-ready code and will be merged with the ",(0,r.jsx)(n.code,{children:"master"})," branch."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"develop"}),": This branch will act as the codebase for all features currently under development. All new features/changes/fixes, etc. must be developed within this branch."]}),"\n",(0,r.jsxs)(n.p,{children:["Name of the branch: ",(0,r.jsx)(n.code,{children:"develop"})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Note: It is recommended you create your own sub-branches for your specific features and develop and push your code to your individual sub-branch."}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"release"}),": This is where pre-production testing will happen with all the signed-off features ready to be deployed. This is a temporary branch which will be deleted when merged with PROD."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"FEATURE_feature_name"}),": These branches are specific to the individual features each team will be working on. Each feature branch will be cloned form the master branch at the start of a new development cycle. This is to be done irrespective of whether your feature has been fully implemented or not. The idea is to sync up all the latest changes/commits that have been pushed to production."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"uat"}),": This is where all the developed and unit tested code will be pushed to \u2013 the code on this branch will be used to deploy on the UAT environment."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"hot_fix"}),": This branch is cloned from master in case of any large scale or critical post-production issues and deployed while those issues are being fixed."]}),"\n",(0,r.jsx)(n.h3,{id:"branching-and-merging-strategy",children:"Branching and Merging Strategy"}),"\n",(0,r.jsx)(n.p,{children:"In DNA production and development, we follow the branching and merging strategy given below to ensure optimal and smooth work that offers the best results every time:"}),"\n",(0,r.jsx)(n.p,{children:"Flow is as follows:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Development cycle starts."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Development team clones ",(0,r.jsx)(n.code,{children:"master"})," branch into their respetive ",(0,r.jsx)(n.code,{children:"feature"})," branches by taking a pull from ",(0,r.jsx)(n.code,{children:"master"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"This will happen irrespective of whether the features in progress have been fully implemented or not. The idea is to have the latest production ready and stable code into the local repositories of each developer as well -  this way, they will keep making their latest developments with updated code."}),"\n"]}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When development of a feature is done, that feature branch will be merged into the ",(0,r.jsx)(n.code,{children:"develop"})," branch. The code on the ",(0,r.jsx)(n.code,{children:"develop"})," branch will be used to deploy at the dev environment.\r\n",(0,r.jsx)("div",{class:"bg-danger text-white",children:"The feature branch WILL NOT BE DELETED just yet."})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["All unit testing is done on the code on the ",(0,r.jsx)(n.code,{children:"develop"})," branch that is also deployed to the dev environment. Any changes to be made will be made by switching back to your respective ",(0,r.jsx)(n.code,{children:"feature"})," branch, and then merging with ",(0,r.jsx)(n.code,{children:"develop"})," branch again."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When the development team is satisfied with the feature development, the feature branch will be merged into the ",(0,r.jsx)(n.code,{children:"uat"})," branch.",(0,r.jsx)(n.br,{}),"\n","The code on the ",(0,r.jsx)(n.code,{children:"uat"})," branch will be utilized for deployment to the UAT environment."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"The QA team completes their round of testing, and a go-ahead is received for the specific features that have been granted a sign-off for deployment."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["All respective feature branches will merge to create ",(0,r.jsx)(n.code,{children:"release"}),", a temporary branch."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Pre-PROD testing is done on the UAT environment on only the signed-off features and given a go-ahead for deployment."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"release"})," is merged into the ",(0,r.jsx)(n.code,{children:"prod"})," branch."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Deployment team then uses the latest code on ",(0,r.jsx)(n.code,{children:"prod"})," to perform deployment on the PROD environment."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Post-PROD testing and sanity tests happen."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When deployed PROD code is deemed to be stable, ",(0,r.jsx)(n.code,{children:"prod"})," is merged with ",(0,r.jsx)(n.code,{children:"master"}),". ",(0,r.jsx)(n.code,{children:"release"})," gets deleted after sanity testing."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"master"})," ",(0,r.jsx)(n.strong,{children:"branch now has the last known stable code."})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.p,{children:["Notes:",(0,r.jsx)("br",{}),"\r\n",(0,r.jsx)("a",{href:"",class:"bg-danger text-white",children:"ONLY AFTER THE CURRENT BUILDS ARE DEEMED TO BE STABLE WITH ALL CHANGES/FEATURES/FIXES"}),", ",(0,r.jsx)(n.code,{children:"prod"})," branch is merged with ",(0,r.jsx)(n.code,{children:"master"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h4,{id:"hot_fix-scenario",children:"HOT_FIX Scenario"}),"\n",(0,r.jsx)(n.p,{children:"In case issues/bugs are reported during post-prod testing,"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Data will be pulled from the ",(0,r.jsx)(n.code,{children:"master"})," branch and deployed temporarily while post-prod issues are being addressed."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A temporary branch, ",(0,r.jsx)(n.code,{children:"hot_fix"})," will be cloned from the ",(0,r.jsx)(n.code,{children:"prod"})," branch. All hot fixes will be applied here, and the code will be pushed into ",(0,r.jsx)(n.code,{children:"release"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Development and QA teams will collaborate to resolve these post-production issues and push the codebase post-resolution to the ",(0,r.jsx)(n.code,{children:"prod"})," branch."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The fixed code in ",(0,r.jsx)(n.code,{children:"prod"})," is then deployed to the production environment."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Deployed code is tested again for sanity and successful working."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["When deemed at stable, this code will now be merged into ",(0,r.jsx)(n.code,{children:"master"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"master"})," ",(0,r.jsx)(n.strong,{children:"branch now has the last known stable code."})]}),"\n",(0,r.jsx)(n.h3,{id:"conventions",children:"Conventions\xa0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"It is expected of all teams working on DNA, its projects and initiatives to follow the same naming conventions along with the aforementioned branching and merging strategy.\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"This will create a standardized and uniform version control system that everyone in the entire project can independently understand and get on board with.\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use small characters, even if this guide may have used capitals to name all your branches.\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use hyphens to separate words in the same norm and underscores to separate the norms."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For example, a feature branch that seeks to implement a tail spend dashboard in development phase can be named ",(0,r.jsx)(n.code,{children:"tail-spend-dashboard\\_php\\_development"}),".\r\n",(0,r.jsx)("br",{}),"Here, tail spend dashboard is one norm, php is another and development is another. Those three have been separated by an underscore.\xa0\xa0"]}),"\n",(0,r.jsx)(n.h3,{id:"commit-guidelines",children:"Commit Guidelines\xa0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Frequency: Usual development guidelines say, \u201cevery logical change should be committed.\u201d\xa0\xa0"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"For DNA, we follow the same guiding principle of committing every logical change.\xa0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:'Message Format: Start with a capitalized verb (e.g., "ADD", "FIX", "UPDATE") and then describe your change. For example, \u201cFIX: Resolve API timeout issue in authentication module\u201d.\xa0\xa0'}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"There is no further restriction on how a commit message should be.\xa0"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"merge-protocol",children:"Merge Protocol\xa0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Use pull requests (PRs) or merge requests (MRs) for all merges.\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Perform peer reviews and testing before merging.\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Resolve conflicts before integration.\xa0"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"access-and-permissions",children:"Access and Permissions\xa0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Developers"}),": Read/write access to ",(0,r.jsx)(n.code,{children:"\\feature\\"})," and ",(0,r.jsx)(n.code,{children:"\\develop\\"})," branches.\xa0"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Reviewers"}),": Approval rights for Pull Requests / Merge Requests.\xa0"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Admins"}),": Manage repository settings and permissions, along with maintainer privileges.\xa0"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"backup-and-recovery",children:"Backup and Recovery\xa0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable periodic backups of the repository.\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Define recovery procedures in case of data loss.\xa0"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"customization",children:"Customization\xa0"}),"\n",(0,r.jsx)(n.p,{children:"This document is designed to only serve as a baseline. For any additional version control operation that lies outside of the purview of this document, please engage with stakeholders to adapt the practices based on project-specific needs.\xa0"}),"\n",(0,r.jsx)(n.p,{children:"These needs can be:\xa0"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Additional branches or workflows.\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Integration with other tools (e.g., JIRA, Jenkins).\xa0"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enhanced permissions or access controls.\xa0"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"references",children:"References\xa0"}),"\n",(0,r.jsxs)(n.p,{children:["Official documentation for GitHub can be found here: ",(0,r.jsx)(n.a,{href:"https://docs.github.com/en",children:"https://docs.github.com/en"})," ."]}),"\n",(0,r.jsx)(n.h3,{id:"annexure",children:"Annexure"}),"\n",(0,r.jsx)(n.h4,{id:"naming-convention-table",children:"Naming Convention Table"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Lifecycle"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Protected"}),(0,r.jsx)(n.th,{children:"Required/optional"}),(0,r.jsx)(n.th,{children:"Data"}),(0,r.jsx)(n.th,{children:"prefixes"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MASTER"}),(0,r.jsx)(n.td,{children:"Long-lived"}),(0,r.jsx)(n.td,{children:"Shared"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Yes"})}),(0,r.jsx)(n.td,{children:"Required as Backup of LKSV"}),(0,r.jsx)(n.td,{children:"Ingested"}),(0,r.jsx)(n.td,{children:"master/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"PROD"}),(0,r.jsx)(n.td,{children:"Long-lived"}),(0,r.jsx)(n.td,{children:"Shared"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Yes"})}),(0,r.jsx)(n.td,{children:"Required"}),(0,r.jsx)(n.td,{children:"Ingested"}),(0,r.jsx)(n.td,{children:"prod/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RELEASE"}),(0,r.jsx)(n.td,{children:"Short-Lived"}),(0,r.jsx)(n.td,{children:"Shared"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Required for merge of signed-off features and regression testing"}),(0,r.jsx)(n.td,{children:"Ingested"}),(0,r.jsx)(n.td,{children:"release/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"UAT"}),(0,r.jsx)(n.td,{children:"Long-lived"}),(0,r.jsx)(n.td,{children:"Shared"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Yes"})}),(0,r.jsx)(n.td,{children:"Required for client-side testing and deployment to UAT server"}),(0,r.jsx)(n.td,{children:"Ingested"}),(0,r.jsx)(n.td,{children:"uat/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DEV"}),(0,r.jsx)(n.td,{children:"Long-lived"}),(0,r.jsx)(n.td,{children:"Shared"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Yes"})}),(0,r.jsx)(n.td,{children:"Required for feature collab and testing"}),(0,r.jsx)(n.td,{children:"Ingested"}),(0,r.jsx)(n.td,{children:"dev/"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"FEATURE"}),(0,r.jsx)(n.td,{children:"Short-lived"}),(0,r.jsx)(n.td,{children:"Individual"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Should be used for all individual changes"}),(0,r.jsx)(n.td,{children:"Cloned"}),(0,r.jsx)(n.td,{children:"feature_"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HOT_FIX"}),(0,r.jsx)(n.td,{children:"Short-lived"}),(0,r.jsx)(n.td,{children:"Individual"}),(0,r.jsx)(n.td,{children:"No"}),(0,r.jsx)(n.td,{children:"Optional, required only during P1 issues."}),(0,r.jsx)(n.td,{children:"Cloned"}),(0,r.jsx)(n.td,{children:"hotfix/"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"flow-illustration",children:"Flow Illustration"}),"\n",(0,r.jsx)("a",{href:"/img/dna/technical-documentation-img/git-workflow strategy-dna-snowflake.png",target:"_blank",children:(0,r.jsx)("img",{src:"/img/dna/technical-documentation-img/git-workflow strategy-dna-snowflake.png",alt:"DNA Git Strategy"})}),"\n",(0,r.jsx)(n.h3,{id:"folder-structure",children:"Folder Structure"}),"\n",(0,r.jsx)(n.p,{children:"The following folder structure is to be used and followed for maintaining database files and objects such as SPs, VIEWS, FACT TABLES and more:"}),"\n",(0,r.jsx)(o.A,{children:(0,r.jsxs)(o.A.Folder,{name:"schema_name",children:[(0,r.jsxs)(o.A.Folder,{name:"tables",children:[(0,r.jsx)(o.A.File,{name:"table_1",comment:"(definition of the table \u2013 SQL File)"}),(0,r.jsx)(o.A.File,{name:"table_2",comment:"(definition of the table \u2013 SQL File)"})]}),(0,r.jsxs)(o.A.Folder,{name:"functions",children:[(0,r.jsx)(o.A.File,{name:"function_1",comment:"(definition of the function \u2013 SQL File)"}),(0,r.jsx)(o.A.File,{name:"function_2",comment:"(definition of the function \u2013 SQL File)"})]}),(0,r.jsxs)(o.A.Folder,{name:"procedures",children:[(0,r.jsx)(o.A.File,{name:"procedure_1",comment:"(definition of the procedure \u2013 SQL File)"}),(0,r.jsx)(o.A.File,{name:"procedure_2",comment:"(definition of the procedure \u2013 SQL File)"})]}),(0,r.jsxs)(o.A.Folder,{name:"views",children:[(0,r.jsx)(o.A.File,{name:"view_1",comment:"(definition of the view \u2013 SQL File)"}),(0,r.jsx)(o.A.File,{name:"view_2",comment:"(definition of the view \u2013 SQL File)"})]})]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3297:(e,n,s)=>{s.d(n,{A:()=>t});s(6540);var i=s(4848);function r(e){let{children:n}=e;return(0,i.jsx)("ul",{className:"file-tree",children:n})}r.Folder=function(e){let{name:n,children:s}=e;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("span",{className:"file-tree-folder-name",children:[n,"/"]}),s&&(0,i.jsx)("ul",{children:s})]})},r.File=function(e){let{name:n,comment:s}=e;return(0,i.jsxs)("li",{children:[(0,i.jsx)("span",{className:"file-tree-file-name",children:n}),s&&(0,i.jsxs)("span",{className:"file-tree-comment",children:[" // Add comment display",s]})]})};const t=r},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(6540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);