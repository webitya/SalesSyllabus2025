import { Drawer, Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CustomDrawer = ({ toggleDrawer, isDrawerOpen }) => {
  const navigate = useNavigate();
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (menu) => {
    setOpenSubmenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    {
      label: "Services",
      submenu: [
        {
          label: "Revenue Acceleration Consulting",
          submenu: [
            { label: "Lead Generation Process Set Up ", href: "/lead-generation-process-setup" },
            { label: " Strategic account management", href: "/strategic-account-management" },
            { label: "Market Analysis", href: "/market-analysis" },
            { label: "Marketing Communication Strategy", href: "/marketing-communication" },
            { label: "Community Building", href: "/community-building" }
          ],
        },
        {
          label: "Sales and marketing team Management solution",
          submenu: [
            { label: "Sales & Marketing War Room", href: "/war-room" },
            { label: "Reporting Framework development", href: "/Sales-framework" },
            { label: "Learning centre", href: "/learning-centre" },
          ],
        },
        {
          label: "Sales team building solution",
          submenu: [
            { label: "Leadership Hiring & Mentoring", href: "/leadership-hiring-and-mentoring" },
            { label: "Sales-Ready ManPower : Pre-Trained Talent for Your Organization", href: "/sales-ready-manpower" },
            { label: "Master Class", href: "/master-class" },
            { label: "Interview as a services", href: "/interview" },
          ],
        },
      ],
    },
    {
      label: "Resources",
      submenu: [
        { label: "FAQs", href: "/faqs" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Blogs", href: "/blog" },
        { label: "Free Resources", href: "/free-resources" },
      ],
    },
  ];

  return (
    <Drawer
      style={{ padding: '16px', backgroundColor: '#f0f4f8' }}
      className="custom-drawer shadow-xl"
      placement="left"
      onClose={toggleDrawer}
      open={isDrawerOpen}
      width={280}
      closeIcon={<span className="text-gray-600 hover:text-gray-800 text-3xl">&times;</span>}
    >
      <ul className="drawer-menu-list text-lg font-semibold text-gray-800 space-y-5">
        {navigationLinks.map((item) => (
          <li key={item.label} className="drawer-menu-item hover:text-blue-400 transition-all ease-in-out bg-white rounded-md">
            {item.submenu ? (
              <>
                <button
                  className="w-full text-left flex items-center justify-between focus:outline-none hover:bg-gray-100 rounded-md px-3 py-2"
                  onClick={() => toggleSubmenu(item.label)}
                >
                  <span>{item.label}</span>
                  <span>{openSubmenus[item.label] ? '-' : '+'}</span>
                </button>
                {openSubmenus[item.label] && (
                  <ul className="submenu-list mt-2 space-y-3">
                    {item.submenu.map((sub) => (
                      <li key={sub.label} className="submenu-item bg-gray-100 hover:bg-gray-200 transition-colors rounded-lg px-2 py-1">
                        {sub.submenu ? (
                          <>
                            <button
                              className="w-full text-left flex items-center justify-between focus:outline-none hover:bg-gray-200 rounded-md px-2 py-1"
                              onClick={() => toggleSubmenu(sub.label)}
                            >
                              <span>{sub.label}</span>
                              <span>{openSubmenus[sub.label] ? '-' : '+'}</span>
                            </button>
                            {openSubmenus[sub.label] && (
                              <ul className="ml-4 mt-2 space-y-2">
                                {sub.submenu.map((demo) => (
                                  <li key={demo.label} className="submenu-item bg-gray-200 hover:bg-gray-300 transition-colors rounded-lg px-2 py-1">
                                    <Link to={demo.href} className="w-full block hover:text-blue-400 transition-colors" onClick={toggleDrawer}>
                                      {demo.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <Link to={sub.href} onClick={toggleDrawer} className="block w-full px-3 py-2 rounded-md hover:bg-gray-100">
                            {sub.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link to={item.href} onClick={toggleDrawer} className="block w-full px-3 py-2 rounded-md hover:bg-gray-100">
                {item.label}
              </Link>
            )}
          </li>
        ))}

        <li className="drawer-menu-item mt-6">
          <Link to="https://calendly.com/salessyllabus" target='_blank'>
            <Button
              className="w-full py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 transition-all"
            >
              Book Appointment
            </Button>
          </Link>
        </li>
      </ul>
    </Drawer>
  );
};

export default CustomDrawer;
