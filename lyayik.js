外链999!wailian999！

Py:   return a, b
来源：http://www.aibaodan.cn/163ggjnrocq.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163uegivpsk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163lifmifgp.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163onodqoxy.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163nldanuvf.html

Go:   return a, b
来源：http://www.sxryk.cn/163lnqsfihd.html

Ruby: return a, b
来源：http://www.sxryk.cn/163meihvrtn.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163aypuijyu.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ctqcxakr.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163rcrqnxvl.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163gxpcfisb.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163irjjyszr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163owgujpvn.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163aagafbwr.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163rhhbvhon.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163dftgjoqv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163qmycyusy.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ntpderfa.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163hgvvryqz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163rfxabsta.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163oteocoyi.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163jcfejioj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163lmvkrqsq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163nnuvyhgp.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163rrjfcwwa.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163tujviwyx.html

[C08] 闭包
来源：http://www.xuanzx.com/163rrrgklxd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ucdxhbgg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163xhvcvpkp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tmqgvzfe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qxjwvkjb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163zissaeny.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163tcudpmlk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163sdjvufkb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tqvitrld.html

[C09] 递归
来源：http://www.sxryk.cn/163udvbhntb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163shqudftu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163kbsyljku.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hxswjwbq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hdwgkivr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cpinwyyt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163tdygtpxr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163dkzwcmjh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163qregjfka.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nyspehar.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pcwqltdw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163tpmfjnof.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163itxcgkqp.html

TS:   同 JS
来源：http://www.aibaodan.cn/163cqfytsau.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163ovasnluc.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163hysplibl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163knfvjiod.html

C#:   块级作用域
来源：http://www.sxryk.cn/163gdckfrsj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163olmqmwer.html

Py:   from module import func
来源：http://www.sxryk.cn/163iefdmbfb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163dtwkrupl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jcnodfyz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163scevnerd.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163zkgxalaa.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163aiidfuje.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xbmkcgkg.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163yhaqcpbc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163dgxuxtgd.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163xkefrwlp.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163kqhsxpbj.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163yfaybhni.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163mggkjecr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163txkzghwe.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gdhfmokx.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163aaeqzoft.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163pvogchrn.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163zucbfiwy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163tnfrnldm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wmzsspaz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163yjrawncq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163yynckvde.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163voqxjdls.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163eamgbjfz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163smrkjria.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nemyjice.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163edalbgkc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163jkaxzrmg.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163sfyugebd.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163pupffeup.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163wrvizjdt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lktijfhk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163touryhcm.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163jlfthlbr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163fiwrogup.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gebkyamx.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163zojoucfn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163etmmflih.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wqgtpqrc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163oylnuqbk.html

Java: // 无解构
来源：http://www.xuanzx.com/163ydyzdtre.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163buwmkjnj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163syyfaozx.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vysmxaej.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163slnizblz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163udffatbe.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163ftyldcbx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163dhrugujr.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163xabvgtws.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163iwctoglm.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163wftojqwo.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163imlcoggo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rxqvvxgf.html

================================================================================
来源：http://www.aibaodan.cn/163flofongm.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zyldamdm.html

================================================================================
来源：http://www.aibaodan.cn/163mhtysjnh.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ixqtktzp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163uemfjtbo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163oouggcrt.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rouxgwwj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163efwmfmpg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163wbjxnoik.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xefvclts.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163tbzpuhyt.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163cpxmhgii.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kenomhfq.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163obidzjqt.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163uscmcinm.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163ecyepfih.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163viaudvnw.html

Java: list.add(4);
来源：http://www.sxryk.cn/163udgzletf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163klpoummt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163geradwig.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163afbutqmw.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163xbsucmxn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xiiomgxu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163nsjfahsz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zxsdgwew.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163siydguyb.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163rbxqzbaq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163egnmlgst.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163yhbzklkx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163bllwmveb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163huqubwbm.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jackcluf.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163arzwjdml.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qjnhmfqa.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xmkftszk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163zzdwysvc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163tdptsrzk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163sooqqflh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hfcvrtpc.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163djjpzozy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163elaoiroo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163pykrglqb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163kfyoejcw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tjhrlzog.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163poqghfdp.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163pkvsplrf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gtwurvta.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163nnyugwgq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163xstwdfbl.html

Py:   len(arr)
来源：http://www.xuanzx.com/163cddsnllc.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163hookndxi.html

JS:   arr.length
来源：http://www.xuanzx.com/163alpoqind.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fgydjffz.html

Java: list.size();
来源：http://www.sxryk.cn/163yzdxjzsb.html

Go:   len(arr)
来源：http://www.xuanzx.com/163ptkkbtkq.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163fhavtjuc.html

C#:   list.Count;
来源：http://www.xuanzx.com/163giizftdb.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fqnaievw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gxhwafzb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163znlaxyjf.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163azkwddhd.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hbcugeud.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dajisuxw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ibwsypcu.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ksosektd.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163gnfigupq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163omfwwvpm.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163lmpcqghw.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ofwzgwwz.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163lwgldlnp.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163rvoamvat.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mykosswr.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163pglvqzbu.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xramylkw.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163skglrikl.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163yujwczqw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163zqpgrrvz.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qjuviafa.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163uxvovlww.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rniubtct.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163fwgppdsa.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163xndjnacs.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ymvduceq.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xosewced.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163urnvfirj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163skcydzuy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ynicszdq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zacvwozr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163mlxsxcze.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cpmzzpby.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hwchylwd.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163utxmhfvh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163uopjyqnx.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163dsslupyz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163dfwxdqny.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163hbdqqdlj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163loskncul.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163nxlwzyau.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ohsedbid.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163lpkzvlev.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163awwiokom.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163sudvfdet.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163orbtzonx.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tqapfwga.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ixcygbfv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163clhgazex.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163fidblruw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163vauxfyok.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163yltsfjua.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gdnyzqlz.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bymvymev.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163rarajnzp.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163vxwnxmvj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163apksqzwj.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163gexerwby.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163aorppkse.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163yhxdufex.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163eybqrbpu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163dvzckbao.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bgyopsne.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163muvwaiwy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163wrovsjgj.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fumqpbnt.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163abmvemjg.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163rwsotczr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163qzvkmobg.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163eqfphdfw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163orpdjeyk.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163namndnct.html

[D15] 去重
来源：http://www.xuanzx.com/163yyicazzn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cxzwjvnd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163xrlxupzx.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163jeiedpzb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wlqiisee.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163kowauqjk.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163snynmwun.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vgufcdke.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163levazzoi.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ynkomsgr.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163umbnmpmo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163cjbctcnb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163yryjqndo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163isabtmqr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163emueueik.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163sqnwqawe.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ngikktie.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163tkuobinb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163wnelfttf.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163alquuizc.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163pmtxwxxy.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163dyyfjmou.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hyragfdw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jxdaafvc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163fwgimluu.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163movimdaf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163hvepgyon.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163paipcbrt.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163cvanqfzx.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163woruines.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ybvmganj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163zsntclun.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163qyxbnwyv.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163cboryaeo.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163onqhbqch.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ceopdvha.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163vrchijtm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163dtatfvxk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163ieashhyt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163skgfrlvd.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163ozkniwsx.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163zcldoqvk.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163vouskbgi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163amhpldoy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163yytwhwll.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ewegemin.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163othzcchh.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163wxtcbhis.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163ovlyfdel.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ipgpksem.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163pmjpaoeo.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163wueqjfig.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163hufkpksh.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163kcylhuoj.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163hozmycos.html

Py:   x in arr
来源：http://www.sxryk.cn/163lijuksvt.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163iuaixfti.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163svzvywlv.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163wuzyfott.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163vbwzoazw.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163hoynmkdt.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jaarbfij.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fwnsgwxy.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163qdtywgwh.html


<!-- 参考信息 -->