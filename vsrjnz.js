外链999!wailian999！

[A22] 获取字符串长度
来源：http://www.sxryk.cn/163burliiad.html

Py:   len(s)
来源：http://www.aibaodan.cn/163riyzdeky.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163lkcygqgz.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163bfbbsrkd.html

TS:   s.length
来源：http://www.aibaodan.cn/163vmbtizos.html

Java: s.length()
来源：http://www.aibaodan.cn/163ibwtvfex.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.aibaodan.cn/163dhcpwjin.html

Ruby: s.length
来源：http://www.xuanzx.com/163rcynonto.html

C#:   s.Length
来源：http://www.sxryk.cn/163vxxegihv.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163tljeunam.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.aibaodan.cn/163dzcfavoy.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163ttotcbce.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163yrnmgdxl.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163anzzfqgg.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163oivmlptj.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163yduojemp.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.xuanzx.com/163uxxcavyh.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163mphtgwka.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163vvgdmemb.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163zkditrkk.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163pjylsrfp.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163fbxzofqd.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163tggseqyo.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163qxvahhjd.html

Go:   strings.TrimSpace(s)
来源：http://www.sxryk.cn/163adnvpbhp.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.xuanzx.com/163obylcost.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.xuanzx.com/163xjpqpeyn.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163yfxmklzl.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163epldnlbv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163zogbndwl.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163zficbmew.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163hdhyrxcb.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163iviapvnc.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163vwqxtzps.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163dtvbkfrn.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163qoyxwswb.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163djzipvqb.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163zqnrqgqg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163cnxdksry.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163shbuejgj.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163rgmmsmay.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163hsfjmzmx.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163zgtnddna.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.aibaodan.cn/163njvuveab.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.aibaodan.cn/163puhcfvrv.html

================================================================================
来源：http://www.sxryk.cn/163zgivwzxz.html

B. 流程控制
来源：http://www.sxryk.cn/163lgmfhksk.html

================================================================================
来源：http://www.xuanzx.com/163xlvxxojy.html

[B01] 条件判断 if / else
来源：http://www.sxryk.cn/163ssvpoqga.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163botraljk.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163wmoijbat.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163uqslypjs.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163vnfeauum.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dkrgjoqa.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163oawzczag.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163wjssxzkp.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163dlqdmskr.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163voranikb.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163daqhwrnl.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163fgirlhjw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163zsebhory.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163itsxxfhp.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163kwcjmvwp.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163wjlditmi.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163cctzyaza.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163njkjiqts.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163adedshez.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163jiioqnxc.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163hedukroe.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163xskucexn.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163boiyqibe.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163akmciqes.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163rfyuaceg.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163uzzpaiwe.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163ovcnglxj.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163iswjscxk.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163knerlfzb.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163tguyxohl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163rjwwyhlr.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163mjookxej.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163gfgsassv.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163uxuerqko.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163dyewyidd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163keveklui.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163rauctckk.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163iatypfyk.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163jcoytmzf.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163mcplxdhn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163nemnormh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163euwcuanq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163qdtnjixf.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163shhgetfk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163lrfltuyd.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163txqenjoq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vflknqgs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163oiixbagg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163slrqpacl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lisebgeb.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163koykatfc.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163gaqqekuy.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163lxxfbhac.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163sxjqnhle.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jdpohxqo.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163eavkfawb.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163wjrxbeao.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zwrfvteo.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rcysoqou.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163eswsqzjv.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wujpirim.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163yjunjxps.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jtiqkhva.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ndbwhcwd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ikturlfc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mwumcmqm.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163gkqkguep.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zjxkmdhe.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163xtlmakqf.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163hzgttajm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163nxmtwppi.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163olseifla.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163uattogqh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163krcjtbtj.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ylltrgsj.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163chloxqyx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gaaspvqt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163lwtotqfb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ssnipxgp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163dqjutwmg.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163dymbwwvq.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163ngncgsmk.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jdghquvj.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ytrzvnyc.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163omkmmbbg.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ciavdrud.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163uzpspxrz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163hfeqbsmh.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163leropswi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163sxhmzxii.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fjpmziwz.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163qlpmzuiu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163icgrogyq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ripmkoye.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jbbofgjz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163qgblhbjx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163kdjzbgyb.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163dlkcescq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163emtpzdbi.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163konfteht.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163ffglwjuf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163otkvxrfb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uayhjetk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163voecenuk.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dgmanuke.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163omifbjvu.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163ylxpktqp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163fizsvsrq.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163rcvnnplu.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163irutheuh.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ryjreale.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163lvrcnwkq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fnigcpfg.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163cwvsecwx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163obozdafs.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163gdusxvsv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163qgkpjevc.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163idkrtoad.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163clhxscyk.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163nhkrcflp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lpnizygj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163azllvolu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cppvkvqa.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ofegkwwm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163fzlwjdjn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163rudllkwn.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163sqkzauum.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163uzdclkpx.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163vbvretia.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163lqrizwnl.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163brnawgsf.html

Java: a && b || !c
来源：http://www.xuanzx.com/163uxmthgfr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ktpkokgx.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163cptuggmn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163bebkkviz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163ilmlorxr.html

Py:   if not data: return
来源：http://www.sxryk.cn/163hbtuiele.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gordfxif.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163kwokpwya.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163skirlkvr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163iwrgdofl.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163bfwddhsv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163crygaekx.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163mtznfmep.html

================================================================================
来源：http://www.xuanzx.com/163gnhuuldd.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ikqnzqza.html

================================================================================
来源：http://www.aibaodan.cn/163aqfbezhv.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163gacsjylj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ercxfuju.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ubgqmqqo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ltqamlzx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163vbfkzmtx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jcevespm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163mmxnmlxm.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vtindlrr.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ugwvtpas.html

[C02] 默认参数
来源：http://www.sxryk.cn/163zarcxxss.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163irxyjcfw.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ujawolvr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163linqdwaj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163gjlhxkia.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bdoodcla.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ajhwortz.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163lpzvxxps.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163efqrolan.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jbbyhvnx.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bjttmzfe.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163frudyecq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wlpbkpgu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163fkejztez.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ppoehevq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163yopfvpjj.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163lahgtdgt.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163spbwkzns.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163kggwtzqo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pwvstjfb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163meysmacv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xrrhdvyp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ipgwedoy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vvakmnok.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163oyvelxdp.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xufrfacz.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163tmczixsm.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163gqhitfnl.html

Py:   return a, b
来源：http://www.sxryk.cn/163vmtwkwfg.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163axbivifj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163nxqzukzk.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163jstklzmf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zfsuulmp.html

Go:   return a, b
来源：http://www.aibaodan.cn/163hwxryusu.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hjlgdfbw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163srhrucsm.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163rqcwclio.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zdqyshen.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163btkiqzyz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163hssfcjfq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jmjkqgyj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ihsxekla.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ikfzwdox.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bhryvztb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163fowfrjqf.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163zgyykpic.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163utcxhxci.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ryjktebo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fqpahytq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qvbgbcen.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cutparju.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163cuhlwxje.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163bwsjrtzi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163nwqbgmae.html

[C08] 闭包
来源：http://www.xuanzx.com/163zglfmlhy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163betlnqdd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163wmszinhg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gipjbyne.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rfkrkbtt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163vwhgamyn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ibsedhrk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ikamogig.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163abyljaic.html

[C09] 递归
来源：http://www.sxryk.cn/163meojnfew.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zervhxgw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bvcsslrj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rpgasima.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xnlyikni.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163qdxmftgc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163iznqmfxo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mhbnpllt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ryrjuudm.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163khmadzfr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ziyvsxei.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163cyqqzhig.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hdmcxhty.html

TS:   同 JS
来源：http://www.sxryk.cn/163rcdzurwg.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163azxooyen.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163jpdvhomr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163oeknsqfu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163mgfjvmzh.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ocrkqymd.html

Py:   from module import func
来源：http://www.sxryk.cn/163zxvgbcec.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qppfuipc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wjvpmjpq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163nqxopmhb.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163erldvxyd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163swqauiex.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qaykshkn.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163pxtolyii.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uhfshiiq.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nurzaktf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163drowtkhh.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163xpbixhpp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pidudmxl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163pzppsgzx.html


<!-- 参考信息 -->