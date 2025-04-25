import React from 'react';
import './bubble.css';

export const Bubblegraph = () => {
  const issues = [
    {
      id: 1,
      name: "Anubhav Industries",
      address: "123 Industrial Park, Mumbai",
      mobileNumber: "9876543210",
      company: "Anubhav Corp",
      totalOrder: 50,
      orderId: 1001,
      image: "https://picsum.photos/seed/anubhav/100/100"
    },
    {
      id: 2,
      name: "Tech Solutions",
      address: "456 Tech Hub, Bangalore",
      mobileNumber: "9123456789",
      company: "Tech Ltd",
      totalOrder: 30,
      orderId: 1002,
      image: "https://picsum.photos/seed/tech/100/100"
    },
    {
      id: 3,
      name: "Global Traders",
      address: "789 Commerce Street, Delhi",
      mobileNumber: "9988776655",
      company: "Global Inc",
      totalOrder: 45,
      orderId: 1003,
      image: "https://picsum.photos/seed/global/100/100"
    },
    {
      id: 4,
      name: "Bright Innovations",
      address: "101 Innovation Park, Hyderabad",
      mobileNumber: "9765432109",
      company: "Bright Co",
      totalOrder: 25,
      orderId: 1004,
      image: "https://picsum.photos/seed/bright/100/100"
    },
    {
      id: 5,
      name: "Star Enterprises",
      address: "202 Business Bay, Chennai",
      mobileNumber: "9654321098",
      company: "Star Ltd",
      totalOrder: 60,
      orderId: 1005,
      image: "https://picsum.photos/seed/star/100/100"
    },
    {
      id: 6,
      name: "Pioneer Logistics",
      address: "303 Transport Nagar, Kolkata",
      mobileNumber: "9543210987",
      company: "Pioneer Group",
      totalOrder: 40,
      orderId: 1006,
      image: "https://picsum.photos/seed/pioneer/100/100"
    },
    {
      id: 7,
      name: "Elite Manufacturers",
      address: "404 Factory Lane, Ahmedabad",
      mobileNumber: "9432109876",
      company: "Elite Industries",
      totalOrder: 55,
      orderId: 1007,
      image: "https://picsum.photos/seed/elite/100/100"
    },
    {
      id: 8,
      name: "Vision Tech",
      address: "505 Cyber City, Pune",
      mobileNumber: "9321098765",
      company: "Vision Corp",
      totalOrder: 35,
      orderId: 1008,
      image: "https://picsum.photos/seed/vision/100/100"
    },
    {
      id: 9,
      name: "Green Energy Solutions",
      address: "606 Eco Park, Jaipur",
      mobileNumber: "9210987654",
      company: "Green Energy Ltd",
      totalOrder: 20,
      orderId: 1009,
      image: "https://picsum.photos/seed/green/100/100"
    },
    {
      id: 10,
      name: "Royal Imports",
      address: "707 Trade Center, Surat",
      mobileNumber: "9109876543",
      company: "Royal Co",
      totalOrder: 65,
      orderId: 1010,
      image: "https://picsum.photos/seed/royal/100/100"
    },
  ];

  const minOrder = Math.min(...issues.map(issue => issue.totalOrder));
  const maxOrder = Math.max(...issues.map(issue => issue.totalOrder));
  const minRadius = 25;
  const maxRadius = 80;

  const width = 1000;
  const height = 800; 
  const centerX = width / 2;
  const centerY = height / 2;
  const positionedBubbles = [];
  const bubbles = issues.map((issue, index) => {
    const radius = minRadius + (maxRadius - minRadius) * (issue.totalOrder - minOrder) / (maxOrder - minOrder);
    let x, y;
    let attempts = 0;
    const maxAttempts = 100;

    do {
      x = radius + Math.random() * (width - 2 * radius);
      y = radius + Math.random() * (height - 2 * radius);
      attempts++;
    } while (
      attempts < maxAttempts &&
      positionedBubbles.some(b => b.x && b.y && Math.hypot(x - b.x, y - b.y) < radius + b.radius + 10)
    );

    const orbitRadius = 50 + index * 15; // Reduced from 100 + index * 20 to keep bubbles in view
    const animationDuration = 10 + index * 2;

    const bubble = { ...issue, x, y, radius, orbitRadius, animationDuration };
    positionedBubbles.push(bubble);
    return bubble;
  });

  return (
    <div className="bubble-graph-container">
      <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="bubble-graph">
        <defs>
          {bubbles.map(issue => (
            <clipPath key={issue.id} id={`clip-${issue.id}`}>
              <circle cx={issue.x} cy={issue.y} r={issue.radius} className="bubble-clip" />
            </clipPath>
          ))}
        </defs>
        {bubbles.map(issue => (
          <g key={issue.id} className="bubble-group" style={{
            animation: `revolve ${issue.animationDuration}s linear infinite`,
            '--orbit-radius': `${issue.orbitRadius}px`,
            transformOrigin: `${centerX}px ${centerY}px`
          }}>
            <image
              x={issue.x - issue.radius}
              y={issue.y - issue.radius}
              width={issue.radius * 2}
              height={issue.radius * 2}
              href={issue.image}
              clipPath={`url(#clip-${issue.id})`}
              className="bubble-image"
            />
            <circle
              cx={issue.x}
              cy={issue.y}
              r={issue.radius}
              className="bubble-border"
            />
            <text
              x={issue.x}
              y={issue.y + issue.radius + 20}
              textAnchor="middle"
              className="bubble-label"
            >
              {issue.name} {issue.totalOrder}
            </text>
          </g>
        ))}
      </svg>
      <h2>Company Orders Bubble Graph</h2>
    </div>
  );
};