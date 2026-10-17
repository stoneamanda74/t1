外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163kixzyqpk.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zwpisamv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163sjesarik.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ngoflouy.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163nrtdorpb.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163sfadxhwv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jfqvisrm.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mkoifqpq.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163iiwpohsj.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163eaxroczo.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163yxahwoae.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163xkwxibdr.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163kawnjmmn.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163wlxqqtug.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163vlistlhj.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163tweyjgdf.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163nvqyvulf.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163zeuzoked.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163kccvwrjp.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163hjqrtimm.html

================================================================================
来源：http://www.sxryk.cn/163garcktyv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163hdzqlruo.html

================================================================================
来源：http://www.aibaodan.cn/163ckvovcmr.html

[C01] 定义函数
来源：http://www.xuanzx.com/163erwzwlwg.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163togkcyfg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fpdalqfx.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163rogbrofm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wvgiszrx.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zspzvgzc.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lhvloghd.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163raajpvbm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cbygojem.html

[C02] 默认参数
来源：http://www.sxryk.cn/163tsxvbyay.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rczqzwfi.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bpuepjzy.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163yyrliktg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163swfbseui.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163adotztit.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163yvnyaajy.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ojbozhti.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163burpnuuc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163msslqdfq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xjvnufic.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ddkgfaby.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ocdqqkcs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jiohkqqg.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wslburbg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qnymnarr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163lyrsomra.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ryrdzrje.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163lfshcwgr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163dbnxpbyf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qclurkow.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163qriutpuw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163pegusfhf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ellkeqwq.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163tatptzqd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wepimtcx.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yflwhcjf.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163shleuuin.html

Py:   return a, b
来源：http://www.xuanzx.com/163hckpopwh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163rshrktwx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163hoienfyp.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163gtqtymky.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nodmdnwm.html

Go:   return a, b
来源：http://www.xuanzx.com/163caupzrlt.html

Ruby: return a, b
来源：http://www.xuanzx.com/163hldsfcva.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163vxhianrx.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163wiuoqmtm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vgszzrnt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163hzhdggzl.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163twldsnvw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163fublyoio.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163mypsylqu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163bsmhbksd.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zbahentt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163btebhjsg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163uoekykhd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163vljxlifu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163zdiexikm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163rfikwomx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163dlpndbjq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163mfondzfe.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163qscuhzrb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163xsvmtbcu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163stnwojen.html

[C08] 闭包
来源：http://www.sxryk.cn/163htwnkqoj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qbsuvtzl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163rcspiufp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hxpyekfj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lugfaivj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fjhuokwq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163qufmtfti.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163okdifpwg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kkpyiles.html

[C09] 递归
来源：http://www.sxryk.cn/163vpjrykyf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xemnqzmj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wfgpdztk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yjuqfcwb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tofhfrvj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163xfatdftq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ddkcuotj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163hhfbxcze.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vzyzctda.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163igotavmm.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163tlwatzel.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163guvocold.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163nyoasdvd.html

TS:   同 JS
来源：http://www.sxryk.cn/163xondaieg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ddskbrhv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163xihyerso.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163ycxwvjyd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163micjstaq.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vpxclltx.html

Py:   from module import func
来源：http://www.sxryk.cn/163ycrkiyef.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163yunisqmb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163hklogabf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163neghovlo.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ozclunti.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163oiizagfh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163pfrozztp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163wdvqmayp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ckkhuuyb.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163pmnjmjvh.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163aactmdju.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fhmkytvn.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163pfgkoikg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163kykpefyf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163mktruidm.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163cickspzc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163figvdfyj.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163txhqavmq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vyxucqvf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163aecdznuk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zhmlpppr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163haihkglo.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163orwqmwck.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163wuttxqnd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163nbyzuflt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163krpridra.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163oeznoleo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163wkqauxea.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163zhqszkrr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163dbicuhzu.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163dflschuc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zianjeky.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163endqvubb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163icdesozw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163iwapbptp.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163eszohmto.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163qltchcqw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vxnosdqn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163guuhmchg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163wuhoyzdg.html

Java: // 无解构
来源：http://www.aibaodan.cn/163mwumzmfn.html

Go:   // 无解构
来源：http://www.xuanzx.com/163hyutosnd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163uwsgldfy.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163xqctqgqy.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163aigmvjjc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163utjjezhh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163hgmkfcsp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163nigssdbz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163fwaaafdz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163cbzoziyu.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ggosgoys.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163udmxjaqo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fkpaanig.html

================================================================================
来源：http://www.aibaodan.cn/163wlkdypmi.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163iierhoqm.html

================================================================================
来源：http://www.xuanzx.com/163gpvrbjlo.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163auvezdnp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163oqytqxdq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163mymbteco.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xsajepnw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163vylihpwa.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163hilsxjjj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163tccbffdu.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163tyoizmbl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163pykupdmg.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163bnqilkhg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ptnofjyb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163tlazakjp.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163wgnrqvdm.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163rhexvkuv.html

Java: list.add(4);
来源：http://www.xuanzx.com/163eroejibx.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163iqluavpj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163aprifycy.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163dotbxypz.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163lkeoaflh.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gvypucyi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163akrosucs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163rtzqvxjw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163zpqvqhej.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163dsrceqtv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ybnfaauj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163tlnpnywe.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163rftgqiix.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tlbiqhcq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lpkczvwf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163giykrfgw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163squbdips.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163homwqwld.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163vxlgfdnm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163djmmotnl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lofhkbsa.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163rlvdeyqi.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163tdseiotm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gmpekmzh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163sblaakpm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163kkbwoghm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ifarchsb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bhwreksj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vriyhmur.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pdoqftwn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163yncujonb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mlhxwdza.html

Py:   len(arr)
来源：http://www.xuanzx.com/163bgnpesbd.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163jafyzcoc.html

JS:   arr.length
来源：http://www.xuanzx.com/163qhznzpct.html

TS:   arr.length
来源：http://www.xuanzx.com/163hvljttzq.html

Java: list.size();
来源：http://www.xuanzx.com/163nfmsacre.html

Go:   len(arr)
来源：http://www.sxryk.cn/163gafllvmq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163hwcxqnna.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zzyvdhbr.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163gkdhcjog.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163kvvnmoma.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163domcydbm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lokvwzit.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163oilosqji.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163hycnkrte.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ztpzmbsb.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163yqkkfeeq.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jmjrihmv.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163rnctvrwl.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163sdtthcux.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163iphmfgol.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163kwljwjtl.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ecyxbdvh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163oelzrbka.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163xnpdzgla.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163sstaotyx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mwdoxtxx.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163dzwlkbxu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qajvavqj.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ixidvqqy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163qcvrhkeg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vijazfpz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163rcygwmbg.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ecwfaddr.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163tqtzdhvz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zihbjjyo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163iyvesnqp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fadhqrfl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163myimhrfe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qexjavnk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rdzmvvka.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163zvfowqql.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163uqjqphmq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wjsaqqhl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163uzqixvjd.html

[D11] 反转数组
来源：http://www.sxryk.cn/163krcenhpf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163gqgaocnj.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163huvbtoeb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ygjciuuu.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163xwnlwogt.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vpnmrotx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163fgufsvvz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163fbpmxdzk.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163erluqtsl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163sugtjjgk.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163zhnkasyv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163zpcmpyis.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163sqobbzui.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163eozhpddk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163xrysacgl.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163oxhhefeq.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163fbieelyu.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163jgdrwiyc.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163razozzdh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163kbcqirkt.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163eyueajzj.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163clgpystx.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yjhnznxw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163djyqwrff.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163sizwqvww.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qxemiaag.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163hrwgvsqd.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ejiebezq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163sofcfeqp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163lpunipud.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163gwyseslf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wxkseouu.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hvqigobn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zhqfdgey.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rgnbapdj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xmleazqy.html

[D15] 去重
来源：http://www.aibaodan.cn/163rqaukqsc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163axamyioz.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163tblttcgz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fhmkvwhz.html


<!-- 参考信息 -->