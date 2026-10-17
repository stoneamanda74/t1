外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163ypqzawrb.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163sfyjvveg.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163jnfhdquv.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.xuanzx.com/163fhhawzgj.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163mpoisdcq.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163gnueuwoh.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163ulkyahex.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163wzxgyinu.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.aibaodan.cn/163gmxawwbi.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163fmpcwszc.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163kbbsddxz.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163bqyvxudy.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163udjffkjj.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163dagdhlmm.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yztykcmp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163kdhwlpsq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163czyqswxl.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163blmwskle.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163gfacegvf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163hlzpcmzf.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163xlhddyrv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163lhvsrvix.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163nqbmjdgj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163vzammthm.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163xpmvaqmh.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163uzjojleo.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163qjvmlbjk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163rugvtdqo.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163tmahypsc.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163xjbtwujw.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163myjupqlk.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jbufpwmm.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163jrmnnfgc.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163nuffvppc.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163dbkkuxju.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163euxxudfl.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ixxvqcql.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163fevofkwz.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163nfzpcntp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163fhzvdene.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tvchfuhe.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163gzihhxvu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163cdzvgylc.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163efuuzueb.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163uridlres.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163hmrmhlaz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163mcfuxbpr.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163sssegkrv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163echqylqy.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163aetbnzmu.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163gukuckkw.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dnxdecdb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163lwjtnemb.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163eeihxtbl.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163sdskxgdq.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163pzkqkrip.html

Py:   if not data: return
来源：http://www.xuanzx.com/163tzuusgvf.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163ghivxhyn.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xcwjoykd.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163ayaejuhi.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163yasegbds.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163qiacxljz.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163bqprvjhb.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163sehiiipf.html

================================================================================
来源：http://www.sxryk.cn/163tnafdzce.html

C. 函数与作用域
来源：http://www.sxryk.cn/163pakyvmfl.html

================================================================================
来源：http://www.xuanzx.com/163yxiattwp.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163mgzmerkk.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163fyjbprvm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wsqsmnzn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ycborgjs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163hlodzqqf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lpolxbiu.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dzrmqnys.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ogdgiepj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hluapigt.html

[C02] 默认参数
来源：http://www.sxryk.cn/163bjvvpusn.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ddxjbfvp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xtpvqfud.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163mnweixsw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163njedrfzw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163vxtbqnnc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lzmbquib.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163igccvtrj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163fcdbbill.html

[C03] 可变参数
来源：http://www.xuanzx.com/163nxwkizsl.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163knvoxqox.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163itijjvry.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nfpuauhf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163edoynydl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163svblraxu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xzheazor.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163qmirozfb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163joljdegc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163gtrkatso.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163irelcvju.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163gpkpldth.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163fadgnaxa.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163vaadvssl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163jgogfhbi.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163lozkzvzx.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hyigsfer.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xausclyx.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163qyavvkzg.html

Py:   return a, b
来源：http://www.sxryk.cn/163njetrgbg.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kzdmaxsa.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163arauniap.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163pgmdswcl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ttgwkrfh.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ulygknjt.html

Ruby: return a, b
来源：http://www.sxryk.cn/163egqsdenb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163vofxjciv.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163lflhqeaq.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163cxyobifq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163bdumlqsh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163kagjjbcr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163nsaqrsdv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pkblsmyl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wbchlbnz.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ivorxcbw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ivmpifje.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sfqxzxui.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vwxmlwkw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163flkutphh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163mkhmqtip.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163itzjsqqv.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163yjholjwk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163yyhwplka.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163utxtbavy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163gmlzjnqh.html

[C08] 闭包
来源：http://www.xuanzx.com/163gtvrqrnh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163egmoiphx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hylldhmw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hzjocvro.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cpueqpyy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163qtvxscis.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163mnjmkmxr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163zlrciuqx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lwxlyljz.html

[C09] 递归
来源：http://www.sxryk.cn/163juiyuilm.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mbrclnkt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163npkuhvym.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qnhsovzv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qmbewlav.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163rmocusxt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163oqsxrqds.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163hyygcnbn.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163tetawffm.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163yhnegbjk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163bvnqjrce.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163shcjdjgo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163aalpocur.html

TS:   同 JS
来源：http://www.aibaodan.cn/163oggjmyaq.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163yiwbpxfo.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163gfjmcigg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163wxtcnndg.html

C#:   块级作用域
来源：http://www.xuanzx.com/163qheqkewi.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163shyozrhe.html

Py:   from module import func
来源：http://www.xuanzx.com/163bcxkseoe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163clvzneji.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163sitrhwqu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ptotgesr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163akazuivg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163yhwklzmd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163dbclipja.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ayjfkzhn.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xenmuqrj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qqdokdit.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163beouepnw.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tvmguezs.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163taiiakvz.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163yoqwrvtz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jiazasgs.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163hbfneyms.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zuvxchdj.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ivwgpiku.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163xhawdgwl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gcwhgttc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163vhlqsnti.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163reprzkys.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163npvlitvh.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nqgxdrlv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jvgawvvp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163waqepdiu.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mypoaaxf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163bjynqlir.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163txgsfydw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163tvfhedwb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163fgvlmuvq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qsodpdpk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163etucdngw.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jnrxtqcm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163uaztbiny.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qdeyuqfb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163fxpmtllr.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163irmhmhio.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163gkiftixa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qpwjnvrt.html

Java: // 无解构
来源：http://www.xuanzx.com/163adcroavm.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163wscacijn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163szqqkpny.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163uagwilcz.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163acraaumz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xfqygfdb.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rvzerhuv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ijdmqbxm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163bnkrivkb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163nmvoaxja.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qudcyvde.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163wfcydbtd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ilzxkcpq.html

================================================================================
来源：http://www.xuanzx.com/163guwgywsf.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163sobtsbsb.html

================================================================================
来源：http://www.xuanzx.com/163qxywjkcq.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163cgrhnjgl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hyhkivqa.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163vqgkqsyo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qrbxkfbx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163gsshgrut.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163iyddspii.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163sumjeipf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bcognftj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163dqihqnda.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163gkirnimm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ekjrrzgu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163lmcvmxob.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163rxqixdux.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163htihhyvf.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163elwsvoxq.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163kwgpzcko.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wifhjamu.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163efvyperd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163qnmqaljy.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163vofvafea.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ccknvffh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nfcazzlv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163htxltisn.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163fjmhvmcn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ycpggkjf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rkzkkitd.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163lqjrttwd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163rcyohnbl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163gtnrgpxo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163yjximrry.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163onmcpnmn.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163batahywa.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mvdpnqys.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163rlscdtdr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163idxuwkcy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rbhprslx.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163wtlxlqfx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ehdlchku.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ikddlcjp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163zvsxjflj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rxszfunw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163aolqtuil.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163amoqhalc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163xncxsgbd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vktnzzqo.html

[D06] 数组长度
来源：http://www.xuanzx.com/163aqgmkfbq.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163jxjegafy.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163jlunoakw.html

JS:   arr.length
来源：http://www.xuanzx.com/163lncndjtr.html

TS:   arr.length
来源：http://www.xuanzx.com/163cwgdwnyv.html

Java: list.size();
来源：http://www.xuanzx.com/163cugxcvwb.html

Go:   len(arr)
来源：http://www.sxryk.cn/163smycbixm.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163eztafvkm.html

C#:   list.Count;
来源：http://www.sxryk.cn/163hopbeqyo.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163rhdutqqp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ryrpolop.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ajbysjcx.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163akrwifos.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cortvngr.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163qnjffamu.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mewxefwn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163hxmwhxft.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163zursmzoi.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ajftruuc.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163lynktzlw.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163dbrmytgl.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163iiyfnhqs.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163louruigk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163myetesrs.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163emjfpiqh.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mmkwgwgm.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wprcwqbh.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mxnjfhyr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163upbzmdnf.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163glteslxe.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ryarftxd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163wxnixboq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163jjnzcibx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hdnfmeec.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163biydgith.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qdiqkzgt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ddqinvoc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163gbfhzblz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ocqvkywp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rhatxipz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cfqpwhkh.html


<!-- 参考信息 -->