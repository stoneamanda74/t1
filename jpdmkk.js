外链999!wailian999！

Py:   return a, b
来源：http://www.aibaodan.cn/163jxqkapka.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wmuzoxfr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163pjuukysh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163urjbwdin.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163zyvehmft.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ykgqvesw.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163irehqzrb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jfzsyegl.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ucuvckxj.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163bfnumbwz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163xgzxxlzc.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163vtarvhjs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163owunfmof.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ugeiuyaa.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163txplyvth.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163cqottiuy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163legdrjbx.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163wfipzubo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163skjpjsmb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163rmcxbewo.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163zxwklkbm.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163vrqvsmms.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163pzkzcstk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163gcdxjlch.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163fugxqsvl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rylfshyy.html

[C08] 闭包
来源：http://www.xuanzx.com/163xembxbch.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163bmcichsf.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163rajwovhk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163uscwopux.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hgmnwzca.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163avcauubq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163mpaqnatp.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ksaqijca.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hygnfxxn.html

[C09] 递归
来源：http://www.sxryk.cn/163gzflfudc.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163jlamnnhq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163xkmczoij.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163skczlsik.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163djdkfnde.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163llafrsrn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163pwuadsan.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163myaynomc.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163hhfefjhd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ntpxvirv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jszgcodr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163cjgnskwz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163rjpgvunc.html

TS:   同 JS
来源：http://www.aibaodan.cn/163cvbnsojw.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zitanqgt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163wzttllek.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163mfpaaegu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163svsmqomg.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163lfbomvdh.html

Py:   from module import func
来源：http://www.sxryk.cn/163fhqgdowa.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163dfkdkkrz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163wpuvixmw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163umqcrkic.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163dzfudcxj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mavppmvm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163onngsqvk.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ebtpbkvv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163zntuyknh.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163hjgvmzob.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163kglydtkh.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hjcgsacq.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mufzlarn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163hnxwczvy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163eueqmkll.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163jcfhytga.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163yqscoiwd.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163hvsykfpr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163fyjygmzg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uuvyfgpl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163vczlmgjr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163xababuhk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tlfhzlqb.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163nvcowiiu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163wurixegp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163lwoorpat.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163jxtxrnoh.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163nhjfrowx.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163enajxqcn.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163borbqlhg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163johmwqpa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163xvswqrsr.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ufrilsaq.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163izjgoqnl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163utuvwiho.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ujusueod.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163csadhzsf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ankaueim.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163xocritqa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qrbmkiqi.html

Java: // 无解构
来源：http://www.xuanzx.com/163svarkytf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163jytuogzw.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163uytyhdgl.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163zxdcvclx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163xeswfrrs.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163uckotbwj.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163licacdmv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163tvbkwukw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163zypqpenv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wjjyvqow.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163obzszwlq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ybzjhyri.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163sendbzmz.html

================================================================================
来源：http://www.sxryk.cn/163oipbbxwa.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163idqelbmb.html

================================================================================
来源：http://www.sxryk.cn/163qdxmclao.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163oazdxgqp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163bwzojrng.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wohkyfjk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163bgzlprpw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ongillgm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ifuzgfix.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163qrkqzqel.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163gmsavnrv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163mfkxsrlr.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163ergnresg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163qmbsbhzk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163sbgaifry.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ftzjzusc.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163sdmvmuwt.html

Java: list.add(4);
来源：http://www.sxryk.cn/163acsrfkbh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rqsunczx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jydogkkd.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163fzroewur.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163yapfdiwp.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163yjrqmkim.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163drkerusv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163jjxukabw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jwcztgtm.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163suykfkvm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163refesuvz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rdapaxui.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163foaxpivz.html

[D04] 删除元素
来源：http://www.xuanzx.com/163yxqeosxk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ouuchguy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jeiitels.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163zjbyvilo.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163pnezjeli.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ecujmmwd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qirujjlx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163qdacjhvb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tzgpytec.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163lcbnofpr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163giwujaxq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ncndtmpe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163wgxldznj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163sylaofzk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163laokpsli.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163lisordvl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ycgomqpr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163stejwqnb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bojopddt.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hdygjqaz.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163jzjxbhoi.html

JS:   arr.length
来源：http://www.sxryk.cn/163psgjguqy.html

TS:   arr.length
来源：http://www.aibaodan.cn/163blsklesc.html

Java: list.size();
来源：http://www.sxryk.cn/163rlfxjrky.html

Go:   len(arr)
来源：http://www.sxryk.cn/163godjrmrv.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163wqbpvkuo.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xflwbpxw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vkgehuer.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ixcurmrr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bsgszlji.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gcijzyzx.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zisvcdoe.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163jmymbvnm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163pfpludkq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163pzvffolu.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163bugkdqvv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163aidigros.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163zhcnwnqu.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163abpzqejd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163lmssltjr.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163hfhyewhd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163mcjzemvv.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163jvyxzzhf.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163ovltmjoy.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163xbrgsuez.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163uotvbowt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163wzildmjh.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163cgxthkxg.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163uqkbhtwr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163vihebhni.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163inoxcwpi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163icghyecd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163mvaazsvv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163zzgurlww.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163xaqupqxd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163obkgpiqb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163sgquqwyj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163hpdtmebb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163boyqinbg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163vqmgyvse.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163tpvxwdny.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163thxitpcn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jiospquv.html

[D11] 反转数组
来源：http://www.xuanzx.com/163qjribfar.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163mycgsvgb.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163islsorua.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163pnygrfoo.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163jmvrzquf.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ajqaxffp.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163uityxwvl.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163jlsosksw.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163hscopgyw.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163feisqkfr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163pgqwcymq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163zkbeadgt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163hkxmjqrt.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163mygdwsvq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163mymowdbn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ryyyxbdl.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163arxeumdp.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ltccrcad.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ysrhizys.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xepfecbn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mgzrhrdf.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163brdgwxnr.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163xakyydif.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163fgfnmjak.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163yhysaggx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qtipnjje.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163kujkwcrg.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163yrocyhdw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163reiwixup.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163cspmvzsk.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gaajuhzb.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163omqcgcby.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163rnxnvtmh.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rghgakoj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163opmmplfs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163mhbuawdn.html

[D15] 去重
来源：http://www.aibaodan.cn/163izbwrooj.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pbmiijfm.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163lfnibypr.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nvxzkaae.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163fkcgbjfq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163pvowvzfx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163uvaasfiq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163dscarafb.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ontifwyh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163tvudnuuz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ykksrdyi.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163fdkxqoyx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ksedsnst.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163pbwxhxoh.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163cjwtchgc.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163djzvjjgl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163qnsoroaq.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163yefjewuy.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163euohkxvr.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163goblbprp.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163otbgnqlv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163plivnmzk.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163bseyvrgk.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ecledcgn.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163svdkjpzg.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163xabotlxh.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163fpvtxgoa.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163bszrnetr.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163sxuvkiyf.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163mmrqpqye.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163bnsgrdar.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163odbifrrj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163jgjhexph.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163xtbqxrbk.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vfccuanc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qtbshdsy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ymaysdav.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163psnklibz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163lzoujsrl.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163eeothlfn.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xpidpoff.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163porjwudz.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163rbndsyrc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163edqhlake.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163pmfjcwig.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163pgasqpbq.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163wugpfqgd.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163cgjfuetg.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163akmizyyo.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163musboqyb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163cvepdudp.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163fuvaqklr.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163mwxnwwzf.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163ukqxgpip.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163noapwejv.html

Py:   x in arr
来源：http://www.sxryk.cn/163ovpkrsoo.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163lcryhohf.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163rzgsilvq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163okeyuzhl.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163avlqlshy.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163pshcskrh.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163hljaqqoa.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163oskupsvh.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163bzltrdjx.html


<!-- 参考信息 -->