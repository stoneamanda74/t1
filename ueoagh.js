外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163ixuxejmk.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163wljoxwel.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163ctvfegkg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163fdszmbwx.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163imgscwgg.html

Java: String name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163eukbzlfv.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163squvzeqn.html

Ruby: name = "Alex"; age = 20
来源：http://www.aibaodan.cn/163klwhebln.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163rlnutyvm.html

[A03] 常量定义
来源：http://www.sxryk.cn/163fezrbvfr.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163dhtgwcoz.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163encsofvl.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163xjuvtreu.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163jiszoeqp.html

Java: static final double PI = 3.14159;
来源：http://www.aibaodan.cn/163jppflals.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163krmuuqzc.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163wbizsnwp.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163nxfnfnwc.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163aanxtodn.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163cnhtreaf.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.aibaodan.cn/163fanhryma.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163hfdtujcq.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163rpcphrfr.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163ldbocjbl.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163ugwxwsgc.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163kosipccf.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163lbzauqzi.html

[A05] 整数除法与取模
来源：http://www.aibaodan.cn/163pcfemdxa.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163blazmucf.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163qgwvldrd.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163oagdwsgv.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163isdccvst.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163omhavmkh.html

Go:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163xkqdjsld.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163zutarpny.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163cbacjlgi.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163oucpnpvl.html

Py:   int("42"); float("3.14")
来源：http://www.aibaodan.cn/163kuijddxv.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163cfqsuyin.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163obwquevl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163vunvhrbk.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163ivlyvitb.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163dlicuftm.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163xggixjcd.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163ovagmkix.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163qezzoszf.html

Py:   str(42)
来源：http://www.sxryk.cn/163mndxkhlb.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163mweggrxw.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163kioonejc.html

TS:   String(42)
来源：http://www.xuanzx.com/163ahmplaiy.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163rflsxnzq.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163ejokdozi.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163guqsplkr.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163swvrpwxc.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163kmmsvaan.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163cfgnpxjn.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163vuamprjv.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163fcnztgjy.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163ublookma.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163tnjyzalu.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163hoxkfwll.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ugorfqfa.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163ikkrcvry.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163huizrlxb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163qwwuhkxi.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163aysgrbxg.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163zfnicekp.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163yqbaxgoo.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163snydqzxa.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163otsjhais.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163fojynzyl.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163rddmewcm.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163zyugqnuj.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163hooldyri.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163oswmkciv.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163ptcsxkzw.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wfickatx.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163gzovotwv.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163jkgrockj.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163kyfcfsso.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163olizsctr.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163oyjtocbb.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163mekaochh.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fhygxjxj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qgsawprj.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yygekkyg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qctopgsd.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163mrsmcxwa.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163bkumvzdl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163glblrvgr.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163kmthimrk.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163pvmuraap.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163dzwdhvfy.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163opawqieo.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163hfgtapwh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163lbnwcghv.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163bmeoqpqc.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163ceajqgfz.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163phhmcjfb.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163dgfnaalz.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163srinprdw.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163wxwauayx.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163westslvf.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tdigwmiw.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163bsqigibo.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xeopdqae.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163qhuupkmy.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163wkmagipf.html

[A14] 注释写法
来源：http://www.sxryk.cn/163gxkbxelw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163dfdchnqm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ozfolokp.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163iohvjljk.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163vtuqgiho.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163ivmdjqdo.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163nyvlenqs.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163dkgebucg.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163rflciyia.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163jynrliyx.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163siuimlsx.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163nfmmhonz.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rrnyubzs.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163mvkeppyn.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163hlnnuqfw.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163bzqdwhmf.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163ykliravk.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163xsblqzxq.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163uihhxijj.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ejibllgt.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163eejaygjj.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163ztmfrvqz.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163nkhzewhb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163cvbiunih.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163qjcqvfrg.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163xeytlpqj.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163sndnuqff.html

[A17] 位运算
来源：http://www.xuanzx.com/163fnybhrys.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pzqifeun.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163iiydhgwy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fyilpcym.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163gvqfxchd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ihfkcndk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gaqiosmq.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163druxvefa.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gbdhrgct.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163itiornyi.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163btawgpej.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163jizcpxoh.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163qpwkkeiv.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163xeznntuq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163anejmjad.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163nfwesisk.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163sliyobrq.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163mztdesxx.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163gzooeoin.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163txmgsutt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163elvducry.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163uvoxkndz.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163kgcrhiwg.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163nhdbewss.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163izwjrhln.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163sdqwtcww.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163facwkrbl.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ezbbaelo.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163wddqeugq.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163djbutnai.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163qmzgvihf.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163giugsdqm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163zjlbmprc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ansjdirt.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163conaznqy.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163crkdqgis.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163lfaygykz.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163qihshnzs.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163eaxgoyah.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163xaihybnv.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163teykpmav.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163whznwiyz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163rnwsdbrf.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163vcvijroo.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163vataxzoh.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163mgyuupvo.html

Py:   len(s)
来源：http://www.xuanzx.com/163zkbmckfo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163wgthhzml.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163nxsrrqnn.html

TS:   s.length
来源：http://www.aibaodan.cn/163nlkvowoy.html

Java: s.length()
来源：http://www.sxryk.cn/163plyghlsw.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163vsczxoyy.html

Ruby: s.length
来源：http://www.sxryk.cn/163gdhnherx.html

C#:   s.Length
来源：http://www.xuanzx.com/163rwyvrejd.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163japmgdja.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163maeaeqca.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163cmawvltv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163nuplgwsa.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163cgahvgtl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bqsyyfze.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163smeeyvin.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163lgjgnhrl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163txrxofli.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163sxhgmvht.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163ssxkrjuy.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163humllwbi.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tetisvso.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163yodjgvvd.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163brspsmjd.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163dxqvlnui.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163yxzktuat.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163zjfzkccf.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163jnjrcylk.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163qahhqtmn.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163xnpmttlt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163aujvjjzg.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163iltqvrvx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163uzijkoqn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163zqtwabbm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163deghqcuy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163guupqmsy.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163mhkjxprn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163orkooslw.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163xohrnjda.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163skzslmqm.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163nosdsdpi.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163lxthwgbx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163iwdsdner.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163kpqevwbj.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163zvwaupjc.html

================================================================================
来源：http://www.aibaodan.cn/163oyzlukve.html

B. 流程控制
来源：http://www.xuanzx.com/163eonlbroy.html

================================================================================
来源：http://www.aibaodan.cn/163sjqzflxf.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163rphrsjzd.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jlhvgbfa.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163grgdoutr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qecmnylt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163udxnehos.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hqfwnksj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163lidbkzee.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163ohtibect.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163xgomfonu.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163czvhcmme.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163bghnsvax.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163yhqwqxvu.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cwkdlajp.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ddhnsnmv.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163xprxrobv.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163fyvwttph.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163leirdopw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163arsvdruz.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163tulatauy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163dgnddqsz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163mqmertqd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163qzvqezam.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lcenfzbv.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163nmzgpmyn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163ypanzsmt.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163abhahlog.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qoemqscj.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163skpislni.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163hxiyucbs.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163phfpzlmw.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163snwnsxyd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vnwjdtzq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163wvyvboal.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jdreeuse.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163exqhtgjj.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163yioqffkg.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163hrnjkqvf.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163rccwcgfs.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ouaqcgcu.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zhwacmbs.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163lgczslvw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ommrbmmm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qghlrvwx.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163eycibwxm.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163aybzhepd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163euzhffwm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163rqncdqlv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163bythqysj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163hfiinecv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vcbctazi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163qanzknmm.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163iaugenwh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163nldanqed.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163pjvgvzqv.html

[B07] while 循环
来源：http://www.sxryk.cn/163xsayskrg.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163gtdkdgvu.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163nywqflom.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163klpoxmgf.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bmpiynzf.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163jvndiguu.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163fvtwaakj.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163lpiwkibp.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yaomfvso.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163vtllcrtr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163dkuimshh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bdualzkk.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gfwkdvau.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qrycaxwj.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ehvvctns.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163jidkabsj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lpxtkmoa.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uthkkjsf.html


<!-- 参考信息 -->