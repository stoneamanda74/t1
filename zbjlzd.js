外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.aibaodan.cn/163byoispez.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.xuanzx.com/163yvwkwrhl.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.aibaodan.cn/163nqhfuopk.html

[B04] for 计数循环
来源：http://www.xuanzx.com/163jekuqjtf.html

Py:   for i in range(10): print(i)
来源：http://www.sxryk.cn/163omklkzqm.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163bccsjanl.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.xuanzx.com/163qetcwqdu.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163fqzomnbg.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163fobtxlis.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163yqkhvqvi.html

Ruby: 10.times { |i| puts i }
来源：http://www.aibaodan.cn/163xbultzxd.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.sxryk.cn/163cdseemae.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163jbivjzmd.html

Py:   for item in arr: print(item)
来源：http://www.xuanzx.com/163asjuqvdh.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163pfhzkjig.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163baoqsbdl.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163ncvnkbbr.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163bghtphcd.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163swtwgkwp.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163uuifruuk.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163fjcozwxe.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163mfoiywrq.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163vpqrqthc.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163iiahfsbg.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163tyvrgutl.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163oghntaai.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.aibaodan.cn/163beupsmrb.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163cvxjftci.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163gmbnozmj.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163zldgtmmt.html

[B07] while 循环
来源：http://www.xuanzx.com/163yrnpnwcl.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163smffgqyp.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163velakdna.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pudfodyg.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163epkbyqru.html

Java: while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163pawolcga.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163apdyyjdv.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163iwacgqco.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163tmmlqbmk.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163wdmfclao.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163mkutvlfn.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163yfqhjexj.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163ggreljga.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163acbftwio.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163bomhycxg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163efyfqavk.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163mbkdfgft.html

C#:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163tyjtlkoo.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163jlarudge.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kchzsxvs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163wcajtbke.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163jiefgltx.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163njhflukk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163inxankim.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163dbanlpnp.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163ahptevpx.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ikemrhoz.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163qjelxanp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163cireoapv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163wafevcnf.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163anfxhrvq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163unqjhccz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163oqgsyvbl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ycwyppaq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163tctfptez.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163srqjvrup.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163iafowqvy.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163mdizqgsn.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163tlfrlffr.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163heugsdur.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163deexstyo.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kpmmjyyp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163dvlykkpg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163lmqvzxfr.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163pittknpm.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163vywtedvr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163iuorjmub.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163nawgujuz.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qxlaxzby.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pdtebzyj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qphehauo.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163kfolawje.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163xnazeggf.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163hertbwav.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163wkzsbqvy.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163fnxmrygy.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163ilvlgqcw.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163hvzngutp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163hmztqgda.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163fotyftus.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qniyfzep.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163wlzvwyow.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163abgvpceb.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163fvpvufvq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163smazvokp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163ewouphct.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tipztcru.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163bnlnzodo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163xxwudeox.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163vqdddiew.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163njvcbtup.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ukghlbzu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163ympksoud.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163chxwzkmx.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163lnmeefei.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163trdmiguv.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163oehkrdsj.html

Java: a && b || !c
来源：http://www.xuanzx.com/163zctxoamu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lpdcmpkl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163knohaexs.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163kcheofvb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gmhjwusx.html

Py:   if not data: return
来源：http://www.sxryk.cn/163lufrwptz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163zcmbqhuj.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163ltmclkxg.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163wweivmrg.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fjdcgrjd.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163mmwnvxil.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jhzhsmwg.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163elotwixv.html

================================================================================
来源：http://www.sxryk.cn/163euwtsirx.html

C. 函数与作用域
来源：http://www.sxryk.cn/163fuwvugxx.html

================================================================================
来源：http://www.sxryk.cn/163alqnfrvq.html

[C01] 定义函数
来源：http://www.xuanzx.com/163etzwpuev.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163kraapfxt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tmjkbsgt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163echkylbt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bjorvkba.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163guuhnqnz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163rrhgkegy.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163xfnkywvw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jprevyzu.html

[C02] 默认参数
来源：http://www.sxryk.cn/163oepeqpdm.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163rdcsjxzu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163fkpewcea.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163wiqxjvit.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163arrtxobb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163krfymrki.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163zrmtuicv.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163qsngdohu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163uzcebxoj.html

[C03] 可变参数
来源：http://www.sxryk.cn/163jdafadfm.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163cvgbiwdy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163osauicch.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hpccbcme.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pdwiwxpn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mzfspyfg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163olrvulqf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163imkudttp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163kvufdwjq.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163waoehara.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163sjnjlquc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ofhfosth.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163uxhjcccy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163oeqztfru.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163evccutve.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163mgwvjgwy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wtjsmvza.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163fyrqxbtf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lzimzroh.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vivqhita.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jfmvtyij.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163brcwbgbl.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163qenvgqxf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163lcntccsf.html

Go:   return a, b
来源：http://www.sxryk.cn/163gsgomomo.html

Ruby: return a, b
来源：http://www.xuanzx.com/163xkwdwulc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163zvkjsulm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163judzwdrh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163otcqsrwz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163nrdfpcuw.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163aaudekof.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163qlqfdeiz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163epreybxe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163rbbmhivx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dtceiyqi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163vbotbulh.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163nyopmhti.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163idczuuck.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jvyfntod.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wjspfqec.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163vjpfmrpg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ccwujtlr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163sysbielq.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163onbfvayy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ickvifnx.html

[C08] 闭包
来源：http://www.aibaodan.cn/163cfznncfj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163bagzkczv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jvwlucqe.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163twdcdpwp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gqaxtshr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163iuqrxhnq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163uzbtalgn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163bqqitwsi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lknzelpp.html

[C09] 递归
来源：http://www.xuanzx.com/163bmhwfkiu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163fqgwvfwq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163lvbasgqb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163aejxeoig.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ziomjdjk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vvdxygmn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163idesyjqz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163lywodnit.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ihsxmcrx.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163whcqadvr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163vdkovnsv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163rwuuhlvk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163cphfmxfg.html

TS:   同 JS
来源：http://www.xuanzx.com/163oseuwfwf.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163nekmwztm.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xfvnyvre.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163qgqpmkuj.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163hsinvruv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163nirsampp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163wntssccx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163fuscufmc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163svrtfgms.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163flazlvuv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mgobndsn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qqeksdlj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163cutnqywu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163vnuanqnv.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163cegsbhnt.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ntolirgu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xptaswjy.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ulomkqpl.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163faewyxam.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163zlrztcwd.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163kzclufas.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fsrnqusp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163gllflkxp.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163micqmgql.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163qodixpna.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jcfyqucf.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ftptlhrc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163asqeqcax.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163urkyhmjw.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163opgnlaue.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163lnujcrol.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163upiknaee.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163bzpuqbvn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163duyppvtt.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163wisgmkgs.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163axwjrtwn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qrcawuxr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163luvkhkst.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qeebrcvo.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163fdsadoww.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163keojvokr.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dkugwahc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163abwrglug.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163njnlxfds.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163sdppfood.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dqjlibjn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163uftwblrs.html

Go:   // 无解构
来源：http://www.sxryk.cn/163debquans.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163csdjoxgb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163clivjqla.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lezzdkrn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163pzknednu.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dggckzxn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qdcgjtoo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163sphggtxf.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vkdezcyl.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163uiyxaivz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163hnabtjoi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163shenefgb.html

================================================================================
来源：http://www.sxryk.cn/163lnqjaaiv.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163zlzpgcdl.html

================================================================================
来源：http://www.sxryk.cn/163nqolsqkb.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163rbmkmepw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hxkwfsso.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pmbdeexp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163fypeixyl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163soxicemh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163progcwzj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nzjodbil.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163yfvidhps.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ptturgeb.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163zzdzyjyk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163qxtalvgg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163jexacruf.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kuvxjfxu.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163cahjlfbo.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163kxcjywbs.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163mkfvpgzo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163eiyelqdw.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163drpwabtv.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163nxpxmrqu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ftnbaqyh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ngnsfwex.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163qzqbgpic.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163bbybhmit.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163jplnqbhf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163uvufysmj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163izdyrcjo.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163yibjqlop.html

[D04] 删除元素
来源：http://www.xuanzx.com/163nxmrotyt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ogmwykoa.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163nvcxszws.html


<!-- 参考信息 -->