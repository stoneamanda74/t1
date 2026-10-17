外链999!wailian999！

================================================================================
来源：http://www.sxryk.cn/163uufgfsep.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163iesccoke.html

================================================================================
来源：http://www.xuanzx.com/163qaisepco.html

[C01] 定义函数
来源：http://www.xuanzx.com/163xfaubisx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163njgflqfg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163qfxddgvs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163njodgvqc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163pdiblbuc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163uczmcghm.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163wwsyomrz.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163hgbobjzp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163aihowsha.html

[C02] 默认参数
来源：http://www.xuanzx.com/163dvwvkeum.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ntnwgzle.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jtnjhumk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163ihiiaqul.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163yyvdjuyd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163yyxwcfbf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163cqhakjgd.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pfqztlcx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163cihblxff.html

[C03] 可变参数
来源：http://www.xuanzx.com/163kfeynaui.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163sfeihbay.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qfmzxmvz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dpiginzn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bdbptubv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163njhwjxwn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ezrxtjpz.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163wobwcwjb.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dguvbdqa.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mplithzp.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ikozocbb.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zthkhwuk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163isycxnte.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163jqioesoh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163sgimcknw.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ptwfbkrg.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pdyonesa.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163vitgtlfe.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163lhdkjjdz.html

Py:   return a, b
来源：http://www.xuanzx.com/163lsztmgzy.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163kuisxywe.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jebzotxv.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ctlqwaky.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163gyvmeiny.html

Go:   return a, b
来源：http://www.xuanzx.com/163ucsovewa.html

Ruby: return a, b
来源：http://www.xuanzx.com/163nwsyswnj.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163khvfncuw.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hmajtlgh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163wqwkhyyk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163rwvmlivg.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rmmkkewe.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ypgtzrwc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kdkisrge.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163dysfygko.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163oendzynn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bonrziei.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163rqnwzlwi.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rvpdbrbv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163wdjbxllg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163lnofbuvz.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rvzxisys.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163xlabsvzt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163npawldui.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163anjenxxb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mlnvvibf.html

[C08] 闭包
来源：http://www.sxryk.cn/163rnhuwqxp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163kaoahdvd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ebnnmefh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tavszadi.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jibvtxdm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163bqhccgut.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163dcxcponk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163gqvmcmtw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hvgiundw.html

[C09] 递归
来源：http://www.aibaodan.cn/163rukwdrfu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ymfgnacd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163qpvxeolf.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tandmphe.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kqsfhvgo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zvujdcuk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gumpdgce.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163nlwmdqbz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zxpnlpkg.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mmmpxbbw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163bxhjjewa.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163lawnygou.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163copkriru.html

TS:   同 JS
来源：http://www.xuanzx.com/163juygtobi.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ovjcttsy.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163usuzwsla.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163uvnaince.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rajqsuet.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vrhsblzz.html

Py:   from module import func
来源：http://www.xuanzx.com/163ywbukaeq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163qpuemtyo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163lmtcfdta.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163jqgfvven.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rebjogdd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163yyyrhqds.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cyfstgfo.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163gwwxsdhs.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163wegyrzsl.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hlcilbvh.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hablluty.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nfmxaiqb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hbfrbyis.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163crhqycjw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163acyvtisz.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163quphpyxn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163tjynyeay.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163cxqzgher.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163npyxgmey.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ssvnwhpl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163zvkvenzp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lejkhtbh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vgtyxjnw.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163bxehryad.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163wyqqoran.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163qvtkdjpz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xieogvrb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ecdswktf.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ojsawmyu.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163iowucsii.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vtfdufyi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ikbxqbmp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163xhermqoa.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bceliorz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163scxfqqgc.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163grbtyrfp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ywrgpvrp.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163xcxgoyer.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wjxzwezx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163aqucjxdv.html

Java: // 无解构
来源：http://www.xuanzx.com/163sxjrcijj.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163gxlzridf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163pcklozmx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163dsvwesmc.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qfcwxrmf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163uitturdw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163xvzkumqs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163rwvapvsf.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163hqetlhlj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163mxinncsf.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163gjbiqiui.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qzefbtds.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163rxqgmflf.html

================================================================================
来源：http://www.aibaodan.cn/163nkbjmufa.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hlxptzag.html

================================================================================
来源：http://www.xuanzx.com/163jgacyicz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163byqgffri.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163wdzdqruy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163hdvzofep.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lsfthebl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163nzvhdcna.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163frlbtmmz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ycljjtgk.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163bpccfcby.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ymovkywy.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mumrzxes.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163wspfmixi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163dmklidyn.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163mdoaxevj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163zzbkozem.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163jfiumyfu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163seuozzpq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163driywrnx.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163atdmisaw.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163fvtjrhlg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163klmqsztr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163pdnvdchh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163hyaamuxm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163xclzxdxq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vwewkpml.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163suijnfci.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163wiqedkew.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163liqqmxnn.html

[D04] 删除元素
来源：http://www.xuanzx.com/163cmudqwhm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163fawlxpyt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163quogpvzo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163vbzhpddn.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163vnufktev.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163fiwkhbgf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xgjfzaly.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163urxnkxnq.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ymtejekl.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163yymduven.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163vxfhadpo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163bxwjoizn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163wqkaizbq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163etxqmqpe.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ifbidbkp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163ojvbttpu.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rgjmgxjn.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wbslfrrs.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ubplwrfn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hdwijtap.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163exhguvvs.html

JS:   arr.length
来源：http://www.xuanzx.com/163dqlmgaiz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vlpfwwqt.html

Java: list.size();
来源：http://www.xuanzx.com/163sjhnflhr.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ippzuvvp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jihdzwog.html

C#:   list.Count;
来源：http://www.xuanzx.com/163eivwtofd.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xypyjqse.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163cawwwspx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zmjxkbgc.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163njwpnmjh.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nrffoaxt.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163hgksvwke.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hgisddlg.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163czsxxtoh.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163megderhd.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163drotfqqz.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163afgjgfdr.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163kejrjmdp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zkoobcvl.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163yiwezttp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163jggrzyzh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163wyrppfon.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163mfwhxcfi.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163iwxgxxif.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163pmsaujtp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vfipwzmx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163jvlwyvap.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ernjnaiy.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163usjbatnc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vabsgcgz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ptbnbhzv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163mkwadlmn.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xcffwdwe.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ajhgjtsx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ejbjpoeq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qwyabasd.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ilkjohem.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cdpiyiow.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163fqayyakw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163axtwclbx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163eyduaabg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163sqsiteyx.html

[D11] 反转数组
来源：http://www.sxryk.cn/163qemxkwtm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163kfzqepge.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hxtbffln.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ubykpwnb.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vhulvgwv.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163tphcjkie.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163treslken.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mrhqluqa.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163emupgbmd.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163hmbvfhxp.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163wciwgqnc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dveqgggm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163imwumqaq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163mwanfwgb.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163updwcnbv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163ddcidxda.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163yiqahaht.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163wndqakrr.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163wffbjdmy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163gpynmeee.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zbvzuhuh.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163hpodgqhk.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vlqykxga.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163dpdcsjlw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qzelfzay.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ygabrtef.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163chvahqvy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163jbayvowl.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163dkucpobk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ggsqtojy.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tbwuzsez.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jkaoeiwf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163pgrgneac.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163tettcuer.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163yuzbfbbh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163oiqclkec.html

[D15] 去重
来源：http://www.xuanzx.com/163fzmrytbq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163rduvmugk.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163hsljmefy.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163mfzztwho.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dfvwpuei.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ulkmtfqr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ksmwbvvd.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163iwavsztp.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ikqfqssx.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163ijlbkadg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163saqjfoyp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163cotsigpr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163uskhbpra.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163sxprgqft.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163hzozlxtz.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163fbpoocje.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163jmnptery.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163rtudsxvi.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163uywfbmhs.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163akwynmeh.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163dcbynsmv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163yhuarsdr.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163pypwbkxc.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163fstonkaf.html


<!-- 参考信息 -->