import '../app/globals.css';
import Main from '@/app/components/Index/main';
import AboutUs from '@/app/components/Index/aboutUs';
import Projects from '@/app/components/Index/projects';
import Email from '@/app/components/Index/email';
import MoveUpAndDown from '@/app/components/@shared/moveUpAndDown';

import ShowNewBlog from '@/app/components/@shared/showNewBlog';

export default function Index() {
  return (
    <div className='bg-gray-900 min-h-screen' 
    style={{
      backgroundImage: 'linear-gradient(to bottom right, #4b5563, #111827)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  }}>

    <ShowNewBlog />

     <Main />
     <AboutUs />
     <Projects />
     <Email />
     <MoveUpAndDown />
    </div>
  );
}
