外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163zonarftg.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163ykoheqry.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163errqzasi.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163pitcyiji.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163tgafznkx.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163mniaxvlv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163bqcddcro.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163wvbrxyfq.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163oogoauvh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.aibaodan.cn/163bhridebp.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163yieyujsc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163yyaldqqb.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163gcipfscy.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163knwwbznj.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163iwwdskgw.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163eunjogpa.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163alxdcrvt.html

Py:   isinstance(x, (int, float))
来源：http://www.xuanzx.com/163ysizcsel.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163lwzaeetq.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163begoyknj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163chwltuuf.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163dapantsk.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163cxkbsvzj.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dmfyvfyd.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163mjriuwve.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163bzgcuwbn.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163guqjtodp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163frzvyupc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163ckmodrtb.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163cabnmsyq.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163jbrriqeh.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163qprwhzut.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163mrolyrfs.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163bcqbbean.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163uvvovdez.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163eelsyxwg.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163kladvkha.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163rcfyqyyf.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163nlvgijra.html

Java: a && b || !c
来源：http://www.xuanzx.com/163teijcscp.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163tavqrnrc.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163inokythn.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163udblusya.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163ugapipmh.html

Py:   if not data: return
来源：http://www.xuanzx.com/163riqigruh.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163oxsmwvwz.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163yiywirrr.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163nffgzijg.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163cmmmldjr.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163cxsetpna.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163aurfamcs.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163dojxnlfx.html

================================================================================
来源：http://www.aibaodan.cn/163mrbmgxoy.html

C. 函数与作用域
来源：http://www.sxryk.cn/163oavwoqsb.html

================================================================================
来源：http://www.aibaodan.cn/163kebbpqdf.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163jmmwjwun.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163hjuoqypo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bmbdoxui.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163zyziwbov.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fqexyigt.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163skodmblm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163zkffhtsa.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163orahzlzj.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oixwksrk.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qcqavtzc.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ofxmtgic.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163wunwjfps.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163swojqqfa.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163pxclizxf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163rkglndyi.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163zprajgyh.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163htfyuuyl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163vbzxxkpb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xnnlvvwz.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163vtnqideu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163opcqdlco.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tccstzve.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163lmlqmota.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163emfwfkkx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163nprjtbso.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zkcjddjn.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ypccqsev.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zxyvbkui.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163pvqmhyct.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163phygkdxl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163itkbcvmh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gmudmkmp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163nljebiub.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xvmsxkct.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qmslyjiw.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tqlffrvl.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ivqgvgfy.html

Py:   return a, b
来源：http://www.sxryk.cn/163lvfqxigl.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ylyogrgy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mvdknxbq.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163lmqsxpdv.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163awgvjlqv.html

Go:   return a, b
来源：http://www.xuanzx.com/163ovwczosc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163gkxjmztr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ygjnjadt.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rcrnuszz.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ttlfgqml.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ltacraok.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163igerhqyt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163cjsstdja.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dryuyvdb.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163iuyikyjx.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163kdlygjuq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163habsrzms.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rekwwuwd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163tbgnrefq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ygjefjst.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163dqhvgrae.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163occgduvs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163phgeqdhu.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163bboniwmf.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163acoeslzu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163kygcsuyp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jnrxzdex.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163dbenwwcm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vjssdspq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zzniybtk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rnxvfmqn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pbrpwhld.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163jncaoeuq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163qqpmpdqp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jbvngiqc.html

[C09] 递归
来源：http://www.sxryk.cn/163bzxivsvg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rloikwtw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163yhjizxyn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163uutcovzv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163emknxbky.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163uijkonhy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zgbxbpui.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163rtezbhnc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163hsuwhfoo.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qskyqrcr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hwqwctnt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wycwyvwf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163bebixuyg.html

TS:   同 JS
来源：http://www.sxryk.cn/163pbosobds.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163huphopyi.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fmuwbafa.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163fhrdopkk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163bzeoiylc.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163fphohgvl.html

Py:   from module import func
来源：http://www.sxryk.cn/163ioesqgsf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zocuojgv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ibzbiowu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qxtbgiww.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163fkmhrsnf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zoorlvfy.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163qjgkfgfk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163pbbuxvjt.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163nmirfikc.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163riyecbsu.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fewooulj.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163bavxthim.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163sbiqsjxl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163puiekxqv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hwlexlpx.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qxyjdigk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163sianfuxi.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163mlwbblpj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fhhasrxc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163tdqhqdyy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qtgratcc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zspmxjpv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163dgfveith.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163zvruxvlx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163kbwautxb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kssgepfm.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163ucslozuq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hcarelzs.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163acaxtobv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163dupzatgg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163owhsffyr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163oufflrme.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163yytfbzni.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163lwpjzxqw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163gszoawcq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163rtafjifk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163mkbqrlxk.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zuxxwonr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163cybnsxis.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163tkwbzcto.html

Java: // 无解构
来源：http://www.xuanzx.com/163iwiizmom.html

Go:   // 无解构
来源：http://www.xuanzx.com/163zpeakwhl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163qmfxxmtn.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163gskuaxyx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hndysfvb.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163qpzdbtjt.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dxwkixqu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163csqltlna.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ejwgsdfs.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163spwqwdqc.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163mnahsrta.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163rvtsunfa.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ddsrwlvw.html

================================================================================
来源：http://www.xuanzx.com/163pnfpmlrb.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ihdfgdub.html

================================================================================
来源：http://www.xuanzx.com/163rnlmtyrg.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vamspuer.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163pfodldjc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163komlrmlq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163hofnipoj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163eagkqqma.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163sfhiwzuc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163kpezlsxz.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ziarpevw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ybnzffvm.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163rpxvikex.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ixaumtvw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nyiwfjub.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163rtsmpwzx.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bfkmcmnx.html

Java: list.add(4);
来源：http://www.sxryk.cn/163dhloccwk.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163wmklswrl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163omjbpxqv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163zdhqtbla.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qrihrqba.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163jcsiwmhs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163oofstsfp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ybphjdqs.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ekfqvsvs.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163mwrhglbh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163qlehqqfh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163amzzkjkk.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kefhzyql.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163lvwgwayv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163oxsjnoyq.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163luonglds.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163uhjfoeft.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163acrnuyvx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163mixlvndn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ktbfkjeb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163gwmvosox.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163mvmbqyjk.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tdjarkdr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163asrsilgo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ogonfycp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163enyjwjmn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163wncmgzuf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163tugfjtwj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163tbacwyyr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pffuwvpo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163xhmxjyuv.html

[D06] 数组长度
来源：http://www.xuanzx.com/163pbimyapx.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hzetyxbd.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163igekjfjf.html

JS:   arr.length
来源：http://www.xuanzx.com/163hteibkqx.html

TS:   arr.length
来源：http://www.xuanzx.com/163isybewut.html

Java: list.size();
来源：http://www.aibaodan.cn/163pgrprkwl.html

Go:   len(arr)
来源：http://www.xuanzx.com/163gozkhaki.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ghucwhmf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rkbebooz.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163fzpoorfn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163lbvrbfua.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163jbxhkuzf.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163chhjwtjl.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163eqghjfsv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hdmmbdsb.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163bgiuxbos.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163vrlvvzjg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163lzzlpnqc.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163avitqcha.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163lqgkfpub.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163lecnxtrw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163gdrhradn.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163midzeyya.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ybllvvlp.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163atcfhlzx.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wcymwcpk.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ytacpdud.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163tlxccnho.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vzmnkkwp.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ivtosfcq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ewamaktm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163cpszmeoq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163nxxxwibh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hdlafgyw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hxtslybe.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163naeaizon.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163rlkzjnri.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163mvhdukcw.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hwfzeyes.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tspmtzyv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nmwqklck.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163vrvwbxus.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163psctloov.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163zqxvwffi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163uutegflg.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mtlyspbz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163bpjvraec.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163dtbmnfbe.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163zeyqyayx.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ywpegxbz.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163lmtsftrq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163aoosyvdh.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163yozjkwlb.html


<!-- 参考信息 -->