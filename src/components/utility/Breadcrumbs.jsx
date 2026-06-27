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
          // console.log('SV: index: '+index);
          // console.log('SV: pathSegments.length: '+pathSegments.length);
          // console.log('SV: pathSegments[0]: '+pathSegments[0]);
          // console.log('SV: path: '+path);
          // console.log('SV: segment: '+segment);
          let title = '';

          if(pathSegments[0] === 'rama') title = 'Sarga ' + segment;

          switch(segment){
            case 'svs':
              title = "Venkateswara";
              break;
            case 'bg':
              title = "Bhagavad Gita";
              break;
            case 'vsn':
              title = "Sahasranamam";
              break;
            case 'las':
              title = "Ashtottaram";
              break;
            case 'gps':
              title = "Pancharatnam";
              break;
            case 'da':
              title = "Damodara Ashtakam";
              break;
            case 'hc':
              title = "Hanuman Chalisa";
              break;
            case 'rama':
              title = "Ramayanam - Bala Kanda";
              break;
            case '1':
              if(pathSegments[0] === 'svs') title = "Suprabhatham";
              if(pathSegments[0] === 'bg') title = "1. Arjuna Vishada Yoga";
              if(pathSegments[0] === 'vsn') title = "पूर्व पीठिका";
              if(pathSegments[0] === 'las') title = "पूर्व पीठिका";
              if(pathSegments[0] === 'gps') title = "गणेश पञ्चरत्नम्";
              if(pathSegments[0] === 'da') title = "दामोदराष्टकम्";
              if(pathSegments[0] === 'hc') title = "Chalisa";
              break;
            case '2':
              if(pathSegments[0] === 'svs') title = "Stotram";
              if(pathSegments[0] === 'bg') title = "2. Sankhya Yoga";
              if(pathSegments[0] === 'vsn') title = "न्यासः";
              if(pathSegments[0] === 'las') title = "लक्ष्मी अष्टोत्तरम्";
              break;
            case '3':
              if(pathSegments[0] === 'svs') title = "Prapatti";
              if(pathSegments[0] === 'bg') title = "3. Karma Yoga";
              if(pathSegments[0] === 'vsn') title = "ध्यानम्";
              if(pathSegments[0] === 'las') title = "फलश्रुतिः";
              break;
            case '4':
              if(pathSegments[0] === 'svs') title = "Mangalaashasanam";
              if(pathSegments[0] === 'bg') title = "4. Karma Sanyasa Yoga";
              if(pathSegments[0] === 'vsn') title = "सहस्रनामम्";
              break;
            case '5':
              if(pathSegments[0] === 'vsn') title = "उत्तर पीठिका";
              break;
            default:
              title = segment;
              break;
          }
          if(index === 2) title = segment;

          return (
            <li key={path} className="flex pl-2">
              <span className="mx-1 pr-2">&gt;</span>
              {/* {isLast===false && <span className="mx-1 pr-2">&gt;</span>} */}
              {isLast ? (
                <span>{title}</span>
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
