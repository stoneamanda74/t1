外链999!wailian999！

Py:   return a, b
来源：http://www.aibaodan.cn/163tnfmtryu.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163nnwwltrr.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xqjlooby.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163aqwfjlae.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163fjxgyqlh.html

Go:   return a, b
来源：http://www.sxryk.cn/163gyrvcfxx.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163selyjops.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163fugtfead.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163urjlaujo.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163dbcihunx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163okuxbswv.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163slleyokr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163veceurnj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ytqqpcxk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ohhdarlj.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dtktyziv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163nohflidv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163kyfmifdb.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163labliefv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163phsradiv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163nvkgqcxp.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163ghoqbufa.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163optjxobj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163ultqvjyb.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mnlnsiam.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qsaxdvig.html

[C08] 闭包
来源：http://www.xuanzx.com/163vsoyoyye.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bzlnxkgk.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163cbntujzw.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163urzykwct.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163vlynqsbs.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163bkrembpl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163mrcilibu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163nvsskbtz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163abqjxxxo.html

[C09] 递归
来源：http://www.sxryk.cn/163sddelbti.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mfezrjaz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163guykrpgb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yecvmoju.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163heyiiibr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163rfwybxex.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163coeiktdz.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163vnbowcbk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163cvocyvav.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163wnguxfbz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163plrqegdu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163meygjtax.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163vgtuesau.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fhgwcaue.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163fuytowkl.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ktadpooi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vzdtllre.html

C#:   块级作用域
来源：http://www.sxryk.cn/163derklisv.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ilxemgix.html

Py:   from module import func
来源：http://www.xuanzx.com/163qyomjkoy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163gbicrltb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163nudomdor.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qjoqvjjg.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ofpssgwz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xpkmimqc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163jtgckaft.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163hoyjiqla.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ulkwdsht.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163rnsuudco.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163esxwabiz.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wuhafshc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zkynbzbh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163xaonpnca.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ghsjiqjq.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zmajaove.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163qsfglnzq.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163ycqynpoo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163eocdjogb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163kdoxzmnm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163rxnbeopm.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163qtwshrae.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163hftgyqag.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163yiivlhdx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tievhdaj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163uzdogcte.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163rbokczpg.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163vxegsilo.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163zdianawv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163hwfcweyg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163zjozxizl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163phbyyihj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163bwgwkxss.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163asxulxud.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163kuevgqyi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163tgmttoha.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163wujmomhn.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163pjhmqesi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163msdnxosu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163xtuvcvph.html

Java: // 无解构
来源：http://www.xuanzx.com/163hluionrk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163oztcwywr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163unwadwfp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163pwqokdkd.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163eycblvgy.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163kwjkjkvm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163waohfugt.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163iidxhyyl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163xypqqpnv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163lglfcbjs.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163svmlnvom.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163jslolswm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163pjstreev.html

================================================================================
来源：http://www.aibaodan.cn/163irvnnpos.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ykimgbzl.html

================================================================================
来源：http://www.xuanzx.com/163xtacsqjz.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163pdrphmmk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163kyacjpyk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hnbfwfio.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163tklelwvo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163mlbazkfy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163ojgzibgu.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163daifnknc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163rgvsugud.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163yneztxez.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163szukalrr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163croiumnr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163lwahcagr.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163tlayuzfp.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ybyljlap.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vvsnyrpt.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lpecbspq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wsjfvvtg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163qhwvdenc.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163demqzmgf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163isdvtofa.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163czdqooxb.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ssrbawvz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163brklruei.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163vwlwojdz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163weergyod.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163vpyszebz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vmalfpen.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xktqlcdd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ysrjezow.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163hymgdbso.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tjimhbvs.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163rhpfbftw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163suuyawxx.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163nqamncqk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163phltekdb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163pcyxavxk.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163mgetmnzr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pctpzxzg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163hjztlhst.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163icvvpjcr.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wekjevqr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163yqunrxwt.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163qeqxeheb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163phiezhzi.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xnxhnqjw.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163yjlzyupq.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mzzkdqpt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163pcyxyylw.html

JS:   arr.length
来源：http://www.sxryk.cn/163qtmmpesc.html

TS:   arr.length
来源：http://www.xuanzx.com/163latmxggi.html

Java: list.size();
来源：http://www.xuanzx.com/163akwpfycy.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163icwhjcxv.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163lvlmbcbj.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163rlkryeig.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163juxkqatx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cachvngv.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163taosfrhe.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jmmvloay.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nzhaotvk.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163aeamvwpm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163wezcumen.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163tygakwdz.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163uylzcvzb.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163tvpiuooq.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163znztvzme.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163kvfefags.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163dmgaxqbw.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163eiygkqlp.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tapttvip.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163nxsrzokg.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163bosmpfcy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cwtambyz.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163mxwunvag.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163jptdkfrv.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163ppvnohmq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ltvsbltt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163fyzwatcd.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163uzpsmnka.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163wgsgaepj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163tqwknqgu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163fkojboza.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163eugumkeh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dsgvlldv.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vqgtivnk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hdvwvxxr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cpiskswe.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fjuqkaqh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ztdofntk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163gqwrqgct.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163snhiqrmr.html

[D11] 反转数组
来源：http://www.sxryk.cn/163gggnhonm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163waoepffj.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163lwnocuxk.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jqfhopla.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xsnwrkic.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163tzqqecqt.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163jczkfkrp.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163nxpaapir.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163psfslvqq.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163jdkbmqen.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mfmxbrhi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163dakxojic.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ytpmyfnr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163rqrfauuq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163qqndacwb.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163jzewhwmw.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xjskmxmd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163qtuonzqm.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163lwrjfdwl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163wontyaxf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163syuepqsg.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163bjbnvwiv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fyodrbti.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lnooyrqb.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163dvnaknzu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163ugljjosl.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163gomopziq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qrgpcvzb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163shwozckr.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ejvkbvee.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gnkygxqb.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163gnbekvsr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163puijfuwm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163eyvjqall.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163baekilqg.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wmshsdui.html

[D15] 去重
来源：http://www.xuanzx.com/163qgnzbitu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tzzcvfdj.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163pehesjeu.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163lxsmwewr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cbizyegn.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163tpyiiivs.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163vebgpqdd.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163esqhdjvl.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163bfaacrxa.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163dfhjzblj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163axnyifqw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163wlikmgzy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vstdwbcq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rrqozssd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lfbgyaxy.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163byuxvbxz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163kxqnxdsb.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163pnzilumh.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bjgpelql.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163duoltbss.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163pazfdona.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163telsoynr.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163arxsnxgp.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163gikcyghw.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163souxahbo.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163aservdlw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163dqpkzkaz.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163qvvzgoby.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163fprglixg.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163sqmrgpio.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163slnsxmmr.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163puflxfue.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163tdmxuuen.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163yvpmtzuc.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163qykdhtzx.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ndunfhjm.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wyyjtqkl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163eocpshun.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163gsjnvnhk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163coukigze.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163uzdphayo.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163mqnxdlfe.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163tpauzoik.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163irzgaafe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163gospwfok.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163mixbwcci.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163dbxrbphf.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163sedapyvk.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163jxzsxcth.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163bbcnxlyn.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163tpaaelsn.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163vloeseaa.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163yahlmmcv.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163avsibuni.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163dcfgxfxs.html

Py:   x in arr
来源：http://www.xuanzx.com/163ndktkukj.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163bcweivjs.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163euvvtqdf.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163babkpwtd.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163yngzmbio.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163avjgivde.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163unbuucyi.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163xipgjysp.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163wrystbht.html


<!-- 参考信息 -->