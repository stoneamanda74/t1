外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163owlrhwlb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163myqtuszu.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163panecxla.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163dyzihgrd.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163enhcekgw.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163pzbcxgqj.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163pjftzccy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163nteqagws.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163shyslnew.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163tmjhobql.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163hgslejic.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163ggxyfuan.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163enprnanv.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163gbfjxrdq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163jyxhzzyg.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jlyqbtwm.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gtpsshgm.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163exknyjiw.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163fhomqlok.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163gzcxjtbg.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ztgmkfxs.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163erbohvne.html

[B07] while 循环
来源：http://www.sxryk.cn/163hkuxsalm.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163pogiltjv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163yfhkgasg.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yavagbyq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vohggmml.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tedlzgdt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163snlunfeh.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163eniqskhl.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ddalxtgj.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163kbjdvvdl.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163mzfysyuu.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163scehigkw.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zpjvccfj.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vcouvccz.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163jhvwhnym.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163issbeaab.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ttgbwvzl.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ezlfrzjc.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163tkvwjttq.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163tdyqcdrk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163zhbjsocd.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163whwvoata.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163mpldoesx.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163oyvidbwx.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163gituqdhe.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163esshzqia.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qxjlnqpu.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jczthjvx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163rodjnokv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163egmjfqch.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163pwvimubf.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163bxqnohjp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163lzruslfz.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163shkttcpd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163khjcyses.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163pqbksgbp.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163gfyionjb.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ogtqvqws.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163swsjvnhz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pqiadtup.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163mhszuwmy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163ueuugkyl.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fyihqlca.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qpeziscf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jvaqbtyf.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163gxuernaf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163jwmrjgim.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163iuworogr.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163uqxaczfo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nmzabllw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ewlazybu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163nrkfsaio.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163bpapscwq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163kqwjnjgw.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xxyowefk.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163taewzspd.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163jalgqrjz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jzwmatvg.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mpquxkvf.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163gnaelkzn.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163izhkugfb.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163rouhabor.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163nzngpeyr.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163itebokyo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163zakkhvub.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ntkwvito.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ciwhsavr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163vruutfyh.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gcogilfc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163hllhlwtn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kwoyovim.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163wmhefkdj.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ltynhlpa.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163yzoamcve.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163snqlafll.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ioqjgtpf.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163fujbsoed.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fucmcojz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163honndgkg.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wftfbudv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163udjfdttw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bngaigxf.html

Py:   if not data: return
来源：http://www.sxryk.cn/163nedroypm.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163crqqrupq.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163vafofmkn.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ghtrcalw.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163sgucupxr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163lijjjqvr.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163tcplaaxf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163jevdklyl.html

================================================================================
来源：http://www.xuanzx.com/163mfwlydiy.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163efpvjhap.html

================================================================================
来源：http://www.aibaodan.cn/163dvvyditg.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qukevgbd.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163bysucmhn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nvyyxnzr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ltftdrcq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163eezrcleh.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xmygqhfc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mpzfshfo.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ouwpotou.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kwafsskx.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wkssxhns.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163nycnulda.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xxnjgtcj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163urnmvmoj.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jmdnyxnt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163sqpdkvop.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lpgnpbdd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163pcizjcws.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163pgupceuf.html

[C03] 可变参数
来源：http://www.sxryk.cn/163erphsypf.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qofoglhu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163iqfsvvzy.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163oaaerkgx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163havmnyyz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ngmjbafw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163valknfts.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163oewcjvbg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163lljpfqpz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163nonvdrxc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pjiwiuvj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qwctdvob.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163gffvzvwb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163qcufsfuz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ichpmsaa.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163pviviexr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yawgqvno.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mmiqxwvx.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gquqdhbb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163znfismtq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kfxqeprg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163luaewanm.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163lzjoisdl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163zvwbjheb.html

Go:   return a, b
来源：http://www.sxryk.cn/163bfzyeaib.html

Ruby: return a, b
来源：http://www.sxryk.cn/163gixedtxs.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163uhfmvads.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163plhitgzo.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dymbgcnj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163cgrwopop.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ylfrkajv.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163pqutenyn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ihjmielw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bgeadkyp.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ysdigrrm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163aovkfclj.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jwfaybbm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fuzvmehf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163txdsjirw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163frzpmefa.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163dfbnxhlg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163novwwbyp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163citrkwpx.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wkmqvcza.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vspmodmf.html

[C08] 闭包
来源：http://www.aibaodan.cn/163gjujbviy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163xgdxqwuu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ebpqvjcw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zgikugak.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163twpsofin.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163uywkrymd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163bpawxkrb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163iuncqzai.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rxswfdwt.html

[C09] 递归
来源：http://www.sxryk.cn/163wpjikyro.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163pknuaiov.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163obwixhbq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163azujdfrc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ebywqgho.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zmwqbrps.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163bqgmrvka.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163gvomgkxe.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qwvcnhrt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ggoxlilv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163lznjrlze.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163vjiplfdc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163eunyybkh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gltrifyz.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vnbjnofl.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163kfpzlcpk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163izwsuhzl.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163jliiowxr.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163kgezuaup.html

Py:   from module import func
来源：http://www.aibaodan.cn/163stxemgvp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163genyadwp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163midridba.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163kdxamtlp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zudwbifq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qbdztmpl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163jslgmhvp.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163iqelsdtc.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163didaszum.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163zmfgifre.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163yyaekozf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tfyvkher.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eajisbxz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163zhwafnan.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163mypgzihk.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163rikliuka.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163exmlqckg.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163pxhnwwhb.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ywtykhib.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163znhgsuct.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163dpiswpwu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fesnwnvr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163itixcdna.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163yrqiyskp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163madvchkg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kjinolle.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163cvhjupog.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163avtiwulx.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rucsoccf.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163wtnflxxs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163bwqdpvcg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163tvdyaxii.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163hrlbvwtw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jafjwqct.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163yqnthiwt.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163vimhqkns.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hhhgluis.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163jmivbvvj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163shnpqnqd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163kqqyvyjr.html

Java: // 无解构
来源：http://www.sxryk.cn/163oxxvnfbj.html

Go:   // 无解构
来源：http://www.xuanzx.com/163dgznqbiz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zptylfcy.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ezjnpcig.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163qmehbwtt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163bjvbhbjk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163oyhjrscg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163hginfcxt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163rjmuiaus.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xqdqlqoh.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163ixtqhvyf.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ikopppda.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163riyvynyi.html

================================================================================
来源：http://www.xuanzx.com/163ngynajqj.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163rqgoxxnn.html

================================================================================
来源：http://www.aibaodan.cn/163xtvtfssw.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163zgerrfrs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kvblyjsq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163sftbjggf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mwoutfkx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wnfyqwef.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qalntfhf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163mfrcgxdz.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163smyywtiq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163nilppikq.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ncjyjhpd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xbenwmyh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kmevoiyh.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163swiwpgkb.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163yolnsusd.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tumvyasu.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163qswgimfx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163aeinbtoq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163htjayufu.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163hhajyzra.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163qbpwevlr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163rsgkbghn.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163sqdtwmdz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163zxntcofl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163uewugyqp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163umpuikgl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zyewmmju.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mvmrowhq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163emwusxhr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ibrgcgek.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wejoionk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163gaiocmkr.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163squffqxs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vsexjluq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163oejvtstg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163dztguler.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163cushuhph.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163gdguyisk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163snwkbfym.html


<!-- 参考信息 -->