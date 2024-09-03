import { MY_DATA3 } from "@/utils/data";
import Link from "next/link";

export function Layout1() {
  return (
    <main className="p-3">
      <div className="h-full flex min-h-[calc(100vh-32px)] max-w-[1111px] m-auto bg-gray-100">
        <div className="text-black flex ">
          <div className="h-auto w-full">
            <div className="pl-10 pr-12 pt-6 justify-center text-black flex-col">
              <h1 className="max-[600px]:text-3xl text-4xl font-bold mt-0 pt-4">
                {MY_DATA3.profile.name}
              </h1>
              <div>
                <h1 className="text-2xl inline font-medium">
                  {MY_DATA3.profile.phone}
                </h1>
                <h1 className="text-2xl inline  font-medium">
                  |
                  <Link
                    className="text-teal-700"
                    href={`mailto:${MY_DATA3.profile.email}`}
                  >
                    Email
                  </Link>
                </h1>
                <h1 className="text-2xl inline font-medium">
                  |
                  <Link
                    className="text-teal-700"
                    href={MY_DATA3.profile.linkedIn}
                    target="black"
                  >
                    LinkedIn
                  </Link>
                </h1>
                <h1 className="text-2xl inline font-medium">
                  |
                  <Link
                    className="text-teal-700"
                    href={MY_DATA3.profile.gitHub}
                    target="black"
                  >
                    GitHub
                  </Link>
                </h1>
                <h1 className="text-2xl inline font-medium">
                  |
                  <Link
                    className="text-teal-700"
                    href={MY_DATA3.profile.portfolio}
                    target="black"
                  >
                    Portfolio
                  </Link>
                </h1>
              </div>
            </div>
            <div className="pl-10 pr-12 mt-4 leading-relaxed">
              <h1 className="text-2xl font-semibold">SUMMARY:</h1>
              <p className="rounded-xl text-lg leading-none">
                {MY_DATA3.profile.summary}
              </p>
            </div>
            <div className="pl-10 pr-12 mt-4">
              <h1 className="text-2xl font-semibold">EXPERIENCE:</h1>
              <div>
                {(MY_DATA3.experience || []).map((item, id) => {
                  return (
                    <div className="mb-3 rounded-xl" key={"exe" + id}>
                      <div>
                        <h1 className="text-xl font-semibold">{item.org}</h1>
                        <div className="text-lg">
                          <b className="inline font-semibold">{item.role}</b>
                          <p className="inline">{item.status}</p>
                        </div>
                      </div>
                      {/* <div className="pl-6 text-lg">
                        {(item.summary || []).map((sumItem, sumId) => {
                          return (
                            <div
                              className="flex align-baseline leading-none gap-4"
                              key={"des" + sumId}
                            >
                              <h1> • </h1>
                              <p>{sumItem}</p>
                            </div>
                          );
                        })}
                      </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pl-10 pr-12 mt-4">
              <h1 className="text-2xl font-semibold">PROJECTS:</h1>
              <div>
                {(MY_DATA3.projects || []).map((proj, projId) => {
                  return (
                    <div className="mb-4" key={"proj" + projId}>
                      <h1 className="text-xl font-semibold">{proj.name}</h1>
                      <div className="flex items-center flex-wrap">
                        <b className="inline text-lg font-semibold">
                          Tech Stack: &nbsp;{" "}
                        </b>
                        {(proj.techStack || []).map((tech, idTech) => {
                          return (
                            <p className="text-lg" key={"tech" + idTech}>
                              {tech}
                              {idTech < proj.techStack.length - 1 && ","}
                              &nbsp;
                            </p>
                          );
                        })}
                      </div>
                      <div className="ml-4 leading-normal">
                        {(proj.description || []).map((des, idDes) => {
                          return (
                            <div
                              className="flex text-lg align-baseline leading-none gap-4"
                              key={"des" + idDes}
                            >
                              <h1> • </h1>
                              <p>{des}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="pl-10 pr-12 mt-4">
              <h1 className="text-2xl font-semibold">TECHNICAL SKILLS:</h1>
              <div>
                {(MY_DATA3.techSkills || []).map((skill, skillId) => {
                  if (skill.skills.length) {
                    return (
                      <div
                        className="ml-4 flex items-center leading-none"
                        key={"skill" + skillId}
                      >
                        <div className="flex text-lg align-baseline gap-4">
                          <b> • </b>
                          <b className="font-semibold">{skill.name}: </b>
                        </div>
                        &nbsp;
                        <div className="flex">
                          {(skill.skills || []).map((skillItem, idSkill) => {
                            return (
                              <div
                                className="align-baseline gap-4"
                                key={"skillItem" + idSkill}
                              >
                                <p className="text-lg ">
                                  {skillItem}
                                  {idSkill < skill.skills.length - 1 && ","}
                                  &nbsp;
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="pl-10 pb-6 pr-12 mt-4">
              <h1 className="text-2xl font-semibold">EDUCATION:</h1>
              <div className="">
                <div className="mb-4 text-lg">
                  <b className="inline font-semibold">
                    {MY_DATA3.education.institute},
                  </b>
                  <p className="inline"> {MY_DATA3.education.ug}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
