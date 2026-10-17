外链999!wailian999！

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.xuanzx.com/163kmebukob.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.sxryk.cn/163kdukxtkt.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163mgfapwwe.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163vqmesiuf.html

================================================================================
来源：http://www.aibaodan.cn/163iwurjghj.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163qmdqcsgq.html

================================================================================
来源：http://www.aibaodan.cn/163qiugtspv.html

[A01] Hello World
来源：http://www.sxryk.cn/163yrfctpnl.html

Py:   print("Hello, World!")
来源：http://www.aibaodan.cn/163gvpgtoor.html

PHP:  echo "Hello, World!";
来源：http://www.aibaodan.cn/163srawkapu.html

JS:   console.log("Hello, World!");
来源：http://www.xuanzx.com/163jqagzwlj.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.aibaodan.cn/163vnvyoonl.html

Java: System.out.println("Hello, World!");
来源：http://www.aibaodan.cn/163lfovixrl.html

Go:   fmt.Println("Hello, World!")
来源：http://www.xuanzx.com/163ohiswrfc.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163wvlzxkcv.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.sxryk.cn/163wvpqnvjr.html

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163xajjnewc.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163zbugmnuw.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163cbrszsgr.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163pzqcpqth.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163kqzurmng.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163dpycqzuk.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163bndnqivc.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163wcssjiui.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163jktserpp.html

[A03] 常量定义
来源：http://www.xuanzx.com/163sevbyxdg.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163dsswljmo.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163ylrlijsl.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163jpbotpvt.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163lsruoysk.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163xqqtcnfb.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163swskmpqn.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163rbcoapfx.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163istcrffe.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163khafsbay.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ydvxaqju.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163hjddvygo.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163pcfqpgpw.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163wudiaqqr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163jfzohfbc.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163uztqlbkc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163zxyjikay.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163wosfsqol.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163eoojqwpf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.xuanzx.com/163dzkxpzxs.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163xiifkgwy.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gpobnufo.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163kypgspfu.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ewewmuqx.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vbdkende.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163mhiuktco.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163cmtgcrcn.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163kmfhggtv.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163cubwnudo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163lbxyygpv.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163qwgzibef.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163gawxfyay.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163yqjlsgow.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163zzwgamkj.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ifsklack.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163obdzirqa.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163dglzckir.html

Py:   str(42)
来源：http://www.xuanzx.com/163ipprlbqm.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163ovblgphf.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ieatmqlf.html

TS:   String(42)
来源：http://www.aibaodan.cn/163qlkjqycs.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163lgxxpqpx.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163abrghtev.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163rzjbbtgl.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163xxoxicxs.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163sdiucfvk.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163pkjileej.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163btxtmuxf.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163xsehpovo.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163apewtnlm.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163qsjguvdv.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163scwjbrbj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163wktiogcy.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163iqedjmsi.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163qfxmzgca.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163nxmyyowx.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163pybkcpje.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163qfufvezz.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163adcxjlwk.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163hmlwxqqe.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163eheboqkk.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163nzvbqibl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163qxibvzyn.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163cabetbah.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163yefnzpkl.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163iwrnrjgs.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163qngpljuo.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163lsvqxllo.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163qfrvwfjp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163kloobcet.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163tltweqij.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163fbhkscys.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163ijlcpupq.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163oolfqelm.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163swwmycwn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fschkasl.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zldoxvgc.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163adqeiadu.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163aqttpfhi.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163xmaypsak.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mktcaeby.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163ekeuymki.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163inqworgv.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163tyrobjns.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163khohvlvf.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163teecknxt.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ponctrnh.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163khzezfuw.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163yjcvwttg.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163hxhnlixl.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ixtnfjmr.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163qerygarf.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163jhhwtlhw.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163wwkmlzha.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zzwtbnmq.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163sshpdtmu.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ksobalzo.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163odmvxjul.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163sdfyaacc.html

[A14] 注释写法
来源：http://www.sxryk.cn/163dvwrquul.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163leoztjeh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163jticjqsl.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qjmnxxaw.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163lcttoqtx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163rasdixuq.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jrrlzkem.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163rzzzdklg.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wiimwvfx.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163mnxkfeku.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163mczoeyac.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163bnvnqnte.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163qzczhkwh.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163ixawgfza.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ijdgrzij.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163rvimpxgm.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163bedopeig.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163elwopide.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163cfituamp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163zkokkbwo.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qctrshhy.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163agtegliv.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ctwnvyru.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163nihbxixb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163vwzglnzj.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163jneiwbyf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163nwuoqjwm.html

[A17] 位运算
来源：http://www.sxryk.cn/163yqmpydfb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jkcigmpv.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163rhmnhhvm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jshqchke.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163ovenfgff.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xztxwxis.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163khnmapar.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dmlqydba.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163oeixsaym.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163ixirrknd.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jgybngwk.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163fxgnpjhi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ekqnoxcb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163xivdslbl.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163gjrmrspa.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163dcacvbet.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163cmhjpqnh.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163woisohaq.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163wkeetteg.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ohiusykp.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163pnbvcgcg.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163xurmmvsv.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ysgjcdrk.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163flekhleh.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163cyfdsdxg.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163jgyynefg.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163nkrrxxte.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163uaerisct.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163pvxsxhyj.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163xwqnmpzy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163rfywgers.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163qqbmrgqi.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163tnrhptze.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163khvpdqzw.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163cfcrnufu.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163adbbgcdp.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163auxiciku.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163awfhmoyo.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nscvpwmy.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163urpfpkni.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ubadvewf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163bepyqkkl.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163jtvdjezl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163trsmjfgs.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wbqrkfkl.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163oghwdnad.html

Py:   len(s)
来源：http://www.sxryk.cn/163debmrslt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163jcllqwlh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163epwamkdd.html

TS:   s.length
来源：http://www.aibaodan.cn/163ssuypopb.html

Java: s.length()
来源：http://www.xuanzx.com/163njpabjzk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163qhtheawa.html

Ruby: s.length
来源：http://www.xuanzx.com/163qkrfsnkl.html

C#:   s.Length
来源：http://www.xuanzx.com/163ybdxpozb.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163rqnavqzn.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163sxwrwnsd.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163yythqyhv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163spbarwns.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163spnkrrcu.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163mluydgyq.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163yehbpnxf.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163tklxjpns.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163cyhjdeup.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163mdokkxuf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163pqvziwhi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163biildhhw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163glpclvdm.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163kfctoldm.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163rhhspxmu.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163vpoglsrv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163nqziyiys.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163ebbvmrhs.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163zurtzolm.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163vrpgkszb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163mtunyjqs.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bzdabtwc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163jkachtwl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163phpobijl.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163lcmtdbma.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163oepsjwpo.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163fwtvsrlw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163xbqkyxht.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163aczctisn.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163chumziyv.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163lsijvjst.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163awwzuqjh.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163zaywrzlc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163eykiiyor.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163aappudqp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163kxcighmw.html

================================================================================
来源：http://www.aibaodan.cn/163zhwyrgdq.html

B. 流程控制
来源：http://www.aibaodan.cn/163olcvvdzs.html

================================================================================
来源：http://www.xuanzx.com/163omygsphr.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163zwroqvgc.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163wbwnnxnq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163fksozpbr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ktjhgsto.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163mmmstbsk.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163lgyycimg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163puviuvhw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163uavlmipx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ykemqrpk.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163tyybjbsq.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163hixkyccb.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163xjllgnpq.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163vonjtktz.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163nefsgjnt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ehcfmbzo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mvyuvfdu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163qmfvotxb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163loloyuwm.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163qcssbget.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163lfametdk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ucoztiay.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163okucasil.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fnucidxw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163ldbyxebc.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163hswcqlkd.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ozcibqqg.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163ziukupov.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163nuuyurus.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163zpdpozev.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163vgxtidgo.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163zmfbaeko.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nayhdujg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163hmitpbzr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163gqlcsppz.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163msuvksrx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163lyksivnb.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163pzesghwf.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fpjpnxuw.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xjfzibgv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163uwfjiljz.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163dirxaspy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163qfgkxrcm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163fqhhfbmb.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163hnpdlcwc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163sqabqrtm.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163pjvsqxlq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163gimudvzx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163epyzpvij.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tdnafgvk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163exbhfxwd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163odpqfhwh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163qiiqccrb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163pzhgspff.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163bjusltgf.html

[B07] while 循环
来源：http://www.xuanzx.com/163hwmzkfqh.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163ygeonlze.html


<!-- 参考信息 -->