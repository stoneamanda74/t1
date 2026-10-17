外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163agwnssvj.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.xuanzx.com/163lvkcrjob.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163yawqvfpq.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163gkymezkm.html

================================================================================
来源：http://www.xuanzx.com/163idnmmgjj.html

A. 基础语法与类型
来源：http://www.sxryk.cn/163rbwywpdd.html

================================================================================
来源：http://www.aibaodan.cn/163mqhelpck.html

[A01] Hello World
来源：http://www.aibaodan.cn/163mgsoqqqu.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ixfeadvz.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163iwalvvfk.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163ravlueks.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163tavblwif.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163jhghsxew.html

Go:   fmt.Println("Hello, World!")
来源：http://www.aibaodan.cn/163umdeobhe.html

Ruby: puts "Hello, World!"
来源：http://www.xuanzx.com/163edcqncsc.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163poebzwnp.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163nqrvrcwz.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163iscftwfa.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163rxvazfja.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163psibudtr.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163ulzpjnnn.html

Java: String name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163jyqzqzpq.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163ofvnkdss.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163yltbydpf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163hikrdlou.html

[A03] 常量定义
来源：http://www.sxryk.cn/163chrkfpqc.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163simhcnmm.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163darivxuy.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163efovpuuy.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163bsktgrjt.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163xfjmhyar.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163thzoszlf.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163jeowuokl.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163qgaiwbna.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163qwdbhjbe.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163owczgogq.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163tihdwvjf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163qkzgsixy.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163gzrrzmwq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163anslecub.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163suijmhiy.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163gifqnztv.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163ofnbgjfj.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163sdtrbole.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163wmphgcug.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163ursapgqm.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163srvypiul.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163jwfkuain.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163uggktmuu.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lsccymqq.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163svsqfdwy.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163gdbhzrgr.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163ahpijzuk.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163poqqhhta.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163uddqrxes.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163khzndupp.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163isyqktxn.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163yvqdqpwq.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163khaeiipa.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163gxjoouon.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163omlfcrwo.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163vpdohqnc.html

Py:   str(42)
来源：http://www.sxryk.cn/163xizvhltf.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163nransbkk.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163owwbqspv.html

TS:   String(42)
来源：http://www.sxryk.cn/163mpweyxcq.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163wjjzxgke.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163oxwqiolf.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163bhkamygx.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163iinjnlim.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163awudpadw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163aqiuijpg.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163mhhfuzws.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163sdjhfepd.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163xzrhtpof.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163zjdjdvek.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163csvzmnwy.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163vmraejay.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163afjwrlzv.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163kuiltnyo.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163sciwqtyr.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163rinefihb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163xggdrsgi.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163moeroxbb.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163jhcwkcwa.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163stpxcpub.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163dzekyisj.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163qpwvnluo.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163uasvbsth.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163bqpboxwv.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163wihncdbt.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163abcusjlb.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163nkkplamn.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163xmseheqz.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163ocjeumxa.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163cbjhbrda.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163cwlhhxxg.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163kwwekdvs.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163jmuyldzr.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ohuujemi.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163dazodrgg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163posyfsai.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163nkfaiwib.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163npguvfer.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163levbalen.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jrmbdqkf.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163zbfhhhcf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163irebzjdf.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163smjujbdn.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ohhebshm.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163sckrxabt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163lxbwmjzd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163dmdzkylt.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163kgfbawul.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163lnwrqcwv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163uzvohntq.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163buojpkgd.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163gklprexu.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163odpumlnu.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ijhrhaoa.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163xpirnkmr.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wtpprtwx.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163pvrokxln.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ljxxvfrr.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163twvtdndo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163jiklrpuh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163lnromauu.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163hwlagfof.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wxsuyutj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163cxzjkiym.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163rsyiwobr.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163rqqkjidm.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163iwijyxur.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163nhuewvzt.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163qhzskcen.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163vhxukumf.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163kbearpjg.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ffnnzmic.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163hcbdmqyz.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163yfijqbng.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163hrdvzrat.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163fuldqqpr.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163tiuleluz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163zkklpruz.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ityjbdqr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163zedbhwqa.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163whrrypoe.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163oqjtuwue.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163qtvgasxp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163phwuooer.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163rtxlwgbr.html

[A17] 位运算
来源：http://www.sxryk.cn/163bnrwdudb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kcwfywjn.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163cxudhjhj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163twbuvaxu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yppzuzed.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mhmppnsp.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gvgtdjzo.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rgtwazln.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mrqbcqwl.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163yddctsxd.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163jsfdrxkd.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163elkdfclm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163cwejfgpx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163gdqudepw.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ejunixkt.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163ehtxbhom.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163yknnfzoz.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163nevhfusx.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163tdeaxoxy.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163vxhyzgll.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163jjybqhha.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ciqqaufr.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163vetlrhqm.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163tpdldrqn.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163cdatiapq.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163qeyazfkg.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163cceblaoj.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163kkpfoqsc.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163fqgtkhzz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163xenljenw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163tnkvbpmg.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163opniohrg.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ievzldhy.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ldglirjo.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163hkmzmgmd.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163cynuqgyh.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163prswagha.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163xobugevb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163yojmylpg.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163eslfgdbq.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163rphoqwpx.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163onjbigcq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rviargtz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163oszwnspd.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163tmgorsdn.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163nibpgbuh.html

Py:   len(s)
来源：http://www.xuanzx.com/163vzzmvgzm.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163ikahftsl.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163hogxtyus.html

TS:   s.length
来源：http://www.aibaodan.cn/163gqkwagsd.html

Java: s.length()
来源：http://www.xuanzx.com/163ulxkmjzf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163zdsmgbio.html

Ruby: s.length
来源：http://www.aibaodan.cn/163sfipqqjf.html

C#:   s.Length
来源：http://www.sxryk.cn/163kpauulzt.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163tpdzkpsw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163xuchutpz.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163tjgwmeyw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163jikncnyn.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163trfxqjhk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qzqrxpvi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163fwkptmwb.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163umnzltty.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ghxktyor.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163aewqadth.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163jwypktpc.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163ctvngooq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163eqnmcbrw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163qqtydwiw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163pxjbxtkl.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163luiurnot.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163uiovyyzp.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163mgcojsef.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163gmglfuxt.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163fkepfblu.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163umeyhoqe.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mxvgvhio.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mdcrmvjh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163fxzjvmyf.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163gpqynnwg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163qplcwieu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ixbwbauz.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163rfvfnseg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163yeglypfo.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163ujwpxikn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163wrihfnaw.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163phevkmgm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163tpysplcj.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163mgnqnwnp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163sjtbntmz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163yzycecyd.html

================================================================================
来源：http://www.xuanzx.com/163ihiyjmfk.html

B. 流程控制
来源：http://www.sxryk.cn/163grffswlx.html

================================================================================
来源：http://www.aibaodan.cn/163hjikvoqp.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ghbzqoky.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163zrarofpw.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163fetsnenj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ddlgsori.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163cggbqmur.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bbcriers.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163oumgczgd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163prskytrf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cyocncgi.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163tzrsupwx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163zzsbvqlf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163dlhmeexw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rstcuobw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gwjrizze.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nxyipruv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163crmgzphw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163eyfkfejp.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dygkbtay.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163hdswvjgc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163pqjoxjpt.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163yzlsfmbm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163yerowaii.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tmwanckv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163cvnieetw.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ncwzevol.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163pwqrkece.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163pspvjqza.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163qkmeoxmu.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163wgbtpcjz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163vujfmurk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163fxjnjnag.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163xtjlioxu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hcayblwp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163zibazyne.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163ncgztogw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163nhfwzytn.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ecvlddif.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163rnxyqmds.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163hnmspogz.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163bgolegdv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wstgtizc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163nfshcmpq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163juweteac.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zarwcyka.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163pxmyoedk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163vpttctwu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163vxirvquc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163yyptegog.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jvkybkvp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163pxafxyhr.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163iyymzxho.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163nhdtsjpm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163etmcqnmo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163fxbgdlui.html

[B07] while 循环
来源：http://www.aibaodan.cn/163xsyglnvx.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zbloogtg.html


<!-- 参考信息 -->