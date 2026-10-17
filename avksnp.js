外链999!wailian999！

Ruby: s = if x > 0 then "正" elsif x < 0 then "负" else "零" end
来源：http://www.aibaodan.cn/163uugizlax.html

C#:   var s = x > 0 ? "正" : x < 0 ? "负" : "零";
来源：http://www.xuanzx.com/163exyjkpww.html

[B03] switch / match / case
来源：http://www.sxryk.cn/163kjlqwglh.html

Py:   {"a": 1, "b": 2}.get(key, 0)         # 3.10+ 也可用 match
来源：http://www.sxryk.cn/163qeumnaxe.html

PHP:  switch ($x) { case 1: $r = "一"; break; default: $r = "其他"; }
来源：http://www.xuanzx.com/163fphqrvoh.html

JS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.aibaodan.cn/163fatkyzny.html

TS:   switch (x) { case 1: r = "一"; break; default: r = "其他"; }
来源：http://www.xuanzx.com/163vypchsff.html

Java: switch (x) { case 1 -> r = "一"; default -> r = "其他"; }
来源：http://www.aibaodan.cn/163dkhfagom.html

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163xczpooxv.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163vuxjhwrw.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163gbrdtyev.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163jqfopfne.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163xzjtsgip.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163unuvddqj.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163okqtfqpf.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163mfdrsqnp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163zswksbph.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163uualfrqu.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163zohntyyr.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163iqimamoh.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163zagykfai.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163aylegiro.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163jnatfgnm.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163srlerkwn.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163hnhyqpiq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163agsofoob.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163kfivpdna.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ffnckhma.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163lmjtjipy.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163smeulpxu.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163ixfesmjb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163ccfypzbh.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163btvwiovn.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bcxujofv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163eidbrrkl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163bkyrppiw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163zdjynqox.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cdnqffxw.html

[B07] while 循环
来源：http://www.sxryk.cn/163zlalooqp.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163rabngquf.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163dgavvndy.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163sogupedt.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163tdmkkfhh.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163sfqqluzn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163kqiijeem.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163ancyiaml.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vhhlpbif.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163avficfkq.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163bfpkhyxg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163fvswubes.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vxgwmjqs.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163dbbeuokl.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163qpewefzr.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163wzrggmvv.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163yueelsrr.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163otueqspa.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163lgynxykk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163jclrsrcv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163qegzeuuk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163hoitratz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fckxwdvf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163znvqqois.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ujzqcgvq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bviowrpm.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uanfwaum.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163lomffvcz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xszbhmqk.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163qtshlutp.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163lzcudwkw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163rqqpkixv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163fcnogaws.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163eiudarir.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163cydufkhv.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163grwnxmns.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163tguoqmuj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ghkafrke.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163fnukoykj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163jwwwseuk.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163bedihkln.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163bvwnovrv.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163vvvciclp.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163nldkxmvp.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163cjfqmqej.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163bdmktdvw.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ufykhcfs.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163nimsjbsb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163jrhhghoq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dcdbnelm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163bnruiyex.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163wddqvkzw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163kdizupat.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163zvbuvlcv.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163lrdgycov.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163landrpch.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163edafotmk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163xzuzoqkd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163eekghxtt.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163plqaiutm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ejcwahgc.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163onozejsk.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163niiypxvl.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163hcuxrhlw.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163bvwzuygp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163noadquig.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bkahamif.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163hzwcyozk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163ghklxhet.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163paerzuqj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ebyqycxi.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163bvznkaeb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163lfpxyqcp.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163qymajqpb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lofknzhw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163rynnirej.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163lyxgpzxf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ifgklzmd.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163korqkbyv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163xyczoumu.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163mcztlbfj.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163dmehieio.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rvkzdceb.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163yqezeoap.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163brnjfzge.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163tetugtem.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ieqdjoik.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163huaovhoo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qdpbgedn.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163fahhhene.html

================================================================================
来源：http://www.sxryk.cn/163fjsmiusp.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163grvefqxw.html

================================================================================
来源：http://www.xuanzx.com/163fkeuttmc.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vcystbat.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163aodaonnz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wjusuyub.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163qcgqnalc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ztvuhwae.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hwkvausq.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163drifpqzo.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163hxwvsnpa.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hcgihqjn.html

[C02] 默认参数
来源：http://www.sxryk.cn/163tdfplskf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163qenjttlo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163xjejvlwa.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163htotewdw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ixziycfc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163chxuiqay.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163qhugkdql.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rhmvvczn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163xwltuzos.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ukjkcilp.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163rsgjgqdy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163eoonsepq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nkukailb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vzccrtxg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163pprxotkt.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xrjsvwss.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163lcnegrqw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163fnolvmkx.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163rsehkjxk.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rrxbxuba.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163hppsmhad.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163otekonmm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163egkggigh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ernwwpcv.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163jmsjgvdw.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tmctixml.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ekzqubzn.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163gutctyie.html

Py:   return a, b
来源：http://www.sxryk.cn/163ybiyhdyd.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163qyqsownq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jhsxkujx.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tqkhbaek.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nuzznbid.html

Go:   return a, b
来源：http://www.xuanzx.com/163jdlkkkey.html

Ruby: return a, b
来源：http://www.sxryk.cn/163thbkadqc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163svtdvlhw.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rpluiugh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163iiqkiprm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163bgcuzwoa.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163gpkjbmwv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ddltjtjw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hmijmsvv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163yqvgpwra.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hqdbifwm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163rdklekzf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hxdynzqu.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163kprziwjj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163iimieafl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qfsdsnhg.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163djffcksj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163pnkoujlh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163hhskhtqu.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163lfpecktf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163xwawgycb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163zteudzec.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163bbyykgkf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lcgqhqdl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wzwzvwrp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bgzqvajj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163umxwguxx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163hmkuhgfz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163qlowdomb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ypkslalg.html

[C09] 递归
来源：http://www.sxryk.cn/163gngipjzj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gkyxeqti.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163strnmefr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hgybqxrk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dnybkomd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vjknihed.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163myynyllk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163mgxvqxzm.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ckbwpwye.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163xzkxjkfh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ouwlpppf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163gymmzetg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163uwbdxcra.html

TS:   同 JS
来源：http://www.sxryk.cn/163mjrjlvyh.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ndbatrsv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163opgbmzec.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dreuyzus.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xujrkfsd.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163vvqdcfae.html

Py:   from module import func
来源：http://www.aibaodan.cn/163dmiewlps.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wnscwlas.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fupzskzx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163tkbqbnnm.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163xropntnt.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163wovvnizv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163alpzfzkd.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163hilpnoqk.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163phtkgach.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163pfjeggub.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hlziggeg.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qaifbuio.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163khuqafxx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163hvdxffxg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163hmgoddyt.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163enciicyi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163oidyfwsp.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163nicybgum.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163iukfsncs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jafohybk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mglklwfz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yrkpvsvb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cbyosekm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163wwmclsnn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163sqemznzp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jihtxdcd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163kxpgecnr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163advwwsar.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ihtmxxia.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163tnsdgpfd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163hibqwhjf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nfrnfoqo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qpeyimqz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163tuxwmuzb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bkdgjxgi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jfcvvfdt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163iwoikyou.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163klodpsok.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163kpphehvf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163zjfsnhjm.html

Java: // 无解构
来源：http://www.xuanzx.com/163ceeogfgm.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ikntplxj.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163nojgpaxi.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163kxzprxly.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qyodmobe.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163haxobonh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ztzgrebj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163sgssfxvf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163yxkkajje.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163pbusiknx.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163rwzkwyey.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163msetthpf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tthroqni.html

================================================================================
来源：http://www.xuanzx.com/163jzfjoatf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163vxfkukqg.html

================================================================================
来源：http://www.aibaodan.cn/163iqdgmajy.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163cnysqgqw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163zmykjpdx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wiqqtrjx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xmqhdoza.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nlithcnx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163iuyshfmq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163yqsteqzu.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163rzzfwshq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ytcqasyr.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163fvhcxjbx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163fwugbvae.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163tigjaltn.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163unmkemwc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163kpkchuzt.html

Java: list.add(4);
来源：http://www.xuanzx.com/163zqeruiqd.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jvpqyymb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163nstvpjdo.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163pppsuqnp.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163akwteziz.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163bzazvgfr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163szyrddwj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rxvwcpri.html


<!-- 参考信息 -->