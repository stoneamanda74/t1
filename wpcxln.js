外链999!wailian999！

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.xuanzx.com/163rpdwpvdj.html

[B06] 遍历字典 / 对象
来源：http://www.sxryk.cn/163abzsnnkt.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.aibaodan.cn/163znkbtaoz.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163jpbzklrq.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.sxryk.cn/163vuwsqqkh.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163posuglac.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163spytpbkq.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163adjizliw.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.xuanzx.com/163gzgoylfo.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.xuanzx.com/163gxwimahk.html

[B07] while 循环
来源：http://www.xuanzx.com/163mpmqezyo.html

Py:   while i < 10: i += 1
来源：http://www.sxryk.cn/163tpptoeqo.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.xuanzx.com/163zfylttog.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163evgvseim.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163vlxhzdcf.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163ifrcdqrn.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163jhjfwhbi.html

Ruby: while i < 10; i += 1; end
来源：http://www.sxryk.cn/163zspdycoh.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163oihhmnfn.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163goaqjqsd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.aibaodan.cn/163xvzoetdv.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.sxryk.cn/163aejojxgw.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163xlwyxtoy.html

TS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163cojbgfnp.html

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163lbrxjysq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163tmynyvqo.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163smsqqiuh.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163tquxwqru.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163vqysgqwd.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.xuanzx.com/163wqkxrzys.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163ylgniyex.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163fyqdjmof.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163nqcyrvsj.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163ozanavix.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.aibaodan.cn/163tcdhxzza.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163expdzalc.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163zwgkmywk.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163jplxyjcp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.sxryk.cn/163jinmvtdb.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163cezowebt.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163spwiltvq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163aqubgfwz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163htulfjao.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163eautwmgi.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163rmwzkcno.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163zrkbttlv.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163fygcjads.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163zllahzjo.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163pnmuuubg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163yzpbwlpr.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163rtcjayrz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163gbalphty.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163lmeookzr.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163mqdaedhf.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163bteqsnsb.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163bkwkixgo.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ynxilyme.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163fqmvkwzl.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163brooswnk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163ilqugitg.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163sqsbfwiz.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163sqvcxxet.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163krnchpzs.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163qikpxush.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163iruieyka.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163eupvjndc.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163ckehyhjl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jqiegebb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zihnzqmy.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163cyqlxojl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163quaaxvik.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163svhnfwfq.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163vnkdiavr.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163xrdhcaag.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163teclyyvm.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163fremutyn.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163jjabdtyr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wlxbltcv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163cunwkpkf.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163opyddtmg.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163jupumfhk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163eyizoehp.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163hbhvpxek.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163qfcyrlae.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163ghmzudoq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163whtadmnf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163lrdbsuir.html

Java: a && b || !c
来源：http://www.xuanzx.com/163aimaaoou.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163chawrwfl.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163wybcvpfo.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163ntnmvdce.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163fmbcxqby.html

Py:   if not data: return
来源：http://www.sxryk.cn/163kfvxrfqi.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163kyqpryfs.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163sgpmqvzt.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163dewvytnd.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163crtutqgy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163sfmxjgxi.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163idsebbif.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cufcqzra.html

================================================================================
来源：http://www.xuanzx.com/163ltzobmeo.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qbnnxzam.html

================================================================================
来源：http://www.sxryk.cn/163incslqeu.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wkqnirdf.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163tovyvapn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163tbdifsjw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163pfxoqewd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163edzxnvig.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yegfrrxy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163tofcbuwx.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163abmdqemh.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163tpacdhws.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163uotrxkrr.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163zlmvesvv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163orsjuokp.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163awutmqsc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163juvjyums.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163zgxejstq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163zzyfuevf.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163wziuswzv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163mruuluer.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163igcdysad.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ynpqeamz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163vngufpwb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jdoparxz.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163rhsrraqf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163tzctjkph.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163yihcojdk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163xupvwtcv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163evlmoxzt.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163hwofdodw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163sjtswyqc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163jqgfbopm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163eizolcck.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163twxwmxvi.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163eootxyto.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ahrizsnj.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xinfveop.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ytyxcxcj.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163utbklqhp.html

Py:   return a, b
来源：http://www.aibaodan.cn/163zfvwwggm.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qnjrytxs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163qjaqybpe.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163phsygndu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163euaviqpj.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xvolfbvh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ckasjmqx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163uiwnuojv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163kgnmpffi.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163uzmymgqo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163sabroojv.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gwykolep.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163yxaajxfz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163yvklpwav.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163piuazlpj.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tabhikys.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163xihwkwdt.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ynetaqcr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163bdbjtdkr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163owqeewfn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163fndpxcue.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ejjjqktv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163ggvvsufe.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163btqouxue.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163npjjyohb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rvglbnko.html

[C08] 闭包
来源：http://www.xuanzx.com/163kxfpdfza.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163tiaycpxv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xazjexuf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xigwsbzy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rrmaozvp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mkdcdbsf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163fjlcynyy.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163dkvdkcic.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163znqumuks.html

[C09] 递归
来源：http://www.xuanzx.com/163uhcnhasd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gthuvpsi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ywrlfrci.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dvpylatv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ympnifwp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vidlzfnq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163xlwmjvuc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ixosnspi.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xgmqfmpo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ipvwregr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163voorpqcn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ukeeohvi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qhwnltza.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dmpkbtvw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163tjgjpukt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ilpdquxk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163bhrrgqzc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163zbcthdaa.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ldwvavql.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zairhaqf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163slzywdqr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163elmgknru.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163foildvey.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163etqjrgfl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163joiufyza.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vrtwpgjd.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ffnmdbqv.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jznffpab.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163egbyvpmk.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ijpcywbw.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163knrqzfhn.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mclspcax.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163rhjvtpwe.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163laedespt.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vbxtzhwd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163hqxqrqaz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bdojuddw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jdzzgfsn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163czvmmnxj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163vydnvhys.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163igwbjuwt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cmgmgsyx.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163limaffuv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163hyexczkb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ycpsihop.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163yzwiakyx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163iqperwxj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163eoukpxbq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163eoeyvsdl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163bnvwlbhu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rbxcgdok.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163funacbkf.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163cxbaouea.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ywnzixcn.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163shmgfkbx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ibviqova.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fyhmvskw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hvlijevd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163mxkidayv.html

Java: // 无解构
来源：http://www.aibaodan.cn/163uqtzuzuz.html

Go:   // 无解构
来源：http://www.sxryk.cn/163dbnejwgt.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kznoonua.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163scyrlyqh.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163uxkkspiw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163kshmqenx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gusqtpfm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163sbooiakr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163xsvuyuwq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163mflfbonh.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163icwdmbtc.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163wasevtkm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163vpchtgbw.html

================================================================================
来源：http://www.sxryk.cn/163mjtdlhnn.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163xuwwcwye.html

================================================================================
来源：http://www.sxryk.cn/163tooszxqo.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163domxfxdu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163zasyvixt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163kgwfzcup.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163iojbvgot.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wbptieji.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163hgrctipl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tiufyaeu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163inydgsaw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163aqsyvrjh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163gjofiawv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163rqeaqwdh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xtotubgs.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dwnmssgq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163crjntvlr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qqehqqtb.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163nidjzmzr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163poaihvaf.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163pycvznsh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zfovjtut.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ludtpyty.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163adcoeocl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163sziswomk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jvawhfip.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163whepojom.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163bkrpkyat.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163khqrjypv.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cybyomzf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gscdhcdp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163dujhxnyj.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163jkixjmoj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fflarspe.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163pcqkqoup.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163klyxmxvt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jhjvrdzv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163omuysnnk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ulmcjbfl.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tlpcqpli.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163scxfobbu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rrbwsaeo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163bpjpdenx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163nqvainzc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hztccjkp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163hrhhtgoi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hblecujl.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163waqubtdb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dudrzalt.html

Py:   len(arr)
来源：http://www.sxryk.cn/163yiohskfz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163dircbyyk.html

JS:   arr.length
来源：http://www.sxryk.cn/163sykhslfn.html

TS:   arr.length
来源：http://www.aibaodan.cn/163sitkxijt.html


<!-- 参考信息 -->