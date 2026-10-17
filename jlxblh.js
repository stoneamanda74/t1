外链999!wailian999！

Py:   for i in range(10): print(i)
来源：http://www.xuanzx.com/163bhnjxury.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.sxryk.cn/163riigdtxi.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163hzicivim.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163wkhtvcul.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.sxryk.cn/163tilvxzck.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.aibaodan.cn/163gccsfjps.html

Ruby: 10.times { |i| puts i }
来源：http://www.sxryk.cn/163ttnmehmc.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.xuanzx.com/163lnasdqol.html

[B05] 遍历数组 / 列表
来源：http://www.aibaodan.cn/163cvtsqpop.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ruhcfzln.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163eupwgmnx.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163iaoveqks.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163zpftyyty.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163tfactlwj.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163rafekxlz.html

Ruby: arr.each { |item| puts item }
来源：http://www.sxryk.cn/163mhxkoqsj.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163rjklqnpj.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163fbbunvny.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163szblaipb.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163tcewmhks.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163frfrjhev.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163jmjxvvlc.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163lncwetam.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163wpczaeai.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163rcmkytzd.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163jlupcinf.html

[B07] while 循环
来源：http://www.sxryk.cn/163cdtgavfc.html

Py:   while i < 10: i += 1
来源：http://www.xuanzx.com/163xparisqv.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163hehgxtnb.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163emuuukqq.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163aewonyxe.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ngtsbxrw.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163aenysdpx.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163ghfulvxv.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163lxvjjlww.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163ssmmwseb.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163vfllcces.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163eqvcyiqs.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163otbhjgcq.html

TS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163kloncjqu.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163coceukuz.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163ykuxulgz.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163pkymekak.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163okahemjj.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163qlyhmdtb.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163rrdshfxh.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163gsdlziyz.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pppvdiwz.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163cmrrqyoj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163xwqciuvv.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163jjnhxdma.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163uhcohnfn.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163cnmnfmqo.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163uiwwvlzz.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163tzxcvbfa.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163hmseumhd.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163kjxbljuc.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163fpurnucp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163hzujitvt.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163ogtzpiot.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163iwqgkcbd.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163xhiovfnq.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163gmktudrf.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163sqkwvafq.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163gopanuau.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163xjbrpfzw.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163itawdrlb.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163ckxxbmmd.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163fgihwaac.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163efojabub.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163fhfdujai.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163lyywnenv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163tqaewbeq.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163kbwaxnvk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163eziffkaj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163mansugge.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qesunaob.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163uzmnwykr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163tksthnzy.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163bgznzrzk.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163nagxiohk.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163hqmmahxv.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163seagdhaq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163vykgatni.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163mjsxvvuo.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hxdqrdgs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163dfubtdao.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163olvhumfi.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163wjrliujp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163edhzcuav.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163zcvkkemu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163damupwrv.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163xrmkeote.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wqzxfqol.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163gcuvxgwz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163oopdnfld.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163cudygnkl.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163dauafsza.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163ulplbivu.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163zqumvppu.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163tzgtmjgg.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163bvdzapey.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163mqumlyje.html

Java: a && b || !c
来源：http://www.sxryk.cn/163slkgxtay.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tqmdbjgm.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dpsxzaua.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163wczqkdxz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ixtnxmuo.html

Py:   if not data: return
来源：http://www.xuanzx.com/163xsnjdbkz.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lxbfqfgp.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163llqfecxf.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163iqnbzrrn.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163fvoywqdf.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cngjrjib.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163brcjmpmw.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163uzypqotr.html

================================================================================
来源：http://www.xuanzx.com/163cjssaywq.html

C. 函数与作用域
来源：http://www.xuanzx.com/163yyolaeim.html

================================================================================
来源：http://www.aibaodan.cn/163wbffuisc.html

[C01] 定义函数
来源：http://www.sxryk.cn/163twtoazig.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ddiwwzeh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qsbnybwa.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nqnptqss.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cereacdp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163liuozuuh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mbhpuiqn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vjxbxjdp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qrtxqvtf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163xpjffupl.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163onklqxob.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163daejbbvq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163wjjbtxps.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163uvbhfyrw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163mpzpupyh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163oeybzuwx.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163lmwudfee.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nkvhggcd.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ywxqmnlw.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zbdloewl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ulwmyaop.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163pwzhctno.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hegvwgwu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163fdouzhzc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163admuiqtx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ffizajkw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163stojoqvl.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163uamrtrdf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163mtienfmh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163gcmnokrs.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163eqaigkmj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163xshmshrj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163yevlftgz.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163nwaoobzs.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163lwujgnrg.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ehsjjthd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163kdashapf.html

Py:   return a, b
来源：http://www.aibaodan.cn/163clgizeho.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163veuwwgmv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lpuahvgo.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163shndjhjk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163poetxwgi.html

Go:   return a, b
来源：http://www.sxryk.cn/163kuwbauzi.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ieekrznp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163wdxilvha.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163bdoxzbjd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163gztmorvy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163yvsqbije.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163egsgxjyh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163wmrnqmee.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163lbaphtvm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bvfkdoiy.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kuigntoy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163qphdqabu.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163fofgjrsw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163pmeumyqi.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163pvhxztxh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ujrrugva.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163irltxgwp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163isdmbucs.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163syukycdl.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ysuaahxq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163shbjuzzc.html

[C08] 闭包
来源：http://www.sxryk.cn/163uncgnirq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163zljptvic.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163maiclmvx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cdfapcuf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zihaldvy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163zhwgouxx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163flolyxpc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163noxpkxef.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vrhketvq.html

[C09] 递归
来源：http://www.sxryk.cn/163eysadant.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ztawalik.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bajwjxjl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163beqlkjjb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ddiugycn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xqqqfpkn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zbdxvkcs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163taqenwua.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163mjhnfayr.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163gqevkqbh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163yafejxuv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bfgmycjv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163jctlenpr.html

TS:   同 JS
来源：http://www.xuanzx.com/163adnjiuba.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163gnyyqgwn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hivzwqvw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dptpegqn.html

C#:   块级作用域
来源：http://www.sxryk.cn/163tzqkqktj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163nsxmtein.html

Py:   from module import func
来源：http://www.sxryk.cn/163yatdfmbu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163euejzkna.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163sdahlnah.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163tbxuljnd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nfyocixi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163oitnavqn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163kbdirgus.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163hhsfgcpq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dteycdod.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163atcgpoyq.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163iphjtson.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pinkzxlt.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zretyxng.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163cvfoaion.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163tepuuiaq.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gizuhbau.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163ecocxyzk.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163blyednrz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jlwstlkg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ilwobsil.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163vmamhukf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163dynifrvn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ndinyaxn.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163bzccfguv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163qxfwqxwa.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163tgmzfunk.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163mkqnfbdg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ncohcbqn.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163xaguzmjz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163npqorpjv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163rkknkqwm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163sejphxwp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hyyqbtrg.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163buohopgd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163breivstg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163iaiqoozk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163rwqzmvpa.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nchzpvkp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zlgwrxoi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163wqsfkuqt.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vqvewuoq.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163uhtucvgv.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163hwjimjtd.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163tsywhnmm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163kpnixenc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163afqvabbh.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163iwjswsid.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ekbkbzib.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163jkvddaqn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kvofisfm.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163qwemhlss.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zbwnujxv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163riggaxmq.html

================================================================================
来源：http://www.sxryk.cn/163tbovtjzg.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ocjssdog.html

================================================================================
来源：http://www.sxryk.cn/163jfbsoben.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163miftdxrf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zdamxkpb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163dpvklthl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163hazfidxb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163pgewjefj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163sayxckwd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163niddbvzk.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ygebicwl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163xgugzocy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163gniddyfn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163nekkrues.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qzukecok.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163uwyjvefb.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163cbcyfwxn.html

Java: list.add(4);
来源：http://www.xuanzx.com/163rwwjpzpe.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rejshzdo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163aoiqkpph.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ocrtrxbx.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163dajdkudm.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vcgvxths.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163lpolfpyf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163rxfryquy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ifxwmpso.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163mgynivfi.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163gdawzitp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163movdgyhb.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ffdqlxir.html

[D04] 删除元素
来源：http://www.sxryk.cn/163hvftgqrg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163cnglvzeh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qcghbjwe.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163awfjfain.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163yjsuxqnw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163dejaqfwy.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rtnkrvdr.html


<!-- 参考信息 -->