import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

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
              title = "Suprabhatham - सुप्रभातम्";
              break;
            case '2':
              title = "Stotram - स्तोत्रम्";
              break;
            case '3':
              title = "Prapatti - प्रपत्तिः";
              break;
            case '4':
              title = "Mangalaashasanam - मङ्गलाशासनम्";
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
