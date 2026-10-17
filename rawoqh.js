外链999!wailian999！

JS:   arr.forEach((item, i) => console.log(i, item));
来源：http://www.sxryk.cn/163kpxowbyb.html

TS:   arr.forEach((item: string, i: number) => console.log(i, item));
来源：http://www.xuanzx.com/163mnvajgxp.html

Java: for (int i = 0; i < arr.size(); i++) { System.out.println(i + ":" + arr.get(i)); }
来源：http://www.xuanzx.com/163ynzosdel.html

Go:   for i, item := range arr { fmt.Println(i, item) }
来源：http://www.aibaodan.cn/163krhegfjs.html

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163semwzopm.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163aschlyqj.html

[B11] 生成数字序列 / 区间
来源：http://www.sxryk.cn/163wejeycrx.html

Py:   list(range(0, 10, 2))
来源：http://www.sxryk.cn/163ijwjbnsc.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163qjykhwvw.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163yxhauuwf.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163rchafujt.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.xuanzx.com/163ucovsaqz.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xgntlxqv.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163eahkklxu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163ygnfzxdl.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163ferfxfvs.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163yjqraqlf.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163nbcnknqx.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zuqpubhq.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163dfwrqtfq.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163skjqzven.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163jzeyfgko.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163iucxupjl.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163aeqormzp.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163qdbobxia.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163mecydgzd.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163jxttuxki.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163nwuamzzc.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163edcfeccs.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163hhdjlrif.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163ehihdhav.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163mckzesac.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163hentnleg.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163togfboiv.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ouqnunfv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163avbeumfk.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163imvatkpw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nqkvktgb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163xzkjqdds.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163ubrudhjm.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163dnhuzgti.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163jcswxxuu.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163zznuenid.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ermaqtya.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163xdxurspo.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163qhbbdnwf.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163arilohep.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ikimieum.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163jkyritkn.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163hrevicyx.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163gdyasmng.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163gmtwyswv.html

Py:   if not data: return
来源：http://www.xuanzx.com/163evhnsdyj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163jwesiobv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163bexmqnqs.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163acuyqdrv.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163uqhgbvbv.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jnqglkrl.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163uiiluwht.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163caxmwqmz.html

================================================================================
来源：http://www.aibaodan.cn/163jbglznul.html

C. 函数与作用域
来源：http://www.sxryk.cn/163hsrehtwm.html

================================================================================
来源：http://www.aibaodan.cn/163nwqnbgoy.html

[C01] 定义函数
来源：http://www.xuanzx.com/163gvyjuogm.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163qivtfhis.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ftotxvsz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vsfvawvh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yaflbcff.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163iayoenhe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zpekjtlb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163iltwypdu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ireiwzmf.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163ngdwgesl.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dfasyuwf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163gqzufysa.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gaicxiwm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163sthcoxua.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wymjuvds.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163gctikvak.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163dbxjkezu.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163cxqvzgoz.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163gyedevea.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163arzpbnoc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163pmfxovyx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nyqmmivx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xulvqtdw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163otoxbsml.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163wwxiscrr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163plunyoth.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163liyzljur.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163jnymrror.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163lipxdmbl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163lysdaihn.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tsvqmeil.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tezixedx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163zazlktsg.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ckwtlgfa.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163rvlvfhxq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ppsitwto.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163pdrkqthf.html

Py:   return a, b
来源：http://www.xuanzx.com/163hdypbmiq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ofykakau.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163khjphqwb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163gyrsvjpq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163nztikyds.html

Go:   return a, b
来源：http://www.sxryk.cn/163qqysftyf.html

Ruby: return a, b
来源：http://www.sxryk.cn/163hjeftmtu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qvbhymqu.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jpoerckf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163eyuiqxgk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qxlftdtc.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163hfoksuim.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163mifhynzn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163zrovmqro.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bturlzoc.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163gmsbfuzc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163sihefzuv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vldypwkx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163kjexhjfe.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163dxqqepuy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bpnfghcx.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163bmuhenqw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163utbtxlfu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163jctodxrs.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163dcrcbkws.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163rqagxotd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nxntdntm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tlhrowsq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163cszdicae.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jtaonndj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bcyiukul.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ugjqnhfo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qqvqhkeb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163lmeqqdro.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163chltsbop.html

[C09] 递归
来源：http://www.sxryk.cn/163xibzkymv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163wvntrcmd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163sjoisgdq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163vgoliejb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ydbqjwrz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163timlzbvc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bzwkmhih.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163zehjdztc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163srtgokgu.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ahsrzgsu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qzfxzhmq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ctklluts.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163awdjssad.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hlguqexm.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163iuigykbg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163pvbdnmiv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163edlgahhz.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163yobmekxg.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163wginyfgx.html

Py:   from module import func
来源：http://www.sxryk.cn/163cuedgpef.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rvcgllrn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163brqxqnjj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163epdygjui.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163pyotxnok.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ygahltxg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163rxiairnj.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163gaxvkuvd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uinjpbhl.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163mqbnduxf.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xkatwcoo.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qtkfidqv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163gmgzsthf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163lmjxjpbw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wxqkqugj.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163qsvpjidq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mnghssuk.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163pusvjxey.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163yquuzybf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mrseartj.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163zhlzbzrw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163gfqlciqa.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163frnorfvp.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163sqrgezrr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163qpwfkcxx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163tvxwafff.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mwrhbvhi.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bwhggasl.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163hynjpdxq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163efjobvlf.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163iozeqtqb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nywdzxpk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ydgaffkg.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163iehiyfir.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163kcjhwxvt.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163xcugsvyh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163mnvqflds.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163yylmfujf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163gqftedoo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dxswhngi.html

Java: // 无解构
来源：http://www.sxryk.cn/163oxxtsjkc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kcisnaho.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163uvwkddkt.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ojqbwpjd.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163lwylejlo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163elrlxnia.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vgtjdtyf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163cdcrdxrs.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qhtzgpyp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163opmcgxyo.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163owwhxvai.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163rprrnqpi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163zxnvfgtg.html

================================================================================
来源：http://www.aibaodan.cn/163imgbwrfs.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gbvdiwne.html

================================================================================
来源：http://www.aibaodan.cn/163fsyubcsu.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163aclwtlqf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kvzxszvd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163bilpfyos.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163jpwaztpb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jhiguxvp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163njleljeg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163zlmfxqtn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lblsfpqj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ivzigkxr.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ebijvvqf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163sntzwpnf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163islblkmu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163zhnkxhuy.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163wqtihdaz.html

Java: list.add(4);
来源：http://www.sxryk.cn/163xerigsol.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163jvulrnhl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163jajzzofr.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163lotrzqvd.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163mybeefyr.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163kpfemmue.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163hnejsgzs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fpxvphif.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ijndvwve.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163eqytofdr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vnqrxwad.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zbtqzvfr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163dtlhgmrb.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163whnouodv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163tvfiydsa.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163oacavspf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ccdslncq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163eobwgvxv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rtmoykvp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163jtghjalu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163vwwbfwho.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163tkvszyhv.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mqlatanm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ssidaqab.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yamhqqix.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kxkcitcc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163pkymibsv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163rygitjqj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vwrwdikw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nvonjbvs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163astxeffn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163fbkggxky.html

Py:   len(arr)
来源：http://www.sxryk.cn/163sifcbgmp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163jbydwsjo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163kbexhykt.html

TS:   arr.length
来源：http://www.sxryk.cn/163brcbwwuq.html

Java: list.size();
来源：http://www.xuanzx.com/163dlerrkvf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163yhrozpix.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163efdnlkge.html

C#:   list.Count;
来源：http://www.sxryk.cn/163pnxzwfqq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163mthyxlrp.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163zoddtkjv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bzdtowqy.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163yidsbesk.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163iveidoyx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lgivnons.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163epkxdpiv.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163oiyefkkb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wxgumlys.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163rshcfisc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gmcebfpp.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163dijtwhbh.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163lpiqhilf.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hfpxvjuj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163uvnqsvzr.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163yrdvvhtj.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163cfpoemof.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163niydxfwo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163cdxzhaol.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163upwiktor.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163gfpwzgwq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163mtzhscjl.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163hgqyrckd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163yzgydpup.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163imhozuyf.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163lqcyjyju.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163wflrmzkm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163biprxekl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163xasbzisz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ejjlbmju.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dgpxdrdf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yhwaupqi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163oswpifkp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163qcmyzvou.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163csbdgdzv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vhhmczii.html


<!-- 参考信息 -->