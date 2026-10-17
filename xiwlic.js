外链999!wailian999！

C#:   s.Length
来源：http://www.aibaodan.cn/163hljxdzsa.html

[A23] 大小写转换
来源：http://www.aibaodan.cn/163vfzspses.html

Py:   s.upper(); s.lower(); s.title()
来源：http://www.sxryk.cn/163txoqzzlm.html

PHP:  strtoupper($s); strtolower($s); ucfirst($s)
来源：http://www.aibaodan.cn/163hysabcro.html

JS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163dnpwwtwj.html

TS:   s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163xvswznkk.html

Java: s.toUpperCase(); s.toLowerCase()
来源：http://www.aibaodan.cn/163obrqxipz.html

Go:   strings.ToUpper(s); strings.ToLower(s)
来源：http://www.xuanzx.com/163antvbihz.html

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.sxryk.cn/163fvqgdemf.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.xuanzx.com/163ocfogpse.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163odjkapga.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.sxryk.cn/163yvnlzhdf.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163richtrmk.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.xuanzx.com/163oibdibmi.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163pxuplvig.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.sxryk.cn/163qrcmxlvh.html

Go:   strings.TrimSpace(s)
来源：http://www.aibaodan.cn/163xwrlwodr.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.aibaodan.cn/163xskwwwqr.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.aibaodan.cn/163zzyxbsqa.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163hqwxmgeu.html

Py:   s1 == s2; s1 != s2
来源：http://www.xuanzx.com/163vvxkfhra.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.xuanzx.com/163crbeoiwz.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163ixxpjkxs.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163ypjqndvh.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.sxryk.cn/163srsqfkbu.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.aibaodan.cn/163mbbqdnke.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.aibaodan.cn/163tkqkhxkl.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.sxryk.cn/163fceodoqn.html

[A26] 类型转换总览
来源：http://www.xuanzx.com/163lcukppmg.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.sxryk.cn/163xtcwaggg.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163poligfuq.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.sxryk.cn/163ykyfhbje.html

TS:   Number() String() Boolean() x as number
来源：http://www.sxryk.cn/163wwtrlupe.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163koftechz.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.xuanzx.com/163ljoxnhqs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163qrsatmwc.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.xuanzx.com/163yoajexnj.html

================================================================================
来源：http://www.aibaodan.cn/163zkcbwlme.html

B. 流程控制
来源：http://www.sxryk.cn/163naigisab.html

================================================================================
来源：http://www.sxryk.cn/163chetrsrn.html

[B01] 条件判断 if / else
来源：http://www.aibaodan.cn/163ztwovjii.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.sxryk.cn/163lfsakbnr.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.xuanzx.com/163osgoxxrl.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163raeodejk.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163auusicqt.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163fdrhbaxo.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163pznftqdd.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.xuanzx.com/163cfmovcyo.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163znghfzjo.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163uwdjhyhs.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163ipcaqwmc.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163icsoxjrs.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dzpaemse.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163epobvjlm.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163qyoekwyk.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.xuanzx.com/163fjgegolv.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163qtamomjt.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163iszybfkb.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kudtamns.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.xuanzx.com/163kzftgufe.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.aibaodan.cn/163zaarcmpq.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dgsnqhuk.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163svrnrrqw.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163jhwakjwi.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163zogsrntk.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163jacrqzgy.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163joypsrmw.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163zamjmaaj.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163gcbybfiv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163lfbhmoov.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vohbjnxa.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163vgsicqri.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163sltodpcz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163enrtvpdd.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163kqpfggsp.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jqokgfno.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jnfodavs.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ohhwmciv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163famlynji.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163cazednsh.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hgsqglmp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163etsjmuid.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163llznvnea.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163tidvjpbo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163zcnifwox.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ulvyrecf.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163qqdnmvnf.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163bkbnyrvj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ymvgdssx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jymyqeif.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163ituukelz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163rdeolelx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163sgggahmo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163qzdvbgmx.html

[B07] while 循环
来源：http://www.aibaodan.cn/163sdmoodcu.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163kknkozkx.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163nuuxnjmj.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163amgtiwmv.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163bfqoupkd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163juhcakqw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163iviuvmwv.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163lojaotut.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gbnllpsi.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163rbzzaibg.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ktvzmzol.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ajkhrgfr.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mtubmlaf.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cgunrypa.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cmkmjcyb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163dumhzuis.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wpwiygnk.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ofnwfzgr.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163kdrotdoq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mdefvcdq.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163bzbdnzle.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163dakpbrti.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163tlvbxceo.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163obmnywaz.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163jvvpzhup.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163xnlbfdce.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vjetdhfp.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qyzndrpa.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mzxmbioe.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163fskecuzy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163udzyeveu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163cwdnekld.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zizvqryd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163uwdpaadx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163dpyehtht.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163iscprjoq.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163xzvotwug.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ezbavzet.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163mwujwvtx.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rjcedbol.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qcdwnovf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163eiuxiycn.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163rfqwdtnv.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163vafyiqkx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163oszwfcwb.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163zoevqxil.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163uonozlwd.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163nglscmnj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fseowlrm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163fptztuqt.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nixevkfp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163gqhnxoux.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ndovjjnp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zguwmizq.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163uynihjvb.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163oejeiazl.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163iykyhddn.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vqiusmja.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cjvdqqfc.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163lhsvjfwn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163zjebjnoh.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163xxljuqhp.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163uptqfesk.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163soqxfeny.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163vhumlciq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163mtzhujko.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dxwsthrl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163jnfzgvqn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163vhksyfpv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163kudnmqgb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163mjfqhcvw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163tkvyxark.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163fdwfpusl.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163lbbmchxy.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163tthqpobf.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163zgpzwbio.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163rkuaenvd.html

Java: a && b || !c
来源：http://www.sxryk.cn/163zrtbholq.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zkxswyyp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ddcvrayq.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gdhirrmt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163lfkhebhd.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qexsbydt.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ejsjlzmp.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163urqefdeg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163shjlmauv.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zxayqfau.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163vyxnbeje.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163cvdmpvmd.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163qgwftrjp.html

================================================================================
来源：http://www.xuanzx.com/163ihcavtar.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ytygglpu.html

================================================================================
来源：http://www.xuanzx.com/163etjnnhui.html

[C01] 定义函数
来源：http://www.xuanzx.com/163kgnvrhoc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163kzviudxt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qasnxndb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163aktcvvbt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163notxfopc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163opkmzyyd.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163oysdnbpx.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ggnkbphs.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yreqywrc.html

[C02] 默认参数
来源：http://www.xuanzx.com/163emxdfror.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163kovomxon.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ijmkvkrh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ksfekdzd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163osturxio.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163keooteco.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lekcssdl.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pucsppyv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nxxuctje.html

[C03] 可变参数
来源：http://www.sxryk.cn/163igqitzjg.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163rgduhobq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bpcqujbd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163juexatue.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163teaztnnh.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163pvtcudvn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163idneplpa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163uerpactq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163cgfkrqnt.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163nzdwmssm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163zkylycum.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163bhhgzdox.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vnjlqazh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163nfmlfolz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163wlaxaenv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163pfyizofi.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163pcsnacnu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163nzupbrvg.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163rxbonrqu.html

Py:   return a, b
来源：http://www.xuanzx.com/163pbquvuvw.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163btqgotof.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163suayrool.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163sqxwfilc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wlplhlyq.html

Go:   return a, b
来源：http://www.sxryk.cn/163nwclfriz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163xstodkkh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ixnsghig.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163cpirqfbg.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163niriakqt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bowfvzss.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163bhfstxzo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163gzqctwve.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163qutgdxnf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163iquacxnq.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163wsmtbwrw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fjflbsty.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163jiurzbzn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163oaibuuzk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163slhqfuyu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163qtttmike.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163wkeylnzr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163qincehjw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163nxjbzpdi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ppahpgoy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163glpjmxka.html

[C08] 闭包
来源：http://www.sxryk.cn/163gpxkjiar.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lfdvmsje.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163yjzmunwk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163qqvquitk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xkwuaqbj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ojkdaklv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vzllsoom.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gdshdyqr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bbwanoqr.html

[C09] 递归
来源：http://www.sxryk.cn/163wvfdkwgq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jbxftsck.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bvnlsieo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ecfidmfn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163goeczcdq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163mavwvlxt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163cmikrnuy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163zjdfpgtf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163dpqhnmhz.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rfqybwgs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vcexvyol.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163csxhmpgv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163rjcpolyf.html

TS:   同 JS
来源：http://www.sxryk.cn/163ewnxotpa.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163fgjzrbzs.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163oucegxoi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163mpcwiazt.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zogjpvka.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lillolgt.html

Py:   from module import func
来源：http://www.aibaodan.cn/163iaafzzpi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163northwhk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163keywvfno.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ozwchihk.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163jhfnopaj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163znxwubgd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163gnatcnef.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163mqnecqcn.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163avioigat.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163yevjxjhd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bndiullf.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kxnaaofs.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163buooepdp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163fvrldjss.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163uadvdwoa.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fdlzszar.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163okdfuoew.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fydqscfg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hlupuvzr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163srelmqvr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dnfllidh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163khhuidzn.html


<!-- 参考信息 -->