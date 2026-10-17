外链999!wailian999！

TS:   const r = x > 0 ? "正" : "非正";
来源：http://www.xuanzx.com/163msdsiyvz.html

Java: String r = x > 0 ? "正" : "非正";
来源：http://www.sxryk.cn/163idjnsaah.html

Go:   if x > 0 { r = "正" } else { r = "非正" }
来源：http://www.aibaodan.cn/163ghffmjsz.html

Ruby: r = x > 0 ? "正" : "非正"
来源：http://www.sxryk.cn/163fwjnxeig.html

C#:   var r = x > 0 ? "正" : "非正";
来源：http://www.aibaodan.cn/163yhkaxqlx.html

[B02] 多分支 else if / elif
来源：http://www.aibaodan.cn/163uxiukllt.html

Py:   s = "正" if x > 0 else ("负" if x < 0 else "零")
来源：http://www.sxryk.cn/163rrcprhxt.html

PHP:  if ($x > 0) { $s = "正"; } elseif ($x < 0) { $s = "负"; } else { $s = "零"; }
来源：http://www.sxryk.cn/163bikmhxkw.html

JS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163pztsczbj.html

TS:   x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.sxryk.cn/163dabpdndb.html

Java: x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163degaqibl.html

Go:   if x > 0 { s = "正" } else if x < 0 { s = "负" } else { s = "零" }
来源：http://www.sxryk.cn/163arxoknbu.html

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163kklebhik.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163lxxzsesf.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163izscudbe.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.aibaodan.cn/163frhocrzu.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163ozbfpdnt.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163cejruekp.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.sxryk.cn/163wyoducjl.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.xuanzx.com/163intulmyo.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163hpqseswz.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163muwgfhls.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163khdzavpi.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163oejjuhmx.html

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163dtikkfmi.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163hrbrqhzm.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163kurdsuxg.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163eemvfksl.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163jutdvgat.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163fwlgkoax.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163oalokzkd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163xxiwfxtd.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163xwcyzpbz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163bkzyokgp.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163lurnxtip.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163abvlzwsp.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ktbtayra.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163xtepisax.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163mocfqngm.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163konoctca.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163eaarpilh.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163wcqvxzgo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163lavrdeyo.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163hbzhqoev.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163uaqzrrqd.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163nnwsabgl.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163lmylhuvb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163xwncnkok.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163sydcivvv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vpynuzvl.html

[B07] while 循环
来源：http://www.sxryk.cn/163tzbseodp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163fmxuptup.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163akijcpwk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163umzxlizx.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163huyftgsf.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mttdpurq.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163owudpxek.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163wlyaxryp.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163suxsosut.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163wphervja.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163smaxbiju.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ranismzl.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jgrqgiqy.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yowpmcpr.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163gqmbcwme.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163vrcktuch.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163wjgijuuv.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163plabyhmg.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163dwfvvlir.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wzdzekcp.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163fvxmtnfd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163bufkgoqm.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nfoktfwt.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163pzdfclap.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ywpimfrj.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dxptqbhc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hbfpmedy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163trszauix.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163smzygfhs.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163escbovyy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bzmhivgb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163bwllmvrs.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163uycbgkhh.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163tjpkeoqe.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kpbvnwgg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163mjtfefol.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163skfjdzma.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163evmposjl.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163otadzxff.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163miknjqaa.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163oxxwoyya.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ljqbglqp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ojuwcxmc.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163odqezgdk.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163edmluurw.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ajguhyoy.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163egufxqob.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163vxacphxz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vyzvzaem.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163wdtxeppi.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kpblyjfd.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163trpvnvkh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163spbsbhbn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163afdozufg.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163iifsmvuv.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163pvxdtoql.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wdifxifz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zklyrila.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163fkptaudv.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tgatbzoo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163anqgmrib.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163oabcdorx.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mzynbhqk.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163aeaacyff.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jlxfroqm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163pfrktsra.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163sjqyfxut.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163odobbkad.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163pgvpqvrv.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163qzblyway.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163meuzgbhk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163fjpddxmd.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163xqaseujv.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jlaofdbh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163iyycphqg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mpjjdtnr.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163pxuegmcv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163utwuoyox.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163lyqmlivw.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163gnxvmcur.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163frrupuou.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rhcurclw.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163hfmbhmhu.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163nalpbvmn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ipzgpjfz.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163vxxxsfcs.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fgalqmer.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163chlewmnk.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lpbghdyy.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163bimdryqa.html

================================================================================
来源：http://www.sxryk.cn/163wclbeykp.html

C. 函数与作用域
来源：http://www.sxryk.cn/163rkqxmlwk.html

================================================================================
来源：http://www.aibaodan.cn/163ocisgide.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163lkbadxpu.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163gsvjfobs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163takfxptg.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163pgptafha.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wpyyghrr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jolhzktx.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163wptnemmv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163cafxdthq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qrqvhyus.html

[C02] 默认参数
来源：http://www.xuanzx.com/163isyagecp.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163xllmykyj.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ygnfanng.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gskpcjpq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163emkvuqwc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ebwtyjht.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163fcerraqm.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163nueogrmy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163mupwyxrx.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163izoryezu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qplekgdh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cbiacisg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hchfozbo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vgkydgss.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163gxtnhtge.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kvabqngf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ffnflmrf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163haeheibo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163sunmjvoi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fvzmxivc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163asymtohr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ywgfghzu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dfnpijxw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vhbiifem.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163kmqtcumm.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tygsklrg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zxmfpueu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163qulegcrf.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gmxkdbzb.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163jvfxzaqr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163noumyzyc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tykycqar.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nshdzixf.html

Go:   return a, b
来源：http://www.sxryk.cn/163vifitcif.html

Ruby: return a, b
来源：http://www.sxryk.cn/163iptwndea.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163srfbqalm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163zazhpdcj.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163acqgiluh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163befyqgdk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ofoqkmoi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163oubbgmjb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163bbjudnmj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163dxyclgsm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bnrpfxuq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tzscumst.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163sbiwumke.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163kdrusaxo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163akorkdwq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163bnwwnyjs.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163onsvfctp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zpzerrvs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jyjohbdl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163nhggcysw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163zurmciqp.html

[C08] 闭包
来源：http://www.xuanzx.com/163dyzrtvnk.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163hqxyikwu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163sllcjuao.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gcrpvixi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yyhzirou.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163qwakrsql.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jdisgyfk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mukybwck.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hqorxwrf.html

[C09] 递归
来源：http://www.sxryk.cn/163bikepyad.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163adymklzl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163sbcajgit.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fgrydkxu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uluvhctp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163cmszztiw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163oppcoohz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bkidldkx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ohhsiryo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163xvzcksav.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vymlcbez.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qsxwdoah.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kgjzhqsq.html

TS:   同 JS
来源：http://www.sxryk.cn/163amvodoxy.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163avsnioue.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nvupqwds.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163klsgqwkp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163hvadteiv.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ylvfkpbg.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ytwnkcdx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163hunuxelq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163habhtepc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163empwsqhf.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163bwrzguig.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qaaibctu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163glemoigm.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163eosglfwe.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wswjmyny.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163cahpbplb.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163jcuifdhq.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jhkrwyit.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qhdysnaf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cicvzsur.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ugpjlwqf.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163uflxeywo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163atumhrpi.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163dcbnfgbj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lkhnpcgr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bphkuwyb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163nlhbrplc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yultuxij.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pgsgfbcd.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163wvmsdycx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ekvncrur.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163pvnbetwc.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163vychtlev.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163kxqzzwai.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163anytexys.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163csafduwf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163mqfwqjev.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163lkaurrfy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qjabeuha.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163inbqniyx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163kcvgwatm.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vvjzppbn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163mgxfegsx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163uupemajh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163yzcuyhgs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163rglrkyiq.html

Java: // 无解构
来源：http://www.sxryk.cn/163yhelxerv.html

Go:   // 无解构
来源：http://www.xuanzx.com/163omhelknl.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163lpkqtzhi.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ryypzrom.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163lemtbldr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163tgiubkoq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163pozgisdb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bfepiqyd.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163sacwwjnh.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163uuzapaui.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163kbwwlduk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xhwsujrw.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mvocvard.html

================================================================================
来源：http://www.sxryk.cn/163mbgmpmjk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ahwzqjfy.html

================================================================================
来源：http://www.aibaodan.cn/163jfbfjnke.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163parsjaoi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163nyzimjfd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163drisxybw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163jsfhxuvg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163dubzdleq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163kmxyzvud.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163pektqrup.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163inxkqrch.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163nfbdnoal.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163vxbhhhcn.html


<!-- 参考信息 -->