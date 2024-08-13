// Services.js
import React from 'react';
import { useInView } from 'react-intersection-observer';

const ServiceSection = ({ title, content, onInView }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  React.useEffect(() => {
    onInView(inView, title);
  }, [inView, title, onInView]);

  return (
    <div ref={ref} style={{ height: '100vh', padding: '50px', border: '1px solid black' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

const Services = ({ onInView }) => {
  const services = [
    { title: 'Service 1', content: 'Description of Service 1' },
    { title: 'Service 2', content: 'Description of Service 2' },
    { title: 'Service 3', content: 'Description of Service 3' },
    { title: 'Service 4', content: 'Description of Service 4' },
  ];

  return (
    <div>
      {services.map((service, index) => (
        <ServiceSection key={index} title={service.title} content={service.content} onInView={onInView} />
      ))}
    </div>
  );
};

export default Services;
