const Footer = () => {
  return (
    <div className="w-full h-18 bg-primary text-secondary dark:text-primary text-sm leading-tight transition-all duration-300 rounded-[16px]">
      <div className="flex flex-col sm:flex-row items-center py-4 gap-2 sm:gap-7 justify-center">
        <p>Terrence Ou {new Date().getFullYear()}</p>
        <div className="flex flex-col items-center sm:flex-row">
          <div>
            <a
              href="https://github.com/terrence-ou/"
              target="_blank"
              className="px-3 hover:underline hover:cursor-pointer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/tingsong-ou-231931196/"
              target="_blank"
              className="px-3 border-l hover:underline hover:cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ou_terrence"
              target="_blank"
              className="px-3 border-l hover:underline hover:cursor-pointer"
            >
              X (Twitter)
            </a>
            <a
              href="mailto:terrence@clickvisionstudio.com"
              className="px-3 border-l hover:underline hover:cursor-pointer"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
