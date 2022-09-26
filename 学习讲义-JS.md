## <center> JavaScript学习 </center>
1. <b>入门</b>
    1.  <b>基本语法</b><p>
        1.  语句
            * 赋值语句
                ```
                var a = 1 + 3; // 1 + 3为表达式,表达式一定会返回一个值,而整行内容称为语句,语句一般不需要返回值
                ```
            * JavaScript中的语句以分号结尾，一个分号代表一个语句结束，多个语句可以写在一行内。
                ```
                var a = 1 + 3; var b = 'abc'; // html中属性规范是用双引号,js中字符串规定是用单引号.不过也可写成var b = "abc",没有影响
                ```
        2. 变量
            * 通过var声明一个变量，通过=操作对变量进行赋值
                ```
                var a; // 声明变量,此刻输出a的值为undefined
                a = 1 + 3; // 将1 + 3表达式计算的值赋值给a,此刻输出a的值为4
                var a = 1 + 3; // 效果等同于以上两条语句
                ```
            * var声明变量和省略var直接进行变量赋值的区别
                ```
                var a = 1; // 在当前作用域声明变量a并赋值
                a = 1; // 在全局作用域声明a变量并赋值
                ```
            * 二次声明通常情况下是无效的，不过如果在二次声明时进行赋值，则变量的值会改变为所赋的值
                ```
                var a = 1;
                var a; // a的值此时还是1
                var a = 2; // a的值改变为2
                
                // 上一条语句var a = 2;相当于
                var a;
                a = 2; // 此处改变了变量a的值
                ```
            * <b>变量提升</b>&nbsp;&nbsp;JavaScript引擎会首先运行所有变量声明语句，下面是变量提升的一个例子。
                ```
                console.log(a);
                var a = 1;
                ```
                真正运行的语句是
                ```
                var a;
                console.log(a);
                a = 1;
                ```
                最后结果显示的是undefined。
        3. 标识符
            * 最常见的标识符就是变量名，遵循以下规则（通常情况规范的变量名都需要有一定意义）：
                * 第一个字符，可以是任意 Unicode 字母（包括英文字母和其他语言的字母），以及美元符号（$）和下划线（_）。
                * 第二个字符及后面的字符，除了 Unicode 字母、美元符号和下划线，还可以用数字0-9。
                * 保留字不能用于标识符：<b>arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield</b>。
        4. 注释
            * 单行注释
                ```
                // 这是单行注释
                ``` 
            * 多行注释 
                ```
                /*
                这是
                多行
                注释
                */
                ```
        5. 区块
            * JavaScript使用大括号将多个相关的区域组合到一起，称作区块。<b>注意！！！区块并不会构成单独作用域</b>，一般情况下区块往往和更复杂的语法结构如``` for``` 、```if```、```while ```一起出现。
                ```
                {
                    var a = 1;
                }

                console.log(a); // 1
                ```
        6. 条件语句
            * if和if...else结构
                ````
                if(布尔值){
                    语句;
                }

                if(布尔值){
                    语句1;
                }else{
                    语句2;
                }

                if(布尔值1){
                    语句1;
                }else if (布尔值2){
                    语句2;
                }else{
                    语句3;
                }
                ````
                <b>注意！！！不要混淆赋值运算符(```=```)、相等运算符(```==```)和严格相等运算符(```===```)</b>。尤其是相等运算符是不具有比较作用的：
                ```
                var x = 1;
                var y = 2;
                if (x = y){
                    console.log(x); // 2
                }
                ```
                以上代码的逻辑为首先将y赋值给x，然后判断x的值（2）的布尔值（结果为true）。
            * switch结构
                ```
                switch(x){
                    case 1:
                        // ...
                        break;
                    case 2:
                        // ...
                        break;
                    case 3:
                        // ...
                        break;
                    default:
                        // ...
                }
                ```
                和java一样，如果不加break会导致在执行完对应case的代码块之后不会跳出switch结构，而是会继续执行下去。同时需要注意的是：switch语句后面的表达式和case语句后面的表达式比较运行结果时，采用的是严格相等运算符（```===```）而不是相等运算符（```==```），也就是说比较的时候不会发生类型转换。
            * 三元运算符 
                ```
                (条件) ? 表达式1 : 表达式2

                var even = (n % 2 === 0) ? true : false; // 如果条件为true则返回表达式1的值，否则返回表达式2的值。
                ```
        7. 循环语句
            * while循环
                ```
                while(条件){
                    语句;
                }
                ```
                当条件为true时，while循环不会停止
            * for循环
                ```
                for(初始化表达式; 条件; 递增表达式){
                    语句;
                }
                ```
                * 初始化表达式：确定循环变量的初始值，只会在循环开始时执行一次。
                * 条件表达式：每轮循环开始时都要执行一次，只有值为true才会继续循环。
                * 递增表达式，每轮循环最后一个操作，改变循环变量的值。
                * 可以省略任何一个表达式，也可以全部省略，全部省略会导致无限循环。
            * do...while循环
                ```
                do {
                    语句;
                }while(条件); // 分号不要省略
                ```
                与while循环类似，唯一区别是先进行一次循环之后在判断条件，也就是说无关条件是否为真，此类循环至少执行一次。
            * break语句和continue语句
                * break语句可以跳出当层循环。
                * continue语句会立刻终止本轮循环返回本层循环头部。
            * 标签 
                ```
                label:
                    语句
                ```
                标签相当于定位符，用于跳转到程序的任意位置。通常和break语句和continue语句配合使用，用于跳出特定循环。
                ```
                top: for (var i = 0; i < 3; i++){
                    for (var j = 0; j < 3; j++){
                        if (i === 1 && j === 1){
                            break top;
                        }
                        console.log('i = ' + i + ', j = ' + j);
                    }
                }
                // i = 0, j = 0
                // i = 0, j = 1
                // i = 0, j = 2
                // i = 1, j = 0
                ```
                标签也可以用于跳出代码块
                ```
                foo:{
                    console.log(1);
                    break foo;
                    console.log('本行不会输出');
                }
                console.log(2);
                ```
                这里在执行break foo之后直接跳出了该代码块，然后执行```console.log(2)```。
                ```continue```也可以和标签一起用
                ```
                top:
                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 3; j++) {
                        if (i === 1 && j === 1) continue top;
                        console.log("i=" + i + ", j=" + j);
                    }
                }
                // i=0, j=0
                // i=0, j=1
                // i=0, j=2
                // i=1, j=0
                // i=2, j=0
                // i=2, j=1
                // i=2, j=2
                ```
                这里continue top和直接写continue的结果是有区别的，在continue top之后程序直接执行外层循环了，这样就不会进行i = 1，j = 2的循环，而只加continue的话会进入内部的下一个循环也就是i = 1，j = 2的循环。
2. pass