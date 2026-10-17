外链999!wailian999！

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.sxryk.cn/163jfpnkero.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.sxryk.cn/163csgzcsgo.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163eubhuejh.html

Py:   list(range(0, 10, 2))
来源：http://www.xuanzx.com/163vlcfvfoe.html

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163nreeffcf.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163bmwqnxpc.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.aibaodan.cn/163niwhsupy.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163qjpoyeos.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.aibaodan.cn/163xjzyuvzn.html

Ruby: (0...10).step(2).to_a
来源：http://www.aibaodan.cn/163wweyxykj.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.xuanzx.com/163bpmrivmq.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163csvziuot.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163jmjseken.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163kesikhsv.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vyefvbcc.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ycqcevki.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163kdkcwtwn.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163ulafhvfy.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163rukmcmab.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163ktoxjkxp.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163xdfkbrlu.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163xdqgxjng.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163jyamenod.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163cyixonqr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163hldppzly.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163ihfydnkh.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163umzqtzik.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163unhgllsg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163gomkshhb.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163idzrrfma.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163ruswzvoc.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163zyonjlkp.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163hoaptybp.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163sjsktvmm.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ynwiydzu.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163yiykhfpk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163mgyzowgo.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163ratyxqzo.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163hjfdhrbe.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163jopiljol.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163dpapgxvs.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163fcouqrtk.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163tayyhfab.html

Java: a && b || !c
来源：http://www.sxryk.cn/163qfmwblda.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163icxergoh.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mfaedfjp.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163djrawuwo.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163bzlrkdpa.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163hwnbxbhx.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hegtzysy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163axqyngmh.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163brbhobrb.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163tgvqznez.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163uxycatbi.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163mpydlaww.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163zawemrxt.html

================================================================================
来源：http://www.xuanzx.com/163xzppxokc.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163pjemxhjo.html

================================================================================
来源：http://www.aibaodan.cn/163ksjusayd.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163uywibwtx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163jxpuncna.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jiturchy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163ryxqxbvh.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163nqnivmmv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ajoctzpl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163bzrustgd.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163mnaqanfq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vqulmlwb.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163xwmvhosm.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163piynbqqp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163nnktkhru.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163mstwedga.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163qumnnpol.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163npxrsylt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163aqopxcwx.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ddfklfvs.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163fjyodkwc.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ovslqhgv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163wgfqozcd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rgukipsd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163uocouetc.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mhthauua.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zxirjgej.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163xqtvbuit.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163dawnpwkv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163reqhgtxv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163lkrppoly.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163gxtzqkay.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163nbrblkip.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163osfqwywy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163aayqquxz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ccgdunpi.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163icvhtruh.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163qebzqnvh.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163smahnjqj.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xkgjkxvm.html

Py:   return a, b
来源：http://www.aibaodan.cn/163nlqcxgzl.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163dpupyrvt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163ecwjqqvr.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163dsaiejye.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163jwdkxfud.html

Go:   return a, b
来源：http://www.sxryk.cn/163ihjmzxzh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163mlrjsqnc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ewugkgmy.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163quzogrby.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163naargyvn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163eqguthfg.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163rhptzwxf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163tuesivwa.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xsoxynsu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ohxfqwgx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lflqqrez.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xkrfiwqv.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xoxmabxh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163vsfztyrq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ahucghhn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163piylfxqf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163dbfyppge.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163tgdnitxi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163wjpxguvb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ugqexkxr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163rsxuarcn.html

[C08] 闭包
来源：http://www.sxryk.cn/163zfmkkhoc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163igzllvah.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xarrbtki.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163agozrzfg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163azrgloic.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163khyzcxtn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163lrznfivv.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163yrxhexxu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hwroqweu.html

[C09] 递归
来源：http://www.xuanzx.com/163qulehllj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163jhvjcxyn.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163kydflfnm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rduwpyjs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163aneqnlsj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fdivfopf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163luxohxde.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163vxdgvbbz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163gkvjxxgy.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163eblfwfvb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ovcljfke.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163eaeibmsc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fwzvuifl.html

TS:   同 JS
来源：http://www.sxryk.cn/163wglcpmsj.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163pumrbtms.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163zripegza.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163pgxgwqpy.html

C#:   块级作用域
来源：http://www.sxryk.cn/163zceebdfu.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lztjtebh.html

Py:   from module import func
来源：http://www.xuanzx.com/163xgbhjhiu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wrwelnos.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163kxwdfzqf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vxtgcrkp.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163skdjzluf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qvtlsxne.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163tcgtojaw.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163mkhnkkuu.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163chkmqwxp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163sowrgohg.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hrpduhzm.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zhkfmrdv.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zkvvbhls.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163pbrdtlxw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163zahkwszu.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163unnurazt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ojxoiuqy.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163znhtjexf.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163yfcelnrx.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163awgmhjoa.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zaqqobyu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fyuohmly.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qtbsoouh.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163zstuxvbx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163janwshlf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163xbxzfije.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163kwfemghk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gfvztroy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163saqofiha.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163lphrewwb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163mvesipcj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163tfnsnyne.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163mylurdqy.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163dretdstu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163eopclrqx.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163rxvqanxt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163kgxrohpw.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163pbfjinju.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163ypcdmhic.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163opazuket.html

Java: // 无解构
来源：http://www.aibaodan.cn/163qcskxmus.html

Go:   // 无解构
来源：http://www.sxryk.cn/163irhnofpm.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qmrtnbej.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163rfayarof.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163imazsjid.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163tfurgzud.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163waqbaowr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163anajtgjk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163zwycwfyq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xkapvaxu.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163eqcvezae.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zyyyurxc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163xldzonjs.html

================================================================================
来源：http://www.aibaodan.cn/163idfhpfaq.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163wyjxjjzx.html

================================================================================
来源：http://www.aibaodan.cn/163cwnebnou.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163fqbolssa.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ypuoqome.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163sbqhpksa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ttooumrq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163xetehlrw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ajgjdlzd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163lazrytyw.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qgnzyrxh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163vasfzrve.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ffnltpkl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163unhptdqz.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163fekoznuh.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163gtppxzdc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vyzrztgg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163olvptdhc.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jcpdkifi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bzxpqpvs.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ezewycaj.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163cfsxtjmc.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163mtgxjiln.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ekpxwiin.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163xtwtocaa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163rljecshn.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163guzoobkd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163siglaueq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jwujtrso.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163dviemuhx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ecdjffxq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163htxcyeem.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163qjmiqjzy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163gisyhvma.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xmhpyixe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163sihzthrq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jqoijgcu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163cwiiivvl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163jvfkztcs.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163pffrrhxj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163hudftivu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163bvjgtzqi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163emukymai.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163azvklvqr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163cljamips.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ehlomyuz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rkarebsh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163pbgrsxhw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163cohcajol.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163fuhbfodi.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163fugxevgr.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tvfklnrx.html

TS:   arr.length
来源：http://www.xuanzx.com/163vaiepahj.html

Java: list.size();
来源：http://www.xuanzx.com/163pvuxwwzv.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163cqgopghn.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163emxqfalu.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163qpmijbqm.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163zhwlcgth.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ciaibwwo.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163xfxavnfd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fewzugez.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hvjessqz.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xgdebcwh.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163toedgzsd.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163iqfotnbn.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xigsicbr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jaxmpdvk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163uflqspna.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163lpouhogc.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163zpnntmwe.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ijgakxep.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163lodmymvv.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ydtvocha.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mbsqjced.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163uzldlrbg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163yozgkjpx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163tequxgvl.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163acwwcibq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163eymwjouh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pbwlxkxp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163tcdsjwci.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163ewhpxmsr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163uzibfnca.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163fxvrfkoe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163jzpjjwuz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163crwargze.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163httbmpuy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pjdxumlc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uiwivlqx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163oglftxks.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163idscthgh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163bgfxcweo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163qnidkemi.html

[D11] 反转数组
来源：http://www.sxryk.cn/163gelfkxut.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163wjbnhuzw.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163rxxfnkve.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163svhoofcg.html


<!-- 参考信息 -->