外链999!wailian999！

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163ecuywqma.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163nicjwihd.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163kqrrpmzu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nhvhdmll.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ucnpiwqq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163uhnhavac.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163xbvlvxmw.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163soswgsjb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163llxjnlqo.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163dljdyskc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163rylqezat.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163gzzsdhqp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163ifgmganb.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ntwlkibu.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163jdmjehug.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163kudywlyi.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163suunvcez.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163qvkbiulc.html

[C08] 闭包
来源：http://www.aibaodan.cn/163mtqiaxey.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163vqzulxxd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163scuthsvx.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dbkxxsuw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163npdnuunt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163qtpcutuk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163nqnkrzna.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163hymayclp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dkwxefbq.html

[C09] 递归
来源：http://www.sxryk.cn/163poudfoox.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163jvomvwal.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163tgllcfeh.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bitnfgxp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163agvqimha.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163jfkoqmrm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gbmxdehj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zhwrvwyy.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163pvpnwucp.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163riwqrxrv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ywkcfwqt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163litfgges.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163vbjojbap.html

TS:   同 JS
来源：http://www.xuanzx.com/163rggbucyx.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wbuavouz.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163mjgbhmvn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163jpvjgoui.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163hnolxqbc.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163nixiplph.html

Py:   from module import func
来源：http://www.xuanzx.com/163hzwlumnd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163dbekleum.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163cbhjamgi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wgzsbwsx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163bbcuzjsm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163uuwrvkrr.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ntbbhxyu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163cobmonuc.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ekkybjzj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163wvdqseul.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163suayxbin.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163huaavgep.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163yvgzquyt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xksusgts.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mhziqqqm.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163shdabpxp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163gqnzmoik.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ajtgsdtz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163uqhcjugk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nxnuwzke.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163kcltnnsm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163falmbqim.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163cwoscsqb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rfqnbinz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ocnlfhwp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163vvmilqyc.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163wskwzidq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ppvanjkd.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163eazpxxfo.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163frwcknir.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163qotfyfmr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vaepwkbp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163wpclulnh.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163rbmzxoyr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163klrdudsw.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163mrhzvgla.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163aupvoggb.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fwykqdye.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163bdybnpac.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163jgfkohpu.html

Java: // 无解构
来源：http://www.aibaodan.cn/163jrnicqjh.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ekoyngik.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ifxkmpll.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163ehxqouxd.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ymdwzlfl.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163rfucqqlr.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163fpzntxkm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163vibwdkmu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163vkxnhprg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163gatptyqg.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qhdfpxlp.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163hfmcbjgu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163eqscumsq.html

================================================================================
来源：http://www.xuanzx.com/163sleuatsu.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rzlwoagz.html

================================================================================
来源：http://www.xuanzx.com/163keztbokg.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163gabnkmto.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163jnwfbuup.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163euwvvsdn.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163oxsfbpjs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vsnuogek.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163opdpznog.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163xaagzxqp.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qtuubsxd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163brnpobck.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163olzpefdt.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163wjozcutf.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163wbfbsjpm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163mbexupfx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163tlrbecpi.html

Java: list.add(4);
来源：http://www.xuanzx.com/163yuuybpkh.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ibwperqi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pkaboqsk.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163zrnxuksp.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163cmygrxxn.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163loqkxtlv.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163stjrehfz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163xlbzhdye.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163xyupgfsc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163cfyuxpmq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163mayqulpe.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163yzhqrwyl.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163nvjiaqin.html

[D04] 删除元素
来源：http://www.xuanzx.com/163khpyxngw.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ucyabsyc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163tppjhhct.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163miszvxsz.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kssfvymx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163crywbgmb.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163diemhqnt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163mtjjuhkd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mdtpahao.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163qmtvqahe.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jrnczcxl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163squkmhqt.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163nmewsrsi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163mwqlwhnh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163ixovnqxb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163pwntlrmt.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tnupghzv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163omhutfvw.html

[D06] 数组长度
来源：http://www.sxryk.cn/163jlmqabyb.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hekoozjj.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163nawxdqcm.html

JS:   arr.length
来源：http://www.xuanzx.com/163qeassxnh.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qmteqhad.html

Java: list.size();
来源：http://www.sxryk.cn/163casneaev.html

Go:   len(arr)
来源：http://www.sxryk.cn/163khkamxgf.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163lbkfowfh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163csmrerrs.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kcvmmtrv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ozvmqrkj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ddyuxixs.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163urkcidmk.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163znwjlfvn.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163xnluitoy.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163ytwxxsrq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163zohwuxtb.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163irzfnbxg.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163nhxntije.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163iyexztoe.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163vpbiuavf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163jjqawzwl.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163enktnmrl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pwpefdjl.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163dbkhoqlb.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163hgjzhyzz.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163wdmuvnwa.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163qawbernr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163uxmcbcud.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163duqzjmvb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xrmsjclb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163bjqmhixu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163thcunlca.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163xfwsztqw.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163qjlxwcqd.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163kjcfuson.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163yidgrqrg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163tnlmoydl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cumstelj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163powhcqot.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dnzoawpp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ptyovdom.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163evqhqehm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163rrgedlhv.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rrzxqtrn.html

[D11] 反转数组
来源：http://www.sxryk.cn/163wvdozucc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163kqfyxmkq.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163anbnhuxs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163qiozygmo.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ajpxdjfb.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vngxmdre.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163kghugbqe.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163lzkxyims.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ckhrdnxy.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ocrxtkko.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163evtuirew.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163lsinxzdq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163huhcxsju.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gdymntvf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vmlwwexk.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163nnvzvqps.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pamymzss.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163iaoafscx.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ajxsgkxk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163gotaeuec.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163jogwqqns.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ecyizuug.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163uwfizquw.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163jvqnexbg.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bfhetbcf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163twotkoqr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163unobpceb.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163prjgwiku.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zukplsqa.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ygrdmhql.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jqfvuzdf.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163nvalqykh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163kyprhxgw.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163brbarrri.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163blusrcgo.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wgjuafei.html

[D15] 去重
来源：http://www.sxryk.cn/163lojnvzbc.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163oupezwmv.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163aonkvxld.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163vlqgpqdc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ytpxxtrc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163qvonubrs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163plodhmla.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163ajggyggt.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163tqkodlrn.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163dqmikiek.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163yadirpow.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163lgytrkcr.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163flklseyl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163quoglcbu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163wwnhqgqy.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163liiuuzaq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163klrbrmdh.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163hefdezow.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163indkgwfr.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163zyhzndcf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163rilgfgyj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163xykocbff.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163oreympbh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163rcrwfzja.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bmoghnkb.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163nupvfrrm.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163xknppkec.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ivwhjoxl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163hnaokcuj.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163bikprilc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mksbjfbk.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163qdkqlkhm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163faoxuktx.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163bjjjxktw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163hxgihmbg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163afyxvyhh.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163lxwdbyqh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163vzhsyxom.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163acjfxtkp.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163smsduzub.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hhjrqhad.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163nocpoyeb.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163uvohrgvz.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163mjgtaeyg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163zmcnkxea.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163hvdwzidc.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163ebvrxzms.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ynjanjuz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ocdbnyhh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163akwtmwaa.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163txychkrg.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163annzodqa.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163nkbicuni.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163dpwztsro.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163nywshrvt.html

Py:   x in arr
来源：http://www.xuanzx.com/163bewgjjja.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163bpuqnrwh.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163vsivibwt.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163uyssezxh.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163ajjpmjvd.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163kovnjhmi.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163jjemwios.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163reushsxt.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163igshjfmi.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163puwwjwmm.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163obukdhve.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.aibaodan.cn/163krgpnjxe.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163knkpbujj.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163bstendrf.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.xuanzx.com/163srgysbeg.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163gykesfav.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163hiuqbdsf.html


<!-- 参考信息 -->