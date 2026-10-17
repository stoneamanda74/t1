外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.aibaodan.cn/163epxvwtlj.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163tyligctn.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163gfuuyxyu.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163hkkgtmhl.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163xkfrjtst.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163uomxvkgf.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163zxoevuei.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zakrrrzm.html

================================================================================
来源：http://www.xuanzx.com/163waslvdad.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163rbokjjxt.html

================================================================================
来源：http://www.xuanzx.com/163waalbvtm.html

[A01] Hello World
来源：http://www.sxryk.cn/163owcomunf.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163sjyjlmcx.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163dqtncdos.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163zfzbgcqc.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163onnzsmus.html

Java: System.out.println("Hello, World!");
来源：http://www.sxryk.cn/163kqetmbin.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163uucgkwkw.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163ugptjldx.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163gnaezclk.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163npdjcadh.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163zueprkdx.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163kprvdlar.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163bkdbdrek.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163hfmhtgnq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163gcmtknht.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163bojsdjkm.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163svqgwjvo.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163nhuonxyp.html

[A03] 常量定义
来源：http://www.xuanzx.com/163aamdfxxs.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163nwubgxhy.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163onmvxcio.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163kyqqtiat.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ldphmjuc.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163pnzwmlxs.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163idegjeyc.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163tyzcwtxa.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163iphaghbi.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163uqcpfyqo.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163cghyjylj.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163ltmhhycp.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163brzznwue.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163wslvlynj.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ixclixoj.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163gemwnwrj.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163wfczsqux.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ikpohioa.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163mniduxwr.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163llofpguh.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163bauvqzda.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lxkzgcqz.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163tqcgmdhs.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ckyeefln.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mwkbvzsu.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ayohnizh.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fwhurbvz.html

[A06] 字符串转数字
来源：http://www.xuanzx.com/163qdhmrbta.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163utgcjdsi.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163pyjltixc.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163gsrnnfrx.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163ttachtcr.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163xqpwvhhm.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163dlbmfggx.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163tiiymzfw.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163vyaqtrvg.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163lpmywyqm.html

Py:   str(42)
来源：http://www.xuanzx.com/163kralugdn.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163khjchqhs.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163mtitsrgn.html

TS:   String(42)
来源：http://www.sxryk.cn/163zmadkdji.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ygkyujgj.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163cjpumjpy.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163hhyyvxfh.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163okoprzdm.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163cbhwradj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163yqawming.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163bbgsjbpd.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163dnfcuwur.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163mjjakbmb.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163btsabyzz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163pkgcrodj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163biwxdjyv.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163cqryeukc.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163zmndjvop.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163kfcetrdm.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163bmxsnfrq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163itdivhkq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163wajfkldi.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163dwmoomkp.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163gosycwje.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163rwkfcplp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163fuqipawp.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163cndzszbe.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163cyiosawo.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163uidezrqt.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163utcffbza.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163gofydsxz.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163dfejyhfa.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163dhuairxj.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163tsyaiuxk.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163lowfljiq.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163vrmdxuuc.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163jvpahmxo.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hxgmwlyr.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qtdmzvzh.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gzigclsr.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163frkjoodc.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163zlwqitjq.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ibalkuft.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163deyamjso.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163smwncqac.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163kwdckdmk.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163jitepqne.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163yxjivjoe.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163vwzhtxmr.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163xagrtjio.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163lfuplcqw.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163ixbwkivx.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163cwplfnyh.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163byofuhvr.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rmqwmnlk.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163vebtyaqg.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163stcvmngy.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sqbpszua.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163etmbtjhh.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163dpbgbdnc.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163gdhwuwia.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163thtcsjxm.html

[A14] 注释写法
来源：http://www.xuanzx.com/163atzrdkjh.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163hqvvdzxw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vujxffdl.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163repabxfv.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163ilotxecq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163yswbgkuo.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163agnnjgjk.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163rxfqfisx.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163equkxrvn.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163kwibdfui.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163luovqpfx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163aeeomvza.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ltkjdvhc.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fmooispy.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163nqnwpyfl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ryqhknxw.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163bcmmaoch.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163iyeiuoyg.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163xkfmtraa.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163rbheonnr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163jiplsetx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163jlhbtkex.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163cnmxawhd.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163lhblbvon.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163qtmzypmt.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163fhmwkmyk.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163pskjbzjf.html

[A17] 位运算
来源：http://www.xuanzx.com/163mvwtbrxw.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pxkhwsdc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163cxgquxkd.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163eagmgcfs.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163qoownbwk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163aakxohqk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dojjctwj.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yroakrpx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163buuytufg.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163gnlzpidq.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163xjhnckwb.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163kpdocwmx.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163zknjahbo.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163undxeazh.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163yytptiby.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163kkezkemz.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163wvmybkxg.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163oyzkhycd.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163elkdvuiu.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163nqgtummt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163bxeqxpgp.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ipylqutw.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163stijlndm.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163rcshmlwv.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163nlcceics.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163wcfvmotn.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163jmgaattl.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163wboaudmg.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163tvfzvulw.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163rmgpzlpy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163odyufjfz.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163egpikeyf.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163cmdnjecw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ayrkwccj.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jcnfwbuw.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163jvfegupa.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163slsmqpdm.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163oahjdeol.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163urwkdrqz.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163dmizfofy.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ztmearfq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163asfmuuiy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ocsbpnva.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pgtrtkrs.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163hjtbgjly.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163boxfmqbd.html

Py:   len(s)
来源：http://www.sxryk.cn/163uedlnmmv.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163nkekqkdl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163qzbxiovq.html

TS:   s.length
来源：http://www.sxryk.cn/163vhvqmfhe.html

Java: s.length()
来源：http://www.sxryk.cn/163buczhlzy.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163haoarnjd.html

Ruby: s.length
来源：http://www.xuanzx.com/163atxrddtk.html

C#:   s.Length
来源：http://www.aibaodan.cn/163butogbmd.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163przwaqhx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163nvgmejzv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163jnbqugwy.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163unvucnct.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mnnqhftv.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163fqohvway.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163lmljyvfy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ndhkkrqw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ligzofrz.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163vlwcutpt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163itjldudp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ctempoqq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xelsybqi.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163zhkokrzu.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163qayevumf.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163nsbofggw.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163wqhhragg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163fzkiwtvu.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ratswllk.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163vtqmrjdb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163kjevjuik.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sywrrttu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163yfzwbfcy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hqljkubl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163kkcpwvyw.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163ollfxnza.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163dicjekgc.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163wznsqidx.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163twgghipz.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163tatavvqz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163yvmnkvet.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163cncehcnl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ogaqieqd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ysrgbqki.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163iriycsbb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163dbdvpdpz.html

================================================================================
来源：http://www.xuanzx.com/163ftyonlxp.html

B. 流程控制
来源：http://www.xuanzx.com/163aygqzzzy.html

================================================================================
来源：http://www.xuanzx.com/163deheebto.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163foaqkoek.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163thlbcnzk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163momiwdvr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xgigvqir.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163usukufum.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163vrymxzbm.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163jrodzfqy.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163kzicvcle.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rgsxoynn.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163nffjkses.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163vdesnmhw.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163lirhgass.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mbsltjnv.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aeziimoi.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ssfoucfn.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163stxaeqct.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163pyhkeuir.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lzcbaivl.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163fjwespnl.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163heobxxsc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163duzfhsuy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ccimkrox.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yhutgnst.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163gsbrdvpq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163cagslckt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wbshdjjg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163lnophzoa.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163msljnbeq.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163xlxxxglu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163zifbvnrr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163otzjrhwu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dgxqkssy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hbidleid.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163lpdmhgsm.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163yznihktj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163kfhdqmsk.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163nmqluauk.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163wrljcxjv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163bketpatj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163hcozyfgl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163bypghgmd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163tvwpkquo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163pzurlsky.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163osmcnfct.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163elrovrzx.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163vvkqjier.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163itldfhpk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ukrbdlmb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163xnyskwlu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yjsaqbkw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163nnzpwdsb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163dzganswa.html


<!-- 参考信息 -->