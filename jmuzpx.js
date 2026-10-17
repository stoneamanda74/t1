外链999!wailian999！

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163kzxbyuqg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ihmpfyir.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cfsuiqsd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lpizkcco.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uxwuecay.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163udmigpmk.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163otbhiimf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nniarnjf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163wqbmffdg.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163wrwrgnsn.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163svxgtuqj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163oipkykwk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163tyqezvhu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qwzhbobn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163vyfhphkb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ejdfdgpg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ygbhdjtz.html

[C03] 可变参数
来源：http://www.sxryk.cn/163bqnmrfsu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ynfttpyd.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163lixsliyn.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mynkkezy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163phjjjsqe.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163upkgtklr.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163gqyxapcy.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163mouqyllg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163jnjppztj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163gtxtrncj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163shewnvxu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lathdvmf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ydeevciz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bvjebosh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163ttbbjsua.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163ranmjqqo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zyfdwmnf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hrcbxcyc.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163zfwpqlfo.html

Py:   return a, b
来源：http://www.aibaodan.cn/163bxgypphs.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163uqvcqpmx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163plydiyhi.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163kwodhnah.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ndlbstwf.html

Go:   return a, b
来源：http://www.sxryk.cn/163wizulxeg.html

Ruby: return a, b
来源：http://www.xuanzx.com/163aojscbqm.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163yrqygign.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163oakfallo.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163xmyerefe.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163bhihbuwo.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163tbdzdzoh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163dkecirlp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dwbdpyfc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163ltyeddrm.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qcjsrgoe.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ktbudtna.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163qmxglnyn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wgavzhgo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163jdgimuiu.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163unkqbeje.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163qiwoewzp.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163smgqubon.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rtkfvkfr.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gtvfrgne.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163sewnjmpb.html

[C08] 闭包
来源：http://www.sxryk.cn/163nrtnigtr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163xbythtob.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163yhfobzpb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jdeyjzcr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yzbzulki.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163polxclrx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163yfiqmzeq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163quqvnfrl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xolzyjwg.html

[C09] 递归
来源：http://www.aibaodan.cn/163pqcecybh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163qsmwsvbt.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163crwfrxlb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fkkcirfz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163emyrvtca.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163mpjtfhxv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163qqvcjqdy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163amvbrsnc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163apntllwq.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163jggltcyc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zgtawjba.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163jbkvyhji.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163gbwjpxcq.html

TS:   同 JS
来源：http://www.sxryk.cn/163qaorlzol.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163areuvnmm.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163aldzgnlb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163skgqukjx.html

C#:   块级作用域
来源：http://www.xuanzx.com/163zxybdxni.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163cpmwktoy.html

Py:   from module import func
来源：http://www.sxryk.cn/163rdyumvbe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163jcqgkard.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163jcylapec.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163fnabfzlj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163ajuhbpyw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163zjwlkdgk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163duuymycz.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163zhjsgmdx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163fkbbjwan.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ckrfdwei.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ylpiopig.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jwsxxwcf.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nyhfhicb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163gdmustvc.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vsempmvf.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qauluhfl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163jesvewzp.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163qdvndtjo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163gybficrr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ojaetlol.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dhumffmo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cggtfpvw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bysijkfn.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jknykfbd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163glrkfpie.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163saatysjt.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163wwftdknj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ewnzorow.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163gkxzoswg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163ldfphllk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ayvmsehh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163vjlyfxqn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ppieoqbz.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163kapqrsmm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gpwyhvvx.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163yslriwau.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ygllhagv.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163wjgefvoq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wgcwqbmw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163duindlal.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ftmcukjh.html

Go:   // 无解构
来源：http://www.sxryk.cn/163hceukuoz.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163eajyktio.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ousekzjx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163nbdqwgiq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163lshrldps.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163pxajhxrj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163mnjfwwja.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163unofasvn.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163drfvwxwy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163upbrugag.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163cmjlqqox.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163eaddioql.html

================================================================================
来源：http://www.sxryk.cn/163rtbdculf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hkwixtxn.html

================================================================================
来源：http://www.sxryk.cn/163hufoptfn.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ksnxwzke.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xtbkekcr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163tgjjgzbo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163zhcputfr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163jzqudgyp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nqneudoz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ymkuyfpj.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163lfeizejc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zdagyswc.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bobpcfux.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163wcyanejq.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163dwwlfggl.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163anfbbtgz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163qfdsigxu.html

Java: list.add(4);
来源：http://www.xuanzx.com/163vvopqwnj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163thhtbagr.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163fgbxqpbl.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ncvhsxjc.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163myfmaqkr.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163mmnuonze.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163noesgtsx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163qqizcrmp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zhsszudg.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163eypjkxrb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163jzcarnhm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163aabqhhxl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jktuleeo.html

[D04] 删除元素
来源：http://www.xuanzx.com/163lbwypqha.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163xjwikufw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163tkkerudy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163mjffrset.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ebtwppes.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163cumsfiwr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ifuqqrxo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fiurvvbt.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zjreaxth.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163fgozugqa.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pxtnpdts.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163asqwvavu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163evpfjgsd.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163escadmmz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163qwpendjl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163nreeiyfy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wdxchxez.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163fzyqvsqu.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ngutfolq.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wdzzhbif.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163zgfiqpfu.html

JS:   arr.length
来源：http://www.xuanzx.com/163jkkbcuon.html

TS:   arr.length
来源：http://www.xuanzx.com/163glhsnxsf.html

Java: list.size();
来源：http://www.xuanzx.com/163qjaepgns.html

Go:   len(arr)
来源：http://www.sxryk.cn/163krxaebcg.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163mlhbdgkv.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zvxoulrb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163lvghswny.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163twhoubcm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163mrcfkzqd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163laudertt.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wxcjfxvx.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163bcxcfitr.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ftappnwx.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zuddcryg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163fbkyiazc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163byaigfkc.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163gkqraadd.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163omolczcv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jngpcszb.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163eouikqrk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163juufyvod.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xccevpja.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ockvnjwr.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jzyyptec.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163gixepscz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163xtbfimti.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163wicgrala.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163oofioyqd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163dzohctif.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163exgzrjaz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163zcvxrldo.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163zzghqdjj.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163hoybdkti.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163rgchuihi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mqrfncmo.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vtroxkif.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163orbwpcnz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kinfhwdk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163deghxcxo.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163hjgknlyo.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163pphfhgji.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163qacsvwmo.html

[D11] 反转数组
来源：http://www.xuanzx.com/163zzkaorcn.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163zkipiwmq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163rkkxorwm.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163shylldil.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163imnjyeuo.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163kaopklaa.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bfqmozbd.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xmkveyim.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163rfokuiwi.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163muwvofzm.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163wbsipdhe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ngzualah.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163vcdfzoum.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163staorfyx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zdwkjtkw.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163lgwisrva.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163jqppalft.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163pwqzeskd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163upxdgevi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163fakhviog.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163thdfwoau.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163llixzevq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xorengid.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163sylfuify.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ehzbjnkj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163amwsnkuk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bcvbqpok.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163tetiaftb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163bcszldtc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163koboxywh.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163oknrzzxk.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163xrxvtftk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tnjpniqj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163twfmrmlf.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163biwqqrpq.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ruwezqgd.html

[D15] 去重
来源：http://www.aibaodan.cn/163girruzwl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uiqhxwdw.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gyflkilt.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163esbenkpk.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jrwpuysy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163orhnzehc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163yldinwjx.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gkeavipy.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163wbrncdnm.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163wybdtzzq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163kxdcdwxh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163hvxfmsjl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zhbhwsrt.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hqhcykkb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163qdvxwdyb.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163agfrmocc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163kwjytmij.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163syiusrwt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163qrnardwf.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163wesdbkri.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163howhovgm.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163mrautteq.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163vcdvkrkj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163npgbzxlz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163qtwfgxwk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ingsntvo.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163kgnvjrcu.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163sktunxkv.html


<!-- 参考信息 -->