外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163hiqdyato.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163heyeydxi.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163idcxcfxz.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163znipggxe.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163jjanmlsn.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163ufwszkae.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163mnbmnhnt.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163itfjbcrr.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163sncdhrdp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163tpfjyeuk.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163aivqkmnv.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vmuzoqqw.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163xnidlpla.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163znpyjqga.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163fxqbjsqp.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163dsjlctfg.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163uuuyefyu.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163iqejxnvc.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163ubszkyzd.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163mistqdrd.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163zwsfoxii.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163apdjvtjt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163eakkgcsx.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163zzxobxak.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163dpwuhnyg.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163bgyijeke.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163ssmiyggz.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mnveldqu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ugajbcck.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hfkzqeok.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163hjucnfzx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163fgiuwwvh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163nwznbjia.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163rbkavfvm.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163gsuewamk.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jdpyghwl.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163bmqdmeom.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163rswltkfe.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163ejaacqzq.html

Java: a && b || !c
来源：http://www.sxryk.cn/163fkjhnktu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163tqpdtvlp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163qqpskqrc.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163aargiupb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163npwzbmhu.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163hwqrypdh.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dlznmxyj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163tdgvwdmh.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163yihtlqap.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163whwiajef.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xhyzobhf.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163aqnljqfr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163pdofuzon.html

================================================================================
来源：http://www.xuanzx.com/163aankrlgn.html

C. 函数与作用域
来源：http://www.sxryk.cn/163lnaywxyt.html

================================================================================
来源：http://www.xuanzx.com/163ylzzulxy.html

[C01] 定义函数
来源：http://www.xuanzx.com/163gxfwtkrk.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163obvilfqd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pithjycu.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ijobufpn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wtcwvzcm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fufxenle.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163zyicznkc.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163voowulqs.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cndldnbm.html

[C02] 默认参数
来源：http://www.sxryk.cn/163kyluabxg.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163phwiioeh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dbvtdyjy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163jquwcswe.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ywirsyqv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wzgvvhsv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kcdmlozv.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163fyivkblw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163phszfvds.html

[C03] 可变参数
来源：http://www.xuanzx.com/163xfmlkecq.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163zrmzygff.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163obtsthpo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lxyjznps.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163opugyaeu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163ezjoysek.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kypvaghq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163hkxjlogv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163zbquseal.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163gfibxzxw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163bitvehzu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163jyfrhgdj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163gvwgtlrr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163equdtsph.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163gjbbrjdj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163vnmhleak.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cdtjdubp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tipixljo.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ahwtmejm.html

Py:   return a, b
来源：http://www.xuanzx.com/163czncjtoy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163sufkhtlq.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163jlfvenmv.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163evsupbdo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rfmxuura.html

Go:   return a, b
来源：http://www.sxryk.cn/163lhfevjne.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163cpehxkbr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hcjzobbg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163nmhqtiah.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vjfhwswb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163jvaxskhe.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163msvsqgsc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163yttbzlgq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163nozetrke.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163pgqbwdnz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vhjootri.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ftemcygd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163djollcdx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fmbkrely.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163zcqupmnr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163dlwvyzee.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163idscxslc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xtfvptdh.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zfrhotus.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rmznwdds.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hafwayot.html

[C08] 闭包
来源：http://www.sxryk.cn/163unhzzdoh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163zkznhgup.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163kwxkinwe.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yvjfcbmp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ijphulzx.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163pukvvjyi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wfzoltou.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ibasjptg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nfkzikhd.html

[C09] 递归
来源：http://www.aibaodan.cn/163etmkcard.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163wgxogyvk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163jhwjqwco.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xypocsfv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fhstmylv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163sglozeqs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dhrjzsgt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163unkymjfz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163syqayufz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163zzkncmaq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jkwmjphh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qcyvgwjt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163xaezwefh.html

TS:   同 JS
来源：http://www.xuanzx.com/163ryptaoyd.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163qahvyade.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163gtghipky.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nfkntlfk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163tcduehjs.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hbbhwyzj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fokzigvd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163kuhdyzwv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163vlppmtcz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163yokximed.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wfakstnp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cumhafhg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163nysumclv.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sdeycaor.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163becvhqfw.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163uthzamip.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lmjskezn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yaegswyf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mehapiuq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163puetjbpk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163tcdblvyc.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gtpjpubz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163orijuolb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kstfaixk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jsjqkozh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163sowpiiyx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163zhpmcowj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yrweknvk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163sziafoqm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nfryrufg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jbqsrrmu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163srmucuew.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163onsmxivx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gtrkhogk.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163lsjlstjm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163cnhpyddt.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163jetwddib.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vckbnrjh.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163dkjrlvml.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163yeainjql.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163eyjqjwfh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163dlqacahs.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163santcaad.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163mbvckkuj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ahdpyota.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pfgvfbhv.html

Java: // 无解构
来源：http://www.sxryk.cn/163hweujygo.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163efzqdoxa.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163wcjgnefp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163unrigjpl.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lguiurzb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163puemzaxu.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ofvswscx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rbutwodh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ozmlajgw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zdxyfaop.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hgtclbzv.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163jokxyzuj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163jojdvkwi.html

================================================================================
来源：http://www.aibaodan.cn/163qhnqflgw.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163pbgxpxux.html

================================================================================
来源：http://www.aibaodan.cn/163oxjssfez.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ruuvvbgm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163eyrnnsqt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xhjeityw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163cxbfbohg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163yokzimgk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163cokegnxx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kapdkcqa.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163lcpjnobk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ybquerfg.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163awapwrcn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163kmgpbtep.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163tzhpdzyh.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163eftmisgm.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vcgecdmu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163rznbrpgn.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163fyasgdae.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163tsibrlqz.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163kjdecjih.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163ayusbtbb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163haxczbzh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163chbohych.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163sucyrjwd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qhoktuyn.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ljyxkwbc.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163cujsllpr.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163bzugwkvg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163egtydtcp.html

[D04] 删除元素
来源：http://www.sxryk.cn/163aldzrloe.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vxljjbxw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163zgydmghz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163tgjnqanc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rtlaqgue.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vipquqlb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163sommambg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163wqttntmk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163rluzpebu.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163sfjkoglq.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jlfmhbyg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163snqfyqid.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163gwmlrjcv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163nmmmkzth.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163aulphoyg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qtmczkna.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ijdaztqm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163apgskqur.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wqnaqafy.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xxksxdlq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163yorikxig.html

JS:   arr.length
来源：http://www.aibaodan.cn/163okxhxkiw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qvnhlpia.html

Java: list.size();
来源：http://www.sxryk.cn/163dcvsypdy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163isysgcxl.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163kkepyrdg.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xbymiuio.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fkvuqdiu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ztagoykn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163tnhrwhau.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163mdgmksik.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163fghwfrcm.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163qmkhfysl.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163tvjqxngt.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163kdijpnus.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163muzwytwb.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163aepuyxkh.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163rkcnqzve.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163odscutro.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163oamlpnnw.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163nzmwphrh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163nkorhgzz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163enwashht.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163lcdmtewz.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163dbegkdet.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xhrdjqob.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163zohpmfss.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zocclduj.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hbbnjpmb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163tyqjgbjg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ayoazqhd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163flplzlrc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163pbrufxha.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163domvypce.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163kcgydfxt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163nkkmorqw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jxufljao.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163lbibbkrt.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kjnebbeh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163gaiudvju.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163sfnovexa.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163lcsnnpcm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163klqvbybk.html

[D11] 反转数组
来源：http://www.xuanzx.com/163iefsnmuz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qzxvmqxi.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ojwgbpfb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163uxpgfoqd.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163okwnyjrv.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163fhbctfdw.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163yvuzswlw.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hwrdcgup.html


<!-- 参考信息 -->