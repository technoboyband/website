import { useNavigate } from "react-router";
import { MENU} from "../../types/constants";
import '../../styles/CRT.css'

export default function CRTMenu() {
    const navigate = useNavigate()
    return (
        <div className="menuScreen">
            {MENU.map(item => (
              <button className="menuItems"
                key={item.path}
                onClick={() => navigate(item.path)}
                onMouseEnter={e => (e.currentTarget.style.color = '#ddb4ff')}
                onMouseLeave={e => (e.currentTarget.style.color = '#a0a0c8')}
              >
                {'> '}{item.label}
              </button>
            ))}
          </div>
    )
}
