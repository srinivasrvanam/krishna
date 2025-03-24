import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-gray-600 text-sm">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="dark:text-gray-200 hover:text-yellow-500">
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
              title = "Sri Venkateswara";
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
            <li key={path} className="flex items-center">
              <span className="mx-2">&gt;</span>
              {isLast ? (
                <span className="text-gray-800 font-semibold">{segment}</span>
              ) : (
                <Link to={path} className="dark:text-gray-200 hover:text-yellow-500">
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
