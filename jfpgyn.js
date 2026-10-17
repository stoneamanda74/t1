外链999!wailian999！

Py:   "第一行\n第二行"
来源：http://www.sxryk.cn/163jppvumox.html

PHP:  "第一行\n第二行"
来源：http://www.sxryk.cn/163iaptrpfl.html

JS:   "第一行\n第二行"
来源：http://www.sxryk.cn/163qnxzpbuq.html

TS:   "第一行\n第二行"
来源：http://www.xuanzx.com/163fimfnuuw.html

Java: "第一行\n第二行"
来源：http://www.sxryk.cn/163ulrbwtah.html

Go:   "第一行\n第二行"
来源：http://www.xuanzx.com/163klcydcyy.html

Ruby: "第一行\n第二行"
来源：http://www.aibaodan.cn/163xghmaspc.html

C#:   "第一行\n第二行"
来源：http://www.xuanzx.com/163gpqjhxkr.html

[A14] 注释写法
来源：http://www.aibaodan.cn/163qivqnjap.html

Py:   # 单行；三引号字符串可作多行说明
来源：http://www.sxryk.cn/163vogvqhvx.html

PHP:  // 或 # 单行；/* 多行 */
来源：http://www.aibaodan.cn/163oxwxdaln.html

JS:   // 单行；/* 多行 */
来源：http://www.sxryk.cn/163fihbynwd.html

TS:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163uosktscg.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.xuanzx.com/163feshjnty.html

Go:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163ocjtalqs.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.sxryk.cn/163mcjfzllf.html

C#:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163zacfwqgw.html

[A15] 空值判断与默认值
来源：http://www.sxryk.cn/163mzykakkv.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163lrxfokzm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163khqaxsmf.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163sckdcwwq.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163rekmveqd.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163gstqddpp.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163gcbhcqzm.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163njkhyxnt.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163xufxwsst.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163ucwczjlm.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163nlmmehto.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163floykbcr.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163kwuvsknn.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163tdrrluka.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163oxgsxjmo.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163sciwlmpm.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163ndpueunf.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.aibaodan.cn/163xlphomlv.html

[A17] 位运算
来源：http://www.xuanzx.com/163liawddsb.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ssxynbkl.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163apulsbaz.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163znlpmato.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ybztxogk.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163prghmpmb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gubfcaff.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163xelnrrez.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163iieuivlc.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163glsufhze.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163pppqdcho.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163yhclyghi.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163digtihjz.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163luvlatvq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163qwkngoxu.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163nxfrmbsa.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163bxvzffyb.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163lisoprvl.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163xvqfacnh.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163wktyfnal.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163nubgqdwt.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163bhfhucsb.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163dmeghpka.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163svsnzrmr.html

Go:   a, b = b, a
来源：http://www.sxryk.cn/163abxchncz.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163ocvfrmnn.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163vvnhrsou.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163pqpfijul.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163riyczeha.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163zvntrwvy.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163fcogdhyg.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163itcssdxp.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163gfbadtuy.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163rytxvvsp.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163lcqycdjh.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163lmhpurqg.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163kscatlyi.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163nlrtectz.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163btpuppaf.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163xcwtokds.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163kcodlfzy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163vxevlhfz.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163rilyqycn.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163aykbydtm.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163yatiuusb.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163rvaurjyp.html

Py:   len(s)
来源：http://www.sxryk.cn/163bfptcnqq.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163zfchcaec.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163vjqhyfjj.html

TS:   s.length
来源：http://www.sxryk.cn/163qrefnpof.html

Java: s.length()
来源：http://www.sxryk.cn/163vndswqgf.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163zbszgtzl.html

Ruby: s.length
来源：http://www.aibaodan.cn/163lbkkazng.html

C#:   s.Length
来源：http://www.sxryk.cn/163xmijjulr.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163vlpnfube.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163drpfwdcl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163jerubiwx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163bbjevosi.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wmhrjqzr.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163jamihyhv.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163nithuesh.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163udvicslz.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163tcxecilv.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163stcxnzcb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163vyxtnpmm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163hpbdrnsw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163myzgokue.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163nlphykpt.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163nkcpuytr.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163kgqxqrrl.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163ngxionwc.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163rknuoeqo.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163bohcohwn.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xbcscuqo.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163hkgklbbj.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163reyoqeka.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163kfsnztra.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163kjjhwkcb.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163xybigryp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163arnqifam.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163rnbjyulw.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163cscmtekq.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163tqypmxfv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163cmbqrzep.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163kmupnfci.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163glhctzon.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163qbhrlsrp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163xamvoikg.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163bgesvpur.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163antulkdr.html

================================================================================
来源：http://www.xuanzx.com/163sigahjqi.html

B. 流程控制
来源：http://www.sxryk.cn/163penlrvtb.html

================================================================================
来源：http://www.sxryk.cn/163zhmgouuq.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ozpomlhr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163otgbnctd.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163jhuhphir.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ufzxmaeg.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163ygwqtsuv.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163ioqhoxtf.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163lmclmsap.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163ixfcyveh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163omxhxipv.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163aamyvdrk.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163inarzxbk.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163xneohovd.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ztzhxlln.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zmejfzar.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163zbhopxiq.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163bnqkqapm.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163mwouqcsh.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163llaxvgug.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163qluexesu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163erfiqnjq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163fuapbqvy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163dhdtzdsr.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163bidvfcpg.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163gnntpvjq.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163wgxwndsi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163fjbmkazj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163yscjgavy.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163snkvdfvu.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163nwzteoon.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163zjzjokth.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163qerpgqjo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qztupdwp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163hxfeeiti.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163wpghzras.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163obyoxtgk.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163bdcoerzr.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163qmisdxjt.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163zvgtdonj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163yygjklod.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163zxisajbg.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nptnfvuw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163esukfpae.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163cjupvutm.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163znwsugop.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163xdkqmmwn.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163nilchxru.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163mkrbeioj.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163vbrsdmzy.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163cstimjrm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163agzohgqi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163injqoiwe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163uexbruze.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163swxllrjq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163askflccx.html

[B07] while 循环
来源：http://www.sxryk.cn/163gwblnuyj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163dosddora.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163cifudnxs.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zgyioaou.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qknadpwp.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163flxlfplz.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163idepvbgf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163agqxorpi.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uoglnhkh.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163malqgnks.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163kzfmrfdx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fhqkbeuw.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163iosabuec.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jubniokw.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dafuatoa.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163yzwwybyz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163lkspttnn.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163whnpwvlx.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163fxhjcznh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163afvmrrra.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163fwzagcgz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163itffxuia.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163myjafoho.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ncsmqloz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mibvfrnl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163oxgvaelw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wtqyvpkh.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163nbiynrjd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163uhlvwcqv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jkopopzm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163mnjqphjg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ffgzkrcl.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163pldtdmgd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163tkoibntp.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163qduoruis.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163eppyovhm.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163zoxdqzvs.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163aovcwqdz.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163tgivgpjv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kbhsvjbw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mdnhqrvz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163snvgibsw.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163yynzmlzg.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gnkwabsq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zjvciort.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lyqnmopp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rhcarvck.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163zpenuakw.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163pgpqbfxd.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ydzfigee.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cbekwvgz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163mjdcrusm.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tffulakz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163umqmctvp.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163vuabrjco.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163bqsmmpmz.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163kloddsaa.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xpjstvoq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163yzmsyuzg.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163vwxsvkty.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163tdvxrbju.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163mjokymrq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163dxivpcyp.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163nvguzxaj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kxorkqhp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163isynyxym.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nrkrexic.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qdjhtueo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163rupmpvjg.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mfnxezrn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163trytibrf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pymiljtk.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163vqgqyyer.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ftzaiiyd.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163szujkkou.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163yxvztmsp.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163htalgvno.html

Java: a && b || !c
来源：http://www.xuanzx.com/163qodrbnve.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163yopkexxj.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163avzhwtht.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jtunxrqw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gxyljuaj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163jkteybqt.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163wxmspgoh.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163nwoqjyye.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wafwujma.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163otiqhjzp.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163rcotynne.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lqnkacbq.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163vjaiibqy.html

================================================================================
来源：http://www.sxryk.cn/163njcdmdxj.html

C. 函数与作用域
来源：http://www.sxryk.cn/163kwxicvil.html

================================================================================
来源：http://www.sxryk.cn/163oggbbuxr.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jskjsbcs.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gzizgzbm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163oipniryu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163gafgxhak.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163uadrkouz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163srannozu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qcdmjbar.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ljzoifud.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163midjoruu.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pjvginvg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163eiqodcox.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163wayfzngf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163zsnncgul.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dwqtiwiu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163hqesgsec.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163yzfdfaws.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163eklxizde.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163bbhtlzww.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xfokxgdn.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lyvfgycd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ffynapll.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yxrckqba.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bxaxatmy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163rykblsuc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163prqtxcmn.html


<!-- 参考信息 -->