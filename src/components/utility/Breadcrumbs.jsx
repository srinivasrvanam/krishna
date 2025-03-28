import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  console.log('SV: pathSegments: '+pathSegments[0]);

  return (
    <nav>
      <ol className="flex w-[100%] md:w-[80%] lg:w-[70%] mx-auto">
        <li>
          <Link to="/" className="sv-btn-nav pl-2">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          
          const isLast = index === pathSegments.length - 1;
          console.log('SV: path: '+path);
          console.log('SV: segment: '+segment);
          let title = '';
          switch(segment){
            case 'svs':
              title = "Venkateswara";
              break;
            case 'bg':
              title = "Bhagavad Gita";
              break;
            case '1':
              title = (pathSegments[0] === 'svs') ? "Suprabhatham - सुप्रभातम्" : "1. Arjuna Vishada Yoga";
              break;
            case '2':
              title = (pathSegments[0] === 'svs') ? "Stotram - स्तोत्रम्" : "2. Sankhya Yoga";
              break;
            case '3':
              title = (pathSegments[0] === 'svs') ? "Prapatti - प्रपत्तिः" : "3. Karma Yoga";
              break;
            case '4':
              title = (pathSegments[0] === 'svs') ? "Mangalaashasanam - मङ्गलाशासनम्" : "4. Karma Sanyasa Yoga";
              break;
            default:
              title = segment;
              break;
          }
          return (
            <li key={path} className="flex pl-2">
              {isLast===false && <span className="mx-1 pr-2">&gt;</span>}
              {isLast ? (
                <span>{/*segment*/}</span>
              ) : (
                <Link to={path} className="sv-btn-nav">
                  {title}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
