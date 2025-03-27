import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Leaf, 
  ArrowRight, 
  CircleDollarSign,
  Calendar, 
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const HomePage = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState({});
  const heroRef = useRef(null);
  

  // Trust members with enhanced styling
  const trustMembers = [
    {
      name: "Digvijay Singh Tomar",
      position: "Chairman",
      image: '/assets/Dijvijay.jpg'
    },
    {
      name: "Narendra Kumar",
      position: "Tenured chairman",
      image: '/assets/narendra.jpg'
    },
    {
      name: "Suraj Singh",
      position: "General Secretary",
      image: '/assets/suraj.jpg'
    },
    {
      name: "Lova Kush",
      position: "Treasurer",
      image: '/assets/Lovakush.png'
    },
    {
      name: "Neeraj Kumar Shakya",
      position: "Vice President",
      image: '/assets/neerajkumar.jpg'
    },
    {
      name: "Yash",
      position: "Secretary",
      image: '/assets/yash.jpg'
    },
    {
      name: "Prashant",
      position: "Joint Secretary",
      image: '/assets/prashant.jpg'
    },
    {
      name: "Ravi Kumar",
      position: "Chief Administrative Officer",
      image: '/assets/ravi.jpg'
    },
  ];

  // Features & missions
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: "Spiritual Growth",
      description: "Nurturing spiritual development through traditional rituals, religious education, and cultural preservation."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Community Service",
      description: "Serving society through welfare initiatives including food distribution, health camps, and education support."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      title: "Cultural Preservation",
      description: "Preserving ancient traditions, scriptures and cultural practices for future generations."
    },
    {
      icon: <Leaf className="h-8 w-8 text-orange-600" />,
      title: "Environmental Care",
      description: "Promoting ecological balance through tree plantation and environmental awareness programs."
    }
  ];

  // Achievements
  const achievements = [
    {
      count: "10,000+",
      title: "People Served",
      icon: <Users className="h-8 w-8 text-white" />
    },
    {
      count: "25+",
      title: "Religious Events",
      icon: <Calendar className="h-8 w-8 text-white" />
    },
    {
      count: "₹0 Lakh+",
      title: "Donations Received",
      icon: <CircleDollarSign className="h-8 w-8 text-white" />
    },
    {
      count: "5,000+",
      title: "Plants Grown",
      icon: <Leaf className="h-8 w-8 text-white" />
    }
  ];

  // Intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section');
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Hero section parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/Bhadroli_devi.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center px-4 py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 inline-block"
          >
            <div className="text-6xl md:text-8xl text-orange-500 font-serif">ॐ</div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Maa Bhagwati <span className="text-orange-400">Charitable Trust</span>
          </motion.h1>
          
          <motion.div 
            className="h-1 w-40 bg-orange-500 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          ></motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Preserving Spirituality, Serving Humanity
          </motion.p>
          
          <motion.p 
            className="text-xl md:text-2xl text-orange-300 italic mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            सेवा परमो धर्मः
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              onClick={() => navigate('/donation')}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-xl font-semibold 
                       hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">₹</span>
              Make a Donation
            </motion.button>
            
            <motion.button
              onClick={() => navigate('/contact')}
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-xl font-semibold 
                       hover:bg-white/30 transition-all duration-300 shadow-lg flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.2, duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
            <div className="w-1 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </div>

      {/* About Section */}
      <section 
        className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white"
        data-section="about"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            animate={isVisible.about ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-orange-800 mb-6"
                initial={{ x: -50 }}
                animate={isVisible.about ? { x: 0 } : { x: -50 }}
                transition={{ duration: 0.8 }}
              >
                About Maa Bhagwati Trust
              </motion.h2>
              
              <motion.div 
                className="h-1 w-20 bg-orange-500 mb-6"
                initial={{ width: 0 }}
                animate={isVisible.about ? { width: 80 } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              ></motion.div>
              
              <motion.div 
                className="space-y-4 text-gray-700"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.about ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-lg">
                  Maa Bhagwati Charitable Trust was established with a divine purpose to serve humanity while preserving our rich spiritual heritage. Founded in 2019, our trust operates from the sacred land of Bhadroli, Bah, Agra.
                </p>
                
                <p className="text-lg">
                  Our trust is built on the principles of service, compassion, and spiritual growth. We believe in the ancient Sanskrit teaching "सेवा परमो धर्मः" (Service to others is the highest duty) and strive to incorporate this philosophy in all our initiatives.
                </p>
                
                <p className="text-lg">
                  Under the leadership of our dedicated trustees, we have successfully undertaken various religious and charitable activities, reaching thousands of people across Uttar Pradesh and beyond.
                </p>
                
                <div className="pt-4">
                  <motion.button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible.about ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Tilt 
                tiltMaxAngleX={10} 
                tiltMaxAngleY={10} 
                glareEnable={true} 
                glareMaxOpacity={0.3}
                glareColor="white"
                glarePosition="all"
                className="bg-white p-3 rounded-2xl shadow-2xl"
              >
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src="/assets/Bhadroli_devi.jpg" 
                    alt="Maa Bhagwati" 
                    className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Tilt>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        className="py-20 px-4 bg-white"
        data-section="features"
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.features ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
              Our Mission & Activities
            </h2>
            
            <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to preserving and promoting our spiritual heritage 
              while serving humanity through various charitable initiatives.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.features ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="rounded-full bg-gradient-to-br from-orange-100 to-orange-200 p-4 w-16 h-16 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Members Section with Improved Circular Motion */}
<section 
  className="py-20 px-4 bg-gradient-to-br from-orange-50 to-amber-100 overflow-hidden"
  data-section="trustees"
>
  <div className="max-w-7xl mx-auto">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible.trustees ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
        Our Trust Members
      </h2>
      
      <div className="h-1 w-24 bg-orange-500 mx-auto mb-6"></div>
      
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        Meet our dedicated team working tirelessly to fulfill the trust's mission and vision.
      </p>
    </motion.div>
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={isVisible.trustees ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      {/* Add progress indicators */}
      <div className="flex justify-center mb-6 space-x-2">
        {trustMembers.map((_, index) => (
          <div 
            key={`indicator-${index}`} 
            className="w-2 h-2 rounded-full bg-orange-200 trustee-indicator"
            data-index={index}
          ></div>
        ))}
      </div>
      
      <div className="carousel-container overflow-hidden pb-8">
        <div className="carousel-track flex">
          {/* First set of trustees */}
          {trustMembers.map((member, index) => (
            <div key={`first-${index}`} className="carousel-item flex-shrink-0 px-3 w-72" data-index={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: 
                        member.name.includes("Neeraj") ? "center 20%" : 
                        member.name.includes("Yash") ? "center 15%" :
                        member.name.includes("Digvijay") ? "center 30%" :
                        member.name.includes("Narendra") ? "center 25%" :
                        member.name.includes("Ravi") ? "center 15%" : 
                        "center 25%"  // Default position for better face centering
                    }}
                  />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-orange-50">
                  <h3 className="text-xl font-bold text-orange-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless looping */}
          {trustMembers.map((member, index) => (
            <div key={`duplicate-${index}`} className="carousel-item flex-shrink-0 px-3 w-72">
              <div className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ 
                      objectPosition: 
                        member.name.includes("Neeraj") ? "center 20%" : 
                        member.name.includes("Yash") ? "center 15%" :
                        member.name.includes("Digvijay") ? "center 30%" :
                        member.name.includes("Narendra") ? "center 25%" :
                        member.name.includes("Ravi") ? "center 15%" : 
                        "center 25%"  // Default position for better face centering
                    }}
                  />
                </div>
                <div className="p-6 bg-gradient-to-br from-white to-orange-50">
                  <h3 className="text-xl font-bold text-orange-800 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-orange-600">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-center mt-4 space-x-4">
        <button 
          onClick={() => document.querySelector('.carousel-track').style.animationPlayState = 'paused'}
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Pause
        </button>
        <button 
          onClick={() => document.querySelector('.carousel-track').style.animationPlayState = 'running'}
          className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
        >
          Play
        </button>
      </div>
    </motion.div>
  </div>

  {/* CSS for improved circular animation */}
  <style jsx>{`
    .carousel-container {
      width: 100%;
      position: relative;
      overflow: hidden;
      margin: 0 auto;
      max-width: 1200px;
    }
    
    .carousel-track {
      display: flex;
      animation: scrollCarousel 24s linear infinite;
      animation-delay: 0.5s;
      padding-left: calc(50% - 144px); /* Center first item */
    }
    
    .carousel-container:hover .carousel-track {
      animation-play-state: paused;
    }
    
    @keyframes scrollCarousel {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(calc(-${trustMembers.length} * 288px)); /* Exact width calculation */
      }
    }
    
    /* Indicator animations */
    .trustee-indicator {
      transition: all 0.3s ease;
    }
    
    .trustee-indicator.active {
      background-color: #f97316;
      transform: scale(1.5);
    }
    
    /* JavaScript to update indicators */
    @media (prefers-reduced-motion: no-preference) {
      document.addEventListener('DOMContentLoaded', () => {
        const track = document.querySelector('.carousel-track');
        const indicators = document.querySelectorAll('.trustee-indicator');
        const items = document.querySelectorAll('.carousel-item[data-index]');
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const index = entry.target.dataset.index;
              indicators.forEach(ind => ind.classList.remove('active'));
              indicators[index].classList.add('active');
            }
          });
        }, { threshold: 0.7 });
        
        items.forEach(item => observer.observe(item));
      });
    }
  `}</style>

  {/* Add JavaScript for indicator animation */}
  <script dangerouslySetInnerHTML={{ __html: `
    setTimeout(() => {
      const track = document.querySelector('.carousel-track');
      const indicators = document.querySelectorAll('.trustee-indicator');
      const items = document.querySelectorAll('.carousel-item[data-index]');
      
      // Set first indicator as active initially
      indicators[0].classList.add('active');
      
      // Update indicator based on visible trustee
      function updateIndicators() {
        const scrollPos = track.getBoundingClientRect().left;
        const containerCenter = document.querySelector('.carousel-container').getBoundingClientRect().width / 2;
        
        let closestItem = null;
        let closestDistance = Infinity;
        
        items.forEach(item => {
          const itemCenter = item.getBoundingClientRect().left + (item.getBoundingClientRect().width / 2);
          const distance = Math.abs(itemCenter - (scrollPos + containerCenter));
          
          if (distance < closestDistance) {
            closestDistance = distance;
            closestItem = item;
          }
        });
        
        if (closestItem) {
          const index = closestItem.dataset.index;
          indicators.forEach(ind => ind.classList.remove('active'));
          indicators[index].classList.add('active');
        }
      }
      
      // Update on animation frames
      function loop() {
        updateIndicators();
        requestAnimationFrame(loop);
      }
      
      requestAnimationFrame(loop);
    }, 1000);
  `}} />
</section>

      {/* Achievements Section */}
      <section 
        className="py-20 px-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white relative"
        data-section="achievements"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-16 bg-amber-100" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)' }}></div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.achievements ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact & Achievements
            </h2>
            
            <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
            
            <p className="text-lg max-w-3xl mx-auto">
              Through the blessings of Maa Bhagwati and with the support of our generous donors, 
              we have made a significant impact on the community.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {achievements.map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.achievements ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="rounded-full bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 mx-auto flex items-center justify-center mb-4 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{item.count}</div>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-24 px-4 bg-white"
        data-section="cta"
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible.cta ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <span className="text-6xl text-orange-500 font-serif">ॐ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">
            Join Our Mission Today
          </h2>
          
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Your contribution, no matter how small, can make a significant difference in preserving our spiritual heritage
            and supporting community welfare initiatives.
          </p>
          
          <motion.button
            onClick={() => navigate('/donation')}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-lg text-xl font-semibold 
                     hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="mr-2">₹</span>
            Make a Donation
          </motion.button>
        </motion.div>
      </section>

      {/* Custom CSS for Swiper */}
      <style>{`
        .swiper {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 50px;
        }
        
        .swiper-slide {
          background-position: center;
          background-size: cover;
          width: 300px;
          height: auto;
        }
        
        .swiper-pagination-bullet {
          background: #f97316;
        }
        
        .swiper-pagination {
          margin-top: 20px;
        }
        
        /* Custom animations */
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HomePage;