外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163azcslvsf.html

Go:   return a, b
来源：http://www.sxryk.cn/163opxetfty.html

Ruby: return a, b
来源：http://www.xuanzx.com/163rbdtthca.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163xtdwgxkm.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163fiyakcbj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163biniawev.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zalfbnbt.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163grmywmch.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163aewfzsbf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163fsltgqoe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163lgcjvmqy.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ppubxeii.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163schelibd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163nvljbzgq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163npxjbwfr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163cyxdvtbm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163fyrjlrzb.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163yjwagjow.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163eqvjhuoc.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zwpoqtrj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rhqtjiab.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163jzusvsqy.html

[C08] 闭包
来源：http://www.aibaodan.cn/163fqdmnlyx.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163vcysfugd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163unouaqnd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163irbitrnk.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zihfeevs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163qiqrzoev.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qeoidsmx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163vatmwnqv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lngbsmbn.html

[C09] 递归
来源：http://www.xuanzx.com/163evuzkgsf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163avowswge.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163yhkjhuqm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163akkgwidb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163qwxomzbs.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ylreknpi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163gnoxflxw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163rzlzkqug.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163umfqvvmx.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163iuixarll.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163qgsxsrqi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163nzdxkkci.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tijqselo.html

TS:   同 JS
来源：http://www.sxryk.cn/163bsuniboj.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ztqaftpb.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163kbnvseyj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163nivctrzw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163rhkzlhas.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ruremunr.html

Py:   from module import func
来源：http://www.sxryk.cn/163bvwlvvqs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163mkgkmpbp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163qvxunlmi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163wqrltbjx.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163gkisufxu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163tjmhdjwr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163cydeltlf.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163sdelwxre.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163reuphnpr.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163veyuoune.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163bmlzavsl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xuvluozw.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163nxipianl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ppmalnxo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mquklgqw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163lraardhs.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163gxotfasn.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163plkarzxl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163pwderqhb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163iapljhdw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163cavdgyzz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163helvcbtf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hxtwyico.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163xzfywmzq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163fbtnvqua.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163sahzoybs.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163zalhacoa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163nojqqfwk.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163qtqutrej.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163peoqvkdy.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163gfabwcjk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163tqinfcdl.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163tzdjnvdl.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163mtkcukfy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163szyszihy.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163hpigahgw.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wiwpdhct.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163xqrsmhmc.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163xahzufkl.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163wzgkdyxy.html

Java: // 无解构
来源：http://www.sxryk.cn/163jltzvqur.html

Go:   // 无解构
来源：http://www.sxryk.cn/163idahttcx.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163hmkvqerl.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163aexlnoyj.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163oyvcmfde.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163iqhdbssz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pqnriszb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163aonzhmfz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163nwggiica.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163yqpuhxno.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163taexqxiz.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163ukffnbnv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ywpauhfk.html

================================================================================
来源：http://www.aibaodan.cn/163xrlanqgv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zucuzoad.html

================================================================================
来源：http://www.xuanzx.com/163hjhxbybs.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163pugmptcc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163zvjtfptl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163aivnxpcn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ddwhcffi.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163tmrwszii.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163hztdmiel.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163jgylotar.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163nqskigmv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163jsuqkmjg.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163qbvxrplm.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163wvbdhlwu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163tkdmkunc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163tkxgagqe.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163wvluhogy.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ayzqkqmr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163nkihxvum.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163bofrwsqu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163hwozcjvj.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jjjippjt.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163jqwfftvb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163dybweiln.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ssrqktdj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163hwwmupui.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wjjjqath.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163qrpassgf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rclvjchl.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163dywkyoir.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163afwukywk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163hzzgfpvn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163lxqkmjsr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163iaatcibu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163oicpcdfn.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163kommxztl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163cfrfemdh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163cmgfwjrp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163fhvsocnc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ieuxlzga.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mjayxahd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ihzgmqhe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163yndkhuhw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163vcbzcdhs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163qjmbgpuh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163qzuxlnot.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163qxjsfwjm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163iyrocayq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bvwnifez.html

Py:   len(arr)
来源：http://www.xuanzx.com/163qffcfcxm.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163xqkwvmlc.html

JS:   arr.length
来源：http://www.sxryk.cn/163nyofgftw.html

TS:   arr.length
来源：http://www.aibaodan.cn/163bgzmotdg.html

Java: list.size();
来源：http://www.aibaodan.cn/163rsinnxuv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163vqewtsvh.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rwkrcmji.html

C#:   list.Count;
来源：http://www.xuanzx.com/163smfbcuqy.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163grrvmurq.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mivjsfmw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163phacgngz.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ezpzbaro.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163gvmdoqwr.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163eeffsawf.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xziodbfk.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163afzhbkgg.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163revsshjb.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163vjhowwbz.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163cybapmwz.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163kbvqosoo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163bickigsa.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xcetzokv.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163wocqsdjh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163arxhzmtl.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163aslxkcmt.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dlqsukbw.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163effavjeo.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163rhmcahjt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163shvrdiwe.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163fbudcoza.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163rgfhvmsv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ifkjxkog.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ceihcrlg.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qquitbva.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163cywrktkv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163bthskcqd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163lriujgmz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ymramofi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kddodhir.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163oogrublq.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163gxoyoxpv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163soditzea.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163pvyybydt.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163xdhzoifp.html

[D11] 反转数组
来源：http://www.xuanzx.com/163uhpbfmgi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163iepnnhod.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163nlwmvequ.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qdtlxqgp.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fafnqeex.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163cdvtmfxw.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163cdyrqgbx.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zmhzijjn.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163usciskmd.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163bhcmvpgm.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163jygplidp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vygatbwf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cgjvagsi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wgxguctw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163eizadjyk.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163wpnpfdfz.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163jpxbpwyu.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163xdkmhsql.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163nfrlhogb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163octtxaot.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163qtspavff.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163inmulofz.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ssjtfvtw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xeupoiux.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163tdyskjit.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163uogrvosr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163vkvpjczr.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163lglnmxgd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mbtwdsqe.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163ukgasnck.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kcshoqhu.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163nzzkuukm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163cpvjgqyp.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163squfeqjw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163lwiuouiu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163rdgyqyrm.html

[D15] 去重
来源：http://www.aibaodan.cn/163wxpzsrag.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163zvvcvehb.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163bvycbttc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163eejumznc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163gsgfpisj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163frsygkki.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163udixnipl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163gqojkklo.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163phxoauzq.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163erdynqtd.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163gycppqek.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163aekgtnti.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163oxkuxdcn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fmjvlpcc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163yhchyhvv.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163yxcumqpy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163kcntskls.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163yfpozedb.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163nvlwnpfz.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163klzhkxyn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163xhzziqcb.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163fgmmlzvc.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163rdnnbser.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163tiuuxmbj.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163izhnpdfl.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163osbshdce.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fgqaqpgy.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ktdwvlff.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163eijwdzjn.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163jrekbdei.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163guxvtkxe.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163wwifnzqj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ahfzuxmh.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163fczhxing.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163rqqlskhf.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163lhbmbzmr.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163bsskkofl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163jzbhutxm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163zvgmyqxt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ofqmgbci.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jtxflhlu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163yejqsdnb.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163pknnnygr.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163zoxeyxry.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163xipudyfy.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163wxcbenhp.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qsqsnxvc.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163isoddalg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xksfdokd.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163puanqotm.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163senowuhz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163ztjpsred.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ggwljtpd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ezutetqj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163zmvzrymq.html

Py:   x in arr
来源：http://www.sxryk.cn/163jsulhote.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163yuxtmvfy.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163ojctlqcf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163pqwrdwcu.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163whbhxsjo.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163avhovxcb.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163ezqlhehf.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163lrhtuugw.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163eaglxeyw.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163eyzdwtyr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163pcsemvhk.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163jvhqrmuy.html

TS:   [...arr];
来源：http://www.xuanzx.com/163ummwzeij.html


<!-- 参考信息 -->