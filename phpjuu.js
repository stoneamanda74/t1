外链999!wailian999！

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.sxryk.cn/163upzhmnrc.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163dbkuwnvi.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163rsxdypil.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.sxryk.cn/163zbravyif.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163lhvijlsi.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163kckustqx.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163zasnsujs.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163wuckjdac.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163bitmirba.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163pkncjibl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hhmujjyv.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163bnfmvsga.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163voxxodlm.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163zgqypsmu.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163nwldhdcg.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163nbuvcjik.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163lrpwebxx.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163crfjfjjy.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163bacbipsc.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tldomskk.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zapsmtzw.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163taouotsh.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163cmjgybwb.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163iifedwsu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163vxoxxwza.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163cuzrxfej.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vimvopqw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163olpzyybj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163suncmpei.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163djruafoi.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163yscsaixz.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ozwunfqu.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163ocridusf.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163odnyxnfd.html

[B07] while 循环
来源：http://www.aibaodan.cn/163evagpztq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163oqssrhzc.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163agseuywc.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163wjbreeee.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163euyhfebc.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163skrlzhrd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163otinrrpi.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163cqjbgrpl.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163cyrsjglt.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163elyhekkr.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163lxcuxobk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163bepxgwpa.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163klmuthgw.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163cynbbqow.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163saqiojur.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163lhztnuvx.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163fdhwmqtn.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hwockrkc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163cgqqtlib.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163kxeklztk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ncbdrqfh.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163aazvgnol.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lsmwzxmw.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zhpxziwg.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163rthsfotm.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163ckiynndc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163hychbfzf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163auwuwncv.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163rqjdvwzr.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163fiqepcny.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163boxgbrik.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163ykpgoqce.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163mkckmmrr.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163nxvvupqx.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163stwqgkip.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163pqgtfrux.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163nfrlcyke.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ofgvrejh.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163kgwoptfj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163mcmeuisc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ehmnlxhs.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163lkguyvor.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jgbofwmo.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163psdgkbsd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163beocgwbr.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163iwsawcft.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163wieziens.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163knwdvbgf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gbjueckw.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ghkbtpik.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cukgaglr.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163rcgxktql.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163eecjqqpp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163bubhioxd.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163ghqueeks.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163gjoulnsb.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163mmffjyxk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163erwlledv.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pcybxuwz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163xhywnhzo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163cyzvveiz.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163diviqgae.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163putuqwvl.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163smtzmqmp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163rqqhckcs.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hzqdtnqj.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tzgdored.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hybfnjlr.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163johlkaet.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mfuomuuu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163mdhbbckt.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163cbaubklv.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163yasvivrs.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163mozqjror.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163xwygtvun.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163onbmhgye.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163emxuxnev.html

Java: a && b || !c
来源：http://www.xuanzx.com/163assjszug.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163xteqjyzh.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163jfuqdjpx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163etxdtohn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163fawpzkty.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163ipoganoe.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rnqshprb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163kktvvzfr.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163hsymrsxv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ndbludqk.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gpyftbni.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ymfilwdx.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bthnsfgb.html

================================================================================
来源：http://www.sxryk.cn/163shlblpma.html

C. 函数与作用域
来源：http://www.xuanzx.com/163kddpscuq.html

================================================================================
来源：http://www.xuanzx.com/163hkwyztso.html

[C01] 定义函数
来源：http://www.xuanzx.com/163apcgcwls.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ppnxpfjo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163opzvzwsf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163wcrzjaom.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xjseuubo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xedqapzo.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rfebypwe.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163fuocyrlj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163umfdxjaj.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bwhkztxw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ukxjoswy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163kgkhsdfd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163xbtvvlug.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jsbvcufd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163gcmjsefv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163avsiwxay.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163idjdbjcs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163uqkbkzru.html

[C03] 可变参数
来源：http://www.xuanzx.com/163fyttdbal.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163guvaxups.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kgyhayff.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163klrvjhcn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163shezfhfs.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wyzagtiz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163kfabowno.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163alyjozav.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163weradnfg.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163iosyauwu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163nxsgqdqu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163bdbgmkjq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163muzxxxua.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163vlbiegqw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jdikvxop.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163shtkefbl.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kdyaeuns.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ugvrdzcq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rmydkphy.html

Py:   return a, b
来源：http://www.xuanzx.com/163mgfponam.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163pcfivxom.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wzznyymc.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ohcvmcvo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163wixofqdi.html

Go:   return a, b
来源：http://www.sxryk.cn/163bujwtuck.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kntjwmai.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163dwcnftwk.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163klcvyskm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ivzinkrw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163lgtqkmmf.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163esdmvgom.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163yofazcah.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163dlebnlyu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ogmevvsh.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tykejnje.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163smvudxel.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163elwzllwl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163sqovuame.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163odtptxld.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163nzbddthp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163bdirgvyd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163httxiwih.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163stazokyi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vxkhcyev.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163atteduxg.html

[C08] 闭包
来源：http://www.xuanzx.com/163kfebfsch.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163uewhaabc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163vkrsukum.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bcwenyrl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mbtkmrvf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ronkywmp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163urkkanwo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163xbylmcso.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163txiybhbq.html

[C09] 递归
来源：http://www.aibaodan.cn/163udmhrwpr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qcjlfydv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163agoxqikg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fiydwoax.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hwoxjyij.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jccqfnof.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163xgiazpsi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163cvucoqxu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163gbipkanb.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163azspqcsc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qjmrczmi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163qsarekkn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zeeybtlt.html

TS:   同 JS
来源：http://www.sxryk.cn/163rgrrqyor.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163szfjtwnm.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xcufzdwn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163niuwayjn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163arldjnuz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163zkjybhlt.html

Py:   from module import func
来源：http://www.aibaodan.cn/163tponyzbe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163kqnatkye.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163nqfqvllc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wacoocga.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163dnapahsc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163pnpmoata.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163eannojao.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163jxjxyohq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163bzgbbajv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hloiavaa.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163fvifqtvv.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163iiydekuq.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dykmzpqe.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163sxnhkwzf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163vaojsalp.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jnpjswgg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163dojrhwws.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163wqpvglcp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163nxcxfdac.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163obnlxeey.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163cbmznfzy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xekagcmk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kguxkgau.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163eduweqcu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163rhtexcwm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ctlbezza.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ybhbjxap.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pjtchepl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163rcwditpj.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163pciealuz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163gkfstiom.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ofggfhjl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163lwnllagb.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163lppywsqh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163fgzcfcbp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163xxignhvi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163sgiqdbwt.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163rdiuwfjt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xjtwrxhz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163eeeqfycb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163iosgukiu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163xqotnvqp.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lkuocxqz.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163norgiazk.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163lqarswat.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163pdmeitaf.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lreopbgs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163nytohjfv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163onaeuzlo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163roclysvy.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163mrnztbjq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163eurybzhv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163yxtgzcrx.html

================================================================================
来源：http://www.xuanzx.com/163mutnqdxs.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qpbgfeao.html

================================================================================
来源：http://www.aibaodan.cn/163ihihozaj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163etpoodoi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rkitqzev.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163mwqhkgdr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xrzyfilk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163axkhvkbr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163rlvdfymv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163nfztigsf.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rcstttnb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163upnaihrp.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qdpyvtlr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163jjswomyq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163prqxnfie.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163tiekzynv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ihgpbymv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163gaypeoai.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lezqmgzk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163nbsendvm.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163saqmnmww.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163cozjamtz.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163fzoomvky.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163muopucfu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163evdzismq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163rxlbubvm.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yjzlivhh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163ccviamdc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163lgdgyxdy.html


<!-- 参考信息 -->