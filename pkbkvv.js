外链999!wailian999！

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163iygzhmnp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163iertnfxm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163rdshiqfj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ivrekgcy.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163rxwoywgv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163kdszmdsp.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163vpbficxc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163lodffxqe.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fdwvjflm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xzuzbmjh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163lpzekeez.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163sbuswzzk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163amkpfcxd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mdddobxl.html

[C08] 闭包
来源：http://www.sxryk.cn/163krahckmm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163afwsmbuh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163cckabrsz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mnpacrst.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rjfxdyhj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ujbgltkn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163yjsnhxvz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163kxzqvqmh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mfodfuhr.html

[C09] 递归
来源：http://www.xuanzx.com/163ynbsiwsn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qdjxgyxw.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163rtfluikr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ebadsnde.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bkokrupz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163pkhbrfvy.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ldrgsdwo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163xsvpvvij.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163raxckrxy.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163slzjgzip.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163wlzatulk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163wwlrgrrh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kbsxcqdx.html

TS:   同 JS
来源：http://www.xuanzx.com/163kgnviywa.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163brhhkwck.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163vkiiioxw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163gjwpjaxt.html

C#:   块级作用域
来源：http://www.xuanzx.com/163qtrutuov.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tnbtiwar.html

Py:   from module import func
来源：http://www.xuanzx.com/163egwnafyf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163wbievjiz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jvzradka.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163rtakxwrs.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rjjxcusf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163eiumpdqu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163uorkjoxh.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163sdxpcrji.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163smkaaoxr.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163pnsxuqko.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163zdcfkusd.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163xlvbxooi.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ayiqllnh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163lqlbnbet.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163hkojtrvu.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163kfyiyzcc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163bcupyixd.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163yanoykba.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vfalgtmz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eqhsflfi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163wabgmmtv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163lnjcvtqz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ebrzyqxt.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163xnnklili.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tvxjbhlv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163ekmabiqx.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163jteiaeca.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163geijtfuo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163dhaurlbv.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163omcusbwn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163icrywbfb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163lahrfbgy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163nahkiczh.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163qjtattzp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163hxxifgaw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163pkafgmhz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gkadtled.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163zqvlfrjb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163lsjwbkko.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nmzhpxcv.html

Java: // 无解构
来源：http://www.sxryk.cn/163ckorvspy.html

Go:   // 无解构
来源：http://www.xuanzx.com/163inrdibob.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ggwixcqd.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163texnsmsh.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163cqlzytyt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uuzswatl.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163dsxaecvs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163sburgprm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163sdxlqtzg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163lfvnyzyp.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163dnutoqdw.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163dbvwewme.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163gbbldfkp.html

================================================================================
来源：http://www.sxryk.cn/163exatkmwp.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163klsofdij.html

================================================================================
来源：http://www.xuanzx.com/163portvocs.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ysucipgf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163bmbepgxg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qhjjyrxc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163yjvvvpus.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pyfovdkg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163eyalcugg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kpzeaaqv.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163xrqascan.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163spfenikv.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163mxzfgelt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163znldocxp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163roffkadg.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163yvfowfqr.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163hbajdzmo.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163eccstwbu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163wmlvinzf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163xgppqtou.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163gmhimmnd.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163xfzotaif.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163sfubbovo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163irorzpgw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163tyxugucu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jpxutgan.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163ztqldamq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163fvwjihdl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ubfokrtg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163lmckyvin.html

[D04] 删除元素
来源：http://www.xuanzx.com/163yksnhlog.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163oxzpsrwu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vihnjcbu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ibfzoxoc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163lcwkerfl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163meotwvgx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163ehimzilu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hfbirfay.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163bmrfjynm.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vlnlzufb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163kiksqhqx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163qiggtuim.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163shnoazef.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ycvfzuwu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163vjipwxtg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163sdkrioah.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xaybacvp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163haujnlxv.html

[D06] 数组长度
来源：http://www.xuanzx.com/163onpmjubh.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qpeavcbj.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163hghfktrd.html

JS:   arr.length
来源：http://www.xuanzx.com/163eroymeyf.html

TS:   arr.length
来源：http://www.sxryk.cn/163zaqakjzj.html

Java: list.size();
来源：http://www.sxryk.cn/163iikeyxho.html

Go:   len(arr)
来源：http://www.xuanzx.com/163eutxxxgu.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163eihfuwzy.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163gwkqolgb.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163zxkmfsal.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163babxkdvl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xcvufwjw.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163urdghenh.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163lrqgnqbv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163cnrhydff.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163qedsumjw.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dgyvjttc.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163hjrppcek.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163qmxocuuj.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163bpdhrjvx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163xzbpsnov.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163mjemkmgk.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163fswavbye.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163enmuostz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ykbfzsxp.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163bjtmsomq.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163mwvagahx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ytzfgoxf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163vsbnjkoo.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163azbgtjge.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163fstblwkr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163rfpzlplj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163mytcepjd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163episevcz.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xjnyezam.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163qhlrhfsj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vvkpornn.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163ohrhomsg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163zfklmuzq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wehdrvri.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163krndgsiz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163abwxhdrz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ezhvddhm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rqcgpaad.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163oqojvmma.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bfigwkaz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163mghlddbk.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163dkxserur.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163uwiezafl.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163wcfpimdh.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163khdcdgxd.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ndqkpdsv.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163nehygscg.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163prsrrvkc.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163kfvhchvd.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163uekbivhh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163cptphjpj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163nmndmduy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163sfkhuoor.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wiqcxstk.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163hpmurswv.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163lzfajkie.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163clqjdhkj.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163knanumte.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163bkbhnygo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163nggnwsaw.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163aroomjaa.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ficwqqry.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163bujlzwht.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ogavidss.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163ppvmdpen.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163thxlpvxx.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163fsmmmklg.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163ijxhumyr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163mafjeoce.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xqfmoffw.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xqswdrak.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163wygqweic.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163huhpanmi.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ptfhdlwx.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163svqzymtr.html

[D15] 去重
来源：http://www.xuanzx.com/163ugjwvhcn.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163bikawghh.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163raanpiii.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163vdkllnwl.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vsnfwxec.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ejlenqln.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163pcrlkodl.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163nxpxpmmv.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fthmutwl.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163dbugwgfp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163zetxdssx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163qzebafua.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mjsrwgej.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163cwwjsieg.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uglssprl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tgxiqcld.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163jmyjbaey.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163xoxrqpbt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lzfghzfq.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163zzbwdzmb.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rmmguaiu.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163xgagkfle.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163rcelfncy.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163znuxoqeh.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163bnxbzbch.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163fpsvjxys.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ztmpezcb.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163qysvmwfy.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163vjegldtj.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ydnncjij.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163ezzgqjfk.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163msktczur.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163dcfweryi.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163kizduqcd.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163bbktmrtv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163pxwvdvjq.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163dkrfynkk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163vmuwkhfm.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163wukbpqxo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163zkdsujio.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163acufpjzw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163ixsqqqku.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163plshrobc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163wxpdbylf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163mpeintxm.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163zjiephpj.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163mmdxrnyz.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163trarykyw.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163qjfzmeeu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163aivleppr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163wcqigoje.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163lyvjyxic.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hylxowet.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163prhnkcwo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163sdzzbncr.html

Py:   x in arr
来源：http://www.xuanzx.com/163hagfpgmf.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163eqbnlrjy.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163piibggeq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163qpkyhskh.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163zvublikc.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163lwdeshpm.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163kaurqckd.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163mnqgmibi.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163gequfbyr.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163jjxfeolz.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163daigvctn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ytwksvml.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163bykkjqcm.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163kuphojkv.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163ylbipomb.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163cltnmyym.html

C#:   new List<int>(list);
来源：http://www.sxryk.cn/163albcdbbw.html

[D23] reduce 累积计算
来源：http://www.sxryk.cn/163ypnfzyyf.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163mdlumzqd.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163kkffadys.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163lugtgifq.html


<!-- 参考信息 -->