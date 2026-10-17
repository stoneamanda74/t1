外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.sxryk.cn/163kszrvxzp.html

[A03] 常量定义
来源：http://www.xuanzx.com/163tpjqrdpj.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163vpejpebw.html

PHP:  const PI = 3.14159;
来源：http://www.aibaodan.cn/163nhgbtaxh.html

JS:   const PI = 3.14159;
来源：http://www.aibaodan.cn/163qjtamskg.html

TS:   const PI: number = 3.14159;
来源：http://www.xuanzx.com/163bmoodgdz.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163nmpjahdo.html

Go:   const PI = 3.14159
来源：http://www.aibaodan.cn/163lszltqob.html

Ruby: PI = 3.14159
来源：http://www.sxryk.cn/163gqhioidl.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163voejhrrx.html

[A04] 判断变量类型
来源：http://www.xuanzx.com/163erjarejb.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163itesijfs.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.xuanzx.com/163lvhesgvp.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.aibaodan.cn/163opkxfaoh.html

TS:   typeof x; x instanceof Date
来源：http://www.aibaodan.cn/163topbnjbg.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.aibaodan.cn/163uxmcrrcl.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.aibaodan.cn/163wogulqpo.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163qgpzpged.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163hipdyvqi.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163ygwfpjel.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163ggnudjxk.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.aibaodan.cn/163xueaexju.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.aibaodan.cn/163fshbdbnt.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163knygnskz.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163ndcqgdiw.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163izjmvelx.html

Ruby: 7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163ctctppct.html

C#:   7 / 2; 7 % 2
来源：http://www.aibaodan.cn/163wewwcxga.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163jyqrisxs.html

Py:   int("42"); float("3.14")
来源：http://www.sxryk.cn/163jtyjdnsc.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.xuanzx.com/163tdvyhugq.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163ithwnvuk.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163cungrvfa.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163qtxgqmvh.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163oafmoofx.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.aibaodan.cn/163ijrzyzag.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163tvbuavep.html

[A07] 数字转字符串
来源：http://www.aibaodan.cn/163bhwlcxpj.html

Py:   str(42)
来源：http://www.xuanzx.com/163sfuzecup.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163augarzwb.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163hplktdtt.html

TS:   String(42)
来源：http://www.xuanzx.com/163dfxqxqlk.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163akhrgdum.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163fmnkzaqp.html

Ruby: 42.to_s
来源：http://www.aibaodan.cn/163ovndbjpg.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163yepnpcbu.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163qydcchlj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163rlqerasl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163fhwiuklv.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163lgzzvjrw.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163xjadqwun.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.sxryk.cn/163gfbtxdlp.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.xuanzx.com/163ixqybscq.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.sxryk.cn/163mtndpryz.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163xtlsfjyb.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163dfguvztt.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163trkrxxgd.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163zykjvnhf.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.aibaodan.cn/163ejtxmtvu.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163wfqfbafd.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163gkhovqjz.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163srzsawcx.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163ycpakove.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163xxtfjpzb.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163ulhyjhjc.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163spzxcakl.html

PHP:  random_int(1, 100);
来源：http://www.aibaodan.cn/163lycrbqzp.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163oudceoid.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163hjwpgjbv.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163oypmaaig.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163buulnagl.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163jfwshgpa.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163acbmsntc.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163shixsysx.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163vjmoroxv.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163batgwrxq.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ztolkths.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163aoynqebm.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163qouslahi.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163pjfcfxad.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163bfwafthl.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163phjlcigc.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163jnosmpuj.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163kqfvvtks.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163advesbyg.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163mxhvpnep.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163cuesnfjn.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163eghsrqht.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163mmwpkwkh.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163flwxfdtf.html

C#:   $"Hello, {name}!"
来源：http://www.xuanzx.com/163uilazzkl.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163dfzpally.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163goriznon.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163civvecop.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163puoldagm.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nrriafbo.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163giewbpna.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163zookkskf.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163htsdhnra.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163lmdalwxu.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163vqqdpfbg.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163kmjxgmdj.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163skhgymcp.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163kfhkleca.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163crpfpajd.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163rmoisbzx.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163alylwztt.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163pjtqvofj.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lnfqnljv.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163iheasyxl.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163gwccilut.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163wbistckk.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163yauqgmvy.html

TS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163mfkaodcv.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163ylttltfy.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163vtdxogmy.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163mnsodldw.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163uqxdjeih.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163yjooxwjx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163ihhklpzm.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163euqitxaz.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163rtvbwclj.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163ytkcpyua.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163xwmiassr.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163qzwogdft.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163eaekatuy.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163obltrvlg.html

[A17] 位运算
来源：http://www.aibaodan.cn/163icvmfxga.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163fdrkgobu.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163ylmcyirf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eelwyzvs.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163goasqlcw.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163wmpzmrhq.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163baxqswbk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kfacngpt.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eencyooq.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163dqmvdqke.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163zdkmmgqh.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163pfqrqwct.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163gpfoavoc.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163oacmpkqa.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163nfmapmxi.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163bpverxsl.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163hnfkomlg.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163njysrxub.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163yejdouwq.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163qtutkrxt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163jnsbxalu.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163qyabtozd.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163rvcixynl.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163kzpgxeme.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163rhigtczr.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163tuuaascg.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163yhjcznqc.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163qtgenqoc.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163dmxftfqx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163koofkmhw.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163tlflwpbj.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163itvixllm.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163ujevfomw.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163nbewqsho.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163ipasvtxd.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163arajdumj.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163imfvhnyd.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163jqlebelc.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gzbmwdah.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163smgzijle.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163jvknrujq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bpckymvn.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uztrbmch.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nhwpakqz.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163acqsxbhe.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163ludqcwlc.html

Py:   len(s)
来源：http://www.aibaodan.cn/163mfkgtwun.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163oqeuwxmp.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163tcnpbzcq.html

TS:   s.length
来源：http://www.sxryk.cn/163avkhebkd.html

Java: s.length()
来源：http://www.aibaodan.cn/163dpkugmqq.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163okzbjqft.html

Ruby: s.length
来源：http://www.aibaodan.cn/163zwqlhwuv.html

C#:   s.Length
来源：http://www.aibaodan.cn/163jvhgbwmz.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163wbxyiogd.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163qwogdkjg.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163gfdfpnnm.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ujbomaul.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163hboagefk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163sipriirk.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163eowbirss.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163jsrhgdcu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163skfpawkb.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163fudxvqmb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163tekcjtsn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163gdpuclxh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163ryuqqdvw.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dlknnruw.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163jawvzwuh.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163wawrysmv.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163dwudhjur.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163svbaaokp.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163lrfmlntg.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pqfmdckc.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163xtvvbizk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163ikzociac.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163nlxjbfkx.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163hyjpyesc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163keqabjdc.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163saksljje.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163iamubdfr.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163hawcqjxp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163rrxkednk.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163onyryvdn.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163qlbbmenk.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163pbxekbea.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163hobinysr.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163grafmhwm.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163oenjicbe.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163opuoymog.html

================================================================================
来源：http://www.xuanzx.com/163lwmqmjus.html

B. 流程控制
来源：http://www.sxryk.cn/163crjnsitq.html

================================================================================
来源：http://www.xuanzx.com/163gyxxilao.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163yjhffdna.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163ryrajpbx.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163upfhjxin.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163omgvacut.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163slaebuyq.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163prpouobs.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163tiligqze.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163blhtyphb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ifwopcna.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ugeeotbl.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163nzrlayfg.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163zalwfoib.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zrsdwryx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163fetbasrd.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163wkcsknff.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qnjgwldm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163prnijmfb.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163dviazfns.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163mftcqxva.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163qtsndnyd.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163dckdwdkd.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163vogmutiz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163uoxwnhck.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163rzccfiyn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163tmulvqla.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163luajfomf.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163rpxsbvzn.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163uhjjtyia.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163gipgvpsk.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163sllagkiz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163zijfwetm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163crwtjwzc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163gnxocwwr.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163kaqfxcgh.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ktzxsowr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163egvsodco.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163smesdynl.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163mgcpjmob.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163dwbsncfs.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xwjmuumi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163prjeflhp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163fapeewyf.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163agcfpwzv.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hjsgczdd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163vryldjzq.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ukbiqmbj.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163hvdxveee.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163unxwgbfz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163yohnbmlk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hoaamjmf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163eblvvkry.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163hrvnfijt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ietuwvhy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ywevxunv.html

[B07] while 循环
来源：http://www.sxryk.cn/163rrivyfih.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163xbaobilk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163hhcfoyxc.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cgwqjrkp.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pogobpnl.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kmcezmcr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ifvyekpt.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163hdcqnfbi.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vgrcmoax.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163usimkorm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163tddfdqfa.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163xwgestvx.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mrmtfhcu.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sztafmqk.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ppqhudng.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163cgbemuak.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163emppnpay.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nndkukii.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163qznlhfjn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xhklgqxh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163nzrmzpxv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lrksrhio.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fkddmcnu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wlprtvxi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163idxfvkzx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163gtfrupzk.html


<!-- 参考信息 -->