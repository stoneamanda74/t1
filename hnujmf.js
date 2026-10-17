外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163plmimlgz.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163uwsnddim.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zmkwcqtf.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163guxsckft.html

================================================================================
来源：http://www.aibaodan.cn/163zastqcqb.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163yiadkfcs.html

================================================================================
来源：http://www.xuanzx.com/163jsmnulgi.html

[A01] Hello World
来源：http://www.xuanzx.com/163vliwdicw.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163myjtqqaz.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163lndtbvku.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163sfqicnpn.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.xuanzx.com/163luhiroer.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163rqjktaji.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163zduvtmjc.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163vwzlgdtw.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163umynadar.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163vhwiloha.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163poootled.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163ptolyvjk.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.aibaodan.cn/163pmjrmcdk.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163koybdveq.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163hxopghhz.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163prclcubx.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ontcdfty.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163vqgqvwfr.html

[A03] 常量定义
来源：http://www.xuanzx.com/163gfcjcmgb.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163hgeetdmu.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163gibechef.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163fajincxa.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163atmllzcz.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163damvscav.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163madpxerb.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163dskmltvk.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163kbietmoz.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163uezwxfdj.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163wakwgfia.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163tgdnplja.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163cnzgekho.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163vdaahkgw.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163drhamdmp.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163tegbtigx.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163dfbxlcbx.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ywzpabqa.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163azyofhzq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163tyitasqt.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163oudazxkp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163udxljwoj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163vdeturhe.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jrmnpfrz.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163vutosozn.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jcrqblvo.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163thwtarus.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163tiqgssds.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163rehrzgis.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163xpfrbcze.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163xdnulbsu.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163whoqwaol.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163ffosctim.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163lgotwuaz.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163blenkqkg.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163jtugiidl.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163etzxiztx.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ylfefbvq.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163aksfyjwf.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163umnyknwj.html

TS:   String(42)
来源：http://www.xuanzx.com/163reuzzbtn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163qzhlxmsb.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163nvooedlb.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163dfprnibw.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163zmrpbjbk.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163fphynkui.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163zgqnzhvy.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.aibaodan.cn/163ovdnknow.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163hxhwnpro.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163itykauym.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163swdmqwaw.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163pknaocss.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163xutclbid.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163dcdhkbkj.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163eccbhryd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163incpqurj.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163mcjhrccs.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163checfgod.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163bdgekxth.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163uozyqgtx.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163suledsvc.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163phsajlvc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163pexrcwqv.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163vmogtcdq.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163duscuvbk.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163rhiulmxk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ijfzmqox.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163noydzrhj.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163fqwujqen.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163hzolefbp.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163jubduqhx.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163jnybxjfi.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163maofksbx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163aovisjhp.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163atdaqyvt.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ihulnhaa.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163erzbafjg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lijkdpgz.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163ymzteyqt.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qebzofrz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mrtwildl.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163cwsnfdor.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163khysylsv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163thaxsrom.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ptwlebla.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163cjcbedak.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163tdjeqfbr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163ofxfjkqf.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163svwysqsl.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163iilvnube.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163zltwaflz.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dggdrypg.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163aombzxcx.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163hennxkby.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163iikssszd.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zbesdflg.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163iebokgdw.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163vodkdlai.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163uzxswdvo.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163yoauazwe.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163wahrzkex.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wklcfxrn.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163smlvmngm.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163wpsjqkve.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163vdtlmtro.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xwggosuz.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163rkjouwso.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vbjbsoki.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163ketjnobt.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163hgkndiid.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163ndbsvodz.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zljrclht.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163kriwxije.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163pxxaxflj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163sxnbbaac.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163rzxfbuas.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163lkrlaiyz.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163qbwipbhv.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163sbqaqvwr.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163jblxexaf.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163xxbnvtpp.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163buxdtsxp.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163jeoxhbjj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163owhgkgmk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163crsaouil.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163xfjhvtsm.html

[A17] 位运算
来源：http://www.xuanzx.com/163qlzwwipr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163huoxvptr.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163xvdvdiod.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ubjpgzpa.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163luufhkjx.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163guybdiia.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163livumxbb.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fqohgvfq.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rrwzogtc.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163qirofyfx.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163qcnqocvm.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163fmcxgobz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163fynovyst.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163wsgrohgy.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163jnlozttc.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163dnhinswj.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163txfozbqy.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163kojcgvwz.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163pkarcveb.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163xultlnab.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163qyzianjb.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163djhmyxhu.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ktrwsuav.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163sjyabhxr.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163pxdrqfue.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163ssidxwxm.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163wlhxxdij.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163cnngahey.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163cokqydvm.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163wsbfjvmg.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163qiyezbtv.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163albvgblo.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163rshlqpqo.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163cvffhtti.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163fzsitbbn.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163xcdfsjso.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163fvodszxs.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163mycsjzlq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163iuzsmmva.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ssykbjeq.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163azgqqtzp.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jvtbvazh.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163iuebgnoi.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jhimisvd.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163cbzeidwr.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163zwawjaaw.html

Py:   len(s)
来源：http://www.aibaodan.cn/163xbmyontz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163mnvdisrn.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163iwgmtdlt.html

TS:   s.length
来源：http://www.sxryk.cn/163cqtiacap.html

Java: s.length()
来源：http://www.xuanzx.com/163yssgusli.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ujmqljbz.html

Ruby: s.length
来源：http://www.sxryk.cn/163vwpwinmy.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ruoqxxfb.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163orxxyddz.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163xyypndgu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163tnalbksd.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163cnyovwtf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163iebeuiif.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163pduunqwq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163ocesbqhs.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163jloyfcrm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163wqqkclkh.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163lfrjisoi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163zunwvxkm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ppmpnbgw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163lyftmwfm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163epuzzves.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163oxkhbwkk.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163jzffrawh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163vcktthaj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163mhqjlsju.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163oiceviea.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163gtuhqmhn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163mmffwoxl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163yoizremu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163fcwswbno.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163jpenxjlp.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163nhkwdtoj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163hcgerbpu.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163nhgyalaz.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163nqzccpby.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163ftaubkqh.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163fpstdyja.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163pnagizjb.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163ndyunyzv.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ltqxwkyx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163altpzdii.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163omyzpnqz.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163fzkeqnsu.html

================================================================================
来源：http://www.sxryk.cn/163puhxheqv.html

B. 流程控制
来源：http://www.aibaodan.cn/163qadeuadb.html

================================================================================
来源：http://www.aibaodan.cn/163ublwvpfk.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163cmzspjlx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163mhaiadby.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163cnqiqlvt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tbsdbszs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nqqafory.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rtmwkzga.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163xxxzehbd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163umxzwzwe.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rekvvulf.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163tvhtospi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kbbgwaaf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163bumgvmlw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jyzcdfge.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163omobqzmo.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163gmiwtsce.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163yttytkqx.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163rvezsfmq.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xheynith.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163kejifwua.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163mxkdsdgq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163hriveeqt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ninwgoan.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163jljwqlev.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163rynylqig.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jwlgsihz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163bywaqhvk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163vhrsdxct.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lujeayjt.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163rzxxdosn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163leugenbz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163tfevoqjj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163kuljnbjm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163aknghvec.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163pkelwvoh.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163omewtjou.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163kjuadchp.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163pfvaxsso.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163hmqyoyaq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163scjrtppb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fvxiocwf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nifqceod.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163dxlikups.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163timywdax.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163hdruvflp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163omxvswhu.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163atozcwyv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163cllicwux.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163vqvlhgyt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163zjlmykuf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163tzgftbjh.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163wdkkdyhg.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kqmaupsm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163pghmzchf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ubnttvfp.html

[B07] while 循环
来源：http://www.sxryk.cn/163tbwssuui.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ixdduajk.html


<!-- 参考信息 -->