import Head from "next/head";
import "../../public/style.css";

export default function Me() {
  return (
    <>
      <Head>
        <title>me</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <div style={{ backgroundColor: "blue" }}>
        <h1 style={{ color: "white", textAlign: "center" }}>
          <span className="marquee">who cares?</span>{" "}
        </h1>
      </div>
      <div className="grid">
        <div className="module">
          <p>
            <a href="https://read.cv/briantan">hi, im brian</a>
          </p>
        </div>
        <div className="module">
          <div className="module1">
            <p>
              b. 2004, santa rosa. currently a 4th year computer science
              student. looking to build software for someone. i grew up in
              singapore, but now, i spend my days making computers do things in
              rockville, md. in the future, i would like to go back to san
              francisco for a few years, and experience sf tech for myself :-)
            </p>
          </div>
        </div>
        <div className="module">
          <p>
            <a href="https://github.com/yoleuh">github</a>
          </p>
        </div>
        <div className="module">
          <p>
            <a href="mailto:tan.1220@osu.edu">mail</a>
          </p>
        </div>
      </div>
    </>
  );
}