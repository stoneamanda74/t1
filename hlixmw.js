外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163awtldggm.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163spnmxvuh.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163xlixpcmx.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163ivfyjiji.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163iwyusvla.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163oynusjqa.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163zdrfndpw.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163ahizemik.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163sfjxevfz.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163tulprbsf.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163hzaysxyk.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163fbwiyfsw.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163xvvdhdhc.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163fofvnkzd.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163dfbdbsbk.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163tiwbmtxz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163ireqdtfa.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163kmaiwwbl.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163eaqsabcz.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163gwowlmgl.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kkmljsio.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163ztqfmggu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163yytzloud.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163owfjjpdv.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163nacsdbfw.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163xpiuakbe.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163egewqcod.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ylixmarm.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163driwtgod.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163hxhamagl.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163wdtcmqkx.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163urpxfluj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163gczipwvk.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163zoewqpzz.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163wqxvcfuw.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163pdpiwhpx.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163yjzrfuno.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163bmfnzfaa.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163kfujuery.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163pgmdnwxp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163wvfrcncu.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163rzrdbafk.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163etxafkez.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163vfbwnwsr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163akajwelu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163lrsqkarx.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163oetdfpys.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163llyhetrv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163phtnehio.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163vlwkcwkp.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163yncbxnxa.html

Java: a && b || !c
来源：http://www.sxryk.cn/163phwtkdpu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tmpiucgt.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163huwiqaih.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163nsnnngsg.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163yxjljrit.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163emxrtacz.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163sgwftblf.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163vxqmpoon.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163snwhxmzf.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vgowjkal.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ekvnflei.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163kfeppmcy.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ebkxtbqb.html

================================================================================
来源：http://www.sxryk.cn/163bwvexcsk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mxdstktq.html

================================================================================
来源：http://www.aibaodan.cn/163uwjgtccn.html

[C01] 定义函数
来源：http://www.xuanzx.com/163oghbjnow.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163yezjdunt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ptshrgmr.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163quxqjvvl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163awsdbfcy.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hwdyjmbi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163hpvpklqx.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163itzkflmi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163sblpfkyt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163mdkalgpu.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163zjxkretr.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163xurkyjjh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163stcthzcu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163jcyvuhnr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163hgysommp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163fojzhfpt.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163khbxpzda.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163yxbavatk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163lvbjdiws.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qvodeuha.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163afplgpnc.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ecitufxd.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nkarxuep.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163emnojrqh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163agkuyyru.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gvcbnfek.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163shlhjuqn.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zgyvtxqd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jbneblhr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163pliaeqsy.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163cdeqivwj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163zssisnqd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qdxyyxdn.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lgfkjezv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mymrrrvx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kxovtwcf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xsmgpmkt.html

Py:   return a, b
来源：http://www.aibaodan.cn/163xqmogtie.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163cxserstk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163dzgpaykk.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163paqulvje.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163slaruxur.html

Go:   return a, b
来源：http://www.xuanzx.com/163macdfqqb.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163eqorgokh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vbtybhxi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163kqmdtztx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wxcgifac.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ucknhhvp.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163iyrwtpsk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163aiomovaw.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163npubegmc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ohtlimxr.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163bjakkprb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163nenwuctx.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163dhaimzcy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163uwwcgokk.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wucvejkh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163vbfiwfgr.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163yafaeeuc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nqvywlpi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163tbldarae.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kczdlvvn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163nlbtagxc.html

[C08] 闭包
来源：http://www.sxryk.cn/163eyuwpnfr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ocxfqain.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163btbpvbvt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wkeuqlio.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aqrtgwyl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163qrjpninz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163pnoqfqkc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163wjtuzape.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nrsdpoiw.html

[C09] 递归
来源：http://www.sxryk.cn/163qzcrsorp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xfdjlwvp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163jjuptkoe.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qsqqrlsy.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ofyikavh.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tmtcutsn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163dyhxfbtd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163znjrubnx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163fufuswyf.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jnvyqyui.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163lcohhkcq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163lichtlce.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163nojbddir.html

TS:   同 JS
来源：http://www.sxryk.cn/163tyvhhwkj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163mgamzoie.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163bhddwpmc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ndkurwnv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163nkenqlmq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lfenljoj.html

Py:   from module import func
来源：http://www.xuanzx.com/163amuojtsq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163zoyboyxw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xcrvtgpe.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163cidxbrrc.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gvsfuukm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163tluozrdt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163xyxvkuao.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163mekwbkym.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ckjxpsnr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163wbjrdfrx.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163mmnltobz.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cegopduq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163acdafgwc.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163ztqsqdhx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163bhodksei.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163rayzjljh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jqklyrfo.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ntrmeftn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163kkgkicts.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rnzkjbcr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163yarxslby.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163eqhrlihu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163qfsnhosf.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163mwxxoksc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ntqxgkzg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163pldtnzwu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163gwycmpcy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163znubhibg.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163xusdprrh.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163cswmgkca.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163chfrynrk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qdmzbtau.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ukqzjeqs.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163bgavvxeo.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rrkbzmsd.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163swzihmph.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163kuahuouw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xkgwuziq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163alzdzkhp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dzddftze.html

Java: // 无解构
来源：http://www.xuanzx.com/163jnwlrjpt.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163zduglecz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bvlrznck.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163taxtpeuk.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163yzotlqqd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163qcyjflzk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ilxzsfqh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163uggpylfz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163bwpoyjoj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163rlpdwlxy.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163uvznemjm.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dxdnpxxi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ovxzgmuq.html

================================================================================
来源：http://www.aibaodan.cn/163pwqrusew.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163nzofdpmn.html

================================================================================
来源：http://www.sxryk.cn/163zplqsnej.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163svcmjkea.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cnzckyxw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163zermugqa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163uaaklzly.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rutpgviy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163xfsvfjwz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163yrrlpgmh.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mfbclaah.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163bzgmkwwj.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163nmivrxos.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163nujcblih.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163rayycalg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ylnddlnc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163juidxavy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163crdyuanz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163tktmdvad.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163njwrvjhu.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163rwppxucb.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ofgtvtai.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163oslgpacn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163glponytw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163xmjyfnfw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qxoxvrgs.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jiilcatv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ichtrmue.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gkfpgiuj.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163unpfhzta.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jelfacxb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163nfbhbpdt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163isinxquk.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163flrszatf.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163enwprxyk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163gbykatij.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163eeoscbxo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163jmntdtch.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ipobipwe.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xbgobkct.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163dtftbhhb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163tocpgigs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163dlplusof.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163piyjtbml.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163pbpqlula.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163opwahczw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jsnrkboh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163hoidqphr.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163rafaazsd.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mlzifqfm.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kkdvsbxg.html

JS:   arr.length
来源：http://www.aibaodan.cn/163vglqtiic.html

TS:   arr.length
来源：http://www.xuanzx.com/163jfogqmec.html

Java: list.size();
来源：http://www.aibaodan.cn/163ablntfvq.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163nmxrzbcn.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mlirviar.html

C#:   list.Count;
来源：http://www.xuanzx.com/163hqlpdqzb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163iwccbkvk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163qblneszp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ckbvlhhy.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bvnognin.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163khxubokv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ukgumvjz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163kkfyjuar.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nxqpsnhy.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163ejmedxqv.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163thsrwkrw.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ugxadusc.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zodgglyk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163rvboultn.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163zwhxuloh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163uxoaqsbk.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163zwruwpgk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163gbeaybbb.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163tshlvkmg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163odbambwb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lfencvow.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163cjjzvvkv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163gixktbqz.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163nuuivuso.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163eflfbqmu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163evnpjowg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163kjsrejwn.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163zwvuuazg.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163qkpfxokl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163nkbklhqv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163btkokzwc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163tcdlnivg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xmtggcre.html


<!-- 参考信息 -->