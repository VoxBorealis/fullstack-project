import axios from 'axios'
import { useEffect } from 'react'

const BarbarianSkillTree = () => {
  useEffect(() => {
    const fetchSkillIcons = async () => {
      const url = 'http://media.blizzard.com/d3/icons/skills/64/monk_lashingtailkick.png'
      try {
        console.log(`axios get: ${url}`)
        const result = await axios.get(url)
        console.log(result)
      } catch (e) {
        console.error(e);
      }
    };
    void fetchSkillIcons();
  }, [])



  return (
    <div>
      heyyyy
    </div>
  )
}

export default BarbarianSkillTree