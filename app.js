var i = 0;
var text = 'The HealthCare Clinic provides primary medical care by an advanced practitioner. The clinic sees patients with immediate needs, such as strep throat or the flu and provides primary and follow-up care for conditions requiring ongoing treatment. Counseling services are provided by counselors for a variety of issues such as depression, anxiety, substance abuse, divorce or parenting concerns. It is a school-based pediatric clinic, providing primary medical care for any children ages 2 weeks to 21 years with an experienced staff of pediatric nurse practitioners, nurses and medical assistants. Our goal is to develop a positive, communicative relationship with parents to provide an excellent quality of care for their children.';
var speed = 1;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("about-p").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

