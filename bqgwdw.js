外链999!wailian999！

N. 数据结构与算法              （第 14 节，12 个任务，96 条）
来源：http://www.sxryk.cn/163bkpbwyeb.html

O. 并发与异步                  （第 15 节，6 个任务，48 条）
来源：http://www.sxryk.cn/163tutewome.html

P. 常用工具函数                （第 16 节，8 个任务，64 条）
来源：http://www.sxryk.cn/163rfaxqcqm.html

Q. SQL 专题                    （第 17 节，90 条）
来源：http://www.aibaodan.cn/163tsbcwqwg.html

R. Bash 专题                   （第 18 节，80 条）
来源：http://www.sxryk.cn/163vproqfqx.html

S. C / C++ 专题                （第 19 节，60 条）
来源：http://www.aibaodan.cn/163pkconxyh.html

T. 其他语言补充                （第 20 节，60 条：Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163gdahvncn.html

U. 高频实用片段                （第 21 节，120 条：Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163cwtxrokh.html

================================================================================
来源：http://www.aibaodan.cn/163kgohoxcw.html

A. 基础语法与类型
来源：http://www.aibaodan.cn/163jmdrmads.html

================================================================================
来源：http://www.aibaodan.cn/163kccslahu.html

[A01] Hello World
来源：http://www.aibaodan.cn/163mflhtuoj.html

Py:   print("Hello, World!")
来源：http://www.sxryk.cn/163ezqrsqjl.html

PHP:  echo "Hello, World!";
来源：http://www.sxryk.cn/163tztrlpcz.html

JS:   console.log("Hello, World!");
来源：http://www.aibaodan.cn/163rmspqicw.html

TS:   const msg: string = "Hello, World!"; console.log(msg);
来源：http://www.sxryk.cn/163fflluxhh.html

Java: System.out.println("Hello, World!");
来源：http://www.xuanzx.com/163llfbyngc.html

Go:   fmt.Println("Hello, World!")
来源：http://www.sxryk.cn/163aunbbomm.html

Ruby: puts "Hello, World!"
来源：http://www.sxryk.cn/163clebqdam.html

C#:   Console.WriteLine("Hello, World!");
来源：http://www.xuanzx.com/163kdbamfie.html

[A02] 变量声明与赋值
来源：http://www.sxryk.cn/163jijuyxve.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163wqcgldki.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.xuanzx.com/163bwkexmyi.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163ljvzzwjm.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.xuanzx.com/163qtaylmuw.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163lljcpjbu.html

Go:   name := "Alex"; age := 20
来源：http://www.sxryk.cn/163oqxujooh.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163ewtiujnp.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163fazektph.html

[A03] 常量定义
来源：http://www.xuanzx.com/163iibujnrr.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163eomvncmh.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163hjhcswvm.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163kwmwrfds.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163kvzwflmq.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163toguekws.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163hwgkfdfu.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163lluqyhby.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163wcgswvvz.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163npecpsoh.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.xuanzx.com/163saubptug.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163xtfdjkza.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163cmfmpxff.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163vfjitmsi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163dffyljgs.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163dgsuvoce.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163cpzsyyba.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163vyddrvfh.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163pgmxvbny.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163sfezdosz.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163mcsuhtkx.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163zavmgoig.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163ftnwmnhi.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163bkpntvhg.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gyzhnudj.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163vvqkakzx.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163httsecao.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163bfzdkcwp.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163lvmpbnoo.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163fsbbjpre.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163anwdsccf.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163xywofuqm.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163xnsoolvu.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163ioqetrby.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163kymqoufa.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163bhrvgidl.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163rydetxjp.html

Py:   str(42)
来源：http://www.aibaodan.cn/163psdqfawc.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163rslvcpge.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163xsqdswns.html

TS:   String(42)
来源：http://www.aibaodan.cn/163eslngoyk.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163wqjfxyhp.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163vcmdbkip.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163roogzjhc.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163szcufvxb.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163ohgsqfry.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163donfftrm.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163vsxcmeed.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163dfdqhxpw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163gpittvck.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163ltsgrxpb.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163rmksvumi.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163nvqgzund.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163olsdtjjs.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163xtcztfpt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163mvqlrqhz.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163nibykuqt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163frwiedvb.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163wlbtbrgz.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163csdtwcvn.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163rfcgqqhi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163carnpndp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163yzwbtpnj.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163cuvsemlr.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163ipuoiazj.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163xolrfewx.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163awraipec.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163lagrwnzo.html

Java: new Random().nextInt(100) + 1
来源：http://www.aibaodan.cn/163pdoytaex.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163xwrrblto.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163svcikdoh.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163hzqdjnwp.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163dwmjqjpr.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163dvmlxemh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vefbancw.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163sohlofxh.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163fushdqlg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163uoemtdhm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163usnguhjw.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163rvcygrqx.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163wpqgbasq.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163vyclkdma.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163ejpwnkhu.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163dsquiibu.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163jdiwfdcm.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163coxnrvxb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163smljdacc.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163bnecblux.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163xizqsbto.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163fjxmpnpe.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163ciciwgyn.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163yuvbrdyj.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163njhlaffa.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163krkezzat.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163rqcbavue.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163pqgptjta.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163iqiyybud.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163ymnrigei.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dnhaqiis.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163irtktrtd.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.xuanzx.com/163zpchioyz.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163bhongduo.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vwlwjcgv.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163gzfvmmez.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163cpvdubtd.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vhkyhgdv.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163sgvkdgnn.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163poenkaku.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163oaruekaz.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163ubbqahbx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163wxpnqvfd.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163hadjrifk.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163cnshowgl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163ctujnnpc.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ymgahhkn.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163vwjrkxin.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163qoxrkuda.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163drrofqzp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163gnkoluma.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163pxfqxxjw.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163zmiieeww.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163zdqvdwyu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163oukphiht.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163pmmpdjew.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ntrpinse.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163tkidkovw.html

[A17] 位运算
来源：http://www.xuanzx.com/163dejfjdsa.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163koxoulmc.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163eaobcahh.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sjjertxx.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163fnboqtwk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yznnkkcx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163sgvpyige.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163qefwvysg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fymaiphn.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163lwbnncth.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163vrkvnmqd.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163jibfoatv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163xrzdvvvk.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ysywiqqw.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ndfjplxy.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163yolevuqq.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163whfktjlk.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163qopypfgo.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163yzrdnqgq.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163wdinkmfy.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163mppfhmzi.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163dickafws.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bfgojxni.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163buvcjmtp.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163fmytqcux.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163hwartuzj.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163ghxnwqpp.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163yptfuskd.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163kwuohsho.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163skfvcfja.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ragcyvlw.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163cwehynoh.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163idymqvib.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163owiivybn.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163jrhallqn.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163disatwmg.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163ccrnuyyf.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163palkyqhh.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rjsklwfo.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163zwockwan.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163fbopwxmo.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dunnnpar.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ycgckuwz.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163eqoxavti.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163lvhafnhr.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163jfmnojho.html

Py:   len(s)
来源：http://www.xuanzx.com/163jkcqwcek.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ngwhkpwb.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163xwuomfuz.html

TS:   s.length
来源：http://www.aibaodan.cn/163mukjywws.html

Java: s.length()
来源：http://www.aibaodan.cn/163caedclrr.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163xlluckde.html

Ruby: s.length
来源：http://www.aibaodan.cn/163jabzatlu.html

C#:   s.Length
来源：http://www.xuanzx.com/163nbuumlrn.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163mzqkzujt.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163caqbyuwt.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163kgmtegem.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163anhqiwlz.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rrdxgfai.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163gyurwnbi.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163blrlapug.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163grlkwpfu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163gibjyzsz.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163zuhpghvt.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163awgzykig.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163zcfuzjoj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ukvmpwml.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163ghwgepqk.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163rvocstnp.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163whkizuwo.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163bctfcsot.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163vhusurft.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163rpntltom.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163thedbznl.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163pqnaufyn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ycckccxn.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kwwbtehz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163dkcvqtot.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163jczjvdpa.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163zhgwfihh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163rbprrgzf.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ddxkfins.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163egbeyrza.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ircwaidw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ylemyprl.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163aftyhata.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163jkypeizk.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ymyoowjr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163dxyhzhsw.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163gykarkxg.html

================================================================================
来源：http://www.xuanzx.com/163mubduksc.html

B. 流程控制
来源：http://www.aibaodan.cn/163zsbpglrm.html

================================================================================
来源：http://www.sxryk.cn/163wmauqkrg.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163llrzckwa.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163zdzkzjrc.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163eehjdjxe.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fijbqmnz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163mzzglqrj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eqtslujc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163kajiqxfn.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163fovlnzpg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tunohxjx.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163cpafkcct.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163mwxmdobd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163cclmvurr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163wfbfempo.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163otijwpom.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163xcjeprbg.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163vwgtsnns.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163hfxwrimd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xaymhwls.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163yzlpizmn.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163lcokypcw.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163didbgexj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163ymbxjiap.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163fnalmaqb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163nxtblswr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163clfgizcq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163nhbijkju.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163nxstbtkz.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163zrluxcom.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163vdcuqjkr.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163jryrdnca.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gisnmvao.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ttdwkxte.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163alcrruwb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163pavxdeer.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ejanftka.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ulqsszcs.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163letvqhml.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163jmjivngh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163einswrha.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xqtjerrp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ooyfguxz.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163cvbzopjv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163mcyqrgwq.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ohrahugr.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163pduzhkml.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163dqbnaydt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163meduaydk.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ycmqpxvj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163veewmobo.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163njkdefxd.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163msoachuz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163atpcvbqd.html


<!-- 参考信息 -->