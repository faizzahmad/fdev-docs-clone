export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageURL: '/blank-document.svg',
        initialContent : ""
    },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageURL: '/software-proposal.svg',
        initialContent: `
            <h1>Software Development Proposal</h1>
            <p><strong>Prepared For:</strong> ABC Corporation</p>
            <p><strong>Prepared By:</strong> XYZ Software Solutions</p>
            <h2>Project Overview</h2>
            <p>This proposal outlines the plan to develop a custom CRM platform to streamline client communication and project management.</p>
            <h2>Objectives</h2>
            <ul>
                <li>Improve customer relationship management</li>
                <li>Enhance data analytics</li>
                <li>Provide real-time reporting</li>
            </ul>
            <h2>Timeline</h2>
            <p>Project duration is estimated at 6 months from initiation.</p>
        `
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageURL: '/project-proposal.svg',
        initialContent: `
            <h1>Project Proposal</h1>
            <p><strong>Project Name:</strong> Green Energy Initiative</p>
            <p><strong>Submitted By:</strong> EcoSolutions Ltd.</p>
            <h2>Background</h2>
            <p>The initiative aims to reduce carbon emissions by integrating solar panels in local municipalities.</p>
            <h2>Goals</h2>
            <ol>
                <li>Reduce municipal energy costs</li>
                <li>Promote sustainability</li>
                <li>Encourage community engagement</li>
            </ol>
            <h2>Budget</h2>
            <p>Estimated cost: $500,000</p>
        `
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageURL: '/business-letter.svg',
        initialContent: `
            <p>John Doe<br>XYZ Corporation<br>123 Business Rd.<br>City, State, 12345</p>
            <p>April 7, 2025</p>
            <p>Dear Mr. Doe,</p>
            <p>I am writing to confirm our meeting scheduled for April 10th at 10:00 AM regarding the Q2 marketing strategy.</p>
            <p>Sincerely,<br>Jane Smith<br>Marketing Manager<br>ABC Inc.</p>
        `
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageURL: '/cover-letter.svg',
        initialContent: `
            <p>Dear Hiring Manager,</p>
            <p>I am writing to express my interest in the Front-End Developer position at your company. With a strong background in React, Tailwind CSS, and performance optimization, I believe I can contribute meaningfully to your team.</p>
            <p>Attached is my resume for your review. Thank you for your time and consideration.</p>
            <p>Sincerely,<br>Alex Johnson</p>
        `
    },
    {
        id: "resume",
        label: "Resume",
        imageURL: '/resume.svg',
        initialContent: `
            <h1>Alex Johnson</h1>
            <p>Email: alex.johnson@example.com | Phone: (555) 123-4567</p>
            <h2>Professional Summary</h2>
            <p>Front-End Developer with 4+ years of experience building responsive web applications using React and Next.js.</p>
            <h2>Skills</h2>
            <ul>
                <li>HTML, CSS, JavaScript, TypeScript</li>
                <li>React, Next.js, Tailwind CSS</li>
                <li>RESTful APIs, Git, CI/CD</li>
            </ul>
            <h2>Experience</h2>
            <p><strong>Web Developer</strong>, TechNova – 2020–Present</p>
            <ul>
                <li>Built scalable user interfaces with React</li>
                <li>Optimized performance for large-scale projects</li>
            </ul>
        `
    },
    {
        id: "letter",
        label: "Letter",
        imageURL: '/letter.svg',
        initialContent: `
            <p>Dear Emily,</p>
            <p>I hope this letter finds you well. I wanted to thank you again for your help with the recent fundraiser. Your dedication and support truly made a difference.</p>
            <p>Looking forward to seeing you at the next event!</p>
            <p>Warm regards,<br>Chris</p>
        `
    },
];
