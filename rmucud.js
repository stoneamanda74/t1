外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163cqwvrral.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163yahqgsxc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163fnrqtklt.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163fagsoaqw.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163evthooex.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163weambbkh.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163vnolbokm.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163xqtlsead.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163tvaoybvk.html

[A03] 常量定义
来源：http://www.xuanzx.com/163qkmrtlgg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163ureamplm.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163ztcrpzmt.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163rimngsjg.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163uiwvjymp.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163pjkqewef.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163rtavspas.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163imyinxvl.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163wkjowiie.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163gkjlndyn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163wdalukmz.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163ghjrunit.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163njyencyr.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163gdybexie.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163lodnlzli.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163svzljecx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163tuzzcuuf.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163vwxvquab.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163ibzputih.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163mdknjqys.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163tckotbus.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163tpvyccqq.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163hbyzjcaw.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163suirosuy.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lptxbvjp.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uhfkaaqo.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163oxuclccr.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163cfjbqowb.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163jeccljim.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163mrgoiqcq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163xygijrpu.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163qkjmcjfw.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ddntukdu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163yowdkvqv.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163tzipabvk.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163ngmfouls.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163rslxzasd.html

Py:   str(42)
来源：http://www.xuanzx.com/163kuwyogog.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163hrpblopo.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163qvbplunn.html

TS:   String(42)
来源：http://www.sxryk.cn/163ladhjxhl.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163zermcqnx.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163zbybcqvq.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163exxjkivy.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163keiaqgor.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163nwatvsaf.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163qkjlanao.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163agquqrnq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163dgwbcthd.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163rnekfzcj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163jlunawfy.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163yvfhifok.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163dvbtfxkt.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ariuvycw.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163tgszjxkm.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ryhgevtp.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163qeydfosv.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163ccwnflfl.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163kghsesti.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163aruiofvr.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163nugouvjf.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163pxssdvbi.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163znwukkbr.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163zofovalc.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163yeiynlmp.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163pbphmtyl.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163afhvmddr.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ttssahbl.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163xennfhgi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163bunygtns.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163wvwjqjff.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163fvyaaaqi.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163eemyxrjc.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163wqcoajuq.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163wcovhrxu.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163bzogiuli.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163asmdumkd.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fbwnlsvn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163iiqjhoaw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163kmdmxrla.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163pujklyxb.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ascitjza.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163bvpnnwcp.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163fcgjazek.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163izgxsokg.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163vjlvnbot.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163aqffoiij.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163vbdencae.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163hshxbjki.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163luesahmb.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163mqxetdeo.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tpmbwgne.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163ncseqywi.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163myqqctba.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tjyqwcgn.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163oyjwpugd.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yxgkeixu.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163ojaxxiuh.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163acsbdrrg.html

[A14] 注释写法
来源：http://www.xuanzx.com/163jpinjfyi.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163ravxbbwm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vgjnibgl.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ptvwrzrn.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163gjczxawx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163wyhptnyu.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163bjklegkq.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163wssaglgy.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163cuovcqhm.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163wafchsqy.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163gbrpyfbf.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163hlkcrulz.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jvvyllma.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163uhtgmygw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163uupevrlv.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163urvweyfr.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163deibtnyl.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163cvptwcrt.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163wzgvhgxy.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163svbagckh.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ropsrlcg.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163vjissnpp.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163juvplzzf.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163hwvqkvhc.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163krniauul.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163psdaiogy.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163vbkcphtl.html

[A17] 位运算
来源：http://www.sxryk.cn/163jqexmgpo.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163zcddyvkb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163qmjiibyr.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mhtqzciv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163hxqjraeb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163quajuhoh.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163zoqeuwaa.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yzbwakby.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dzeciojw.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163qwenivsl.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163letjuyew.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163ptjmzqqr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163lrnvfjey.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163mybdhhqr.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163plnggjgs.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163tewcaqee.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163poqblbqc.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163sthogxht.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163wzqdclpd.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163uetckexg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163vktfvuqg.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163neidudbw.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163jnoovgmt.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163pkefrbyk.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163kjwbyftj.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163vvnvnnuk.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163ghbflsqr.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163nksrwjro.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163brwsycsm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163qlonmjwd.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163devsegub.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163mrwhsdyp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163llhonuop.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163xjmdvszc.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163uzcqfzdq.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163aeyawrfo.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163uaqichmv.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163coqvkokc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ttjdsqle.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ylagjool.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163xxqurszq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ukkzfuzm.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163usvubonq.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163czyfblep.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163pictduzt.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163qldwadls.html

Py:   len(s)
来源：http://www.sxryk.cn/163qxqbyaox.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163crdjnzjz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163vhvtkcvk.html

TS:   s.length
来源：http://www.sxryk.cn/163dxjbdvjb.html

Java: s.length()
来源：http://www.sxryk.cn/163evqxhsrd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163dkoppsjk.html

Ruby: s.length
来源：http://www.aibaodan.cn/163vschqpfy.html

C#:   s.Length
来源：http://www.xuanzx.com/163aklazcfh.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163rbklgxlf.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163wvevedlg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163hkixqerm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163uutyxcoi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ptjdxxns.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163eugeknwi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163acslhxju.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163ojnxysgy.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163vkktplyo.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163yjxohwez.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163shbsrvky.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163dgqdysss.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163nikeoxef.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163jiyhdtil.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163dggkhxyl.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163jqxszsff.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163iotrdkhf.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163jwmeoycj.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163kkzswvjv.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xacnixln.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163vcypfccx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gptzdhkk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163vupcepnp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163dsalhamt.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163sjjctrca.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163nqyblryn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hswolmuz.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163scmmzuah.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163fuadjhxt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163rzaqofzy.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163wcwncofc.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163bdzgrvwf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ohymtusi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ymrpvntn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163lgjjgxvp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163mtagjidv.html

================================================================================
来源：http://www.xuanzx.com/163tthkiskc.html

B. 流程控制
来源：http://www.xuanzx.com/163kpqucfdc.html

================================================================================
来源：http://www.sxryk.cn/163twodklas.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163zsnbuijw.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163aijqmyhv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163aiieqqqf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163catzaqgj.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163suececxz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163hdalbpdb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163xytetliz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163sihxfung.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163djbaynxm.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163hwdaykqi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163sxxsfgmg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163gxumlmxn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163oxklzgst.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jeochzxc.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mphjwbpd.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163wiiriwnj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163wsrwwadl.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163nodecqfw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163sjlkcioe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163nzkcjloy.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ewpdynwl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163hwnuiwfs.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vhhjwolb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zsclvvzm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ktmnmtzp.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163obixcbyb.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163bsgxbwxh.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ssezgenk.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163lxplpqka.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ububhivy.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rcavbguc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163jldczpne.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163lkaqtxko.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163ylpmfhzi.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ppnggcxw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163fywfffry.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163gnnecfaq.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ogoxudmg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tndngukp.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163atchzjxa.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163drrvrigt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163heukksgf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163mwcademg.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163gttqfnyh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ipxqfzbe.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163kravjoej.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163qerazpgg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qffpnxgg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163eklsnatp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163knjkhrmo.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163bfjroanx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163tcldbbxh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163dzbbflcm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163nouoqmqh.html

[B07] while 循环
来源：http://www.aibaodan.cn/163afuhsbuz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163awvwvmqb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163sogrcbuc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kkrbfkgm.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mzjealct.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kpfsmvbp.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163euabhvbt.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lapjvwgw.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pfkapvua.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163wbxpjpge.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163ateeiulb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163iqnppydf.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163nvzrukdi.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oxbwjkvn.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163jiewyufa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ykoxyusm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163uhxdjkqa.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cjeynwiu.html


<!-- 参考信息 -->