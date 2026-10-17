外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163kbawbzeb.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163mvbiuorc.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.aibaodan.cn/163tlsknivq.html

Ruby: arr.each { |item| puts item }
来源：http://www.xuanzx.com/163nhzuopdu.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163wazvbicv.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163ihzkrhpm.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163kkstfwev.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.aibaodan.cn/163uqqunozq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163zrdanweg.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163idvnhbma.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ahihshyn.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.aibaodan.cn/163hlnmlcaz.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163hnunsvfy.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163vauddhfs.html

[B07] while 循环
来源：http://www.sxryk.cn/163mdlzssxw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163clgevwjs.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.sxryk.cn/163douthkjw.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163blfvrtda.html

TS:   while (i < 10) { i++; }
来源：http://www.xuanzx.com/163xsijkwsg.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163vfuxhmbl.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.aibaodan.cn/163lcjuypjl.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163vnecofcj.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163zvxhhfde.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163mmjokztj.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xdokokah.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163thgzaukf.html

JS:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163iosurcri.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163hsomhceq.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163pfhvmevw.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163uwsuljbm.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163aclxengt.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yibbmxgp.html

[B09] break 与 continue
来源：http://www.aibaodan.cn/163qjusyrsy.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163tdkisdqk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163wqlvuife.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163isoenxis.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163rqexssbu.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163qecxdzga.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163cgjuhgfn.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163jsmmuyye.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163qpvoykbf.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163sapreyan.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163kuqkhxwy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163jtfienkl.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163dnbfnhgw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163odqpwids.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163vvesdeyb.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163zcyjckhv.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163dxkubbie.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163uzkbnief.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163hqodvcvf.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163mxwmnaoe.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163qytquxpm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163wtefpgzp.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163swqmjniy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163mytatqsi.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ceslzznm.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163sigxhozg.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163zkicuofp.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163wmkmgoew.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163qpffqiof.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163wifubuuj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163labsoctc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163hhfotvfr.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163rstwxdar.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163lywcjoki.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163oubrirnn.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rzloxivh.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163wflsjhoq.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ogsdunkr.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163cfiohzai.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163czsqmdsp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163mgvtenle.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163lpngspvb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163urdyobby.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163jpzmfijr.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163lfzlkyfp.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ijassmfd.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163qeoppffg.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163usigegdx.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ctckmzph.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163gyzzuhsd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163emuvzxif.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163xximxdsc.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163oifxrzds.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163vsmidmhb.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163vufxjrtw.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bahgpvpa.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rkrizfzg.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ouunachn.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163scclchoe.html

Java: a && b || !c
来源：http://www.xuanzx.com/163rgvefgnf.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163qxvomoqu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dbhvbcoz.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163cqnysnqq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163iouvjkrk.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kjvsiuaf.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163lglmcwar.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163hmdqzwyb.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163cahylgsy.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163oeguoxif.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ybaguiyr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163dhzeeymk.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cxdhtmob.html

================================================================================
来源：http://www.sxryk.cn/163ogdgvneb.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lermadwv.html

================================================================================
来源：http://www.sxryk.cn/163pflyjufy.html

[C01] 定义函数
来源：http://www.xuanzx.com/163dzwigibx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qssejjgr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ychsdvit.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163wfncykfy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mevcxudt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163swikkfoi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163kwkvbxpn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163pqponhud.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pkeazxvh.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ixsvlafx.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163gqqofslg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163hffxqwag.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ogryqswx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163bxprasjl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163yewltchm.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163fvsjevvl.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163lduyrarz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163afoscfqa.html

[C03] 可变参数
来源：http://www.sxryk.cn/163oqlwrmek.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163frqokpby.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163jgdzjhsw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zzowtqap.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163orypkqkz.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163enoupkcy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rtbsrrrw.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163bjxzgkpr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qwitqcza.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163cpktersi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mvxsbbnn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163nohaclcf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163foghfnuj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jqsaimtj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163sabvrhoe.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xmnqyxyg.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163kgtqwkld.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hkezdcjs.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163dkfyvkmr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163swbnpyjk.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163skdthcsz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tjgurkns.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163fccitcgx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ygdlrfsb.html

Go:   return a, b
来源：http://www.xuanzx.com/163vohytimd.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163ysmhecwl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163fhfxqyhr.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163mlpxsvuc.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vbauimzd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163usvfxjln.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163dlwibkre.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163pgtvqtdi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163orngxksd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163hcswzwye.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bvvjfwmv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ysmbzlcq.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pygxzwos.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163jamdfzeg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163alagrkkv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163emiuilvb.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dolauruy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ouphlyph.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ulldgctr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163rfqilftj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163yuioefgn.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fplmyofl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163helhbero.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zmvikreg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bcxgpnan.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hlxjctsj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163eiitxnfm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163htuehkwf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wlplfvdj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mjdsxrmh.html

[C09] 递归
来源：http://www.xuanzx.com/163iiwozycr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163rigddryc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163enqkziih.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hlxaurzn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163lvzmpoza.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163elaynvkj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ltsdnpwh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163afzflzbb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zyeicuih.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163taoihrqm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163avplrhex.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ivsjjuwr.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tfhoqlfs.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zjcwgvrl.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163lpawafbr.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163wosaazmg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163cbbbupzi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xninlbmk.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163thjcxwdh.html

Py:   from module import func
来源：http://www.sxryk.cn/163vdrxawky.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163lnayxwrh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163biybaqjj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qerlehbw.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163aryrsngi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163prcbgxdj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163erwqwgwe.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163lmvojigb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163turuvxkj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163rvhynvzt.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163aslsanuq.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163layfvxfw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kpszaehn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ezbsswlu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163curyxlyc.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163llyxjera.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163xecswixn.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163wgqkjygk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163psmqfzmm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kkvhahqy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mfgqnmga.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163peetrunt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wytezuin.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163nteosxyd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nvijetlv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ialcgxie.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163nyawpzzx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163peilhqkf.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163cyhljbwd.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163eumszsfo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163kcltwnir.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163fhaeyxgq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ppusctwq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ieyeljij.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bzhvfzkp.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163vqzmwkny.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163mdnfhbnm.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163htjyezsw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163kbwzddpe.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163jmqmhlzf.html

Java: // 无解构
来源：http://www.aibaodan.cn/163sdsxxnuy.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xfhatnef.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163vvkpsvyv.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163lgecwcmu.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163aoqsqkyl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uttndudn.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163noxyfdfh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163yiwvtydm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163mxzprscz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163hhczgcfe.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xqybmocl.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163czfibypz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163wtjbvrim.html

================================================================================
来源：http://www.aibaodan.cn/163jqzdynbe.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163tddikrws.html

================================================================================
来源：http://www.aibaodan.cn/163nuvyxsyg.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163oxwfbbpm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163grcpblyq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163kgitvwck.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ajrixtdn.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ywgpnmhl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163yudqjeer.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163hpkygyww.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wckwakix.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mmnzucwv.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163wrmjsqqj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163riukwpbs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qbpgzydz.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ejgdvkjo.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163mmhdesxr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wxzlcrgm.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163beiyrfrq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jiiejlot.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163nigyqgfs.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163bshncdbd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163tkwdtdbh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163nucjnqnh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163yumedmhy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163uxwlzczw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ezciiibu.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163dxogovgj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nzrrtitv.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163uqazaahs.html

[D04] 删除元素
来源：http://www.sxryk.cn/163mshpdjum.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fedvdyui.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163wnsaamjs.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163htakoaqj.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163cqhzebna.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ithggvjv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163fznnellx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163uoxjoxyu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ovkmndiu.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163duqdevqu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163uyobyrxu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163jnbnxpfw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163zagnnxwp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163gbrcxiqy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ozrtolps.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163heaursca.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tbqxloqx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163hodyjjli.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zdsqvpba.html


<!-- 参考信息 -->