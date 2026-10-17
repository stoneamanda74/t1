外链999!wailian999！

[A02] 变量声明与赋值
来源：http://www.xuanzx.com/163yfmhfewd.html

Py:   name = "Alex"; age = 20            # 动态类型，无需声明
来源：http://www.sxryk.cn/163sdcfczmm.html

PHP:  $name = "Alex"; $age = 20;
来源：http://www.aibaodan.cn/163uopxpdrg.html

JS:   let name = "Alex"; const age = 20;
来源：http://www.xuanzx.com/163tsqxenaz.html

TS:   let name: string = "Alex"; const age: number = 20;
来源：http://www.aibaodan.cn/163fvjijxku.html

Java: String name = "Alex"; int age = 20;
来源：http://www.aibaodan.cn/163scwlakmc.html

Go:   name := "Alex"; age := 20
来源：http://www.aibaodan.cn/163hrbgrmll.html

Ruby: name = "Alex"; age = 20
来源：http://www.xuanzx.com/163ydhyrkuy.html

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163fjrqjyzt.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163bhbggqfp.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.xuanzx.com/163ciyopvja.html

PHP:  const PI = 3.14159;
来源：http://www.xuanzx.com/163jilyocja.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163mjxarkfm.html

TS:   const PI: number = 3.14159;
来源：http://www.sxryk.cn/163gjcexnhh.html

Java: static final double PI = 3.14159;
来源：http://www.sxryk.cn/163unnrblxt.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163bjungxct.html

Ruby: PI = 3.14159
来源：http://www.xuanzx.com/163edrqwhbq.html

C#:   const double PI = 3.14159;
来源：http://www.xuanzx.com/163cgnyayzf.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163zediwwdw.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.aibaodan.cn/163veaprkcv.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163znkpxqzf.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163stezqgyj.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163epowkrwc.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.xuanzx.com/163fjfxfduj.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163mdnwhfdh.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.xuanzx.com/163zwcuasgp.html

C#:   x.GetType().Name; x is int
来源：http://www.xuanzx.com/163othfwoux.html

[A05] 整数除法与取模
来源：http://www.sxryk.cn/163njixoowu.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.aibaodan.cn/163rdzxgeon.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163ykeeowje.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.sxryk.cn/163hckpbhvj.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163dnjmmtie.html

Java: 7 / 2; 7 % 2
来源：http://www.sxryk.cn/163vxablkwk.html

Go:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163fposytfd.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nimrkbie.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163cvurqtbz.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163orejskpe.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163zuesuiby.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163tukhopzu.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163jkidaznl.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.sxryk.cn/163rialmsle.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163pohcpaaf.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163wmfnpjlh.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163ycsbufzz.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.aibaodan.cn/163adozqdnf.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163rjwcfgtw.html

Py:   str(42)
来源：http://www.aibaodan.cn/163ogbavcse.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163haimpiiu.html

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163abpiozlw.html

TS:   String(42)
来源：http://www.aibaodan.cn/163zdgyalnw.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163wqvsxpyr.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163sygvpdwd.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163dtbyvsdo.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163olosvxbn.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163lfvalftj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163zgxbyyqc.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163obuxxtft.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163iolmsqdj.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163fawfuyhc.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163pndduqax.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163bahifhiz.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163liqkvgzx.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163dwvhrovg.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163amernmif.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163ddvamrjn.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163vyfohasb.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163jmgaxxfy.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163otkimahb.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163moopfxvc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.aibaodan.cn/163akiqxhmn.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163oytzdfja.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.sxryk.cn/163euqykxqb.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163hgozpsfv.html

Py:   import random; random.randint(1, 100)
来源：http://www.aibaodan.cn/163chmmscpz.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163tpgecyee.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163pbqdpjuu.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163hlqclqvk.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163ceqvzybi.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.xuanzx.com/163kbsydwpm.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163ovnvfuvn.html

C#:   new Random().Next(1, 101)
来源：http://www.xuanzx.com/163givqicur.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163eogpnwhm.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163abvwexzz.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163pgnfowrm.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163cacpainu.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163agdyznlz.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163akquikzp.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163vuhbdxrs.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163brrntuby.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163spouwfiu.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163jdmxtxeh.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163iduddgsy.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163tdbllkqk.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163oiarljls.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163brpjdxbz.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163lfxlnbqd.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163xhsijlvo.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163kloyeywe.html

C#:   $"Hello, {name}!"
来源：http://www.sxryk.cn/163cpuzrfdo.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163onzurekh.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163mmoenxxb.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163odetneyp.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163ohowfhoa.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163hsxnfixw.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163mynponaz.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163rfflhgll.html

Ruby: "第一行\n第二行"
来源：http://www.xuanzx.com/163yvhuzeeo.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163nqdnibsn.html

[A14] 注释写法
来源：http://www.xuanzx.com/163vhvmrweo.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163joipzkzp.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163wixbkppc.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163peowqhtc.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163qjrovwne.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163yfglypcx.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163twvhqhop.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163afuaosls.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wnowsydo.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163ifdpczyf.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163bzluhlfm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163ebemqlaq.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163fovkccgv.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163ubrsfike.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163wvirizky.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163rozqacmq.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163yzhkeczk.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163htekidml.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163ppsvazmo.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ejswgddi.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163hizzyfqh.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163hfnczilb.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163zoikhknz.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163jzrimjbo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163cjhtobzn.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163fysgqrkq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163irltekjf.html

[A17] 位运算
来源：http://www.sxryk.cn/163usbyrooc.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163oqkkngrb.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163qudwcegi.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163seerkyjq.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163hhipmqhd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gxdbbmch.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wmwomsgi.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gqnpahfy.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163renwzomg.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163vaxaodno.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163mqkxzroz.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163lcyvoatq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163rqacrjad.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163ijipbnyt.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163gkkdrxoo.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163mmaydvnn.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163kjtrupvy.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163apgvcuaz.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163yexculge.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163zfdlpqqj.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163qhcbwbyg.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163qtrueyfc.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163lqtdszlk.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163icciifny.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163kldjlvuw.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163jlojleoo.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163elxayyjs.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163cdsqsbhu.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163rdxvqqyo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163doshubpq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163mzwcaosy.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ctoojcnu.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163qurqkuga.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163xfjkfbsh.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163zmbnbvuc.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163ueifoyiu.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163wzwgnvbs.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163dbownjyq.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163coguqiit.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163xyogpxad.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jznsecdg.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163zddumwip.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vurayfes.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163knsrphnv.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163xeqhikcz.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163hroumcbg.html

Py:   len(s)
来源：http://www.xuanzx.com/163ukichiba.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163zqntitpm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163fjtrhlal.html

TS:   s.length
来源：http://www.aibaodan.cn/163lemgkupx.html

Java: s.length()
来源：http://www.sxryk.cn/163kcxlsfqb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163iuwiluxa.html

Ruby: s.length
来源：http://www.aibaodan.cn/163edpydywk.html

C#:   s.Length
来源：http://www.aibaodan.cn/163rvuhmuvc.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163mlvrllbx.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163viptgvhm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163aiaerfqo.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163khrsqpqd.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xoglwxch.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163alnriyyt.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163yschnblh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163cfzyskow.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163pchlpmrw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163bwgnaice.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163bamcxwyp.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163vhqohtdp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xnzmamxn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163gusasmpp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163bxocsmva.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163pmfdcmdj.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ibsoxfzx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163ngjymoiu.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163rjtsvbxs.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163usmllmnx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163ndcjlgmt.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163gprjejoh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163nzmsstpi.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163zkznzxtq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163sksayepf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ykkusxal.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163latrnrws.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163kzczqqmc.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163fnnccsux.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163imaubome.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163tvkvobak.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163neuqxxkd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163bkjhuzud.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163gofjqubw.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163rrfyukwo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163imflmtzg.html

================================================================================
来源：http://www.aibaodan.cn/163xxlikqjd.html

B. 流程控制
来源：http://www.sxryk.cn/163vfmmgrzw.html

================================================================================
来源：http://www.xuanzx.com/163agtrbwdi.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163ihwabwaz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163jvlctqbz.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163oktpxwku.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163oflfeinf.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163aomkjyqe.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163apbthccx.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ztvfernd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163drpmkwvy.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163osrywbqr.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163sdpjgjaf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163numdqakj.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163jbxthvrv.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vaebodwm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163tptyuwxd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163oslznepb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163kacbgkxz.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ucqjissc.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163jgmmbcac.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163dtjbgoqp.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163duqyebhj.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163uprxuocw.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163asffgnsg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163konsmbpc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163pdayuscm.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163jtfkbnpv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163jspmyyrw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163eulvlqmd.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163wzrplzia.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163fdnucrcl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163izfewgkl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163sphxcqlg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163avkitwdm.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163tiecrdum.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163lxybjeop.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163kwxoqbfx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163ezztwady.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163esukhzyf.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163vgncuzpp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163acqfrlzf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163duaxzfyl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jiombika.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ktxjjtdh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163zsajnlca.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163bdrwwzkf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163itbcwzxe.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163lmpqlnox.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ficdnoeo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163hhxthywn.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163yidqfuox.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nqmijbdg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163oxqglxfe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163kwazmqci.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zlougihb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163inuauvnz.html

[B07] while 循环
来源：http://www.aibaodan.cn/163brqnebhs.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163yswvmaxl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163keojsmll.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bkudwquc.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163veaeenmr.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vaonxbqx.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163zlrgjofz.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163hhpnwflm.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rotxakxy.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163tedyyolw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ynrxjmic.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163lmcyyags.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jbdskxwt.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ylpvxgkn.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ytxtzqxj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163hgrsrlna.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ymgyyxpp.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163smfhqodu.html


<!-- 参考信息 -->