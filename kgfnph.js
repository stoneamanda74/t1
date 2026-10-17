外链999!wailian999！

JS:   const value = data ?? "默认值";
来源：http://www.xuanzx.com/163fegxeewz.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163gxszixrk.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163exhukzzj.html

Go:   if data == "" { data = "默认值" }
来源：http://www.xuanzx.com/163gweyvlmr.html

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163hhaazhty.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163hgzjhcup.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163cygvldob.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163rdaqkfhj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163ueagczxa.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163mvfcpcks.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163uvsrhsup.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163tamfdwkb.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163uretkvyl.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163mzwmrwgl.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163gczopraq.html

[A17] 位运算
来源：http://www.sxryk.cn/163ordpujmu.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163igccwhrl.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163emzkoapm.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163oiqzcwud.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163cirxgzvo.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163gfuyycgb.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163aiiraemd.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163fbwnpede.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163mvkqunmg.html

[A18] 字符与 ASCII 码互转
来源：http://www.sxryk.cn/163brkukzpo.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163bmftajvp.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163jatolzmm.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163jhvbaumx.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163znrvqhoq.html

Java: (int) 'A'; (char) 65
来源：http://www.aibaodan.cn/163slctztsm.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163qphwnunc.html

Ruby: "A".ord; 65.chr
来源：http://www.aibaodan.cn/163yandqpmm.html

C#:   (int)'A'; (char)65
来源：http://www.sxryk.cn/163kuimzarj.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163wcbbkazu.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163kpybulpz.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163drokkabj.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163ilfbpitl.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163splgjzys.html

Java: int t = a; a = b; b = t;
来源：http://www.aibaodan.cn/163mlthnpsc.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163sohrphab.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163nzryagzo.html

C#:   (a, b) = (b, a);
来源：http://www.xuanzx.com/163kfvgezfo.html

[A20] 读取标准输入
来源：http://www.xuanzx.com/163yfyocrmu.html

Py:   name = input("请输入：")
来源：http://www.xuanzx.com/163buvtwfgb.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.sxryk.cn/163dhrxsvku.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.xuanzx.com/163ylwcavho.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163gshmdicb.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163gxxdzsee.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163kivpijzg.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163gzpxhgew.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163psaxmdop.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163wsgcgxau.html

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163graubrhr.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163qjqdopii.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163mppyjuna.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163vmniuube.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163fqrasmwj.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163akbfnpkx.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kqkuwzno.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163tlyyipkj.html

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163ipwxqzqp.html

Py:   len(s)
来源：http://www.xuanzx.com/163xpxurgkf.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.xuanzx.com/163bpspbpzc.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163exfgghja.html

TS:   s.length
来源：http://www.xuanzx.com/163bybmpikf.html

Java: s.length()
来源：http://www.xuanzx.com/163tjfddnpb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163ntdxegox.html

Ruby: s.length
来源：http://www.sxryk.cn/163whdoosam.html

C#:   s.Length
来源：http://www.aibaodan.cn/163qztwejes.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163khmyrbca.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163jlifqbcv.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163rdafapfn.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ehsearoq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163zpumhoun.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163xzszpfam.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163dgwhkwlz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163rkeqzjay.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163vqvghzzg.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163sdtereck.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163lievgouu.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163acwloasj.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163eoddlezn.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uzqxsoeo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163amlodbrq.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163oqkwwkgn.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163gctvkbla.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163waxjojmr.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163wjqsbsxz.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163brbfmohb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163ufuirvft.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163osbcgwjj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163enwztiiu.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163fgohioux.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163llpeqfcf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163oqrusojt.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163wentozpb.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163gzhccocm.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163xwayuwkv.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163qiytbytc.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163dozgjsmh.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163pwwxllgd.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163tauibpcp.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163pmkmjfrq.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163miajhhbt.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163qrswqkyy.html

================================================================================
来源：http://www.sxryk.cn/163tosebpii.html

B. 流程控制
来源：http://www.xuanzx.com/163wukrbjnj.html

================================================================================
来源：http://www.aibaodan.cn/163mpjernya.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ksxylojo.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163wfulwfvo.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163mylxmnhh.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163rlqfurko.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163vlkrdvso.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163eqymacim.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163czqomvqk.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163zlbmszfc.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rdnanibg.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163crsbjvhv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163lvzmoros.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163aaokysjz.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163cwtydjqr.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163yitwmibx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hmmeximb.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163palqbcio.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ziwwesgn.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qfbaojlx.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163ewnmmhvj.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163loqrlsgu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163ovlhdyzf.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163lxfytxlp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vebmqyzx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163uhxsimej.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163ovkikcry.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163kxnfnaej.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163rtepqtyk.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163jqwlowyw.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163jbejzoxf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163kxpthluz.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xrpygudy.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163ihqqqbtp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163soklesfo.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163wvxyultz.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163yzyvzqoz.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163yitayzhc.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163jtowxqwk.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jpapztev.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163mwpyzhqn.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163eavfanmc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163imcgpama.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163qprvyeun.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163xdevcztr.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163yldnqvwg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163bndstzmb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163efucpylz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ihsbfcvv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163ixfkdhdl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gyrpzrcz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163frefhwju.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163zrpbyife.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163hmrtqsbk.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163tnyaqnvf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163xgnfutks.html

[B07] while 循环
来源：http://www.sxryk.cn/163ojhfjwny.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163usoyrwxn.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163eqzwslsn.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ipycvnpf.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163yconjqiz.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163otctpcef.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163bfdbrtwo.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163jcskzrqz.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hauqjsdv.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163bqmocczl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163uuldbjsn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163xuqhwuoc.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163kdsemyvj.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163mmpynuai.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fgwdsbtl.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ztausknu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163xmyoonmw.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163fmtyhyht.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rrrotwvu.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163gctmkwbl.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163mqeqbadm.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ahfaqqkt.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bfaquzbz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lwphrnxq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rdzjsqic.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163djbdlayr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163reoeipdd.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163azjzvlaj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163zwgtewfl.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163nvmukqcu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163xzgitnqk.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163dlrhkmps.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163qcepbrms.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163iuajqfki.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163ddnnkplr.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163ffucaste.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163xmlcgota.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163vhgtzddc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163dhsputxg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163lqtnubzh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163tjbdinjv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163edkozkbi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ntfqzrio.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163amgecikl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163oppbrvlq.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163qqleyasq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163aqmvjbhu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163maqtjwsv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163euieejyh.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ukqqeaqt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cgesbijk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163udmntejb.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163ppxfxoua.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163ifikcivq.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163tglsjpjn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163euawwpqw.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163npzdjaya.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163guqakdzs.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163neyqfpcx.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163cnmjjozm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163tmxpvowd.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163tlmgdwre.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163xjgciilj.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ftbnljbr.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xqengayh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163xzdgtylq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ifkkmsdn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wieehmfh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163pqmtinqk.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163nurpokpz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163vseyiibh.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163odfshiar.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163oxdjtcsp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163eybxcnqd.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163anyirpqk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163yiwxuqus.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163fkrpkebp.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pbpmnxrb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163svdrfikm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163mwcwetab.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163bxatxcro.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163jrpupkrk.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ztmflgcy.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163qnhiuqtm.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163akhzljhu.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163bqwyzswf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163pdognnzd.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jdvchmqd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jcrfycem.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163avukmnqj.html

================================================================================
来源：http://www.aibaodan.cn/163hrsoijrf.html

C. 函数与作用域
来源：http://www.xuanzx.com/163avduxmul.html

================================================================================
来源：http://www.xuanzx.com/163pekffwnl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163fvvwsmri.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qndmpxkm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163orgsedql.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163louuqjxe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163lrrrigun.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xolmwadt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163aeddcdsa.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163zspailbj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uelmipwo.html

[C02] 默认参数
来源：http://www.sxryk.cn/163hziggvog.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xpykjyrc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163cpcvvuww.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163cdnwodby.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hrhkbczv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163wlnapgzl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163iwhdaame.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163knmwyltq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163uomnpyav.html

[C03] 可变参数
来源：http://www.xuanzx.com/163gexfiwav.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163eszotnny.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ibxowyrs.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163revrrlhn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bqdnxumf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wcumncgr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163mhcyajmg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163hfqtgius.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163tdwbnwrr.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163tfdhhqja.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163frjfnvgd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163eeinceeu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163czhlziyp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163mikzsqfn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163sgrmifdr.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xvymaygv.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nsdacbbx.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163nqacowdo.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163sgvbbygu.html

Py:   return a, b
来源：http://www.sxryk.cn/163nzpxzvlu.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pymdplpf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kvvrepmm.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163lvtxlxfb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163qzmzwwrp.html

Go:   return a, b
来源：http://www.sxryk.cn/163farwwnag.html

Ruby: return a, b
来源：http://www.sxryk.cn/163jocmtgps.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163vmbknyxv.html


<!-- 参考信息 -->