/**
 * Author: Xu Yu
 * Date: 2014/10/31
 * Time: 16:10
 * Email: xu.yu@ctrip.com
 */
(function(){
    _.each($("a"), function(node){
        if(node.hasAttribute('href')) node.setAttribute('target', '_blank');
    })
})();