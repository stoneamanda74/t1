外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163hvxtvwur.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163qrtjnflq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163uwllcntc.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163mfvhkayn.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163fimgkxpq.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163mteuvjus.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163gtpstbvk.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163nmadvoab.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163fcnsomoz.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163vghezkjd.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163mhfoayej.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163hkfekamj.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163mvnajtiy.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163yelqldmh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163libgsjws.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163wozcoiqv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lgcswuuk.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163ozquqram.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163pqbhjpui.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163dueumozl.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163xjjmgccp.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ltgecxvw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163kgshupfu.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163xgiitgbj.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163wqoggvwl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163igieaifx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163gecidqni.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163lnspcaby.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163uwgrkuhw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163twvluqyb.html

[B07] while 循环
来源：http://www.xuanzx.com/163kmllxiva.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163yvqjkwqp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163hrpaosdb.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mcsiaaxg.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163fwrdtkha.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pggflikb.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163pbybcgqa.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163avcsbgdm.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163qrvomhtf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163cmlpmrlk.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163eqfbrequ.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163qqteiaqo.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163qwlkschp.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zeqeadsr.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163pvhafamw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163favjueoe.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163oqfrmhuj.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163sbcvgkly.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163cophnydv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163folucody.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163hmpqumnn.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pyrmfxck.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163fauashtk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xidhjhqm.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163bjejcgun.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bgpiiwus.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qfulfpuf.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ssbikydb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163fpbpjnkq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163xpgaefhb.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163htetekvi.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163uutbegsi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hknbtwjx.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zzjfkzkb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163mygatpxz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163nmhlyhxc.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163nhdgbnvu.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xugxyyuu.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163qkmlumck.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163aumcvgrt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xbgjqfcf.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163kwidmote.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163hdvjusag.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163hbchdscv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163dhauaymz.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163jyhqbvqa.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163rzlqbtwo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163fyodoqcq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ptjfybpf.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163teppqxrc.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xxrreaqp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163jsmcahmh.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163aausvyxe.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163qtfrltqt.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163qmikhznb.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ylmqwifu.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wnotgsjj.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nhoixxzq.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163rkiizhqz.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163thmwoyqi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163pazffrhm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163etafvazo.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163amkxnugz.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163uottigih.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163juekjesw.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163hwkkgqow.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163cxvlwqda.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tcabpbut.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mgrkwper.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163fzxurosj.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163hrruosas.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qhalaobr.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ycloqyzd.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163dvcmjkoa.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163xcikpfyu.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163aylppxki.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163cucxybcj.html

Java: a && b || !c
来源：http://www.sxryk.cn/163cqsaixgp.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163qxbusudd.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163udzdwdnh.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163hixjifcy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163vaftckyr.html

Py:   if not data: return
来源：http://www.xuanzx.com/163zsfofqnb.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jlespjbl.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163pdglkgxt.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ubwixrqy.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163ychdwuxu.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163senulmhz.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163eorywjci.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ebgirgfy.html

================================================================================
来源：http://www.sxryk.cn/163wsxtersu.html

C. 函数与作用域
来源：http://www.xuanzx.com/163crobcewv.html

================================================================================
来源：http://www.xuanzx.com/163xklokwuf.html

[C01] 定义函数
来源：http://www.sxryk.cn/163cfbodjxc.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163avqvrqqq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lrvmsbhe.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163szvzotgn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gwofetwp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xevelgqt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rrhtowpq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ydvywzjy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uqialkwu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163sjkwblmk.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163fiuqkmoh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163pqwqjqqr.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163kljoozta.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163pgegpuwr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qvjxuqbh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ienftcnq.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163wqmqauox.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163yyyssjeq.html

[C03] 可变参数
来源：http://www.xuanzx.com/163jlvagack.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163yomueyds.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dteidrzn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xxiuphiq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163cfuovglp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163aevmalpv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163kudhrkqg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163sdnpxklb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163nvblhtly.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tmnjupnj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163smgfdygp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rcauiety.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163cfqembjp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163lulydvta.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ackshgst.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163cfeeurbi.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163livlczna.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fhkyxuos.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163cfstjgls.html

Py:   return a, b
来源：http://www.xuanzx.com/163wylbgvli.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nzohohjf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163drzicxhr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mretzcal.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jogayish.html

Go:   return a, b
来源：http://www.aibaodan.cn/163nfvyfokm.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163vsujzoms.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163fcdkcwcm.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ircparrf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163etxiujue.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163rgvwycbp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163tdxyzrci.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163dmothlri.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163verlbfwp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163rjneituv.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163aymdrxxb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163hgwzyktr.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ntulxsfb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163eyjejgab.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163rhaohujj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wdyyskcn.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163kzwioxjl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163jxdhrjrw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163dhoxhwqm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163efoqamaf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ymlifbqt.html

[C08] 闭包
来源：http://www.sxryk.cn/163uqewxozf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163gkeajufh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163vadpvkys.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163perfdkvs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xjxvefbe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163syhkyqos.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163facswmsq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jqdgfueq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kkplsigc.html

[C09] 递归
来源：http://www.aibaodan.cn/163sxayjzet.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163zrpladmg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163cogowsnz.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uwcemsbu.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163smifbors.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163gyxbflpu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163uwgmxngk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qbocgsac.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163svmcnwdr.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163mhqprxvi.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163baqnifej.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163djxdaqjw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163yiukiyfp.html

TS:   同 JS
来源：http://www.aibaodan.cn/163evsttnsc.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163pvkfqbuv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nuzgdfet.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163kqcebdxk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163owbvwwdn.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163suazoumf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pbnhgnhh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163plxztkrk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163sayljsup.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gkncbydw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163flarrnle.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163rgheinjq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mspmumgj.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163smutbrel.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163hbajoinz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163zipmluet.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163eumpektk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jhmpuqim.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163atwlaumx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163rkjfycbu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gqyikixt.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163jlrqgjnu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163glgqyrve.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163jczlnwhm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163pqhfglcs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lgarikdr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xjpqdmjl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cvqsjaps.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163jrdemjtv.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163favptvxw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163zhokzauo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163fqobppun.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163nulpqbdy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hsqpohcp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ydklxhbm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163auoihssr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163zazhljcy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nlcryowk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163qaqdoonf.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163qnmgrxed.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163vbjvygll.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163vwlirpzq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pobkuiwp.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163mfuixjbx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xskgxujm.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ucojtgtn.html

Java: // 无解构
来源：http://www.xuanzx.com/163rdqoqdyb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163koejugxe.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163axyxoedo.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163wvsnbrgs.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163nqpatfkj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163yvhejbzl.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ysmrmgjk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zhzwunko.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zudtpvph.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hhpvmcsc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jedrkrjt.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163moenwuge.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163lriqzyxu.html

================================================================================
来源：http://www.xuanzx.com/163leozjshw.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163pcbekiec.html

================================================================================
来源：http://www.xuanzx.com/163fwovbkfn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163fdlfzsrp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163pfytpgck.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163gcxwtvvr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ahbikior.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ydvuqlkr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163gyzsydcc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ybaurezu.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163vzbnbhxn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xqodjqtf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163tnsljoco.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163vcgxgswf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gtgdpved.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163kymkuwku.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163lmrynwef.html

Java: list.add(4);
来源：http://www.sxryk.cn/163svsojjzt.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163vealnnfd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hbxzzrzm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163adxjmwto.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163aertmkvp.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163lnxhopqf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dnenasxy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163etsvtdks.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163lbbpoihs.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163yovrmigw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fskoxniy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163tkkyoofn.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163rtsucwad.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bbyipooq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163fqiojbmy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163akjartxy.html


<!-- 参考信息 -->