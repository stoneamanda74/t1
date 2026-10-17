外链999!wailian999！

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.xuanzx.com/163hegdgrih.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163dhichshf.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163ldhuigtv.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163mnuoqygz.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163grloggmo.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.xuanzx.com/163iqjylhlh.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163hlglaoao.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.sxryk.cn/163jlkpgqrj.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163hyhlxwyo.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163puklhodm.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163knriezam.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zvunzoir.html

================================================================================
来源：http://www.sxryk.cn/163ftyntbot.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163ouaonzfu.html

================================================================================
来源：http://www.sxryk.cn/163yajxsvmh.html

[A01] Hello World
来源：http://www.aibaodan.cn/163pjojosjp.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163tpptzqcm.html

PHP:  echo "Hello, World!";
来源：http://www.xuanzx.com/163dqkkdeav.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163splphuui.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163nzpvwobb.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163hwgiqpzo.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163mocksqyn.html

Ruby: puts "Hello, World!"
来源：http://www.aibaodan.cn/163yycqmxxp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163bqwctadm.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163mokjzwph.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163kxeeywcf.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163gahmjkmm.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163jqqxntqc.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ntmvtbmj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163mgrwccou.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163jkxwyglw.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163whuqcavu.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163hemjwpts.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163qikntcck.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163zurhncoo.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163tlvquyfd.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163csfgcmjj.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163sbdggtsq.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163ddogmdoz.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163zfcoconv.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163jtxobyvo.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163lbfifppd.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163pgunpuie.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163loonxpie.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163qhcpmiex.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163nkelqlke.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163hpsfcacy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163fwmwzehs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163viszwiod.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163bfxgkrua.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163tsuydvub.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163dyzgaswk.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163gzkxxkhb.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163vpvsmkut.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163tpzxpqge.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163qrsftmkk.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kmrjbaun.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163yktdbmil.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163haqfzghp.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kvpqptnd.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ylgzulfz.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163kqriyccv.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163vfzarfdb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163zeygofrz.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163xbnnfymh.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163bonahxxu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163cwiasnal.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163evssyemo.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163lemvzbbt.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163bxmvnldf.html

Py:   str(42)
来源：http://www.xuanzx.com/163wcifjkwd.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163xtlwgybq.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163vswvyhos.html

TS:   String(42)
来源：http://www.aibaodan.cn/163baohlusr.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163pagbbrvz.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163uukklrzg.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163vuwuzgif.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163xqxusxwt.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163rorkfddp.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163bkhvnmmg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163ztwlwqod.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163qxkvlgvv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163yiayqbrf.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163dyhuxzgf.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163naeescyl.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163wfsgqgth.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163zeyaabml.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163lgwdpmip.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163mgkyeraf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163bvejhfxx.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ybncvfpt.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163etdaswgf.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163dxvgxink.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163jaljnwoe.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163yesmbcmk.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163yngkcwxf.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163sbmuvygn.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163ftawnrgi.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163tmbjxprd.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163flttfwty.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163namycfgy.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163hyuawkcx.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163wtqbdtng.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163oiolujlz.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163wdizcgjq.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ubhuadyh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163fqpdasow.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163vwvwlswt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163opojhbdi.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ohtbfucs.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fslzxbxt.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163xwoixdyn.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ftlcwvsj.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sduklsjq.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163irvhvjsw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163fxageopj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163micqhwol.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163rhldruvm.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163ftppmcdt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ygnhrgps.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163wxbcaxoq.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163kwumekbn.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163bxihphpn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163ndggxlyx.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cbiigmnt.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163fnczfefu.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hvoxuwso.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mydnzfky.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qbniecrx.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hlxshsdi.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163jsbltdos.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vyeiiwjh.html

[A14] 注释写法
来源：http://www.xuanzx.com/163szzdxlqw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163oqofajlw.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ifiaoyxf.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jrotfauh.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163soaywahj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163tbhjsxlv.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nhkgbkpr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163lkafkoim.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fgcuhtdm.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163bqfnpbqc.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163qxruvacx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163hryfynny.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163qzqhousl.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rptmimpq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163tjomustl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163rzumxsok.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163jujsmoaf.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163bktkqoin.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163jphmhojh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163kjorryts.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163jpkcpilx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163hlhlfppc.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163nbntctus.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163ntaoaxiy.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163dgtbjjvt.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163rqnwjixn.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163oiwbskgv.html

[A17] 位运算
来源：http://www.sxryk.cn/163faupnixo.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163beuscfzw.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163wwtfkcsa.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hifwkzuo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163hybqxnsc.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163scyxdiok.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163uffjwfgh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163neqyshzn.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pfhzdowa.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163tlljvnsb.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163khtsntze.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163nvblyeds.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163pheeqhag.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163bgfprldy.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163bcnakwog.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163hwkjstue.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163drdjzcsw.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ndngbbjl.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163noegihuc.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163jskbcote.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wtimfail.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163fgwtdihn.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163jwfshxkq.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163kiionjte.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163tonhbmop.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163kejliqlu.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163rjvikwgw.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163ktuflgmy.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163lflgqaik.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163rcydjcwo.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163wulxzxhl.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163dvxugxrn.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ksxlcqlh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163fzfwonro.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163usjamruq.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ihisrkyl.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163ypzygrzl.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163fkmbwuao.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yxnjyonb.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163ubvysdgz.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163lptgrpnq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163elocqcvk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163aionqzcp.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163tcvuiyhu.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163cukxhfvb.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163enuinbov.html

Py:   len(s)
来源：http://www.xuanzx.com/163grdouzoz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163jvbdfptf.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163epcrhfrt.html

TS:   s.length
来源：http://www.sxryk.cn/163sejwacrz.html

Java: s.length()
来源：http://www.xuanzx.com/163dacnysod.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163cwhqyowf.html

Ruby: s.length
来源：http://www.aibaodan.cn/163kotuumtb.html

C#:   s.Length
来源：http://www.xuanzx.com/163ufzeiznt.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163dkeprloy.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163gkvcsydk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163xnafxugz.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163kydjpknh.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163hkuwfpzu.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bontsfro.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163hybyrdxy.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163fznnppmm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163nafwpwaq.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163zejssobs.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163bwtvarnp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163dukbrnrz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163mypixkrd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163biplbhfb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163brzlllxa.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ujoaavij.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163ldqeawtb.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163juqwubmi.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163fqsedorh.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163cktydloy.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163esnxbcta.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vxabgfkn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163drvjahki.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163tileemjp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163zszholwu.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163jmnkiaxb.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163jlwulksw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163dgozqldn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163ziahgugv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ayvduoti.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163tjuevvmg.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163llzywoin.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163pqrjralr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163utfzibtn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163lehqrrck.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163jwotqghv.html

================================================================================
来源：http://www.sxryk.cn/163kkcrahlh.html

B. 流程控制
来源：http://www.xuanzx.com/163eulqrrzm.html

================================================================================
来源：http://www.aibaodan.cn/163yrhfnvkq.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163yobnvccn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163vgqahdxj.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163mdzwgnoi.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gjqmvaja.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163gmthynbm.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ycvapugf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zyckmphk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163locytxer.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163sgmyjlvw.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163fstjzooo.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163hypgbfrk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163zkukaqqi.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163whftbams.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163bhsghaxm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163klkenrcd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163peopljle.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163tnlfjsih.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hhhusiin.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163wxwfzulb.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163zowzbwdf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163hdxkmght.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lodjzkof.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163iutylwes.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163kmidnxxc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163inapsmcp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163oakxbapi.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ksceuspk.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163cydfqdtu.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163nqlwpblz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ngbiomsa.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tektdsvm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163sqtlwkow.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163wwdwehmj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163kihndliy.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163bizzgwbz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163uhdezfbg.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163hwopsjuy.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163wfkvuham.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163erzshgzh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163urmmwsfp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tyjfrpbl.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163wjisdgsq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qapobugv.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163asvrhvyg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163kbxaeaai.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163cyapkzlh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163fruybdgg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163rfbubzfp.html


<!-- 参考信息 -->