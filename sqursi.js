外链999!wailian999！

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163duofhdxy.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.sxryk.cn/163qxxxoczf.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163xlicbdad.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163efxecufr.html

[B05] 遍历数组 / 列表
来源：http://www.sxryk.cn/163tvmvqzdh.html

Py:   for item in arr: print(item)
来源：http://www.sxryk.cn/163kdeptorf.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.sxryk.cn/163xdqfhsiy.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163yfyqcwls.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163jxqbgaxi.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163vuphvwpi.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163ovqjgwjk.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163ctdwifhf.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163ofptghtz.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163qnvgftzt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163jtlfiwtr.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163eojfuuha.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163obkqylfu.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163bnxtchkx.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163jixvogod.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163kcqlvwnn.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163gokuqden.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163lvacqzmb.html

[B07] while 循环
来源：http://www.xuanzx.com/163nphsndol.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163vtoilsjp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163exsvgfsf.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163hrleuebj.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163mkgssupl.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vcixoaaf.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163yhpinubt.html

Ruby: while i < 10; i += 1; end
来源：http://www.xuanzx.com/163uksfheal.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163psdmxzcm.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163hqzwlccp.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163xgnvcdmh.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.aibaodan.cn/163ssrfiiau.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163myxhtafo.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lkcjvwsf.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ngelxehz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ulmutqjo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163okqdefep.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163eezyyotf.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163nznlbryc.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163gthfbcrz.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163fqsnnpzu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pmqnxkbf.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163puapjaqh.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163thdhtien.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163xmqzorxx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163whrhldlj.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163gqangpve.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163jkrlnibp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163ufikdkps.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163tjyqtrbh.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163lviufrkm.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163rkiegjhi.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ailgismf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163lajwedos.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163neqdzquu.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163uuntywkz.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163zctntiwt.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163zmegmyyb.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163tcspcfhb.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163svbdnqrn.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wvhzskeq.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163fnmrdxbc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163zzxobjwl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ecamhlfw.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163vejtvtau.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lkdyqgbc.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163oxtfiuvh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163sebxjsli.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kmkmtbmk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nncatexj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163rrobhjlx.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163aroyausv.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163nfpgiqhk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163kcoxyqem.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163yeushpnf.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163dtzrmjhb.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163fsngnpci.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163zzhvstmf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163goemhkvj.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163fdwitwhf.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nhzkixmc.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vgcrrwgv.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163xokylmlw.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163cvtuceak.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163isnxzoox.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163zkgcbwyf.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163lmszcdki.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163uuwqmmnu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163phwcywng.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163oxileeuw.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163fwmqesxv.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163evtbmrax.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ydtgegjp.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163mqoywnvh.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163uiphoaqg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163ieuekvgb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163cmdggola.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rlqqjuxm.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163tpaldbfp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mnrwybni.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163fqpivgzl.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163bukzdzna.html

Py:   if not data: return
来源：http://www.sxryk.cn/163dqmyxpyl.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dswbwbow.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hhjxgonx.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163pmfxktrn.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163lnbrflkr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163gwwujgxa.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ariyjunc.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163iiylajed.html

================================================================================
来源：http://www.sxryk.cn/163upfrqzjd.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163arhlbhrc.html

================================================================================
来源：http://www.aibaodan.cn/163whafvygm.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mziyymlr.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xdcyilla.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rxzviiby.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163bphbytla.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rnstrdoj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hqzgdtiv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163cwhimkmo.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163iiuwfbni.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163gkovhwxr.html

[C02] 默认参数
来源：http://www.sxryk.cn/163flfscbgr.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163nxlpznkq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jjqahdqy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wyxdhprn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163aykpyduu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ningtebz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163uboslydh.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163mxlfefxl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163dexravyr.html

[C03] 可变参数
来源：http://www.xuanzx.com/163eechajce.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ulddmryo.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xqxdzovw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163seshwtqk.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jbcutnhx.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163tawokdef.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163elyjmryf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163nxfnrdqm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163nrbcapgm.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163hsnjjpbl.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xfejmpcf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163imehsnvi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163zaonsoqv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163nrrrormf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163delncmsh.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163uszemcsy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dvmpiwcm.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gsegomba.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163kbwdcvjb.html

Py:   return a, b
来源：http://www.xuanzx.com/163btosrsuf.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163hqotikqy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163roofwjoy.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163xdoipzgd.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163qxhbodnj.html

Go:   return a, b
来源：http://www.xuanzx.com/163rgiocyji.html

Ruby: return a, b
来源：http://www.xuanzx.com/163unuxoqhr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163cslwpqzp.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mbvoisin.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ahhydjmi.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163apnsybzt.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vjfryfhf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163puhxtrtd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vsihhynk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163lyyhjgdg.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163mzoxsyqg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jpjzoanu.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xqyoaiap.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xlnakqhf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ivptnjua.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163adgcjgwk.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163emavlnvq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163joilkiap.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sbnqkbze.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ejsxujgr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mvhqwbvo.html

[C08] 闭包
来源：http://www.sxryk.cn/163pfxzfbyq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ulrghvhn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163guphxtqn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kxscyafv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163syxixhtq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163uzboqolr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ogyixsqd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163gokkhjkn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mhclsjue.html

[C09] 递归
来源：http://www.sxryk.cn/163iorfyvpq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163pydczvos.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163wbidcvkt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163nlmtepgs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pbgyjlgc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163hoqapfcv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xghctygo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163iotamjzr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163pwosixcs.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163olbxcalc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163dklxaele.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163fhtfuhtc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163cnqdewan.html

TS:   同 JS
来源：http://www.xuanzx.com/163ecfcbckw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hqbzsfuf.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163oukcjumq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163sxawnzwm.html

C#:   块级作用域
来源：http://www.xuanzx.com/163adlgmuwr.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hlpaxipi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163twlnlnbe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163iqwcuwuk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163leaebmct.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163bpdvppjq.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ijrrktty.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163sgwybidm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dnkpmkpj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rtmrryym.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ftarzftt.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163yxwekwnw.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qmizzrdb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163uoezxgks.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ehatmroz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163cmrewpbn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163xzlzoqgf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163swjleair.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vnousprk.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cfikhltj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hdhuhhfk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mzvvpwuk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jvvljupl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ljctpcrg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163quyceibd.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cftnavnc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163iaethmgi.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163wxebetoq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163sderskpi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163lrdfuxso.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163bqbaqqte.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163muddtlkf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163osfsqvvc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jpqijvhf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163cilqndbo.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ubpsvhtu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163miyruhpk.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163qphhzuyj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163gxwoaaot.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xzhulrxo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163hcwfqxco.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163osfeatmm.html

Java: // 无解构
来源：http://www.xuanzx.com/163ktutkwsw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pglkjlsm.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163uhayskjb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163srbfmjgu.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vsvokgna.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nuevgbjh.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163rmofanxe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163hjqknayz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ndwckfei.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163qihbtdaw.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163zjlcztid.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ecolsvvx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163vbgoqpwh.html

================================================================================
来源：http://www.xuanzx.com/163ohnluymb.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163tdengray.html

================================================================================
来源：http://www.aibaodan.cn/163ptoornwh.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vigmljpk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ivlpkzrm.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uqlxspow.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ryqfyvyy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163qmwhtapb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163peeazqjf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163njavqsia.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ppjcawgz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163jksoesoe.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163zrubqune.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ujglngcm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qbrolxin.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bzjdlzlj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163otmoflpv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fvzcbslb.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163kiinxxyq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163nbofsdwj.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qbqxdyzg.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rndkqlvr.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163aeyfppye.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163czkxbahh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163qriukqgn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163fgiznpfx.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wmzvplbs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163agtgghzd.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163yzzkmiuo.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163empgldsa.html

[D04] 删除元素
来源：http://www.sxryk.cn/163fwagpvdi.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163omxgnmhk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163mcwcdzod.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163bpdgizct.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163frknramj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163chnwjzgo.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ybknrqkh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163fvuccruj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163wfxmwtxo.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163tyrxnzhh.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hgsapfux.html


<!-- 参考信息 -->