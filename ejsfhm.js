外链999!wailian999！

C#:   string name = "Alex"; int age = 20;
来源：http://www.xuanzx.com/163wmqukjdp.html

[A03] 常量定义
来源：http://www.aibaodan.cn/163ginxjmeo.html

Py:   PI = 3.14159                       # 约定全大写，语言不强制
来源：http://www.aibaodan.cn/163gdmmzggm.html

PHP:  const PI = 3.14159;
来源：http://www.sxryk.cn/163cwatfncp.html

JS:   const PI = 3.14159;
来源：http://www.xuanzx.com/163czsmkyye.html

TS:   const PI: number = 3.14159;
来源：http://www.aibaodan.cn/163pujjthrw.html

Java: static final double PI = 3.14159;
来源：http://www.xuanzx.com/163elfblbuz.html

Go:   const PI = 3.14159
来源：http://www.sxryk.cn/163qxraifat.html

Ruby: PI = 3.14159
来源：http://www.aibaodan.cn/163ovhzcfei.html

C#:   const double PI = 3.14159;
来源：http://www.aibaodan.cn/163dwhcstsn.html

[A04] 判断变量类型
来源：http://www.aibaodan.cn/163vspjpmqc.html

Py:   type(x).__name__; isinstance(x, int)
来源：http://www.sxryk.cn/163momavwbs.html

PHP:  gettype($x); is_int($x); is_string($x)
来源：http://www.sxryk.cn/163kvjlbmmc.html

JS:   typeof x; Array.isArray(x); x instanceof Date
来源：http://www.xuanzx.com/163jtfrqtka.html

TS:   typeof x; x instanceof Date
来源：http://www.xuanzx.com/163kjzlsjqi.html

Java: x.getClass().getSimpleName(); x instanceof String
来源：http://www.sxryk.cn/163pjkdqlle.html

Go:   reflect.TypeOf(x).Name()
来源：http://www.sxryk.cn/163erruavkm.html

Ruby: x.class; x.is_a?(Integer)
来源：http://www.sxryk.cn/163twwyursz.html

C#:   x.GetType().Name; x is int
来源：http://www.sxryk.cn/163ccayadiv.html

[A05] 整数除法与取模
来源：http://www.xuanzx.com/163ckwpygmk.html

Py:   7 // 2   # 3        7 % 2   # 1
来源：http://www.sxryk.cn/163bemqwiqj.html

PHP:  intdiv(7, 2); 7 % 2
来源：http://www.sxryk.cn/163uyycyphg.html

JS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163uopilwgi.html

TS:   Math.trunc(7 / 2); 7 % 2
来源：http://www.xuanzx.com/163gjtjzwjm.html

Java: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163nrctkxif.html

Go:   7 / 2; 7 % 2
来源：http://www.sxryk.cn/163szspcijc.html

Ruby: 7 / 2; 7 % 2
来源：http://www.xuanzx.com/163drtflicr.html

C#:   7 / 2; 7 % 2
来源：http://www.xuanzx.com/163lofwwfra.html

[A06] 字符串转数字
来源：http://www.aibaodan.cn/163gqwazvhw.html

Py:   int("42"); float("3.14")
来源：http://www.xuanzx.com/163wkiioide.html

PHP:  (int) "42"; (float) "3.14"; intval("42")
来源：http://www.sxryk.cn/163pajhwxma.html

JS:   parseInt("42", 10); parseFloat("3.14"); Number("42")
来源：http://www.xuanzx.com/163dymyjukp.html

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163xbgftrje.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.aibaodan.cn/163zfcgkovl.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.xuanzx.com/163zknwhvhp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.xuanzx.com/163zrlrahcp.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.xuanzx.com/163usanpers.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163hmzdxtbi.html

Py:   str(42)
来源：http://www.xuanzx.com/163kofcytve.html

PHP:  (string) 42; strval(42)
来源：http://www.xuanzx.com/163nwyqoknq.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163lefeekzn.html

TS:   String(42)
来源：http://www.aibaodan.cn/163pwuwtwkl.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.aibaodan.cn/163xzwksqpa.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163guqbvjgb.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163xdmpuary.html

C#:   42.ToString()
来源：http://www.aibaodan.cn/163nsqgwkci.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163diehglpg.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163cksjdudt.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163unpdvwvp.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163pexiweqb.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.aibaodan.cn/163vysntadc.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163eikdphvc.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163poenddnh.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163vpyusfdw.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163wnhzzqoj.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163disffmcf.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163zbuqojjb.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163rfracxgn.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163ymetbbez.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163mlxpvmhg.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163ucgnyofe.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163lixcjusa.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163fixpijht.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163xvynyzms.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163aatztynp.html

Py:   import random; random.randint(1, 100)
来源：http://www.xuanzx.com/163reebqlwk.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163hevpnnsn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163wmsvlqkq.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163xceytzlx.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163sqvnlatg.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163xhilefuk.html

Ruby: rand(1..100)
来源：http://www.sxryk.cn/163udojogea.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163gxxfxzhz.html

[A11] 条件表达式（三元）
来源：http://www.sxryk.cn/163elaveimp.html

Py:   "yes" if x > 0 else "no"
来源：http://www.xuanzx.com/163nnfqjfhn.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163gcsnnkvk.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163gsukxhrh.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163znxfyhuv.html

Java: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163kdhpqgnn.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163xhveaflk.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yufjqxcs.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163uqoimfah.html

[A12] 字符串插值 / 格式化
来源：http://www.aibaodan.cn/163guigkxgf.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.sxryk.cn/163gmcgmapx.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163uvyivywb.html

JS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163jhzqyjze.html

TS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163xvcsubki.html

Java: "Hello, %s!".formatted(name)
来源：http://www.xuanzx.com/163iacmhtlz.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.aibaodan.cn/163khjztlss.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163yowzleft.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163ncsmbdmj.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.sxryk.cn/163tubthcvh.html

Py:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163tmhzbkeh.html

PHP:  "第一行\n第二行"
来源：http://www.xuanzx.com/163cirlyojd.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163lgbjmhpu.html

TS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163xwihrfpe.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ymgtqsfr.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163aninwhat.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163moenjbum.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163tstewhkg.html

[A14] 注释写法
来源：http://www.xuanzx.com/163uujqpbmc.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163cpprnyik.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.xuanzx.com/163mcelihzs.html

JS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163wvuejzjn.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163kecycfjj.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ctziwmlt.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lxilhraa.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163gshjgjrd.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163pxhflnfs.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163xrqikvzb.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163gklctaap.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163pixokigd.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163dvjgvjmy.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163dxrwxnlh.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163fmxgmkbl.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163wlictxck.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163vxpbdnjo.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163cmwtqqwj.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163noevtfmp.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163elvjmsmq.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163mmuhhdsm.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163pdtatoiy.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163dlhxwggh.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163dtzlljic.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ertxioyu.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163innnrzsf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163flxdlizs.html

[A17] 位运算
来源：http://www.aibaodan.cn/163tqshgqwn.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pnnghbrv.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163svjegkcz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163zepzaijs.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.xuanzx.com/163gtoxwmai.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163emphuvxk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gwhjigmk.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163thvhcghr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cxagdhmy.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163deckyqsr.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163ofgxpdtp.html

PHP:  ord("A"); chr(65)
来源：http://www.xuanzx.com/163jubsfdlm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163yoojuxnr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zijkoyhd.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163hwdbwrxs.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163xtkddjsd.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163fryrqyqc.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163pmmeueku.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163huesmcxl.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163zhqxwgtr.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163ctgppmdw.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163zjcicccb.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163htpoagqu.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163imturcqb.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163vqtpdapz.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163smmmwxbt.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163pybwmqoq.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163mvxgmcjb.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163citcnycx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163cvxppnyr.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163aneayiih.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163fxxicsgd.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163xqxrftab.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163oaioaygb.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163qotpnplz.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163oyvuwkki.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163cydkvmnn.html

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163qhfnwedr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gfoycqze.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163dpvkfgug.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163gohegcfb.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163skkzuhcb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163wslkbupx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163sufxwyft.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ldirbgfa.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163tqwnnrsp.html

Py:   len(s)
来源：http://www.sxryk.cn/163znlvxzvx.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163rqgqrghs.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163ginkltnf.html

TS:   s.length
来源：http://www.xuanzx.com/163vvntvnga.html

Java: s.length()
来源：http://www.aibaodan.cn/163huckbmon.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163copgwudy.html

Ruby: s.length
来源：http://www.sxryk.cn/163tudqgicc.html

C#:   s.Length
来源：http://www.aibaodan.cn/163wtkqlsky.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163izhjhgtq.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163lneilbpv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163gxcjyjkv.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xfhetyeo.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163nkxfwnmn.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163aseejuuz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163zatwwqpl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163wnpvmyie.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163oelqzpdl.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163cypvszjm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163bvufcqaf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163vnvuqkcd.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163xezyuvpp.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163uruepnka.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163jslinjxl.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163nbpqhhhm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163cesglpfq.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163igrvumyg.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163vcmxulwv.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163twymvpbp.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163wcmlburr.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163jqjcemxy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163myqrraht.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163tpfzzery.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163umodxjls.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163iliuuvjl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163epeaumqs.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163vnixfasz.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163uyudroqv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163arsjwxiw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163zlzmaiwz.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163cvzlrska.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163jfppzhyh.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163uarjjcte.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163isivoxvm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163fithrbvq.html

================================================================================
来源：http://www.xuanzx.com/163zyvnclgf.html

B. 流程控制
来源：http://www.aibaodan.cn/163ezbuigbe.html

================================================================================
来源：http://www.xuanzx.com/163ewpvqwmy.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163shhznlzz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163clrlvzwq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163aujrbkdt.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163xxtylhss.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jkgpjiln.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163tvkzhpzg.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163mfucavkj.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163caxhbgjw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163poyrdnnb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163sflfqskp.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163sxlzrqmy.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163jyekswpt.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fzbmgzmw.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hmrenoro.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zjtttego.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mpkznsse.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163zqtduzbd.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nmcwvqnn.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163wiehlpfu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163ipwftnum.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ttgkuozf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163xbzkwvvg.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ksdtbbmb.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163mofjolsk.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163qmhvemwx.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163qetvawwe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163bwsmdrwh.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163abtomakx.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163twhtzxue.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163druwgalv.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163lrqffuuq.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163yegmpwnu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jksbotdx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163mdamgvtt.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163qhsspvje.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163vvamraqi.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163badbdaml.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163yykryelp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163swnswfgv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cqlcdrfj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nosbnykc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163zeiaetnk.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163wfcvlsbm.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163dtfrcjqw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ykwmeikn.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163xbbrrqde.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163kxzueqyg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163qzhhhlnh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ivfrfyza.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163keemkstl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163yrszgegk.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ldsnqmpy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163isyuqrzm.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163wkthhhim.html

[B07] while 循环
来源：http://www.xuanzx.com/163pmxnwdta.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163flzwshfd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163soxwzyla.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163qiuwmybd.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rtxbfodc.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gvmvtcjr.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163kxycflmg.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163jlctdwpj.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cwmjupyq.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163kykqthot.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163sxwjzait.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ivlmhbpw.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mtelvnjo.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163upyuyuux.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dwljohpi.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163vlkwhwwr.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163rhucpngy.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hypsbmef.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163xaogpyrp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jqlxkpiv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163beqlxmng.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aewyxtqn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163vgjatlec.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163twatdzqw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qwwamslq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163xpmxuvuy.html


<!-- 参考信息 -->