export type Question = {
  id: string
  statement: string
  strAgree: string
  valAgree: number
  strDisagree: string
  valDisagree: number
}

export const questions: Question[] = [
  { id: '00828262', statement: 'When situations change, you\'d rather go with the flow than rearrange resources in response.', strAgree: 'Flexibility', valAgree: 1, strDisagree: 'Organization', valDisagree: 1 },
  { id: '04491c10', statement: 'Winning over others is more exciting than being won over.', strAgree: 'Persuasion', valAgree: 1, strDisagree: 'Introspection', valDisagree: 1 },
  { id: '06cfaaf7', statement: 'You\'re more excited by connecting your current realities to the future than to the past.', strAgree: 'Vision', valAgree: 1, strDisagree: 'Perspective', valDisagree: 1 },
  { id: '144bdf61', statement: 'You believe organizational structures should be flexible and accommodating.', strAgree: 'Inclusion', valAgree: 1, strDisagree: 'Organization', valDisagree: 1 },
  { id: '18f8987d', statement: 'It\'s not whether you win or lose, but how you collaborate to play the game.', strAgree: 'Relationships', valAgree: 1, strDisagree: 'Winning', valDisagree: 1 },
  { id: '18feec27', statement: 'You prefer bringing people together with shared goals, instead of the power of persuasion.', strAgree: 'Unity', valAgree: 1, strDisagree: 'Persuasion', valDisagree: 1 },
  { id: '1f9f83b8', statement: 'You think having a well organized plan upfront is better than quickly course correcting along the way.', strAgree: 'Organization', valAgree: 1, strDisagree: 'Execution', valDisagree: 1 },
  { id: '245f31b3', statement: 'While having a solid structure is important, being open to flexibility is more valuable.', strAgree: 'Flexibility', valAgree: 1, strDisagree: 'Structure', valDisagree: 1 },
  { id: '26de8b8d', statement: 'Being democratic or meritocratic is more rewarding than being decisive.', strAgree: 'Unity', valAgree: 1, strDisagree: 'Authority', valDisagree: 1 },
  { id: '29fb1086', statement: 'Taking time to reflect and ponder feels like a waste of daylight.', strAgree: 'Productivity', valAgree: 1, strDisagree: 'Introspection', valDisagree: 1 },
  { id: '2f010f53', statement: 'You avoid difficult conversations.', strAgree: 'Unity', valAgree: 1, strDisagree: 'Unity', valDisagree: 0 },
  { id: '3287bb80', statement: 'It feels better to drive others to improve than it does to accept them as they are.', strAgree: 'Optimization', valAgree: 1, strDisagree: 'Inclusion', valDisagree: 1 },
  { id: '32bf5b56', statement: 'You are more cautious than adventurous.', strAgree: 'Prudence', valAgree: 1, strDisagree: 'Risk-Taking', valDisagree: 1 },
  { id: '35bef21e', statement: 'You would rather make a plan once and stick to it, than think of different ways to proceed.', strAgree: 'Execution', valAgree: 1, strDisagree: 'Tactics', valDisagree: 1 },
  { id: '36e86d1a', statement: 'You love coming up with new ideas.', strAgree: 'Conceptualization', valAgree: 2, strDisagree: 'Structure', valDisagree: 1 },
  { id: '3c66c4c8', statement: 'You prefer mentoring someone to working by yourself.', strAgree: 'Mentoring', valAgree: 1, strDisagree: 'Productivity', valDisagree: 2 },
  { id: '4ec9e7f3', statement: 'You\'d rather foster a culture of continuous learning than one that rewards enthusiasm.', strAgree: 'Learning', valAgree: 1, strDisagree: 'Motivation', valDisagree: 1 },
  { id: '5533d3ce', statement: 'Your optimism and energy are more persuasive than your vision of the road ahead.', strAgree: 'Motivation', valAgree: 1, strDisagree: 'Vision', valDisagree: 1 },
  { id: '5945ba8b', statement: 'You feel better assigning work equitably, than giving the biggest project to your most senior worker.', strAgree: 'Fairness', valAgree: 1, strDisagree: 'Impact', valDisagree: 1 },
  { id: '5c14a6d6', statement: 'Acting in alignment with your personal values is more important than the bottom line.', strAgree: 'Values', valAgree: 2, strDisagree: 'Impact', valDisagree: 1 },
  { id: '79f1d374', statement: 'It feels better to work quickly by yourself than more slowly with friends.', strAgree: 'Productivity', valAgree: 1, strDisagree: 'Relationships', valDisagree: 1 },
  { id: '7bc04081', statement: 'In the face of bad news, you\'d sooner say "It was meant to be this way" than "Look on the bright side".', strAgree: 'Interconnection', valAgree: 1, strDisagree: 'Motivation', valDisagree: 1 },
  { id: '7ca00b6c', statement: 'You prefer having contingency plans to troubleshooting in the heat of the moment.', strAgree: 'Tactics', valAgree: 1, strDisagree: 'Problem-Solving', valDisagree: 1 },
  { id: '82e4fd8e', statement: 'You get more out of rallying folks around a common goal than seeing each of their points of view.', strAgree: 'Unity', valAgree: 1, strDisagree: 'Empathy', valDisagree: 2 },
  { id: '89915c17', statement: 'You prefer seeking the deeper meaning in a setback over finding a practical solution.', strAgree: 'Interconnection', valAgree: 2, strDisagree: 'Learning', valDisagree: 1 },
  { id: '8d78502b', statement: 'You definitely have people on your team that you prefer working with.', strAgree: 'Relationships', valAgree: 1, strDisagree: 'Fairness', valDisagree: 1 },
  { id: '8ddabad7', statement: 'You\'re often distracted by things unrelated to your immediate tasks.', strAgree: 'Investigation', valAgree: 1, strDisagree: 'Execution', valDisagree: 1 },
  { id: '9599370d', statement: 'You stick to your values, especially in situations that may call for compromise.', strAgree: 'Values', valAgree: 1, strDisagree: 'Flexibility', valDisagree: 1 },
  { id: '99667b0c', statement: 'Everyone deserves an equal say, even if you don\'t connect with every other point of view.', strAgree: 'Fairness', valAgree: 1, strDisagree: 'Empathy', valDisagree: 1 },
  { id: 'a966cfa1', statement: 'You actually like upsetting an established routine, if that leads to incremental improvements.', strAgree: 'Structure', valAgree: 1, strDisagree: 'Optimization', valDisagree: 1 },
  { id: 'a99d5354', statement: 'You\'re more likely to overanalyze than act rashly.', strAgree: 'Investigation', valAgree: 1, strDisagree: 'Proactivity', valDisagree: 1 },
  { id: 'b12bd1b4', statement: 'You enjoy making decisions thoughtfully more than articulately explaining them.', strAgree: 'Prudence', valAgree: 1, strDisagree: 'Eloquence', valDisagree: 1 },
  { id: 'b751dfb9', statement: 'You\'re happier solving problems than improving performance.', strAgree: 'Problem-Solving', valAgree: 1, strDisagree: 'Optimization', valDisagree: 1 },
  { id: 'be7f3492', statement: 'Studying the context behind a present challenge just gets in the way of immediate action.', strAgree: 'Proactivity', valAgree: 1, strDisagree: 'Perspective', valDisagree: 1 },
  { id: 'c152cd4c', statement: 'You\'re just as happy to keep working on familiar tasks, if they contribute meaningfully where it really counts.', strAgree: 'Impact', valAgree: 1, strDisagree: 'Learning', valDisagree: 1 },
  { id: 'c1c6db08', statement: 'In case things go sideways, you don\'t need to already have backup plans to know you\'ll work it out.', strAgree: 'Risk-Taking', valAgree: 1, strDisagree: 'Tactics', valDisagree: 1 },
  { id: 'c356dc55', statement: 'Diversity excites you more than building consensus.', strAgree: 'Inclusion', valAgree: 1, strDisagree: 'Unity', valDisagree: 1 },
  { id: 'cab639d9', statement: 'You get more out of acquiring knowledge than helping others gain it themselves.', strAgree: 'Learning', valAgree: 1, strDisagree: 'Mentoring', valDisagree: 2 },
  { id: 'ce578095', statement: 'You don\'t need to compare yourself to others to know you\'re succeeding.', strAgree: 'Authority', valAgree: 1, strDisagree: 'Winning', valDisagree: 1 },
  { id: 'd410d42d', statement: 'You promote rigorous analysis, even if it makes you look indecisive.', strAgree: 'Investigation', valAgree: 1, strDisagree: 'Authority', valDisagree: 1 },
  { id: 'd7df0cca', statement: 'History isn\'t half as helpful as knowing that you can handle any challenges that arise.', strAgree: 'Risk-Taking', valAgree: 1, strDisagree: 'Perspective', valDisagree: 1 },
  { id: 'e8768183', statement: 'You feel that competition is always good for the team.', strAgree: 'Winning', valAgree: 1, strDisagree: 'Inclusion', valDisagree: 1 },
  { id: 'ee3ab92b', statement: 'You rely more on your own confidence than deep reflection and analysis.', strAgree: 'Authority', valAgree: 1, strDisagree: 'Introspection', valDisagree: 1 },
  { id: 'f346cab0', statement: 'It\'s better for you to help others solve problems, than to fix things yourself.', strAgree: 'Mentoring', valAgree: 1, strDisagree: 'Problem-Solving', valDisagree: 1 },
  { id: 'f7b45402', statement: 'You\'re more energized by actions taken today than by plans for a year from now.', strAgree: 'Proactivity', valAgree: 1, strDisagree: 'Vision', valDisagree: 1 },
  { id: 'f994af06', statement: 'You prioritize careful planning and execution over quick actions.', strAgree: 'Prudence', valAgree: 2, strDisagree: 'Execution', valDisagree: 1 },
  { id: 'fbc54303', statement: 'You would rather try to understand a dissenter than change their mind.', strAgree: 'Empathy', valAgree: 1, strDisagree: 'Persuasion', valDisagree: 1 },
  { id: 'ffdeef7c', statement: 'You value expressing ideas skillfully, even more than thinking deeply about them to begin with.', strAgree: 'Eloquence', valAgree: 2, strDisagree: 'Conceptualization', valDisagree: 1 },
]
