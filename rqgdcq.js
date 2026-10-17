外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163ipbcrvlu.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163oqnurihp.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tsjxjwem.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lqsaafgq.html

================================================================================
来源：http://www.xuanzx.com/163gocsypsn.html

A. 基础语法与类型
来源：http://www.xuanzx.com/163oqzfidow.html

================================================================================
来源：http://www.aibaodan.cn/163tqcbcxuv.html

[A01] Hello World
来源：http://www.sxryk.cn/163pagrzleh.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163itbwagjj.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163sxagirur.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163uhppmcjq.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163vopdhsbl.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163nlthhfia.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163extclypt.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163tlspanaz.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.aibaodan.cn/163adlsthor.html

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ekpkllmy.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163srglrwuk.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163ydpchsrb.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163crqxddvq.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163upmsjqnd.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163btispitx.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163iomfoshg.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163hfxmhsxr.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163yxckdkga.html

[A03] 常量定义
来源：http://www.sxryk.cn/163ykezukvv.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163gcmcnnoz.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163mxroegpd.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163wqptdfba.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163flfkzlst.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163qsvpiihj.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163aqyowrxq.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163ivupajgu.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163hfqowonm.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163ypynbaft.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163debxarpp.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163dmpojldc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163nzlhizpk.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163hakgxibx.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163ffnbmjga.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163huxkwkri.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163xcegboih.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163bqazpjob.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163qmmpikcd.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163xunrwopf.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163lwohcqsh.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163atrudoge.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vylbwbkv.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163lisbskkd.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163qndzjtii.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163bpfhoskm.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163xahizmqq.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163kjpgbugp.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163oijweyif.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163mwnloooo.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163kfuvnmbv.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163cumzmaib.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163xkxbgpfy.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ypqhpuqf.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163xatjozah.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163qtohqvvg.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163fcdhrpap.html

Py:   str(42)
来源：http://www.xuanzx.com/163vnhajyll.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163ubwecttg.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163idxmhmfu.html

TS:   String(42)
来源：http://www.sxryk.cn/163bxnkylba.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163lojpnqog.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163vzhigtqk.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163nhidjjew.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163eystxgfw.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163zqxgvett.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163uuktuvqz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163nygcodyh.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163tnxxjdkh.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163skqsqshd.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163qkbwjlnd.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163bwugrost.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163jigrennb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163xmdlemld.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163igrnvcrf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ueujlimy.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tuneqekd.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ypflppny.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163mqmjdydt.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163uknawdbo.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163dtqpxemt.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163ifwnbowr.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163pimdovzf.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163icqinfoi.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163donuhqff.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163hnriqjrg.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163vgkxcjnp.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163kzqnftxh.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163aivgpadl.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163nrugaksl.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163yfazhlbj.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163inuthijy.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163jujeeagi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163gsoaokhe.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rdpqycbe.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ezwujttc.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nafkbisb.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qnuzwddj.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163oyczxfbv.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wmcjgflg.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163msbhdeht.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163uzcwummu.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163pqwdvhoh.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ttcyoyct.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163oafyidiz.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163pvcumxfl.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163vdzohmno.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163zoyocwcb.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163czqvphgs.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163htoddlxn.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163bruiwpxp.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163aagibxbv.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163ixbqzhbd.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vatytvvv.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sdykcqxo.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ushmtmig.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163riiudnrd.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163tmagkpdb.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163oaomegmg.html

[A14] 注释写法
来源：http://www.xuanzx.com/163hrfpaydx.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163ndetwxtd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163ptypnczk.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163deayvdqh.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163tzkhdzyy.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163wcobdweg.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wlzmgneu.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163nqzuzxdx.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163okkspkyu.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163wmaaxcdb.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163hnaxvfym.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163yhcqskfm.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163jwdrogjy.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163pgjpctfk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163kcyyzyam.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163tliwzots.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163frqmsjul.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163rheoiiwm.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163vnfpnsim.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163bfsydbfd.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163qcklwhoq.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163uxzgeepj.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163gzjvdgej.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163nemtljal.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163wzohiidq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163urgkcirt.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163pgxhsuii.html

[A17] 位运算
来源：http://www.xuanzx.com/163hcehsysv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jhaneeog.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163csdkrlli.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tvdesxau.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163vkcjaroa.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jsslczfn.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xqhfpaef.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wmmdbuas.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kxdcqzav.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163zgvtvbnt.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163ssveywxy.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163bwbhwqfc.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163siwcopba.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163oyamghie.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163ftdgdjio.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163mtgpkqal.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163xtujqwab.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163pusmqxne.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163udxwcktu.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163euhvmwka.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163wtgwtwcr.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ykhhvuob.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163uaealxye.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163mmxjlcus.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163sxiwofvd.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163vmicfnwf.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163djatiysp.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163khpgmghn.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163hgkxeths.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163jrxpuhzv.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163bdhtyirq.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163jbtxhecm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163qzrmtddj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ytcysdce.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163qbdnncwv.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163fivuazqk.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163tmjhanvt.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163syszyjye.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nhbiopoc.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163hocwylqf.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163zioflarc.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vhnstprf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163keacsjcn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163igtrcrll.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163mmcszhiw.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163lyhqqbhn.html

Py:   len(s)
来源：http://www.sxryk.cn/163hhycbutw.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163bxrjhjne.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163ccfpjbaa.html

TS:   s.length
来源：http://www.xuanzx.com/163tyziasgw.html

Java: s.length()
来源：http://www.aibaodan.cn/163miyvzync.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163xvzbcnhr.html

Ruby: s.length
来源：http://www.sxryk.cn/163hvwqqbwb.html

C#:   s.Length
来源：http://www.aibaodan.cn/163mhigwaoy.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163pnnlxbku.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163ffytcfro.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163gppmteep.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163zmylgnbf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163crynphkl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bpobrjam.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163zvuudbtv.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163sfovabiu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ckyqwatt.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163mqohdwwy.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163yqcedydh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163dzuilmsh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ltrjtohr.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163nlzcajey.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163pwgerbyg.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163yvezmhym.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163flhrvhwr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163nbgkiwdm.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jrrukvrc.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163yxldqmye.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163mvpmvezx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ndxhldsy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jqfsivxg.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163mpipefcc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163aolnnqql.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ndijyzma.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163immpkanr.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163sgjeiqfl.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163djqouhud.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163djigelbk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163yevedyfe.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163ggeywpgc.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vtckanyn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163cxujluta.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163usuocvfs.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163jawyxyen.html

================================================================================
来源：http://www.sxryk.cn/163berbkhmb.html

B. 流程控制
来源：http://www.xuanzx.com/163gswykqfi.html

================================================================================
来源：http://www.xuanzx.com/163nqlgzyxs.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163fgeeyzpd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163bgjuvjhy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163cmyyvfix.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163exutdfpy.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jnawqoov.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uxobdeev.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163eodxpzuv.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163frkbrhna.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163djmepksd.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163noxlerpa.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163fuyuwmfg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163coxgxeeg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mkxmznxy.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ltckuala.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163bkpbbluy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163vyqpjhwj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163uuktbdgc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cniaoyek.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ktxueytw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163vjexdajn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163gnwbswvk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163pfahywox.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qjghofgn.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163rrggmfwz.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163bwehzmlk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163nwdluzcq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163affjrrrj.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ueezeojq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163zgxiixjr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163blryrphb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tngznwbu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xsxkfdzu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163rnogoswz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163rivxvzqm.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xqexrdjb.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163lmbhmxch.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163bvdnbvzl.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163sgecijfi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163thvlejmg.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kgmprkmq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zbkvnzlf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163oabyahxx.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163mcvlxhjw.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163xjqbztnk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163lqodrfnl.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163nwyeidmi.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163eqbtxvoy.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163kinprtib.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163itwmkkxh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wndjwglm.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163xevxyntm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163qstedbwp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163rlmnqrnr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mftnyfej.html

[B07] while 循环
来源：http://www.sxryk.cn/163lpwinwct.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ffgolltv.html


<!-- 参考信息 -->