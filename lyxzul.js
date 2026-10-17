外链999!wailian999！

PHP:  if (empty($x)) {}   # 松散比较，注意 "0"
来源：http://www.sxryk.cn/163itrzasij.html

JS:   if (!x) {}         # 0 "" null undefined NaN false 为假
来源：http://www.xuanzx.com/163yjvclopr.html

TS:   if (!x) {}
来源：http://www.xuanzx.com/163sczcqmbp.html

Java: if (!Boolean.TRUE.equals(flag)) {}
来源：http://www.sxryk.cn/163npjlmeti.html

Go:   if x == "" || x == 0 {}   # 无隐式布尔转换
来源：http://www.aibaodan.cn/163embckrxi.html

Ruby: unless x            # nil 与 false 为假
来源：http://www.sxryk.cn/163mhkxexau.html

C#:   if (string.IsNullOrEmpty(x)) {}
来源：http://www.xuanzx.com/163olxvqsbo.html

[A17] 位运算
来源：http://www.xuanzx.com/163hftiocvj.html

Py:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163niofdyjv.html

PHP:  $a & $b; $a | $b; $a ^ $b; $a << 2; $a >> 1
来源：http://www.aibaodan.cn/163bcahoxbw.html

JS:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163dpgzslii.html

TS:   a & b; a | b; a ^ b; a << 2; a >> 1
来源：http://www.sxryk.cn/163dkcmhsnf.html

Java: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163ixmveevc.html

Go:   a & b; a | b; a ^ b; ^a; a << 2; a >> 1
来源：http://www.aibaodan.cn/163eakhdpnl.html

Ruby: a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.sxryk.cn/163dsymsxwr.html

C#:   a & b; a | b; a ^ b; ~a; a << 2; a >> 1
来源：http://www.xuanzx.com/163jrcnpsry.html

[A18] 字符与 ASCII 码互转
来源：http://www.aibaodan.cn/163ztgnykpb.html

Py:   ord("A"); chr(65)
来源：http://www.aibaodan.cn/163dhcljdeg.html

PHP:  ord("A"); chr(65)
来源：http://www.sxryk.cn/163zgfsibsf.html

JS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.xuanzx.com/163crjqzvfs.html

TS:   "A".charCodeAt(0); String.fromCharCode(65)
来源：http://www.sxryk.cn/163hicbetrq.html

Java: (int) 'A'; (char) 65
来源：http://www.xuanzx.com/163vkioyggk.html

Go:   int('A'); rune(65)              // rune 是 int32
来源：http://www.aibaodan.cn/163ntiskauw.html

Ruby: "A".ord; 65.chr
来源：http://www.xuanzx.com/163oprgikto.html

C#:   (int)'A'; (char)65
来源：http://www.xuanzx.com/163rwnbbkva.html

[A19] 交换两个变量
来源：http://www.aibaodan.cn/163xlfrwqqk.html

Py:   a, b = b, a
来源：http://www.aibaodan.cn/163ohvqjhic.html

PHP:  [$a, $b] = [$b, $a];
来源：http://www.sxryk.cn/163jnpsldvl.html

JS:   [a, b] = [b, a];
来源：http://www.xuanzx.com/163ucrqbebp.html

TS:   [a, b] = [b, a];
来源：http://www.sxryk.cn/163ocpyport.html

Java: int t = a; a = b; b = t;
来源：http://www.xuanzx.com/163hqttvhqv.html

Go:   a, b = b, a
来源：http://www.aibaodan.cn/163aksvlora.html

Ruby: a, b = b, a
来源：http://www.sxryk.cn/163vypeekag.html

C#:   (a, b) = (b, a);
来源：http://www.sxryk.cn/163zzeebqgg.html

[A20] 读取标准输入
来源：http://www.aibaodan.cn/163xuavynbx.html

Py:   name = input("请输入：")
来源：http://www.sxryk.cn/163etmklplk.html

PHP:  $name = trim(fgets(STDIN));
来源：http://www.aibaodan.cn/163lmtorgeq.html

JS:   // Node.js：readline 模块或 process.stdin
来源：http://www.aibaodan.cn/163prgijcpi.html

TS:   // Node.js：readline 模块
来源：http://www.xuanzx.com/163ptnyqzir.html

Java: new Scanner(System.in).nextLine()
来源：http://www.sxryk.cn/163zapvyzxd.html

Go:   fmt.Scanln(&name)               // 或 bufio.NewReader(os.Stdin)
来源：http://www.xuanzx.com/163woaopudv.html

Ruby: gets.chomp
来源：http://www.aibaodan.cn/163kuosgzxa.html

C#:   Console.ReadLine();
来源：http://www.sxryk.cn/163zbxrhrta.html

[A21] 保留指定小数位输出
来源：http://www.aibaodan.cn/163qghiqxhj.html

Py:   f"{3.14159:.2f}"
来源：http://www.aibaodan.cn/163jkbbzqya.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.xuanzx.com/163qpcirlwd.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163uinaqyxl.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163edkuvegf.html

Java: String.format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163gmiqjrol.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163jklukvco.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ntpnafjf.html

C#:   3.14159.ToString("F2")
来源：http://www.aibaodan.cn/163lppcluzs.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163kzrvizst.html

Py:   len(s)
来源：http://www.sxryk.cn/163vfevbwdz.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163apjtrcwm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163cmxfgaaz.html

TS:   s.length
来源：http://www.sxryk.cn/163kuqcibkp.html

Java: s.length()
来源：http://www.aibaodan.cn/163esdnmcxt.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163twymedri.html

Ruby: s.length
来源：http://www.aibaodan.cn/163zmueuenh.html

C#:   s.Length
来源：http://www.sxryk.cn/163vcvxutqv.html

[A23] 大小写转换
来源：http://www.sxryk.cn/163blxqbwwh.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163lyjhfman.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ltkdyomw.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163kumfnyel.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163ioppqhup.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163pxlzrinz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163wmhjoxsq.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163wtjqjahu.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163uheaiviq.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163tefkfuzi.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163molelrdm.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163uodeaxvt.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163oxjbjrwb.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163anddimri.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163wtgbisiq.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163vzbftyad.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163teesphrz.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163uwzaptru.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163qakhnsex.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163bilupukb.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163uwzdlonn.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163fwobcnhy.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163nlcmmaxt.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163wpbdolkj.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163pnucjnrf.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163oxpgnfde.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163wvwraydo.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163zkflggfk.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163vsoqlcqi.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163wyemqhff.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.xuanzx.com/163furyahhj.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163afqwadxl.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163mkhwffxc.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163lowvtfyn.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163cthxviwk.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163dbobsntd.html

================================================================================
来源：http://www.aibaodan.cn/163shvvzorv.html

B. 流程控制
来源：http://www.aibaodan.cn/163iwjotbjl.html

================================================================================
来源：http://www.xuanzx.com/163sitpvpwd.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163fyukifds.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163jatnporq.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163gmresocp.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163wykebmkm.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163wcylgxlx.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bfkywmtb.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163okyqeahd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163mfkxtzrn.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163wvlzmxlz.html

[B02] 多分支 else if / elif
来源：http://www.sxryk.cn/163eubhijwg.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163pugkwdqf.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163txkgczwx.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163qfbltrav.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163mjrkntst.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163zssqeimp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163ivmqklsb.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163hvttlhal.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163pmoczvdr.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163lyryrmif.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163txeyeoqf.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163sxxpzmxs.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wbacvwgu.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163srjsgdya.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163dgqjyfbo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163uxdqbybs.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163slpiwtiz.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163pfxnkjkr.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163bktccjso.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163gfgeabyl.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163exygintg.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163fplpajcw.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163hdkxlyes.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163bnytfvqb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163pyfrtdag.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163qbvolvwc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163fjhwjbaa.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163vulssbep.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163fxnnxnka.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163oewipeeb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163uqfnihjq.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ehqliabt.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bmfoduqi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163krmplyuu.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163zjmocjoq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163kuynccwn.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163eyzijgbx.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163nhbdwhkp.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163melyvoso.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jtwgygyu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163wbyjtcek.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163lqqzybdo.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163fhxbnnol.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163lkyywqju.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163gewevvun.html

[B07] while 循环
来源：http://www.xuanzx.com/163jrosuqox.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163umdxrofr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163qxsnrxoj.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163lrgtzyue.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163trjyhqpv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163mckyanyj.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163qxrgttsi.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163yainirop.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wztfzsvv.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163qasnqtje.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163divcgiob.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163lectzktw.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163csggjslp.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qtgombkb.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cobhhcxg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163eslzkxue.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163zxpiuafq.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163hqlwzrvu.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jghzvkac.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163cdkbyblt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163iuzoegww.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fvscipos.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163prxkgqzd.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163anrqblmy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163mspkxaov.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ftqnxohj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163othrnccb.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163lgpixigl.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163koikjnxw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163rbabcnwl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163phrxximf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163itjrtkad.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163fiwvzmlp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163nfhlftpl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ebrkoqgb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163vmhhjonb.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163cgbjxmxh.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ayhjaccs.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163tvexfayq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bkrhmjxp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163vipfiykn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163enqgzjqz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xxbmdrct.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163cstlavnm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163qiibzmgo.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163aswmxdyw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ovnomowi.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163rxvmfvau.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ztlesgcx.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ydsldsut.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hflysoyr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163itgmqtlp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163piadicjl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ifocmhzm.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163meffppvr.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163plvhuvgd.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163vfvunimv.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163thqyprfu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163bjqgljra.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163canfsvho.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163bqszxphj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163rrwwlgms.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ujpeckmg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163wnylkmcy.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gwcfzxuh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163yqynwglp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jngazqxz.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hbeparbv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163kbcfotjm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vqzkopwn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163xatuadav.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163evvcxipy.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163ynvazbem.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163feaaebsm.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163tagtbyll.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wnbwgzzw.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163sbcynkwd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pmyyqvmp.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163afxdnhdl.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ggypwvvx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xoilmmss.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gqltugep.html

Py:   if not data: return
来源：http://www.sxryk.cn/163fdksjwkm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163pupwjtgq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163pjubbyeo.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rbzflxwd.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cyefpmtc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163uhpyervn.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163tnstyxfa.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163zjuelhsh.html

================================================================================
来源：http://www.aibaodan.cn/163camstqsw.html

C. 函数与作用域
来源：http://www.xuanzx.com/163hmldraox.html

================================================================================
来源：http://www.sxryk.cn/163pwdveqxb.html

[C01] 定义函数
来源：http://www.xuanzx.com/163bhqpxktv.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163zlrirodd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kructljv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163xtloqoku.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163eqklnwku.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pzatsfpe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163sbgfcaam.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hzkczycm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xlaaqnnr.html

[C02] 默认参数
来源：http://www.sxryk.cn/163nkthigaz.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163qvgvkyof.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163juxhokpo.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163odhuacln.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wbgtpjdw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163cipinidh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163qraovhdx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163vcfbxiia.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163khijqihp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163gnhnizhu.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163icrubtxa.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163okotpczp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vfirqrvx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vrlaoeme.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163uqidmhio.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163coombwvb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163wvjzjfjq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ropvbbfy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163tyfsuixd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163sqrmhavu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163swiwakho.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dmcfyzao.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163fydmxjxv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vanwmzzz.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163zvrvcnld.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nghpsedi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cwislbtl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163pvmbvcvk.html

Py:   return a, b
来源：http://www.sxryk.cn/163upenzype.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163dmhgunck.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kvaptisd.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163aflrjwel.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163sucldtqz.html

Go:   return a, b
来源：http://www.aibaodan.cn/163gzldjlnd.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xxivodug.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163gwvvtpcp.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163untdzuxi.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163mlcvbywf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163swdfnbsn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163wepyfygr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163xptrccxp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fkgcekiw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ozgyhnoa.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163asmaujfv.html


<!-- 参考信息 -->