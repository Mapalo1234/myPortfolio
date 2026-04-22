import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">Worked on Projects</h2>
        </div>
        <div>
          <a 
          href="https://github.com/Mapalo1234"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
          }
        
          }
          >
          <button className="btn btn-github">
           <svg
             xmlns="http://www.w3.org/2000/svg"
            width="32"
             height="32"
             viewBox="0 0 24 24"
            fill="currentColor"
          >
          <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0.5C5.64873 0.5 0.5 5.64873 0.5 12C0.5 17.0852 3.86506 21.3799 8.43828 22.8886C9.0375 22.9986 9.25625 22.6412 9.25625 22.335V20.4625C6.25 21.0688 5.6125 19.2062 5.6125 19.2062C5.1 17.8937 4.35 17.5437 4.35 17.5437C3.3125 16.825 4.43125 16.8437 4.43125 16.8437C5.58125 16.925 6.1875 18.0312 6.1875 18.0312C7.2125 19.7875 8.84375 19.2875 9.5 19C9.6 18.2562 9.9 17.7437 10.2313 17.4562C7.8375 17.1937 5.325 16.2812 5.325 12.2187C5.325 11.0625 5.7375 10.1187 6.4125 9.375C6.3 9.0875 5.925 7.925 6.525 6.375C6.525 6.375 7.425 6.0875 9.25 7.25C10.1187 7 11.05 6.875 12 6.875C12.95 6.875 13.8813 7 14.75 7.25C16.575 6.0875 17.475 6.375 17.475 6.375C18.075 7.925 17.7 9.0875 17.5875 9.375C18.2625 10.1187 18.675 11.0625 18.675 12.2187C18.675 16.2937 16.1562 17.1875 13.7562 17.4437C14.1687 17.8 14.5312 18.5062 14.5312 19.5687V22.335C14.5312 22.6437 14.75 23.0062 15.3562 22.8875C19.9312 21.375 23.2937 17.0812 23.2937 12C23.2937 5.64873 18.1512 0.5 12 0.5Z"
           />
        </svg>
            Visit My GitHub
            
          </button>
          </a>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                <a href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none"
                }}
                >
                {/* {item.link} */}
                  View In Github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
