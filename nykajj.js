外链999!wailian999！

TS:   parseInt("42", 10); Number("42")
来源：http://www.xuanzx.com/163iqcdfuhg.html

Java: Integer.parseInt("42"); Double.parseDouble("3.14")
来源：http://www.xuanzx.com/163skgbxwoc.html

Go:   strconv.Atoi("42"); strconv.ParseFloat("3.14", 64)
来源：http://www.sxryk.cn/163iafqpytp.html

Ruby: "42".to_i; "3.14".to_f
来源：http://www.sxryk.cn/163xmwxcysx.html

C#:   int.Parse("42"); double.Parse("3.14")
来源：http://www.sxryk.cn/163mxdceryr.html

[A07] 数字转字符串
来源：http://www.sxryk.cn/163rnuccvxi.html

Py:   str(42)
来源：http://www.sxryk.cn/163mexhujhs.html

PHP:  (string) 42; strval(42)
来源：http://www.sxryk.cn/163gsifbftm.html

JS:   String(42); (42).toString()
来源：http://www.xuanzx.com/163xixcibaz.html

TS:   String(42)
来源：http://www.sxryk.cn/163tdmjusxt.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163kpigwlds.html

Go:   strconv.Itoa(42)
来源：http://www.xuanzx.com/163iptdnzxy.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163dsgoejji.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163irbixokb.html

[A08] 取整与四舍五入
来源：http://www.aibaodan.cn/163gnwsjzla.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.xuanzx.com/163mbkbejmv.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163cdiamvnn.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.sxryk.cn/163guuqlakr.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163ukbnzqto.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163libjsxfz.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163egmjlmyh.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163wslsvjod.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163qogofmnb.html

[A09] 绝对值与最大最小值
来源：http://www.sxryk.cn/163ragnmtod.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163kevnwfls.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163xhktjnqk.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.sxryk.cn/163xbnceinl.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163fgxwsoly.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163zzedccof.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163huetumlj.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.xuanzx.com/163cxuhemja.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163jolngpae.html

[A10] 生成随机数
来源：http://www.aibaodan.cn/163mivzcuid.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163dtnddbte.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163wpcncdpn.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ylwzvwkf.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.aibaodan.cn/163rhifaumm.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163sbmdwkpz.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.aibaodan.cn/163xbomgajq.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163pcvgfbqv.html

C#:   new Random().Next(1, 101)
来源：http://www.sxryk.cn/163lmbrfryq.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163cuuygfri.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163yuhzdexi.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163znmrodbq.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163nznshleu.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163jgheciql.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163fpaqajte.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163wyvbioro.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163livkrhqz.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163vozqeahu.html

[A12] 字符串插值 / 格式化
来源：http://www.sxryk.cn/163pinbipzr.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163bidvafxo.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.sxryk.cn/163prkfpugv.html

JS:   `Hello, ${name}!`
来源：http://www.sxryk.cn/163uzeyqynm.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163gsgfqqqh.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163bvycmafu.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163tgxgsmvw.html

Ruby: "Hello, #{name}!"
来源：http://www.sxryk.cn/163ngbkjiye.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163nfdptsbo.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163kjftxbbp.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163mgtqoklb.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163derweeqt.html

JS:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163mryjtlxw.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163dsvoibwg.html

Java: "第一行\n第二行"
来源：http://www.xuanzx.com/163ugyrwceh.html

Go:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qwmkucsa.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163jkboyopf.html

C#:   "第一行\n第二行"
来源：http://www.sxryk.cn/163cvcfzrza.html

[A14] 注释写法
来源：http://www.sxryk.cn/163xsnyznza.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163trmgxshf.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163ukqdmpvz.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163sowfdllf.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163nvjdyqpe.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163zgggvfqw.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163lvqdvbne.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163nrlkllgi.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163clpqnpih.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163enbeuwmq.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163zugdbcev.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163iyaufwod.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163sclmtrzo.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163fiwcpdfj.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163zqcudhsn.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163aseozxvs.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163xadhklcp.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163szabclnp.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163bjjwacij.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163cjjboqvs.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163fijtigiv.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163sliyfwxw.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163nsbbdcjc.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163tbfybgye.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163akalnsxq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163ufuykplh.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163rgicauww.html

[A17] 位运算
来源：http://www.aibaodan.cn/163bkilitpo.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cmssakww.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163pxfhqdbo.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ktjdmekp.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yjtrqhqs.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kntneuah.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163gglosaze.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bwrwjidz.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163btvytwjp.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163ofrmalmz.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jxfskyxv.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163niplssim.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163nkmfipjo.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163bnjthgdp.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163rklcrzfu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163vouzoxpx.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163igcmmjhv.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163qimoovtg.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163dmaensqb.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163zcktfzav.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163nwhuvagt.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163rokuxucz.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163odtisojd.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163fyfxkguu.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163pwbmjzpc.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163dawplqxt.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163aacqrcbu.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163hshiyiiw.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163iemguwvx.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163uprdxqne.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163dsccfzzm.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163ddfmycqp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163hbignfvb.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163axospafq.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163tbhvtxvx.html

C#:   Console.ReadLine();
来源：http://www.aibaodan.cn/163jhmqshyv.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163yevbgxye.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163hyqbjwhp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163hzvgxzst.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ewlpeytn.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163vqolztul.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163ccygtrqu.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163zjsnrkio.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ozmlipfu.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163uiwracya.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163wyrabuzj.html

Py:   len(s)
来源：http://www.sxryk.cn/163xmuwtqcu.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163gejblyej.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163cvibehfy.html

TS:   s.length
来源：http://www.aibaodan.cn/163indukcox.html

Java: s.length()
来源：http://www.xuanzx.com/163dpemvkcg.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163uxdyufwe.html

Ruby: s.length
来源：http://www.xuanzx.com/163owgvaiyx.html

C#:   s.Length
来源：http://www.aibaodan.cn/163drtlwhzx.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163dommppsr.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163isyivzsw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163xoawpdxr.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163dgxigyif.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163lalmxiph.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163mocnxdky.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163ivuerzyw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163ajtvkayz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163nqzysmfw.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163skcxfjhm.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163vvlviyjk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163lhwqylst.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163kmrcvkmt.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vtcshufh.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163jjilfcew.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163fyfyooei.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163ggcwdztd.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163deigmcaw.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163qrpdmyqy.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163caofqzab.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163wwrpytyy.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sxkokagu.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163mxluntis.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rzusvakx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163fipdbnyn.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163ggdvpiyk.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163bzrkuegu.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ohhlujpv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163lcszhvdt.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163gacsuvrd.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163kulvtzcq.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163nfdgrxgs.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163gzqhhqsp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163qrmtipnp.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163mvxgqfgb.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163kefbqduj.html

================================================================================
来源：http://www.aibaodan.cn/163yjxappvz.html

B. 流程控制
来源：http://www.aibaodan.cn/163dfczizmj.html

================================================================================
来源：http://www.sxryk.cn/163tjoaxxjp.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163aaiqhlyp.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163lzdrxyms.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163ruekokuq.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jafvwaoq.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163pffokgmw.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163xrhqerwy.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ezundjct.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163thtmofsf.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163spekrxhy.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163amsyqtoh.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ellekghd.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163ztqlxjlh.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163szxtepdu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163drlphkfn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zknhgjyy.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163mimtcuew.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163lyccigmz.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163htlupwwq.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163dqrqvfqg.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163rhxmnygl.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163tzssrbuh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cptplfpm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163rhisxmtm.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163gfabgyqr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163dlsowjke.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vvqmrzvx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ztgtvufz.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163dowyiijs.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163tfppiefa.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163bcwjagwa.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163shtdpkkc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163sfsbqpoy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163zzugusmu.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163zokgkhmz.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163djyrrhon.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163iklnvfvt.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163dzrsxnyo.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163bwulyeov.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jyelwrmy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163wftfjzdl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163otxorkhg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163zdpsbtzr.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163pdwiuffu.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163xaewoasg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163bkqynobp.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163zeezwyho.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163mlfjkfhi.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163penemlgg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163zrmxsryc.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fgykijhp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163apmbhmwa.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163soluaqpc.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163uimsgawv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163etdhwrhl.html

[B07] while 循环
来源：http://www.sxryk.cn/163nyolrksm.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163olgkddgh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163fgwulwzk.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hwxpoudc.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hdmuthpb.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dwqdejjf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163zhlldozo.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163nhpkctpo.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163rddydzqe.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ekgmsqsm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163qxmsdasn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163znapldnh.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kvcogynq.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163dtrjvtky.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xczqcxme.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ligkzcsd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163jceydcsc.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pjowuuad.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163qxteqmuh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163bmxfyqdw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163moxozkou.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hgzdkqbv.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fotdnzxw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163lzajfogo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163tjyuxmmy.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163qnseijsh.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gywqkpyv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163jdwqbbcd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jtxmzqtl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163rlaphtva.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163xqftcpdc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163bvboifyd.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163uyrgduuc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163bgireikk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163rbzxrbeq.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163zgodllie.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zhmqjtgm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bcpytbqu.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xsdqwkus.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163erdzblyn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163rxktjdfx.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ihxpwqfy.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163fxsmfeya.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163wwymwjlw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163dgmuvbnp.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163zwfhnloe.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163qjlqwnnq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163flolkcej.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wrrshfzn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163zqtbgpbf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vqbxtucr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163vjmlhony.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163urmpkvcu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163xbiagvso.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163hiqbcurj.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163yhplnede.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163wdpfzmbu.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163woocazmc.html


<!-- 参考信息 -->