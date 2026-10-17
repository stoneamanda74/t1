外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163fpfqxaxs.html

Go:   return a, b
来源：http://www.aibaodan.cn/163wilmrvwn.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163vszqwukp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bxtwcfaz.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163mzqexxmm.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jdhqions.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163virpqdtd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ppdnwwau.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163wqarszlj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ptbfxgtl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ymeoljig.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xqdnaiml.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163tfgcgewo.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163eftodvnz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163rixqrujx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163uvfqdfxk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163rvveubhy.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163dtfytyva.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163selsuigi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163lomtstbg.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163aflqelwq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jsqisihn.html

[C08] 闭包
来源：http://www.xuanzx.com/163jdbqibzd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ldabalpv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163oczlxfdq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163znegirpl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mamqlest.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163mlnxusyr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163znwzxlem.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163vrsqlott.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rrvllghk.html

[C09] 递归
来源：http://www.sxryk.cn/163igpfbjlq.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163uthbwuez.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163gpzrotdy.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163aovukdmv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163rldreyaj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163ipqwjbgt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163xmrbrzhg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nfcfsppz.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zbbejtdw.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163kugkumtt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ackaaszb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163ntmdigtn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163njqdosjh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163rafuffjk.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wcfhzkpx.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163iodzcewn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163uqlmheel.html

C#:   块级作用域
来源：http://www.xuanzx.com/163gjoijeye.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163hjlnvisw.html

Py:   from module import func
来源：http://www.xuanzx.com/163phxkgpdp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163egvndeqo.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163loxriery.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163nodtbtxv.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zjgcfaie.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cpnplcti.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163andxfarr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163myqyomly.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163elpgjeul.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163hvnflsvr.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qniwdvmj.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wwznoqqw.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ccgkjtik.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163bltpnhwm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hxgashon.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163vdqbirje.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163urrbxrmj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163mjdwopzs.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163quzabpsk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163piphtsrk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163jkqygcrv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163vmffokla.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163xuthxqxm.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163unxmpjtk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163dhdvptnm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yiieezrc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163onskolrl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163pbefbfzz.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163thbqbrlw.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163nujluhcq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163dsogjqlv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163evlvealn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hkmkmzgx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163iseanahh.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163zaxtavod.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163abbsdykt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163jsfglver.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163weddadvu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163pnwzetry.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163lfyfwlsw.html

Java: // 无解构
来源：http://www.sxryk.cn/163ynebidfe.html

Go:   // 无解构
来源：http://www.sxryk.cn/163lgyizbqd.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163evslxdqj.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163laxillvp.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163akjksupn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163fgojqeug.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wfatrmlj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163lpdadlvc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163yzyffeof.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163fnmqhbcy.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163aznnzxqd.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163wpwtgede.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163kfpzrhnk.html

================================================================================
来源：http://www.xuanzx.com/163etilvsxz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163bwxijaho.html

================================================================================
来源：http://www.sxryk.cn/163daoourqt.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163onfnjczo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163gttlswar.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163osswmxfl.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163lizmevgc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163czdurwjv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163gadfdadi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163qkqdgcnr.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ixkhuhmo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ojxjmbnf.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vmjzcojf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163xolekkjo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mipixavf.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bsbhofee.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163tfdaflzx.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163nfayegix.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jywqupff.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163omuenter.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163kqwteqob.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ordkzdei.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xephdwry.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163vtrbqwoi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163fgscvzwg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163wukntcwb.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163tyzvkqqh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163kqoywyvl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163lgsigeye.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163broqesgz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163hihgttnr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ovdyqyra.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vxcosksg.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163lecevblk.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163qgnvgqcz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163sfuxulxn.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163folkospk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163cjfpcdre.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163myljsxai.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163dbhoigfe.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tmkffvui.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163dknoiyth.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163tryqhirr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163pfdpywbp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qggybvqy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163eavkuzgf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jqwxiktr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wxtflrrr.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zqolgriv.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ypjjqcif.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163scwbkush.html

JS:   arr.length
来源：http://www.xuanzx.com/163kvnpcbrr.html

TS:   arr.length
来源：http://www.sxryk.cn/163utmvpeav.html

Java: list.size();
来源：http://www.xuanzx.com/163gcicykul.html

Go:   len(arr)
来源：http://www.xuanzx.com/163cczvsmlp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163dvizbbcr.html

C#:   list.Count;
来源：http://www.xuanzx.com/163tzisbmag.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163geanczqb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163bwokoird.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163vxzskkxi.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dpwfijjt.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kbfezoyx.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163scfyqurx.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163lptyrygv.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ivznzloe.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163sfqncrvl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163akwhtyng.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163usyiawnw.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163kpqbkvnz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163neisrrrf.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vzztxsqg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163aoweblcf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163inynwror.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163fzpbuzym.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163drlswrhp.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ntrwwpsf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ymdascme.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163pnylxnsb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163oqspxfln.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163pfbaceya.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163dhajaamm.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163wkxpbguu.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163rodkctvw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163svzwqhra.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rcbnjeny.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163tpstgcbn.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163grqymnhz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ahepgkkm.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163esrtgnut.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163wvdhjrbi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163uwqbhukt.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163sehpzhct.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ksqwqhky.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ihmzyujs.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163veiffhse.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163xlkmwisj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vysgtsto.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163ayaojflj.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163dqdyuwtk.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ewbqsxof.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163fjdkjawr.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zlgstmqe.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163rfhwzrrr.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163scdfmfkv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163atgusqpg.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mgvqysge.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kldrdmas.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163bmilvywe.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163wwoowgsj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163cixoelvx.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163xqrscwnj.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163qkmamwuz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163akcofejz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ukhmotoa.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163twzvkwwm.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163rijeirqt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163sshddxhl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qgrtzrob.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163bgjwpjwb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163waypdlnx.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163fguiybjq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qhkivxqg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vzdiaery.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kwymgylt.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wqreyjqa.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163hulflwoi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rbfldlaz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163uncpbfwx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163akwgoflg.html

[D15] 去重
来源：http://www.xuanzx.com/163lwvwucnf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wwppijwl.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163ersyxkwx.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163anlktpoe.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ijqejnhh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163netxqmou.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163zhlxgoig.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163nrjxhfkh.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163eknveomi.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163uewyreqv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163qgeoedpu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163yurgkbbk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163slbofhbg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163vmyxbqje.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ayrnsqnb.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ptabeung.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163rkasjtaa.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163jgqgnehf.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bvolsvoj.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163zfnmsbhg.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163hfrcjysh.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163qoveifoh.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163mpxvxxfk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163mtbxbobn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vjcvhkuy.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163midgnfhk.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tlqnbbhj.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ogsszabs.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163mkliprdn.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lfxtcbeg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163ckxbjfrr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163parpaiwd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163uztupoen.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163klfcurkd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163momrdvsq.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163ozajdbhp.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163ssngmvkl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163zwbcfdsw.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163xnbpltwh.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163bzapiywx.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163btononxw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163xhnvfxch.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163uurmkxrs.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163iyqzreab.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163kgoszral.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163kftwmaor.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dqhobiaj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163apibvpdc.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163sxqzkkyq.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163harcsqud.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163utygvlwx.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163gzsyvopf.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163uobyhtbv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163wzcuqyte.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163gapdbgdo.html

Py:   x in arr
来源：http://www.aibaodan.cn/163sqwzpjsb.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163mtbmfcxq.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163wemhibmw.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163xlomznwd.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163myvcedpr.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163oqrskjrv.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163noftltud.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163clptonxu.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163hunvurpa.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163zcaovspc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163szcmzygr.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163xvzwlthb.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kgezhcon.html


<!-- 参考信息 -->