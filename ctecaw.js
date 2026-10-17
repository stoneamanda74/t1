外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.aibaodan.cn/163hmgxdfvp.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.aibaodan.cn/163jmvezuhd.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163lqaeuzlj.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.sxryk.cn/163ybdvxgbi.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.sxryk.cn/163xxennssj.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163prbuqtiw.html

Go:   name := "Alex"; age := 20
来源：http://www.xuanzx.com/163zcltwxmc.html

Ruby: name = "Alex"; age = 20
来源：http://www.sxryk.cn/163ikirpvev.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163xnresfwj.html

[A03] 常量定义
来源：http://www.xuanzx.com/163hbefcaob.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163kmmsbgns.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163fqlhxkqb.html

JS:   const PI = 3.14159;
来源：http://www.sxryk.cn/163lbacwsuw.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163ivdwfhmo.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163dfxsyktc.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163hkoqavue.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163htwlyezr.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163tbnshbsh.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163yqrmundc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163fbnolrjm.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163rytkengf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163bzcfunsr.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163ssekqdvq.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163hcjkvmvi.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.xuanzx.com/163bsvnjefg.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.aibaodan.cn/163kerbyhqv.html

C#:   x.GetType().Name; x is int
来源：http://www.aibaodan.cn/163ulsvjfic.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163hkpoqyga.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163rrdyldze.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163hnlkukaw.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163afmytrtn.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163yoiuewiy.html

Java: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163avlfeckx.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163thltahtn.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163slwsbwrs.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163kkbekxlq.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163dpplcion.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163mvnettyk.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.aibaodan.cn/163zmiyxhfw.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.aibaodan.cn/163codtgtmg.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163sqbjplox.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163wnlsuzod.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.aibaodan.cn/163pfyhvcor.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163cefoqwag.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163gbhrcokz.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163whzuwmle.html

Py:   str(42)
来源：http://www.xuanzx.com/163ekepdiiq.html

PHP:  (string) 42; strval(42)
来源：http://www.aibaodan.cn/163drhssyya.html

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163mvrzebxu.html

TS:   String(42)
来源：http://www.sxryk.cn/163bxcgluiu.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163ckferzhi.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163xjgvxyii.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163mnljaaog.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163apipujas.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163soyfmaiy.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163dribdhnl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163bujejvkq.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163xjttqypa.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163puspucid.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163bkgsiigf.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163rvlxcdet.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163qybkjduj.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.xuanzx.com/163hnrhahbb.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163epkrypns.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163tinrqboy.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163ulefpsit.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163xqyluhwi.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163popgncdj.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163zadkaxvh.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163wporksdo.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163vxvsesey.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163kfunfbqm.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163iuijmpyx.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163xabikjwi.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163cciwrhmk.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163ymxgdnjg.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163wcgadfzg.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163xjxlgozq.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163chrhdpgn.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163pmovwagd.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163jywmaabh.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jspfxzra.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163xzmyklzf.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cyabtgvy.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163mqdbbtuh.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vydjrojz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163juqbjwot.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.xuanzx.com/163ueynudwj.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jdupkzwh.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163alreoldf.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163nxasduba.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163lgmrwrij.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163ginaqxjk.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163upmbrrbl.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163osljstph.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163qvjmipck.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163bbjtqfvy.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163vpsfrwdg.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163kublwvee.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163vduumdqc.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163plhcldac.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163sotvcgdl.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163csnhtwky.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163kkuyvazo.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163bqqhnmmy.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tpmpojwf.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163agorzeoh.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163rupjpwhg.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163khajvaty.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163tuqtursl.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ferhgsua.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163rboeabpk.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163axpelupx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ybxdpihc.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163vwuywfrk.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163twygynzv.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163qrtoubxa.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163ldowuesz.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163grzpxhsu.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163qtvdgskv.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163osvoutjn.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163sdfsjfcm.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163sjqviesf.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163mxjcdagg.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163dmatiwpj.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163ltszxrwv.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163qyjnpdiz.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163dorosykb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163uezykdtx.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163dbgojmqt.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163dxvmdctt.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163jclenupq.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163fxbdynlb.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163zkjpggye.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163ttnrxiaq.html

[A17] 位运算
来源：http://www.xuanzx.com/163zcpzfzoh.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ixgjfsox.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163hsjtskph.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163nvwbfedy.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ocujvisf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163murojbob.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gqfdbrbc.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ropuspri.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163lbqmnosf.html

[A18] 字符与 ASCII 码互转
来源：http://www.xuanzx.com/163wtuzmrkl.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163pnkyfikm.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163vcsmhgug.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163iehalsif.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ikyeeohv.html

Java: (int) 'A'; (char) 65
来源：http://www.sxryk.cn/163kfjrkzmi.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163wigcslkn.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163fmbvocng.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163sjbgwzxt.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163lfovhyco.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163vihznfdc.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ktqeqjtv.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163oqvsgvqy.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163gnnsjnkt.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163lcqvshiq.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163rbgqjhao.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163qxseqnxl.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163fyrsvchr.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163auwphqmo.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163rkivudeg.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163vfhahedz.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163mlimvqil.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163xjekvdzt.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163lyrmeodc.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163dpobzswp.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163pjydzpcl.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163mwjfzoaf.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163rxesatxv.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163hpefcodt.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163excvpdjz.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163cqcdjgnr.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163oncngwcj.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163gpzrcxhq.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ikcvmgir.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163igcpgclq.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163alqskkid.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163hjfdnzwg.html

Py:   len(s)
来源：http://www.sxryk.cn/163nekmyiud.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163wqzytvap.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163yzpjzbkd.html

TS:   s.length
来源：http://www.xuanzx.com/163bvndxqyv.html

Java: s.length()
来源：http://www.sxryk.cn/163qgahuihd.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163bdrscnzb.html

Ruby: s.length
来源：http://www.xuanzx.com/163zixrxbgz.html

C#:   s.Length
来源：http://www.xuanzx.com/163bwsdbfiu.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163ybgcuzae.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163tdabdgck.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163oouavjpf.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hrfoxahm.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xrqzmuyx.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bkcyidpo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163lianzjkl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163hhsdklkz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163bpfnzsrr.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163kxscusvr.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163ukvtioxi.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163jwhsncji.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163zorcqbjy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163sippviyz.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163klofowqi.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163ylpympqc.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163mtpxxluw.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163kajarxwm.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163xickapum.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163appbvcit.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163lmtvqnal.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163gbbtyheh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163werxclhh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ngdhjepz.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163toppkdha.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163xtxpytbm.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163myizqbuo.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163icexotun.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163jdthjjqg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163mcgyvkzq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163lzjnfuwk.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163zrdmauuq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163vvzduxhz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163upxkxuyx.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163kdzgufzo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fumvzebl.html

================================================================================
来源：http://www.sxryk.cn/163buxeamla.html

B. 流程控制
来源：http://www.sxryk.cn/163fhaarhqm.html

================================================================================
来源：http://www.sxryk.cn/163ovvnjsok.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163gcjidbap.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163xqtgskgv.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163frfdacnr.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dnagjkkt.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163qwnsxwzb.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163laesvnxo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163tukmjibj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163gpfxleaa.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cuxalzxz.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163rsmgqqyu.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163zavifnmi.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163ndgwlyal.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hgqnbrpb.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163kdiakryx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tjptqfmh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163thuzkzzw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163grannygj.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hasbrjal.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163whhljflm.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163avnialwk.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163pkmxwmdj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163bpotbaxu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163kaoqmoyr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163jdykykxa.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163yfkrxhxz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ttyrkrav.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ojfggmwu.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163ebuoosol.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163dbxjsiar.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163vuwinxor.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163mbxdcpzl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163bxtmvnbo.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163rvyhtmrm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jamwwwaz.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ejpqfpzt.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163kkanpege.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163pihgalol.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163razfnafn.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163rcfqryum.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163atzjesvq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163bkfxvynh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163lgyukuos.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163nmutisdh.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163ndjjumjc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ajngfdjq.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163nqppxylp.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163innnweir.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163etgqrjmi.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zofsrhdv.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163sxxcnnat.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163cqnjzxwk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163fghcispg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163zxutfhzu.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163uslazvbd.html

[B07] while 循环
来源：http://www.sxryk.cn/163nyfjcqqr.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rnpkyqlb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163xwwxfals.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ogesresk.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eqqwtjpv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qelepzcm.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163hlorwpqf.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163livrcawm.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ohliddvg.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163wealpgni.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163jearqsdt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163lrpckxgw.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163oplzihqm.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163urdxigzx.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kanltjdg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163suwjgisq.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163fkyihwwu.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163yytyiaia.html


<!-- 参考信息 -->