外链999!wailian999！

Go:   a && b || !c
来源：http://www.aibaodan.cn/163hsnniaoy.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163cvnxjfgb.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163apjfbxqx.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163rbtgqczm.html

Py:   if not data: return
来源：http://www.xuanzx.com/163meevrckj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163cclfpefe.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163bnuttzrf.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163qveebdaq.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163nuyinfee.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xdugrhal.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163qefnhpqb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163sffntsxf.html

================================================================================
来源：http://www.sxryk.cn/163aswcpnuf.html

C. 函数与作用域
来源：http://www.sxryk.cn/163silmglek.html

================================================================================
来源：http://www.sxryk.cn/163wrylbtna.html

[C01] 定义函数
来源：http://www.xuanzx.com/163zbbccwzj.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163khjedvga.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163otynxjkc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ucmyqdwd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tajfyawp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cfutllya.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163vnyaskzo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163ilszkxxg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ynuerqmc.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163lugvokcs.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163kqmabual.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163ixlprglu.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jgooicdl.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163adrfmbeq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163wmfluexw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163bulxqvro.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sonrninn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163vddotkeg.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163uxnfhcmr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163lfbovslu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qtkbeyol.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vraskyvb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yjoulczn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rpzwehkc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pvmxjyvq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ohengatv.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163kmpnwonc.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163gpcfldgz.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163cqxdsmha.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qhvudvcp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163mnrxnkod.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ydqzdytb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163tqouzsio.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163glfseiuk.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jlzlovjg.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163jmjphymo.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163zhbmisdq.html

Py:   return a, b
来源：http://www.aibaodan.cn/163lpizdadf.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hxwgpvjn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163sqxajkbr.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163darjbbbu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yvceijpp.html

Go:   return a, b
来源：http://www.sxryk.cn/163uatghpmo.html

Ruby: return a, b
来源：http://www.xuanzx.com/163kfjufvdg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163voexlufc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hocmbmch.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163jzdsfhfh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163mnryisju.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163vhuqwqkj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ezqbzpih.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163fqhiagqs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163jpmqzavv.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163yrhdictc.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163lrzujjvd.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xfgbcouk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163xcqadihl.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163bahbbxzu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163sittgznf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163psegutoi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163wzxmriti.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163oleblxvn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163izfzzgwy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163baqagbqk.html

[C08] 闭包
来源：http://www.sxryk.cn/163xvexpqwl.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163veazqoub.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163wepbwevr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163atxjndoo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lgxcvvmp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163shxoeruq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163amhgxqvn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jxqxhgii.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ddxjtnzl.html

[C09] 递归
来源：http://www.xuanzx.com/163wrgghusl.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163xnxmrqdq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ktjgdjsj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163niqkgnwh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ovpymssx.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163yewegoco.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163madxzzkl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jlimjntp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163gzabvnvy.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163bvlrbqfp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163nrcopljx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163crhsorul.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163eveawuim.html

TS:   同 JS
来源：http://www.sxryk.cn/163hrzystfi.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163rrwdddvg.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163cfvumslw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163hjaxvcis.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163agqpkayt.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163etvijjxj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163cwyctrkr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zojjnudx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wzmwelwn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163bueojwsn.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ltwsuhte.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163behkvylv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lhlvpvoy.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163qzzqmckk.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163pwqrdnnv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163apuqfsyp.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ravhohis.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163orgbzblb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ifoqfqkk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bbnesaxp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163goiujhug.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163kroeasdz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163bmoqvgne.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163nqerzpfi.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163jnlmlozs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163datrmuub.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kbqtnpif.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fmczyvnm.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163sexiyiqk.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163gjxqnmmg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163mlaqcgmg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163emfnkyme.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163pjmceoum.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ttnifnvp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163jjxyfhmi.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ieluynas.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163uedplitz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163mamnuxxy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hajcmkip.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163okmjxhaf.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163dfcsqdkj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163sfrfybvo.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163ffxplcgu.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163kjywnzic.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163anbpfvmp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163nlkweqge.html

Java: // 无解构
来源：http://www.sxryk.cn/163vdvkxudd.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163mufdqqpo.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ntygatgl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163jkjmrkho.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163avxdevsm.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ijklakwo.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kddrzjng.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163kvdpxdwv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163tdscvnop.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hebtygqb.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163whvqfajb.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zrhnxret.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163djapbqlp.html

================================================================================
来源：http://www.sxryk.cn/163fsbueugs.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gnvjigjk.html

================================================================================
来源：http://www.sxryk.cn/163tqxscili.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163oczlquqw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163pcjukzdi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163vjhldyor.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ixzmjixd.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163cgygrkzn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163azymvtzd.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163trloilrb.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163sqrztbyn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163aixbixcn.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163npawmnup.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163hpgilcir.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163bocunbog.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163gsywhnoq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163gelepuwv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163kyhxpncz.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rwiyzmrj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163yvrdleue.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163dqqpzmfa.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ckdexmnu.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163oddkntva.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pqwxkeny.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163imidtian.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163pmsjmady.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163hyjfxtwr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hpmfroim.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163oxddvacy.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163zmvmtgst.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163uciambfs.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163hiexownz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163xyxhfreb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163xtjzeriy.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163gckdjnfm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163bzyejibg.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163xcmjeoyn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163usekivrh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lidxbfcq.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163zclhmtma.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163thyhhoqk.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163usieduis.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163bmecavun.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163cilgvpyt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163ekkrsgpp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163mthkfutp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ygwfieur.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163cvjcfyao.html

[D06] 数组长度
来源：http://www.xuanzx.com/163atxgbdub.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163hkzhdvok.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163mhzfbwaq.html

JS:   arr.length
来源：http://www.xuanzx.com/163buawiaqf.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rzuktbwe.html

Java: list.size();
来源：http://www.aibaodan.cn/163ekzijovh.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gccvnfoz.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163nbeqljff.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ccbbvdgx.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xlcubzfl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mlruidoc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163bkvsoudl.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vevonxtf.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163kkimlupp.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nlbxrynp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163nymsvdil.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dgcqgruv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163szutrzhv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163wahpdptf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163rrcbqvgy.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163yrgzfxtm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163xtovaovl.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ejbjxgme.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163cfeeicpq.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163acfaxiql.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163lcowqgnd.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mxfvcbtg.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ozroibgv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xbouduam.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vxgdsgxc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163mhibgxmi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163juzsnsfc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jqnwpgir.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163rcvljqpz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vmsjxtmv.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163cxfdieka.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163mdikesti.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ugjqasub.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163bovcpenz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rmgxisvc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xuryswzg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nqmoyvoz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gwyvwiid.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163akyjjhfe.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ddcolhly.html

[D11] 反转数组
来源：http://www.xuanzx.com/163gbwkkjlu.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ozmwjiem.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163hcjwcljg.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163bcbhkrbb.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qeknjooc.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ehvkczog.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163rbjmnrta.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163coddvdqm.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163fifmyfha.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163zjkcoswy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163hacaqfns.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163jpcdqqja.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163cbrwqxcl.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xmnpmxge.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163wrgbakzx.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163frstmedl.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pqifmqgx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ojkxnjjl.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163vgroayww.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hrvjvpik.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nhuwvghl.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163goeotbim.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jawwzmjm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163toatykgi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163agojgaxt.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mvjwtdgr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163vistjhls.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163eippvwyw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163boxiajca.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bvgycfxs.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163egfudprw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vjnsfdlf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kpglongl.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163raomvqhl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163fplgzyho.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163cexaubkn.html

[D15] 去重
来源：http://www.sxryk.cn/163clztzgjc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163thwebgpr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163pjvburxp.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qoywufdv.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163yhilwzff.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163mmwxkluq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163atvrmcbn.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wjiwmenh.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163kxoebsjj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163qksgrgwi.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qcugiwho.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ohgcelpk.html


<!-- 参考信息 -->