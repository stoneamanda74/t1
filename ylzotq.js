外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.sxryk.cn/163bqzdmnig.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163lyozlyof.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163kctsbmui.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163srngzoii.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163xkflitbj.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163mwvnrhia.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163hrhudole.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163ruxtgxil.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163cyqbgdxo.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163pctzostm.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163hgsgbdvk.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vvbpctbj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163abykkcaf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163bttykztq.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163fiubzoqo.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163paiuytbs.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163ymhebpby.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163pwbanigt.html

PHP:  is_numeric($x)
来源：http://www.xuanzx.com/163eoknduvp.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163npvneojp.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163zjyzvhlj.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163jfarxvns.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163enalysdw.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163zffokmdj.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ovhubqms.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163ylgvreox.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163sitepcji.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163dtuwektl.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163hlirrmux.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ifepfidi.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163mafszkry.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163xqkbogtl.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163epwsmdpb.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163kwqaqpxw.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163jfmqskkg.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163akysunmw.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wohrictg.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wdkmvaqd.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163ygvazetk.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163pzjqethu.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163purqjkse.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163lopjnidw.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163kctrlatd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qoqtamim.html

Py:   if not data: return
来源：http://www.xuanzx.com/163izlppsmr.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163wkbpycmr.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163leaercqa.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163wiaekmwt.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163arvjlnqv.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163bqmsqptz.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163yprmllmd.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163tzcbiihf.html

================================================================================
来源：http://www.xuanzx.com/163acqhgmxo.html

C. 函数与作用域
来源：http://www.xuanzx.com/163zaufdcgb.html

================================================================================
来源：http://www.aibaodan.cn/163fxhwiirc.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163bjsvldvj.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163knhfmjfx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163pbyvzqtw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163sunvcdat.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163cvkogzqm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163noejpucy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163mnjufais.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163sprqnahw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wumandow.html

[C02] 默认参数
来源：http://www.xuanzx.com/163dlaglryi.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163lmzrfpck.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163dijpxwjb.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163bpjpqsyq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163bczldvvw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163pkacyqjj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163mankzlkq.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163vtnymlcf.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163nmuucahu.html

[C03] 可变参数
来源：http://www.xuanzx.com/163qfqfrlfv.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ogevzvmy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163gizfyhjp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dclbptbm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ycfsxkci.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163qtttwjmd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kpfplpmm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163isdbcyqb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163cqhyxupd.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zfewuoqn.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163aepkvgne.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qzefhuia.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163pqxhqdnm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163aznigiuy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163qmchnlvw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163vdttpdjg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163cfuhplbs.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wurzzdpx.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163pysodgaf.html

Py:   return a, b
来源：http://www.xuanzx.com/163bvqbinwy.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163wgdpwocm.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163kmwcynpy.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163cfzstjef.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163dhafrbdm.html

Go:   return a, b
来源：http://www.sxryk.cn/163bqnumgce.html

Ruby: return a, b
来源：http://www.xuanzx.com/163rmmttwdj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jzzbcgse.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163lkcbannl.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163giexzeuw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163zupfeqqn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163exwfwpdk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163sdxxosuq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163fcosrvnv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163imaxaskx.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163kdkwaknk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ffdldblm.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163zglrymeh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163onjuptoy.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163juvhsell.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163jgvvbqmp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163xrcshsct.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163szevirve.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fsdtzaod.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163zpdavbsm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qccgizjm.html

[C08] 闭包
来源：http://www.xuanzx.com/163afjeiero.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163mlpfyafa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163gunivstj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ekfqajqv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fahwfrhm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163wgybhlyk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ifszldfh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163atkqcimq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hpmmhfpt.html

[C09] 递归
来源：http://www.xuanzx.com/163dpboufzh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cyjqichh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xdbohvda.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163jwbqwuez.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ilbiuitm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163aavxeuiq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ytnkanlv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ssztrfrp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163qthlpwio.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163pzxulgxf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qyqmlmvb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163fwqefzcg.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163omwcgkfa.html

TS:   同 JS
来源：http://www.sxryk.cn/163wowyyzxs.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163trphkztz.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163cvydgvwp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nyvkpfyc.html

C#:   块级作用域
来源：http://www.xuanzx.com/163rhzmowrd.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wovxumvm.html

Py:   from module import func
来源：http://www.xuanzx.com/163ulavqvim.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163nlbevvtm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163zzvdavci.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163grlqocxx.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163gmemsewd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ufuveweu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163pkhgzgqi.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163blefgzrs.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163zszeumds.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163umdmljdo.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rroiznvj.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yafiljrj.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kbalbxlg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163svqfaday.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163cnisvxvd.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163mtalysup.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163eqwexscj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kokwdgzz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163elefabbs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163evxjcpbt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163guiudugg.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nepxjtpv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rfljgzrl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163gwftjgiy.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163qjqbgcan.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vnvgvgqm.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163cbhuhsmg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163iwocntja.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163cqexhhot.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mrtyrmms.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163oiankamr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163fccxgewy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163tkarbvzn.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ngukucid.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163urchwqyz.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163twvwlryv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163horlujcp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163jdqfktlr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163lkxfwdmw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163pghsireu.html

Java: // 无解构
来源：http://www.xuanzx.com/163dnldlrno.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ienyjuov.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163odfpmzuz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163xxfzzyvk.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163bxyeefdc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nbogygrd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pipurjep.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rnqjgykw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163trpbldio.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zgucueah.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163awdewdjz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ofddhupd.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ilvkpeia.html

================================================================================
来源：http://www.aibaodan.cn/163wapemuxe.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163htfwgymf.html

================================================================================
来源：http://www.xuanzx.com/163ibjofnuk.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ythbelye.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163dshbzthc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163eopegeat.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163dbwxdzcx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163aemnlclh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ndzlavgz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kflklsco.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163mkdrpisw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163yssyempa.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163crxnljbb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163gjztywmf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ptokurdj.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163dhobnvde.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lrenzstu.html

Java: list.add(4);
来源：http://www.sxryk.cn/163meyqbknj.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163txepgclx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xsaompeo.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163iovrbmqh.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163txdggzes.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xcjihkhg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ymjpgwsj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163epmeytqr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163dqvbczkd.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vxspugzl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163dafohdxq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163lojvmavp.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lfsdapcu.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163egowaiqc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lissetxx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163nrrqtaut.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163jcqxndco.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163drlxtagi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163oxnirtkf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163hdfqdpig.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163vmfunfhd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163sdpydheq.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kzzxpwhy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rjvdkioy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163guwgfsez.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163bznjmfow.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163tnyqdiwy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163lnnrjgno.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163rwqqhetu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zilgwxfo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163hagkpgrb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163bdausfpr.html

Py:   len(arr)
来源：http://www.xuanzx.com/163nmaiulxe.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163tnxbtowf.html

JS:   arr.length
来源：http://www.xuanzx.com/163gboqwzqr.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vhrjvqhc.html

Java: list.size();
来源：http://www.aibaodan.cn/163qkbaxkxc.html

Go:   len(arr)
来源：http://www.sxryk.cn/163bblsmhuk.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163xoqcffdr.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ggfbqtnj.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ubtiakyl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163xsqhslbn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dujnplef.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163crnfkemf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163tcyftzqp.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163wksovxfo.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163uckqywnm.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163uyfcvfte.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163fpssjoab.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ovnrecyd.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163huhadmur.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jmchxwni.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ymfctjqd.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163keqyqfpf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163oippvgmw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163uilxtbyk.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163hgaxbzkd.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rooujnes.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lzgoswer.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163fybaacdv.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163rnewmqhx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163yxfjgcbe.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163kejvylun.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163enjnmsij.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163tlswhzvv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ncgmchxh.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163wgohajhz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kkhfzmqt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163rsabdqpz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ibvhliaw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qdokhqjo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163clldnglv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163pxoynlrs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163qpojmlhm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dzdpgncm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163skdvjybe.html

[D11] 反转数组
来源：http://www.xuanzx.com/163ytwnfzqf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163lwoojmhe.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163fchpqnmx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cbwtnlbp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163mutmvlza.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163kdrjtorb.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163dhkollyy.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wwgzjjmz.html


<!-- 参考信息 -->