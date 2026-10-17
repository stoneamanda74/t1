外链999!wailian999！

Py:   f"{3.14159:.2f}"
来源：http://www.sxryk.cn/163fltnbyuj.html

PHP:  number_format(3.14159, 2); sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163foocdvya.html

JS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163txjhefrd.html

TS:   (3.14159).toFixed(2)
来源：http://www.aibaodan.cn/163thcbgpks.html

Java: String.format("%.2f", 3.14159)
来源：http://www.aibaodan.cn/163bpkdwivf.html

Go:   fmt.Sprintf("%.2f", 3.14159)
来源：http://www.sxryk.cn/163jokjohjg.html

Ruby: format("%.2f", 3.14159)
来源：http://www.sxryk.cn/163drropmbp.html

C#:   3.14159.ToString("F2")
来源：http://www.sxryk.cn/163pxflgfji.html

[A22] 获取字符串长度
来源：http://www.xuanzx.com/163lfadclfs.html

Py:   len(s)
来源：http://www.xuanzx.com/163taekujrk.html

PHP:  strlen($s); mb_strlen($s, "UTF-8")   # 中文要用 mb_
来源：http://www.aibaodan.cn/163gntzzzny.html

JS:   s.length                          # 按 UTF-16 单元计
来源：http://www.sxryk.cn/163eosootfh.html

TS:   s.length
来源：http://www.xuanzx.com/163qgdnqrwn.html

Java: s.length()
来源：http://www.xuanzx.com/163ymwfrxzb.html

Go:   len(s); utf8.RuneCountInString(s)
来源：http://www.sxryk.cn/163ohmduypa.html

Ruby: s.length
来源：http://www.xuanzx.com/163fnnikoea.html

C#:   s.Length
来源：http://www.aibaodan.cn/163kccyarun.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163eamwljin.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163qzqzmbak.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.sxryk.cn/163qprfysdu.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163gkovhaez.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163vbjyzvez.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.sxryk.cn/163lruvvdtb.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.sxryk.cn/163mbsebrlw.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163zmzxptme.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.sxryk.cn/163fdewumnt.html

[A24] 去除首尾空白
来源：http://www.xuanzx.com/163nhthcpxc.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.xuanzx.com/163ntelgibo.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.sxryk.cn/163nukyocfs.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163lvzhpnab.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.sxryk.cn/163obtpcicb.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163rbpohhch.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163mgadmkza.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163nhpcalsh.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163gnfpitnb.html

[A25] 字符串比较
来源：http://www.sxryk.cn/163ikbsfjca.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163upkzmqhg.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163vdyjsigq.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.aibaodan.cn/163xdrjrygt.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163hkytyklq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.xuanzx.com/163ihfqhyex.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.xuanzx.com/163lfqtechb.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163dzbinoyw.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163lqtfcdtw.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163iqzgcrsw.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163jutehbqj.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.sxryk.cn/163wmmujrxs.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163lzuchcif.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163qxngcirt.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.xuanzx.com/163pzulatce.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163swfbwiuo.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.sxryk.cn/163qzxhzwev.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163fhggujbf.html

================================================================================
来源：http://www.sxryk.cn/163bxstjqwh.html

B. 流程控制
来源：http://www.sxryk.cn/163lvihpdkh.html

================================================================================
来源：http://www.sxryk.cn/163zzbizhrm.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163kmnymckn.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163ycwzozhy.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.aibaodan.cn/163jhazzsme.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163cfykpmte.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163nyyxfnwl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163kdjdjcoz.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.sxryk.cn/163metjqwvr.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.aibaodan.cn/163jwtffijb.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163qnakhufg.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163ckcenqbn.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.xuanzx.com/163eiyuxaeu.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.aibaodan.cn/163kbmvrseg.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163qgvcodow.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163jmiswdwh.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163ntdeuhmj.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163srkzvmip.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163qfmgommr.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rtevjlbm.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163ahjydbcu.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163veliwssm.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163nnncttnk.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163xfqipfjm.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163wuotiugr.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163aabdghux.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163szitxika.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163vgddnslx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163bdpbnomv.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163sxeyzrhl.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163kfcawhix.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163jfmlyfpb.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163scvtlidv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tvpzxhrp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163kvzxsqur.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163rmokwmtk.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163oweyyylm.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163ygrvhqay.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163pxcemyqh.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163osckevyq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163nigdmwgt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163atpgpofj.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163adnteqom.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163mbjqpnnn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163hcklrxgh.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163mhdcxjxq.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ubndcmbm.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163hhrjftrq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163jhiyivcb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163uhxnxgyz.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uwrsiuuy.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163nothljsp.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163sdonphkd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163rjedqhyu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163oapraiyr.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163kfvdacrn.html

[B07] while 循环
来源：http://www.xuanzx.com/163ojuztjdn.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ylzsgwpx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163jndgxgrm.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163kmuibplu.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163egerndeu.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uuxtjfwc.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163dfhewjmc.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163wwjoetdm.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163hirrqiup.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jqtarerb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163yplhaxhx.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163cdidvohd.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163essjxuvs.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xeveurdk.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ksibgmlj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163fqpectnk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163nixtpwrj.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163oaohcile.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163zllbteqi.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163xwdvfssy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163qgwogzgg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163myfgqedz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163gskywevk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163wpbmdogi.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163pljfkhbh.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163aawuufio.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xxnsibiv.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163zkxexttd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163hxjhmqdx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163vuiuwyao.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163ngteuynj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163chdnstei.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fvwrfrdy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163rwkdxfec.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ehvlxvvh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163lgtwjgyl.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163rueipwkm.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163njfrzvas.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163rzqvaxdv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163gfzhgqkh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ylnioxod.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163htkobcjn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163iosaiqgy.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163tkiswvoh.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ecbqeiak.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163alfhtlkq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163svlipnpv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163aodjxkqf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163bshdjztb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tnviszll.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mhioxtcg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163aogzhadx.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163adauezqp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163rwndpkop.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163daxnqogo.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163sjqegkcb.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163lxpzqqxr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hocwufzq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hpgejtcs.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lbvyqoae.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163msgeidvz.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163alscsiwu.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163cbrkqaej.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163lhxdsvgk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vskdohqm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163efzuijgf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163sgvqyqdi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163fjzzvycv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163hdwdevry.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163kmrbcamv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163qdylxfdf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mixcrklw.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163sxjirbwn.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xxfharez.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wxximalt.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ixxizgep.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163vvzuapgp.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mstjxqwn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jyafjtcq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dcolhpud.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163qomdagqf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163vdbqsatz.html

Py:   if not data: return
来源：http://www.xuanzx.com/163gyvsuwwn.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163kkipwzwv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cwwgixrw.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163cwlgkjhm.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163cpksyqzh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163mcmibqjy.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163yexcepxd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lhraurcp.html

================================================================================
来源：http://www.xuanzx.com/163vhzvhder.html

C. 函数与作用域
来源：http://www.xuanzx.com/163iqaagjwx.html

================================================================================
来源：http://www.aibaodan.cn/163hkpuzpyw.html

[C01] 定义函数
来源：http://www.xuanzx.com/163iygaaohh.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163vwesvavy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hvrjinva.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rpkikeca.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163oisdyrjf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fdlygiso.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163etpkmbmq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163gnnkebyk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163emhggobk.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qtfxfwgr.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163anbvbgjq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163mhivjnlk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163lmhbasiq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wmaqinqw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163yeopcxue.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163eymsuhim.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163aifjkvro.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163npvsafja.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kczjokie.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163nmbewidu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163uwgvvyia.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yphcxwvi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sbcpqtjo.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163xybgdoup.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163fywlkyao.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163sylyqxec.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ukyugwuy.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163pnsrwjtb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163dhigzeoc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ouownvdt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163oylrckbe.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163zognfwum.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163zelmyqfe.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163sscyavtd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163emwigqnw.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zmaxesoq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163pbysazvb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163bqspfnug.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163nhhbqjec.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zbzsggmn.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163oanzyzmj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163qmfeyyxv.html

Go:   return a, b
来源：http://www.sxryk.cn/163wnptaxrk.html

Ruby: return a, b
来源：http://www.sxryk.cn/163egfhumos.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ylnlzjog.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163euktktyk.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163oibgyxyp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bfrieham.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163blnnywgr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mgigovjr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ghdrlzyh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163odwgrqqq.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163eyydolhk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163mhkykhdc.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163rkcewqwa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ljmuwuso.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163fehslvka.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163wprrqgai.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163rfxvqlsx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xnxqbnbo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163unfqhfeo.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163taeilzsx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163fvqmpxyt.html

[C08] 闭包
来源：http://www.aibaodan.cn/163cfsoifec.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kekhcjnm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ynoigohs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hrehjfac.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163fqxokdmb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163jmqbdwwo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ugludult.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mpiltvqw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xltynyuk.html

[C09] 递归
来源：http://www.xuanzx.com/163cgqotebn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ihyjhtcn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163cfwqvpnh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xikhuudq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qcqyesgd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ovepszmy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fyywikwg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mrbezcwh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163bqgwzjik.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163jlocskdp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163uskyrslk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163oulmygho.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qekxbuxn.html

TS:   同 JS
来源：http://www.aibaodan.cn/163nsselonw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163nhlspszn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163oaoxycqd.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hzdvdsel.html

C#:   块级作用域
来源：http://www.sxryk.cn/163axtmnegz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ggjehvnm.html

Py:   from module import func
来源：http://www.sxryk.cn/163akefxbjk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163waqseykx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rmdfxlmc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163rxaczdam.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163szukkaco.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163alitavko.html


<!-- 参考信息 -->