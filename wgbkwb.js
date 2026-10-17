外链999!wailian999！

Go:   switch x { case 1: r = "一"; default: r = "其他" }
来源：http://www.xuanzx.com/163vqrnesft.html

Ruby: case x when 1 then r = "一" else r = "其他" end
来源：http://www.sxryk.cn/163bckwlrnc.html

C#:   var r = x switch { 1 => "一", _ => "其他" };
来源：http://www.xuanzx.com/163abvklvpu.html

[B04] for 计数循环
来源：http://www.aibaodan.cn/163ziswbxfq.html

Py:   for i in range(10): print(i)
来源：http://www.aibaodan.cn/163qtdczwta.html

PHP:  for ($i = 0; $i < 10; $i++) { echo $i; }
来源：http://www.aibaodan.cn/163hnqekljh.html

JS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.aibaodan.cn/163bmystsul.html

TS:   for (let i = 0; i < 10; i++) { console.log(i); }
来源：http://www.sxryk.cn/163ujijznxp.html

Java: for (int i = 0; i < 10; i++) { System.out.println(i); }
来源：http://www.aibaodan.cn/163hlincndl.html

Go:   for i := 0; i < 10; i++ { fmt.Println(i) }
来源：http://www.xuanzx.com/163jlefopqf.html

Ruby: 10.times { |i| puts i }
来源：http://www.xuanzx.com/163vjmcykcu.html

C#:   for (int i = 0; i < 10; i++) { Console.WriteLine(i); }
来源：http://www.aibaodan.cn/163hzfavxow.html

[B05] 遍历数组 / 列表
来源：http://www.xuanzx.com/163oacbznmh.html

Py:   for item in arr: print(item)
来源：http://www.aibaodan.cn/163ljxmjgjt.html

PHP:  foreach ($arr as $item) { echo $item; }
来源：http://www.aibaodan.cn/163jggpkyzt.html

JS:   for (const item of arr) { console.log(item); }
来源：http://www.sxryk.cn/163ewxskkux.html

TS:   for (const item of arr) { console.log(item); }
来源：http://www.xuanzx.com/163umkglhzg.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.xuanzx.com/163jztmrngc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.sxryk.cn/163kctwkoiu.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163veptxbfb.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163lqswzcgb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163iijydljr.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163huiewntz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.sxryk.cn/163lhaglcss.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163lwyuuakk.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.xuanzx.com/163ddvttthk.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.sxryk.cn/163nympujqx.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.sxryk.cn/163ltoxonof.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163xdvrslgv.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163wsjmokwb.html

[B07] while 循环
来源：http://www.aibaodan.cn/163qrcukvuj.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163xitchfrm.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163ktemqqal.html

JS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163nqhmttrh.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163bpqtgoef.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163pfykbqvg.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163yztbkfka.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qkoqivvt.html

C#:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163gshkudum.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163xotqhbjs.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163obtezawg.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163cqcxqajh.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xyxhdmpx.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163fzyckapu.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163etaddwlg.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163iorpybnu.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163ihcddgqw.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163ozwxnqjk.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163lrdpgzjo.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163sxqauvhe.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163walvlrlu.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163vvcnrtvk.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163eepkkbtl.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ppppwhlf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163gomxakrx.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163vbymjwei.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163holvbzoy.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163ublprcyo.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163nuoxrouo.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163trxnekjy.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163hbvhzcwp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163jnavyayh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163avcnibhv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163tbowourd.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163wzylsoqh.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163deajcuho.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163shsmuumb.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163kovmfbco.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pjvvplnv.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zypzzlqt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dtupwbxp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qgipknbk.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163yrgbwjpc.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163edwkwrju.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ppguknnv.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163nybcobka.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163jtluutkl.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163obucvfau.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vlvblxvu.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163auhtjnjm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163qwhslbnj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163svnorctj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163spxrfnhg.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163fiqzidfn.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163lbhbgplt.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163zxucvbkp.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ygfaants.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hvfdlhmb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163gvpkhipn.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163cjqqdbkl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nevsyuhx.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163rgxbyair.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163rfpocbbp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163zrrqtaad.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163jwnngkai.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163gibghfyr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ttbjnvrn.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163wkbzsnbo.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163lhwpehlb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163pdhrybfy.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kyyheygu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163qtmbxbdq.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163wlsiierk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163runkvaku.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163zrgefomt.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163koawsbkb.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163zxlizmwv.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163cenbqxld.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163gxgiglcy.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163ygczhkij.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163dpfgpydi.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gbgdvaqf.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163raoeeqzk.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gszxcyzj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cejtxomw.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163eethpuab.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163mbysmowq.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163hwctqtsc.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163qrxpsfgc.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163sdyajkfj.html

================================================================================
来源：http://www.xuanzx.com/163bsrluvut.html

C. 函数与作用域
来源：http://www.xuanzx.com/163glentcga.html

================================================================================
来源：http://www.sxryk.cn/163jwwjfjpl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163ucfpuqzk.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163oxsftwtc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rbtufime.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163hzlxuuer.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yimpberr.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rpbhdiaa.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163sfplcqio.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163sgzxmjtg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163zrtwirkn.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163nlxstwrw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bpbegnty.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jctxpzhe.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163athhmdpv.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163unyexowa.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wflatplq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163vbwysbyd.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163vgidvftn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xucmwdlt.html

[C03] 可变参数
来源：http://www.xuanzx.com/163mkgjimee.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163bufozhmw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163xmdidqxr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ljizyuat.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163noiyzgaa.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ehrecckh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163bqkghtxa.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163khvcwkut.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163wpumhhrx.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163idfvgbut.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163yctnlbjp.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dhasdcqm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163euwcfgrb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163xykivzal.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163lsasflfv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163qmphhovq.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xhzxoaez.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sezbchbs.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163qwbkogbz.html

Py:   return a, b
来源：http://www.xuanzx.com/163iptjzwlm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163guvwyiuj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163klpvrxcd.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ortmabhm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163cmraibot.html

Go:   return a, b
来源：http://www.sxryk.cn/163udbxbffh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163htuvaars.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163ppicbnyd.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vgaslies.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163gulqrizq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163emhbcodm.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ogyolkli.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jwyszmth.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163cxjflgpt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163nzlkbblc.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163eknnbymk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ezevmzji.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xafdpvom.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163sqhqqqwj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163erpxfatw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ddfzcbmw.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163bahwraba.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mpzdurvk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163bfvqfluu.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163tyendvpr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qrgaxned.html

[C08] 闭包
来源：http://www.sxryk.cn/163ffdrdfjv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163tbaeogoe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163imojrlnb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fmtjkqsd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lwkhthzw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ppypqgvp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163idodmctz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163sdgswkjy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163whpmqmqt.html

[C09] 递归
来源：http://www.xuanzx.com/163havrngdo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163aztokzkf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wznzbixg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vbhbblto.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jdfgtfxl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vuycubab.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163xaamqlaf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163evdevwxb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163mnxbuspm.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163shdcdvtn.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163wujvzsev.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163flobwrra.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xeanwkso.html

TS:   同 JS
来源：http://www.xuanzx.com/163wbjkwcql.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163zvufqrjc.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hetsiegy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ymehwtjv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163wvyherha.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163whgxggzz.html

Py:   from module import func
来源：http://www.aibaodan.cn/163bwudnjqt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163wapbwwkx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163znqvbxnv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163tityaour.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zgxlqkdg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163nbkgsgxk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ujokdzgx.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163urykmhnr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163pokfxjpo.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ijzbxfcp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bfkrqsts.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ghvbuecl.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163dvwoxopc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163mokqtnug.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xmcwthyy.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dboyrlns.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163jrlmsuzs.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163xqsfqhtr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163cjkbsurh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ovqdppli.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163lftxhmqj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qqsfxuiy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uyqevpaj.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163okjebtpo.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hyrfqfkm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163voomffan.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163msjvkjvb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163tnepxnxe.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163hqhfgncm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163xvydkxms.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jscwmagw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163eemqhrun.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163miryukaz.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163pfrrkzmz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163qzlaxwgu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163uexvpywh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163dhlkykvp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163kmzcbaeu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163sijjqqmd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163bhtktbkz.html

Java: // 无解构
来源：http://www.aibaodan.cn/163dmgfxcgl.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zawgccwz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163djkkesay.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163kqxoyfbf.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fejyvtld.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163iqeartdx.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ecpjtqja.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163heidewax.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163wlowxcza.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163bxrukyhk.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163nrbtkier.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163swwvhily.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163vaqgdotn.html

================================================================================
来源：http://www.sxryk.cn/163raanlfcy.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163embgjqvp.html

================================================================================
来源：http://www.aibaodan.cn/163xdhillco.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163kpfjqkok.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163igtkzuwj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163trmwvibm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163plmmwlud.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zsiazcvq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fnenfjjd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163hltdofwa.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163zbikwowr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163worfmdfg.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qyjnwvzd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rqnzhkkt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163epwqrhbv.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ffdqsdhk.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163vzvzyoue.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qtbfsmen.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fgjtjqdz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163cqclvxef.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163mzcamfjq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163fmqihyvy.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hcfricxj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163tlccsfgm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163yodbhpmj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kpliuuht.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163mxcccyyj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163jhjehfkc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163efskdwqg.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163craftavk.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ngpiiwzr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xefnbzoy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163cukxlvwp.html


<!-- 参考信息 -->