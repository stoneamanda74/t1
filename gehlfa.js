外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.sxryk.cn/163zqeqgvxk.html

C#:   var value = data ?? "默认值";
来源：http://www.sxryk.cn/163ydkdikvh.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163amndxvlh.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163zqttlasb.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163aoefabux.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163dznekrln.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163ubadzrcv.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163eszcdcef.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163hzeshhal.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.aibaodan.cn/163dkuicmqq.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.sxryk.cn/163wgfqzons.html

[A17] 位运算
来源：http://www.sxryk.cn/163ofhgjypy.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163aupbavgk.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.sxryk.cn/163hwyyssla.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163oadrcgnq.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163ylljrmtd.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163rmfmylzs.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163czpbtkjp.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163jwkigbql.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163xoifkbkm.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163qfjwpuit.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163tyhqcxwm.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163yerhvcaq.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163mjrlzigi.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163gjkzmfpi.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163ajtehepk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.xuanzx.com/163jiqnstlu.html

Ruby: "A".ord; 65.chr
来源：http://www.sxryk.cn/163bfnsupby.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163cnqwnbcw.html

[A19] 交换两个变量
来源：http://www.xuanzx.com/163hsyrdcwr.html

Py:   a, b = b, a
来源：http://www.xuanzx.com/163iosacmpa.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.aibaodan.cn/163ufgzfyhw.html

JS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163erjyrotb.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163iwyjmlho.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163jxwpgpia.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163ednhdmuc.html

Ruby: a, b = b, a
来源：http://www.xuanzx.com/163mhppiabz.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163bvrhnlik.html

[A20] 读取标准输入
来源：http://www.sxryk.cn/163gymaepqn.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163mrmcjchl.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.xuanzx.com/163rtwvbhee.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163qsdyoshu.html

TS:   // Node.js：readline 模块
来源：http://www.aibaodan.cn/163rcvagrqy.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163udxxgkql.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163dsizixmh.html

Ruby: gets.chomp
来源：http://www.xuanzx.com/163mmzadkek.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163qyqzymgm.html

[A21] 保留指定小数位输出
来源：http://www.sxryk.cn/163ghvfdgvw.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163rdfwhtym.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163thkfjkuv.html

JS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163lluvfise.html

TS:   (3.14159).toFixed(2)
来源：http://www.sxryk.cn/163ubvuisuf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ehisejus.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163noagucur.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163yiflrwvr.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163apuuchje.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163yxzcqhcf.html

Py:   len(s)
来源：http://www.aibaodan.cn/163mbfhhrbj.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163qisyjljs.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163aercdybt.html

TS:   s.length
来源：http://www.xuanzx.com/163efdrrkcc.html

Java: s.length()
来源：http://www.sxryk.cn/163neneewti.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163groswrwz.html

Ruby: s.length
来源：http://www.xuanzx.com/163sdrgzgxs.html

C#:   s.Length
来源：http://www.sxryk.cn/163bljtxlon.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163yqvtdkso.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163lmnukqnk.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163jqwcayjx.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163shoedptq.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ugazebdd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163cjbbxwnu.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163sitwlyco.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163hshgjlyr.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163jsueoysh.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163wqqmjhfa.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163iybomprt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163lobpjmkw.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163srtpsalk.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163mjbkbwii.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163njnxsrtx.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163uubhmubm.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163gumshltx.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163xmgvaoxz.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163apgxlcuu.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163kjythnlx.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163kgqlbwyk.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hgdjtoib.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163tfbslbtp.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163rbvvmltq.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163ywfgwble.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.xuanzx.com/163wfyusyaw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163giljgbvj.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163nkzmnard.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163imqxneki.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163nledortk.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163piwfxina.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163cnwlncvq.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163uoxwlqbg.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163gblrujxr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163waaihgoy.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163kozhrlok.html

================================================================================
来源：http://www.aibaodan.cn/163pedqixgy.html

B. 流程控制
来源：http://www.aibaodan.cn/163iwjfglpx.html

================================================================================
来源：http://www.xuanzx.com/163mwswcatd.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163eltjxcdt.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163fagpqdyk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163eykllsde.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163jgoivsrd.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ynpmavjc.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163civdehrt.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163doryumch.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163exwvqjge.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163oeerkhyj.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163wyzgzvhf.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163iaisdecm.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163gtvmxfky.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dwnggrba.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163duqfpgdn.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163jqktcfsm.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163kmoigski.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163lcluktek.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kmubhvok.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163mjkksnwd.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163oxkzfeiq.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ndpavsjm.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163maftzcrc.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163zeczjcom.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zxynyvco.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163rvhotogv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163hnmmplnz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163vyvzaokc.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163iapkflea.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163urkszisf.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163lnjvqoet.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163jyhzamvj.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163esulkhva.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163gnreaknp.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163fdokceeg.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163pxwdtaab.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ojkuzkcp.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163rfmbhnar.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163kulhdozf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163zvqdnwkv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163cmgsqhoc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163rltimvrr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163vafcfmtp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163wfuonxns.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ajflvrkz.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163drykkhhc.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163lopgqfgl.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163btvbqkmd.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163rsiegghe.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163htjfofgg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163dimwdngy.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163vszeyjcw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163dvatpmju.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ikmpwwoa.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163lddymomi.html

[B07] while 循环
来源：http://www.sxryk.cn/163gspvmmjv.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163kajduvhp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ycsdzahi.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163lzejmllt.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hesypggn.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ifjsehyy.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163rcovgtwy.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ftpvxidk.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163oqjxlocf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163aovnuanq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163hziellcw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163qdtqmztm.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xsteyruz.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163vxpmuhpg.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163bsfgpibo.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163bknijvub.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163bigdwzyg.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tbhuivuo.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163wbbndpri.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163qxqyeoel.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163pxzwgtzu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cenygabf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163tzyivufz.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163imjisrcg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163bwdhtpum.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163alclwotw.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zmpxhzmx.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163qritnmxz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163lzqrqncj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wndoowfm.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163otmgixsm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163blqxhema.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163vhlmvova.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163weirmuwn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163eatxlcjx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163xqgwctsv.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163missxhtm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163bvddoihz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163cuynotgm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ptsbuqlj.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xxttpfpd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163uouvddbx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163gidvroej.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163voaldgkj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163qvrlbwof.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163smyzqopb.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ahodwavr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nlkgddne.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ltdbnkav.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wiiqtiks.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hejtxqbb.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163qvsslpao.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163pjqfzznw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rsrnqiqr.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163kzzsrpyo.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163mkorcjrk.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ysiynndw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lblgyejp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vfgnbazx.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163oymdpkwj.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163cfhgtdjq.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163igljufpc.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163nhzdepik.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ykinlmcv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163mffxyvwc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163rbgbvohd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163csijdjhi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163akyqzckg.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163lwsftbgi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163hspaywcp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yiwpmuih.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163wkiqbvwb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ncekkkwu.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vtxexwnr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163otligoki.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ebmqgzzv.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ikfoyqaa.html

Java: a && b || !c
来源：http://www.xuanzx.com/163kmjfdklg.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163qpcxbbau.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ditiploc.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163rbamgmqr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ezqhylkt.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163hnpolfwm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vifeyack.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163qltidshy.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163yoxjbofl.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163hlbdjdfp.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ihqzklgd.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163juerwaax.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163tximlypb.html

================================================================================
来源：http://www.aibaodan.cn/163skhsgbee.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tmsyewmh.html

================================================================================
来源：http://www.aibaodan.cn/163frfopofe.html

[C01] 定义函数
来源：http://www.xuanzx.com/163zietyaek.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163morcbmrl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mlcmcduk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163fmbszxia.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fguxopwc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kcekxgoy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163gxzuesme.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163jmdnyrgi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jnaaijrd.html

[C02] 默认参数
来源：http://www.sxryk.cn/163adevbdro.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ejrrkqpq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163gtwwmvpa.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163qlghktrq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163xowhekuj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ncmdrmfw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163nopzjkkx.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163vikvbhsg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163rwqftsqw.html

[C03] 可变参数
来源：http://www.sxryk.cn/163mzqkpblg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163lnkmygnc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163jinbzmqb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kilzelcj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lfwybbpl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163xbepupyw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163gewgjpql.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163mxxhgxjj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163bmlgpikw.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163sqqlwpxa.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bhzzjzen.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163uytjxtjb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163fjwptyln.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xxfyvhgu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163fjenvyyp.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163roebiqtz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sjluqibn.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163onpsmxon.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gcymlvmh.html

Py:   return a, b
来源：http://www.sxryk.cn/163gttrfjfq.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163rakmnpwz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xcmtdmrk.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163uyqvjnnm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163stnpntna.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ypjpaewn.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163eqqzgpyr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163pthcqpyr.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ruzvpbfv.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163uurhxdfk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163nhpnazzs.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163yhqpayqh.html


<!-- 参考信息 -->