外链999!wailian999！

Ruby: arr.each_with_index { |item, i| puts "#{i}: #{item}" }
来源：http://www.xuanzx.com/163txiazfcl.html

C#:   for (int i = 0; i < arr.Length; i++) { Console.WriteLine($"{i}:{arr[i]}"); }
来源：http://www.xuanzx.com/163kstseqah.html

[B11] 生成数字序列 / 区间
来源：http://www.aibaodan.cn/163sgikegnw.html

Py:   list(range(0, 10, 2))
来源：http://www.aibaodan.cn/163ivtjmmci.html

PHP:  range(0, 10, 2);
来源：http://www.xuanzx.com/163nxbkdcth.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163tzdawueo.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163sqtivtkp.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.sxryk.cn/163boxnpkdc.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163euwrfwll.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163rbdggpxt.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163pgmxdbjn.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163pakjijun.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.sxryk.cn/163wpjgpevp.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163utzmmbds.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163bxcxqmsm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163nbwffima.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163vryrelqi.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163fblcqyyr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163tuprgzzz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.xuanzx.com/163qabaehho.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163qohlpdrl.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163hlykzkla.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163yxcgapgc.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163ucsviivf.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163btyrssoq.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163intalwqt.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163jcvcmtzm.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163eutcfdcz.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163nzogohsh.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163dsdacrex.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163cndxmmdp.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163lpnrqsib.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163qglbmjqd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ovktbaev.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163mvmisjek.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163sthydrfv.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163ilcvqrsj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163einhqbjg.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163vroaqvtk.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163vyckhfap.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163wiocalrj.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163vpphlagu.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qowmekha.html

Java: a && b || !c
来源：http://www.sxryk.cn/163ykxeptgf.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163xzqvohou.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163qjvjeifm.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163yhsqlueu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xdytqjcx.html

Py:   if not data: return
来源：http://www.sxryk.cn/163blxgvzaj.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163cejptkij.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163lbxfwtis.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163xtamtypb.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163ftranggy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163vslhutyg.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163tpubmbmz.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163rrxrbmou.html

================================================================================
来源：http://www.sxryk.cn/163knglkizc.html

C. 函数与作用域
来源：http://www.xuanzx.com/163dtteopqr.html

================================================================================
来源：http://www.xuanzx.com/163agpqronz.html

[C01] 定义函数
来源：http://www.sxryk.cn/163tgbclumq.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163zhxpghbb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ycnuwgrk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163vywokrvb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mmkbibcj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163llgrlfja.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163fkbyoefh.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ihmftxif.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163qcalqdfo.html

[C02] 默认参数
来源：http://www.sxryk.cn/163rrddfkbc.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163utttcopn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163arnznodq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163sirxujzs.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163zfcnccdv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163alhtgkiv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163rpqjyjep.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163yawlyzxy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xeiuwmmh.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163pzugdzsb.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163uyzzjsgf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ahfoaafn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dlzyqpfx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sujuqmgv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dabmdsmq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163shvncvjd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163lrwucsrb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163xgclwwir.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mvebubvy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163rhdvpztv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163rujbxcxl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163oihbyviq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163kruxkncg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mtogqzon.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163yqkclzer.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163yicbshvx.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163wvxarqjh.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163icprjejv.html

Py:   return a, b
来源：http://www.xuanzx.com/163rxwdlreq.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wtatraff.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xcxchtxu.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163tusqxejc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mxklcfuk.html

Go:   return a, b
来源：http://www.xuanzx.com/163lbnxoenq.html

Ruby: return a, b
来源：http://www.xuanzx.com/163waiaqfef.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163zdmsyfjl.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163rezjccvs.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163nrsejdsm.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ibypkwxy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163upiaggsh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163kzagdser.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ndyczzfu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163yfgmnuoy.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hdqmzlfd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163nqfejzow.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vkmweyxb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163railguje.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163agekajew.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163djdzcjst.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163vvshpxxo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163oimupurq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163wxcbbsae.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163azkjobmy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pqrorfki.html

[C08] 闭包
来源：http://www.xuanzx.com/163dinvrbkw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xjwxjjzg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163wnlrzccc.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gujsxwfc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zwgezpvt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163jqugjyvd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163iuveydna.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ceoliwcw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gyjnjtmq.html

[C09] 递归
来源：http://www.sxryk.cn/163mnlhufkc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163urkknndf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163upqaungt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163iowskmfi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bmtdvlsx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163brxrbkbn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163aagnlqgo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163eacqsalf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163uxozszfv.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163mfzwbsbp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ubphidjn.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163bprbgwmk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163nyvpxioo.html

TS:   同 JS
来源：http://www.xuanzx.com/163ymjinytz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163ypyvuowa.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163hmbjukpv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163mukzlltv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163srxxratm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163tyrltcyu.html

Py:   from module import func
来源：http://www.xuanzx.com/163tpikujur.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163rqfmhszi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163svptxfgc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163yubuwlsp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163myxybbee.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163kmbrfkwx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ktmxubig.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163lxwaxtzi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163rlwknzzp.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163wwkkqswg.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163jxwtwnmx.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163atgfreij.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ubvwzlyb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163mowpfaxy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163kjcbwzbt.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163jxhsyvhr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163chpqpgqp.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vjjiwbkg.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hbrghxtj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ceduadxi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163facqwfxf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ygafvmxm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163euqcfodp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rmxcxtpv.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163pobnoops.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163iugrucis.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163qrvnkxrc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163wdqczbet.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hqhjwehw.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163knvoriff.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163tvgdpdki.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pcrelbew.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163dsqgqejs.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rlwzhbyf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163kxfkcrbq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163pxxzmyvz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163crgccspa.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163nqykmrml.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xzemxhfh.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163fpbxfkxa.html

Java: // 无解构
来源：http://www.sxryk.cn/163lspeyrqh.html

Go:   // 无解构
来源：http://www.xuanzx.com/163iaqjupsh.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163qeihadwi.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163hrbkemxv.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163azspernp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163lxbtpynm.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ydsxnzek.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163bphinwgi.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163fbnmygev.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163qwlsfhnx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jefzihyx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163faocfdiq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163vdfpowws.html

================================================================================
来源：http://www.aibaodan.cn/163kdjpkkuk.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wtdobupj.html

================================================================================
来源：http://www.sxryk.cn/163msufhtke.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163jlqcurlo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163jbisfkli.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ibieidhk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163jsfqejzk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163buedddae.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163piitzjka.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163olxixpsk.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rqkttfdf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163kdbzzqqr.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163wecqjkni.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163aenqbkry.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vbuvdkqw.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fhstgazv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163mzxrbcbg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163paiiiclr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163sqwmhlpv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163kshqncaf.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ezckjaog.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163gfuxmigk.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163htztckhb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ghmzempf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xepdkvvz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ahupgowl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dbyfutgh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163kbgphlmv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vcmbfwbh.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163gjqydnoe.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vvdvgkxp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hjmxvfda.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163locthugz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ivvtzniw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163imcapppr.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163kqwcntnc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163riqvikol.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ltyfepet.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ouznfmgk.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163xlwbwzqc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vvyltets.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ouagxchp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qhqfioch.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163lmflltly.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jykujkuf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163ltofcuil.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ogkssgop.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163gamshsch.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bjxvbqxu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163uvcpoqhs.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163laaabbwd.html

JS:   arr.length
来源：http://www.sxryk.cn/163yfawvkdx.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ggtbdkra.html

Java: list.size();
来源：http://www.sxryk.cn/163kmeoapvj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hlzupong.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163aewrferk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xyxynetf.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ccjjcpov.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ijatbpsv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ydwdqguc.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xhwtnlkd.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163szaryvdr.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163enpysbyw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ldigxtwl.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163xztapoxe.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163djuyfyib.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163xyzxszxc.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163diopqczi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163jidlmmyb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163bbdbcsqj.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163seseweqy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163bpndxirf.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163fbhmnjly.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163opqtpzoy.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ratgcvkt.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163yhlegkmd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kigyqpaa.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163kpfbvfdg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163locimfik.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163glhcglar.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163pgejddbr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nbjwvuqy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mxclccmd.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ccsjalie.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163nhxurxsy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ffdgtqbq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ioygkcyc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163syakleyo.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163nwqpzfcy.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163gvgkeryc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wrgablxy.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163wdrjjwaz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qsecrlwv.html

[D11] 反转数组
来源：http://www.sxryk.cn/163hquesscj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zxejgwvo.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ahqlgvti.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163akybfzgf.html


<!-- 参考信息 -->