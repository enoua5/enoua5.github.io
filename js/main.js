const _TO_CALL_ONLOAD = [];
var PAGE_ID = "";

function registerOnloadFunction(func)
{
    _TO_CALL_ONLOAD.push(func);
}

function onload()
{
    for(func of _TO_CALL_ONLOAD)
    {
        func();
    }
}