外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163cfjpscqo.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163dabuqqnk.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163flrurahw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163rimdxsmo.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163lkorakht.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163ansncyvm.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163xibwonjt.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163gieuxmjh.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163nxuspqac.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163xwdrwjjb.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163pgxjhlqc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163skjginwy.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163grxroidd.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163qsjbkshd.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163kjbkbptp.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163fugdbnxe.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163aqfkzacm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163lmukdujs.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163rnwuiivt.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163zjytgnnr.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163cegxgdpd.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.xuanzx.com/163ysyyflro.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163warycrup.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163otyxiloa.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163eipsdzht.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163kfaglerf.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163hbbiqnxc.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163rrxxprge.html

[A06] 字符串转数字
来源：http://www.sxryk.cn/163qyecgqgx.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163xzlmkpne.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163hyqjbsse.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163jemobdht.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163mxarbtmi.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163dhfvqotl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163rtrkgxfi.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163tdtjumta.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163pjxciheg.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163zejzleif.html

Py:   str(42)
来源：http://www.aibaodan.cn/163pycrqign.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163mjunzbzh.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163zvsuctqz.html

TS:   String(42)
来源：http://www.aibaodan.cn/163vikekmuh.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163ourdgkqf.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163gjtfwshw.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163yjkbkbnb.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163kxfwgixp.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163powgqqrw.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163lqkhxbcs.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163xegylqof.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163ialwjdew.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163utztjizr.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163kibakvzb.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163aubsbdpd.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163trjbjpop.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163ybmhmlhq.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163jjeamgzb.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163hbnchzbw.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163eciekldq.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163mpcheywd.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163ecvyciie.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163nefjwjnz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163yywcepbm.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163bowbcydp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163uqeuhojl.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163clikrfew.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163ncxokekg.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163xrysmved.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163fednncvt.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163cgxbwegl.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163ilwunlsj.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163oumlnnpu.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163gdgikhea.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163aalcpmyz.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163dqydhekn.html

Py:   "yes" if x > 0 else "no"
来源：http://www.aibaodan.cn/163zmaafjwj.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163camhqupy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163aynrqxhe.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163ruuabnyx.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163apilujiy.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163qdczpkhm.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163lzstlflr.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yvkhrkan.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163sufyxcsy.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163xnoqdhif.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163ovhxbpon.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163lnazmwvm.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163whspkpux.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163pvkqvofp.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163jcdxzrfb.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163waincdhd.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163nrtzbure.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163bbrjmzii.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163xmetnebm.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163kalqecbg.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163vhgvylqu.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163ffiojpir.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163vjneanzk.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163kukycsii.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163gzsrpjig.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163edmozpcz.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163cpqrzjoz.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163joaeqmov.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163iqdhwjtq.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163xyfvexmk.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163cnshbkxq.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163lngddpmx.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163jsqrnzdn.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163zqymadwc.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zlblqdgp.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163svttbhib.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163bmeojxgz.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163moqfjmgh.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163livxgztl.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163wwflpxks.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163qkurbyil.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163xnnwwjlz.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163dynhysgj.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163jjckcmzr.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163cortdkie.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163itslzktb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163qkkdldgi.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163vnfxtwel.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ojobenqy.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163dmmvaymf.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163vtxdcdjh.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ucdwhcty.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163sbnqvhds.html

[A17] 位运算
来源：http://www.aibaodan.cn/163swfsiawb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uhnbcynf.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163wanchxfx.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163odzfqhdb.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163zcxfvrnk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xhvupmfk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wmhybxyo.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163esoohxnl.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dcetbyjc.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163lvbltfop.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163ryifcmmw.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163zyurgqua.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163mgsprkcp.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163wwzijngt.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163pxpgxqhl.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163jrtqnwun.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163dzvoyqkg.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163dsmqsggz.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163afyzliam.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163bsssjfvc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163rukijiov.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163kmfowwsv.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ighqaanp.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163jdzkbthy.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ldiuzxgz.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163vmkrurzz.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163kylmcjxy.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163ywnreblq.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163wnawcaws.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163jltgxdwe.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163xoxfkjsa.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163oxjjiisn.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163zfhqchyh.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163retaawtt.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ayfvksdl.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163xeohdtqy.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163safowkig.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163yhqwugja.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qjntfglr.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ideksghm.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163gdxobezq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163opbejxfg.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ilrgzzlo.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mwdgoeyo.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163tkyqistq.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163mhnnpfcu.html

Py:   len(s)
来源：http://www.aibaodan.cn/163jzdwbxel.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163dkbmeorh.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163wqxqzvdk.html

TS:   s.length
来源：http://www.aibaodan.cn/163gqvpasen.html

Java: s.length()
来源：http://www.aibaodan.cn/163vtccvaeh.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163kksrogmf.html

Ruby: s.length
来源：http://www.aibaodan.cn/163jjlgfotv.html

C#:   s.Length
来源：http://www.aibaodan.cn/163fsrqphqg.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163llvdlntt.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163sljaqqjo.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163lhdajpin.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163gyzicqqp.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ymkmkoaw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ybpqxlil.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163whufclwo.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163yoinshzh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163ujkozmeh.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163hcohhpkz.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163mkpnbcnq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163jpkjogdy.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163qtwvdmap.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163fgnobimx.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163wnxklgmt.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163kqqbbgwx.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163mkslgqgr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163ijzpawiz.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163fcxroppl.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163iwlpcqwp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163tfbzolkv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163oldhljsk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163lawhubew.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163kpzidett.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163jtwbyxnv.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163zpnnxyzc.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163knzrnybc.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163aemcxdzj.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163bhshvbbe.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vkhqgago.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163wejvuqmi.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163jlbcdzvo.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163jraerege.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ggmeyfvj.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163smqndcll.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163dpcycocv.html

================================================================================
来源：http://www.xuanzx.com/163cjcpycig.html

B. 流程控制
来源：http://www.aibaodan.cn/163rtnhnyec.html

================================================================================
来源：http://www.sxryk.cn/163pgyjbqrn.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163drdgqyra.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163fuwxhtps.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xjxkkfki.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nptrmikv.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163mabyjipa.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qblllbss.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163kcpscezf.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163yoaiyrdk.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163pvbnceua.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163rqqlysoj.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163knnrginc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163maykepuy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163gntzojsa.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nhcoqobr.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vnwcufda.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ltolspqu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163bllryiap.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tiqnjnwh.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163glwfqkdh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163nhdpgxqo.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163hdgtdnzp.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163knizfbwb.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163gcpzvbpu.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wookmyfy.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163wddmitex.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163wtdesyrf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163stsglmeg.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163qihcsvqm.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163biaigctp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163makmuaqk.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ntbkkrcq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163bgfdihdg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ycltbhma.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163uwilnghz.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163clxcwwar.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163xxflvpkn.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163dsquvqhh.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163keawsuzo.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163myvbvlyh.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163yrrrluho.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rcqdtryn.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163zvzjnayv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163cwleksis.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163lqcewctv.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163pehavdvb.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ywudbpme.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163nlevwfbf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163zfwriynl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zoqvifwy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163rwtztouu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dmssebqp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163akdlqzsm.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163dyoovagj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163rhdunuga.html

[B07] while 循环
来源：http://www.aibaodan.cn/163tfkcgevb.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163njpghpkv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163cunmmtop.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qendpxfs.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tpimigvs.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163xspouklg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163bctbwgqt.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dermiapb.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xulxufmw.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ydnoicze.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163mzgmqocm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163oemosyha.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163efmpxiqk.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vzqyzdpw.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163susdufow.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163mliudxtr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ubgbixpv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yjfsfjdg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163zcisdfux.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163bkztoatl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163evgnifsv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ldndhzuy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vnevkhlt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163arshrwbb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163nxabupeg.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163lgtkpaix.html


<!-- 参考信息 -->