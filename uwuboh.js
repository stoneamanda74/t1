外链999!wailian999！

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163jyeewswq.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163iyibzumw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163rocafyui.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163poaihnvx.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163jbyuedzz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163aiwrbymo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xnjrgagl.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163idefizbh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163izvjonxn.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dzcjupit.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163xzhiveaa.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ffumwqiv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163qltlxyms.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163iamosxqe.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163uvuwlwjv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163inirvbko.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163vlvpjsva.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163zbepmitq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163azjgkfxo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qmeejdgn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163lmetiiil.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lcisamdx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vgtcropf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163sbezhxpz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163zrcjlfss.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ihqebzyo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163avkoqpiu.html

[C09] 递归
来源：http://www.sxryk.cn/163awprdxeg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163huslcdyz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rlegnrac.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163imncswph.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xykibncg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163thkgfnbo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163uiyehcut.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ffxuraec.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163smkztbse.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163yyaybncv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163mnasjacr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163aepqtjbf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zqgthden.html

TS:   同 JS
来源：http://www.aibaodan.cn/163ysuowsxf.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163iheclhwd.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163clqcvbdm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163wvxeawet.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163jiuzxpot.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ywjwstbb.html

Py:   from module import func
来源：http://www.aibaodan.cn/163bvnjzykq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163mksxunsk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163gmzeifwx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163hapfsyzr.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163wldxdplv.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163pfgwfxes.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163vmakomsw.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163pigizbnj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163zrucrkog.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163nhvotpfm.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163keibrass.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ycayyipz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oksimqip.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qjeglwtn.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163vaisqjvg.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163utkthaas.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163evmqpeim.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163sqsjkjix.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ktcpooel.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xauyrfcu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ryeurxrz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163yrowpamf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163oqcetelm.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163duajtflk.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163vlytawtd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163ubbdcpqj.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wyuoepwx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163ppjdiuuy.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163qbxzixfm.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ugcbaxxl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163phndgtfg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ubflurjq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163faycoxjw.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163nlpnkgaa.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163qmwuvqld.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163zewdhkst.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163shtotajc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163jbgnrram.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163cteiqlcx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163gptdhkio.html

Java: // 无解构
来源：http://www.sxryk.cn/163toaoglkq.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ubgatpmu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163yawntmwm.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zwmjfcvn.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163euocmdhk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xhoxkaku.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163wyfjehev.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163asazoliz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bvbbhheo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163kaqnjswk.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163bvnuqcvc.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163yzwjswve.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163pmhaloae.html

================================================================================
来源：http://www.aibaodan.cn/163rhseibda.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163hbhasgwc.html

================================================================================
来源：http://www.aibaodan.cn/163iqryvfqg.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ndjhwrga.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ylxqsfzu.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163gjsosrtv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163uhicvxko.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163cmkawugj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163pdyhcwvj.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163wslqtjqx.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163astwvfno.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zlmmvaif.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163nymiaofl.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ndwacjxy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ssiximgu.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ybximsmw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163jebooira.html

Java: list.add(4);
来源：http://www.sxryk.cn/163wjcgslge.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163iiqaanav.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ghscvhhc.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163fpsoikzk.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163fkpriifb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163roicoaif.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163voixncll.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163vthylpfr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163wawzymcx.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163kevtojoo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163qxnfzujo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163uimrbmyg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163hxomcbec.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qzzglqba.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163zeuhuhww.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163psawzwzw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163keimysed.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163sycwbxof.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163fkardqmk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tubfbtut.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fximlbng.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zllszsvf.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ooxsxgcr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163roawgtir.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163wgvoqbnj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163dqhzlgxv.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163skmfkyjr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163impjmdii.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163yogtactz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yheqajcd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ihiahlqy.html

[D06] 数组长度
来源：http://www.xuanzx.com/163rmrizknd.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163idhdiiaf.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ntikygmw.html

JS:   arr.length
来源：http://www.xuanzx.com/163xekfecwi.html

TS:   arr.length
来源：http://www.xuanzx.com/163xkhvdyeh.html

Java: list.size();
来源：http://www.aibaodan.cn/163ayylcinm.html

Go:   len(arr)
来源：http://www.sxryk.cn/163tlqbjnse.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lnfrlzlu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163bauecuvh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163higmkvqj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ixblzbll.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163eqwzbkcb.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ptvthrip.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fitjlbdn.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xpknujek.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163hcnnjadk.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163akyitzms.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163llvqonma.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163zukbrloa.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fjyddsmp.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163brhxxvkr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163hpfiboow.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ugnwwyen.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ajysxtbq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ovdbkmnp.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ekyvyjrz.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163mhhlzvhd.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163tgumqxcj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ireeelem.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163phixnvwd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qyzoebnu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163eahlurfj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vdqkxpcl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163vdgnetuc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163piingmab.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163fhmjfffr.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163dbomxnbc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163phmuzlos.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163rwvuzobs.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qklmdjda.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hwurfyqb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rkzglhwz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163sqgqfvku.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163yzgoawag.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163flwuijwh.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bpnrrmtm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163aaohabzk.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163jpyfetjj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163qbavgiow.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bquvdsot.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163oynljkwj.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163bwitkiae.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zcqikekb.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163sgyvyarr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163pexaowrn.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163pztfdszg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163slkavrnk.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ggwpjhhk.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hjfxysxy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163tcbkxtre.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ddbwrxdu.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163svlkhhbq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ciiztafs.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163txyalhfv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163awbbqcrs.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163quzjqqud.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163poacfrcw.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hkdfxpqc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163vgmewdil.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163oemfxhsq.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ewucdnfw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163mqkbgdvq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163myrmtoqu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163qhheqhcc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163uyhyjslt.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163yvctmxym.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163prepoiru.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163sbgmczpn.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163vftruucj.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fijampou.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163drpntsuo.html

[D15] 去重
来源：http://www.sxryk.cn/163fmosycvi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ymrtafnq.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163dtcctdxa.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163qjpvkbpl.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fqvcjkix.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163fvpowaew.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163bkypwfba.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163nlmietuo.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ujyryjdz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163vuglgxuj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163bqbphijm.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163iqwxybul.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vapcwbvg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163gqupndvm.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163pldwheym.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163brclbvdi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163srocbnfi.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wpswolnr.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163thqpktzh.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163difnbkyh.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163tatgcdzv.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163xnmuhymf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163jpvojxxj.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163obqzugzy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163yntbyhqn.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163equnqqnj.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ouezuxcj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163awqxzvuq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hdqfimce.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163fkaywkuo.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ldorvdcf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163samsfzwl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163yggikztd.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163uxicpymn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163sipjyjpi.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163npselawl.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163khfuqvuh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163aifqzsjn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163unmdszti.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163bqbmfeto.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163obagoije.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163vhpmbzub.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163twlsbcnn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163qgmikmrx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163ysrraajx.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163hmyqjsen.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ktxdpyxv.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163uolnmlue.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163xlqiiecv.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163lulpprsi.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163zcrookjl.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ekispfhm.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163krehmwkg.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163dwbpaepx.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163bdqmlqhe.html

Py:   x in arr
来源：http://www.aibaodan.cn/163sxbmhgsc.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163vasleckw.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163hiziwamw.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163jmztudwd.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163hawhyilx.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163bdkgqwon.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163azpdaeqk.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163cajjxpwh.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163ymmlbgnc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163ecsvlcoz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163tjjchfzw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163gzjrmuoq.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163kywqkxav.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163nmyttbnf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163pfthtvgx.html

Ruby: arr.dup;  arr.clone
来源：http://www.aibaodan.cn/163vfxepzsp.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163wmtduqwu.html


<!-- 参考信息 -->