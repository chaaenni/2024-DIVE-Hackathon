

export default function Home() {
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY > 0) {
      if(!sticky) {
        setSticky(true);
        console.log('sticky');
      }
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  return (
    <div className="bg-white">
      <span>hello 채연!</span>
    </div>
  );
}
