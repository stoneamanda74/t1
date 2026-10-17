外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163nijonuhu.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163kuajltve.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163vkoonvkn.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163tgqyliqs.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163bolfplgh.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163geqmvjiy.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163wgcvport.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163almsftvf.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163rutaxolz.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163cebjqqrx.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163msspkpcv.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163hoxgxiat.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163qvmbkxls.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.aibaodan.cn/163apaeozag.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163bjokrvyz.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163hbkfnlug.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163nzkiqxcf.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163vtxkwanq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163gtgqvbmh.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163lqtfygks.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vjunooln.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163gxnbxzoa.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163aclpgarn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163zdwvcmmh.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163awwctuyt.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163icodxvpf.html

[B07] while 循环
来源：http://www.xuanzx.com/163qjjxiack.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163uiwrdtxv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163cxkhrwij.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163jifnvivq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163hmgqamet.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ksiffosa.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163ifdtxfdz.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163cseyzppa.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163oeirbspr.html

[B08] do-while（至少执行一次）
来源：http://www.aibaodan.cn/163ycwxoeuu.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163chtntgjf.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163mwenjlco.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163izrykpkn.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tjsjiokc.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163yocuegyz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163rgbtqkvd.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163tygawgrf.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ophycgty.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163isfxauhb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163gjqbacri.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163odttizpx.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163fprexgaq.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sasrippb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163cvmesgkj.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163qdmefozk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163mqubmvip.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163jkiflfas.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163tsoiwlvi.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163gkozecqw.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163ydxpidhv.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163sitkenyv.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163gtirusqr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163rbatyaty.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163thzbvdsn.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163ftznieqz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163vsdmuwky.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163uetfjomn.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163kzgjhcbj.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163hoqaoeur.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163hjcssvnv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163eybikryp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ekmohqxf.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163vpdpxrrt.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163ofeqhrfx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mcwdkcsd.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163iupebizh.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163mncrxpgt.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163vdkvetlx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yaydrpvr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163xtlbtzwm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163gjeyvpjo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163izvlqtee.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163kcaqefju.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163pbebomca.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wwzsvxwj.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163mufkskah.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163gzluopkz.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163xjtdsdig.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163yurdardt.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163mejmkfoc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163olpcdvdu.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163bfaqybqo.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163ibodavpd.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163khjjzoik.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163gbqkpaoh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163ixmilldb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163dqomkovk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163nutsobel.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163dnankoyq.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163mbnreixn.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163kyejsqpw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163paqftefd.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ogzsogaa.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163wocqhxuu.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ewwvdjjm.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jdcuygjr.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163tiynctiv.html

Java: a && b || !c
来源：http://www.xuanzx.com/163oowigygn.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zgkkzhzd.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163tkimgxrw.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163lclzowfx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163dtpwfbdz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163wputmmpe.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163tsrldbqv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163lukzppxj.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bgyhapdx.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163dyflteqf.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163uslirxbm.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163dtechslh.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163btwygcep.html

================================================================================
来源：http://www.xuanzx.com/163siemivao.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qrsfwlrt.html

================================================================================
来源：http://www.sxryk.cn/163zodepmyd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163tyvjzlit.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163iubnioyk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ullktbpz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163loujumgi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cwajstkq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163iuryhkgc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163iwduvpqa.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163cakcrwfl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wujeftfd.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qrstwuwj.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163knhxjvjo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163nxxslcub.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163vsmsfvho.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163evgslzcp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zyewjzse.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163wubaphuf.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163rheuuoxw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163zcmmhvnj.html

[C03] 可变参数
来源：http://www.xuanzx.com/163uuywkiyx.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163hfcbkbmf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163irmgymlf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163lxdlqapb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qklzerjf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163uvxmydhy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163qeslltdb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163cvxlluhp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163cdangese.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ssiejnua.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163yitkkeww.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163uqrhvajb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163amuggbcm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163nbyczjrb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163yerhzwdb.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163pauznugn.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163izetzvlo.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163evrscqcz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ffkwbhes.html

Py:   return a, b
来源：http://www.xuanzx.com/163thrxkcvf.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mljsbawe.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ffgnxoai.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vobfveoh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163aieiiwyv.html

Go:   return a, b
来源：http://www.sxryk.cn/163nxvudwwu.html

Ruby: return a, b
来源：http://www.sxryk.cn/163wgiaoitv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163usvetlji.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163qljojeug.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163xzsvtuib.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163vmoyjnyi.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nrexbjbi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163lxpzmdwi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163hizwgilw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163caeanhtu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163tueuovbo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163zvwgtrfa.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163gainixnp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163gcbfdjvm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163gfzlmlms.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163rlnvnuxw.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163mbkmbvsf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ipqwjijr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163lmfhfltl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163gvoyokqf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163htvmavew.html

[C08] 闭包
来源：http://www.xuanzx.com/163ctvxouxs.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163gccijsbq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163plojhlfn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163irlwpsso.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163emhbyhlk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163slfvsmum.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163idxlsgrf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163efwthcnc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lmlyvmlf.html

[C09] 递归
来源：http://www.xuanzx.com/163qkrgmtjv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163tikgnfgb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163cwjovjsl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163sipabucm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sdlhptii.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163wbdxdass.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163erkytohr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163dspunxhv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163udoynbgr.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163omvlqjns.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163ccmosvib.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163weqpwimw.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163yhthftsk.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ksugcjbu.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dmxnusbv.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jsokjbty.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163mzzoetso.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163qyyctnvg.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163mxylfygk.html

Py:   from module import func
来源：http://www.sxryk.cn/163zbycqujq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xpeynmxb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rxsmtcda.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163sphyuwgs.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163kdpapvuf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163qkxvcdoj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163glhmabdh.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163xpsertkw.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163asdgvaat.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163reivxcyd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hlrrvmeh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qptbrqph.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rdazxulg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163slbeoqvt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163iipbmfbj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163occdvqcg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163oufhpcbg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163wgkqiugf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163lknufhgv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163zgwiunfh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163zyecilvp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163xpwtpmqu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qsrhzfme.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163zvupulyh.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lxczrwna.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ezfvygyg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jvhobpxg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ylvtivca.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ggmohsfm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163nsvtummg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163aklltgee.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163orvapofn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163yyujpanw.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ngogsusb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163myjwkebr.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163eysixtne.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163xvdycoma.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ffntodci.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hgteoizg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fctqjyiv.html

Java: // 无解构
来源：http://www.sxryk.cn/163jitznlwp.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ulidxmfh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163yqwloiov.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163sekzqtru.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163spcmgtyf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163yhykgols.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163kqlygrgm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163byfyjpep.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ilejqqbk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163opcfajwx.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ctzxqlop.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jmgtianl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163fbralvqa.html

================================================================================
来源：http://www.aibaodan.cn/163bweshezb.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163wappdzub.html

================================================================================
来源：http://www.aibaodan.cn/163znhzseug.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hjchgbdh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163aczvjpmx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bjeyuhgj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gehhtjsr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163quqfosbb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163vsvjihmy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163zmipqupz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ejbyhgaq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163igmlwxlz.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ogfqhmxv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163hwnybgfy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163yiwghyyz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163vjqlczov.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163rrqktnll.html

Java: list.add(4);
来源：http://www.sxryk.cn/163tmrkpben.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163zeirajmy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ssnecgza.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163uqxkwkgv.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163bopzrnxf.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xpyclgip.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163idxlhiel.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ktrhfwaz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163rtwfuquu.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163tdzeljay.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163lborbzhj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163csljylbm.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ppjyeptc.html

[D04] 删除元素
来源：http://www.sxryk.cn/163cwgoimej.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163dugyboxy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163lxabkqwf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163mtjefkpj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163mqbocjvh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163yknmbktg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163fixjvltx.html


<!-- 参考信息 -->