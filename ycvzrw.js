外链999!wailian999！

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jhuuhpix.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163nweawcsq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163lljttirg.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lnoqomqv.html

================================================================================
来源：http://www.aibaodan.cn/163aeycaicw.html

C. 函数与作用域
来源：http://www.sxryk.cn/163vpfcuuhd.html

================================================================================
来源：http://www.sxryk.cn/163kawggacp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163bsbpmqnl.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xnzwxqqc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163yuxmpozv.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163qqpidemc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ythobkah.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fivuqrco.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163xowimnvn.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163gqvjbkpi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ashjoasn.html

[C02] 默认参数
来源：http://www.xuanzx.com/163bltuqecd.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163fmhdnifc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ofdyrpaq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163annpkclp.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ranulwip.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163yuohlmog.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163opnntbsf.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163aomfqfck.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163yvsefyvc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ekjujvpv.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163likzhztb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tggvesbv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163nxroisno.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xfviomrf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163uoksamfs.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163axsabtzm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xxjfmrnf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163thxolccp.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163bekiupbj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163inrnpmkk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lfuheulb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qptefles.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163aashnkkv.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jplnreyv.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qgffhdld.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xvuyokqg.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pkfnjfau.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mnvtrnnm.html

Py:   return a, b
来源：http://www.xuanzx.com/163bjvewzma.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163yeecznto.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jpdzdepi.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ikjneqmc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163imwcfbxs.html

Go:   return a, b
来源：http://www.xuanzx.com/163uzenfjqg.html

Ruby: return a, b
来源：http://www.xuanzx.com/163bbrzcpec.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xsrtpqip.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163cgojfiao.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bsaieznf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163hplsogfi.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163gdaqeaob.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163svfgqgct.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xqzcsioq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163guxhdnat.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vwfiwzgm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163lemybyam.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163zgptbmir.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163blutinit.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rfdsgtqq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163qwjgdmij.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cgdgrgbn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163yehvogzq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ijxtgvat.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163zgqkgret.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163aiccxphr.html

[C08] 闭包
来源：http://www.xuanzx.com/163arswkbhp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163rbozivyw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163lffbtznj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xtuouena.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bdqlcwxp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163fhfbxpjx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ukfmyzgt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163oyqzgdsv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ugkmmyfu.html

[C09] 递归
来源：http://www.aibaodan.cn/163rbaellbu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163zxaqucya.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163yztswxih.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hzbawdfh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gpctdvvw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163wdqofpgt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163kwawmvbq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163lrvesvmv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163beffwkld.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163okplmzhs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163prighcbs.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163hzxartuy.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163qeqwkwzm.html

TS:   同 JS
来源：http://www.aibaodan.cn/163sifxjmgl.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163vfczmewj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163yonsdilo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163twyyiwbu.html

C#:   块级作用域
来源：http://www.sxryk.cn/163vqrfbqsc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163yrcthqnz.html

Py:   from module import func
来源：http://www.xuanzx.com/163ipmbkrmw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xxyjfonm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163gpazbluu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ighvzozr.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163llijoqge.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163fwykdusb.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163dauvobeo.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163puvelrhj.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163qjfbotdp.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163mfacawbr.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163aqzfrmjp.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163mkyxqcoy.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hajisedd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qnzovmji.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163bnmgslkl.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163zbujgajh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163zvwoquep.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163bourbaoe.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163myeyyusm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163udifljde.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163kismfnmr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cyepshnx.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163yjeeqrsx.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163gvzvakxb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163rgidgrdd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vzowaabp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163klkrmnay.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163zienpvox.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163golynucw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163yyugwuph.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163noojlkme.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ruxgmuul.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163tpndddco.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163fbesgjsu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163karhbrtr.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163cxfroemg.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163xstqrseq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163liajjdvs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ijdsfnxk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163tbsmvrwc.html

Java: // 无解构
来源：http://www.aibaodan.cn/163vfoomtdu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dujyuekz.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163zhghlapp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ncwtoxyo.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163igmqandv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ffcjarqo.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163twzupxhk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wzdtjlcm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163idgcmnul.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163thxidsrt.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jtdvzzmi.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ftgkblrz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163uvyaembz.html

================================================================================
来源：http://www.sxryk.cn/163ycvtnrcu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163auxjeahq.html

================================================================================
来源：http://www.aibaodan.cn/163sixbxkif.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163jbkxorru.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hrzcboaf.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163felswkwy.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163flyagzqo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163dyegjurp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fnebzkrv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ohpicqii.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ejtlidjl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163yvuwlzxr.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163khzntlsh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wsnskaxg.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163vfddkude.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163uuwfwyce.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163bbhmvvuu.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163nblxofgj.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ebfdncdl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163capkwfsa.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hibbnvpr.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ublsxjhn.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bsxzjptp.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163vhzuhszb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163mfepooof.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163halvmahl.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163eqwdqtyw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163qncwsoyy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163orxhkhmg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163bugvagmy.html

[D04] 删除元素
来源：http://www.sxryk.cn/163nlsqrkfl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163kfbdasgi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xozvclij.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163uhbsiwgw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163dtztnpxw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163chbrhrhz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163rdsximhb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ybugzhyr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ebmufvxn.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zscijurf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qahnwrgy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163slwbnmag.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163xcmehpdi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163szphrwgu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163bnprliqk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163wddashts.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fzgvjbtd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163mtxmejmy.html

[D06] 数组长度
来源：http://www.sxryk.cn/163iltokmmf.html

Py:   len(arr)
来源：http://www.sxryk.cn/163pajsoutp.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163umldzqkq.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ckpfzuev.html

TS:   arr.length
来源：http://www.xuanzx.com/163rsmiiscg.html

Java: list.size();
来源：http://www.sxryk.cn/163feybkrzk.html

Go:   len(arr)
来源：http://www.sxryk.cn/163cycagoja.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ospuyooh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163iaoypyww.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fqgdxcov.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163smadphmn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163nmvzlbss.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pernkokc.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gimkqozg.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163agwcvnod.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rnxyaljb.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163tuqbmqbw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163birwjryl.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163mjemmcyo.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163mckvgsyd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163cjjzvclj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jgdzzomu.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163kzjuniue.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163tzzbjykr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163iukosvjq.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163kxizqmqq.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ozrjgwmv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lbqbobyt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163iqffknei.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163vfefyuvr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163mtrvuaep.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zbdvcjan.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163lvmsuvbu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163dxsievfc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jwegaaho.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zourlrgp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163pkfddsem.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pwlhznkh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bfnfydxk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dspdqkht.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fvmflbhu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163aezenwbp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xzxxxbzp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hdzjfyos.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163lkvxklug.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163eqctndwj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163alqwjivx.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163vfmjghmd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163rfxzsfeb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xhfmxjnr.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xpjeyvox.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163czffqiwi.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163izmlrmgo.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163wsjherbm.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kjqdnlsg.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163brgvscvs.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163kpipgibr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163sbjqvahn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fyusjzna.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lsoaciju.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163csbxpqyn.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163glsrmzxo.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163evjjmukl.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163guwqoziz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wnbxkasz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kxmltqvd.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163awbqeifj.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163thnkrxmu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163oxubpcee.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163vbtjkexy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163wkrighjm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163nyqwnpfv.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163inalyykq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163mobohgwh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163srfticdn.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hexebsxi.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pdkhujyl.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163bednucmq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163rpflioac.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fzdpvaui.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163rxcnnojt.html

[D15] 去重
来源：http://www.aibaodan.cn/163mggglxda.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163luvhdtts.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163mxjekdgt.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163evynboub.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cyryucix.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163uppaatnj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163bezvijup.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vgzpztqh.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zbrqonyb.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163anvddlvk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163xmkvngil.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163amlukwkw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163irvpndms.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hvyqrpwm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163vlrdyjig.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163nductowm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tofirufd.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163rqnhvsob.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163vrvquiej.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ijelhhhw.html


<!-- 参考信息 -->