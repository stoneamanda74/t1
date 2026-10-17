外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163eprkowaj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.aibaodan.cn/163vzrppbgx.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163lhdqrigi.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163sxefhnbb.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163nuguaqkj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163iwsbhweo.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163dumaaxeq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163wwwftglm.html

================================================================================
来源：http://www.sxryk.cn/163wxvpyycq.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163bluuhzrx.html

================================================================================
来源：http://www.sxryk.cn/163czgsegks.html

[A01] Hello World
来源：http://www.sxryk.cn/163kkcnzgxe.html

Py:   print("Hello, World!")
来源：http://www.xuanzx.com/163yxriqzys.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163gbxqubwr.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163abdgsunf.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163fjfvsjea.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163pxmnciyq.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163ylamquqz.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163libqmpnd.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163indblknj.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163botzzqvf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163sfchnmhj.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163vbcxnofm.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163cdfrhxxs.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163lnzmreyk.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163tbyimzwl.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163gqszvnuc.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163jrygehxc.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163ovwkmpxk.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163pafquyas.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163cxbtmwat.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163jmhbwxkw.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163qazgpwgt.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163jvhtzfys.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163fmfprmsl.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163fjurultg.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163aqabnisv.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163qibsxcxp.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163afebrbve.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163tpmhdghl.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ydskujra.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163fooryivm.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163nnizoybo.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163inlwhuzo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163rkuucixz.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163qcdoyjzw.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163aigqjtpy.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163ovijbtkq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163zvcldsqf.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163uzelwsnp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163odssvzvn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hjlebnat.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163gozbmbuc.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163acqccsyi.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163tswnzwzb.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163icwvfgka.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163qkuldfmf.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163ypfoeeug.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163krewhksl.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163oqpxxtux.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163upoeitsx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163nflmjrhk.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163obrgabri.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163iswiuvpz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163bfbbottk.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163dvuwvjps.html

Py:   str(42)
来源：http://www.aibaodan.cn/163zpvlzblh.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163hjbqymxp.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163nwlybjby.html

TS:   String(42)
来源：http://www.aibaodan.cn/163adsdfgdh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163barlcgly.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163fwucwpog.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ysvxazbh.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163gstwtlge.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163qymewaen.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163wfpdgoaf.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163sftazqet.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163uzlvevxn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163imhgsklh.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163uluwwnam.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163sfpjvhwf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163lzoflcfd.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163iakxnsth.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163tvoxxjvz.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163bxvquady.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xltcgnji.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163wvrwmmtb.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163wcbighlp.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gugivgxf.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163awjwjfno.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163nhctiter.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163zsqdsuts.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163qaeatsyu.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163ihmasfbu.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163jfvtuwfy.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hytlknyh.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163hhnlbspn.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163feqscptm.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163kljavons.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163lewkhdiv.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163dpfsbxlp.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163khyflrkh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163rxnrhzuj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163buxjnboi.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ufolgqob.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163kgnrwhgf.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163djyfqchl.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163gastrsdb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163rwbslrmi.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mhkiuxka.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163rrcqrwrj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163unrntlcb.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163rihpvnva.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163xgnylfyu.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163mzikuizc.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163mqbfrbcx.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ijbcvbiw.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163cbyttjrm.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163qcpvwylm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163igaxobbx.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ewijadcb.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163zillhpgc.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cytuopel.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mqldyiig.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163fjvptmnn.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ddcclask.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163vjlwslir.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uqkjjbqh.html

[A14] 注释写法
来源：http://www.sxryk.cn/163bewutvks.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163dbquzvhs.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163cbtxtelu.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163jwsotcte.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pcfdyyzv.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163iwwfzszt.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163lvlitslj.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163bjmtcqzt.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163plrfvhaq.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163bwrbbtmk.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163ftxwvzpo.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163bqznxycu.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163hpqsrsdp.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163kxylckub.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163joghqgrf.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163ddzklujf.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163xmbgemgq.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163qaleonjf.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163bxkhaoth.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163mtsvyayq.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163fpuatcuy.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163hbwbiwxw.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163eonupzdb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163zcknvlep.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163yamgueos.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163mltvlism.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163obephytu.html

[A17] 位运算
来源：http://www.aibaodan.cn/163crzaeuvg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163iauohwwp.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163ccwfpbjc.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163vhqhisgj.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163miuggver.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dggxzxtj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hyjmrtke.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163niohtifs.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163tathejqq.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163rvkwkehg.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163akgbpklr.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163nwzgkepa.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163jcvalbra.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163tsgxrqlo.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163zptizcjv.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163fxmjiijm.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163xewiqklf.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163kehvqnpu.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163mexhvjuq.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163nwjgntkl.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163tstqhvls.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163vmpcvpkj.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bgfhswxx.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163agmbxmmt.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163pkmbbvue.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163pihpxvyx.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163qstrkufj.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163zdyjtlpp.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163aiqpowqv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163aryzpubo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163jgcivedm.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163aawzdasi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163dbkwjcky.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163kaptrjlu.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163hiriixue.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163vgkvchxa.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163uqkzmolm.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163bkiigqqd.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163yupwlokk.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163kwqnfapa.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163rzhcknpl.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qyuwewbi.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gbxfpmws.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jysaiaai.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163twodoktp.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ffmixyjc.html

Py:   len(s)
来源：http://www.aibaodan.cn/163zmbkybly.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163izgydixd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163zqlqjufk.html

TS:   s.length
来源：http://www.xuanzx.com/163owsdloeo.html

Java: s.length()
来源：http://www.sxryk.cn/163wdviymsx.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163gftnfaue.html

Ruby: s.length
来源：http://www.sxryk.cn/163jghhvbjb.html

C#:   s.Length
来源：http://www.xuanzx.com/163exvximsh.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163yarbmglx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163ahxidzsh.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163zlajrvux.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ltoqmigl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dwlmjebj.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ialstwdj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163zsncctox.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163twqidttn.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163yccsfdvd.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163joslvouw.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163dasrlyag.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163wfqsxwyj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163dowawfeu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qdnwzwil.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163xnnebklx.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ivdzvyyc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163jkhhnvpk.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163wygmvyrv.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163lusfnayc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163nubgtcnu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163iknkoifj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163zoyfufab.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qgmsmzdu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163siavmszt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163toikxgth.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163eogfeagq.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163lcdcunmg.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163bfaztosa.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qkqiqlkl.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qxmfauog.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163kychgtzy.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163sduhvsnc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163cadhefvu.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163akcbwpdo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163gxnlwqzg.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163xwjlfgdi.html

================================================================================
来源：http://www.sxryk.cn/163paafgbwg.html

B. 流程控制
来源：http://www.sxryk.cn/163xsphtmap.html

================================================================================
来源：http://www.xuanzx.com/163uhmrmhiv.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163cubzspjx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163uggkblwv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163styvirpv.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pyijwdbc.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wohtcpxt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cpjwyxxu.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163umhppdhz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163olujnclj.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vgvucyde.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163jlrszkty.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163emcskezl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ifmffzty.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zhprkbrv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163snqqopwf.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163esswjbgf.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163yoohlwlf.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163sbxvecsd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163iweaujhn.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163yvcciuwr.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163fbxyhgxk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163qeoagsqq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163etglxcxq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163oidrwdpq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163agwkjwvp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163snzounlj.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163mimmocqn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163dzckvggo.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163tzkqbeii.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jsbrxyop.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163cmpohpds.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ktdmtzjj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163clqkgnby.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163aplslomv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163npdqilgd.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xdtmmoje.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163iwsjxsji.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163sxnfpmfe.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ltiwkqza.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gsegaivw.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hxbgawyd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nyocddhq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163lwvmetla.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163pvwwctdm.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cyzzbwrx.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163plkqiays.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163xftgjdrz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163fntxqujj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163mymdxjpp.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163hfvaflcr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zqwfdkpm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163xjczcpcw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163hhzsnjix.html


<!-- 参考信息 -->