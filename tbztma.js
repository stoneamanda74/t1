外链999!wailian999！

Ruby: s.upcase; s.downcase; s.capitalize
来源：http://www.aibaodan.cn/163wuwttord.html

C#:   s.ToUpper(); s.ToLower()
来源：http://www.aibaodan.cn/163gholrzkm.html

[A24] 去除首尾空白
来源：http://www.sxryk.cn/163giqrzxov.html

Py:   s.strip(); s.lstrip(); s.rstrip()
来源：http://www.aibaodan.cn/163xzpkqrsn.html

PHP:  trim($s); ltrim($s); rtrim($s)
来源：http://www.aibaodan.cn/163xnmvnqaq.html

JS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163gptobysu.html

TS:   s.trim(); s.trimStart(); s.trimEnd()
来源：http://www.aibaodan.cn/163dgdvlmka.html

Java: s.trim(); s.strip()             # strip 支持 Unicode
来源：http://www.aibaodan.cn/163hsjgbarn.html

Go:   strings.TrimSpace(s)
来源：http://www.xuanzx.com/163jabpdmpy.html

Ruby: s.strip; s.lstrip; s.rstrip
来源：http://www.sxryk.cn/163frrxlrya.html

C#:   s.Trim(); s.TrimStart(); s.TrimEnd()
来源：http://www.sxryk.cn/163jwguroxe.html

[A25] 字符串比较
来源：http://www.xuanzx.com/163tnixycwq.html

Py:   s1 == s2; s1 != s2
来源：http://www.sxryk.cn/163tjzdwsbv.html

PHP:  $s1 === $s2; strcmp($s1, $s2)
来源：http://www.sxryk.cn/163kpjicexm.html

JS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.xuanzx.com/163mlekckvv.html

TS:   s1 === s2; s1.localeCompare(s2)
来源：http://www.sxryk.cn/163sbbvvqfq.html

Java: s1.equals(s2); s1.compareTo(s2)
来源：http://www.aibaodan.cn/163ebztqqat.html

Go:   s1 == s2; strings.Compare(s1, s2)
来源：http://www.sxryk.cn/163bbwutupp.html

Ruby: s1 == s2; s1 <=> s2
来源：http://www.sxryk.cn/163eqdowrzd.html

C#:   s1 == s2; string.Compare(s1, s2)
来源：http://www.aibaodan.cn/163abqggjxj.html

[A26] 类型转换总览
来源：http://www.aibaodan.cn/163oegqmqrp.html

Py:   int() float() str() bool() list() dict() tuple()
来源：http://www.xuanzx.com/163gnpxxnqc.html

PHP:  (int) (float) (string) (bool) (array) (object)
来源：http://www.aibaodan.cn/163lzmbhcwp.html

JS:   Number() String() Boolean() parseInt() parseFloat()
来源：http://www.aibaodan.cn/163ncvtgsoi.html

TS:   Number() String() Boolean() x as number
来源：http://www.xuanzx.com/163espmiuaj.html

Java: Integer.parseInt() String.valueOf() (int) (double)
来源：http://www.aibaodan.cn/163xanajpdl.html

Go:   int() float64() string() []byte()   // 需显式转换
来源：http://www.aibaodan.cn/163vgukidcs.html

Ruby: to_i to_f to_s to_sym to_a
来源：http://www.xuanzx.com/163wrgbkjzf.html

C#:   Convert.ToInt32() Convert.ToString() (int) (double)
来源：http://www.sxryk.cn/163afjtczwk.html

================================================================================
来源：http://www.sxryk.cn/163vhsfedie.html

B. 流程控制
来源：http://www.sxryk.cn/163qnlwgmlj.html

================================================================================
来源：http://www.aibaodan.cn/163msyfrain.html

[B01] 条件判断 if / else
来源：http://www.xuanzx.com/163waiyzlxz.html

Py:   result = "正" if x > 0 else "非正"
来源：http://www.xuanzx.com/163tyricpcm.html

PHP:  if ($x > 0) { $r = "正"; } else { $r = "非正"; }
来源：http://www.sxryk.cn/163cdjkaouy.html

JS:   const r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163iniophso.html

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163hkyhghbl.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163dtqrvrqe.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.xuanzx.com/163atnfkejb.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163vsyqygdh.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163kcromjpe.html

[B02] 多分支 else if / elif
来源：http://www.xuanzx.com/163umwecrzz.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.aibaodan.cn/163kascgawz.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.xuanzx.com/163hvqqzaqy.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163rngcfdeg.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.aibaodan.cn/163mzgiqbcx.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163gbjcuoco.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.aibaodan.cn/163bktbauvw.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.xuanzx.com/163tsjouwro.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163ubabifkm.html

[B03] switch / match / case
来源：http://www.aibaodan.cn/163skpghxyc.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163zwuhbmfp.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163eloppqiy.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163pkvxueyz.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163uurmqfwi.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163zawqclqr.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163thzgwmrb.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163feqakkhj.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163kkeacfud.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163sltyvnex.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163xuyhhqzh.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163epwjnwen.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hrsudgwl.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163mmlohlwu.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163tnrjjxga.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163sueeimis.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163iefnamcx.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163jqxpycxe.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163nivqzpon.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163yoymljah.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163fpiksbgj.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163qpcxqgvd.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163pcpvpere.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163czalifyp.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163zbnfovop.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163kyhgkqds.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163xhucmfzi.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163cgfolepu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163fpliuyin.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163mpbjiroh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163azcjwjpm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163khptlisa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163iwzlkrhv.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163elxwgpjo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163qwxmqwdi.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163ivvouwqs.html

[B07] while 循环
来源：http://www.sxryk.cn/163micpmitt.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ynunuimc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163eyhtuldo.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163epinpizz.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kxkvnwiz.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163zcovnwgt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163pbemnulh.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163yvzrbhiw.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163tscosnjw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163nhcbfbzm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163kxmsljoz.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163wtygypsq.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163uxeeexwm.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vkdjmrlo.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163swjhczzy.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163ibmylfjt.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fsonpbtr.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yfnzqhtj.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163rlxnnkum.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163gfswbgqy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163ovgypnmb.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163rmjyymgr.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fistztca.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ixxxveil.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163zvwbwegl.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163tpdsvktr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bbbrqmsh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163bmmhpsud.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163bmtqliwf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163eithqnta.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163omzjauww.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163aelwycrc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163etdfstuy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163jiewbwtf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163ycyljokw.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163ncsnzafu.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163ibkewptn.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ektudghc.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163jyaaylsq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ulegffan.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163cpmrrwyv.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163sarixkxs.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xlphferk.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jtsdmaxa.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163chjrlywk.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163lmotrkfz.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163khwmmbgv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163pfstdfwx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163wisflkxy.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vnxexgcu.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pakeuftd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163fadmowna.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163utkivyzm.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163kbugdfyf.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jwdgefct.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163joxmsyhk.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163cmqqlsuz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163fdpguuwn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yboolzpu.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163xlinigwa.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163scqgduvf.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163wkprlhvp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163odnnpwun.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163jdnesbty.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163hnxislxz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163souhrmmd.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163uolbgeij.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163lyffkowl.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tfsnigeu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qdhatzvp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163jhpzlknv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163mjefefgf.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163wuvubjhx.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163lkvcmykd.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163gprkqtrs.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163rejlgwth.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163qswkzsxo.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163sozxhykx.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rrehwmxd.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dagsfyjk.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163hnvlzfya.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qrancdyc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ghwzelkf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163uqbrouhx.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ulsxhxxu.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163zhislnte.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ijvarlyn.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163dfjfapde.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163rxyfcsrz.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163jrtcfyhg.html

================================================================================
来源：http://www.aibaodan.cn/163iejslnrm.html

C. 函数与作用域
来源：http://www.xuanzx.com/163oxctqcab.html

================================================================================
来源：http://www.sxryk.cn/163azmazhnh.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163hqdjdvge.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163yzsqflkl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163gjhacfvw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ztnawoyw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qabcjzgo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uiwnupkv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163vnklateg.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163dzcrwtal.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nakplimi.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ugjsaavk.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163psgvdfnu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xovinimb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163uoftqhmq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zbifriiq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bzepstuv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163uuguqbyg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sebjlsrn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163laxgbdbp.html

[C03] 可变参数
来源：http://www.sxryk.cn/163fkqwepqi.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vhbhisyh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zyhpucvl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163byyjnqpa.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vgwqbelx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163potkrrde.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kqqsheeu.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163bomxirfl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163cfaqiguo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163loxtrrnu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xnaydgcj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ycgbgknc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xqnqckqr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163pdpzwtue.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qqzkpolh.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ehqfdhfc.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rwonwtgh.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163blauycir.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163dnqlujvd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163leqhqhum.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163dpmawndf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163cqsljcbc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bveqwxcx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163azxscssl.html

Go:   return a, b
来源：http://www.sxryk.cn/163mqbjvjbu.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fyuiumna.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jkkvvdne.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163vztsoius.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163fgyvndrp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fzwwimpf.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gmagatln.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vntekkob.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163rgxwpjcw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ozdfvouh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ewpehxlz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163iwjhxmkp.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vanmqcnc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wmrxpjdq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ydmlbpaa.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163teyiaceb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163yhbopvdn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163eztxmlps.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xvkoclxj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163fdutcysx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163nwcwvnje.html

[C08] 闭包
来源：http://www.aibaodan.cn/163podlzgow.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bekigber.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163otiaobyy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vrmusjdt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cbgsckku.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163tzmqzxhh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163fyccgaix.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163xdveygsq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nmbpqjdr.html

[C09] 递归
来源：http://www.xuanzx.com/163npvkraqd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163fooajdrx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jonbyyys.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yuhiymku.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kdsizabz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163fhuplyhx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163nyiucsed.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163kyhkqsoj.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163lhvvnvlm.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rmyitfmh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ixtbjhjr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xwvsvyhy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163cgepkkhg.html

TS:   同 JS
来源：http://www.sxryk.cn/163rvnyrpyp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dfkknyiq.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163besdiyuy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tkppnvzh.html

C#:   块级作用域
来源：http://www.sxryk.cn/163wgybwogp.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163btmaunzk.html

Py:   from module import func
来源：http://www.xuanzx.com/163xkdyqvvb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ypwzbvll.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163vxfgnzfo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163cqbodbqg.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vzjartnf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163erwnvtgj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163nrlwdyxv.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163uvtbnocj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163qegulvce.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163uktouqom.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163yudqmpwa.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rtgndzdv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fpjkgghb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163mwmasekl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163odetntea.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jwhaubgx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rkcishlz.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rvujhgmz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ceqidjjd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163gjeqjywu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ljeojmra.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163itxwzfxf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pvlnilso.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163dlqwahsk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163gzikciju.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vfawmpiy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gibwxozv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fufydpym.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163oxvlbdlt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163shtvnbvy.html


<!-- 参考信息 -->