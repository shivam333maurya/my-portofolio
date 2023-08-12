"use client";
import { MY_DATA } from "./data";

export default function Home() {
  console.log({ MY_DATA });
  return (
    <main className="p-3">
      <div className="h-full flex min-h-[calc(100vh-32px)] max-w-[1111px] m-auto bg-gray-200">
        <div className="text-black flex ">
          <div className="h-auto bg-green-100 w-full shadow-[-10px_-10px_40px_5px_lightblue_inset]">
            <div className="h-44 flex bg-green-200 justify-center text-black shadow-[-10px_82px_100px_5px_#897d7d9c_inset] flex-col">
              <h1 className="text-center text-5xl font-bold mt-0 pt-4">
                {MY_DATA.profile.name}
              </h1>
              <h1 className="text-center text-3xl font-medium mt-4 mb-2">
                {MY_DATA.profile.profile}
              </h1>
            </div>
            <div className="pl-8 pr-10 leading-relaxed">
              <p className="mt-4">{MY_DATA.profile.aboutMe}</p>
            </div>
            <div className="pl-8 pr-10 mt-4">
              <h1 className="text-2xl mb-4 text-teal-500 font-semibold">
                EXPERIENCE
              </h1>
              <div>
                {(MY_DATA.experience || []).map((item, id) => {
                  return (
                    <div className="" key={"exe" + id}>
                      <div className="mb-4">
                        <h1 className="text-xl font-semibold">{item.org}</h1>
                        <p>{item.status}</p>
                      </div>
                      <div>
                        {(item.projects || []).map((proj, projId) => {
                          return (
                            <div className="mb-4" key={"proj" + projId}>
                              <h1 className="text-xl font-semibold">
                                {proj.name}
                              </h1>
                              <div className="ml-4 leading-relaxed">
                                {(proj.description || []).map((des, idDes) => {
                                  return (
                                    <div
                                      className="flex align-baseline gap-4"
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
                  );
                })}
              </div>
            </div>
          </div>
          <div className="bg-slate-800 w-1/2 text-white">
            <div className="h-44 leading-relaxed flex gap-0.5 justify-center flex-col pl-6 pr-8">
              <h1 className="text-left text-sm font-medium pt-4">
                {MY_DATA.profile.address}
              </h1>
              <h1 className="text-left text-sm font-medium">
                {MY_DATA.profile.email}
              </h1>
              <h1 className="text-left text-sm font-medium">
                Contact no.: {MY_DATA.profile.phone}
              </h1>
              <h1 className="text-left text-teal-500 text-sm font-medium">
                <a href={MY_DATA.profile.linkedIn} target="black">
                  {MY_DATA.profile.linkedIn}
                </a>
              </h1>
            </div>
            <div className="pl-6 pr-8 mt-4">
              <h1 className="text-2xl mb-4 text-teal-500 font-semibold">
                EDUCATION
              </h1>
              <div className="">
                <div className="mb-4">
                  <h1 className="text-xl font-semibold">
                    {MY_DATA.education.institute}
                  </h1>
                  <p>{MY_DATA.education.ug}</p>
                </div>
              </div>
            </div>
            <div className="pl-6 pr-8 mt-4">
              <h1 className="text-2xl mb-4 text-teal-500 font-semibold">
                SKILLS
              </h1>
              <div className="">
                {(MY_DATA.skills || []).map((item, skillsId) => {
                  return (
                    <div className="mb-4" key={"skills" + skillsId}>
                      <h1 className="text-xl text-teal-200 font-semibold">
                        {item.name}
                      </h1>
                      <div className="ml-6">
                        {(item.skillData || []).map((skill, skillId) => {
                          return (
                            <div
                              className="flex align-baseline gap-4"
                              key={"skill" + skillId}
                            >
                              <h1> • </h1>
                              <p>{skill}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
