外链999!wailian999！

Py:   f"{3.14159:.2f}"
来源：http://www.xuanzx.com/163newcimwy.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163ytieeciw.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163hfpybthh.html

TS:   (3.14159).toFixed(2)
来源：http://www.xuanzx.com/163ghlileyq.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163vqduyiar.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163ufrajdju.html

Ruby: format("%.2f", 3.14159)
来源：http://www.xuanzx.com/163nbjurahf.html

C#:   3.14159.ToString("F2")
来源：http://www.xuanzx.com/163alkwhrzj.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163wezutaap.html

Py:   len(s)
来源：http://www.xuanzx.com/163ftnxarkt.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.sxryk.cn/163tyukogjm.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.aibaodan.cn/163kalzjlun.html

TS:   s.length
来源：http://www.aibaodan.cn/163xttbvtoj.html

Java: s.length()
来源：http://www.xuanzx.com/163mjdlckxj.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163haxboxhk.html

Ruby: s.length
来源：http://www.xuanzx.com/163wsvbanhp.html

C#:   s.Length
来源：http://www.aibaodan.cn/163tyoiizwa.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163qrtfpwtu.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.xuanzx.com/163zgkfcyow.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163tozaeyhq.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163uvjmaabf.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163ljcculdd.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163bfqlmlzo.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.aibaodan.cn/163zoyxzxol.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163brmpdjmm.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163usdghfqu.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163khsgbqvu.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163hkzvacvh.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163vohxshxn.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163sbktwman.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163gjvpqtyq.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.xuanzx.com/163gbjapwtw.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163nrzpebxd.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163rzmwltgj.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163qffwxfyn.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163yqnbwpvl.html

Py:   s1 == s2; s1 != s2
来源：http://www.aibaodan.cn/163pzxdmedw.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163nvhlddjv.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163glvmazse.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163xflxuxmj.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163zimyvjwe.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163opoxqwah.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163aotqsmyw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.xuanzx.com/163raqfzfxj.html

[A26] 类型转换总览
来源：http://www.sxryk.cn/163xisjmygo.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.aibaodan.cn/163wvzkepuy.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.xuanzx.com/163qtzmgbsp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163eaklsgkj.html

TS:   Number() String() Boolean() x as number
来源：http://www.aibaodan.cn/163qcwbciat.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163qwrzgwpm.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163uvajkiwr.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163nsgkrese.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163xwcrjpdr.html

================================================================================
来源：http://www.aibaodan.cn/163swlxxavz.html

B. 流程控制
来源：http://www.xuanzx.com/163fabhpzpt.html

================================================================================
来源：http://www.aibaodan.cn/163bezjqsuw.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163rvtgynrx.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.aibaodan.cn/163gzkrwlaa.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163eimemejb.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kvfqdpxe.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163jznballe.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163pfcvqmrj.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163zdfscbbg.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163cxevnihx.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163qspnhqkb.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163wffyfpws.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163xauasjyx.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163upgsjzaa.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163lesmsanu.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163cuqrggve.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163nbqjgykp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163ucgkyctw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163sostwvko.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163iypbcvhc.html

[B03] switch / match / case
来源：http://www.xuanzx.com/163ofhdqsqz.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163chwhxmdz.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163yixoyklj.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163qgxqshfy.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163whvokhwx.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163awmpvigp.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163wdsaruya.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163bnisxkcy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163mplrmiio.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163ffsjehtw.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163irlogqjn.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163oqksqjcj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163ouljvxph.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163zjsfuooc.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jmnilstj.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163vhrrzefm.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163yonbeguf.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jpsrhggp.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163thcaksek.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163yqsurhay.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163iswwztpi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ycmwhosk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163xwixhkiw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163zkdetgwt.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163xcrqbckb.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163cxttzspc.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ekynomwk.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163pprasnlm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163lsznrdex.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uubkmius.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163kuvhmivb.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163isjrjfwz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163euyvfagh.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163mejymtuu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163zulypano.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163mbccadfr.html

[B07] while 循环
来源：http://www.xuanzx.com/163jkoxxmsk.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163jnierqtb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163gwnhzepl.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lppavfgg.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gemtyacz.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wsgifoxd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163mtnbfwfl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163gxqxbght.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pjevtgoz.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163wykujwuy.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163xqtvzkad.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ustphjnf.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ajqsfezc.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163rjshhagm.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163omngyohj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163pobzlehh.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163cyovkzjg.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uwqfslbc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163tskvrsxc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163vcxffxnt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ruakilrq.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163bricunhj.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163afakyowr.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qigvnzhr.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163pbvwukks.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163msyeietr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163icqtwsfn.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163kkdmyrwg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163umfeoizk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163edqbtptl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163wunrtyyo.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163shfhpoak.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163erignxqf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163prycvxww.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163pdqtesqa.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163frodexfd.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163owctzrvh.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163dyxuaiad.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163fcqfrnvz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163ikkqlidk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163fhcgdvqk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163qdvdipjn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ghqqnmho.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163pdhgsenh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163odcwszrh.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163qerksaap.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163xvdjnsnv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163mxtrnzyb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hkvshcso.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163feojdktt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ggdgrydi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163idauohyc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163algtofku.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163nrynpahu.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163aluydblw.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ecluerep.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163bttczjrp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wzpgspyd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163qgkanjej.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163zytgucns.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163rxbgcftz.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163vzqjieop.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qdqdbqzm.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163getxxdgd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163qqogiozf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163osalmpkn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163izbmgfjn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eavxwrto.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163elkwobiu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hldbzmfl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163miwyldpv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163ezlqqvcg.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163hpjybbhz.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163wokcjvbi.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wppimsuw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163fdnqwmcn.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163dfyydngf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163jmllakqe.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163vcimkmcp.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163sgzgzwlr.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fvbpsgjl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163oaubnubs.html

Py:   if not data: return
来源：http://www.xuanzx.com/163lzfipvde.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lrwqpnru.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163yxqsuedv.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163nwcnjsux.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163egytvslc.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163jahhtbnd.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bwpqtqld.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163npupogzf.html

================================================================================
来源：http://www.xuanzx.com/163pyudfloj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zwcmhrnt.html

================================================================================
来源：http://www.aibaodan.cn/163tiuwjepv.html

[C01] 定义函数
来源：http://www.sxryk.cn/163xnyqwucs.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163dvuwaqmp.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mfwhhqkl.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163uqbbjukl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fllmpuzu.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hzurkjnd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163ryqzxfko.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163kvpomdkv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ytktezwm.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pmuuaqoe.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163znegtfzb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163yumtjrar.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163azgngopp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163wzdppdub.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163teoitkrf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163xckdpnfh.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163iombfunf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163hpesnbpa.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163oekunjvg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163zitwfdrk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163frjnpjyo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zlkewnys.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nstxiuqe.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163uzirndxp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kovhtxea.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vkabjsrz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163blsnnqld.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163imxbdlxg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163udwgpflx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163thdcpivz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pxiggujt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bowmzadr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163pwwujltx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163tjneosrj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163gsvlgbzy.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163oeovckua.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163kjscymvr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163oagouwmi.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163huydfezz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163oiuowhpp.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ejbamhlt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mznchggt.html

Go:   return a, b
来源：http://www.sxryk.cn/163zdzatwjj.html

Ruby: return a, b
来源：http://www.xuanzx.com/163iybpgwbb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163mnsmqibg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163galkbzmz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163jtxmddwe.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163msaybjkz.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163qucrhvtm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163zinheeds.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163blwdkeqr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wciwtomi.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ohvdpypw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163lflfngku.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163zvidxzwj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163sbztkfes.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163piflosqb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163uoxzwqjf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163zwscjsbe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163rytdjbcx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163gfhpzxye.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163blikidhi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163bfzwjmlw.html

[C08] 闭包
来源：http://www.xuanzx.com/163bzhwilvq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163izhfjwtq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vbksnnqj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zcratioy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jxgxpehi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ytvyedoo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163waggdcej.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163uotbtjwl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dzyocrll.html

[C09] 递归
来源：http://www.aibaodan.cn/163upeoorkw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163fvrwarym.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163cmnwomel.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nzkojvyp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ypulwxhj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163kaotqvnn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163fonvesav.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163etetvmph.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163nbexcxcp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jsibqgid.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163rhjiultx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163kfrvakdp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rdiuaokk.html

TS:   同 JS
来源：http://www.xuanzx.com/163dvofadqw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163acghcmne.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163kvknlpjv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fmpsjyxf.html

C#:   块级作用域
来源：http://www.xuanzx.com/163oxmmnchv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163yepjzsaf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163czyiglqu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163hxmnitvi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163rwwuxoiy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163mhsnbasb.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163fajpljrd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163turgywpx.html


<!-- 参考信息 -->