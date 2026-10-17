外链999!wailian999！

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163wgcznudz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163yaitxvcn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wnfseypu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163wxntrvrf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163umgtjaxn.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163qficgpuj.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tnaoahxq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163adfbzded.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163innffesw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mtjobuwq.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jsfzxysh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163xkkbnokw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163niasjvap.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163enggzsfn.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jztyjbpm.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163djrgcztm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163lkxmlbem.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163pnqoelbn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vzfmpjsj.html

[C09] 递归
来源：http://www.sxryk.cn/163qexblsii.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ingkhjrk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163hlyeioxo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ollukdgt.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hyekkfwn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163txnjyhrk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163lkxrkalp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163ymisphvt.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163wwemnkgr.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ogvxskhq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vslhpssb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hcpksbej.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ipxlrija.html

TS:   同 JS
来源：http://www.xuanzx.com/163dwvvzsmo.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163qfffxkbs.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163qrebuxmh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ycdvsrix.html

C#:   块级作用域
来源：http://www.xuanzx.com/163ypdqsjhy.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163tsudwdlr.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ulyjfhdu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ungefgla.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xnnyexak.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163nhjmklky.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163mdzkdvcg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mkiiicxg.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163egrwamwe.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ywmrkljs.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ldoqwnem.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163diiyeuix.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ytvuelks.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kkortcar.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163brvsxxfe.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163abxlojcv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163xdkhbokr.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163fhtofvyr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163varauzxi.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163agptizda.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163njygubcq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ilcfbfqp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163xpwixzgt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163rjeijukj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kmaquckk.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163qaxfpubq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mnoassko.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163vikadzsm.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163okivnixy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163cejhogpl.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163fgbhyyhz.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163uswujntm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163simuvlof.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163rhwjcflq.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163csofrlxz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163zvcurtac.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163lalhqjri.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163wbqecbof.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163skeovkhg.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wcpienbb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163qpuzailg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163ftfgdwpv.html

Java: // 无解构
来源：http://www.sxryk.cn/163kujyxamc.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xeaywyrc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163slxkrsrx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163egektncs.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163auitorqp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163tbxqjkav.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163heywkwov.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163qxvuenec.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163phdqzwgo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163makdocis.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163hkqlfeuv.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zvrosltz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163gweuursp.html

================================================================================
来源：http://www.aibaodan.cn/163xowjaszm.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163zwkdpshr.html

================================================================================
来源：http://www.xuanzx.com/163plhshmsm.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ufvxbmtm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163lmghixzh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163lgacppat.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163gcdahpsg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163xzmoikgj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163rvkkjvzw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ckamdfgk.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163kzqjzzla.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163fuascpdy.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163crbefjkp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ohdadbyd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163bvmtqwxm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ndfphxkx.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163cyafwamm.html

Java: list.add(4);
来源：http://www.xuanzx.com/163fbkvlgmy.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ztrurnhx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pxgpscex.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ohgtqykx.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163imgqcssm.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163edknfumb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163tsgzpuuc.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163jqnokjaf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163ycempqck.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163lveamkaz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163znpqfwxk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163twjcfqvm.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163sckazflc.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kntffmpr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163syoofonb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163aqhqkwud.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163qsqtbajp.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163dsgtijkk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163hplhyxrp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163zuukubjr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163arkrpepi.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163vxyhrulp.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163fjaqvsrv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163aedprmjj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jcuylkqr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163cflsnmvp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bqhbbrxq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163pzwigvuj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163wbatuhvz.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jywnmemk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163qjedpckq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163pmnnwxxx.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xdlqxaod.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vrkuazpv.html

JS:   arr.length
来源：http://www.sxryk.cn/163ohzmykpm.html

TS:   arr.length
来源：http://www.aibaodan.cn/163yusawwdb.html

Java: list.size();
来源：http://www.sxryk.cn/163zhlorypi.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ileukjth.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163rrbhwolz.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ygrrxuqp.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wnisfalm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163xkvjozsb.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ckondult.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ilbnmyvc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163trusucjm.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163slklebsl.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ogocekjz.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163jtugqqbv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163nvzfxavt.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163wynfhvnz.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163cqkzglfk.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163nynfipna.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163hlxggwea.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163npivaput.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163cwgwjqhf.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bzstcofs.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163bteinofl.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lhtbmvqe.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163jnyimuqa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163qqalvamr.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163dnzyhdvl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ihoouqej.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xggjuspt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163gdonrsvr.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dfoyoexq.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163okkertvk.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163dhcakxzt.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163cdkwxfzp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163aucltavu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fspmyfsa.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163mfoyjrzg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163zsvwzoax.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163eunfpzmi.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xwcleqbh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rwrnejgm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ninjewxz.html

[D11] 反转数组
来源：http://www.sxryk.cn/163xleqqhps.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163mdagvqss.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163qokzoknt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163wmqouatj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163ffnqdgym.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163zzifvexm.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163fkbvbzsa.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163djhrzvmo.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163pkwdhqbu.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163velaoliu.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163apaouxjz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ucwlhrxn.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dgadasle.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163abuarwur.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163xdxtvtkl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163chxpczsw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163ipbwbekm.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163bmlstrap.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163taosmtue.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163gfsbluic.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163wwdadfvx.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163kxpqpmxp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ddymgmyh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163tmefbwqb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163owpvqgkw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jhmguxpj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163dhxsasgr.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163euzcnouh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163olmtxumq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163gwutjrog.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163nvnkkfdc.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pwcxbpkm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163uozvyqwt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163ndkaigqn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163sjkuvsaz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163awcipujd.html

[D15] 去重
来源：http://www.xuanzx.com/163keubegii.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163fkczclhp.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163tcmsvmuw.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163snuctgoa.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163zgezhzck.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nhimgczc.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163itgtarwo.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ebnmaurg.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163mbmekjys.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163udemolgo.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163trosedhy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163vtddmpin.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zgcxuyap.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163edgqqjqs.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ydtektsg.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163ermllmcl.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163kgedrjqy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dmvevsyn.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ucmojisy.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163uyhbzyyo.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163buvgymlt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163unhxvwzs.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163anfzmqyg.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163yqftyrdl.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163cysedjrx.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163upfrukuu.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163tugitmrh.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ayoejqqj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163pxlufpwh.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163nelktuaz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163pfblolpu.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163prlkxxkl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163yezhclja.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163qyuchkqu.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163eomoadav.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163rfhggbsy.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163mxqhxxji.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163cbggdnog.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163akrwvplq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163gwvcsess.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tftmjvix.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163uuqfcwto.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163bgskvhsi.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163kmgbxbzc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163abymkdsw.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gbhkmtmt.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163iuazdpgj.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163kymghhvv.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163axdigufm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163aeshccxc.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163zuvtomsv.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163xvlnkgkj.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163walybmip.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163obuoiekb.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163jzjpukyd.html

Py:   x in arr
来源：http://www.xuanzx.com/163sjsilurm.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163aubsaphd.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vscjzmvl.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163vymlxyer.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163lxzpywwp.html

Go:   slices.Contains(arr, x)
来源：http://www.aibaodan.cn/163afekojdo.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163azfggbba.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163fuybonvk.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163zwritctm.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163rhlhmxsr.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163hnauwvvq.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163hgklntex.html

TS:   [...arr];
来源：http://www.sxryk.cn/163ujcwhtnp.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163bkvshimr.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163vdosfbma.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163ertcdoue.html

C#:   new List<int>(list);
来源：http://www.xuanzx.com/163sediwlto.html

[D23] reduce 累积计算
来源：http://www.xuanzx.com/163dzzkcrap.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.aibaodan.cn/163wrbpjrfi.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.sxryk.cn/163bhahemmd.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163yaqhcxru.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163rppchmmf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.sxryk.cn/163ygkfnrea.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163pvwrtihl.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.xuanzx.com/163blddfjff.html


<!-- 参考信息 -->