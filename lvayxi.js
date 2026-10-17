外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163vtgpgrqv.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.xuanzx.com/163emnyetio.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163oswlpjos.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163iuzkurxe.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163tgwvygwn.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163wjsbuylm.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163kzublryv.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163qphrmtoq.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163cnijxpxr.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163adkmensm.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163pmmzhhrt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163lniogijt.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163wymoetkb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163gpmwpqoo.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163fsnkxcbo.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163laqernei.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.sxryk.cn/163pilcduiu.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163amiwsgvv.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.sxryk.cn/163dhnlapsw.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163watcfeml.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163ndmqhuia.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163iavpfwxx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163lefacfoe.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163nsxajndr.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163trubfwtd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163podhrwmt.html

[B07] while 循环
来源：http://www.sxryk.cn/163lhtcgosc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163vkmoezqz.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163tafwzyke.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ajtmuios.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163urewidmd.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163sfglumxh.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163horbaizv.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163fxiyhant.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163deftasyw.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163hzvnpwga.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163wrxerfso.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163fgkpunbr.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163utgtoowv.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ikxbadir.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nwedgfkj.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163cwwcgrhs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163mqfbclch.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163kpghvuif.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163hcbocsqp.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163yrifbzwv.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163ulcaxdnc.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163hqgudwvy.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163snqfvnem.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163xasktnme.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163lvngqhzq.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163dlvulgoo.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163ivfvjrqe.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163aehajjhj.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163tsmtgqgg.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163ewxyayuq.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163kdwjjuqz.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163rgoanlvv.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163yogrxxsl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163omizawpf.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163xmiqztcz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163nlonkcoj.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pjsmqygy.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163tsvklapv.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163cpkcddmq.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163pdogegtm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163pjouljwn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163jguuqsrj.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163azwjhjej.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163dwxkmxfl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ldkqolqr.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163vdtcoqti.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163cenqulot.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163zxmcbhez.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ydlmaldb.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163pcnjcced.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ukxpujgc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163oneamczf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163oxfnndzq.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163zowhtzdf.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163lexnkicg.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163fpouvvtp.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163wxmhmltb.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163nouqgaum.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163jpjayflt.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163akecmcdr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163fvfbghtt.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163dsffxybv.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163zhebtsew.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163gqlrgajk.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163llshxuif.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163yhzdqiog.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163qwlcnbej.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163aawgawqq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163uxtxxerd.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163mjyvhlrb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163cezhqltn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163evmuzaln.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fxaqdnyf.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163zhnfgfvh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163jifvdkeo.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wkshuyky.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ahzuozla.html

Java: a && b || !c
来源：http://www.xuanzx.com/163vledpbak.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ngoldtry.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163ginfdhbm.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163jhbampqg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nbqekxhm.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163jevtygjr.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163degmjvcy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wgoxcsgo.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pnuvrraa.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cxtsqeur.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163sykgulbi.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163dbuowbaq.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163iastfpyi.html

================================================================================
来源：http://www.aibaodan.cn/163qcgqjmty.html

C. 函数与作用域
来源：http://www.xuanzx.com/163stvpcggk.html

================================================================================
来源：http://www.xuanzx.com/163xtpszito.html

[C01] 定义函数
来源：http://www.sxryk.cn/163zphiperh.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163efhlvcyc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fxqsquoo.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lcsazewm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mohrzidp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cephugza.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163juxouirr.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163nlloiitm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xjapovcq.html

[C02] 默认参数
来源：http://www.xuanzx.com/163wbnzwciw.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ftuhyiii.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163bvuddcqk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163uqmrpnbk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163xojvqcqy.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163czescluc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ibknohso.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dzhnyqxk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163fwwawtgi.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163fdwvqlzt.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163fptqdfye.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163fsqspgiu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ieqaaedv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wuetfkay.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qxxetpdx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ejqskied.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163cgbwkbqk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163qbxppqsp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ucnzggda.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163vmbvkyyr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163npjiuvhn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163gfplrpyd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163sbooxcre.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163esmrctxs.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163mpmxmkgo.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hrcmvyzr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cqpmrjeq.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163xvzpmcrx.html

Py:   return a, b
来源：http://www.xuanzx.com/163pecreycx.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163akedykcz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163zmchovny.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163wsxeyxuq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163scltzsjl.html

Go:   return a, b
来源：http://www.aibaodan.cn/163vowmgnfb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163qliylvqg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163sqlzjcvf.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wainmdnn.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163zggjeoba.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163fgeddloy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163qypmwwfk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163vqqiiaby.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hotusqtd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163dfwutenb.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163gtanlykf.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163eufurmpb.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163smnamqgh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163eygpezxx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zecvoskm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163omquyana.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163wewzezzm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xbeiopnm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163nuirozsn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163spmdnbhv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163jwnzszxc.html

[C08] 闭包
来源：http://www.sxryk.cn/163pgntxwgp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uhghuqfy.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163weagopxy.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xrhzmmtb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163pekkqupp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163xblslvqb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163naddxndn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ieuipyyl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sbmcncvl.html

[C09] 递归
来源：http://www.xuanzx.com/163sohmwsju.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ixnjrqem.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wvnyfleb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163mxzipujm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xwucxyoo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163qxcvhsza.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163jtxclwkg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qeiaawjo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ndlgvkjq.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163froedzfk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163kpqpskoh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163fdhstque.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163tihaeaka.html

TS:   同 JS
来源：http://www.sxryk.cn/163tzognray.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163hzpytnzg.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jykxllyz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163obcfujfh.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163gkznglil.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163knijaglc.html

Py:   from module import func
来源：http://www.sxryk.cn/163zgikioxk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163aotbhcvq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163okfaqtwo.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vbghqanf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163tpakxyjz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163kwrosygv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vtcmktxv.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163wmuthonr.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163cqgiroxy.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zdnwdvss.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ofsteqnm.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dqvfgfps.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163kpcogiua.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163nexjvghw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rfneugjm.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163sevurjih.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vlelyfaj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163tuztpjnt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163zmolbfiz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rrhjgcsb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163uqbicpyc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rsldlfxy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lflmnnwh.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163qwurwttq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163uztkpudt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163zgnpaqdh.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163syhipddk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163egcmpxhx.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163fzcmldwv.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163tawaybnh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163qlfisitg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163qdzvbppt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163homuvxra.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163fulhctnc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163buerpkye.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163eyquitvm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163pmkgxwii.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xpnezizi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hdzsxlbe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163scnvipif.html

Java: // 无解构
来源：http://www.xuanzx.com/163ootnbrhb.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163jiliodiw.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ucyqkbbf.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163vugnzpbf.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163pjmiaxtx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163aojibaqe.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163homdrtff.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163fhqcxvji.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163oytyufgx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163cxbgdxcw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xhpchwdl.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163rphociok.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dgzftqws.html

================================================================================
来源：http://www.sxryk.cn/163xsjrgfjt.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163hoosrzul.html

================================================================================
来源：http://www.aibaodan.cn/163pqrxausk.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163miwrmnlq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163tunfsyan.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163euaycbzr.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163cjpxtcgk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lhehjtbf.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163cyesgwic.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163vynqmwut.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163czrenxxq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bukizuiu.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163grjegroi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ojhhgxzd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163blefhvbv.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163xfrhoofl.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163mifvxiej.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ypjsyskv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163uetzdrlb.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163rqfiqicq.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163hkbhulhw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lmzxvfkx.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gmybblqx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dcuqdpil.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163naiaunay.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163tmtrbtvz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vqvmojtm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163afcrklmo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163molprbrg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163qynvwrlf.html

[D04] 删除元素
来源：http://www.xuanzx.com/163apejwvsz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163csxhjcme.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163pjulrwcn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163rmhxvyce.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163dbdafgtk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163glvclkkr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ncqwpbey.html


<!-- 参考信息 -->