外链999!wailian999！

TS:   for (const item of arr) { console.log(item); }
来源：http://www.aibaodan.cn/163pirpqimy.html

Java: for (var item : arr) { System.out.println(item); }
来源：http://www.sxryk.cn/163pilwqkkq.html

Go:   for _, item := range arr { fmt.Println(item) }
来源：http://www.xuanzx.com/163bmvfrggr.html

Ruby: arr.each { |item| puts item }
来源：http://www.aibaodan.cn/163jbhyyvwg.html

C#:   foreach (var item in arr) { Console.WriteLine(item); }
来源：http://www.aibaodan.cn/163vdlwaopb.html

[B06] 遍历字典 / 对象
来源：http://www.aibaodan.cn/163bfowotfz.html

Py:   for k, v in d.items(): print(k, v)
来源：http://www.xuanzx.com/163yvdtuvfs.html

PHP:  foreach ($d as $k => $v) { echo "$k=$v"; }
来源：http://www.xuanzx.com/163wniaxolf.html

JS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163udetdyyw.html

TS:   for (const [k, v] of Object.entries(obj)) { console.log(k, v); }
来源：http://www.aibaodan.cn/163scmhwapv.html

Java: for (var e : map.entrySet()) { System.out.println(e.getKey() + "=" + e.getValue()); }
来源：http://www.xuanzx.com/163ozovzvep.html

Go:   for k, v := range m { fmt.Println(k, v) }
来源：http://www.xuanzx.com/163wqekcggx.html

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.aibaodan.cn/163yyiyyxou.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.aibaodan.cn/163svdqvwih.html

[B07] while 循环
来源：http://www.xuanzx.com/163ssmgooqw.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163tfwfwakl.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163nplrhncn.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163cxqlfrvd.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163ipxetcky.html

Java: while (i < 10) { i++; }
来源：http://www.sxryk.cn/163aogozmec.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.xuanzx.com/163rhcjccfp.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163qkyobahf.html

C#:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163gesefbpk.html

[B08] do-while（至少执行一次）
来源：http://www.xuanzx.com/163kxxcduuw.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163qbemwwkt.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ukuhdlpb.html

JS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163mgocxnnn.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163zivpjmxi.html

Java: do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163ihxszlpn.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163wjiazlbs.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.aibaodan.cn/163vkioauyl.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163yxxhltps.html

[B09] break 与 continue
来源：http://www.sxryk.cn/163kdzqxgio.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163guzszmgt.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163amzgcmhk.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163elniuqkh.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pmwhpawf.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163eiwugzut.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163ecjrojdi.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.sxryk.cn/163emlnpzwr.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pgplfpqs.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163mcqpfbwp.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163mfhtwimy.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163tntfocoj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163kmmhlxtp.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163erhrpykr.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163aonufxjl.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.sxryk.cn/163bqjdhioq.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163kujjrbpx.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163mistgzcv.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163spznqjzo.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163ibqulxhv.html

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163ziwbaxxz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163scasywri.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163oiniywmi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163gwuzrsia.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ssmxjaxu.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163eqnawjps.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163pngxycqx.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163izxegqrd.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163ttibwjyr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163ounypiir.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hwtijags.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163afmlclpm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163kpalwqiq.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163yeheqyst.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tcuywuyl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163xmfrbxmg.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163lfotxryf.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163fhgxefle.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163zyanxoym.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163eytmrynn.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163oifvaxmi.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163hlkztasm.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xgvngloj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163hcvraucs.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163krszwfad.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163wwgxxiue.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163pozjadzf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163jdjwgurt.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163blswhhtd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163mbzbgubp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163xtagfbhi.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163egobjpgq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wgiiwnvz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163znfznqjf.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163xslgvubg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163cjlnmttz.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163askkblvn.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163wheuaeng.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163fimcooiy.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ixanthwc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yakafxnm.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163yuabghgv.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ndpsxlcg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163sbmzqyhq.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163zwgewcvj.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163mliqqgsk.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163kadlrocu.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xslmddas.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163kyngaphz.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163rzmqxlhr.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163mfaskkyi.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cbiejbdd.html

================================================================================
来源：http://www.aibaodan.cn/163wpsucezz.html

C. 函数与作用域
来源：http://www.xuanzx.com/163qijugsmi.html

================================================================================
来源：http://www.xuanzx.com/163evhvhjlg.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163jqkugcyq.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163qzpxgazm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163jrsmwpue.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163jttvhozr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163umszavcb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163aooiihdl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163glnymlnn.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hqtaondp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ivltxbro.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163waffbehu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ussdvclu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dqhatyhz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163rzjpqvte.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163byjobnxd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163qvcjtidk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163eypnbash.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ohadtcex.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163yfaeokme.html

[C03] 可变参数
来源：http://www.sxryk.cn/163igfizxeo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jmutozkr.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163cqmucltc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163unloogkv.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163azmgjlvk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163noleemdp.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163rfdeksur.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hbyxmdcj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163kerdttwj.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163qufyfusa.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163velayjeu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nvsyycsz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163gnuqlzfw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ejgwryqv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163vhwufski.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vblaqydo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163sbektkhy.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vhxbydss.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163aiexybwt.html

Py:   return a, b
来源：http://www.xuanzx.com/163jzoebuie.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qkxmpgel.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163awcfnvvm.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163dguggvtx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163jbyojzly.html

Go:   return a, b
来源：http://www.aibaodan.cn/163qhqakgyi.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163djbdoxue.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bczhhapy.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163llluxvvj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163etvlxcvt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163dvllktqr.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163eaoyvnlo.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163trwuwlnx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163preedrtk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163jxdjwwqh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zhuvujge.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xndhceok.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163xelqotbm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qqzadmsw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ysyrqprb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163cakujaqz.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163jemjpmiy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163gotlwgoq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bpnkzrrm.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163pfvnflzf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163glfjkhhp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163xmrnrman.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163lercnjly.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163nmdoziwr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rizjborl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163crvllyvp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163kdlxsuxb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163kgbrbxow.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163bgmdhvqo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xnavchrk.html

[C09] 递归
来源：http://www.aibaodan.cn/163rkozgsvr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163crnatyxx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ajeeihrr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kpgndofm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163oxinpgbv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163gsvbwijc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163lpwjteyw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ryakzzfb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163lkgkbcjj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lxqoqsol.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hzuaerch.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163fcfkdtip.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163qvccgrmn.html

TS:   同 JS
来源：http://www.xuanzx.com/163wtrvmfow.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163keagjzwj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163zlkfvusq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163hduwfvmo.html

C#:   块级作用域
来源：http://www.xuanzx.com/163fbfpfqmh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163elvimsfx.html

Py:   from module import func
来源：http://www.sxryk.cn/163acgpdisf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163erktqyll.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ozxkspey.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163jeqwddee.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163gxnuvpsw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163cbcnkbdr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163egsspfte.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qiefrlcr.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163arihvsmr.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163klqytfyu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163kbugytnn.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163znhgiagc.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dnvtbozb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qiozytub.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gslyjbpb.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ytqytnmy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vwndomsj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163fulbrwgo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dycktndg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nrioznsw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163nbwjkdzq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ctydklfs.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163frhwaqum.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163cltrojai.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163odwrqntb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xaslayld.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163togprvpk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bmazocmt.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163uadsrhot.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163oixwgjpz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163zwxasgkj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163hqhyxejo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163awygwlho.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jziyimeq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ynuikzim.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163wcqmjbzp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163oycqnzta.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163gneyjgww.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163lxxgvqzu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163xbaafjqi.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ddzjlyis.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163sfpxogei.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163zfcgieox.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163uaeebgji.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163csndutof.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163rduaxuhy.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ntfwoyal.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163nwlfrsdu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vddmcqtd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163qfdxbins.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xhszrayi.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jnecewur.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163kdeacdrq.html

================================================================================
来源：http://www.sxryk.cn/163jcbundqx.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163blefihnj.html

================================================================================
来源：http://www.sxryk.cn/163anukyeeg.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ixpsbnnm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rxwmeivv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163hmzkhqbd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163sxpbpnrt.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163xemcvjcd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wxyqyaao.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rhvvchlx.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163bugnygtw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163hclejrhs.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163dpcwdyiy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163yodgybyt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163xveyhbne.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wcwcxbxe.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ocairpwa.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163bgvpfepl.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tmyjjnfd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163nypnhisx.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163szwoyrgz.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163zngtoeoz.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163dpsgghfd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163mtksilhj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fdgkajjh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163uqvmkarf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163psbjmlwa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163utzynaua.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163lhdfultj.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163owmnexko.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163pctuljkw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163gapedmkz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163pqaiiwrg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163vjlmlinu.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163nioahbds.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163tlanlpts.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vkdjpirq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163mofxrnhb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163clyfeyxz.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ipctouqr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fbhxfhur.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163omptddzx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163kocbzyls.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fuhhelrw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163mmpbtgdg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ddrejhec.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bwujbqch.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ojnuuwqp.html

[D06] 数组长度
来源：http://www.sxryk.cn/163xoxzfrna.html


<!-- 参考信息 -->