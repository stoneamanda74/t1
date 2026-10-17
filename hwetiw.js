外链999!wailian999！

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163asfhyusg.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163isanulxy.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163frrytemh.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163lwhvqsfn.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163alqhlkqm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163fflxgryw.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163tjushgqb.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163sbipkgtf.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ejujezjc.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163kpbgchxp.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163inymcdbu.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163smczomti.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163chnldrjg.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ylkgkrpz.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163kwaiawwe.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163jqylueyq.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163wuhvnwbc.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163tijdvprq.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163ztoiiagj.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163hurzdybo.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.aibaodan.cn/163tjjxyzmj.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163wnuzinmw.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163mlqtylpm.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163elutbwcc.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163eucyrgsb.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163jbwcoimh.html

Py:   str(42)
来源：http://www.aibaodan.cn/163klrtzqjz.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163zeyaafqh.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163sjdibtir.html

TS:   String(42)
来源：http://www.xuanzx.com/163uohyuged.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163lafmiffq.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163akiirhym.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163ymuiatfc.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163kuwxqrcf.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163ullkdufz.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163egccjtam.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163bedfhnsq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163fyltslpn.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163tbsvhudo.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163pkvzaunc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163rygfxfno.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163ysknazwf.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163oerxistm.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163znstrzpq.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163lrdcfqjt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163czbvtxmt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163tqhjtahe.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163qduayaxl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163eacjzrnb.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163tnbojdwq.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163qrvdyoaa.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163sktxgtax.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163htnyvkrq.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163pqysujxi.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163onxnqijt.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163woqvtrib.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163vpjzlakl.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163hzejhbip.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163rkczfhzi.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163qcncxigv.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163cisjonok.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163putjhheu.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163fzuoswgo.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163moccoicd.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ijwwxsqg.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163skinggry.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163dxjvvztg.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163lzziemmb.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163zhaerysc.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163hwmzizwc.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163jklxdiyo.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163iseewyjs.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163lfdfohyt.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163quribmbx.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163vvuqnwry.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163ragfmhdu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163vqimbvzr.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163afkwqwxg.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163qigxadvv.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163fnjigfjw.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163amdboxoh.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163xhakwclm.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163oocpovut.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163fiofmiai.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163cysyrvxd.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rvltiogl.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163pyuxuana.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163vkxhofru.html

[A14] 注释写法
来源：http://www.sxryk.cn/163tfkvfmzw.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163aanxoqsf.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163hcovswlq.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163czddvixs.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163scpltnyl.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163pgaauhnq.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163iyyywgaj.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163nmupuule.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163yvymryug.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163idvobfvh.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163ifspsnfi.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163lhzefytp.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163irsnamxn.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163vjkmxxpo.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163qerkweqr.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163gexnsuzs.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163kdtjiyfm.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163gvlogrkc.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163gsylmjcs.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163rrajvhal.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163qiimqfag.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163xnsosvfc.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163qvdghmye.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163tlmlexdb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163kpglytof.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163ljxyptxs.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163frawllby.html

[A17] 位运算
来源：http://www.sxryk.cn/163etferiwv.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163tmslnigg.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163ihmbedpa.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iocikunc.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163irolwzba.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fkjbalbj.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kpppoqpu.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163mhvbsjtm.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gijmbhbj.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163gzneitzd.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163uwonnxgg.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163vmkidjmg.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163iabhexcb.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163wkaxmhkq.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163nbpqncil.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163spvsoyol.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163aukarxzp.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163ehgnpxdn.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163kgmhozks.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163hhcxyxxg.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163ylpsfnie.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ekqvjrej.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163irhqjpxs.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163jgxjvlcg.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163matsagju.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163dustabcm.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163mzbfcgiq.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163gmbwcrjk.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ssmerttg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163moxurmka.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163suqclvnx.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163pgwbybzz.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163jczuvxmd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163dcwuvpwq.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163ddljypgj.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163pungfzet.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163zuszepkm.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163zxhagaxq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163isgspbfc.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163zaomovtl.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ojbfenkk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gvwfjuxf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qzgujgrg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163xufqcbgx.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163eiiqwvwj.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163yvcrmuge.html

Py:   len(s)
来源：http://www.aibaodan.cn/163pbuboxzn.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163gexuyvpq.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163hbpepssx.html

TS:   s.length
来源：http://www.sxryk.cn/163hnizqzmp.html

Java: s.length()
来源：http://www.xuanzx.com/163pqenzcrb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163hkllojtl.html

Ruby: s.length
来源：http://www.aibaodan.cn/163qhuevgpn.html

C#:   s.Length
来源：http://www.aibaodan.cn/163tuzexkhb.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163okeswyot.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163evupxzqk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163bnjyxkbm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163rpeqtryo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qaofcnwb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163aqqiztsn.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163ukcvkbcp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163royzpkqv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163navcsuyd.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163zrwiwmhf.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163axlmtzlz.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163qytufgts.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163rrzdxlzy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163hnurqruy.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163tlljwril.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163ohcealxp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163akyumcxg.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163atptryyj.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163kvilblkt.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163rgzfcsth.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163amrlqhys.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163kxxgqkqt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kwllkcft.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163uxnrvpri.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163hebkmaex.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163uokzkmoh.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163cnjhpzhp.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163zyrcnqky.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163mfvzfowr.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163locxmzvm.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163rhqxltps.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163mlefviou.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163nvssyaxd.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163remxmmev.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163npcvkvgi.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163hgbfgcax.html

================================================================================
来源：http://www.sxryk.cn/163nnjzeqsq.html

B. 流程控制
来源：http://www.sxryk.cn/163tpatnrtk.html

================================================================================
来源：http://www.aibaodan.cn/163oxublute.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163frixtaqk.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163mtlbgvyq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163rbgtgqzz.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pxxfuzsz.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rxdszxvi.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pnyvjzzj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ycivgyai.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163wjradxgy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rvpstsqd.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163qtdsvhjm.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163xsdnukcj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163ddmoxcrx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163absndjuc.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kdqetisw.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mxivufmr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163lrjirgnv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ylfmqijb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163eaovvwvo.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163fglyvsyc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163evuavykm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163uhcaqxpj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163owllhvzq.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ignrxmiw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pskpgvef.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163tkhcunyk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163jypcgmqo.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163bkfiaipq.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163hwlfytvm.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163uebosgmp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163ygapoyez.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vucnivhk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163sypqhdlo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163igpochhh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163huinncxz.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xyvmzjum.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163qqaccokd.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163sbdscsqt.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fbkxzdvm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163bgdgjnkr.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163xrfcuhmr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jvtszkmh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163vnkaonji.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163cynkkymm.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ixnoiaco.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163vzjmwfsq.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fistezzh.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163mpkbqhmu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ghhmxmom.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zpzftagq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ljjywwkn.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163hyyladym.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163hjalrxew.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163qtdbxcav.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163mggvzoka.html

[B07] while 循环
来源：http://www.sxryk.cn/163ytklzsxj.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ajippxev.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163wtqmhgub.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wjeufiyx.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xksovrqr.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xcpczcfa.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163yfmltcsp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163yzsveqtp.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kddpjexc.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163vpfkuxad.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163dwoqhrwy.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163cggfibki.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163edpgbyap.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rnqninng.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dwbtmxni.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163zqahyydg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163qdixyzrd.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163agmfeplt.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163jhofkbsk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fksouffi.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163byidjshg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163btiszzfw.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hnitwfii.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zijfhbyd.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163lhqemfvc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163hhoiaeik.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163etohafri.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ysgsuvdf.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ictjvuhx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163qkowpwlv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163aykcmtda.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163bmvfwlcp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163jwlowigb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ewwdofqu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163gowgqhsg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163vlghmjxe.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163dihfetao.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bfbutvpi.html


<!-- 参考信息 -->