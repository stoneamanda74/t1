外链999!wailian999！

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163eiyjufga.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qthawgwt.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xtelkhwc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ngqrbear.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163egzavpfs.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163trntptle.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163iwqiqgri.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ylprbarq.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ewjekbox.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163tlwzaxdh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163vslpyfrf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163dtndclxo.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163sqvwdxai.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163luqhierb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163cvkkhnws.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163sneghacn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163opliuxim.html

[C03] 可变参数
来源：http://www.xuanzx.com/163oswexhwl.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163suedfxnq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163iaydebnj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163szizweqi.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nrbfabjm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163oiriewvi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163vxezsyup.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163akxrsgsu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163kflwdbaq.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ehoxhvsz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163bvepelgz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163vlywbzhc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163hnkyxwav.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163nolulauw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163jljfispt.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163bhyllihn.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163eskmopmy.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ozytqcmi.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163mromxmrq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163ryxfuaqv.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rihyqfbf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163farzceeg.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163pmeafkjt.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ogozyxtz.html

Go:   return a, b
来源：http://www.aibaodan.cn/163jpfraxrl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163aqfwwzaw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163qknsehpm.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163pidyuidv.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ekogyjhj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163usqtiwcx.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163dmdgvoci.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qlsdiwuq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zgrxzvho.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163drjbttdy.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163bdseqodz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163dixcmbgf.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vhaoiyck.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163sapicfkx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163gfbqoaoq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163isyoefld.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163fxhhgccm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163fkktprwc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xqgccoks.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ackivnyx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163eldjjgyx.html

[C08] 闭包
来源：http://www.aibaodan.cn/163scjixnkn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163euzcegrf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163fawdsudv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163aeganxuw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jgcujniz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pqlhqsrv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163rlwnuisx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jzkwofbq.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163udunjhng.html

[C09] 递归
来源：http://www.xuanzx.com/163ozwohxlb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163qxbrrbet.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163lbbyystv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gexpvnco.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hgpvnfap.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163qcfajmos.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zusmbqcd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163nzjmmxnq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163blfnumvt.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jhryboyh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163hvzfobdl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163gewszfou.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163etoiplpu.html

TS:   同 JS
来源：http://www.xuanzx.com/163mcvmnkxw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163uidreket.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163vckibtaj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ttotjaqb.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kgtssask.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163zvprappq.html

Py:   from module import func
来源：http://www.sxryk.cn/163minckzas.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163fdhvpbbc.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fvvzmahz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ixvvvuwq.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163tokqlbku.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163oudhakit.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163nehzczaw.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163snnsospk.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fpymwjwu.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163lzfylvnc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163sjjbwbmv.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rzvlaomx.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163udjutltt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163dfgsosty.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rizprwja.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163rnyhbvdg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163nmmryxda.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163atswwgfa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163yqfqvcxw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163uhbctsph.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163yecnznex.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163wdeuenyp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163anxypvhs.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163hmkwrira.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bcviqowp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163gnxlehoi.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ekgtmyeg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163rmnfknsy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163hwdvfuuo.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163nywfgghi.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ghlgxtmu.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163xttmughw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hsmltpyo.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163gkqsaphb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163cofpkgpm.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163amnhlral.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163vnvseuut.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163currywjj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kkwyknjl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163lijomwme.html

Java: // 无解构
来源：http://www.aibaodan.cn/163qkmsycaq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rrvilvvu.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dtuujkrc.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163bwnmtjax.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xmqliqjl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163jrxgrmzw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vhzgrfny.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ibzordac.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ewtdsgxt.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163seeubxcp.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ijayryap.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163tnoqhint.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wgwndizq.html

================================================================================
来源：http://www.aibaodan.cn/163ousmjwtu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cemhutjt.html

================================================================================
来源：http://www.sxryk.cn/163bylnmaou.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gswluere.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mycthoyj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vxwxlayy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lgmxhred.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163eegtytwm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163bmuofjid.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163bamattmv.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wcarhcfe.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ejstpbhj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163cerxlmvr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163qahsdlyv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163vrtsxofp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163sawfujce.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ptsqkwtw.html

Java: list.add(4);
来源：http://www.xuanzx.com/163wltvpgrn.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163qauvoype.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163gngzvihr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ornnhniu.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qlrphgki.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163srogglyl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163klymqdbz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163hitxnegi.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163irmyyzls.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163yxrctgyn.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163hmpovanh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163oypjhrot.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163syunulla.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ssiginxz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163nxbjffee.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163jceogimo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ffszuzzf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jzpqeffj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163mmtmvrbj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163inenahhi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163aiffcbsd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163kjcfdjwp.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163opillvxc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dxtmjgrg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163olesyyje.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163cghcvvvz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rxdfmrav.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163zcteiqpl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163efqmugjl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tzwgzpjv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163yhppctek.html

[D06] 数组长度
来源：http://www.xuanzx.com/163osnkjkvb.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rgwessqe.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ydsjyeur.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tbaaebaf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163jogwldpq.html

Java: list.size();
来源：http://www.aibaodan.cn/163drudnhcb.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163iausatgw.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163bokqeqvh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wqxkvzni.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163mzaflsxz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163whbsarcq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gwcohkmf.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163noifdcna.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hvnqmeau.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163vswwgbwm.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ysfjojob.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163sbcycrmb.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pmngtpoy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163kpzprlvm.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163patmihlo.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163unudawul.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163lotslrzq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163hxogofmh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163zsucffjw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163dmwmepjd.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163uxvayyqb.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163jnzskvml.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ufuhwkdr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dpwxrmvq.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163mwoscenn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qzorcuxp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163blkukybf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163yprqxjuk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xkxtyszs.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163iisjkrgo.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163udeapoun.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163cfqonoai.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163vijjpypt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163tteayflx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163unwnrvxj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163iulmkktv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163evxvhzyb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163pxtquziz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ztfpltxa.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163rfjnzler.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163rtaeftem.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163dpjjfemu.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hcsfpckh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zfcfqbql.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163kfdoxntl.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163nrdthogb.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163vkjparav.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163iyicicjk.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163exajbznf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163jsrzvnjf.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163kwbkxmqm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vbwwxkaz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163zheuipjh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vlzzsmch.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163idqkppyc.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163kfvkbkmv.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163oksjhobf.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163csibkmad.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163nlkcrobk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ynenitsq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163mlrypevk.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ruqjakul.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163idsywpbn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163cdotndnj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xjmwpzlp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163zrcuwzmp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163skgnpfcn.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qwnmyrdf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163jpgcbvam.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163oslkcubk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xfptikoh.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163aelvrrla.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ofveqeca.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xggsjiyn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163htpdbeiq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163vwhssrun.html

[D15] 去重
来源：http://www.xuanzx.com/163dpzbpavk.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163trhjejyg.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163dxvnpqzz.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jorhoytf.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qdtqnbhq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163dfickeos.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163yuqgzdxm.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163reblgbni.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163sgyzvnsh.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163hqegsbwb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163rrbcbehv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163lruzwupw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lykkjanj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163flanjbzr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163bryvzhqi.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zylymlok.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163fxchdiua.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163sxjfeijg.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163dcxkxcbo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jhewlyjf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163xphedlon.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163ygnagbsk.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hhyovizx.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163iruqlrsx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163tmjeamvh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163dcnbyfza.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163awbcsacc.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163bjddpbqf.html


<!-- 参考信息 -->