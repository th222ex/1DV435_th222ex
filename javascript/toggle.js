// JavaScript Document
  function unhide() 
  {
    var item = document.getElementById("tablehide");
    if (item) 
	{
      item.className=(item.className=='hidden')?'unhidden':'hidden';
    }
  }
