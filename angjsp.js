外链999!wailian999！

JS:   String(42); (42).toString()
来源：http://www.aibaodan.cn/163ypmhpxjy.html

TS:   String(42)
来源：http://www.aibaodan.cn/163sqlqduzn.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.xuanzx.com/163rveziiwd.html

Go:   strconv.Itoa(42)
来源：http://www.sxryk.cn/163vbdsyolv.html

Ruby: 42.to_s
来源：http://www.xuanzx.com/163kozgqrkt.html

C#:   42.ToString()
来源：http://www.sxryk.cn/163nezmkzcp.html

[A08] 取整与四舍五入
来源：http://www.xuanzx.com/163oeglqnlj.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.aibaodan.cn/163kcbwpidw.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.sxryk.cn/163vvojmvhu.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.xuanzx.com/163aduzsiyg.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.xuanzx.com/163jlkoyeyk.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163foiesipi.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.sxryk.cn/163vdwqvkhj.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.xuanzx.com/163ucicprvb.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.aibaodan.cn/163shddnndn.html

[A09] 绝对值与最大最小值
来源：http://www.xuanzx.com/163gtoszsmz.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163polfryfv.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.aibaodan.cn/163kpblvumt.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163juujsvkr.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.sxryk.cn/163pugbyznl.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xxiiuqpe.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.sxryk.cn/163qycejqya.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.aibaodan.cn/163rsgljumc.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.aibaodan.cn/163kbbjqumu.html

[A10] 生成随机数
来源：http://www.xuanzx.com/163oluiwkxk.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163hudngrtt.html

PHP:  random_int(1, 100);
来源：http://www.xuanzx.com/163sflslkuh.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163klqednat.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163wwnrxmhx.html

Java: new Random().nextInt(100) + 1
来源：http://www.sxryk.cn/163siimoaux.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163rctxpbxf.html

Ruby: rand(1..100)
来源：http://www.xuanzx.com/163zobdupim.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163eyhahklj.html

[A11] 条件表达式（三元）
来源：http://www.aibaodan.cn/163jkfwejvt.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163crxnzyzn.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163zlcpgsqe.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163yvmyazem.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163epqvhgkg.html

Java: x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163karnqalm.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.aibaodan.cn/163vijptykz.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163qvhrtseu.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163ckjevgxx.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163pokeivwz.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.xuanzx.com/163gpgyxxxt.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.xuanzx.com/163kdfvcomr.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163srcpjbbr.html

TS:   `Hello, ${name}!`
来源：http://www.xuanzx.com/163dmwmkmgg.html

Java: "Hello, %s!".formatted(name)
来源：http://www.sxryk.cn/163zbqbrzms.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.xuanzx.com/163ocjaexbh.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163humblfpi.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163vnaccfhc.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.xuanzx.com/163umlzkjvi.html

Py:   "第一行\n第二行"
来源：http://www.xuanzx.com/163nqxbbtdf.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163slzpfoyu.html

JS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163zoppxtql.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zwhhuqyn.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163zuerypey.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163pskpdkad.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163wnddoedk.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163drjanari.html

[A14] 注释写法
来源：http://www.sxryk.cn/163fnxwilwe.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163vfviswoc.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163olcznclk.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163scjptvsu.html

TS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163aaoohqnn.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163ajblxmxo.html

Go:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163neuurpaf.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163bdrvudwe.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163iudjiohy.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163vmkviawb.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163chfqrdad.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163dcmpnrxh.html

JS:   const value = data ?? "默认值";
来源：http://www.aibaodan.cn/163oifipkhd.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163atfibdcp.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.sxryk.cn/163oukmgaxx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163hyhqlxau.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163yxsppczu.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163qllftlgg.html

[A16] 真假值判断规则
来源：http://www.sxryk.cn/163vhmvyesl.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.xuanzx.com/163bfznwlpx.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163bgtuaqox.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.sxryk.cn/163hartncci.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163gxkuxoxb.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163lwssbion.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163rjoyxser.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163uikamndw.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163ekqkmhdh.html

[A17] 位运算
来源：http://www.aibaodan.cn/163zyltttfr.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ygkladyz.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163tzkhxuvf.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163uvhhtmvw.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163pbxuxkvt.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ovngptps.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163yxiqdqkt.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ovkdprfx.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163rugtozgr.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163pnikuxhb.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163zolqxxdf.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163acpquksc.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163vvaofvtr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163binwpvgy.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163dadbdrjz.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163litgjyrd.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163vkprnikp.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163bmemotnb.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163jyoqcqak.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163lssujknt.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163iuqsvclx.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163detxispt.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163emgvrhfj.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163srgbpktu.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163yctlygzx.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163bhcanovo.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163sryiuxft.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163ojzlwtbx.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163vihnvamo.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163dpcupujf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163pycwfpdh.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163rwcrhmbr.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163rmrndlhj.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163ogkkiysz.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163cmjcankz.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163fqiehmhu.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163bouegqda.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163ebquewab.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163sljhdojo.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ecgfcgpc.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163gvglvaqt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163wtugeodb.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jgduydwl.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jrkqonep.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163hbuvmkag.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163qylwvzxe.html

Py:   len(s)
来源：http://www.aibaodan.cn/163hwqbhlng.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163ahlvgaqa.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163bainbgbn.html

TS:   s.length
来源：http://www.sxryk.cn/163wpvdlznl.html

Java: s.length()
来源：http://www.sxryk.cn/163jekncduk.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163bikctuyw.html

Ruby: s.length
来源：http://www.xuanzx.com/163eznrtosg.html

C#:   s.Length
来源：http://www.sxryk.cn/163yryolhia.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163qfrlmaqw.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163sjfxyrpv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163kiwweljt.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163lizmkkez.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kjtatdsw.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163pboqkwrb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163oamsvpim.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163krnfrels.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163upscgvqf.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163cbmjyglk.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163zxjlxmop.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163owpvttur.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163vxzohvwc.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163osnkndcp.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163tocsbcmj.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163yqhblqxt.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163paxhzfdn.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163cecowngl.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163lzrlsxot.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163zsuhdkxm.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pqdoqoin.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163lmghclxx.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ajxqnaaz.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163rdkfolid.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163ajhmssgg.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163bqmhfnlv.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163tbmksuxx.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163mlmonmth.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163gnyzvasq.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163yeqjwobu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163dbwakvof.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163dicnsscf.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163ouvuhawn.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163yiqerupy.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163qdukaega.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163irzoguur.html

================================================================================
来源：http://www.sxryk.cn/163dekqimpp.html

B. 流程控制
来源：http://www.xuanzx.com/163wigdxuko.html

================================================================================
来源：http://www.sxryk.cn/163fhytyvvi.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163nqvscsec.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163zngovlfs.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163ozdulmyo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jasiarak.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yfyhnzqr.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163yxzivezv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163ntvuysua.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163xucgkdje.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163opckserm.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163eclbitab.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163joohkcln.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163xjzekzus.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163hbmcrljm.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ajkbqcuz.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163lzlpdtor.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163zyrkvnca.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163jfvtgbds.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163vcsiyjxr.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163vyeuolag.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163iimatkax.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163qksdkvla.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163fhsoedko.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163daguzjjq.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163wdedvpxx.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163vwdxeirg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163ixiuamin.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163ucorpwfr.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163shdqrfxo.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163pefjyrvj.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163ycrluete.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gxktyqbp.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ocqxkahs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163gautuwce.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163biefxofg.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ruvopgrv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163oirdnjrq.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ihntpukn.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jbwgcodl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fkojoyiq.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163fynsycrf.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163jfcvikdi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163livokwzq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163ifduvndt.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163iptgihap.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163bznzueaz.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163styrtqwg.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lleeqtrh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163haresxze.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163rquaggbx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163ohpihtrf.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163vitmxyic.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163dslcgwtb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rcpqpkbq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163jpkbdfdo.html

[B07] while 循环
来源：http://www.sxryk.cn/163ouclcgkn.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163kczuulep.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163xkcurxfm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ifwfygke.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yzmqaprn.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163dxkjrjdz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163xnavatja.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163dvzmkixa.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163kxlrtorf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163bqwnakzk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163nofysvje.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163tuwxogjo.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163gzivckpn.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mmjwztvj.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163obhyctji.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163cfjyfdlg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ahbgndvn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mbuztzqw.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163mifwktrw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163zwejywlh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163odqkwmxu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163auncmong.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rfxhggor.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ipejvwyz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163cyrxgpqc.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163kyyltohq.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rcsattvv.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163zuenyjpe.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163dcrgebgv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163rfaxvsnj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163anyaepou.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163mqusliep.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163iqnesxso.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163icfyzpya.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163vukexjsk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163shfpfair.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163qkcknbck.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163yhwvbblv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163tcckijbv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kurhvtao.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163lnsbfwmu.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163umugrazq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163yqmwsvbq.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163txlohlfu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163uiurwzdv.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ijlkzxdv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163xczewjai.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163zrfdelxr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xzrpglcz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vkccbrhe.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163heqwvpxy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mjczyaob.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163bmlhisps.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163goebdxkw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nkcuftvp.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ykzxuduj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163uocmrmuw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163huombfmz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fjlvlllf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fyitldpb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tvwqxmkd.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163hsaufdlp.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163tpdjbsas.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163sreajlmg.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163eivbjsoo.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163yuypdqra.html


<!-- 参考信息 -->