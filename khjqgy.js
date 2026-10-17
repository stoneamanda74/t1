外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163dudmqfjf.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163bozhjttc.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.sxryk.cn/163pxypgjzy.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163gnydhgrg.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163sxtarieh.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163giaubays.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163hnsomgim.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163qgwxddhf.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163vkivklym.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163wlbvherb.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.sxryk.cn/163ufbwckma.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163yznqlhzg.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163jtryejkk.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163etreqxei.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163rzocmpxh.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163hjqxxnin.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ccgcuhbm.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163myzglenk.html

[A04] 判断变量类型
来源：http://www.sxryk.cn/163opzelida.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163ajtsznir.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163iimyoxob.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.sxryk.cn/163dlumekxn.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163qvkgqyxo.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163kkjfsjae.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163pnlsswmt.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163lrqgizha.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163rpirkvyk.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163htfzsluq.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163uhnigcyv.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163jssljjdt.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163wpnfenfy.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163lueeeqzw.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163gbovtohh.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163daiyizyx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163lbijhuwf.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163bsngdvkc.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163bayorxgi.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163bxhgyptc.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163ukxphcvi.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163sgpefigm.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163nexskjzg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163eurlkluh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163njjcefpi.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163lwcoudjx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163ewdpwcsg.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163ubtsffjj.html

Py:   str(42)
来源：http://www.aibaodan.cn/163lfsxogri.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163expgajro.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163eqzlckwh.html

TS:   String(42)
来源：http://www.xuanzx.com/163gepshwkd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163maabminb.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163brxeppfr.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163jniwdhjh.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163qndxvyig.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163asqavemf.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163xhjfyxzz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163aktavalz.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163kxzblwgk.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163axslxkex.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.xuanzx.com/163yjekpycn.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163qjwagexa.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163rtfqlwru.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163iqezamdi.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163kibqcrgf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163kuybvrow.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163dkqsrjpf.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163dcexjxik.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163miaipehr.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163fvwzhnat.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163shzrlelo.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163hqbrcisz.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163vqyzjsot.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163xuqzzrba.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163woznpyyd.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163iblhxdpj.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163jdjypeyl.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163urlmzdwj.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163biqfriyp.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163yyxtqjlh.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163yhcfjvzc.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163zlllstrb.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163untvlazh.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163wytfbddl.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163iimcdfdd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hhwfmrqm.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163qnlaqhzn.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ukajkozr.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163htgddkvd.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163ofaoimgf.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163pyptvmdl.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163hijfykif.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163nrobzvtw.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163rzafkgvb.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rwcvkpno.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163rvvzgvdd.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163isovbpjs.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163tzltypnp.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163gligrflc.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163jqywcbzm.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163kzmynncd.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163vrnflgjb.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163lgyocgud.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ueengmsk.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oojnckkc.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163xutbuvks.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oxeinhne.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163nfcjdvit.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163bhetxpxk.html

[A14] 注释写法
来源：http://www.xuanzx.com/163ksngddwg.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163qyficvmn.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163xularlfu.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nbtjvcha.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163icolnktg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163hpoimfsd.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163dfjtnoti.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163ynxnytes.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ulfvksmd.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163qqathmyq.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163kcmtrdgn.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163bfcyncvc.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163yqtlgfha.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163qhzvlhyu.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163mybeugzq.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163kcrrkwdb.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163vawrcxqc.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163dledcsbs.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163fhbwdsoe.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163bpbdvuwj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163medazjfl.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163ihelbusk.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163quhbzncx.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163noevetus.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163hcmvimek.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163lwrxnzbe.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163bzoahevb.html

[A17] 位运算
来源：http://www.xuanzx.com/163cbxfoixs.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163adxgqava.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163abjxbxhl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nvtspusd.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cghsuokr.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ezolezex.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163intefbxh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qkyutdgf.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xtvfkkhl.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163cufwbvnv.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163ydfcpagq.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163fainpweh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ttkvzofg.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163fvruantv.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ptlkcrts.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ovjcmprz.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163hhozrgmo.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163yjzvbiwi.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163euqtpiqg.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163dknxtnwe.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163urnqmdsw.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163fskgwtxv.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163uvvokmcg.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163gzsipxgn.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163crvegjlk.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163wtauievu.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163lbfuwvcg.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163eqhvlzcn.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163kuflybsd.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163sriiazoe.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163hjtxplgt.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163vlutrrwd.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163tgdmabzb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163etcapmoa.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163yfapfydx.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163yikzwpan.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163enoqyhne.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163okbewpnr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ydqwdppu.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163llkakbot.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163hhxagyxo.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163wqvvlfnz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163xwxnxvve.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163djlpywrt.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163lxnenmoe.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163dgumwlte.html

Py:   len(s)
来源：http://www.xuanzx.com/163cevsrhva.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163zavcbjml.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163zetihepa.html

TS:   s.length
来源：http://www.sxryk.cn/163fdebzldz.html

Java: s.length()
来源：http://www.sxryk.cn/163fviestjz.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163gfrattao.html

Ruby: s.length
来源：http://www.sxryk.cn/163wfukqkix.html

C#:   s.Length
来源：http://www.xuanzx.com/163divgsaee.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ucmtjarb.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163pecgrjla.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163jryfycxb.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163uskixndq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cgirncxk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163yrahiywg.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163csipdccm.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163boinaeza.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163tkeunnix.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163smqzykaj.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163crhfifba.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163qgmthjow.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163aznvzrml.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163evxualkn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163flpxfsos.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163zmnwhmwx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163pensjeoy.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163bmwrumzo.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163humoabmq.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163ujycjmcr.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163oygsxdnu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163bvqrgzkc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163iiitcqfu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163fnciphpd.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163wcgwtdhq.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ergliyid.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hvgnddio.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163qfqphitq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163fiuwoebq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163ozxacapn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163pjmeftzm.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163szscrlwf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ixkuqyau.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163yrzqvvvq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163keejgbdc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163xbmrhyvw.html

================================================================================
来源：http://www.xuanzx.com/163deolrvyc.html

B. 流程控制
来源：http://www.aibaodan.cn/163tcvjount.html

================================================================================
来源：http://www.aibaodan.cn/163tnpnrhpv.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163hcvhuuso.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163cxixziri.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163mlyizdrj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jghwflyt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163coxaqbap.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163fpirpwpd.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163vgqjvuzd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ufqcmezr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qlostgzp.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163bbcoznnw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163dqpvgzqo.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163hovqeete.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qyinxayp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ckgqlrtg.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pnnqxuuj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163tmsckfjt.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163wnxhtikb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163oibscfxw.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163bshnorfq.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163xlndoeul.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163goiilwfd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163oxaucqzw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rkdtcmgy.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wulzkvbx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163dfusfwqc.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163iczacyph.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163zoamnewf.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163cehyuirz.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163mdzrwsmy.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ldhdbbch.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hgnpcnsy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163dxmfbgyz.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163nxcylyqj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163eosgrkrk.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163fgchdfom.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163prvsyfnm.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163egcvbiah.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163ojaoezbm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163qzupykxl.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163nlftvvlk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163mybfpclf.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163ahgjzxrw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163iefnaxgf.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163jhjwblvw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163taxtkfxx.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163pijmcmmb.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163bfujaxds.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163loklfzza.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xznsozhn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163awaepdmj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163onzwphiu.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163njuppemn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ynckoyye.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163dahsiwgj.html

[B07] while 循环
来源：http://www.aibaodan.cn/163ttntezwx.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163tpeisndu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163dwuknobt.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163dbrogyop.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mdbooynf.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163omnroxdu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163bowknxtl.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jxacmxlq.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mzbdazep.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163xyncobgv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163gmhtscvl.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ucshemzp.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qkzrzyku.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ghxdcitr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hissukrv.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163iusaoxni.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163xnfhgaqb.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163erzoolyt.html


<!-- 参考信息 -->