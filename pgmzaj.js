外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163xeuqwdbe.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163fhuhuvym.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163qajyvzmr.html

[B04] for 计数循环
来源：http://www.sxryk.cn/163srguqcge.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163rmflowcz.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163uebwlahu.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163stsslykd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163rjoyrmiy.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163agwxohnb.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163oxcrwzve.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163gmwosukq.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163fwbiyiqt.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163kdogdkzk.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163nrlvlefl.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.xuanzx.com/163cwvvfmzi.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163kifqubte.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163vbqdzrnu.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163knspffsi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163rprirrus.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163vawedfzh.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163zgmhejmv.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163uooqpjkr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163pemhhwsv.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163knnszykl.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163vrgtbpdx.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163jrfhazym.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163rspjcpsl.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163zywqixlt.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163ztrzzkzb.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163cuoaenwe.html

[B07] while 循环
来源：http://www.sxryk.cn/163aczjdqfc.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163ufsqnmzr.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163bgcgkmof.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163kxkrxmau.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163pkgykawt.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163yksjaapo.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163vbteimpl.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163fxnkauwh.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163uidwxnhx.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163eamnuvos.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163jtmbmznf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163uxcrcuys.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nhetijat.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dlajwyrx.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163flisozss.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163iqldfrvn.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163hjauglug.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163dsoprxsv.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163xqlyhvig.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163minaetpx.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ahlfwjla.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163klcidvti.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163abmbwucy.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163bnifbfha.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163vrpbvohq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163fyffrkxo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163olwbwrbs.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163xuopfcwd.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163ujeixiwp.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ypxofbzu.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163bzuhtarj.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163xlsnjeer.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rbpkixhd.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ijdmeqeq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163tydeufdk.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163bzfpzwjh.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163dklmaphj.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163euitlcdj.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163qltmdnla.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163kzbkgrgw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163olwdcozp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163otieridg.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163cgwquemb.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ofwstzfy.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163rydipdou.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ubgckzcc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163hlvrjvdn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ivpifnvq.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rggfobdb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163cluobaxx.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yicfynol.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163fxiiwgvl.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163zvlwbojp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163uhidbuvt.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163opsqwgjq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163nhxubekj.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163qmmxwrpy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ztgbtvyl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163wssmiogg.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163kjzkkpbi.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163fueznden.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163ojsqxobk.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hslyfgic.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xctitslq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163walwgukp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tvhbzjgp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tamcmbis.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163tgvnudph.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163dilzjqjy.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163axjlzrpz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kvhgwstg.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163todeuvzu.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163acnoggnh.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163iaocuciz.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163hxdaboev.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163wnggdryd.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163txtovuuq.html

Java: a && b || !c
来源：http://www.xuanzx.com/163lmptjmwa.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163fvlzlyaq.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163umuuqfba.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163zpvpglge.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163krnlildi.html

Py:   if not data: return
来源：http://www.sxryk.cn/163fveeaahs.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163ieeexxbz.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xcvyxqhw.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163jficzgjo.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163zxdlerce.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163brtnqrwh.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kljilnml.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163nijxctmw.html

================================================================================
来源：http://www.aibaodan.cn/163afczctpx.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163firzykgj.html

================================================================================
来源：http://www.sxryk.cn/163uqyqvfbx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163dskucrff.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163rbmxngxs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gnoopvwu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163sdwtlbas.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ybqmhhiy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163uktrzmvp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163shjjfzgs.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163zmfdaofz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hswucwui.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mlxilqij.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ougtsxrs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163inquzump.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163czilxqrd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163mdesdvqz.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163wleczqla.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163amgeoxzq.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163eniolpmq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ubxilmul.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163glithrwv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gowhggug.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163wkftebcw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ukmjkbfb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163heiqhkyx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163ftpjjils.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qnmczgyl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163pvpkbnjr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163eurgthyo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qzskiwnh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wnlmawrr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163wsyttirm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163rwsaqsuz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xivnhpls.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163cwqyjgny.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163rwjdptau.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aaeoxmbf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163goffhznk.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163rlqmgwts.html

Py:   return a, b
来源：http://www.sxryk.cn/163bhdlezvj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vblkemhg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kmjsbdyw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163lywbhumn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bsgnedjw.html

Go:   return a, b
来源：http://www.sxryk.cn/163bomlycei.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ycehctpy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ijfdfwiz.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mwygixwm.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163sskfpsir.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163tqxkqhyl.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163csaznzoa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rnsikikr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163dtvddnlz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163udgnijag.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163bocwptdp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xggplvsb.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163bryilndz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lgjglhrq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qjjmwlgd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163obxfobvb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163uivsekhb.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163bxjpkdyg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163fdcnrapr.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163xrvaojam.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163sdwjdknd.html

[C08] 闭包
来源：http://www.sxryk.cn/163hyxhndue.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163rxlqwovj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ubwwwmlp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zlmtzjiw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mefbiqth.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ihsodcvx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xlkywxcs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163bpmvlxys.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163oyzlmnts.html

[C09] 递归
来源：http://www.sxryk.cn/163jghqyoqa.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mtoexpin.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163uecegqsw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163kntkgsrt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163nmvjtqls.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163btavhgkx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163plvjpqgx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163dhyihkyy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qdnnhivw.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163wwqtkkqw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163iddmuwjx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vsknpqkk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fslmjqdd.html

TS:   同 JS
来源：http://www.xuanzx.com/163djedvljv.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dbhonowm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163vaumzlvf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163uqjeabde.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163bshwrjvx.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163rxakoofo.html

Py:   from module import func
来源：http://www.xuanzx.com/163jepcatts.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163eetjsozv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163ulvngpfp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163wlawnfpy.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163hdunfcxx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qkfaswja.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rofouitv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163tyyybogz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163rujsemmw.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163eqlwekcd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163mlysxbks.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163fsiupayy.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pacujnsm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kkfsitoi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163aojhgqgc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vgnohpsw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163epvpkcec.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bwznbwzt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163oayfxymn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163lrcoukms.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163eyrkrxdh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163sqhlsame.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yhziogmo.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163lyygttdt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163cfzowmue.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163qjdlkial.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mmjyqhfc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qcikebsv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163zuunlwfu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163gggntxfp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ykkzmbdd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163dgepbhax.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163pyznlsej.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163oyrrlkau.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ainxcbmh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163gduemdsp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163hbmbxrgh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ranxgrzn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bxdprttp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ihtsnyqc.html

Java: // 无解构
来源：http://www.sxryk.cn/163raomikiw.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bnorvqqy.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163xbnitjoo.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ueqzcjwo.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163drspepun.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jwanxawz.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ovdatpos.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163pfyvzljc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163czpbvepy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hlxlsrrb.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163oingqvsr.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zimqxqeh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fraybnxh.html

================================================================================
来源：http://www.xuanzx.com/163imfgzbnr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163zdctufls.html

================================================================================
来源：http://www.xuanzx.com/163tnuqktoq.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ziagwoqf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163lxaifvsp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163dmdnzqef.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163rzqiknzt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163jqmiisxn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163lyflwlfq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163rccahdnf.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163iedyvazr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163giveeaex.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163kytsfcbl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163jeguceat.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163soqnyqab.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163psaclmgq.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zzqancwh.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163zbdshzac.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ihqwcxvy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163fzgpdaka.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qnnuuwna.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163cmgpekzs.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hzuoszis.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163dwpgyxpw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163xwjqsxbm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163invklxvq.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163rbgvkiya.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163zfovmlno.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rfnhcrvb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163rqvojpgs.html

[D04] 删除元素
来源：http://www.xuanzx.com/163yekepgio.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163uyioajgp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163tdosuhlv.html


<!-- 参考信息 -->