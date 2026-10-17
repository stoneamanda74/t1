外链999!wailian999！

C#:   // 单行；/* 多行 */
来源：http://www.aibaodan.cn/163zvxmnclc.html

[A15] 空值判断与默认值
来源：http://www.xuanzx.com/163boikbhhr.html

Py:   value = data or "默认值"
来源：http://www.aibaodan.cn/163zbixnthq.html

PHP:  $value = $data ?? "默认值";
来源：http://www.xuanzx.com/163uflvdipb.html

JS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163npnkinvd.html

TS:   const value = data ?? "默认值";
来源：http://www.sxryk.cn/163nrtnnvif.html

Java: Objects.requireNonNullElse(data, "默认值")
来源：http://www.aibaodan.cn/163qmvcvajx.html

Go:   if data == "" { data = "默认值" }
来源：http://www.sxryk.cn/163ufvatxgs.html

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163cxlrdjvw.html

C#:   var value = data ?? "默认值";
来源：http://www.aibaodan.cn/163wztbuupx.html

[A16] 真假值判断规则
来源：http://www.aibaodan.cn/163rahbpmpx.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163phwgjvuf.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.aibaodan.cn/163wbuawadp.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163rrsmtnzv.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163lvjwtigj.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.xuanzx.com/163jkieylbz.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.xuanzx.com/163qvdlhtrk.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.xuanzx.com/163frwmqomk.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163osjovqvb.html

[A17] 位运算
来源：http://www.aibaodan.cn/163macqyare.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163bnxurtrh.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163odfjkmwl.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163gkjvifnz.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163ivytwotp.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163kejhvlwk.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163fqsehqyd.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163czphcjyh.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163cvlnwyjq.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163fssndsiy.html

Py:   ord("A"); chr(65)
来源：http://www.xuanzx.com/163xjlpebef.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163rtiryadn.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163ptgvvbqa.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163qbkpfuii.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ctgfsitj.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163xznyhyqe.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163lubwofkb.html

C#:   (int)'A'; (char)65
来源：http://www.aibaodan.cn/163odtexjqv.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163hsufxceb.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163tlsxeyyw.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163oikzjqje.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163vzmanlqa.html

TS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163gzlvoftk.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163iyjboxga.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163fmkyuinw.html

Ruby: a, b = b, a
来源：http://www.aibaodan.cn/163dlhhdfop.html

C#:   (a, b) = (b, a);
来源：http://www.aibaodan.cn/163lmhctmiy.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163emfhbvgc.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163caukgchn.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163boepmpqf.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163iqjfyzbn.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163tzxwbdwe.html

Java: new Scanner(System.in).nextLine()
来源：http://www.aibaodan.cn/163ohpqjwgi.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163lgugxnzt.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163raszgssj.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163aycxtavb.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163djebooyx.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163sczoycio.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ijjrphmc.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163djiuwvve.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163knrdkzfa.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163pequmbel.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163lrnxeiaf.html

Ruby: format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163gnvhphvx.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163dnwberyv.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163sbsacmnt.html

Py:   len(s)
来源：http://www.sxryk.cn/163xwnkxyek.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163ebpgjqiw.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163wnlteptr.html

TS:   s.length
来源：http://www.aibaodan.cn/163wmadrvxr.html

Java: s.length()
来源：http://www.sxryk.cn/163ckqiqqzi.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163xwjcuaxs.html

Ruby: s.length
来源：http://www.sxryk.cn/163motdpdqj.html

C#:   s.Length
来源：http://www.sxryk.cn/163plcqridb.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163shhdumzu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163tvypqlvr.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163dtiehhpg.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ourwqdpu.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163wgwnndsa.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163ivcsrwmd.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163aurifrhl.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163zzggdbyr.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lgfabzpd.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163qxwnzutx.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163podaeacu.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163drgzfvme.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163yrzsxueg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163kaxcywjg.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163tpddbjfa.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163rhcjjgaq.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163savdjoug.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163seetvknn.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163xpgcekmv.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163lnnmagxq.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163pfjxszal.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mmmufhuy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163bgzbvezl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ninusnbm.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163hmkslwvl.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dubmdqyr.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163ogpsoeic.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163ytfzogln.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163qxbzfcwy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163jxudxbmt.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163naqxtqap.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163eehrxyzj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163ohfgfzzq.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163uuroacas.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163waamdpub.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163odrxrmcp.html

================================================================================
来源：http://www.sxryk.cn/163pebnlwhh.html

B. 流程控制
来源：http://www.sxryk.cn/163wreedsxi.html

================================================================================
来源：http://www.xuanzx.com/163xwdabeqp.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163txbyrapr.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163kbzoguue.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163lhrjfjke.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163zwskgeex.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163jxnjdzxo.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wlesskzt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163ngiqoyzu.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163pfjncfku.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163nioblbrp.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163iscvgeck.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163poigdita.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163fbsfjvye.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163axlypgpi.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163yphvcrks.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163oehxxnfh.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163pasgcjlr.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163ivuiennw.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163aioezpfh.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163jkzjwadk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163ahxzavbp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163xszmkspa.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qjgjaonn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163hhznfohh.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163dihfwapl.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163cxcuttmb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163haastqae.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163izxnnbtb.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163imfgzbmh.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163bmqneatp.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ucwgufjm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163yahfbnzi.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163eskehjnu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163oywfyytx.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163wbessrdl.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163tbjrwhhu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163fgfryxcr.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163jeareedk.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jrzbwbig.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163oynorcku.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lanjyxnt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163puzubqbe.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163lruktzpl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163oryrhqwa.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163zcyzbvgi.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163bldtatrj.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163uipnpfes.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163ttkgypdp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163xibsbjcd.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hojqiybf.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163sygrushx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ewyurdny.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163tordjqhb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163puybgmnd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163yejnuqlv.html

[B07] while 循环
来源：http://www.sxryk.cn/163aiflfrsx.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163npdhcoep.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163ldmbmhtg.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hydmczrl.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163dkpkbcwa.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bvnzzthj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163ywkbdqns.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163fyozoqik.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163ghsqnhfy.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163jnkaaess.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163bynliwor.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163ujmkmvon.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ozhyjaiu.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163acdltspn.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163qetzjihc.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ubdmwzrs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163zzzcvbxx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lywfukxl.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163tamafvaz.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163hptuyykz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163oubnoyvw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163czdmorrd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qudmirqm.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dtrbgmuq.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pafevzry.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163ekaywoos.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nbdptnuu.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163stnmfiel.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163mwmiycag.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163bkmmjpph.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163xrwrhmic.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163krbonumb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163dtgsdunh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163tcsfigxf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163lkyludwt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xrvrrorn.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163emjzndet.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bmoexaak.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163tfyrhlvo.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163zlthbmki.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tegqvzlb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163bpuzdfnl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163gdujlaxe.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163gsnvqqhf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163iumckqyx.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163mebdghfk.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jbfawjqg.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ukhqvkew.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163teyjcycc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163tgooprth.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163racurfmc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163wclvtpid.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163twedxipf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qryrzoxu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163yqaocjjn.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163auummfrh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tmybgklw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nesirflc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163rljkgxbk.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163bxqagrzc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163lifykjvi.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163eyqzwoeb.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163jryyozvq.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163juxgxevw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163xzkwmxcl.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163bfsdzlvc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163iinyzrgv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163oxvlxcxd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gytmnmlv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163olfjnfkr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163chbmbbkp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163efdgvmtz.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jgacfcsr.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163psdhxzhc.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wusqwzru.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jtmlfsbe.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163owkcsfnh.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fwmqrjvq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163avoviqci.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163kwwqqeyd.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163oybtravm.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gexeabpn.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163trznqfsg.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163yfljysiu.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163uwytabma.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163vxeiijto.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cpsgyguo.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hpmbhgko.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xwghmglp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163kkebwmli.html

================================================================================
来源：http://www.aibaodan.cn/163bguihvil.html

C. 函数与作用域
来源：http://www.sxryk.cn/163krjrszvm.html

================================================================================
来源：http://www.aibaodan.cn/163ndigzdhw.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163aamcyggs.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163hqiihbtx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kocccnwp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163lxnszjpu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ducrryet.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ehafkijv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ylzkolct.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163lkrdmzgg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163szzyfhfl.html

[C02] 默认参数
来源：http://www.sxryk.cn/163czspfndt.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163kihjicsg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163vbrlpjrr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163lpaixheh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mhuoclxm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zbqqfwqi.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163feubwnfs.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163eozndjfr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163iyxzfotc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163bwlsforh.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163jhooccag.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163blrjzmmh.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xuagnlhx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163iuzjrzzx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163cccgsdaw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ssbsvmgj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163cddpejlx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163vbqdlmcn.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ewoxruvd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163kseuvdcd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ybbctmyc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qyccyvzb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jaohkcni.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qiumwmfa.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163dghctcac.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163extdyyzk.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hnxcsyjs.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163iuyxgwek.html

Py:   return a, b
来源：http://www.aibaodan.cn/163omsjnibu.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163baeuzgps.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163onqnvypz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hbipbnid.html


<!-- 参考信息 -->