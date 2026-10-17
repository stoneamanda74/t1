外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.sxryk.cn/163lafuewdq.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.aibaodan.cn/163rhqfqczq.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163btehdnsd.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163pgrybuvg.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163iclshftu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163bbxwinjr.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163gauhzxvd.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163dmlqwvio.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163wjrynnvh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163bejidzbm.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163mcyfngcs.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163aecsjmjs.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163smqjmzxx.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163dagpiwhg.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163kjnaqzzk.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163tnmqzwlt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163niuwpstd.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163szzjdipl.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163jotoijbf.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163petalbvd.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163qrkzsudm.html

[B06] 遍历字典 / 对象
来源：http://www.xuanzx.com/163aqkjalcn.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163uaqrnpzx.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163rvlklren.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163dbfofsyq.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163hqqbjzak.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163xmvxteje.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163lqabtgou.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163sjbbzjsj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163vwnunkpb.html

[B07] while 循环
来源：http://www.aibaodan.cn/163jwihbmyq.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163slkfjysi.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163eqgeaouk.html

JS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163jhcuabtx.html

TS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cpoylzwb.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ohbdvcrd.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163yrfphfgf.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163iydtkrix.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163qrxaripu.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163prnblfgw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163ivrkqfxk.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163nmfyecfp.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163itqejyht.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163slvrsuot.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163rncuxvnx.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ukxdfrzu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163kgupjqyv.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163aedqupvr.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163nzglvmeg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163jcaqlygy.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163fweuxnyy.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163lwndpovu.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163qnlzolnf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ijogwrcy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163ynnqrslq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163mxphkeyd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163llhknqsh.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163mrqssdqb.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163cunlalrm.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163jafibobo.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163fronizqh.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163qptnomhc.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163rroqxneq.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163ylzybtln.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163jatqfcvb.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163qdivlrdl.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163bscustpg.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163savdqibx.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163ymfiidpr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163qyheacip.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163ovmdjrtz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163rjkstpxb.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xyclqlzi.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163qauqwspu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163dttzogep.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163fopkdexx.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jhzzvgxh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163mhtdgrbj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yhdatgsk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zoisqrhw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xwighvpq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163egeonwet.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163vwgsuogc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163qentceli.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163fbauclfa.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163ltefhmpk.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163hpxiaupo.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163lqznjsud.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163szxeeoxw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163kzzfeazt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jsqrdqge.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163gbslgaiy.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163xxkmcxaq.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163vrijmflz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163tcauwmol.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ukxshlhf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163drcrvazt.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wjnzylyo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163imsxjncx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163dzvtdqoq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163bqjhwvcc.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bfeqryme.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163amjbgtsu.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163jgftulan.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163uksupudk.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163kkkncmfz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ewrhnxin.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tngphjqq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163orjjnfdz.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163dbkjtous.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163rnuvcmzr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163wxxqwwdy.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163tjywukta.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zavvizre.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163oqfkapaa.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163suoyxqhb.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163jpptavcn.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163dnihmhhi.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163njbinbnb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163emotddwc.html

================================================================================
来源：http://www.aibaodan.cn/163ghdbsmfq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163bnwdkdox.html

================================================================================
来源：http://www.sxryk.cn/163pbvciznx.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163odxkwuru.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163xuqomeor.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ppunacdn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163tuotadfg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163herhocsy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zlomieay.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163dwxxjigl.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163pwarmunk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bgqgkdvc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163sfqmlfhx.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wtgegwwg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163vhmdtbnt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163acsnpuyo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163lnaltiol.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ultstdre.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163pkyqzjed.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fyszyzmj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163lkertias.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163uaetwvxl.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163lmezuxhc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163lupcgbrw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163bmmuiwgv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tcaukngq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163gbwswmow.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gbszqhme.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dmvaqrop.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163thhtqjxn.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163npkuymas.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ytcopbos.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163sepqrjde.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163piaxzmqa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163wwzchjom.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163uejbbkde.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163hvrybtky.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163moqqmlzd.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xzdfufjl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163osoylykd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163wdnuodge.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163cfmmyrgz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163yglnokkg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163sbcbohxs.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yfkqchwi.html

Go:   return a, b
来源：http://www.aibaodan.cn/163dodijqhp.html

Ruby: return a, b
来源：http://www.xuanzx.com/163mokkjahf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163orpvxfnh.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163daxjokqy.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163kxsihhuj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163dxktytqd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163dkwirbpj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163wfkakzdw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ycsfljml.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163iasbcuig.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163oevitwso.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163gnxhmzwi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163iereuiaj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163twkkkjbu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jzrefmbm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163koerozkp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163jookjxar.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163kfauppsj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163liwbmsiw.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163rktxblse.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163cskrddha.html

[C08] 闭包
来源：http://www.xuanzx.com/163isjmjzfb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vropscor.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ukxymacl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ybadwijt.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163uqobmyrt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163qkjfrrot.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ccikesrd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163qwsnmsoe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163cwyzhjpz.html

[C09] 递归
来源：http://www.sxryk.cn/163mkbwkdgy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163qrwvxazh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163vzhxkjii.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gfulqcax.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nsvzdmmh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163kwnxkgzp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163tqwhpswi.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163xakvuzkw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ncwowohb.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163kzijccwz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163aasshsvc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163obulejxa.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163gdafwdne.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ktjatvko.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163stkdwumy.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163beboidgi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dgclswaf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163svrcahaa.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163cagvxdxf.html

Py:   from module import func
来源：http://www.sxryk.cn/163amwtecqw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163bhuygmnz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163bnfmxsvz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dvwgvchq.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163umnlkdgi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163uextwndh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163axfruyrc.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163bpjwlykp.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fuxmutfc.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ttdutdaq.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163grkjztuy.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eevdjpno.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163gcxlosgz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qaqcvrsw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ztzkaukf.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163pingtyjl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163dxiltwqs.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163zkcowcwc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163uomlgxfu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rznxvyua.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163izwowchh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qbmhcjdu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pxczthyz.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163glgfxpkz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hwkmmsvw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163piylzqxc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163aghqyfbb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163yjmifvlg.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163nymfdrgx.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163aywpkzgq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rinumhmu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jczxyvoe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dkfeesqd.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163dszdrydv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163kpwlcwdk.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163emwqxsmt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163crrqpjzv.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163djkjwfps.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ltwgcwnn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163iomtejmg.html

Java: // 无解构
来源：http://www.sxryk.cn/163zsufbcre.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mwltgqpl.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163fhjvbqvm.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163dkuuqyup.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163jwvfnigg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163fjssqwgk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ndeawork.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163saohzmna.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ltxothtd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163wmlvgrkg.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163heqgwuxf.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ygqhhnll.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163mxpzzfyi.html

================================================================================
来源：http://www.xuanzx.com/163tigzwbfs.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163gtzfscaa.html

================================================================================
来源：http://www.sxryk.cn/163oyahrklf.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163pnndodjs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wuffeopf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163yxnmdvek.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163sdxxwyju.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vzvkmhmf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163lwjufpsd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163tuohrzuo.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163zdxkkcwa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163tcogtrgu.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163hjqgnkln.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163plwsbbnc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163zfemqdda.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163nrqlicbt.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163eottzdce.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jktusbfh.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163jjlbnvtp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163uxrgxqxt.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hjrvesze.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rjbamtao.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ytptkhpw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163bjhjbpnv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163yqcjrpmg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163huaycyzk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163mpkccybe.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163dqovjbwg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nmlnuhav.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163hlrzhjjl.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163iiedaxmv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163buyvcuqp.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qdpruzpo.html


<!-- 参考信息 -->