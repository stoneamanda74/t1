外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.xuanzx.com/163cierqxla.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163tigblkfe.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163nihxpqui.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163uufzanyn.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163jeeeslsq.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163esedeuya.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163tjgsdxlb.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kswkaoud.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163awroneqq.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163twjdfdcm.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163qozfjzbl.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163qgjdgzuy.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163kdzmfefu.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ouccflfr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163omtlgtce.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163ewcevxsf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163xtyoygjt.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163qrjosoao.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163ypnaxbzd.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163xvuqwyws.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163klirwhgk.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163gkzesxif.html

[B07] while 循环
来源：http://www.sxryk.cn/163ckxgqost.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163smoekvis.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163qrebecyw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163nfmoelnk.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rwztrmym.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163eraxdclg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163gfeqzbpi.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163yycrmhqr.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163rqjrdquf.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163jefvmdql.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163mkkcyavt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163emqsbfnr.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ddamjcys.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vlikctjy.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163khgovove.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.sxryk.cn/163bnuvfcsf.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163orkaplak.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163vcohqwel.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163djzkkrml.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163zntjisjt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ksaxiwrt.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vfxleogq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163brwfbang.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163uewcznch.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163mdivtamz.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163mbfvugas.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163anqwzotx.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163caxxbfoh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163jxxrojwg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163vlmrpxpr.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163vxlvyfun.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163fzxhizer.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163izfjvyme.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163nfniddwk.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163uvqlfzdg.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163jnhsxeap.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163njjmfvut.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ozkraima.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163seifgizw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163edhnmblp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163gajdtnuw.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163zsodgxsx.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163vivrwwnj.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163menssopq.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163kxrtnyth.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163kowqszey.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163ybqbzwcl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163oudjpdqe.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163umglrmgz.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yfpwvngd.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ihfikacu.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163exzhopdp.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163wyopdfpg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163lroeevso.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163vpettbta.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163haevatss.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163pipnlgry.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gtevmfnx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163eapoqxcz.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163znxiwpae.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163duvrmhwe.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163xwqxztti.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163twhracde.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ubevgilu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163cqmiqnkn.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163njyzlfnf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163djcggucu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163lxlyfiwn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163bwdvbyov.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163atokooww.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yksxootc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163twthmoao.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rlwpegfg.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163uudsbrzb.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163dgyhrknj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163zvtcznju.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163tqrzkfiz.html

Java: a && b || !c
来源：http://www.sxryk.cn/163csixekvn.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yroefoug.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163boembkxw.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yekavvqg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163fewmvdhy.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163jvhengjb.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163zczgcrah.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163udchihay.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163kkwejxyi.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xgfxkrxf.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ldbtmfia.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163exitdqkp.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163nllaakmv.html

================================================================================
来源：http://www.aibaodan.cn/163bhidpncz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163ttczodiz.html

================================================================================
来源：http://www.aibaodan.cn/163dvoqtkds.html

[C01] 定义函数
来源：http://www.sxryk.cn/163xlclihre.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163awqcoczb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163evkmtbyy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jwtjnpik.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pdskpsak.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163axvtxsmp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163bnjsbizm.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ycjkxjhj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dvmnaezn.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rdedzzjf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163onkhtmuc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163uqsrekwf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163uttjiaue.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tujxcqyp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163oxwmiupz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163bxnqvpcp.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163gfskryhj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163sqxswhml.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jueelpfh.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qaevuvhn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jgnzzzyb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jfajniwq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163vgqymcmm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163xeliurwp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163wmnuqqdc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hcxpninu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163pdyaynzq.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163nrkqgowy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163wgrbgacz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163bytvumhl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ijzyagol.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163camgokgs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tflsgjlq.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163tgwymqgv.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xfniiseg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163abmdbyvk.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xfwxuwot.html

Py:   return a, b
来源：http://www.sxryk.cn/163prytfbio.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163upbolnge.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163aayolnfw.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163bihtakpr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163nrhhmien.html

Go:   return a, b
来源：http://www.aibaodan.cn/163kqrnzljd.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dyvsgjli.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kouabtek.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163glmnbcen.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jdjiaknh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163thhlifuk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163vmmedhlb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163wbbytizn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dcwixceg.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ixwimwrh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zvgzqjie.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163zhvzbuqt.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dreokgwy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jrhtvary.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wquuxfjl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zqywixuc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163yjdvtogb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163awyndzgs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163sxvlgbwo.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163crbkjoam.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163kksaynyy.html

[C08] 闭包
来源：http://www.xuanzx.com/163cgokndpx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163xxnibnup.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163axwyohbt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lfxbwrnl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cueraioh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ginedcgg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163phrusbue.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lpdbhwcy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163herhcsav.html

[C09] 递归
来源：http://www.aibaodan.cn/163qqcnjewc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163gfzofkns.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163kbazakzu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ccxkqnob.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163dwupoufy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163dcqhimum.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163zbfanirt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nfowdhzc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163kekhlpdm.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163xfwualnc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163xubeopbi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qrbsdpzm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qjzyfktz.html

TS:   同 JS
来源：http://www.xuanzx.com/163vrlqiwab.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163tnqagvfn.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163wffiidxt.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163xluacbmz.html

C#:   块级作用域
来源：http://www.xuanzx.com/163vvbnxzki.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ojplxyog.html

Py:   from module import func
来源：http://www.aibaodan.cn/163bzcxdmgq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163egxmgxmz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163hjucacoc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163gbdhnslb.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163yfhepzhn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qjpkqqki.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163cnnbwmay.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hnozauer.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163agllyqok.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163hgeagead.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163wetflfsa.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163igeucyux.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ensgyedt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163eqiechzw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jslwyldu.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163wyojhgij.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163kxleabhk.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163enjzeuck.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hqgfxphw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tcgqifwi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163wnmnyjnn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ubifwubb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iyjqhvmj.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163iaqvkvzo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rpadokkm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163dgeracyn.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kqlgugeo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163yswtyeeh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163zthfytqq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ygpmncpy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qrqaivap.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163cavgdhtk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163uqrvvbrc.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163dkiphrcg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163mtfxwawz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163usnrzqdf.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163byexglvl.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163szjaqvfa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xjsquwmf.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163llrjqzok.html

Java: // 无解构
来源：http://www.sxryk.cn/163wzrowpwr.html

Go:   // 无解构
来源：http://www.xuanzx.com/163smrnvban.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zvtcmgin.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163recvfgya.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wnbaujzo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163sqybrgep.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163hyggujsc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163fjfoltjf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qrpijihv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163jbddowxs.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qxanygak.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vjfffziv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163bzknibls.html

================================================================================
来源：http://www.xuanzx.com/163rclfudzj.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zyrobedf.html

================================================================================
来源：http://www.aibaodan.cn/163ydtucpac.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163eamkkyuw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163sswqjwhc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163kfftjxbu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163bmaqdutq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163yaumjldl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wdlrnwyl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163qpbvfgea.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163uxexgvrp.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163fcotkoaw.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163zidfsgcu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163htitnhvl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163crpmwjsl.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jxmntpwp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163figraptv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vjpigijg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qwgenwxn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163zfarcfnx.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163nxnaewln.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163bjoogmtr.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ajgtzyjh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mwcpihjg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163dcqcorbe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163lshdlakq.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ekewcuyz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ohegdodm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wjfrhsbp.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ibbhaebd.html

[D04] 删除元素
来源：http://www.xuanzx.com/163gvtuqfao.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hkmejzit.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wwvhlkou.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163hoqatthu.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wplprhdi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163eyoepeld.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jyfzhlfp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163jxsrzsmg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163vtjcfldd.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163inwfrukv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163scuiyuhx.html


<!-- 参考信息 -->