外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163vydffbvt.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163vdnopwbh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163egyirfoo.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163jdzmlujf.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163mwgkiiie.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163nsgqznfm.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163uiwyrukd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163xfpkxxea.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163ufnzbujv.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163aaeglhrv.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163qbpcomoo.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163ygnovuhv.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163rfthgpgh.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163ompknibg.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163ekbryjde.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163pycwdrau.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163xcslwmyf.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ywusnerw.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163vnpbixfg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163khyztlrt.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163djoclfaq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163joitkiyg.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163hhqzowfp.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ssmzsgof.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163fwfpmgrw.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163ndorjmax.html

[B07] while 循环
来源：http://www.sxryk.cn/163cgevnpxq.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163uxbcuzgd.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163mmwicrok.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ywcpuoih.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ewbjhkgc.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163oykxstyk.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163qtroymmw.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163dwgnbwcx.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cmxvxnfn.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163ugymzbis.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163aeremfff.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163iswbxmpl.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163otmoztew.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163husarfwx.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lofsltht.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163qeayqpim.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163pwysaapl.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163lltqmdep.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163xmsfryfh.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163lxwwiyzh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163mmnoqkym.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163meflolxc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163iamiykfe.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163mxfwanht.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163hluzjnwa.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163dxnfjtos.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qtbgugkj.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163uxklgfid.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163xuozqyzq.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ijpoucaw.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163elfwphby.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163cbqugotv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163mptcjjvt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163fidlwssg.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163gsnkasjl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163tbzgmgkf.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163nqzonscm.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163svqhkgam.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163sfitfdgd.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163uzxwngmi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fprqugcp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163xuxoxcvj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163ftlppmlm.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163yfrsvsqu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163shpdqmyw.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163kcgabaci.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ufzmtjaz.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tmrectpk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163fmzsvkxo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163jovcfbgp.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163cnxlnoho.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163julcyewv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163lsjsblwz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163athjmfsp.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jyderfse.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163qvzmalxv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163lpiceope.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kuucalzh.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163knpwykpj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nyrrujer.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163wekfypwn.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163veawtopo.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163vbwikhws.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163rpguxiii.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gevlhzhx.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163dqnnbbkn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mrqhcqdr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dacecbnb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163drjupqgt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ftndtkrb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ampjgjpk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zkrcsofn.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ebrwapde.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bkovykse.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163mmglcfpy.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163wpuasxco.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xdlrcyzq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163hmyhfbzb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jekkqlof.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qikotbgd.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163jtwlxkrr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163wtyufzxn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163mjdlxicm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163btmsojlw.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163wlsmkyur.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163dvkjdajw.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163sckmlhhd.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ogjpjaxw.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163sxkvpgwj.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163vlruwsyb.html

================================================================================
来源：http://www.sxryk.cn/163hiqceuaq.html

C. 函数与作用域
来源：http://www.sxryk.cn/163rlfdywba.html

================================================================================
来源：http://www.xuanzx.com/163rgkkrddr.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163ugfwxefy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163uwjfkstj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163elcncher.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ixtwurxc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163frazfcra.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163egwaswqi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163tqvmwzdt.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163lbvznjtx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kjhqgabz.html

[C02] 默认参数
来源：http://www.sxryk.cn/163cfwonulf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163cinubcbr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163wlqpjsdn.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ihreruvp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163camicohd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163dudycnmb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163gtzlnyth.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163nxffiiqn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163aoejkrce.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ubzvyhfq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ihjewgvv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vhmryufk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xfroehrg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163tbcsbunu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163rziwkhbr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lncbjrxe.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hayzjyez.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163xdqhcryr.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zlnyvnqe.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lboebtpy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ouuphmhh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163heftpegy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163sdmngccu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163iqvhozhu.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163srftibmn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wlyaspma.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vpezuiuu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163bfcbbpid.html

Py:   return a, b
来源：http://www.aibaodan.cn/163spsefpxh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lfcjlezx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163bspsbifg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163jzdvtlld.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rxweacex.html

Go:   return a, b
来源：http://www.aibaodan.cn/163scmuumex.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163zacriwqd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163yrurbkqm.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hhngecyb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163tagknjwn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163onqysbps.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163hjuzqrgx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ohjtgcts.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163smyhcayu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zilbsdse.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163fodicuhq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163vhybmaqa.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xglbqjgv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wuuhehpf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163yvvugrxm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163stqfzkvi.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163nqqjwsvk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163olumbomy.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ngwcdvcw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163tpkgpduz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qgzndnrz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163boawctrc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tbteasyv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zagqifdp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lavmqcum.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tqunrcor.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163yufcvyby.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163comwwden.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163beaesxvl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gfpcofol.html

[C09] 递归
来源：http://www.aibaodan.cn/163kwkvexim.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163zutumwyi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163phitrfzd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163uzkmcyqk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xqozghpz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163izjjiena.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163rhdjegbs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bnhcmjfp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wppfgapa.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163ucainrum.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163shogieom.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dfixbdkz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163mrfwpybg.html

TS:   同 JS
来源：http://www.xuanzx.com/163ktyjhpyq.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mzfvcgyg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163plmftjuw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163oipboqyn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163uovfqkxy.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163odxbzaya.html

Py:   from module import func
来源：http://www.aibaodan.cn/163lwfcylyo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163znhntpwc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163gswxvurq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163pghanjee.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163uslvuehn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cizhrijd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163upetgphp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163kbluprog.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163shqfxlzh.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vemcczhl.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163sspxdqfr.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kmimdriq.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jeeqzntr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ywudkhnn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hudtxdrn.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163dzdqfwlo.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163yhydvhwi.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163yxwwyliw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163euhuinux.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hcyldqtt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163clesvffq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cohletze.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bqklthid.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163vlvtibwh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163ybscybsa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163vcfdgqpt.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163mtydqbzw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ynoulbci.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163zovuenem.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163iwpnsdbo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ncxtsjgb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163mpgxyukc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163retklqoj.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163eznygkzs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163nyblckgn.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163fructbig.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163bhpcjvem.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fxbhhgsq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ysebimoz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ictehodb.html

Java: // 无解构
来源：http://www.sxryk.cn/163qnqgkqdz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163lowcwinz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wjudfwbo.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163huefvjmp.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163gztltnph.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163zmbttbiv.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163uwsaaftu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163cgoqmigj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163rewrpzub.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qxrspgno.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lohbeklo.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163uycoyqpl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163sibnilka.html

================================================================================
来源：http://www.sxryk.cn/163qvuebtkh.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wcomvllw.html

================================================================================
来源：http://www.aibaodan.cn/163whqcltdb.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163mydsanqb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xjllnxkz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bcznndkq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tdwqoasd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163vwzwlbgb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jrxkfspj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163tczkgech.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163unggcvio.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fpbmpmia.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zvgsiruf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ycmuwqqa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ayuzuuth.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gntvhrmj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163rqojciyj.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ztzmcyrb.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163foxywluq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163oaqedncg.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vtimtnzv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ehbwjbsr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163wudtmneg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lovhkdcb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163noifsezk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163odoihnqg.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fmqguoxo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ttjvxcoy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qzyqmart.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ijavpwkt.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163bzcxnseq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163fkffvibw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163waylpmdl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163klitrwxw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kwlcpano.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163hinhfdgb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ntrvtryn.html


<!-- 参考信息 -->