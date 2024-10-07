function skillsMember() {
  return {
    name: 'John Doe',
    skills: ['JavaScript', 'React', 'Node', 'MongoDB'],
    showSkills: function() {
      this.skills.forEach(skill => {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}