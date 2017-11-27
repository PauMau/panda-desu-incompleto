*{
    box-sizing: border-box;
    margin:0;
    padding:0;
}
.container{
    width:100%;
    max-width:1200px;
    margin:0px auto;
}
.row:before, .row:after{
    content:"";
    display:table;
}
.row:after{
    clear:both;
}
[class*="col-"]{
    min-height:7px;
    padding:12px;
    float:left;
} 
.col-1{
    /*(1/12) x 100 */
    width:8.33333333%;
}
.col-2{
    /*(2/12) x 100 */
    width:16.666667%;
}
.col-3{
    /*(3/12) x 100 */
    width:25%;
}
.col-4{
    /*(4/12) x 100 */
    width:33.333333%;
}
.col-5{
    /*(5/12) x 100 */
    width:41.666667%;
}
.col-6{
    /*(6/12) x 100 */
    width:50%;
}
.col-7{
    /*(7/12) x 100 */
    width:58.3333333%;
}
.col-8{
    /*(8/12) x 100 */
    width:66.6666667%;
}
.col-9{
    /*(9/12) x 100 */
    width:75%;
}
.col-10{
    /*(10/12) x 100 */
    width:83.3333333%;
}
.col-11{
    /*(11/12) x 100 */
    width:91.6666667%;
}
.col-12{
    /*(12/12) x 100 */
    width:100%;
}