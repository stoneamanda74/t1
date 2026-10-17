外链999!wailian999！

Java: do { i++; } while (i < 10);
来源：http://www.xuanzx.com/163crypfhbt.html

Go:   for { i++; if i >= 10 { break } }
来源：http://www.xuanzx.com/163ziaptxqe.html

Ruby: begin; i += 1; end while i < 10
来源：http://www.sxryk.cn/163ekepvqnx.html

C#:   do { i++; } while (i < 10);
来源：http://www.sxryk.cn/163zabtxayw.html

[B09] break 与 continue
来源：http://www.xuanzx.com/163swriaorg.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.aibaodan.cn/163kreqbadk.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.aibaodan.cn/163kzbezdsa.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163zbiymlit.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163sxswifbb.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.sxryk.cn/163alqbpdhb.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163menlfmnk.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163hqvuhswd.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163pgerjybc.html

[B10] 遍历同时拿索引
来源：http://www.xuanzx.com/163vongmqym.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.xuanzx.com/163hghorajd.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.sxryk.cn/163izxelsho.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163gxsnlnow.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.aibaodan.cn/163pvzgrslz.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.sxryk.cn/163bahtdquy.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163xzbdgfny.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163btdnyiye.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163xmfgmrfr.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163pdizozgt.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163xwuebekp.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163jzduweqy.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nzxrcllt.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tfmdagge.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163cusqpkzz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163ltpicnbw.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163jfoacizx.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163tvzylmrm.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163jgmmrydg.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163gbpaxmvu.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163cfzvfaqb.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163eevfdhei.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163uojqpkun.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163sogekeoc.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163behxfqba.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163okjbqbbk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163cawkiqnk.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163eqnyoxfo.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xgxghbtp.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163kwfzqydr.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163pvrdiamb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163wumagqzq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163lqdgwneb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163iqhmfzqf.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163qvsctzlp.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163evwairbl.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163rxlvxkje.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163tlfcjsfh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163nmznhrem.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163cjwpsazw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163pmakquvd.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163blcdzwgn.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163ealovoaz.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163qbdqvtzz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163pjicxquh.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163cdrohzqw.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163fnfmxjvn.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163mriykbir.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ymhkkoum.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163rfaeljzt.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163gyxhktai.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hcmskrhd.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163bxrydzyt.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163sxpteybt.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163kbilntmg.html

Py:   if not data: return
来源：http://www.sxryk.cn/163uypskvnp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163gmlfzrbf.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163hknfnzue.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wrrjztqj.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mldkotif.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163crcsahya.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163whliqmkh.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ntmkiart.html

================================================================================
来源：http://www.xuanzx.com/163lnepufqg.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163xwodmqql.html

================================================================================
来源：http://www.sxryk.cn/163elinzrsi.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rxxydcro.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163tvspmdsv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gtrfnigi.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163fhjbkcpl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163kzursajw.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163viwxgkha.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163jaxgobdq.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163yxpbyijp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163buqzrumj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163yqsowaox.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163qdmmbqdf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163xxisrlly.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163bteunhce.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163mrqrotwl.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163drjkfkwh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163tcnhevca.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163uawrwtzd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163lbfvvpqb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163fzqvlufj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xparojia.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ixfomhvo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163udcwqxuj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fodrxeie.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163bemyweuv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gcirluts.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163cqjpjxnf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ubeiocwq.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163kgdbuhqc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163uesxfkmc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lriublxc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163zavvyxjd.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163hltakvjw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163gpvjtosg.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163axvimqfl.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mgewwjoz.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dmogmtql.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163gcdtircx.html

Py:   return a, b
来源：http://www.xuanzx.com/163zgshcsjq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163uusjjkez.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163kcsykcrk.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163wwgxllzt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163sjylcsrk.html

Go:   return a, b
来源：http://www.xuanzx.com/163zwardqrk.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163flfksnnr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163eknkovpy.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ubnaelrk.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163rlzmcvhg.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jybqaliw.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163kuyowsxd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163fizajjpd.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163lxtdkikp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163bigtoleo.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163wuipkwio.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163beebsjgc.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vpncctxy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163waxnfprc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163gemichpa.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163cpkzqwat.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163eugxiwlu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163joxcpitc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163uyrtemqv.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163nglezqti.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vesqdwlz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163xxtkwvtj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163yhbbqqjx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163nedlkjnj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tyjxdybi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fkvyurkg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163khhvslzt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163tiuslrwj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163yciuuwfa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163swztwuiy.html

[C09] 递归
来源：http://www.xuanzx.com/163lnzcmqhu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163wfinvddy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163hhlxgoxh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qxxeyrhj.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163qabyexzo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fvtglrsk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vzdzonzc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163owpfbkwe.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ubjualfr.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163wjhohjfo.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163nvzfjafo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163woedhhcy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163iqjcndql.html

TS:   同 JS
来源：http://www.xuanzx.com/163sdypjnyi.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qgykhefa.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ausjidgx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163qlbzvsib.html

C#:   块级作用域
来源：http://www.sxryk.cn/163xpkuqzbq.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163xrhphvml.html

Py:   from module import func
来源：http://www.aibaodan.cn/163cvxxvous.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jhzpzinm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163psbhscvr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163duydqtph.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163kplmpevo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lckmzbcd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163jlbbsxsd.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163yeiumzok.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zulopfey.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ctsdnbxw.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163acnpoltz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wtmcakwb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bxcbkoks.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163vwjnwjww.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163dirkwnzd.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ygdaxmqa.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lktsfoob.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163aqqznyif.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163lhvgwohf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yoadowlx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163spweukku.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bxmqgdnd.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gsucnjmj.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163exhihaia.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mpskivnm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163qvyhprsa.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ploajtvt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163gsudgdoh.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163bnejotjz.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ehfcuclc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ckpeywgd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163woomupww.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ijymlhvr.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163sktmmjbn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163rersksae.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163uctpjgct.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163majlfohm.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163plnmrcxm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hmrgchqv.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163prnewoyw.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ipjqtoye.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zfwittqc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lycsqcrm.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163pkslbogn.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163scfnnomd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wvqglmmh.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ycuhvldk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163joeibqxq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163plhablhz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163spoqkwjl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163mpeiodfo.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ugxzpuol.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hgfmboon.html

================================================================================
来源：http://www.xuanzx.com/163slozgdho.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163evluhxzh.html

================================================================================
来源：http://www.sxryk.cn/163uswxjxmh.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ztjfcypj.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qjrsubry.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163fqkuyphq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163tvymbscd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163pjhyrxlh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163hzutbnqc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qocgcxrf.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wczigtzg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vptelpmh.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163mwqtncnl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163vnmxpvrq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163dhxdkjrr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163jljcmqer.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163sxswtqei.html

Java: list.add(4);
来源：http://www.sxryk.cn/163tqcqutnr.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fygeiyuw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ugzjhexp.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163letmmvbq.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163iicwuqlo.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hcktduvf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cmwcessm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163nqpuuopf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rinddxxi.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163akywsebl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163erdseofg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ycqgikix.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jctmmlib.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ugsdxqng.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163garkpnke.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163wzghcjhu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163wrwbzyqs.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163qeyxjgnp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163oafkbuyw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163rkcxzcpj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ylacjnlr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163habbmnku.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163eclowywx.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hnysgagg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163uftepncw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163exafcjve.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163drpjnary.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163vqdhqsay.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163gbdeyxgq.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163slavkkhx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wbmbvtmc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163kshtarvv.html

Py:   len(arr)
来源：http://www.xuanzx.com/163uxufblqz.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163uybomvxf.html

JS:   arr.length
来源：http://www.sxryk.cn/163akssyncf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163tecwgjre.html

Java: list.size();
来源：http://www.aibaodan.cn/163yhkfmcmm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163nvnsqcbv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163wybtimxc.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hrnrkymf.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163zzdfrfks.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163vjrdfgqi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163rvsubmfs.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ndhyqdrx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gsaxplzw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163satstqup.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163blxwezgv.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163khvtzeoh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163kvnqqeqi.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163owgfpmvj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163sscehecd.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163asgqokik.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ztgpzsby.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hzshgnfr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ydiososq.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163yayjafwz.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163yocuycml.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163hnbmsuvm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163unxrfwpb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wuwmntnt.html


<!-- 参考信息 -->