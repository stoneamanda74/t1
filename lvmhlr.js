外链999!wailian999！

Java: if (data == null) return;
来源：http://www.xuanzx.com/163gyhzokrk.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163dclulmlr.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163yshcbkrt.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163yncqecui.html

================================================================================
来源：http://www.sxryk.cn/163rqhotoyr.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wobmhhua.html

================================================================================
来源：http://www.xuanzx.com/163shabnhyr.html

[C01] 定义函数
来源：http://www.sxryk.cn/163yiuydraf.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163gvltpxia.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163bwpwvgyz.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163phvjacmj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iwycwvqn.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ylpuwknl.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163xoaqdvyc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163vinkprqe.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lblzbmqa.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163rbpanxfw.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163rfzbhvpo.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163lfpfegwf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163zjvtrxob.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163yyrcrsdv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xoecnnbk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dsbixjwp.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163ynyicrzt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163xejhtcnz.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ovlrwqct.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163duvpdpty.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163nmkwwprn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163epfubrxx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yyqyzkbp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rwvpqfym.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163zzffvzok.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163kbxkkscq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163sdvhoiyv.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163nahkwamz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163sztuqxmy.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163toqngmzt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163yhztpsdr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163khwzhyyo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163hggqhtiw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163opraqyvn.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xnwcmrcu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163tqcrxzow.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ngdhkqhf.html

Py:   return a, b
来源：http://www.sxryk.cn/163mxzaifzo.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163sztwdqen.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tlxleuji.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163gjiumfmm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163npumnbdj.html

Go:   return a, b
来源：http://www.xuanzx.com/163xigecpoq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163yjhbvsuh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163edflslnu.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rbhmemce.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163mitsvpdw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ggxwoytr.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163flgjlibw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ncarjujs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163uitrvyqp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163xtcwtvps.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163efmotysq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163qdtonfvs.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ndmbrbwn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163abcriyos.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hwcaovgt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163hwjdmxdy.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mvmddjsx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163nclyoepd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163twcbckkw.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163dydnnhta.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163frbgjihp.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wqclxaxq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xpkiotqb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rxapfuii.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163litdkiol.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163utxmufmr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163fvbhdusz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vpuiagwm.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163rjautiff.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xewohwdt.html

[C09] 递归
来源：http://www.sxryk.cn/163fzyolyig.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163rjmjcpxs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rbbzbekq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fzvdjczm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bavizfzp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163jxekeosu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qponyjql.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qnylizvz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wghoobtm.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163kbzblhbz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vwtfhydc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ksuttiep.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163cawnqorm.html

TS:   同 JS
来源：http://www.xuanzx.com/163uwtwthwo.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163gdsxfbwq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163pzphhpgz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163joulwgfe.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ycjqhqyj.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163xoaazqej.html

Py:   from module import func
来源：http://www.xuanzx.com/163yokeqjyj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xkfjgjqg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163pytozamh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163tkieyfio.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163eobzsxde.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163sexjjbib.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163cfilhcpt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163bihzcgne.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163mlwtgmxu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163uciufegm.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xtfdvcqq.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163fuozthob.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163imlrxbvb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163phtyditz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163vaibxsgg.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163faiylemn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qirmyogy.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163uvknforn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163fwlasznr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ndaxodpq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163gjkuhltr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qzoupgup.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ewrvofhn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163aqemomkp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163qbxsiaqz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xcjzhbpf.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163razsiryx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163fhdnoizy.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163iyhbqrhx.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163fvokyjui.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163odnvfjjk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pnfrpiaz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163wrjwoaze.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ogueqeps.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163reanhbyv.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163esnaijfp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163qpansbqg.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163yyhgqumh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vyrhmhik.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163glhibhap.html

Java: // 无解构
来源：http://www.sxryk.cn/163spneaeyk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163skdthhoa.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163dvwsiihh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wtiqmmjp.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163sggjmgyi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163vfdlpbzq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ywkhrpmm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jkmoadvk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163jxygohgm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ivpneykb.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163fkxgchkm.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163fsgfzwix.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163stwvlebk.html

================================================================================
来源：http://www.xuanzx.com/163dcwmtllx.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163xmhzhcdf.html

================================================================================
来源：http://www.xuanzx.com/163ldukeeej.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163tdoiraxl.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163sxumdzfy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163bnvvjslc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163pphczvox.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163dbuhxsgj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163yeakpinb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nabluakr.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163kisyczit.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163szoupmgh.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163dikpghmr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tstxuvtg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163cklcrtrf.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kxxhahow.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163etjcdtxc.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163orlkmcld.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163nazepfsk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ghuldnis.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163xbmgrbwh.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qdvqujzz.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163vffnzisw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ojukfzzm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163pgbjpfrz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ffiktvxy.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163dbpqdkhw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163kcauxaiv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163feultjbi.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163iunfzngi.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ktaxxwmt.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163kvgwwgpo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163xnemokrt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163hjfjzvlv.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163whtyekki.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ekqwgdkr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163lrzdxjgy.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163phfajwjr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zakhnija.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163gpztwkww.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gcpjwiyb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163otebqqbr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163oqlfyper.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fwthdukr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ihrvfbnn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163zpkrblrn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zdkdbhee.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163mqhzuluh.html

[D06] 数组长度
来源：http://www.xuanzx.com/163zhmpwjiv.html

Py:   len(arr)
来源：http://www.sxryk.cn/163keqmwdjc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wdsuwumz.html

JS:   arr.length
来源：http://www.sxryk.cn/163trjzqrhb.html

TS:   arr.length
来源：http://www.sxryk.cn/163qxuqhiin.html

Java: list.size();
来源：http://www.aibaodan.cn/163iicsuzwq.html

Go:   len(arr)
来源：http://www.xuanzx.com/163owjsmvfd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163oebaqswp.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mrtwuqar.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ujeekuam.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163uijggjdg.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163uppceiec.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lkjswyqr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dagumdpc.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163zppftfmg.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ehskoimq.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163yavutaho.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163xnzlwuuw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163yebjuoma.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vkgdbhzm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163exxwrcon.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ckazjkgp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dlkxrvun.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163uzjqbvyt.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vzhiqdth.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163vpmqmhkm.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163tsqejzjy.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ccmzkvqm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163pcmazrrw.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163yitqagxy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163cxoxnoqp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163khqutjdg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mjirnpcp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163nfxkqjec.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163sjxgxzxl.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163cvmbctcy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kkxaavia.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163riakfwex.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hbxalahn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163uhwefzxk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163uuihkysa.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163nnkyhzpb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163sbtbtwwx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163blwnoyqc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ljxikuuu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163mtemlgrh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163rjrckwqs.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163aanqdisj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163duwwuyin.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qjlwdcjc.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163mnafsfdx.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163tadmelgf.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rfihndte.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gnehyuqc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163eyhpnkyy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163nfpsggwc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jpvcbwam.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cwsisfeg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qpjiroyi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163oftlgvhh.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163nbzzkjzb.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163yszwpnsy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163eapqswud.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163rdhxkgkp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163zqxoysoe.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163zkyjazaf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hcohjhox.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ooadhfua.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jwiuplqi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163kyvwkxyw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163xuprybdc.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jdgtquoh.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163hsgyhrqv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ybyergaw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163qgrqsgku.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jvqdffwg.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ztwvekzy.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163wsdvlnum.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163cltrjxau.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163muqqecxw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163qsgotnzr.html

[D15] 去重
来源：http://www.xuanzx.com/163fgefvjmc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bxzobiig.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163wcqyuasa.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tzklbktd.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163omsjjwec.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163gvqnudni.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163kwvzfept.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163yoeudynl.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163owvehkje.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163xqfppocp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163txqofvuv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163wrbxcltr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lrybsdap.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163duqyrbdg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163miycdvxr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tzbzkzbk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163zqptjtwo.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163fbgysase.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163jeakmhlu.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wwebhsaq.html


<!-- 参考信息 -->