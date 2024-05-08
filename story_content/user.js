function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JzPwGq4raZ":
        Script1();
        break;
      case "5zcRwhjgbvO":
        Script2();
        break;
      case "665az1z6u1c":
        Script3();
        break;
      case "5fL6zLd0u2C":
        Script4();
        break;
      case "69BDR6pMxYa":
        Script5();
        break;
      case "6H9fy7UG6tn":
        Script6();
        break;
      case "5zGZHnhF7NE":
        Script7();
        break;
      case "5rNllHH2lr8":
        Script8();
        break;
      case "6rHyr0jJK5P":
        Script9();
        break;
  }
}

function Script1()
{
  SCORM_CallLMSSetValue('cmi.core.score.max', '100'); 
SCORM_CallLMSCommit();

}

function Script2()
{
  SCORM_CallLMSSetValue('cmi.core.score.min', '0'); 
SCORM_CallLMSCommit(); 

}

function Script3()
{
  var player = GetPlayer(); 
SCORM_CallLMSSetValue('cmi.core.score.raw', (parseInt(player.GetVar('Score')) || 0)); 
SCORM_CallLMSCommit();

}

function Script4()
{
  var player = GetPlayer(); 

SCORM_CallLMSSetValue('cmi.core.score.scaled', (parseInt(player.GetVar('Score2')) || 0)); 
SCORM_CallLMSCommit();

}

function Script5()
{
  SCORM_CallLMSSetValue('cmi.success_status', 'failed'); 
SCORM_CallLMSCommit();

}

function Script6()
{
  var player = GetPlayer(); 

SCORM_CallLMSSetValue('cmi.core.score.raw', (parseInt(player.GetVar('Score')) || 0)); 
SCORM_CallLMSCommit();

}

function Script7()
{
  var player = GetPlayer(); 

SCORM_CallLMSSetValue('cmi.core.score.scaled', (parseInt(player.GetVar('Score2')) || 0)); 
SCORM_CallLMSCommit();

}

function Script8()
{
  SCORM_CallLMSSetValue('cmi.completion_status', 'completed'); 
SCORM_CallLMSCommit();

}

function Script9()
{
  SCORM_CallLMSSetValue('cmi.success_status', 'passed'); 
SCORM_CallLMSCommit();

}

