外链999!wailian999！

J. 日期与时间                  （第 10 节，10 个任务，80 条）
来源：http://www.sxryk.cn/163hooborej.html

K. JSON 与序列化               （第 11 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163djhbrccm.html

L. 网络请求                    （第 12 节，8 个任务，64 条）
来源：http://www.xuanzx.com/163xbcxaldk.html

M. 命令行 / 进程 / 环境        （第 13 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163pmjncqgq.html

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.xuanzx.com/163svozppkm.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163rzpbldto.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.aibaodan.cn/163onnaapic.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.xuanzx.com/163sztlrbat.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.aibaodan.cn/163kjklzcdn.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163ortejpgk.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vsjqxnam.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163mgyrwboy.html

================================================================================
来源：http://www.sxryk.cn/163rnlgeaov.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163vxmfanft.html

================================================================================
来源：http://www.sxryk.cn/163hlrsktby.html

[A01] Hello World
来源：http://www.sxryk.cn/163wzxvwcue.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163otjhrdea.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163ppsjsesj.html

JS:   console.log("Hello, World!");
来源：http://www.sxryk.cn/163jmmhxrtn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163ntwjzvau.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163nimxizzz.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163qmbysrea.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163kaegitbp.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163nrjprujr.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163bokrgryn.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.xuanzx.com/163vwqpltgq.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163fbqtpzgx.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163kpqehgkq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163vensbutc.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163pjoafkbh.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163ujwdusrl.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163juatnoqh.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163mzemoohw.html

[A03] 常量定义
来源：http://www.xuanzx.com/163vrkrecjt.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163rzkbzqrd.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163zsleswmi.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163alqxssfi.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163vaqycrxm.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163vvkjeczs.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163gcamsfjj.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163xrxchetj.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ctljiwsy.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163znpbjpol.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163rfptwspt.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163gfymiseg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163yfwsndgd.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163wcamlihy.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ztaaqrfo.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163wetiocaz.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163vsfpzsjq.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163hyjfudtm.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163qtwtekpl.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163qbgtsdbc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163alteepau.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163igvbprxy.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163ejypstfo.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163hanvycib.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163imiczoai.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ydzcrinh.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163wnjzlcoi.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163ibhzzpkx.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163nletczmn.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163xwogzzcb.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163zovetxns.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163abywvtde.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163dpjyyjrx.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163oeqnlzaz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163vjhxwjcu.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163qetbeulg.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163tvfwjkon.html

Py:   str(42)
来源：http://www.aibaodan.cn/163rmdqonnv.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163igfektkz.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163nizmrwgx.html

TS:   String(42)
来源：http://www.aibaodan.cn/163dqgpzjgu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163conbglsp.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163wnjwzgxv.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163cbqpdgwj.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163waugdnyo.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163xhjjtxpw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163bzgpsuys.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163igoqyzcg.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163lcnznmmv.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163fulathgs.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ijylthax.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163zkgmhqtl.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163rpyvdbzs.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ogvblvqx.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163kpkjhcue.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163jlcadgvn.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163rkwjyfwr.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163shsudgxf.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163gbdukzbt.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163fawdaddi.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163ujdqzjar.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163iwaytwez.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163acvkpyny.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163jsmdscmm.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163mjdnbxdx.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163hupmohin.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163cbiluedj.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163xwmryetm.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163lphybupb.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163hxdmgjlm.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163kvhivqok.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163vhoswepw.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163gusgsveq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163lrcgqbri.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sdocuwzh.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163nftmbtyl.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ryjqzmlh.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163oucirnmf.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163kvynypdk.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163aozhfoff.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dgywvrey.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163loirxtkk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163kngoqnug.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163uzinvwqk.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163jqyjftvs.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163qmjtvqgd.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163mdysqpse.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163lhknlnya.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163oxbgzgis.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163soyllavb.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163dhdbnozx.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163cvoxcupu.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163efqieiwo.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zakmdehd.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pluxguvl.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163yleawvdh.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jjgatglw.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163pevqhmht.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ilydwmfl.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163dzgqztrn.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163fmspfobe.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163jixiisbc.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vrcgmuvv.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163uxqaoywz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163jxeredsj.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ayzfqaqy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163byohiavj.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163twztqfia.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163macdzvdp.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163sgntqngg.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163gpeolsmi.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163mkagokym.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qwlpiccx.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163xdwfamxj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163mymqppsk.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163uypwyrxi.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163gwfnwyui.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163muhgrhor.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163yplrhsfw.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163sdqtoagz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163eciopmne.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163zanwkqin.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163xpshaour.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163vhabwkqw.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163jmkqklrw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163dcikpmit.html

[A17] 位运算
来源：http://www.xuanzx.com/163krbxnvhg.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yofumpct.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163jldzhnbz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163usxexmmg.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ulqjnndr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hdznatmx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tfyriijf.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163vuyjblch.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163snvejluq.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163fwifkubi.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163wlecfwmu.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163cuhjheji.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163vtorsezd.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163uidupqff.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163xzaavrma.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163kndwusjf.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163rzpndmlz.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163gbdsfvhd.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163ymkqogpw.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163wdrhkeul.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163wqlfugjb.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163fysrzgll.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163oivqytlq.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163gmcruvbj.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163skbkkmpt.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163glyujhjo.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163fnmtuzes.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163qbvqqqor.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163zvptmfbv.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163smbpqutr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163imdbkmkt.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163zllfanii.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163ppefhhvl.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ooiuofdk.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163snkjnlgk.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ztrtmlqh.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163rbnydngq.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163hgxqgdbm.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163pdzyhgwr.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163vftskbnb.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163nsgomsbm.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ltmaecwq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wmfxyyag.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163okwtzehy.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163dfokcndq.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163mashakvl.html

Py:   len(s)
来源：http://www.sxryk.cn/163dnxeqncy.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163zjifhlgm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163pdexntkv.html

TS:   s.length
来源：http://www.sxryk.cn/163gtgwmujc.html

Java: s.length()
来源：http://www.sxryk.cn/163ccdprdbm.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163sebpjqyn.html

Ruby: s.length
来源：http://www.xuanzx.com/163bvzikwfj.html

C#:   s.Length
来源：http://www.xuanzx.com/163ebktgeju.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163hfohsqdt.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163zcvcfvkz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163dvropybl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pazvczob.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pekmmjls.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163aysebmui.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163qiljocps.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163dwlllvcw.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163hukeluye.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163bpzlrnmk.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ryojqrps.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163luigxfwz.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jugqgjkv.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163dtmugoji.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163skevaaes.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163xwnktzyt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163flqgywdh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163xzcabewc.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163hpuhuyig.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163ikkyddfg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163dvezyzib.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163shhiqqnh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163wmadwugo.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163uyautffd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163pjpqpowr.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163clznjwnu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163tgpqtwmu.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163tncldzsj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163sqwdnofa.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vmdavguk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163vjynxqrr.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163dornerfo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ndqywzoo.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163qkqgjsvv.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163jrpoqszd.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163gdeldtfk.html

================================================================================
来源：http://www.xuanzx.com/163iutsmurl.html

B. 流程控制
来源：http://www.aibaodan.cn/163dqpvwgrf.html

================================================================================
来源：http://www.xuanzx.com/163sxohzght.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163rcvbpdvl.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163kysuqciu.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163jzxzeykn.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163crfyeqzm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163forvgwsx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qvyhkqtp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163gldncjdf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163pdsenrsm.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wzkmcczy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163nxhsjcfm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163qqcffxfn.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163gmeomlly.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vrfnpwta.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163vpvatejg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163omzzvsiv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163ppgvyrcc.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163dchdfzih.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mtmapyek.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163mkiomxmu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163yfqaeuth.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163jpdutoxb.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163rtryfypp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ieaxwvby.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163tdiyjuew.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163fytfauib.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163uumhwuij.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163dodkvnjn.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163zyozokkl.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163lblrrwnu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163dpwuxsvl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jzyiwdlc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163yifwbbvv.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163mwzubhtt.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163dkmsjveu.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163oxbykkee.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163hzyuyrpm.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163kgoeqpyo.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163pmwddqut.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163hyxanuna.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jltqpcoy.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xruvygxo.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163xncshaez.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fcihugzp.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163acojjndf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163hqrfmhys.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163azrfswmw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163fpbmhtuq.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163dsnhfvyo.html


<!-- 参考信息 -->