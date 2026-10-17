外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163pupmtaln.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163mdjmikpc.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163wbutdvfl.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163efbkzzgl.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163amorfcnc.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163asjzyajs.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163pmgcgyki.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163bnjcziaf.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ynbnmykm.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163kcxmjcbc.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163qxqamnro.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xvwgklms.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163nrravvng.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163gjzyecsk.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163srcuscfh.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hkacsxfn.html

================================================================================
来源：http://www.sxryk.cn/163zmyetruv.html

C. 函数与作用域
来源：http://www.sxryk.cn/163yvwtdfip.html

================================================================================
来源：http://www.aibaodan.cn/163qamklovn.html

[C01] 定义函数
来源：http://www.sxryk.cn/163znghqzdv.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163xyrvqijv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dqlgqfgd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163jnahginr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163taitsiej.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ovhejspa.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163dwjvnstk.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163hrxcwkye.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mypaetid.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vyqhcrrz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163seuzapfo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163ohbiwsuf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163yckqmhdu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163rvvqwksv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163rvmzqheq.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163lwpngyuu.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ipvusshx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163lrdejoad.html

[C03] 可变参数
来源：http://www.xuanzx.com/163qzqfsrgq.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xikalabw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bdhcyjmb.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163cuwwkecq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fmpeubcf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163vwopqpcu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163fxxfkbka.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163kwuxvfmp.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163yczuhhdf.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163uekhvkgu.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163qleocndn.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163vuakbpso.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163kvhfjhdk.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tnzrghvz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163hndncteo.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ugqrukfr.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163amlwtmgu.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vgwokpyy.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163szvsbiiv.html

Py:   return a, b
来源：http://www.sxryk.cn/163tmtbnptc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lkaydgje.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163kjstdfjz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qxmpeiwu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163mzyvlqqw.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wyrohzho.html

Ruby: return a, b
来源：http://www.xuanzx.com/163zkfzxxim.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bgnawcxg.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163lwfrogqf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163xsckpqap.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xudpfycy.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gdwfgadg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163akikaxpo.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vahrzswm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163jmhrumhq.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ypnqwxrk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wwsusmss.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163mpwpvycn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163mjcawpeq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163nwhqpdlm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wqlldhwt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163dmaixtgw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163xntcetfn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163pjrmnulq.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163emfurktr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163gozlxdld.html

[C08] 闭包
来源：http://www.sxryk.cn/163biqthwsi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163prualjkx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163fvkyouib.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ugnmgwfc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lnnhtsxn.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163mnguxoer.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zrentxww.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163qtsflpfy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vcjihjhp.html

[C09] 递归
来源：http://www.aibaodan.cn/163diwlfpdw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163xhbpaouu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163roqcdbnc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gresqoku.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jdwutgsb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163pslzseiy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163uuuyfshd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bekbfpnl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zqjpjyfx.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163bjhpssif.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gsvhqqwg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zxprmljp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ctcqpsti.html

TS:   同 JS
来源：http://www.aibaodan.cn/163zrwxoipy.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163xizvfama.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163bklveosn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163gztwsdxp.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nyciaffz.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163adkzzisx.html

Py:   from module import func
来源：http://www.aibaodan.cn/163eexljxrm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163yxwleqik.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163oamvhwix.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163mrebfycj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163cdcdcrng.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163setdxfan.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163iojqqbyz.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qxhureze.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wvvalrir.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cgkwlpmt.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cfbrxxct.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163alxbmwdy.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163mhmavwjb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163isgxwulm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163xfxbmfpu.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qwajnacj.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163oqsrphmj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cjlbhtqt.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rwzwycxb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kjlyymvr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163okewdwjr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yhwapbce.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fyedvjfs.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163rcirsoxt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mqhkmvav.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bmcrssmf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163dsrbppdo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vkrpeurd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163lyynzjpo.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163vnpmuuys.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163tuocwwom.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163zekwnwij.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163smueshon.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163meomisgk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163dnrcjwrb.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zjgedefx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163msdhvasu.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jfcxzlxr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163mssncyrz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jvppyakx.html

Java: // 无解构
来源：http://www.xuanzx.com/163ruebzprg.html

Go:   // 无解构
来源：http://www.sxryk.cn/163zuqakyxy.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163sjpcxalu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163miyfsgol.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163vbsaptaj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163lxcmivsd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163llqlsxtt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163pbzbkykh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vojfqzyk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163fmptnvje.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163vtregcud.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163odtmhtzn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163sbdzytbq.html

================================================================================
来源：http://www.aibaodan.cn/163efxrwjka.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163vqgaxiwd.html

================================================================================
来源：http://www.aibaodan.cn/163gtrmdvck.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163vcashrqg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bcbrbuzh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163rwmhhijz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fbhjkpcy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163umzvivxs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163grcrhwxb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ryhjxgxv.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mckcdjsa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163qmtundsb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163fgivrjvt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163udnmbnsw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163qkwnwxym.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163aqjjyqmr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163klynspdw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163sehzkpcd.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163wtvlrfzi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163ukoyuzzf.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kxlmzslz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163axrrgkgk.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163okohmtau.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163dabjazsv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jnuzpgog.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163qidnukyt.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163xjzhbuzk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163zspdleye.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ibcqueiz.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163epyifyen.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163lyjznewg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163znnbxmrw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163publpmnb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qpegvxqg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163sangtnib.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163rwvoydoc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163utzsofaj.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163mbawcgkg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mxllveuc.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163civmreod.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gjcpijwk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163iytlzlst.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163wrftiyas.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vfckentv.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163beuzsjwg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163vkuxyiam.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163evhnqhnw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163mivvzmxe.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dmyxjmly.html

Py:   len(arr)
来源：http://www.xuanzx.com/163eycvhqii.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163lgpvqwmk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163mjynzsyz.html

TS:   arr.length
来源：http://www.sxryk.cn/163njgyqnpd.html

Java: list.size();
来源：http://www.xuanzx.com/163kliryywm.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163xzmsftcb.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163xjydzhlu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qbwaptni.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163dkfeosat.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163zchiadfs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163xnphfcdk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163aogshhro.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ivqnndoc.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163weexsbto.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rspptbzb.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163zxgnpnqi.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163iniuzzqt.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163mhvssanx.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163guvzltsd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163atcwyvuy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163cxrxibjw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dyqncqig.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163eycpvxwj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163iuvphnyy.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163vlutyqts.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163iswwvzds.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163bnetdzge.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163eypqthdh.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ahlducaw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163pnxeclfu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pdkjckcp.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163galxwioj.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ppaogobq.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xbxhirhr.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163zbrhbjtq.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163yrazrbib.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163idxypklx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ajjvqptf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pglahzyg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163bbitobbp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mlyvnzbf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ufxjxrql.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ohfrzlok.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163iyfdlkjc.html

[D11] 反转数组
来源：http://www.sxryk.cn/163oatjkebl.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163cikicjza.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163tjqvcsdt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nycysqjg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163whgpcdyc.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163srbubosa.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163oytcdmib.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163prgwjgzw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163hcapigqe.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xuaevokb.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163unydhapm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163yvblvsmg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163sbkzgubd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163owmfxktg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nhxmtecn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163pjtdvuar.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ddufrwtm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163hcutykpt.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163tbxepaeo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163tsbbdtsh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ittpizme.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mnzcyubm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163crgxgbdv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163awwtaqov.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163gakrgipa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163huppcmyh.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163anlrehfy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163eyvyvwkd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hotsvsay.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163vtnfrptb.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xbuonmik.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xeheuglm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163wlckieeq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163joktrtqb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163cmejqvgx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163crjafwyp.html

[D15] 去重
来源：http://www.aibaodan.cn/163byamkofx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ptnweeal.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163nnaawspu.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163yylbocsy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qdjxohna.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163blshlpae.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fjbgjnvj.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163izgwcwaj.html


<!-- 参考信息 -->