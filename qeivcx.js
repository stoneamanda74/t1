外链999!wailian999！

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163fnafuzah.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163tweqcraa.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zqbtvdln.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163mabjqeuh.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163ygnazltl.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163tayignas.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163vgawalhz.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163tkjpeuln.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163mziltsuz.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163ddehlygn.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163cvypdnki.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163sxtqwdlb.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163pgkcqkhi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163xlqjfygx.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163rovksrrh.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163yywpjmbb.html

C#:   x is int or double or decimal
来源：http://www.aibaodan.cn/163nnldouqk.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163pzpxrqec.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163aqbiusxh.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163tcwssebu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fzivzccd.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163fmtnutiv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163cgvwhclj.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163jvuwgokh.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163yjqqvkyj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zqragxvc.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163fyvttpqu.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hhaigpjv.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163rqqtzqwq.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163cmwktwuz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163ofuzahof.html

Java: a && b || !c
来源：http://www.sxryk.cn/163kqquoheb.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163nhlaartc.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163swxmosxs.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163vivtwfuy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163hxhervjj.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163zqylahtj.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163dbhtthcv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163vxgkujwe.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163udsbeztm.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163tfcqbqzi.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163clhkpdkq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ptkugvnh.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163qvszpfem.html

================================================================================
来源：http://www.sxryk.cn/163tkhpumjk.html

C. 函数与作用域
来源：http://www.xuanzx.com/163wtmmxtof.html

================================================================================
来源：http://www.aibaodan.cn/163lwyiwhtn.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163rcjvbgbz.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163kupwqeyw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wlvedzuw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xxfgkxbq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163bkkgtiqn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163osqehdly.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163admnmybb.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163mvxgglvw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ralgvrdf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163ffgwxrrz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163mpzbhncg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163dffpdjgs.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163fxltetqd.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163yhqtqtlm.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163piyspdft.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163oznvdgsm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163imczgtks.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163nglbfqkx.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ajguxsru.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163bthvhncu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hpggrxnz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ifwwxaqa.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163rlqgtxwu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163mywodhmy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kwcevbkd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163gmmtnpjc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163cbyueswp.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163kuskefif.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163jqxbtcuk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163uvxxnlnp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163wbhjxtgu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163hsgfgmoy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tsnnquqb.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163cfzlvjdb.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ypizhxnb.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pjagkqve.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163vbdyssbb.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ogkwxsrw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163kjruaiyu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163uhmblpwp.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163qcfvkoyl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163vbczmyuv.html

Go:   return a, b
来源：http://www.sxryk.cn/163jxanapri.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163yighhklq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163rcsritjr.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hncozvnj.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163tvcnpvus.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ztttjkkr.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163friinlrg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163soehhjlb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163fiixtnuu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wwpdwehu.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163cenmjsqy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163qnpotajg.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163wllkjptq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163qlrtqmcj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163gabuanwh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ickurlfm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163mmuxychd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163szybbltd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163axqvixpi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163umtdtsav.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163xebgseqi.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wbanzgsm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qstqemxa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163tzhjyjyl.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zlcjdxby.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nuotelgw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163qatfbysk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163blurofks.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163bmjalflo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uqgifqpi.html

[C09] 递归
来源：http://www.aibaodan.cn/163yjnqngnf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163mhsmmkgg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163srgyitiw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163doavqsvi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ukfeauvz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163fwqhshhb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163wlfgupuc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163xiritefu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hwjrylvq.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ujaquphw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jffjzsai.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163mlnjjiqs.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ckpvxkeg.html

TS:   同 JS
来源：http://www.sxryk.cn/163pwfehsew.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163qnwnrkwb.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163fxekqolv.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163yszzqnnw.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163sskszwyd.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vytleqvt.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nojiopwh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163qbosdwhw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kpnrlakw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163vofrhtkc.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ojjcvmef.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163apxmnceg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163mmgyanwd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ywevrvah.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dllvipku.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163kwrmohkj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163rqhckobz.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rlaldqwf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jirncmgh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163oecmliwv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163jnqtgova.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163xjsnbeyr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ljqqxmae.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fsabonlj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163uvyxmeos.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qiajtezn.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jgyjtemn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rnxggzqn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bogqsaut.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163glyudwck.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163dcdheppe.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hflstwjj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mstsawxf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163pbpbwesq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ooxrohaj.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163tpvumehs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163oiwoqexn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163uvnlokhz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163wvkginpm.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163hdplgojr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163pfwapwqo.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163aqmfsvvz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163nmllcrdx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163sffsdmek.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163tudozsqp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jepgmnsz.html

Java: // 无解构
来源：http://www.xuanzx.com/163ivybjiok.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163lozicyap.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163lecahfmf.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163auuwkhjm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163wmnhkkpm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163jpxjahqj.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163fgrboxlv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163sixyrayh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163iwdwdxzq.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ehufdkkz.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xcfniaua.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163xhekslwt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163yneusxoz.html

================================================================================
来源：http://www.xuanzx.com/163uwauzxdj.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163uatvvggn.html

================================================================================
来源：http://www.sxryk.cn/163tfqyvhyd.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163skikighz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163lfkgvjme.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163lgycuzsw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163upnbcvxy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163zjzdmnlx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dsjpieyy.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ffmkcbqw.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163kigrpzna.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163pbyuwwgy.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163bnvoliqs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163vruxtszj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xzwxkpuh.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ldcqmexj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163acwacvcv.html

Java: list.add(4);
来源：http://www.sxryk.cn/163zskbuewk.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163cniubdio.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163nubncxow.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dmesahun.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163lsxmyfbf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163qipnixmr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163afwvatal.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kefumlln.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163qwnfehsk.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163gaiizkup.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163quhpjavw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163uuqatpsj.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163foygstdn.html

[D04] 删除元素
来源：http://www.sxryk.cn/163yhgvbclb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163imefbyvi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163kgpmduzq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163xgftkebw.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wznmjhln.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ksdwutwv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vputxpfe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163buxwfkpy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nvplwukc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163atuamlzg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163fwuvshso.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163wpkpetzp.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163vkcxrnua.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163xnxjlfdg.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163negcwbjy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163geviytxm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tyqwsdbe.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163qxjdnaoo.html

[D06] 数组长度
来源：http://www.xuanzx.com/163vknvacgo.html

Py:   len(arr)
来源：http://www.xuanzx.com/163zauhqrtr.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163dxdlqhng.html

JS:   arr.length
来源：http://www.sxryk.cn/163ifbdfujl.html

TS:   arr.length
来源：http://www.sxryk.cn/163kujxdveq.html

Java: list.size();
来源：http://www.aibaodan.cn/163ajbbqiff.html

Go:   len(arr)
来源：http://www.xuanzx.com/163pkcfuepa.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163ykmtdpqp.html

C#:   list.Count;
来源：http://www.xuanzx.com/163nnlzmozw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163cxdppiuh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xsuekqxf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163hwqhpuab.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nhvewjte.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163upxpnddd.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163eavkqheb.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163grwenqod.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zaebqosr.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163cjhvajib.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163bsvtcpyw.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ztgipssq.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vaqzavcz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163acsrvmvd.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mvlscmxy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163arkynhlq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163kksuesay.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163jmokourm.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bbvjfopu.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163jvgemmde.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163gbiyskto.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163lzwubizq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163dpuricih.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163hhonqmld.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163datjizlc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163kpswmtqm.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kwqizgho.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jwamqdng.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163mrkxeruo.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qjmhgulk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zrxoayll.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163scaxpqwm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163bprnjgoc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163hfrfoabc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163pcpefzou.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163mylyeqwp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163lruwhxeu.html

[D11] 反转数组
来源：http://www.sxryk.cn/163thnnhmay.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163cadhjtuw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wjqxbzdf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163asvbuhxd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163acjwipnj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163dxfgvaxh.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163timjrcio.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163urktohyu.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vyzjnrrq.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163cosehodv.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tfkyvcwy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163tjrsgbxd.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dgvsovzk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cbgjjosp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163fwplfzuy.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163iyerrvfx.html


<!-- 参考信息 -->