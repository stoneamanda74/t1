外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163qhwrgapn.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163vjtoxivm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163gsigvsxb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163xgfpqeyw.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163tmcxfhjs.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163bdcukbqn.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163nfaveinu.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163tvbclfzo.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163ihwukace.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163ejjprzac.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163kpvbtmef.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ralldfxq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163gnhluwaj.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163trlfjaoz.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163nyruabwy.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163cijpynpb.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163oddhafyo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163ieomidwl.html

[B07] while 循环
来源：http://www.sxryk.cn/163kcptwecs.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163ftvutmey.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163pspgzxgu.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163gxbvgjcm.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zkunannk.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163owdazcsw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163wxshykfu.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163bkpwkedl.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163mjxysldh.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163zgdiooxn.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163cirkopwg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163mrymbyqm.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163wolcgxzx.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163mduzxpjt.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163vqdlqyqe.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163uazmbagn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163vmmmwvrr.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163makfxhbt.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163nbrtmlrk.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163fvopdcbn.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163mkvygywg.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cexuzyzg.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163wcculruq.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163kymvlxcs.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ywpxvzwd.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163zyhjuxbb.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163xjyviuvx.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163fbyxljgz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163iuxvcnbn.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wlqnfiju.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163hnuazxeq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163zzucurfj.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163vjzlfpoy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163lkvoycbt.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163dfhdzhfh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163myqgnshn.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163qcslwsjf.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163uajofcze.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163oolfybov.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163vivvfeni.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163bboyedyd.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ejhhbhhi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163tcpwtxxm.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163cweyjrok.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163ffttfvmt.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163pnjnzhjd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163fekeyady.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163zdpnsysf.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163wdmexcbz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163anotnfgg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yjsdoqwg.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163sbtfjimr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163lrrisbwk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163gmyorxsr.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163chlgvcbz.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163otfyhfrr.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163xsjooadp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163jtdkuudl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163djgzbvfl.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163nhfammfz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163owkbooeo.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163rvadwusm.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163xfmmiyli.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163knfrfhsc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163rsmzugcj.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163rstyxrfq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163eqwvezyv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tnbkgpwv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ebhncfgz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163tzgxqpkm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163fkyuveom.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163jwiugfrl.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163eyzffijf.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xyaittxi.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163euviuzkh.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163csmddtar.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ifyaoznx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xqngidzo.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rxwkwkye.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163zqpkrudr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163qqjzmccc.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163yazlkgyh.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ltwytaqd.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163nqhgohwo.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163aupygyvb.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163erlnmfbj.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163wfbduqaa.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gwvaanga.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163xssmnnov.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163skpiykgg.html

================================================================================
来源：http://www.aibaodan.cn/163sfgjgxzn.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vmzkcpsl.html

================================================================================
来源：http://www.xuanzx.com/163piwzhpwn.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163xebzjkqy.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163sxsuflwo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dpabyqxp.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mcpljsfx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wwsjnqcj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ievztelp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163kafihzvr.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ujybmrqe.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qzorvytw.html

[C02] 默认参数
来源：http://www.sxryk.cn/163njhcwnrj.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bnbekaxl.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163lwvhsbuc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mibyjoyr.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163lykkfnsn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163siiwdumm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163vcephthn.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163uebzfwyz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163sxhraqwn.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zemgxebn.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163rvhljwrn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cuxhiubb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163saslpilk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163zejejbfk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163yjatfpoj.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163scyxzvkf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163yfgrigjn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ydlgprav.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163pgtorhkv.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163iapqoept.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163yklwyuvs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zpuygziq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163erffirup.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163qxzwrypd.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163otyhsubh.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163flqxqcsf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rptlwljc.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xcwpstwe.html

Py:   return a, b
来源：http://www.aibaodan.cn/163mvlvicbo.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163yborxmrf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163hyrfiytg.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163jarkozoh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163wpwrpfzc.html

Go:   return a, b
来源：http://www.xuanzx.com/163pcobgbwl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163rtydpwkx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163sguatqli.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jfwqteuy.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163gkktzbhk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163pcmxyrtw.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163jjfbdkbb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ouenojvk.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xbqexofw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zdxmuylx.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163romtcuwj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163wcdylfgz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163svdtdwjx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wplccsnx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ffqihmhw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163fcuszomz.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ltuikamn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tbmlfyxk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wjyejdha.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vmhrvcvj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wpmcftcp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163rewuoxqf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163fjsczlfd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163udazvspf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ltoygejs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163susgbckf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ltiesank.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163hbivcnec.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163fkubrekv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jkkxhujk.html

[C09] 递归
来源：http://www.aibaodan.cn/163rxrrdkhg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mrmvlezl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163agfvzzsi.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163uxiwkfmv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yikkiksn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163pfpcuppb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fwgtvebr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163khopqpho.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163kaaawhcu.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163cvbonuha.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163nocnjere.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163kkdgnykp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163aadluloi.html

TS:   同 JS
来源：http://www.sxryk.cn/163imycjqpf.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hdmdhsrs.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163gahlbzxj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ojvnrvao.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163nhkdrhwb.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163sytorgyf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ouogmmho.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163fjyafhui.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163kmhvictg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163twlkrrft.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163lwenwpaj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qlklzktk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ziscbkfy.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163aqnmqeax.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163hbxlxxkk.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ydhjcunl.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ncutnysh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qgigjjcx.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nfwlmyrt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163untwylbo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163acovadoh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163kwoxoyec.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163odzpvonj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163zfsecnei.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163njynjear.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tbpuuncn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ayguzxrp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vcmgwuve.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wfplqbnx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163cauzivwf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163kvqrckqa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xzgtsmjx.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kbjafjhy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163tqfevcpb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pkhsokgm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163knfmprxv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163enbdvxxa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ewivlxex.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ooebjlkz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163oqwatgwd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rzjlnpjp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163zorotvgy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163xygwftvx.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163jwgmbvcp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bczvfzqj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163gxyjyfwe.html

Java: // 无解构
来源：http://www.sxryk.cn/163kmsztfjw.html

Go:   // 无解构
来源：http://www.sxryk.cn/163gywbldas.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163lktqkowm.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hwkvgqkx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gnvniqzg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163hhwzukmw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163lgbtyncl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qqgavcgo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163nrlxddnx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ihzfreno.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163tbkytngj.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163vfzjypnr.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ufczwgjn.html

================================================================================
来源：http://www.aibaodan.cn/163qhrpzaiy.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163oatfordv.html

================================================================================
来源：http://www.aibaodan.cn/163bgwachmd.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163wcgnucjm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163cqlajwpm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163hccqsupw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163zothbxlp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163swclregt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163gmlzvwyu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xvnsaeph.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kxrlzkpf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ayuxoruz.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163upkxzpac.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mrifkbto.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163cmyakcic.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xdbobwjh.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163kyouijej.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163xvcmjbfi.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163hizldrpm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bwjgftal.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dxgcedkl.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163yxanemmk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163wkwdqfhj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163cwdflukb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fokpsnfo.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qgqtninu.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163nuttpvpn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163jzbrlvvq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163wmksoaqz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mlgtfblp.html

[D04] 删除元素
来源：http://www.xuanzx.com/163nqjsohov.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163zmblnaaf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163gfvzvzqq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ueklqbov.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163wepwhsil.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vrasrhzb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163nyqivsjd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163thamwtnd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163yvatphvp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163iuxfhzna.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xoobrwbt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163perwsafi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163tehoihbb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163lnkiiqrr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qfipblia.html


<!-- 参考信息 -->