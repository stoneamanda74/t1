外链999!wailian999！

C#:   s.Length
来源：http://www.xuanzx.com/163szlxhwgt.html

[A23] 大小写转换
来源：http://www.xuanzx.com/163edoagdry.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163oyyunlkw.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163yrtbseuu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163qelfonks.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.xuanzx.com/163kqbvaqhb.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vpbuzwbf.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163imgcvqqt.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163uknhdlfh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163lcdnadxa.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163mzsyzjwe.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163pravuszt.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.xuanzx.com/163grnmlyek.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163wfhmhbvg.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163uiookdso.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163jaxipijz.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163lmpupqwi.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163hipcalxu.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163lpksgmun.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163pggqyuha.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163mthgrjec.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.aibaodan.cn/163qsnpflpx.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163chiaazgh.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163mtinqlfy.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163plzxnydo.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163qcszzttb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dyhmkiay.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163qanjbbxd.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163nfnlhjxr.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163hpulvwas.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163cjavpfzz.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163kwdzshhn.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163oomopccn.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.sxryk.cn/163yxgbours.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ygrywnju.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163hlbclpvo.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163cpdiqbqh.html

================================================================================
来源：http://www.xuanzx.com/163tbrrfkpa.html

B. 流程控制
来源：http://www.xuanzx.com/163wldsogyj.html

================================================================================
来源：http://www.aibaodan.cn/163frxdqott.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163kwbgicke.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163cmpbtlwp.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163gxehazwo.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163stuwtcnr.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163tflmdxsh.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163bgdpwsox.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163fuqbhhaa.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163eehcyjwz.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qfsdjsxx.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163bxgjrmbx.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163rensqhfp.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163cqpmzhur.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163spxtwqxf.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163wozkkilq.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163hfpcfywu.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163qrxypvns.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163ajslqayr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163fjadkxpe.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163rhoyhfwk.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163jeyceqvm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163khdswzfh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xbtxccdh.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wjwdpmxc.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163djgvinkb.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163rjnnpvhn.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163znsmutfk.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163buzuqjhs.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163daqvnkvr.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163idcyfvrb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163egrgsxjx.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163hkagpyhc.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163xwkagwux.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163rfeyuqgf.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163iqfompjv.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163irnacwlc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163qrqhepnm.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163jrsiuhcd.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163zocaawcx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163ziicorqf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163dchiwfvu.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jqdnkwqi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163pfwsnkkv.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rcuhsgle.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163pbmhijui.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163ykfgaonb.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163fbrqfdan.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163kfqcilio.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163genhxsyw.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gphuplgr.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163gxjbcjah.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163qtieecll.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163fsakhoah.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163uxejfjmx.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163txdovbhp.html

[B07] while 循环
来源：http://www.sxryk.cn/163usopbncw.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163syzkhhbh.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163pafwkyuu.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pjasurtc.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pyqqqsmv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163onnwqdlo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163dajsnnuf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163efvjesst.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zimfqmpn.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163evtxraij.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163uctlxaqw.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163fyfzegrg.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yvqdikbd.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mmegvrmy.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163husnyktu.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163mxozucwx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163xmxocvjk.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163rclehsdx.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163lireqtec.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163ixcprxij.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163xevlpfpy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163nearezwd.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cftwxlqc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dragigvm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163xtarvuav.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163hchlsogx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163gkloqzdj.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163gdirjdjo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163npbdpvpp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ugffmxyu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163pfpxlnhz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163diatzqem.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163hkqjuhaf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163emmgonkd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163bafhtohp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163nhwedfxm.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163mbxslrcb.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ueojrmvj.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163hjitibid.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ueuapvcd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fsowmzwq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163zyckvqah.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163mwjmrchd.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wcazcwei.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163eojmxpxm.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163kjcotymu.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163umfcukqm.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163znfauykj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ltwwdvyb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tqdhuuks.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163umbdficq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163betwudpx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163brnpeuwp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bjnygbde.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jlbojstt.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ssyixtnb.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163robyozqb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hrrgcpnr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wrjuakdz.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fwexhhgv.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163sobghytc.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ddeitlxz.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mnvemyhl.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163ymeszjra.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163myubbbnx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163wshetcdk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163vtpgmcdq.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163irmtguvt.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dujdewhq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163bbvktwsg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163zvqeqyzm.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163wccmegzv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163wfrubhtm.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163girccohp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163pmippzpd.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163netvzquu.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163znwbujme.html

Java: a && b || !c
来源：http://www.xuanzx.com/163gqciteyn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mlyrbrsx.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163rphfelgz.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ypplfovd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163xlxnrotr.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ycnaulev.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zstjxfpi.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163opoxhbct.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163egvszjsz.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mwzmqmav.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163zhwlottt.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kqcweaik.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163dpasltqb.html

================================================================================
来源：http://www.aibaodan.cn/163httvvfay.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kjqczvyu.html

================================================================================
来源：http://www.xuanzx.com/163ddsevlwk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163aysdebas.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163msfjolle.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163mdoiirzn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163odpkbpxl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ppuhxprj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dmgoehly.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rhwyofoe.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163llwudsen.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uvvqnvak.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163qnvozccn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fziyriwe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163crwzwvnl.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gnohcxrf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ubnruara.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jmoadqsc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zkcpjsdj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ccbjyawy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163khftybed.html

[C03] 可变参数
来源：http://www.sxryk.cn/163nhovixxr.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163zrrwqyvc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mhjehthq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ealqduyw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163skawoozw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163yjjpwxkv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163qaczjzcc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163unlpekuk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163rjnmnowj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163yfigryup.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ktzrsnkh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163kapcprbg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163obfisgpd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163urukgnry.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163blntgaur.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163uphluduv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nkaqyjkt.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vwmutilr.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163fntlnwtp.html

Py:   return a, b
来源：http://www.xuanzx.com/163dzrwhern.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kbftlahz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163mmmpnvit.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163kmnhsatj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163vvuivyve.html

Go:   return a, b
来源：http://www.sxryk.cn/163ophfrzot.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xbemphgb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163lgmuuunq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163dqamyycs.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163jbmzxano.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163asjlalab.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wzgenkfh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xtnmnvca.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163kjsrmfue.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wouhlbeu.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kopgeimo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163piwxcucn.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163ydforfap.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xawthvze.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163kiwnkcst.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qndckzxx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163waiwgtfj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163lryqobrs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163daxvbzle.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163yfdhzdvb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zfueygyn.html

[C08] 闭包
来源：http://www.sxryk.cn/163ysniawts.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163smqwbphh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163qxunvito.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xdjjrczu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ntzordmk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163kmwzzjbc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xgvandia.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163fxvcxhny.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kwoklrdt.html

[C09] 递归
来源：http://www.aibaodan.cn/163hazunkah.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dqitafej.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163xaerpllm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163liftfapq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nmiowcfe.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163klpgzkid.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163atnevmkx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163klerpucl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163svknylhn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lchvvrjj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163mbwssuys.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ulvsrsbn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163aljatdbd.html

TS:   同 JS
来源：http://www.xuanzx.com/163rrzalcsl.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qvonfeia.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163otloinwt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163aezhbloe.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ehucfpah.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163trvqemuo.html

Py:   from module import func
来源：http://www.aibaodan.cn/163enpungsp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163cujouaei.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wexyuomp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163zwnopbfo.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163jzuzmrzy.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163wdapdzto.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163jgtupugv.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vupdlpqm.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163oshbjtbr.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163oypyocrb.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163wjcgksdf.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ezojwgfv.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fjycxgkx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163twysajvk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163qeqzvive.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gtncyvsp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vxqxlioj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163lddgfthg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mongzdyd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mkgzqhmu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163kxnitfqo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163knxlkfaf.html


<!-- 参考信息 -->