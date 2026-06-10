import React from "react";
import { useNavigate } from "react-router";
import { MENU} from "../../types/constants";
import '../../styles/CRT.css'

export default function CRTMenu({ style }: { style?: React.CSSProperties }) {
    const navigate = useNavigate()
    return (
        <div className="menuScreen" style={style}>
            {MENU.map(item => (
              <button className="menuItems"
                key={item.path}
                onClick={() => navigate(item.path)}
              >
                {'> '}{item.label}
              </button>
            ))}
          </div>
    )
}
