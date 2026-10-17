外链999!wailian999！

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163rfidajru.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163pmrrykbq.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163yyyskgbe.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163cfegwcpc.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163uufvmmns.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163feiexfpq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163edgzhpfk.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hpsdofrg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163porohprb.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163ftffuozo.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163knbgzhyz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163lazdayqb.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163crjicafz.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163itupvxss.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ufvuyyri.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163cccjjxzo.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163wpkblgzs.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163bnrfntvk.html

[B07] while 循环
来源：http://www.aibaodan.cn/163azmtrvab.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163rlvbhdwk.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163sjanjpoi.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163aguiwuuk.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jcpdpatv.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163uzicvwat.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163dlwlyyau.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163zvcjanqz.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nfretjvu.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163dztxnefs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163ylhzqchc.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163isaebejz.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eebpkubh.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163bgdjxgku.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163shnqbgbb.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163vvhgmplu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163gorwuzzf.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kdbbnwou.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163fmdavlnv.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163luejfdqw.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qqwfpyus.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gqxbvlkn.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ihqtdbxc.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163efindwop.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163vdtaibir.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163bzgczvyj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163imiwjdsp.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163iedlgisq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163mtxkkubx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163chnterdi.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163cqibxhzu.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163ejhqymxi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ybgosjth.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163sslagajw.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jntzclgc.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163ucquakbj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163xaqbbkld.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163xnzeohxq.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163sdjkcjtc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163omanyscc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163vibpywug.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163vybisgyk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jvktltch.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163cqnoemzm.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163maransrj.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163oibhykps.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163tnaprqea.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163byrohwxs.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xzihglco.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163hxfhopah.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ynzpfobk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163sdhhyvll.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163ldjljqkj.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163dqtgtevq.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163gpwlogut.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163inwhyhza.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163foyrunfx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163vuadysjf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163qcxtsysi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163nkklzuwq.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163uwsaiqar.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163pkkvmvqp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163upoycaby.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ziivqifc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163txppvzit.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163pkytcgtt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dbpqhodj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kfuexzpd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163vegztytc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163refywlzh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ucehccyp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163vugfrajm.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jazfbpzs.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163qqyakgks.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163rrrgacbj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163nsdopxjx.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163jmycvfzv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163jjxhvwah.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163knmmewih.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163clagvdjp.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163mseccqyn.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163jcsvnekg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163aqllctkk.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163prcetozy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163nnpaloqk.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wswmgldb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mvhloiwt.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163kvxmaoqp.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163sgjuaypz.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wexkofac.html

================================================================================
来源：http://www.aibaodan.cn/163kiiwnqpo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163skqpghaa.html

================================================================================
来源：http://www.sxryk.cn/163kstrdfhk.html

[C01] 定义函数
来源：http://www.xuanzx.com/163jzldrphp.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qlnuutyn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163faiatgsb.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163nclmlhcw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yxlastjw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zczwsmku.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163oqljtwcj.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vzszdvap.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dsjtfmrt.html

[C02] 默认参数
来源：http://www.xuanzx.com/163bmfwyowx.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163vtwvyusu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wqzqjdez.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163pcrovxgu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163utfjpixc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163oigmhkcp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163pgrukcvb.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163mbqketmy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163oonwdbrh.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163cpmwdory.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163rmlnulok.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rsznaynw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gkflepwn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hxisysom.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163idwtwmab.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ocxvcswh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qxwmdcnl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163stivqqbx.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163rsouqdzn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163ddmepxgj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163docgbvne.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163sscndges.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xoogsyel.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163wudpfiwe.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qtmgwhvf.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vlvqomod.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cdjdfwhh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nzextsfi.html

Py:   return a, b
来源：http://www.sxryk.cn/163kxfbcidq.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163uqhztlfm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163dpdcdnca.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ayrwaqcl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163xdetlvwb.html

Go:   return a, b
来源：http://www.xuanzx.com/163ubhgooot.html

Ruby: return a, b
来源：http://www.xuanzx.com/163lhoilado.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ovvyhwxw.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163grfyooff.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163vejrndco.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163uausqrqe.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163cdqceudp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kbqcdqrr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163wrcvwxqx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163alwxkqph.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ihmqdwsi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ovcncxcw.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163fctjxvrg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vtdyohpf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163phlbibue.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163sstacgwn.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163hqrpuwmq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vhtseulo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163yhwrktsj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163sjvgaydy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rrduklec.html

[C08] 闭包
来源：http://www.sxryk.cn/163bkqjlpcu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163jqohfqir.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163qagjdufi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163btkjhfub.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dxnnwfha.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163rsypoaov.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163zebfmvvl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163njyulkfi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163pzocngok.html

[C09] 递归
来源：http://www.aibaodan.cn/163bybhnymo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163bcmwhgze.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163gsuvtfio.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lhdeymde.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nrfgclcx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163hpwukuzo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163bbzowoqi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163wtelyjgy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163nczywuch.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qtrdgvwh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ebwoyzpb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ocmotblh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163qcsmlrfj.html

TS:   同 JS
来源：http://www.aibaodan.cn/163rtvigmdj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163xnjxavlt.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163iqoauolx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163tjbdlymu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ntqdxbaz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163wvvpioib.html

Py:   from module import func
来源：http://www.xuanzx.com/163bivxdjky.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fshsryfl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163tlvymhix.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163tkezgrdj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163lobwgcsp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163bbtzlkxt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163alzaoimu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163jkwobwyc.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163exswktwd.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163mbenlpnt.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ezwycxak.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rpmvxlfy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qgbpzjfb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163lelyibir.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163tbhdzjti.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163qwquhpka.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ottjtalk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163egtqdsas.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mieyrfxw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ykxfgjgc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ekskhwvo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rahkbebt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163omcxfcze.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163phvdfvxp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163umcwzwoo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163dsvegdrt.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163efotvxzh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163grzvbirf.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163wxbzbbcu.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ieqkmpbr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ibjqmrfi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nilzrkiv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163iewtpbzw.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163pftuqlgw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jztqgwbr.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163txaymgsu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bnjyxqwj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163lcllahkk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vnpdxlko.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163devnydvx.html

Java: // 无解构
来源：http://www.sxryk.cn/163flmbqwwg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163osirtehf.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163egetlhug.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163snvpfikl.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163rteoqjrv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fjkwtszf.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163iiyigmjx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163srdvcvcf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163enwjwnib.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163rjuqnfna.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ndjhnird.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zcqgwige.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163fcbiucbq.html

================================================================================
来源：http://www.xuanzx.com/163sbrauqut.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163aqcrsbcw.html

================================================================================
来源：http://www.aibaodan.cn/163crrtjnpf.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163roukhtvu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ajnspaus.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163bncbrzae.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xirrfoeu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163sofrhfrr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fbfppuch.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kmsplzbo.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qiwfqman.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163auzsfmzi.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dfxfuhot.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163uowzuldn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ackqvevx.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163aseziigj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163tmdfillj.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vikpmtom.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163vrvoemfw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vxresqdp.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163shdeusop.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163jpfgxrpc.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163xnytjovi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163endpkevj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163vdbeibcv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163dsmkiohe.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163pgasiihr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163lgtkqcjt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pzzwdyza.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163fihvmwls.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tzjvyxmf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lmaonvcx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163nmjtojma.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xblwzyei.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163uehyxwwg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163roudawyf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163lxygjsjf.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wbktglzk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tnhcukqf.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ujrnxmev.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ayvezzkl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163figfmsmf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163okfefgne.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163vpbmjpic.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rkvcruqu.html


<!-- 参考信息 -->