外链999!wailian999！

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sfvusewf.html

[B10] 遍历同时拿索引
来源：http://www.aibaodan.cn/163aapcjvxy.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163tqodaqqf.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163tprvoxsz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.xuanzx.com/163niudhqee.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163imjsyftb.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163wbmseihf.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163drnkchzl.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163arhphsej.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163pijicctr.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163vhsghkij.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163numgvnwz.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163wxipvhmz.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163tebhpbjv.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163xxqpfahc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163jbwcugut.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163eccfvwss.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163fgrnhpxi.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163bbnbnesm.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163rytsrxij.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163yqyvtqua.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163kqzimjhu.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163rvfuvcok.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163niyhyiru.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163addesxnp.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163oyxaeooe.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163usvkgxek.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163skbmkdxo.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163zxnntmck.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163hkbiaurx.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163tvkmyipg.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163iywjtusl.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ygeyfbog.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163soejozrl.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163guqlnrjk.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163khcdxnom.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163tvewnktv.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163xmieambo.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163cxlbrnmf.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163mbfalwbu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ugmiauvj.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163bcxsyaay.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wbxqyxla.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163fycjmpat.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163ifftnybj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163dauhvjpg.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163pxucmoqa.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163xyoiqwbk.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163znyszlbx.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163logrfnur.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163uskesgqe.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163dmdjnabd.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163obqgwuyq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163uhgruvhy.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163tcpzznhx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163iyajlwfc.html

Py:   if not data: return
来源：http://www.xuanzx.com/163pdhgwtbb.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163boejpudv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wygikyhp.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163ewsofweu.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163esotsksw.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163mgkdcmdx.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163xxlacshr.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163jkwzpfyr.html

================================================================================
来源：http://www.xuanzx.com/163pmrkmeao.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163rhadljdf.html

================================================================================
来源：http://www.sxryk.cn/163blmalxco.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163nzahuoah.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163uqddxtmy.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163umpgwpqx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163hzalrsmj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qxfuoqox.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163jeexfcmb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163rdmfzywa.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xxvrzfxm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ociqfngi.html

[C02] 默认参数
来源：http://www.xuanzx.com/163uflsqcjr.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163tgqoiyhp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163tcvbeejh.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163qkojarre.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163xalskufr.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xnoefgov.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163lbqpzwzr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ssufmyrh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163gifstjxy.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163lxvuvutb.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zikjcwjq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163nmcnsrle.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163svychbfj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qjfqpeuf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163trwwiuqy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xhppedru.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163ynjyvkhg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163rnoyqtvf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tcfnmeiw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163zcetgepw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163fgvqqntf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163yawndnkf.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dqpwpdje.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163mstvxynx.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163tslvkohv.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163jhduyxfz.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xgodtgny.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163hnhtyvkt.html

Py:   return a, b
来源：http://www.sxryk.cn/163oyiygfvb.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163jgpsrqxs.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163cgqslfeh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ijyclowg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163kdqxkqme.html

Go:   return a, b
来源：http://www.xuanzx.com/163oiwgsdpq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163mgwhhqgh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163wuwggfwt.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xkcbcapa.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wipsxkwt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163nvmlfgdd.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163zitojhfq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163kdmsxkyr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163appkmqqp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163feafxvvu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163fanwwtuj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163zwrsywgg.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ykuxayrs.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163uqpgzoyw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163oxwieenu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zwhodgyv.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163arhuxjsd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163wkjdyfok.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ijfdkmjv.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163rmidsbaw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pcegityy.html

[C08] 闭包
来源：http://www.xuanzx.com/163yevwaqzx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163onxlkjez.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163vqsxyoyh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nzmvxzzq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163efsirmct.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163axhmrswc.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163pzlbfybr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163besmqbmr.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ifvliilo.html

[C09] 递归
来源：http://www.xuanzx.com/163jmmaxdnj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163vvymgqcw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163phuotund.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jugmvicr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wmehebgj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ngjqkfjp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ifgcwxca.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163vzkyzngq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163xqtwxudt.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163vxrryizp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163rwklshea.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ecojdvda.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vdbrmghn.html

TS:   同 JS
来源：http://www.aibaodan.cn/163igunlmni.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ayysqeyu.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ognexlvn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ykdqfgde.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nhbhtgki.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hdotxpve.html

Py:   from module import func
来源：http://www.aibaodan.cn/163tczlivdy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163zaisasxc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163lvfpgvos.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163clgnjskg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163jeqerebv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ytrfxqdt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163aljkagpg.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163dkdqmuma.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163coztgsen.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163nximmxcf.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163tatcwqdn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bnxsifvs.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sphsgtip.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ojqwvpul.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163zslltanj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163fiiynkqp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gsfizexn.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163zyukcquc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163vzqvixvd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fkutxfvs.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163wkihrscx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zduyvuyp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163akmcdltl.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163jntccqes.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mlgctuxg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163mjznqfrd.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163pxemokvf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xvwiwoav.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rgnvunsz.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163fhgbepxc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163yuufopqy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163prucadlh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163uunssses.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ndjzbtty.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163hhppkaqg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163lswxmroj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pbxbymzd.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163lseheyub.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163inrupwga.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ijsjmbbl.html

Java: // 无解构
来源：http://www.xuanzx.com/163mfounbdm.html

Go:   // 无解构
来源：http://www.xuanzx.com/163quoncbrk.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163jbjolqts.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ffgxfypp.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163efukhgph.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163lwtmjrac.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uaexxzyr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163zkjzjeme.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jmivocsm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ycgnxpeo.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163useyixoh.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163kosbfemv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ylwrdaoh.html

================================================================================
来源：http://www.aibaodan.cn/163pwwrxdxp.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163eecxvqyh.html

================================================================================
来源：http://www.sxryk.cn/163zalhoclo.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xesqkyhi.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163nubmbukb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rixtexya.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xvaftbns.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zwmrcjdq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163nvrtfjyk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163cdldlfot.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163qfbcaiep.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163owhmtiaw.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163knvnahdv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tfhawwzy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163wrtyijwn.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163sbwzcurf.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zzlhtbjd.html

Java: list.add(4);
来源：http://www.xuanzx.com/163sxinckvh.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163kccldfdo.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163abmoeifp.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dkuihvxn.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163pioxgqgg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hngaemye.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163nxgfjtzj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163sxdsgaod.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163shonvhum.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163fvvhkirs.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163yzassjtb.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163xwvvwaqp.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163oatvthli.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tfritqrt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163mbmcrgwb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163cipfejmd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xbkpbanq.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163mjylkdqe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xavohdrd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163hdmfunpw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ldxtlghh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163xzucrwem.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163wzdwmjbj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163sgyxzlds.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163djwtujfc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163chdrpird.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163cfvzjfyu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163uftmxffo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163eoycvoeu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163phvmrdwd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zuvbmsbq.html

[D06] 数组长度
来源：http://www.sxryk.cn/163jkomiebf.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mffpgcrs.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163fjhsdbvr.html

JS:   arr.length
来源：http://www.xuanzx.com/163uwdmoqwz.html

TS:   arr.length
来源：http://www.sxryk.cn/163ojmyiioi.html

Java: list.size();
来源：http://www.sxryk.cn/163xqiafkox.html

Go:   len(arr)
来源：http://www.xuanzx.com/163brlrhqdz.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163znvveomb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163khsoqefh.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163iqfmvjjv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163epxntycm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ljxknhbf.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fxlqavtm.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rcoctnis.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ezkfagkw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163idxkirrn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vkpfwpdn.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163agbqctmc.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163zkpmqivy.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163rsjojahc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163mataoiqj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163idmevung.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163fgqoqycc.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wnotjvqq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163fkopheab.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163vdddliyr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163fvoclupb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163nwmvslna.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163sccpdzhf.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163pjjxrnns.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163hwglylcu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vxzjtbvn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163qnqhgpch.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163mxcenqtz.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163rwlmdhrb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xmnqnpxs.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163yvbvgaez.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163qtxgrune.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xlyknqtk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bfymvwxd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163eorjljbt.html


<!-- 参考信息 -->