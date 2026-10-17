外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163haxgfhfq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163jzthtyev.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.sxryk.cn/163aztjlfmj.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163dtbovuvs.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163ozhefcbm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163ocqkvzma.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163iumvsxtm.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163kgolvjmx.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163wdvtfqfn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163eittqrup.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163lunenfnd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163loxuytse.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163craukffb.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163jflnkmgb.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163uspyncfd.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jaivmans.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163zvspgltp.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163fzwcaeul.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163xokkexom.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163yhjmwdaw.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163hikesoqt.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fsctoxen.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163elpcpjyn.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163rlpfczyf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163fqvqlckg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lcmpdzqu.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163bllwgfyb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163xndmdlyd.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163apbnbqfq.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163trvsmarc.html

[B07] while 循环
来源：http://www.sxryk.cn/163oyzdzmiz.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163annrcurm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163kptdrhgg.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163xpppspcv.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163cwolwpmz.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rzbjsfhf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163flxsfkdo.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163egusuyid.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163zgpspncg.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163dalklarm.html

Py:   # 无 do-while：用 while True + break
来源：http://www.sxryk.cn/163fxfphrhs.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ospsxuwk.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bymcyltg.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163xcgieypt.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163uhvvtzup.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163xfwerteg.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163ogujjcnu.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163jqxggxrn.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163bmbmahyj.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163eovrguci.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163bnnzogsw.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163tvlxaxdc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ybfxqske.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163zrttpfgo.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163dkinmnlu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163tjoomolz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fkutlego.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163tuqdjiil.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163zkttabjy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163zolfuxai.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163emydxoek.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163olrybxkz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163qmxtqzbp.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163nkkzvqgd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163tijeiapb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163yaevejwn.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163eazxxdgp.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163dcbqqdzy.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xcxftjud.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fpcaytxc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163jvvxucxr.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163skqbvaog.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163hjcefpyr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163ssenbhgd.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163zumiytyt.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163bqeeyvtm.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163qjbtoxcb.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163yxkavjyj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163onedgoei.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163tzbxkkug.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yqezqhzk.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163qfxtwouc.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163gnsytijx.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163ovslpimp.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163lcecfaaq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163rfaevpmh.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ddytvelo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163ixyfvzkx.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163olmfsbml.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163tvgsweow.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163lxxfwexu.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163kcsvgfhh.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163rvebcdob.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163trnixpap.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163gftrkdtm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163yqfzdonl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163zaiounqd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tlpqibrf.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163vuycdryh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163bevegfaf.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163ywckwlxb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163snqehcmv.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163albvepij.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jwajpryn.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163nsumzfwt.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163auvveogn.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xjcgcptf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fvvuoaaz.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163kwhdzyeh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163zlvhcvxi.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163fcoocrhr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qmbhfcmi.html

Py:   if not data: return
来源：http://www.xuanzx.com/163pzemcomd.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163usrmamjn.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163vkflkgtm.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163vpenbauv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163afrtwlou.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ivokiaba.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lolzekjt.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163tvdyifxg.html

================================================================================
来源：http://www.sxryk.cn/163coqxrsww.html

C. 函数与作用域
来源：http://www.sxryk.cn/163lxikelcb.html

================================================================================
来源：http://www.sxryk.cn/163eqcukecn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ctpzkppd.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163zaqrphns.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uewqgvap.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163geluwvez.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163deklhubb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163blpwgkbl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163vmfestst.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vxjhoikq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163drovflxf.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163fmudboox.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163nlblhrpf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163oaafiwyd.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163tljqiwpm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163asqzhvvj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163uddzotau.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163ngkjvwep.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qknbvecc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163pxcmhvau.html

[C03] 可变参数
来源：http://www.sxryk.cn/163wepwrxdo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163fkitlaah.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163pvqnzgly.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163olurhvax.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hyyopqqx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163bvxzruln.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ggszumtv.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163udosmzli.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163qstkkmdd.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ljvkvgqh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xiyhzwln.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163cwcwcauq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163rudmfmws.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ggkiforq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163qokkxmbt.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vfnykvjd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wsakvuxm.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mizzcznw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163mnfepkjh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163mtttdzot.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163qrhoglrw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163zwpituch.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jcqgmsjl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163roycwuco.html

Go:   return a, b
来源：http://www.sxryk.cn/163vsxnmqzt.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ifvpzzxm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163nooyoobz.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163lbjflcll.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163pqqweyzn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ljbqskof.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163xphbtvxb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163hazrovol.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163fgtqtzea.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wmrsdkxe.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pkvztteh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163mycvnnef.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163olivslzk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163tdwfjgzs.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163vcghqtgg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163pwzpwgjw.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163cxaqgcga.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163afpgqgjc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zebyrqrl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163fzdrvyoy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qjwnamyf.html

[C08] 闭包
来源：http://www.sxryk.cn/163syzedkbp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163dbbhdssh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163tocpkkrf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nkazneur.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163eykzsduf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163andqcdto.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163pgvdgzrj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163vvsuupdy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wtnjdkqo.html

[C09] 递归
来源：http://www.sxryk.cn/163ljnmpbeh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163njzbcxqz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rbsqnaba.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jkoevfdp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ocehrnmo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163povhhgye.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163pyqityve.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163hlfavklg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163izynyalv.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163gybrfguu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163xcfsgoqp.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163rtekpclv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163rqgwyweq.html

TS:   同 JS
来源：http://www.xuanzx.com/163gqiezcpq.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163xjrolocx.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163whodiysv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163wwmpxmsc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mskjavnn.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163yaxjajtm.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zamrufac.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qwdixnuk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jmcfrbmh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163iyynvgci.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163bjdoydrm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163cyfyckki.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163iilxnfhl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hrgpvxqw.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dnsaqmtw.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163lqutwvth.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163zamkyuib.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qujcefan.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sbjbqopw.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163issahxun.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ggxnlgik.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163dbcipnyj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163fuiufwit.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163xiyucvow.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163grrjwull.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qksrvojd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163sidfrnxm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163aedoyass.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zeeyhntr.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163mgfjdfxh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jqnstbiv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xahetcsv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xllagjek.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dgezpcyu.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163fopwjrqb.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ylibbsjz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ghzftxbg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163godlxbji.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163lnyxcmay.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163mleiroez.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163mhndfqnx.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163quamvhgy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163yuiglewa.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bfhnwyvv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163hxgknmav.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tjsnxwup.html

Java: // 无解构
来源：http://www.aibaodan.cn/163oyfcfqrr.html

Go:   // 无解构
来源：http://www.sxryk.cn/163qazripeu.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163cughuvhr.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163jblpoyoe.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163dujdpzvv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xefdvmbt.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ndsrkevf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163vkkihnpr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163nslsrpjo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gpfprjua.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163tjqzarrt.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163tlblxpfy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163npxyasfc.html

================================================================================
来源：http://www.sxryk.cn/163wvkhaxkk.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163avucgoxl.html

================================================================================
来源：http://www.xuanzx.com/163ktcdtmbz.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163mvtyqmfv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163atsuhiid.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163lxnybljw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tkiqzvjy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163oymbgxoq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163lsmhibyw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ahmcobur.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163drnncscw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mltowhgu.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ggjgjjzf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163upgomjig.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163qdfgahhk.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163awxadhvi.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163xvezrhma.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xjlrkcna.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163dwhnbgks.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163nxvherhp.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163wkbuybzz.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163kqebdxvo.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163amywqlnm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163umqcicgp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163hdijpjhe.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163gyooroew.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163sqqnjapj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163zmwdndsm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jgzlhlvx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163uwudnnom.html

[D04] 删除元素
来源：http://www.sxryk.cn/163lwcgelzd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163mqdpjdfc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163lffjymuu.html


<!-- 参考信息 -->