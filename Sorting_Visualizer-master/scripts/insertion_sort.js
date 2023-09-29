function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"orange");//Color update

        var key= div_sizes[j];
        var i=j-1;
        while(i>=0 && div_sizes[i]>key)
        {
            div_update(divs[i],div_sizes[i],"grey");//Color update
            div_update(divs[i+1],div_sizes[i+1],"grey");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"aqua");//Height update
            div_update(divs[i+1],div_sizes[i+1],"aqua");//Height update
    
            div_update(divs[i],div_sizes[i],"white");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"orange");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"white");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=key;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"rgb(255, 0, 64)");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"rgb(255, 0, 64)");//Color update

    enable_buttons();
}