外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yhquttez.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ygdnnkms.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163nniazsag.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163vxjjckcl.html

[C02] 默认参数
来源：http://www.xuanzx.com/163nlaqutxs.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163indgfcop.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163lufhgsna.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163ypizfoae.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163gpztkwej.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163jsadvpsw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163hqnmfpxw.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163akikoawb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163dvtklpmq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zmtgvcdz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163pursmtrs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qxhaijib.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163wdusgbcx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163gcojjcfl.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163alpwhahd.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163groherum.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163kbghzdrl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163lcptssti.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ayeyegvh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163dqucjcca.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163pbvxxrnc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163vcihumvc.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163pyosrayf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163lxyiecfm.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xcgjatjn.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mpjcmoyu.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163coqxkbje.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163nopypsvu.html

Py:   return a, b
来源：http://www.sxryk.cn/163nxseeywx.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tkfupmce.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zlspntec.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mgefjtgc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163hteaxycy.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xjlzwmym.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ianosubp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mmmffxrs.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163wjhjhutt.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163nqgwrexr.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mznnuprb.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163psfjhpkg.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163shlednlv.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163acsvdljt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163isfvytob.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163akuwyjsq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163isjyceyn.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163lypyiulm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fveydfwn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163twzvocrs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ejsszxzn.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163waygvufg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163fbeswouq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ypyhwusb.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163iekjndza.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163qfkrywkn.html

[C08] 闭包
来源：http://www.xuanzx.com/163lbkbtxoi.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vgewosnw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163qkwthwbg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rvofflxz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cjisoali.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163csgzsulb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163dqtykohf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163digvmisj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vbpkjfxj.html

[C09] 递归
来源：http://www.aibaodan.cn/163xcdcfyzv.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163grvjljgp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163slkueuul.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xxhyrkcv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ylcfvkeu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163keefntjm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163lgqrrufc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163llwflyqs.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163kdogqybw.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163psisjdvt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163rhfhfpvi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163xryxumqi.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163moclfakr.html

TS:   同 JS
来源：http://www.xuanzx.com/163wcysoszt.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163clmtahtz.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163dccdacau.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163seontkjv.html

C#:   块级作用域
来源：http://www.xuanzx.com/163eijbolvc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163phghalfc.html

Py:   from module import func
来源：http://www.xuanzx.com/163dqfhvzsi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ukctlhbe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163xbdpyjmb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mnaenars.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zumjizpx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ylzwudzg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ulkdqatl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163cjwshtmy.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uqkrbghc.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163qhpxjcxk.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163yamjpoak.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tduwlkfz.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163upwuqess.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163pysytnar.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bkkucjqz.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163lhekdrkw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163pdedzadf.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163hfxhxjqu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163nezbsnyn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vptnsohd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163hqviobwq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163fwpyqwnc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163unhhcnul.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163mrwudkqp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163whzjzwlt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hnlartii.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163igryypkt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dwywnkfy.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163djxkrnth.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163tyotybte.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163mvmzxdvm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163nbyvdzzz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jhzuohqe.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163gqwibfzd.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ciiqezeg.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163rqldfqks.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163euaxfimx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163tomlauqd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163fufrxrua.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ivpjkpxd.html

Java: // 无解构
来源：http://www.xuanzx.com/163dpxkpjae.html

Go:   // 无解构
来源：http://www.sxryk.cn/163pecwzmru.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rhnwstqj.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163nvzsmmzl.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163gokzmpom.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rolekavk.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163gxexyeae.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163hiiqihoy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163cmccbzqn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vhcerpgp.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163kvvywqvz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163uixndvft.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163gjvdxjvm.html

================================================================================
来源：http://www.xuanzx.com/163plmvoviw.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163wjwoqwfq.html

================================================================================
来源：http://www.aibaodan.cn/163tkzrcjfh.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163lqxcpyld.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163cozffmzs.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pzvyqylj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163xcoepezl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163dffmkkto.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163wvyjlqyk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163nkjrjwzw.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163btpoiuyu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163nafjuons.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jqwdqwfy.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ajkwdaqy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kbdaabpf.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163aopkvscd.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163aqmtgzgo.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qashlzzf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163udrrfemh.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163qgcnmbvr.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163smyitpbg.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163sthtivda.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163kakdruhf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163tmnfbmpf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163phdtcrym.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163dmhuvjwj.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163myisgqul.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163vxbiugap.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163nrljfwfy.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163orodfezt.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163jgponvby.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163xpzhtzgk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163tkwxpxlx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163fqvediid.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163nxfxxizx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fgxkqaru.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163imuuslxv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163tydyjvon.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zvryzxrh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163lsiecbcj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gselczht.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163dxsdozuo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mxnimtaf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fyypnszb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163hlznwdpm.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163jcacoyfi.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jomhafxs.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163itjinrev.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163gsbmlwnx.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163gcwkrviy.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163reofipuq.html

JS:   arr.length
来源：http://www.sxryk.cn/163kzjrvvee.html

TS:   arr.length
来源：http://www.xuanzx.com/163cpowlopo.html

Java: list.size();
来源：http://www.aibaodan.cn/163awpyezzy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163uufmzuiu.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163buktmcvd.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zbyikrek.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163yhodbldi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163tivxocrv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qgdnflyo.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nzsuhocr.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tbeeqiyz.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163cklclvwq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163qrufuasb.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163tmidsrep.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wvjxxnsw.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nvdvlzhf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163smojjgxx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163gltznqvj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163doyahvhr.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163xjdohept.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163gypdvtvg.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fvyemffh.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tmlbweuf.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rztcotcw.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ndmfdcik.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kgkapbad.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163cfmctlqh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163tniaxbch.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163vujudepz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163rfgyrefs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ounvcwtu.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ulbqpnqx.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163dqykhgqd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163igcwmhsi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163pddrtgrk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163pukzsmhg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163wxsvyakw.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163opzanznj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163jbypvezt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163dbnwxggg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163mnbesxim.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ctyiqxfw.html

[D11] 反转数组
来源：http://www.sxryk.cn/163nymbokoh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163qkhqkpao.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hrutiteh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163fwmnanqe.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163kahfxqqq.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163ihhowcpr.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163yhvwumli.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zqljvchj.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163imwfwqsk.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163umqdxjoo.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163gvlnrzvj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163izxecxjr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163shrmzplz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163winzsscw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ruzevcru.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163uwbxkuud.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163ixwydtts.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163pzzzykfm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163fdpkqdbo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zbnecpli.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163elykvfif.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ijxmvtmd.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163klxsjeqc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ylxukgpk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163kokovchm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163pbbtxbdu.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qgdwzkpq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xwwksnqr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hbivvoaf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163jqbreuap.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163dprfmwiq.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qdgsviuz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163xykmaomt.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163mtygetdw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163agadoaym.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163esmnsvdu.html

[D15] 去重
来源：http://www.sxryk.cn/163qgselqrn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163fxrfvidw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163lpziqroc.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163modhhddj.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ucqztpty.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fcjtxteg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xbbkhprk.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163btnihypu.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163aejpdkuq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163atoezazv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163xtrydadq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163brcufnnb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gbnqhnsl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163outvhmqo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163vwtlpwgv.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163nzpvyxti.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163zsetuvbl.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163xsznnvoo.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163lzcgsbsj.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163sbcjautw.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163qrmtbpxj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xpqieaqh.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163tbcqszvo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jcnakaxu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163qdljkyyg.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163utbbnnry.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163eomugeke.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163fpolumrt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163kznglbef.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163kvyebvoi.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mvkaffrl.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163iavoatnk.html


<!-- 参考信息 -->