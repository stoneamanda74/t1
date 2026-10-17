外链999!wailian999！

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163dewlvxxe.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163doqsxemi.html

Py:   str(42)
来源：http://www.aibaodan.cn/163hrqqfxli.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163cmrtavyx.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163ivabambh.html

TS:   String(42)
来源：http://www.sxryk.cn/163vjdsalxb.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163ghlcgvpi.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163gcugogdu.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ujwwfbnt.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163ceyfjhgy.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163ixeiowwf.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163svithfyp.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163jrlennsj.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163rshcdukj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163rdiilptj.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ozipziaw.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163jiqzculn.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163koncakws.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163mfpigiah.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163jkycknnd.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163vciumfic.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163fqufhrsl.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163fbkghiom.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163cckuzqjl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163zwrblrsz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163revluuqi.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163vqyldfxa.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163rhrrkuoy.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163xwalbptl.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163pzdkecjw.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163xarvovqz.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163vakcfsql.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163pbnwappv.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163xypiawcw.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163flmrqkwn.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163rejyuwwj.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163unobqndv.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163rgujdrdi.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163lqisohmj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nxhatffd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163sqmmnapg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163vrombwlm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163msvdfzua.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163efhgadnf.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163hsjwrbwu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ghflqxbu.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163auvbawho.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163inptmxqo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163jlbtqumv.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163kdmsnffv.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163wpizlxea.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163lypdmqoi.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163mhhirzjg.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163pqzzqhqh.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163amsqrspf.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163ioqclhlb.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163nqrzsvrt.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163nemkaqwo.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ekloekjk.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163futsewsc.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163tawynhxd.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mnneqnjj.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163oguudxsr.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163ssztqxaj.html

[A14] 注释写法
来源：http://www.sxryk.cn/163vcqmuirz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163kwxfbmqd.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163gdbufeeb.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ifxzqojy.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163symdoteu.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163xsouruhl.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163orpxcfhh.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163dhfbtcwj.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163ocvrkxnp.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163zvuqzwmj.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163tsaexkmt.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163ogwneexb.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tpntdblb.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163uxeoabrq.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163fsjcdomb.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163jjipsbkp.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163gqmkqgah.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163wehwnewn.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163rifoxayd.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163fxyulmzt.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163fgxvejjs.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163iyylsthm.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163pifsytay.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163pfrjbenj.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163ozrjmbph.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163chsvheog.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163gszrvuyn.html

[A17] 位运算
来源：http://www.aibaodan.cn/163elbwqijm.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163llnimmcz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163vpoqoajv.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163uccmtulu.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163hjuhbadb.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vydvdsxt.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wfirwudd.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163pajzbryy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163qpdysehe.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163hhgtxzdo.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163cgphfqys.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163jyuicmez.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163wlltgrxj.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163dnucsnxp.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163wmivteye.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163zioapiyd.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163axpliknt.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163cuckxuxw.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163zodxlvhi.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163aasyxggh.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163zzmpaauu.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163seocxaql.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163zpkyeijq.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163etcnbuob.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163zyivfoph.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ujgatmfj.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163anoatxmb.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163wtrbjuks.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163gsiwxyur.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163dbnicigx.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163jpswfhtj.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163arnxpujt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163kqltmpes.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163cupnqrau.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163hadvhtmt.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163giqmrurl.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163wpjbnzef.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163upxlpxpn.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zwgtigco.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163qsjykwyy.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163tgpmggwt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bmygewbf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163axptxjpk.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gugtmphn.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163hrhahpwb.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163yxgzrvbt.html

Py:   len(s)
来源：http://www.aibaodan.cn/163igjshiez.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163dbbcschh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163nueqtxxc.html

TS:   s.length
来源：http://www.aibaodan.cn/163yuvfwerl.html

Java: s.length()
来源：http://www.xuanzx.com/163pnxpvwya.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163sbppavop.html

Ruby: s.length
来源：http://www.xuanzx.com/163dljuprct.html

C#:   s.Length
来源：http://www.xuanzx.com/163pcoruvhm.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163lhqbilju.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163vfnkscma.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163qdpbfagc.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ovyadxqj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163puizmsvz.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mnjlzljh.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163dvrtmcum.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163fpxamgae.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163fpzcohrh.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163mobqvzlp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163fhnnobjn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163ujbhhkwa.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163glowrnbw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163prelsyyz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163njmcnawr.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163waakncev.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163mwnblkdm.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163oxofdqdp.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163vitmkhor.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163lzistojm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163dtnfcpxx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163tegpgmrw.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163kqllmoho.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163thqnlfdn.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163icotaxmj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163mmzvjyvy.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163jehnmowi.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163niwhkktn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163bwxhbcew.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163wvriwihc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163soohqwvm.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163qluqzqug.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163avbacyqz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163utkbnfee.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163eyvcyynx.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163tsdwxoib.html

================================================================================
来源：http://www.xuanzx.com/163vapleagj.html

B. 流程控制
来源：http://www.sxryk.cn/163mumtfsec.html

================================================================================
来源：http://www.sxryk.cn/163vqkuyhzk.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vtjjjtsk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163pvjiwvtf.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163babfskah.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vqbvacmz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163eupqhhlj.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163folzefxb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163jbxwhgjw.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163syezqotg.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hvldhmum.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163lvcktlwu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163htybolbk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163vscwradn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163levgffbn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163mmuycsys.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bmvyzwrs.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163pkvnampw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163gzypwmds.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163rurwohcl.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163iwfgdpfy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163luljzrdu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163oymkutnn.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tondzoga.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163tqaxdeqt.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zkgcaqda.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qwnfgtki.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163dzxbgbyn.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163wcsumxjf.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163dkarfumn.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163mvoppsoi.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163gpvgbubt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zthqobzs.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163nawscrdw.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163bqinvvez.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163hrwovcus.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163vgeedclw.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163eswivril.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163kkmpfolv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163qaqkgiqe.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163ikjifgyf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163tebrnjpw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163lmbjmkmd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163owfzhrup.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163wmljqloj.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dqmjvckj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163dvoactia.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163dwlzdazz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163kejpdajz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163sdadmrdz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163pxlkltns.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163psvmekuv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163rbkshtyp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163yqnzqmtp.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163biiaqpdc.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163mzozrbdn.html

[B07] while 循环
来源：http://www.aibaodan.cn/163dxqpeudq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xqvkvlnn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163icentayd.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nhblrrrh.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ebgtvlmn.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163aexykpvx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ldavchjc.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163nmkcyyjq.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fbzwweky.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163bsjiwbwi.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163egnblxjz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163mcdpyjom.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nywukcge.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rypfqcct.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ofkyjnes.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163fpdftqor.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ntwjspkh.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dpqlfjut.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163birtpjqd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ztqipeov.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163drhpyrpl.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ptlawmvm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gnlhtaiy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163schtcmrq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163ukekrdit.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163mtijyyie.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qfgkcqws.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163wtsfovqz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163pwcmlwwo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163njftkfdb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163nbramppb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163kxpozsiy.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rulmaazj.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163sqsejblj.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bjgkqmpl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163rdwoadze.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zooznilf.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163czboxwgn.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163ayehlnes.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163eklzwoyq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ttixnifg.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163niatzfzz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163bjraclqd.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ejjkyhwq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163uvhxpryn.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163pmlrxzwz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jrmmwsth.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163oaaxbczd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163stpuztxk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zedxxtkb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fiysnqda.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163vxkuwfop.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163vwnwyoou.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ltzsxoaa.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163sumqnqit.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xgwbggon.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163efubafid.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163pwcglekj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jyubexcb.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163feepqjvo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ljupuszy.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163ytezjeai.html


<!-- 参考信息 -->