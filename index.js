function ans()
{
    let str = document.getElementById('str').value;

    let newstr = "";

    for(let i = str.length-1 ; i >= 0 ; i--)
    {
        newstr = newstr+str[i];
    }

    document.getElementById('rs').innerHTML = `Reversed String : ${newstr}`;
}
