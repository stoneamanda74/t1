外链999!wailian999！

TS:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163xtikugdx.html

Java: // 单行；/* 多行 */；/** 文档注释 */
来源：http://www.sxryk.cn/163vqklvzdz.html

Go:   // 单行；/* 多行 */
来源：http://www.xuanzx.com/163fscndbte.html

Ruby: # 单行；=begin 多行 =end
来源：http://www.xuanzx.com/163zpmwaopp.html

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163fzxtwcnh.html

[A15] 空值判断与默认值
来源：http://www.aibaodan.cn/163skujlizc.html

Py:   value = data or "默认值"
来源：http://www.xuanzx.com/163mprcinpm.html

PHP:  $value = $data ?? "默认值";
来源：http://www.sxryk.cn/163rxhadgci.html

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tetijlrq.html

TS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163tduivmyw.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.xuanzx.com/163nlxaoima.html

Go:   if data == "" { data = "默认值" }
来源：http://www.aibaodan.cn/163tjowmtpv.html

Ruby: value = data || "默认值"
来源：http://www.xuanzx.com/163eikwsjqu.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163dfakvpjv.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163qbwihizx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.sxryk.cn/163dcttmmwi.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163xufgyyws.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163qddvrqca.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163bpmhxyug.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.aibaodan.cn/163bxntgmbl.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163ojmvakkx.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163dasctani.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163fjkqnirn.html

[A17] 位运算
来源：http://www.xuanzx.com/163xikpjhna.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jacucxqk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163jmophueg.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wwafwkbo.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163pfcsrmar.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163hqnwsybx.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163wwmoehii.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163rsrkmltz.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rzonvhwl.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163cizzipot.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163kkpsomoz.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163gtxxhklr.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163klfrrorr.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163zrobeuon.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163nmcnemrg.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163isctitsd.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163kumnivfk.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163waycstut.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163wfhudcpn.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163ogdzeprv.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163jktefqby.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163dbiwduyf.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163gaminneg.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163hcdbhiit.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163qjudyavq.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163syigotnd.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163pefyjvqc.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163faxneyfz.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163gdxpdjyy.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163xnmiyryb.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163azhxdevt.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163vmwonoke.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163kyhctnft.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.aibaodan.cn/163mxevqkck.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163wkmgefgs.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163tioodunk.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163rtfehhdv.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163ictkfdqb.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163mwazknnv.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163pestwrsd.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163kqhwfrvt.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vsqtjocy.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ybvwwuau.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pejucpcn.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163wabkkknn.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163cahguvrv.html

Py:   len(s)
来源：http://www.sxryk.cn/163ciszkmts.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163dbkzmual.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163agvspcwt.html

TS:   s.length
来源：http://www.xuanzx.com/163cwnccehw.html

Java: s.length()
来源：http://www.xuanzx.com/163xabcowic.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.xuanzx.com/163uxwsbcug.html

Ruby: s.length
来源：http://www.sxryk.cn/163mhwdzdvz.html

C#:   s.Length
来源：http://www.sxryk.cn/163rzyhlaiy.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163wvnyykix.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163tuyvxzgu.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163zukdxtpt.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163rqfwbtxb.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kdpyqvkl.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163qgsycwgc.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163mvibqins.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163mzujesqd.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vlebvdkk.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163cnjlhcdv.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163tgryqlpd.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163anlvxpuc.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163cakmtmzx.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163qrqhebcn.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163fvvfmmol.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163fhbbfjih.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163yhvrlgxs.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163qslcplgx.html

[A25] 字符串比较
来源：http://www.aibaodan.cn/163xdctcihe.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163wpgpybqw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163mybzdguo.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163honsmley.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163pitqgcuq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163zuzuyhdx.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163gxyqienz.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163ujqcdloi.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163fxoorvdn.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163tsdjnbxv.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163sogodbft.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163npxbdldw.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163zxiwkyes.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163bkftmzlq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163ueeovcqa.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163diuyvzuf.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163gnwrwtfm.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163awowggnr.html

================================================================================
来源：http://www.xuanzx.com/163bfyjmraa.html

B. 流程控制
来源：http://www.aibaodan.cn/163pxdubwab.html

================================================================================
来源：http://www.aibaodan.cn/163hdfamxbi.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163gwxaxmeq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163bqvkqfqo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163xislsfcf.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163yfqpjcec.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kohkjvlp.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163cizlfrah.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163duyudubl.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163kgbsmafn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eepgyfgy.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163cuoltvxi.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ptoknkqp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163cvgwjwcr.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163eqkerswf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163tqydokfo.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ekgkxvtr.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163unxobouo.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163acugwrqk.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163yzqaqlwy.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163qcjtdeae.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163ceqsdodg.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ovbsyhko.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163lgkoqnla.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163mhghzthe.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163rltxunna.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163coaqjrsg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163iokoncoa.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163trhwfurk.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163srpzclqf.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163yvuvwudi.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163rhzruiwt.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163vpybedea.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163wkijbpwd.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163ymakegfh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163babummkf.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163fsffaolr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163rutxbnhb.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163hmevxnmg.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163yotyrzpq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163unsfmzzd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kynvlnzn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163munaxqip.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163lzivkkun.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163bdocsekt.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163yntjlmwp.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163hvkxrrpz.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163bhdbekdn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163ynfdexdp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163gejnprrx.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163npbrrzit.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jksrumdi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ieulrlso.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163ftabkhep.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163qklpbadz.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163yrpzhthj.html

[B07] while 循环
来源：http://www.sxryk.cn/163hbgbvuca.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163psjwmtyd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163oqivvbyt.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vondmcuz.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wcxwcsnu.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ydnouaga.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163yluqezyx.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163xksmvvaa.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lzxncewj.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163bergsukz.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163fnfccfjb.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163grtjseko.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ntselpco.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163poeuilos.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ewcvricy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163geevzgng.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163jqhxxpfv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ykrqqzid.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163yvqqwgyo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cwjpmwmw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163kznwovxv.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gdofglda.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163uofnukrz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163kzjtnnkw.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163irorxqxp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163jlygswri.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lxtkfzgj.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163rwjqzaxc.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163wrlxcbtm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qlstjqvo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163iurkvspt.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163udqmogmv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fbtuadlz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163zbqktemb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163traamqjk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163kkfyrxyk.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163naungewj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163lznvslkm.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163tldhtbpn.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fekqmsxi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163edchpmlz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163cwpnzmuj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163sgabnidk.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163pcecsrmp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163mozducsh.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163iezidfxp.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163tvxwbctb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163cxhmbphi.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tzdgwflq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fuukzhuy.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163spjfyyyc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163cgnlofof.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163gscscvaf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163uceuvmqx.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ajxetzvc.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163qupggggl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163nqlyukgq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163cvfbjasv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ttpwksly.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163knajzvuc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163ndoovvry.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163gigeaaur.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163fadoghea.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vwglizwd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163kbiidkkt.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163kiydmlla.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163njzxblef.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qeobbgfx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163hvsqkgmt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163geprxudi.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163uibguier.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zoiuqfbj.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fyabxqbf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163szscpuoi.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163njwpwbxq.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163iqfawakl.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qcszjblr.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gxirydda.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163myqqbvar.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163vpspcaug.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163zsvkrnjq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163evkubvzs.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ntvnlzdv.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163aaqgmmhr.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163fosrpfeb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vgxmahod.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163bcjpinma.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163iuqyvznq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163pzbnqmra.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163bfpdbcvi.html

================================================================================
来源：http://www.xuanzx.com/163ivarajkv.html

C. 函数与作用域
来源：http://www.xuanzx.com/163tgkowtuj.html

================================================================================
来源：http://www.aibaodan.cn/163ilpuybuu.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163aptjwukw.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163rmfoltyy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163sjhyazav.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ocjbicdw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163nhaqdicd.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wujzupfx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ltzmkzco.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163mimanbxq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dildooyr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163uolthzsu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163irhsjwxr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ffllypno.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163iqxvgnlf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163lfsnthcf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163azbuapgj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163hllltaub.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qmzgrbro.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163hzavdaev.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163bpmupysb.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163yvylrhbn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qhiyvzod.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xtbijanr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qipxybds.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163jxywawyg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163hhkquukp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163smemmepq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163zyfgkxpa.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163mvtprrhn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163fyrxxtnp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163fwfzzbul.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163mqafibhg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163oideqltz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163gcydowqf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163kivjudra.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nubzcfdl.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163uxdihjtq.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163fyvcimvh.html


<!-- 参考信息 -->