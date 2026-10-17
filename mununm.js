外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163irluggur.html

[A03] 常量定义
来源：http://www.xuanzx.com/163puclqabe.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163lfcaqfet.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163uljgpuzb.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163acacxxtg.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163fqhxdaud.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163yzbhwbtc.html

Go:   const PI = 3.14159
来源：http://www.xuanzx.com/163jidbmvfi.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163ycltnvwu.html

C#:   const double PI = 3.14159;
来源：http://www.sxryk.cn/163mcxvkaca.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163bfgdadwd.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163fyarzjhk.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163acjwhpfs.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163tbnyebar.html

TS:   typeof x; x instanceof Date
来源：http://www.sxryk.cn/163wihaadzz.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163qksuaccz.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163djndlxpv.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163qwsyrpeg.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163pjmsucvb.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163fkmqfgpy.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163wgdyzgcn.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163utyzabvc.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163lruzjmee.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163vyibiumk.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163mdnymnqu.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163dorzvdfl.html

Ruby: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163fjhcjwnn.html

C#:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163ezzxgccq.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163hdorcsnm.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163veaqdyve.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163sljsxepg.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163egiulooj.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163manpdzxx.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.sxryk.cn/163tzowshhz.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163jlzrhndv.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163ogepiiie.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163kbhlumhd.html

[A07] 数字转字符串
来源：http://www.xuanzx.com/163odipxqvn.html

Py:   str(42)
来源：http://www.xuanzx.com/163tyzuyouf.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163myomcfug.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163cnazgdiz.html

TS:   String(42)
来源：http://www.sxryk.cn/163kqxxxpjd.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163xumbiaur.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163lgknqwuu.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163dcduccfv.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163rlmborfl.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163yvxaowdi.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163wxhmpsuz.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163nqfhbgsn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163ejtetivc.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163pooslofz.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163zsizksdk.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163krrohqzt.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163bauonfta.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163gmslzodn.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163ydamzqpy.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ocmuyegt.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163kxroflho.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163kavynnzb.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ygbqrgap.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163rlucnpcd.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163rqvzrjxy.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163xvtaikjp.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163fsvbemae.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163iiretqvb.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163cqbxoehq.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163xeyeqiui.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ooudqjbj.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163xhbzooah.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163qcfsulmc.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163dggxilbc.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163cutbsgeh.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163uzcgutpj.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jdlzeygv.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163azvksvis.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jxnnowtj.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ebiuwwlk.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mktlqkiu.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163sjqxslru.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163bvpljtun.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163hojayuzs.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163fwwftvud.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163kdyewpiw.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163qytzigxj.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163zdewmktu.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163ntjdoxgg.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163ovawdcwb.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163vknwrzrw.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163qusukmes.html

Ruby: "Hello, #{name}!"
来源：http://www.xuanzx.com/163aadvrjnd.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163qrwfqrho.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163msjzojnq.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163linjlipp.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163gbgxntud.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rkqoxsll.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163jjfiplrz.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163lrnzscbb.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xbblvstb.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163khamybgc.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163sumfjrpt.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163eyszgoul.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163hfwsuusm.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wkpgnrly.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163qvfplqsz.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163vgzrztfc.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163gmhdqqiw.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163sbengogy.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163fomaaxxw.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lbzglrbf.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163xsfrncue.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163jxwjnoeo.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163sqscadvl.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tdoykexk.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163tchvhmfo.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163vegqhnmn.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163vfcbxsly.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163uvcgvpai.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163jxgkmpgn.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163fdyplkdb.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163rhibfbdj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163jlxqxjrc.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163zvgkrmys.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163nawwiiiu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163ikzzquqx.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163tvzjjyvr.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163sugtftiy.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163waxepdad.html

[A17] 位运算
来源：http://www.xuanzx.com/163ymcvjfof.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kyqmxgle.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163vzzcyldy.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163accbdmcv.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163gzapchfm.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163jsjqsjfy.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nxxoumxj.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dygmiveg.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163oqtgkhsb.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163iciqtdav.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163oogyqcaj.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163bzxufccz.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163svucuyxy.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163mtokciqk.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163adphdpif.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163wmziohbt.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163tmvawlae.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163bzolegrw.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163xvfrqans.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163sbasrvth.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163xizaykmt.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163bmkxkanw.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ywttjtle.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163azsrwjxy.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163ukbqxgxq.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163ixzsflef.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163wdwpsabn.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163xineshgz.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163ezqrqnbt.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163qaladjue.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163ecpywpif.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ccsrwtar.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163bslmnvnd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163znjwgphu.html

Ruby: gets.chomp
来源：http://www.sxryk.cn/163lgvrqjpg.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163ngwrafrc.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163kesughpn.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163bokreldz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163nyfafsfq.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163masrmbwr.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163oszndidk.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163fawsqfbz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163tpxcczkl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163tgyhflyv.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163togmeidb.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163eplcnidt.html

Py:   len(s)
来源：http://www.sxryk.cn/163palplhhg.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163codvgbde.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163lllekmiw.html

TS:   s.length
来源：http://www.xuanzx.com/163pmhlxvze.html

Java: s.length()
来源：http://www.sxryk.cn/163zfcmdwzo.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163onjolilr.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ziqzctpj.html

C#:   s.Length
来源：http://www.aibaodan.cn/163ikgxxgek.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163luycelwm.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163wsnvxypu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163merovifa.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163yupoejoy.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163oiynmhqq.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163fgppguob.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163xitcgryc.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163ffqatsjl.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163ejoluqee.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163tlhphbda.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163rpnjdeib.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163qdyunjuo.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163kxdqqfwd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163lyjygsgg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163zcwoumwg.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ucbstxnh.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163nhoctcgr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163frymcfxa.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163ffxprdrl.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wonplkmc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163qhdxlmau.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lbaekjtc.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ynddohty.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163dflcrirv.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163xabxtvkm.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163pxyvtjej.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163kumaukbn.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163dywyheqn.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163xzfgkmby.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163sdjdhppp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ygoclark.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163eksagors.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163rssufkms.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163iyyhwssa.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163zutadrrq.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163fqqjtuox.html

================================================================================
来源：http://www.aibaodan.cn/163uxsoeoql.html

B. 流程控制
来源：http://www.sxryk.cn/163lidykdve.html

================================================================================
来源：http://www.aibaodan.cn/163ftbvjbmb.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163typoshke.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163rrepfsls.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163xcmrrwgj.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163uoqxejle.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163bffbepsa.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163murnigrp.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163dkhjknnr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163vyztjcnr.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ljxxryyq.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ksisrojw.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163wgbnknbg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163gtgezamd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ecmyleqb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lfqicjlt.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pxzgtydk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163tjjbrjyz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163fllnourk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ypqpsuvj.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163jzqytcaa.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163dekgggxe.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163sxicbfwl.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163kvzeiipw.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163gcjyvyji.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163ltxnsbvh.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163yosmbrcw.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163rxbnmibs.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163cfeyvthk.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163axifdhtv.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163shsophgb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163mhkanuxs.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163idhzuycm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wmndqbcu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163jhxzpsjy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163xpwwtczg.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163sxpffcbv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163nvkphzlc.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163kqtqiepe.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163celwtrwb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163miibtuty.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wngodorr.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163apetwgxq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163oacdcfld.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163iupdgkch.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163wrhhkgny.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163xjdfulgk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163zxsoxvqk.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gmxfrmji.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rckpbidb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fvkgzwki.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163otjrdvzs.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zzauhgie.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163lalkwfqc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163fkpnfnkw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163elbzxise.html

[B07] while 循环
来源：http://www.xuanzx.com/163irgvtnra.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163srcycysm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163cldcevlx.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gwkhnryn.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163nxxdlkim.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fnrxqlyc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163hqlwencx.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163vhttqbqn.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163whzonqbl.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163totydpzv.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163hmrsqxxb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163wexfsaze.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nnouzpds.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ilhlfcjv.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163uqazuiia.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163zrhipmrj.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lzhsskmz.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ikqlxwgs.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163padvntqj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163iuesdrge.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163odydtfpq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mxmtbwzy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xrprqyny.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kgdnlvvl.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163jburdbok.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163glsvpzsx.html


<!-- 参考信息 -->