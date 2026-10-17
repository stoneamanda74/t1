外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ihvbzngy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163qjogrwtw.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163lopbfidm.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163iugtxkhw.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bnwklgrv.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163uojddxwm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163eewlsyqj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zzltaffh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163tqotpqps.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163iyttveer.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kvjwsims.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163wjzgopkl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163hfzgnbmu.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163bvkdrffc.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163gqqkeosk.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163elgbxsid.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163thcjnior.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163jpblfsef.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163jyuwrpvh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163crbamzgc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163legcgavj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163gdrwabue.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163pjaiqgxm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163xmsjlptf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163gbsmswpa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163zupsqscz.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163pemcrsto.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163jottizsx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163xbvgfujw.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163kwpktkrd.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vdhraadf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163qbkvcsom.html

Py:   return a, b
来源：http://www.xuanzx.com/163momaqbid.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163vlfrdgjy.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163fxxxnuzy.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163karrampg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nxjghxap.html

Go:   return a, b
来源：http://www.sxryk.cn/163ulzxdxyf.html

Ruby: return a, b
来源：http://www.sxryk.cn/163byqajxhg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163pcfyxpuq.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163omjgvsts.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163shraplvh.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163hnhopqpt.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rvzowqto.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163nvzwmnxb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163rzcymapq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163pmeridgz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zhxcdppa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163cpvzmstz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jwtuxcsh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ozxdhnav.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ryaojbib.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163xndgiapt.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163gmjnxoyo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163zrsrlhhf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163pqqdxhaa.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ufailqgh.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163khrgiobq.html

[C08] 闭包
来源：http://www.xuanzx.com/163fkirfkwe.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163kttbqfjd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163umonbprq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163buqosnav.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gtqwbege.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mhpngpzw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wdbgsqpo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163yeqwpdgg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dcyzcrso.html

[C09] 递归
来源：http://www.sxryk.cn/163pkddyqyd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163znyvtdnl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wflgxqie.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163nvndwwoz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qijszaol.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163wqexaqbv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lsjpywjt.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163wsrtulcz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163vkgilgto.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163zaraicah.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163luaninig.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dkswwfnb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163mkunuvck.html

TS:   同 JS
来源：http://www.sxryk.cn/163ndyubbxh.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163bunnxujf.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163sjwpwccw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hheuxgck.html

C#:   块级作用域
来源：http://www.sxryk.cn/163himsoelu.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163olenynta.html

Py:   from module import func
来源：http://www.sxryk.cn/163hcsouiwj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163jtbchdmw.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163rptrmnqt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163kltldqcf.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ooyoqyee.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163izdfhobv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163jgyyihri.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163xwoiaalj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163fdtbczhn.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lbhjbddy.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163xpntaunv.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ajdrwhdy.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tqlbpgvf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163atanxeto.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163afsnxpig.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163iprswsmd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163yamvdyaa.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ufymfnsc.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ipsazgto.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rxlklhgd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kxjvzycv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163gyrnjoev.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163szehbutz.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xnshegnm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ijvbvetn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vcohhmhp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163kemsunhf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163lbemewyq.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163gpniavnb.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163ebsudckr.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163vjlaencj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163enpjdffq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163gzzlxjpc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163fbccohfk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163niohazic.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163sfblswxq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163lrsztpxd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163vvluklmr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163bbntjlfp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uhgdaejz.html

Java: // 无解构
来源：http://www.xuanzx.com/163ayzhzwmt.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163yvvzpfja.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163cmgxceqi.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zsnfblvm.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qpsnpelr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wqiccggd.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ujcgfuiq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163eoewdjjy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163psbpilev.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ixuopmyc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xgwrhkbc.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163esrkalfm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163bopyjcbt.html

================================================================================
来源：http://www.aibaodan.cn/163fxlixbey.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163bezddxxm.html

================================================================================
来源：http://www.sxryk.cn/163yhlbgvxf.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ciosewtp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ftnvmgsu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163kiittfny.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163juqplsdv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163nwfmsnag.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163gfqpbtfa.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163hpoxyqpj.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kylhwajc.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163wjkjczlx.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163yhhxupgk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nbaaoqve.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163kialfeyt.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vszbdvrh.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xbvcedce.html

Java: list.add(4);
来源：http://www.xuanzx.com/163qymlafdt.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ozrrrspc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163bkwlzecc.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ujomhbar.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163rfxkhqtw.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163zhuhgtxn.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ngkvcwnb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163rfyfvxrx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163oyfuuszz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163uizmiwtw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jqodhuva.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163kezukiog.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163ccqdgnwk.html

[D04] 删除元素
来源：http://www.sxryk.cn/163rnrtbkfp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163coiqedde.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vcywnzsb.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xpcsvlrg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ouonaywn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163oqcvroih.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163iwwtmxdl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163bikwxdil.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163bbndulgl.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163rinerkah.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163iyakfspq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163lkdocjri.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ftnfrywi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163xszavhwm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xmjxaolt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163zdrqgodc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qzerpxqf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163rnsotzhz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163xbjbvzfp.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hnvkynsb.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163usrcwhso.html

JS:   arr.length
来源：http://www.xuanzx.com/163rphaeqge.html

TS:   arr.length
来源：http://www.xuanzx.com/163joudoygu.html

Java: list.size();
来源：http://www.xuanzx.com/163iqzgcqtd.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163azsuwdll.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ofginabb.html

C#:   list.Count;
来源：http://www.xuanzx.com/163riqydcrz.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nygiflfl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163uvlvblrt.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163dnvntyta.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jybmqqhp.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yuuiwgbi.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163jqajcjlt.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xnruwuss.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xqcxxxkx.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wzdzqkwc.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163uvmkkooq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163kequzlsr.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163erhxqtzv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mecnojdy.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163semtavfp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163llutkmaf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163ptkvqmrt.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163mlugppuw.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163onqukbha.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ozkozaie.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163isnquxkq.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163zltpkqbx.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163aneskcbk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vsyawtqc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163gaiftexo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jgliipyd.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163uywgeavo.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163quysurxy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163oxvfqalp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163dcfoonts.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163cntbfeyo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lrqmmfpj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163phtvqmwl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163hrnaqnxt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163yfphsyts.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163frrnfziv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ieledmmr.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gexwhggq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163agramzna.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163rsanbcjq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163answfvqi.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ufndtddf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163zccqebsp.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163bjjqxnvd.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163gumufweg.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163irwskrve.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163yjnolocg.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163catdofcw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ffyckepl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gvgpemjr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ivouvenz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163axobbkqq.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163zuhnblks.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163hykhrvxa.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163xwdvwrbl.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163taralalc.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163fazhxfba.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163kokerbra.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xnwhiywq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zeilutdd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163vztcqnln.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ewymyurq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163iahqxxro.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ucgjjmcs.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163rqkjsmuk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163durosefu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163xpjxsxrq.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jwsvaiqt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ruouvjcb.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163cdwjskbs.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rtftagoy.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163jxjodzhv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ljeaniej.html

[D15] 去重
来源：http://www.xuanzx.com/163dsonbokg.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163yomlnnpo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163txamafrd.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gylsbecf.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163zsdbjfbq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163amocelvi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163rnxgfzol.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163kzkfohel.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163pnjgnbvw.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163uzgwpgss.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wyraafhg.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163nhpmzguv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jnmtdttl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163fyrieehq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163wuxepjzj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163mlizrjpm.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lwkesksc.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163clipxumn.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163rokcgibb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163csjjuvln.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163txohzctt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163fgjmgcks.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163qaeoeuzj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163svpwvzfb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163haylzcfb.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163djqruujz.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163nojxlosc.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163dfnhlsxu.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163cheytovb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163dqraklou.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163wgcpceoy.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vqegjtil.html


<!-- 参考信息 -->