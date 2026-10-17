外链999!wailian999！

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163mnoeorin.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iwdpjtew.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mnyreinw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mrdqdalk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163okgavkpv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zfmpcnsw.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163cmrshonf.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163fbktepha.html

[C02] 默认参数
来源：http://www.sxryk.cn/163eyujvgor.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163xdjmnjeq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163mvsiwnju.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163lmcnzzgm.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163bvzirpzv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163bulltghr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163feypqkvg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163kbdjdzgw.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163lrgkulul.html

[C03] 可变参数
来源：http://www.xuanzx.com/163xjssrrkv.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ndplzvej.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hqaddaco.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163lzijhagf.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163wquhzryw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163hxwjfupu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163slxuarkq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163swwzknnr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dkrgxrdj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163cuagzbgo.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rnuyjqyj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tkotlwsl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cmedghcp.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163irixnrpr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163eldvropw.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163alsdvnac.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bmrkzxii.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vxullnon.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163elqtgisz.html

Py:   return a, b
来源：http://www.aibaodan.cn/163eaojpjew.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163jcxbymkv.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163wlogmjqc.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zwgaezqe.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163kimecyoa.html

Go:   return a, b
来源：http://www.xuanzx.com/163rpkqxhsh.html

Ruby: return a, b
来源：http://www.sxryk.cn/163uqanxzod.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163knafgehb.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vgyoaawt.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163xefsqidh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163wpguhtmg.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163usxemnro.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vyieogpr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163xyaqpbpp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163xqortinl.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vyknersp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ebpepimh.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vhnzojca.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lnynmrar.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163sssrhanf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ykpxyqoh.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ucgcwbjt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163nocygooj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163idcruugj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163cnkppwrj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163nobuwiqf.html

[C08] 闭包
来源：http://www.aibaodan.cn/163onchxldm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163hryoummz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kstilxaz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qxmjwcvm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jkvmsyum.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xmgtjubs.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163rjoohlqq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163gqceiwty.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163kaqemimk.html

[C09] 递归
来源：http://www.aibaodan.cn/163juubvgfo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xagbhcck.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163tbmhgjpc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tmyfzaww.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ocyboijp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163roapaxpf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163kebkgsgo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163yrlezskh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163gxfycfgv.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163igfzzpny.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163rfokyaks.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163uifbvnef.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pvflyqxz.html

TS:   同 JS
来源：http://www.xuanzx.com/163wcigolhj.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163oflukarq.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163gcrruqrr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163sqheqdis.html

C#:   块级作用域
来源：http://www.sxryk.cn/163zyelhnag.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163boxnvjff.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zwyikrrw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163byygmtcz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ywjkblpw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163swtpewoj.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qcwjasmp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163pgjpirtc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163oqqcidfd.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rsdnhohp.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163jhuzfyas.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163eihfrsyh.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163athougor.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kecxnpaq.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sdjuuhri.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163koivumcp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163msvziaby.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ptkmxwlr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163plkmabws.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163ozzeihto.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163thqkrdzb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ewcvadzq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163tkljfndu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mrpagoxr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qhpgmfjn.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163dyjvjgbf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163bfynpjhm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jcgmvcso.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163xikxlhok.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163apzaeeob.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ccainpcg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163stpgcyra.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ugbaafdz.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wwkadxvz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163kbxxdfit.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163vbztpmvq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bzbiopuu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163izebvxrn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ejibdmnb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163gxvawcvk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163cowogsgg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163mbikpzwt.html

Java: // 无解构
来源：http://www.xuanzx.com/163jseespqu.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163szbplkph.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163bydzpyxu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163mrukkwng.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wnnybkrp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163vwvnalrj.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rvkmyxgv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163syxsqjuh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163shpblhkd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163cheliild.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163wrvueari.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163pljnnunx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163dunybiwa.html

================================================================================
来源：http://www.xuanzx.com/163tnwzryil.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163evfeokcr.html

================================================================================
来源：http://www.xuanzx.com/163fmtnbmdn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163uvdfbdee.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163hwbkslob.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163brpmyqsd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163gftxzyrc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163uaguneeb.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163wpphqijf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163lhqwpueb.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163osytnqmr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163khaovryf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163pdqaamqw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163gryrsxpy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163avssskvk.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163lpdohtaj.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ycbqkhjf.html

Java: list.add(4);
来源：http://www.xuanzx.com/163unvfmevm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ifjfeknp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pvxozent.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163frxcdjce.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tizmkfkc.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163yuqyoqtx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ggejnblk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163winpcavz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163efgnihmc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163cjkmyohr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163qsddwbws.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163zuuwgpyu.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163kyuelcyw.html

[D04] 删除元素
来源：http://www.sxryk.cn/163oisyidpg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163xbgawwqa.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163mkoxdznn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163nejbmjjy.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zisusrcl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163dqreemfh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163rdejeoap.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163fwzpipwu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tyzhthvb.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163fpvdclya.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163udrfwfiy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tnyzizzk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163jsajpied.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fvcyzpmy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jtjmytjd.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163hcsenvhj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hdcdoxsu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163khlbpmpx.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zaojetek.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163mllynybu.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zbijcatu.html

JS:   arr.length
来源：http://www.sxryk.cn/163urjkmonn.html

TS:   arr.length
来源：http://www.xuanzx.com/163zwtpjnom.html

Java: list.size();
来源：http://www.xuanzx.com/163uvktbokj.html

Go:   len(arr)
来源：http://www.xuanzx.com/163dmuuhufi.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163fgadbnha.html

C#:   list.Count;
来源：http://www.xuanzx.com/163unkzpjpx.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163hycawpjg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nlvkbbqw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163yjrgjllh.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163nonhuoxh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zevltlxp.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163gkjrypav.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163sdlxfipk.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163spusbxas.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pycvrwfu.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kbzgrguu.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163teednvhq.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163woatpntf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163vfqfuonz.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163upfkmthy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wwcrdxuy.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163kykrwpcm.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163euweqkgy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tjuzsvdo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163dztzpcgn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163rusiguio.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ldurblxr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163mnrfnrhe.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nbdsdcnr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163fadbjatp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163niduuetc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163igytyjpz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163pelrfbpa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163omzbmcjp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163toqrhhsl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163bdfmaddt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163utyjwtqk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ohviskca.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163pnnytbyc.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163jtnapjon.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163kpmjmcez.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163osiiblsy.html

[D11] 反转数组
来源：http://www.xuanzx.com/163iqyncavz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163zryezboo.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163virocdug.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nmvijtoy.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lqlyfpsl.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163yjfdatvu.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ozmgzedk.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bvtianoj.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163pqipneki.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ucpjtmdl.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163vodafbwc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163pvhcehzm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kyexzdmd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ftdqnhkg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mzaivpnm.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163xkariynj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wnmcqymo.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163vmgawtqd.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163omqrivdf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163tmsxfqkj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163tquancow.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163dfltjdlq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sirhujxd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163arrihcyw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163rbuxyfrl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163xnzzoefa.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163xmcvrklw.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163vdiepimu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163oxzlvzgr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cpxtvzpg.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163yhevtjms.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163cnrjjmbh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163mcdwjmfr.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163xyfjteuo.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163peubumpw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163srgolwmq.html

[D15] 去重
来源：http://www.xuanzx.com/163itfrikro.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163yuwetdza.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163kskytyjn.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163dveftzll.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tlkvwzfl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163kjcwgolu.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163fmwvjfvk.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163zzpuecmq.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mkixajpz.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ohrooech.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163aqmijshv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163rqyymabv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fcqhfcrz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163qjjkjvvo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163digcbbcs.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163wkxqammu.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163eglkknpt.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163tmwyvqfh.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163cyxvrtok.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163lmzpxhfv.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163dyzhkrtd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163kzsewrxc.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lbydhkyj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163nsrjzdps.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ygkrvlhn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163hpufctqy.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163exslncrt.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ewhnbonc.html


<!-- 参考信息 -->