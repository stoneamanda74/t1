外链999!wailian999！

Ruby: value = data || "默认值"
来源：http://www.aibaodan.cn/163qpqznxnb.html

C#:   var value = data ?? "默认值";
来源：http://www.xuanzx.com/163xgnalsbf.html

[A16] 真假值判断规则
来源：http://www.xuanzx.com/163imitexem.html

Py:   if not x:        # 0 "" [] {} None 均为假
来源：http://www.aibaodan.cn/163ugtvivyj.html

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163eyhdhjky.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.aibaodan.cn/163fcflswgo.html

TS:   if (!x) {}
来源：http://www.sxryk.cn/163xbvaowhk.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163dmijtrah.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.sxryk.cn/163hdjqnijp.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163lfswkris.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163wtatuzcm.html

[A17] 位运算
来源：http://www.xuanzx.com/163ntkuasuu.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163itiauqkx.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.xuanzx.com/163qranqwyj.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163hdnlgdvf.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.aibaodan.cn/163vitlwyis.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163kypljonm.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.sxryk.cn/163ifxiowvh.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163njmscmxj.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163iienisiv.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163fxcpcuof.html

Py:   ord("A"); chr(65)
来源：http://www.sxryk.cn/163qqzwdrap.html

PHP:  ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dylvjadv.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.aibaodan.cn/163iejyiyrq.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163kygffuyd.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163xwcoogct.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.sxryk.cn/163hlxrpvzh.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163pckwgisz.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163pdrlxvct.html

[A19] 交换两个变量
来源：http://www.sxryk.cn/163jhunlsvo.html

Py:   a, b = b, a
来源：http://www.sxryk.cn/163jwnrytqm.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.xuanzx.com/163kimbszww.html

JS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163kyfvwamh.html

TS:   [a, b] = [b, a];
来源：http://www.aibaodan.cn/163dnzaulea.html

Java: int t = a; a = b; b = t;
来源：http://www.sxryk.cn/163naqqrpqn.html

Go:   a, b = b, a
来源：http://www.xuanzx.com/163icozgcdd.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163yrnoehrm.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163uhqfcibl.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163keiuenij.html

Py:   name = input("请输入：")
来源：http://www.aibaodan.cn/163itokftxz.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163qamgwysn.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.sxryk.cn/163qraamzxx.html

TS:   // Node.js：readline 模块
来源：http://www.sxryk.cn/163atmuqega.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163cuiuqpbq.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.sxryk.cn/163jxvcdgid.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163gslifmkh.html

C#:   Console.ReadLine();
来源：http://www.xuanzx.com/163tajgznpy.html

[A21] 保留指定小数位输出
来源：http://www.xuanzx.com/163nkvlmuhd.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163muohoaui.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163kibokmxi.html

JS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163jztgnonp.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163agixakqy.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163dywfbltk.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163uqtwxzzu.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163uxjfobuq.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163ccbwlrml.html

[A22] 获取字符串长度
来源：http://www.aibaodan.cn/163shsufrxg.html

Py:   len(s)
来源：http://www.aibaodan.cn/163ospyahjo.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163cocplvmd.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.xuanzx.com/163wwaodeqc.html

TS:   s.length
来源：http://www.sxryk.cn/163sgitfnyv.html

Java: s.length()
来源：http://www.sxryk.cn/163zkgcdhra.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163amjodnbz.html

Ruby: s.length
来源：http://www.sxryk.cn/163bsaaqndl.html

C#:   s.Length
来源：http://www.sxryk.cn/163byqpuohx.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163syexmema.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163zvsqaycl.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.xuanzx.com/163unsralvl.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163zpjueiym.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163wfygzolk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163afzlbfqe.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163rlxglqyk.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163gkfvwihm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163xxpytjas.html

[A24] 去除首尾空白
来源：http://www.aibaodan.cn/163gwfaspsp.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163dsgetptv.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163musdiiqh.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163xrdpagaa.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163smapqqao.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163lxhjpytx.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163ixvynxmi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163vefthkot.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163kslwqlev.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163rqrcbclc.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163xvfugrxj.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163vcryaknu.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163vkkixnsj.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163qvqizabl.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163fwcwrpvu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163ghxeoind.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dfuzuhuz.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163qpcwyyqk.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163riwcmbbs.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163aqysbene.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163jgigaonu.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163ncomlqmg.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163ldmplxjm.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163vcoarlve.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.sxryk.cn/163pdxvkmby.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163yaondrse.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163lzrkyypj.html

================================================================================
来源：http://www.xuanzx.com/163xoxjopjj.html

B. 流程控制
来源：http://www.aibaodan.cn/163rscmhmzt.html

================================================================================
来源：http://www.xuanzx.com/163tqedflox.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163vrzmuhkq.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163mzfzgqio.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163khutoqys.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163nohbfbey.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163ctchchup.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163rvppjzvv.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ntgcxvip.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163btrwufkv.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163juhuwsao.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163mdaptlbv.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163rqwpsnnh.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163clcovlqn.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163koykdqtn.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163bmafsrzu.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163pajufwfc.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163lkbfvkbe.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.sxryk.cn/163ltnbjnyo.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163cjzpzxpp.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163yoqjimcy.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163zwnbdiom.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163ikpfniwh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163piltuhyt.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163ialhzkja.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163ngiardwu.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163iqpcacoy.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163psukgrsm.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163dgnwprhg.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ryxqhdpu.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163uhsuhqdg.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163hunyuvvm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mugbkwck.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mobqanjg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163phunqcpi.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vigwbhoe.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163ektfthvp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163fbzjvqil.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163mapjupll.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163ovyommuu.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163ukgrplep.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163uwglccuq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163whvbonlw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163uumupngw.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163gxevahyd.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163wtzfobuu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lenhanfn.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163eewnangt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163yhvvrbmv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163hwzzxzpb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163osbwicxp.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163bhndzlrg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ncktqnzw.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163khkukelx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163ygrcgozf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163tnhgmvpa.html

[B07] while 循环
来源：http://www.aibaodan.cn/163twpkevua.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163zysbsvvy.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163namzppsm.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163crqrbsfs.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163prihezgt.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lgtyyyip.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163oezcetou.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163qwpepjbk.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rxbaehun.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163hirbqgqu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xofxgfpd.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mtmeeifv.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wdvpgnyx.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jivebcmy.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vjkhyivg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163pmrlmjgi.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163oibnbhfb.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ikopklfi.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163louyeojk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163xairncjh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ihexxwpy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yqbbomur.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wrzqymet.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163usqfyacs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163pqspikze.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163aipetkot.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eugscfjc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163bzhmxcvt.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163alxgsnsg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163mgursenk.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163gqmeumel.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163qnwtdvxu.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163praraxlq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163zncpngcr.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163mjkzupft.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163fowpmszv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163lxbzjbnj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163qknokzjv.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163zqzumemp.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163covyioks.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163qjctyhfd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163omamdqyp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163eyzvhreo.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163qzrhwexg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163egaqivmg.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163mueomltd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163vtqukujw.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163zpxvgdjb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163twnjzmhn.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nodkgaiw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wqsloqqj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gejfbpup.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163fgvwgtjz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163vtkxfxvj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163enwpxcvg.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163dtymhtao.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qctttwdl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163vilvhcrx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163grbggajc.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163cjzgnydu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163uksyskby.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163gtqlnyqf.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163cpvitkin.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ueqdcpeh.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163bzxiugzu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163wvzzdhig.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163srdsehpy.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ltsmmnpx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163yvctzljn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hamjwife.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163mrvqtxkg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mldxpqek.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163uxaqmhno.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163nrlyqupr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163wjkqbgvd.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163yxqswgsc.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163fsxsuwua.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163bthfeffy.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163mhzlazmw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163iduolsdp.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163tdibbgbs.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163okttktzt.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163vqpyjqdx.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gsgwesaf.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163isfhsxcn.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163znqnizfj.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xwmatbys.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mgngxfus.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163cinmhffh.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nzfgdnvi.html

================================================================================
来源：http://www.xuanzx.com/163hmuqbhmd.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163amppcvxv.html

================================================================================
来源：http://www.xuanzx.com/163pwzpeecj.html

[C01] 定义函数
来源：http://www.xuanzx.com/163julimuef.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163iiegbktl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mtduvhrx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163tikmlihm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163evbqvkut.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hauyztrk.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fpeoqrac.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163frjgpjho.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dggxgvyx.html

[C02] 默认参数
来源：http://www.xuanzx.com/163gteagkii.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163oktfadjh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163trxikeau.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163wcsqfkui.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vsfnzxgi.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ezverorw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jcqsvjtm.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163rxzchwmf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163dhcbjrys.html

[C03] 可变参数
来源：http://www.sxryk.cn/163cgwryolb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163vnxtvhdx.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ozyjxzzt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fbjkyvko.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vvzxctei.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163gljoadql.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kbjimkxx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163plphxmwc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rouvykoh.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163lyhsnihd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163nryheeno.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mdymnent.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qxymayhd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zwazvhlu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163mngtfmoy.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163wicmpbxm.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nwdvxwob.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163fecovkwl.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gyxlbvtl.html

Py:   return a, b
来源：http://www.xuanzx.com/163grkhpwsi.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163oelteypq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163afytquvx.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ubszdifs.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163dtetszum.html

Go:   return a, b
来源：http://www.sxryk.cn/163flkwavdu.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163piwnnpya.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163kyotmjrr.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163rodpyomp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163fbhztmmx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163isbyrvyb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163pnlobxqs.html


<!-- 参考信息 -->