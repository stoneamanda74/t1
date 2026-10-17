外链999!wailian999！

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wyrdzrdj.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163kwawayql.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163huwfjnil.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163bvlfhvwz.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qkfvioxq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163nsdtfwcs.html

[C08] 闭包
来源：http://www.xuanzx.com/163gqegrwrg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163pjnxujpd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hixepcxa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pbnkouvj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163eugiebet.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163tobjjutt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163iiwztuen.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163tbxxvlhs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163itvshznq.html

[C09] 递归
来源：http://www.sxryk.cn/163mpakipjx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163ezltdjvh.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163eqrsckrc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163gwirwxxv.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163fffewgzq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163rovdymau.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163qwdwmyqc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qxutgqiy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163rjewqdff.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163lzifgdgw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hzhmqjzq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hodnkmrf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zvntjroo.html

TS:   同 JS
来源：http://www.xuanzx.com/163adzzaphp.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163cghcmzka.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nmnzptqf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163xleanpxs.html

C#:   块级作用域
来源：http://www.sxryk.cn/163fpqatvpj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163sntvwbsu.html

Py:   from module import func
来源：http://www.xuanzx.com/163tvcykplo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163desugxgq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163uzphblrb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163inglnprl.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163njbxlbbd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163nivpwjtu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ulfywkxs.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163unbkilfz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163afepdufu.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vurmjphp.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163khmcguqo.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ukcyzgjq.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163anoqrlia.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163hsxnmaoo.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163swhgunvy.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dgocfyjl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163bkskihcr.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163hlazobou.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163xtlmphct.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163gjibsrtv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163fhndumwb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vtjmftri.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tzpacjnm.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ehlvhiqw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163daomrfuu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xxcolpaq.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163tlgvvxiw.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163koyajnkd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163berlagvq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wsyyzmmv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163hbghcerl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163oxfwoazb.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163iiqivqyj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163tzxfeigc.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163uhddmumy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ztdmfkkt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bvxqrmxs.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163bbfcpkjl.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163slrwcopo.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163rckkefho.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ikilujaz.html

Go:   // 无解构
来源：http://www.xuanzx.com/163casepzcw.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163poodadgd.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163hrxmrpti.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163pumckard.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163bgwhdqml.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163yoewymnk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xqfmyhnw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163thmmmjdw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163weyydiwu.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163xzdvohvj.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jpklzbds.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163hxynlsgk.html

================================================================================
来源：http://www.aibaodan.cn/163quyvaktf.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163owpzdfup.html

================================================================================
来源：http://www.xuanzx.com/163rtbaotbu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163haimknan.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163xbghkrrt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163flppgvln.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163yeeaclsx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163cghizxhh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163iqfgiqco.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ayospkdy.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163ktuoctcf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163igodzkay.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bvnafadi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163zbuiqvfs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163urmmfogp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163qgezreun.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163pdzwlyem.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163zgckmjed.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ehdtkfim.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163noyqasgc.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163zpqcqqbj.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163kcwosibv.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163fqxbfjww.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163znuxvtys.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163znhvatuz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163gatncuhl.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163fiwvkfpv.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163vvjduqda.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163siuewftv.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163lvbrgzti.html

[D04] 删除元素
来源：http://www.sxryk.cn/163smdyinke.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163cmomoqgy.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163kexmbnhn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163coiebcry.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163rwxfpcdf.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163whnbzyul.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qinqhyhg.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163buuiooxi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163lpkgdngp.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163olqegham.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163sxvnqlfc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163bkhpqauu.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zqpxulpk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163kvfouzop.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163btwmbzlq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163lufrhhzr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163sxksczqm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163nmqogflo.html

[D06] 数组长度
来源：http://www.sxryk.cn/163dmbyjbim.html

Py:   len(arr)
来源：http://www.sxryk.cn/163svesmbhn.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163wykdpkfe.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jmntudys.html

TS:   arr.length
来源：http://www.xuanzx.com/163mhrynxxs.html

Java: list.size();
来源：http://www.aibaodan.cn/163zfxnzqsz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163jtkpygrk.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ytbylccl.html

C#:   list.Count;
来源：http://www.xuanzx.com/163kzovmgxc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163jvaxazes.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nttbymem.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163lwjqypnx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163llncihsa.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kbqzrhjj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163dmdfknjc.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163cixnqibz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163tmepbnwz.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163zkntgboo.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163nqwjsffq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163labqbsow.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163pouhuuee.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163bimsecpc.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163schmbihk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163rxaxhzjj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163znbqsbtf.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163mmjwcwiw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163oipodefy.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163omtkmhcw.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163nkmehpum.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163iqlirxud.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163pxadmmkv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xjhdrerg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163bmplrbvw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163enxfwvoc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163dcotbhos.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163dfueoucv.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163urketnsk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163lmwrycyr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163icmjyaji.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163tfhlymqe.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163heqbghlc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163rplktsob.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163aqlkhoqm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163njfvzcll.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163iotwsmiv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163lhxddjsw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163rewzqdlz.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163cqzzvgsc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163aqwibvgh.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163yxcdocfr.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163jitnochb.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tmmnofmt.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163bdaymrvz.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163sxsnpgim.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163hsxivfqo.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163kuxemnhq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163pcubjala.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ewfxbsmj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163fitarmhp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163tsrmwrhw.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163kgkipzzc.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163fkzwdjni.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163smhbheno.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163gosjxxcf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163sahuvsmj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163qjeuhlga.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163unxzyxfr.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yunteavy.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ulaqcwma.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163eycfrbwu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163asbzwvod.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163zqpiybwm.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kmcfsofj.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163qjqwqdfz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rzctrxig.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dvzobfgn.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kczntbeq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163poyojrkh.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163sqajyuvp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163wifzzsir.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163gwpscukq.html

[D15] 去重
来源：http://www.xuanzx.com/163gywrcbyn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163agbroglv.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163pkvwzflc.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163fibnndri.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163tltlpxth.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fkkhvbrj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ftteaffm.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163mejndeyk.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ozpjnqju.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bpxycwbb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163teybxluz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163gjgnvmiw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163jpxbkfxk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163wrdlcech.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163baogokkv.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163myjjwkxf.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163tgrbtsuj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wvvglshg.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163bdedbdxo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163utjnqtcp.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163uoupdhif.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163qluofduy.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163giweveoe.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jccvirxd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163dduepnip.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ecdsphzl.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163gccxhkkg.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163ncvtgiwq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163bjuequkw.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163lovwcqku.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163evohrlpr.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163cortxnhv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163pnlfbtef.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ojupfjsw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163qqozovhn.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163uerjgnfe.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163sledppwt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163rtvkeeyo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163rtugbunq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163qlamcvda.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ipwjdkha.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163gdiognxj.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163irgettam.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163pnrqxpdf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163cnnjckml.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163ihafrlcw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163iwyqfnkh.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163glerrgyb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163tzbesygp.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163rqlsbffb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163varillvy.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163kyjzdtrp.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163dkxtkbwv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163kvutukdx.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163rlsqvrim.html

Py:   x in arr
来源：http://www.xuanzx.com/163lqmzcylz.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163loluwztj.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163oxbiodkh.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163xtflfmat.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163lzqtsnff.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163pddholoh.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163utbzagmr.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163ebswdgyv.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gpwyhmlu.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163oeirempc.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163cicxvqkf.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163vgelcqmi.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163eshcaywe.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163arkyqwbx.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163ewgufyxu.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163dvbmzlwz.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163raojzpka.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163ydsoultz.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.xuanzx.com/163npodgvdy.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163gvigtgrx.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163cvlyacsx.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163wjkrfgds.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ixuncfvz.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xcyhbfyl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163zddjxnja.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.sxryk.cn/163xhcumnit.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163yurbmxbm.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.aibaodan.cn/163bdvvkuit.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.aibaodan.cn/163mxlgtfqx.html


<!-- 参考信息 -->