外链999!wailian999！

Ruby: d.each { |k, v| puts "#{k}=#{v}" }
来源：http://www.sxryk.cn/163azpwzjji.html

C#:   foreach (var (k, v) in dict) { Console.WriteLine($"{k}={v}"); }
来源：http://www.sxryk.cn/163aeflxzvn.html

[B07] while 循环
来源：http://www.aibaodan.cn/163hlmwmplu.html

Py:   while i < 10: i += 1
来源：http://www.aibaodan.cn/163swprvnif.html

PHP:  while ($i < 10) { $i++; }
来源：http://www.aibaodan.cn/163ttluwaca.html

JS:   while (i < 10) { i++; }
来源：http://www.aibaodan.cn/163wymgruzn.html

TS:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163amkndgql.html

Java: while (i < 10) { i++; }
来源：http://www.xuanzx.com/163yspaybjt.html

Go:   for i < 10 { i++ }              # Go 没有 while，用单条件 for
来源：http://www.sxryk.cn/163dxqyawhr.html

Ruby: while i < 10; i += 1; end
来源：http://www.aibaodan.cn/163spqoyede.html

C#:   while (i < 10) { i++; }
来源：http://www.sxryk.cn/163rrfocjrp.html

[B08] do-while（至少执行一次）
来源：http://www.sxryk.cn/163pupokmkd.html

Py:   # 无 do-while：用 while True + break
来源：http://www.xuanzx.com/163obyrokal.html

PHP:  do { $i++; } while ($i < 10);
来源：http://www.xuanzx.com/163ulhysvbs.html

JS:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163nzsvsmom.html

TS:   do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163hhjbcqhf.html

Java: do { i++; } while (i < 10);
来源：http://www.aibaodan.cn/163nxcskxrq.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.aibaodan.cn/163zwvakyfb.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.xuanzx.com/163gfatlbpk.html

C#:   do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163whbaengy.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163yofirwjr.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163pzcglibs.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.sxryk.cn/163qrjghyrs.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163dhsqjspc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163yquhzbop.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163wlsnuwuy.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.sxryk.cn/163drirtuzk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.xuanzx.com/163asffjuyv.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163emvujzin.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163kghahtxq.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163cnbugwma.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163nuunxyes.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163dlvyzfsq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163ipkvaqkg.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163cpaaqzhc.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163hcemozcb.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163pvcwbcyp.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163hpyjpzjb.html

[B11] 生成数字序列 / 区间
来源：http://www.xuanzx.com/163chnkltjv.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163bsuypecy.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163pusvnckm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163fjljcaeh.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163uwugavmn.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163mxfvqogm.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163rgwfuknl.html

Ruby: (0...10).step(2).to_a
来源：http://www.sxryk.cn/163rxrbdhot.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163zsoqaeuj.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163zddkkffv.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163rnibmsbn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163wumxwcni.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163aefhmljt.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163jgtaqvak.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163lzhafkbj.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163rgphbeqf.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163txwfwxrc.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163mppavuxj.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163mxoyosze.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163zmgahntj.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163cuonedfp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pmqhrhwp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jpktxvnh.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163btfoleff.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163dtizymlo.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163vbtczgtj.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163zjyqndjy.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ttsquqgs.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163kaccusga.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163azubtqbr.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cfobrxzj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163weverucj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ukvftnak.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163inbducjt.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163gjuyvtai.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163fifviask.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163crorcepk.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163xezyshnm.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163lvldxpiu.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163akjibmhi.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rxcyylyx.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163zodffvhq.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163neaqduul.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163dwylecgt.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ankeaznu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163hxltkdjw.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163uzjqlonx.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163rmjnpfst.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163xovzycgy.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163zmixbjkk.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163inbkrcty.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163ospszmdp.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nwirsqck.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163tgmohhdd.html

================================================================================
来源：http://www.sxryk.cn/163xahurfhc.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pkhzimof.html

================================================================================
来源：http://www.xuanzx.com/163cvddgrpj.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163qxzvuadx.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163dszfsjfd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ehhothgk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163mmnwgsyk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gixtwhoo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tnmxvewp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163weppcwpd.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qcxcbkld.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mffiudlr.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163lvsudmne.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163fyvoyzar.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163foccaggc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163umfpbgmx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163alkzpzml.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cswwxozz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163mpmoeheh.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163apkincjc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163gcvlltzk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163kmpxuhps.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163jwtgbbvc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163wesfvsdd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163muqgbkxy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mrvddlvm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163fhgufmvl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163twmzodkb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163csbewkoc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163icbukhuj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163paqylapr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163rnkzzmdt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ramxrhls.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lebdmqgf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163wkfdplql.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163khqgtwpn.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163ktohuadg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163toodbenf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163nohpqnpf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163byvdewbm.html

Py:   return a, b
来源：http://www.aibaodan.cn/163aheewoaz.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163cniixuer.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163avexsqhn.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vitxquwx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163vjuslncg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xquwfqam.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xuczmmhy.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163yayuprgu.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163boigmked.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163bvbzuiyv.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163mhvdyljg.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163fbghbtpr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rinlaqdu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pwkztngs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163cavpepnd.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163pbayqixn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163yhkalqnq.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163wknryfuq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xutpeieu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ejcjnumf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pazslqhs.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163ooqfvdre.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163rkonjafv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163roydyjkm.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qrofkqbs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163invjylsy.html

[C08] 闭包
来源：http://www.xuanzx.com/163gegfvzld.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163tzniyiky.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163yshghasi.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xbfdjyzu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gmvsizga.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163assxhjdp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163jbwtvqhp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163uucwpggs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yppqovtl.html

[C09] 递归
来源：http://www.xuanzx.com/163wfdiydll.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vqthusbw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163byctckmh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ylyjirso.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163eyaovjgl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zkgrzoos.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163kppuufib.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163xfyzsgvc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163upzluepv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163pybczxhh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163bgoossgi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163qqiivkxg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163fsqjotyd.html

TS:   同 JS
来源：http://www.aibaodan.cn/163jbujpwls.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163brnyykac.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ioghgulf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163dalzhyqt.html

C#:   块级作用域
来源：http://www.xuanzx.com/163hytclqko.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tnjfnouo.html

Py:   from module import func
来源：http://www.sxryk.cn/163ebvspihi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163qiuzznvi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ntgglzie.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163pntqiurv.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163pvhcdxam.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ksawrbiq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163tyrfgfbl.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163fnhjwvar.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zrzpnsfh.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163kleqccuh.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163vinqisap.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qkuzpwih.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163eabwprwm.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163olpyqrlx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ggjfyaaa.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163pbagasei.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163chdjrewt.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fujzsraw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wrybqrlq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vsafstdi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163omdmuptf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pzpuyftm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163nybkxser.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xaxkjbrk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163bsmjhxfb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ssnjvotr.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jzcnijbj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163qoyyupoa.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163sehltdlu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163aslcpnxo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163brvntufl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ntfeegdx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163eqbsqiia.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163npvpkvwk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163notnqxoo.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163zlbtmkse.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163oiftqmci.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163bnqhuopv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163clqatpgs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xmpylihp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163agpzrjxc.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163bqioubzr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vzxhdudz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zninjpit.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163luhvufdw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163xofxojtf.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ypoaqkyq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163nfpbothl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ytjuwyys.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ywhytxgf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163awepbnyh.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163oycevyui.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163cboilgbc.html

================================================================================
来源：http://www.sxryk.cn/163nwvlwhxc.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163lhbuqcgv.html

================================================================================
来源：http://www.aibaodan.cn/163rtkgdqla.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qchbkmai.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163qzlplqhj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163uiycisoz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ytpdjqzj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ixcrcchk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dgbackae.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163yexqsypj.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ipxldump.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163bihqrdrz.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163gmxvbwcn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163lhmfycxu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163nfaqxprg.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163rjnqqkdz.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163bcxsfowe.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ofmuufot.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163teyohnqf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163atvttjsv.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163sygypfpm.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163esyskbkx.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dplsxerq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163osmxpawp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163hhvumnam.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163toacuvlg.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163vbcmzyia.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yruoaxxl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163hklumwpl.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163axnfjdwd.html

[D04] 删除元素
来源：http://www.xuanzx.com/163uirqpjlf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163djcmcrya.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163opriluck.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163efiofenv.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163bhegmnlg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163qmcnxyvr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163onyeekbg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163spbfnxti.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nguhfomh.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163cpmnpmxu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163aptxmeeg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tzqifyli.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zovniatv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163urfdxqmp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163hmjdhwbb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jokusexs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pbouxybq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163znzbaxqu.html

[D06] 数组长度
来源：http://www.xuanzx.com/163fzazcduy.html

Py:   len(arr)
来源：http://www.sxryk.cn/163loigndeu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163hpvzttxn.html

JS:   arr.length
来源：http://www.xuanzx.com/163jrhhnxnz.html

TS:   arr.length
来源：http://www.sxryk.cn/163pbpeeket.html

Java: list.size();
来源：http://www.aibaodan.cn/163uxvlapca.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163fzphpdyh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ldqgtanm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163vlrllmyt.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tbpxyvey.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163adzsdlnw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rmqnvsmw.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fmwksdob.html


<!-- 参考信息 -->