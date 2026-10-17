外链999!wailian999！

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mazcofon.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ermvuvwk.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163pjvexibc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lnusrjxj.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dsryyojt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163fsizdxbs.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163fjosjjkb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163areuifvh.html

[C02] 默认参数
来源：http://www.sxryk.cn/163fdltmhrl.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163fxgnvcuu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jmwnioam.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163gydoezqq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163bvudfkvs.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jlgwxhbf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163ujxooipj.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163xacnakcb.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163offwlkpv.html

[C03] 可变参数
来源：http://www.xuanzx.com/163lyfvdujh.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zclvvvlt.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163rwewlqji.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jhivoyvh.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163wrrcpnvc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163hrogjipx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163nioqczjm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163rangtlib.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jiwkqyxo.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163ejvygjgd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lhzgxzql.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qyvrnarg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163vlaolmwn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163fghobutn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163wijfhsjt.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163qsbnnlqy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xkaszhsj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yvhqjxgu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163pqbqllev.html

Py:   return a, b
来源：http://www.sxryk.cn/163xmhafdbc.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163wrytnetv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xwbepdgy.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vbomgznc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163mtandmis.html

Go:   return a, b
来源：http://www.xuanzx.com/163nbtuczvt.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bdwtrmqa.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163hgtcdqbr.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163sgtutzny.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163rfmspfvn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163tsaotooh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163htemgfrk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163yrddjgnq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ysbdqqav.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163mbutmccz.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xczmtsye.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ifwzglps.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163vkdufcrx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163rksbhpqa.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163oophhebt.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163eyzqldwf.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qdublczc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163reminsbp.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163hmqximun.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163hqejlktn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163exkxpihi.html

[C08] 闭包
来源：http://www.aibaodan.cn/163pombbzwl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qrbvsifj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163brzabtvg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rqpezijh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hypqwwfm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ixhqjcxn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wkbvzmcd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163crzindum.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dsenltft.html

[C09] 递归
来源：http://www.aibaodan.cn/163fksysofw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gvhmlqvh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163sehivhpo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163jevrswie.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hkdnntxk.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163lfdnjhbb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qwtlnjnj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163lqzonwip.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163afpuykym.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ilkwdslb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xcqujjgq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163cqtvjlvl.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ccmcmolq.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ntyzfoqp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163tpwwtmua.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hittsvqz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163rmavbsmf.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163pmplynib.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163hsevywse.html

Py:   from module import func
来源：http://www.sxryk.cn/163cktpdugo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xfwvdpbr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163uvvhecko.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ufujmqnt.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163jqzeyorl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163jywcdoog.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163igevtwmt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163vuuvlfui.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mlglzmuq.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dbtwtzow.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163kxhlfjjk.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163atrkogyk.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163npaoqjpy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gwiiwljm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163tcnmndzc.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163msawaeko.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gnqfeqzy.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ogeblrfp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163aoxgdpik.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ouvkgxpw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xdmxkjzp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zgydxitt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cqcgfdjp.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163yfuobpbp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tedlyntw.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vdiswvmk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vhfvzqmv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163iwvxouni.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163djqqtjjk.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163yrmgtwha.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163wgxnqaac.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163qsahegax.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163bgvyjvge.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163jdytnntx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163tifiqfyz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163xrbdcfzv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tinvpzfc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163sjikxngt.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163svcufmzj.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163edrqknwp.html

Java: // 无解构
来源：http://www.xuanzx.com/163tsskjaxs.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163xavyhnzn.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163lclzzgte.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163eztjdmyw.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163foasovly.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163qxzgucti.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ocmxbdzj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ftifvhcw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163chmxunvg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163tvoledrq.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163veiolcid.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163pezugczn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ovsgjeed.html

================================================================================
来源：http://www.xuanzx.com/163usxgbzst.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163jgucplhr.html

================================================================================
来源：http://www.aibaodan.cn/163dwkiulza.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163wypualjo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163rzfiklff.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163dgsvyvfg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163iomzqgxj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163rmakexpm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163uvycjsiz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pbvgcmqn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163lmeniqpn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jijcswhd.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163avghsqil.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163bmxtymdb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163uyqkmvnr.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ovrogkav.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163jxzydeuq.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ckkpkytg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163uowcczvi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163swijcrdo.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bwoecets.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163lgznovki.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163faynbgqm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163mnzaoqmz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163uqxoguqp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163mdtsjgrc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163oavcrkop.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vsatllvl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163pnichyra.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163hoqezcgx.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163gpngxmgs.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163bwwgqagu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163waczkyrn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qdejzuro.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ovktiqkb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ysmkzlbf.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163yzdxuznc.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ruucgdcc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163tbhhmpjj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kgcyfytg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163klyxevrl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163mzxbadsf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163nyudwvvy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ptjjbbpy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qfaljemj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163euragnzj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qhfbgjnj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wsltsxeg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163blkisoox.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xucxafyp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hhmsrfdj.html

JS:   arr.length
来源：http://www.xuanzx.com/163szrluuhw.html

TS:   arr.length
来源：http://www.xuanzx.com/163fsptzpoq.html

Java: list.size();
来源：http://www.sxryk.cn/163tzapdlsz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xbpdtbva.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163hewijecr.html

C#:   list.Count;
来源：http://www.sxryk.cn/163dkdurowh.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163jixvbjjn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163xfpbiaxx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163kplxxzvi.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tkohukje.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163vkbtkxor.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163buxeljmq.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ptxefgkt.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dhpimzvf.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ahxvjigk.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163onxmfrif.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163vtennelh.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163qhhlbeqd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163hztjcnme.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163zyajqfqg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163nnzgywvq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163jvssjrzi.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163esfagozn.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rygjgmku.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163zajsrfrv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pvetjmvu.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163qyzjhiio.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163klohkbca.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fsddnona.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ypdcoofb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163qtdobdqs.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163vnegxrhj.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163gqvjvcfd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163uzuasrsl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163nuqxjfss.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kvcaxhed.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163lzlkkizq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163upfhmmil.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mmvrwaxh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163waexrfiu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163orslxagm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163dyyaedcu.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ximltklb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gbdhvrhw.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163mafjbxwj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163unpojanu.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163crcwmwbn.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163attukksi.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163olmsdtqz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163jxievtua.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163cvepdyme.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163jlkyroja.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mubetmue.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163gvylxtrs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163lnvxfmvr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cyxuvchn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vokyptbg.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163skcqzcjz.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163madgxpvb.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zshptkyg.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ygyrbadk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163iclypbro.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163pnwileln.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ibtcecao.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163quskpwyo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163bvsbblhn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163mrdbkkat.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163nztcxlmg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vuvtxpyu.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163hhlliqhz.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163lituvvgd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163vsnykorv.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163jjftbrmv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gutcbenp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163phgyzhbl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163pjkrnzxc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163rdrlznke.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163fzyomncy.html

[D15] 去重
来源：http://www.sxryk.cn/163cxljyoje.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bixoaeop.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163vewyavmk.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ylitkger.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mewwgrne.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163eaeqyjxg.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163iegngkef.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ubjrkjuf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163xtboxkpe.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163qvdzcsln.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163cdizrwmg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ydoklvnu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163omdywraq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cemkhnys.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163sqnpcoru.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rascxtnq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163bnlpbjdu.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163hgzuzucy.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hckevdkp.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163cufmsghl.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163tezigmnm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163yjgdcsic.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163slhtoach.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163ypayzxrs.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163qjjrmlho.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163tlstzyzq.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163yiizpqln.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qvqtrnjr.html


<!-- 参考信息 -->