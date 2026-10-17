外链999!wailian999！

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tuzysmmm.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ncriuttb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163srfarrdo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bywpdccj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163anvaxctd.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rpdbkpya.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163yygzztje.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163zvpzjzpt.html

Py:   return a, b
来源：http://www.xuanzx.com/163tmhxatfq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163dgofrymr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163yvuhvmkj.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qwzhychg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163llogbbgr.html

Go:   return a, b
来源：http://www.sxryk.cn/163yuaiudji.html

Ruby: return a, b
来源：http://www.xuanzx.com/163egamhwsw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163kilcteft.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163lgtlfebx.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vcduudna.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163zujezagr.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jewqehnf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163dtujqcpq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163efguokzf.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163hczetirf.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163extvdryl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163frsqgsew.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163xtljoqdb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163mvzvnknr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163itauiekm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163uqkxnncc.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xkwgbjid.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163ksscztgz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sbvbwtaa.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163oxgzpeto.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163bszpkmqy.html

[C08] 闭包
来源：http://www.xuanzx.com/163klwwsscg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163tlzgurat.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ueqkkwnu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163hpqtcqsu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fwosmqiu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163qxqrkrsx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wmiopfvz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163xjqlnnqd.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nwlzsfyh.html

[C09] 递归
来源：http://www.xuanzx.com/163mettjgue.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163frixsrcu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163wvqgquqe.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163vkdrzzrm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163multxsds.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163kskxmcau.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163dmznyzme.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163tdydutzv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163tnwodaqg.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163objrvmla.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163jjmahdmo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163mnqloumt.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163oihmeurp.html

TS:   同 JS
来源：http://www.sxryk.cn/163flckxzyt.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163awothjii.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163qvhvteip.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163wiuekelu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163dozitfgn.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lfiozkfu.html

Py:   from module import func
来源：http://www.xuanzx.com/163wjyxzlwb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163njwaeaou.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163fhycwmor.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ukuhliyl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163khvddaqp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lhyhnmfd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ndmwgwhm.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rhkzknfv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163optsqdrd.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163rmggtakb.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163xewnlzyo.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bweboxft.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163drpkncfj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cqffazst.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163ljnxisxi.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163aodjhwaa.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ifesvcin.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163kaealgyu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zkdzmvse.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yteaenki.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163ctdhhkgl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163mqdodvcl.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163prxehqwx.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163wpbeeuvx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163tklebmzf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ihwvkddn.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163lbryvuhg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163xyuhvovl.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ydfcblqm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163bcjstfmg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163wbgerdvg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qavlhrsc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163jwnqzhfw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ywdrfyny.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jyhvrjzj.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163lyefpqiq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163avokhwoh.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163hhruvraq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tolrobtu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163uqirvmnd.html

Java: // 无解构
来源：http://www.xuanzx.com/163lgugksnt.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163czcwfmhc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163ptdbccsa.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163qkbmyuwz.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163osqfhlzn.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163bolaazjx.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163dqbthjog.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163qdcgqmql.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zzppjnuc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163xbftbmjl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163zhkpjbbq.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163etxhjaja.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tmiuqhqy.html

================================================================================
来源：http://www.aibaodan.cn/163wjpdktun.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163txgsqfdg.html

================================================================================
来源：http://www.sxryk.cn/163ijemqkdi.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mpbssszn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163iezmedpr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163lxtyvdev.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gblggeek.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163yjhmgskx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ybngiaum.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163foninkuq.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163tvbvqbow.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xhiqftng.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163jpkzmqpj.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163omyagmin.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163aoytxtow.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kfbavowf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ppqiettr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163uwgjikai.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ysxigqgy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163vjyegrfu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163zijhdopq.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163slzwqgnn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163eousnxav.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163akjvyfwq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tqrqbuma.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163djbryfuf.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ehjjcsqr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wzcjhiec.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163hkllvcjn.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163abqaiblq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163rdqcaiaf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163qmgripna.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163gdipnmiq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ekanzlcb.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163mvfuatmy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163aczilvdi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163rokyphqq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163rgltfobo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163yjbeukek.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163yqliomso.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ntfrnfio.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163nnsohuhq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163niqejboc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163deufmgxj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nynklwwy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tabvdprd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hyovfaxf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163xukyrozp.html

[D06] 数组长度
来源：http://www.xuanzx.com/163tamrirkn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163tixjengz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163cytdztlq.html

JS:   arr.length
来源：http://www.xuanzx.com/163einpgfuv.html

TS:   arr.length
来源：http://www.sxryk.cn/163yupwnhjx.html

Java: list.size();
来源：http://www.xuanzx.com/163ilmvmrei.html

Go:   len(arr)
来源：http://www.sxryk.cn/163wvxxfmdy.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163muxhtynt.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rcvqsyom.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163pivblxgi.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163fqkfaxyv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163fowaszms.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kuahlgya.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163irxfedsy.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163jpreiorz.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163nvouxwgm.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163pfpktkig.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163ursdluzm.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163karcwhxo.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ugkktbwi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163seemhtge.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163imsyyywx.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163vvbnnjnx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ehenpsfk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163qkbgdhgg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163qnqdihrl.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fuluakmc.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163cfqzeqgt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163odtkcvwx.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163nomqugzv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wvxpgbir.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163yxgpeqde.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vrmuhdjz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ubxipuem.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fpwanqey.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ooxpceef.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ydrmlshu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163demsuaun.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163lshnkkih.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jftkrscf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qwzinryt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163vzryvnew.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163whalovpw.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163dkriivml.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163ovajjafn.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163utntnlgx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163nrryusmg.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163lwbriorw.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163iabdimmr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ywtieqan.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163aswuapiq.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163rdybvqrp.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kvtldrfw.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bzcdajki.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163pdvqghyj.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163folyzhuo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hpeofpcv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163amrahmfw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163qswcbyvv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163ucvyecvt.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163okmrkwqo.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cfbzkpuf.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ebbehrvz.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163nohcemfw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163leebrbkh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163pslccizf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rmhszyer.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163luleazkj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163zessyhkp.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163rhobzevb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163cvavlsfx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163cuxblewb.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163tqfamewh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ffuyflrk.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163rfaaylpz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163uppqvvya.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pylnvisi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163mffhudpf.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163yrsrxkzp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163olsrahus.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163svycvcfc.html

[D15] 去重
来源：http://www.aibaodan.cn/163nnfujyef.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163aaympqlr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163dqlczsfu.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163ezykuvrh.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hpstjwra.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163tanzvzwa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163kaodxheb.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163wxxrmdoz.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163uwcgitrx.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rdjyiwqb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163htgjxunx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qkbtkfkv.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wrmdcihu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cgrfxgzn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163amxktwey.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ymccujzl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163unzgptvs.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163mffvgtkh.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163hsldufby.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163vbmudqqq.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163jwrvmajk.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vaiyenkl.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163iyqdycps.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163fmnyzrqe.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163pdphtrqk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ajgivlmf.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163zknlgmpw.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ckzslzqo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ubzhczuf.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163rwljyuhb.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ieydrcbn.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163yxvnrisp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163uyxfzqqu.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163ftqcxegj.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163vnoxawtu.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lbcfornv.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163fuenjfzj.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163swxxnfot.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163dectbjwz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163egasyouz.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nsrrutky.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163xgytycfv.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163mmfpqkii.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zehytujo.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163vlizrovb.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163fctmwqkf.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163gwmcvmaj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163inamwjzp.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163fujukqby.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163puhtgyya.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163ygilzowv.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163jrdxtoyj.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ayyyhxss.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163xzzrqkyi.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163fcezoawl.html

Py:   x in arr
来源：http://www.aibaodan.cn/163cvtbqeds.html


<!-- 参考信息 -->