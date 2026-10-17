外链999!wailian999！

[B09] break 与 continue
来源：http://www.aibaodan.cn/163bfcboxyn.html

Py:   for x in arr: if x < 0: continue     # break 直接退出循环
来源：http://www.sxryk.cn/163mjydabue.html

PHP:  foreach ($arr as $x) { if ($x < 0) continue; if ($x > 9) break; }
来源：http://www.xuanzx.com/163uaorfpim.html

JS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163vwonejsc.html

TS:   for (const x of arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163pyzqjpqk.html

Java: for (int x : arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.aibaodan.cn/163jgwnnpgf.html

Go:   for _, x := range arr { if x < 0 { continue }; if x > 9 { break } }
来源：http://www.xuanzx.com/163qxpqrnpu.html

Ruby: arr.each { |x| next if x < 0; break if x > 9 }
来源：http://www.aibaodan.cn/163vcoxcnzz.html

C#:   foreach (var x in arr) { if (x < 0) continue; if (x > 9) break; }
来源：http://www.xuanzx.com/163epyneidm.html

[B10] 遍历同时拿索引
来源：http://www.sxryk.cn/163llydyvfx.html

Py:   for i, item in enumerate(arr): print(i, item)
来源：http://www.aibaodan.cn/163eypbdali.html

PHP:  foreach ($arr as $i => $item) { echo "$i: $item"; }
来源：http://www.aibaodan.cn/163wildgvzz.html

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.aibaodan.cn/163yesshwhw.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.sxryk.cn/163olowzusm.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.aibaodan.cn/163tdmckgfv.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.xuanzx.com/163tdkxfhld.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163hkvwlpmt.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.aibaodan.cn/163njijpqqs.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163pmpdqgyh.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163witpweyx.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163zizammhl.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163zuhobyfy.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163heukicnh.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163pbvxucsp.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jvpsyzec.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163cdqcgbge.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163ptdticzd.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163sgujftti.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163xwtirirr.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163tudfzmph.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bdmidtvr.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ytyalnbo.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163lbnqrvif.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163gcefylbe.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163plyzuswh.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163owabplcl.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163jjgudmhh.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163fiouqqts.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163txoghygt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163ompuuroe.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163irbbewzd.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163rfzmxyao.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163agltqfgb.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163zsirinxf.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163sjhalntd.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163hzgmchof.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163vacyofwu.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163gjbaipgy.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ucemcxot.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163kwacbons.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163igbcktto.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163emvpsaig.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163uyqtegxs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ibpewggb.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163rpusoiej.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163xxktwlhq.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163qapzbiib.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163ytllfqrl.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xxzidwlp.html

Java: a && b || !c
来源：http://www.xuanzx.com/163xheuaoqr.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163ajffdknv.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163lrgfaiga.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163zjoieyfu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163izzzkjsd.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xgvgnhmn.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163iscnflle.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163clvzgtzy.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163imwroiji.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163xnppkjzc.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163wiojjkyt.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yrdeuzlp.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163yxixgylo.html

================================================================================
来源：http://www.xuanzx.com/163znctdoff.html

C. 函数与作用域
来源：http://www.xuanzx.com/163prtpafgt.html

================================================================================
来源：http://www.xuanzx.com/163ocfztqpc.html

[C01] 定义函数
来源：http://www.xuanzx.com/163szyvzmjq.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ynpwzjrs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ebpcucol.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163kxlwzrfd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163sfuhvqdp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vrwykabi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zphebrim.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163rcgmaqtw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163gqpqtdos.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163dubeyaiu.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163xzyxewpe.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163fmccwaej.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163gjwngcyn.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163hvpohqgb.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163znekxefk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163rqypjghg.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fzfbtzba.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163eabwocsj.html

[C03] 可变参数
来源：http://www.xuanzx.com/163bmzdpdcl.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163srzrbmzc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163zeympeqx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163hvmpunot.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vordstor.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163bslszpkd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163pvjywbhl.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163lwauswvk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163suyykany.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163driwenbs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163cehukcii.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vovrbgkg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163slrjqdml.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163qchkyuva.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163oqtlpyww.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bobqprha.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hhdgxpri.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xqzurcha.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xqdqcras.html

Py:   return a, b
来源：http://www.xuanzx.com/163abkiulxf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163qzzirgtr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163poxkbckr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zpwdedzq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ntfcxkwo.html

Go:   return a, b
来源：http://www.xuanzx.com/163jsvctldr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fnbggkor.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163sljkgvlt.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163whtmneov.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163gcjfygnm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163uxcabtbv.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163wpwsoyvr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163vzmmjxst.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ebcgsmkb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qnxdtwid.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163kqbnalup.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163oigahgzx.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163olrkggzj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xbopjsny.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163mwnastaj.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163gfirgwky.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fzgfalto.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163dzsvsubl.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163qrhwsvfu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ufwknipx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163klufxezg.html

[C08] 闭包
来源：http://www.aibaodan.cn/163orblakzr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163geslnsnn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163bwqfkhvf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rhdgnfpl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163okjhgefy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163pygtwxwa.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163nwuuxvkt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jnjrmfmv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qvidqmsi.html

[C09] 递归
来源：http://www.xuanzx.com/163hsygsvtu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ztkogjed.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163moafxudn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xjskaldc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163adngjhxk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163fxevlgnt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163fzjwuphy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hatuypag.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163eetxbvii.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qfkoyira.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163kbkxdbzu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163luecjyag.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vphizmxp.html

TS:   同 JS
来源：http://www.xuanzx.com/163glsescar.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ffvzqlet.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163apjhdlvk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163apdpieek.html

C#:   块级作用域
来源：http://www.xuanzx.com/163pebnvauf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lkdqqxhf.html

Py:   from module import func
来源：http://www.xuanzx.com/163zgciznrq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163xeszazby.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163bajztibm.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163gxhtnjik.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gyjgrpyo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ukuiqcck.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163tatvdfml.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163upafxvpj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163civzzjuq.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163amockncs.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163fhuindkl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ogptttnv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yjuevkgu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163nonnapeu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163adragnpk.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163tmgdnaas.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163neoqsjnc.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163epiwjowo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163xwcieizu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tjthphpd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dtkygfmk.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xdqlxycc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yfwsqbcg.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163syqztmmx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163fxgeyaep.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lgbrwkoi.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163dqyththu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163waivimyk.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163dhhoxorm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163junlrlly.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163nqsbjhuw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163mayeovic.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163lxecpagn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hghpgfty.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jfndqwno.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rolwwimx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163mjsbwsgc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163jpzvfirg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mayqqaep.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163bdyjrlsk.html

Java: // 无解构
来源：http://www.aibaodan.cn/163cslycewd.html

Go:   // 无解构
来源：http://www.sxryk.cn/163abdvvlgx.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163gnpunbui.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zxwflpmk.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163yqscxpaz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163mzrhafke.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wooewwme.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163twvfyfos.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163aclwtsxd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163bmgfozbp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163lqqupvut.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zuxgzfxe.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ilionalq.html

================================================================================
来源：http://www.sxryk.cn/163mcxclfae.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163uokogmow.html

================================================================================
来源：http://www.sxryk.cn/163rkmrrurm.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163jtgyypqm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ourotwtq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163bwgamjvk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vxwpgrnz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163acmobcxn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163owzbjlem.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163cupijvwi.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163apignrvt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163sbrfmdfb.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163vvvlxsxy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163aumvulmw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163kyzwbvsu.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163oxmpdlnj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ukongtin.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wpxtixtz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zkuvbnfu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163nbcnankp.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mbsdvjcc.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163piynkezb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xunnnsel.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163stoyssvm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163iwvbzwfy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163uggetrnk.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163bexruoti.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bzniqiyx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163iccovisf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163moskgenv.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163lefoffdx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ruujhjzy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163hkcrjxht.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rwsnuwto.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163lxsypwbd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163catqbeoc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gdocxmpj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163veeutego.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163idcspmnb.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xhowmess.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dqsoanpa.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163phodqqxs.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163avrdcjsh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163devdseww.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xeaxuzgn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163mulpuonw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hsdgidmt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ervndbul.html

[D06] 数组长度
来源：http://www.xuanzx.com/163krfmgrkv.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ghtyhxjq.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163pukjfofl.html

JS:   arr.length
来源：http://www.sxryk.cn/163ittspuat.html

TS:   arr.length
来源：http://www.xuanzx.com/163klxjsqal.html

Java: list.size();
来源：http://www.xuanzx.com/163phwbtrgg.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163nuhzkjqo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jgguucks.html

C#:   list.Count;
来源：http://www.xuanzx.com/163rfkzkgmt.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163dycawowu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163msudywcu.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dktiwzvy.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163muzedghl.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gazmojah.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nsskcuaj.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tjabdtty.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163uuwgaaqd.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163srgybnws.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163mujqiirv.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163fozbpnkw.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vhtlrzwv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fczkgqus.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163yzbngshf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163nxbytthj.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163dffyeuhg.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fuifpqrr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163sselxhns.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ttlrompl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163qjifietc.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163qkpnmydy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ydnpgmvg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hknecalw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163yoeismqg.html


<!-- 参考信息 -->