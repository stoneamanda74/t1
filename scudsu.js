外链999!wailian999！

JS:   String(42); (42).toString()
来源：http://www.sxryk.cn/163qfrlgdns.html

TS:   String(42)
来源：http://www.sxryk.cn/163xhsizrby.html

Java: String.valueOf(42); Integer.toString(42)
来源：http://www.sxryk.cn/163gbwdsfip.html

Go:   strconv.Itoa(42)
来源：http://www.aibaodan.cn/163czdpypxi.html

Ruby: 42.to_s
来源：http://www.sxryk.cn/163dotpnoic.html

C#:   42.ToString()
来源：http://www.xuanzx.com/163rclszcrb.html

[A08] 取整与四舍五入
来源：http://www.sxryk.cn/163nxanyhhq.html

Py:   round(3.567, 2); int(3.9); math.floor(3.9)
来源：http://www.sxryk.cn/163ssrdsynl.html

PHP:  round(3.567, 2); floor(3.9); ceil(3.1)
来源：http://www.xuanzx.com/163ukbpxoxc.html

JS:   Math.round(3.567 * 100) / 100; Math.floor(3.9)
来源：http://www.aibaodan.cn/163hepujfay.html

TS:   Math.floor(3.9); Math.round(3.5)
来源：http://www.sxryk.cn/163yhavfdtt.html

Java: Math.round(3.567); Math.floor(3.9)
来源：http://www.aibaodan.cn/163ubjteeki.html

Go:   math.Round(3.567); math.Floor(3.9)
来源：http://www.aibaodan.cn/163tgwqijnf.html

Ruby: 3.567.round(2); 3.9.floor
来源：http://www.aibaodan.cn/163qjabxypd.html

C#:   Math.Round(3.567, 2); Math.Floor(3.9)
来源：http://www.sxryk.cn/163pywmlywg.html

[A09] 绝对值与最大最小值
来源：http://www.aibaodan.cn/163wrsxsrtx.html

Py:   abs(-5); max(1, 2); min(1, 2)
来源：http://www.sxryk.cn/163gcktgspf.html

PHP:  abs(-5); max(1, 2); min(1, 2)
来源：http://www.xuanzx.com/163djbfqiwh.html

JS:   Math.abs(-5); Math.max(1, 2); Math.min(1, 2)
来源：http://www.xuanzx.com/163oaqbgxaq.html

TS:   Math.abs(-5); Math.max(1, 2)
来源：http://www.xuanzx.com/163xzoxienm.html

Java: Math.abs(-5); Math.max(1, 2)
来源：http://www.aibaodan.cn/163bmsaputc.html

Go:   math.Abs(-5); max(1, 2)          // max/min 为 Go 1.21 内置
来源：http://www.xuanzx.com/163cwoeuytr.html

Ruby: -5.abs; [1, 2].max; [1, 2].min
来源：http://www.sxryk.cn/163pxgpying.html

C#:   Math.Abs(-5); Math.Max(1, 2)
来源：http://www.xuanzx.com/163mgqnbtuq.html

[A10] 生成随机数
来源：http://www.sxryk.cn/163samjflvb.html

Py:   import random; random.randint(1, 100)
来源：http://www.sxryk.cn/163qzjjymdj.html

PHP:  random_int(1, 100);
来源：http://www.sxryk.cn/163cxbqrcil.html

JS:   Math.floor(Math.random() * 100) + 1
来源：http://www.sxryk.cn/163kxuvplbm.html

TS:   Math.floor(Math.random() * 100) + 1
来源：http://www.xuanzx.com/163ntshoznb.html

Java: new Random().nextInt(100) + 1
来源：http://www.xuanzx.com/163ohtmwgph.html

Go:   rand.Intn(100) + 1               // math/rand
来源：http://www.sxryk.cn/163teusmuqr.html

Ruby: rand(1..100)
来源：http://www.aibaodan.cn/163vcyklkhz.html

C#:   new Random().Next(1, 101)
来源：http://www.aibaodan.cn/163fneowpwh.html

[A11] 条件表达式（三元）
来源：http://www.xuanzx.com/163vuqbpnsg.html

Py:   "yes" if x > 0 else "no"
来源：http://www.sxryk.cn/163vvsctnhg.html

PHP:  $x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163mxfyuthn.html

JS:   x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163dmkipvmp.html

TS:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163yuiacvnj.html

Java: x > 0 ? "yes" : "no"
来源：http://www.sxryk.cn/163wqtxtdki.html

Go:   // 无三元运算符，需用 if 语句
来源：http://www.sxryk.cn/163dsimrzlp.html

Ruby: x > 0 ? "yes" : "no"
来源：http://www.xuanzx.com/163eymbqvns.html

C#:   x > 0 ? "yes" : "no"
来源：http://www.aibaodan.cn/163mnsqzymv.html

[A12] 字符串插值 / 格式化
来源：http://www.xuanzx.com/163efvbdsga.html

Py:   f"Hello, {name}! 年龄 {age}"
来源：http://www.aibaodan.cn/163xdbsdkup.html

PHP:  "Hello, {$name}!"; sprintf("Hello, %s", $name)
来源：http://www.aibaodan.cn/163fskwruyr.html

JS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163awbtzfdc.html

TS:   `Hello, ${name}!`
来源：http://www.aibaodan.cn/163jqhyjzbn.html

Java: "Hello, %s!".formatted(name)
来源：http://www.aibaodan.cn/163aovfgugr.html

Go:   fmt.Sprintf("Hello, %s!", name)
来源：http://www.sxryk.cn/163bayigkve.html

Ruby: "Hello, #{name}!"
来源：http://www.aibaodan.cn/163nhevwxxm.html

C#:   $"Hello, {name}!"
来源：http://www.aibaodan.cn/163wsarhymk.html

[A13] 多行字符串（练习 \n 转义）
来源：http://www.aibaodan.cn/163amnczpzh.html

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163tctgcaml.html

PHP:  "第一行\n第二行"
来源：http://www.aibaodan.cn/163xpperrwa.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163veqqrhua.html

TS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163zfkbzgqn.html

Java: "第一行\n第二行"
来源：http://www.aibaodan.cn/163hkdjytqx.html

Go:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163cjlmaamb.html

Ruby: "第一行\n第二行"
来源：http://www.sxryk.cn/163oqyxlsib.html

C#:   "第一行\n第二行"
来源：http://www.aibaodan.cn/163whmtnynq.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163dczsqfjd.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.aibaodan.cn/163okldcwbh.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.sxryk.cn/163vlbwfrai.html

JS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163cjuqgolc.html

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163srpyavsz.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.aibaodan.cn/163febuuoyt.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163hitfozdk.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.aibaodan.cn/163wztgltfh.html

C#:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163xmiwkbsa.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163prtveedb.html

Py:   value = data or "默认值"
来源：http://www.sxryk.cn/163cjkaiyil.html

PHP:  $value = $data ?? "默认值";
来源：http://www.aibaodan.cn/163wocvztty.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163gefovwiv.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163zrdizepl.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163ovtbwrra.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163vcazomdz.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163wzjvtbky.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163jgmgxshk.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163vevgafiw.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163jsjckmwa.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.xuanzx.com/163ksijszvs.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163grhwlbxk.html

TS:   if (!x) {}
来源：http://www.aibaodan.cn/163xrchtyhu.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163adjsqkwt.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163ctjcgtyq.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163edvpzshi.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163tioloomf.html

[A17] 位运算
来源：http://www.xuanzx.com/163zovtbeej.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163khritzxe.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163pbqgrfdq.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163kaxawmrn.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ijvcexwn.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163nmyosmks.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163dnrbyats.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163yebzcgzt.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163feshyqnc.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163qzxjlepd.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163jpgggfsh.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163xolrpgrq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163oktorhqh.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ktmihkyr.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ildwgsya.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163tuozsult.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163oeqtbzjc.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163hhlefwuk.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163umquvkhf.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163xjwfsdst.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163fojwknae.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163vqurzewl.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163pmwartxj.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163ayjsjjwo.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163tjvcjlgf.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163ygtuwldu.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163qgukdzwy.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163thdbryek.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163hxgbswyf.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163anrbziun.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163otivbrkk.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163qpzvwkic.html

Java: new Scanner(System.in).nextLine()
来源：http://www.xuanzx.com/163igqsfgbi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163ekqirvlj.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163bfoxrsso.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163iprnpncw.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163lhylbgie.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163uqmpevlp.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163nroesqyc.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ufgzcfjf.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163nfonjeyr.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163fdezrlwt.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163aphtbepb.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163qotzhujb.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163iohngjwq.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ipqlxcjy.html

Py:   len(s)
来源：http://www.xuanzx.com/163widaeduz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163zqkljehs.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163qzhmlpkx.html

TS:   s.length
来源：http://www.xuanzx.com/163mqyecreo.html

Java: s.length()
来源：http://www.sxryk.cn/163djudfndp.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163clexrxrl.html

Ruby: s.length
来源：http://www.aibaodan.cn/163ysfxgmjj.html

C#:   s.Length
来源：http://www.xuanzx.com/163adbecfam.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163qsmimlck.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163zwlxeqic.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163ysmqmjlp.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163hehfgyse.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163vsesprna.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rpuaudas.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163agmchcxo.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163xhdeimlv.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163qjgbwmqm.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163tsxhwhxh.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163hpygsawq.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163ppdsygyh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163memipahy.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163tulsybvn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163lbxqijat.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163sogbbbqd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163hsldnova.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163fdjkwufs.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163rsjfjskg.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163neicbzjz.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163cpfgtwvp.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163pghfobdk.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163awvjnmdj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163wsawbjgs.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163xtijbulj.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163htfweqce.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ybdjaros.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163yhwtzxhs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163acwomezs.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163vwzsgtmb.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163mgjmijwl.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163xtlhoqwq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163vwnzrtqi.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163ecdsjmxd.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163kjgsdjcp.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163spmvqoii.html

================================================================================
来源：http://www.xuanzx.com/163qvrdnlgm.html

B. 流程控制
来源：http://www.xuanzx.com/163tebenjhk.html

================================================================================
来源：http://www.xuanzx.com/163svaecliu.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163geobpade.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163azrxfwof.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163pulkmczw.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163lmsbooxi.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cgcktywl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163axuhmlzc.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163szrrjpip.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163cnqzftuw.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163adttjrqy.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163tbikqmrx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163fhsjiuwu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163jofrlfdz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163uoeapblx.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163yaerlklj.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163xaivfuxo.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163qnfcgbhj.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163qlfmghlx.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163ltpnjtom.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163eftovmlw.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163bjiipudn.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163kxzfrhhz.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vrvpnaxx.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163tiepshis.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163snskbfcn.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163vkuwddky.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163mpbedngt.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163lvkmulrm.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163lkwmsghi.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163azmnxqou.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163eobnkoxa.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tdocyebh.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163emdnumdq.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163byeginpk.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163gawkrxeh.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163qtlnxjbg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163whfhvexo.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163pmmknojc.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163oocuigwi.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163xuxwiwla.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hmjmdggi.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163khtsuenc.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163wcpjnzqo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163idxhemlb.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163laigmxfh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163rryvaswj.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163lmgsuncz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ydhzhleo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163jzzgfaxo.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163brcbmwqs.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ypndoyjj.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163dvswpmrt.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163pprdtuyb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ympetjdz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163iashdppo.html

[B07] while 循环
来源：http://www.sxryk.cn/163antztdbj.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163cadxnqlx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163qnedqqee.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163vqojjunk.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163udbqsokl.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ixjfnits.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ngrksgoh.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163subxrcua.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mtczwamc.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163lqfbiqcr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163nekeiiwm.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163cvacfeup.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163moywqqzz.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uybcxvbx.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rdavvqfx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163oawwomyt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ntbggaqg.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qtmsqngq.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163ybnhwkrw.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163ipgolewq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qvhvjbnz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ryuitclm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wkjrytyr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163retpgxra.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rjxazjfr.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163lvfuvcpb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jaoxxwjw.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163gurnupfk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163djkzwugt.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ugyonigg.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163afbvgpdf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163talxycjc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163vlmrzici.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ynqsndul.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163nfjnzgvg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163jpdixxdl.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163bajkjafi.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163oniscika.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163tigtahwe.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163mdggztyq.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gklxvtrc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163wryfnpum.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ufdjeuhm.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163iviszpuy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163nbnuirfs.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163fktcuvnq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jpfisdfj.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163rmbihvil.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xzxitpdb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163grqjmvbb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mbijbomi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163zevyxuyk.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163gbiwsjix.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fpfnuhvc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163dsxschcq.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163higmxqry.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vzsrakwy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163esgmbjsz.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xvwohpwr.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163otijjwcv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163aecefrma.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zhoveduy.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163akxnzsev.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163bzsmonac.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ihmszlrz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rdajksjg.html


<!-- 参考信息 -->