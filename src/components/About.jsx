import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Vijay, a Computer Science Engineering student with a
          passion for software development. I have strong communication and
          leadership skills, and I aim to apply my technical knowledge to build
          innovative and impactful software solutions. I strive to learn
          continuously and contribute meaningfully to the tech community.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl mb-4">Education</h1>
        <ul className="list-disc pl-5 space-y-3 text-gray-800">
          <li>
            <span className="text-lg font-bold">
              Higher Secondary Education
            </span>
            <br />
            <span className="text-sm text-gray-600">
              SGM College, Karad(2019-2021)
            </span>
            <span className="text-sm text-gray-600">- Percentage: 92.5%</span>
          </li>
          <li>
            <span className="text-lg font-bold">
              Bachelor of Technology in Computer Science Engineering
            </span>
            <br />
            <span className="text-sm text-gray-600">
              Rajarambapu Institute of Technology (2021-2025)
            </span>
            <span className="text-sm text-gray-600">- Overall CGPA: 9.0</span>
          </li>
        </ul>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-2xl mb-4">
          Skills & Expertise
        </h1>
        <ul className="list-disc pl-5 space-y-3 text-gray-800">
          <li>
            <span className="text-lg font-bold">Programming Languages:</span>
            <span className="text-m">
              {" "}
              Proficient in Java,JS,C#,Python, C++
            </span>
          </li>
          <li>
            <span className="text-lg font-bold">
              Software Tools/Technologies:
            </span>
            <span className="text-m">
              {" "}
              Experienced with React, Spring Boot, MySQL, Hibernate,ASP .net Web
              api Git, Microsoft Azure
            </span>
          </li>
          <li>
            <span className="text-lg font-bold">Problem-Solving:</span>
            <span className="text-m">
              {" "}
              Excellent analytical and debugging skills with a focus on
              delivering optimized solutions
            </span>
          </li>
          <li>
            <span className="text-lg font-bold">
              Communication & Collaboration:
            </span>
            <span className="text-m">
              {" "}
              Effective communicator with strong teamwork and leadership
              abilities
            </span>
          </li>
        </ul>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-2xl mb-4">
          Professional Experience
        </h1>
        <ul className="list-disc pl-5 space-y-3 text-gray-800">
          <li>
            <span className="text-lg font-bold">
              Intern, Software Engineering
            </span>
            <span className="text-m text-gray-600">, Bentley Systems</span>
            <span className="text-m text-gray-500">(Jan 2025 - Present)</span>
            <br />
            <span className="text-sm">
              - Selected as an intern under the Undergraduate Development
              Program to work on cutting-edge software engineering projects.
            </span>
            <br />
            <span className="text-sm">
              - Collaborating with senior engineers on various software
              development tasks and projects.
            </span>
            <br />
            <span className="text-sm">
              - Gaining hands-on experience with cutting-edge technologies and
              contributing to the optimization of existing systems.
            </span>
          </li>

          <li>
            <span className="text-lg font-bold">
              President, Computer Science Engineering Department
            </span>
            <span className="text-m text-gray-600">
              , Rajarambapu Institute of Technology
            </span>
            <span className="text-m text-gray-500">
              (June 2023 - September 2024)
            </span>
            <br />
            <span className="text-sm">
              - Led the student body of the CSE department, managing a team and
              organizing academic and extracurricular activities.
            </span>
            <br />
            <span className="text-sm">
              - Coordinated technical workshops, seminars, and events, improving
              student engagement and learning opportunities.
            </span>
            <br />
            <span className="text-sm">
              - Handled the organization of **Technosphere 2k23**, a
              central-level technical event, overseeing logistics, promotions,
              and participation coordination.
            </span>
          </li>
        </ul>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl mb-4">
          Achievements & Awards
        </h1>
        <ul className="list-disc pl-5 space-y-3 text-gray-800">
          <li>
            <span className="text-lg font-bold">
              Ranked 10th on GeeksforGeeks Platform in College
            </span>
            <br />
            <span className="text-sm text-gray-600">
              - Ranked 10th among college peers on the GeeksforGeeks platform
              for contributions and problem-solving.
            </span>
            <br />
            <span className="text-sm text-gray-600">
              -Solved 650+ problems across various topics on GeeksforGeeks
            </span>
          </li>
          <li>
            <span className="text-lg font-bold">
              Solved 200+ problems on LeetCode
            </span>
            <br />
            <span className="text-sm text-gray-600">
              - Completed 200+ problems on LeetCode, enhancing knowledge of
              algorithms and data structures.
            </span>
          </li>
        </ul>

        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl mb-4">
          Mission Statement
        </h1>
        <p className="text-gray-800">
          My mission is to leverage my skills and creativity to deliver
          innovative software solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons in the field of software
          development, with a focus on various technologies.
        </p>
      </div>
    </div>
  );
}

export default About;
