import {Home, Plus, Heart} from "lucide-react"

const Navbar = () => {
  return (
    <section className="fixed bottom-0 w-full px-5 mb-5">
      <nav className="bg-black py-6 px-11 rounded-full w-full">
        <div className="flex justify-between items-center">
          <Home color="white" size={21} />
          <Plus color="white" size={21} />
          <Heart color="white" size={21} />
        </div>
      </nav>
    </section>
  );
}

export default Navbar
