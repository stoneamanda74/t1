外链999!wailian999！

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163xhrkcldf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163qurxzsud.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163vgpcxnfx.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tvwvheaa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163rfncraed.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163hfwbaidu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163fnjctrfz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163fegnvubj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163iegoupzk.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163befkzdzj.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163jycjcrgx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163zrnxvsze.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jlqcewzt.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163cigfcaqy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163vvrvcuqn.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163vbvgijko.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gdgkofpl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163owdghbfl.html

[C08] 闭包
来源：http://www.sxryk.cn/163ebkmhoxg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163obcbumpp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kgdvgqaz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mjcyappg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163javwuisa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163aqiambpe.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163bpcinubd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163alutksbm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cixzpghv.html

[C09] 递归
来源：http://www.xuanzx.com/163huoklodh.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163gkvgdont.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163qxcocaxq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163npwvuxbx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yklrfnem.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163jolcvdzx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163zhwsjrhf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163pskbzeoq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163iimpxgax.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163wgmdomem.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163fcjksjbd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163nsayoyut.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pkklanec.html

TS:   同 JS
来源：http://www.aibaodan.cn/163rsdtcbiw.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163awmgctat.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163xofmlqrk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163bgnomwdf.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163pghruljp.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163gnuupmwo.html

Py:   from module import func
来源：http://www.xuanzx.com/163soesxhbt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163xsfcuvnq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163wlqmugsp.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163nzvpipss.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163vyweesrw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163tfeyjnks.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163cbamqhvu.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163xlwtvsxj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163hgpsupwj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lmfteuvo.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fhpezbph.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qvsavhjp.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hdzwbxgn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163luynmvqy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163vzxjchyy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163xasuieau.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163vptzjvbg.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fuhufkgo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mqbxxlsh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163nliuvoxg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ghqhbeid.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mtdhmkul.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mkcswyld.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163dtpfksnt.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lykeocvm.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163cijzxect.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163txdnhbtt.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163tveicmwz.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jhankrgz.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163egjmkhqn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ulltlbdt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vakrbfyu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163kmycewdi.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163rbedlorp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163vupauhoq.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163txnfyvun.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163dtbznrpj.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163evmkifsb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163dphsdpxp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163qlrushqg.html

Java: // 无解构
来源：http://www.sxryk.cn/163ppirgwyd.html

Go:   // 无解构
来源：http://www.sxryk.cn/163uusbltaa.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wxzqdwaj.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zmykrofa.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163uuhidntq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163txysjqyn.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ipjiqeko.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163wzeayoaa.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163qlpzltbc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163akrertlm.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ervmoyvl.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163drrdbxby.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163gurjbmuv.html

================================================================================
来源：http://www.xuanzx.com/163aqbyrjzy.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163laywttff.html

================================================================================
来源：http://www.aibaodan.cn/163ksxmknic.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163yabwelyh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ysidmcxc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xtqimjth.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163mbvfgfcj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163bylwqtcw.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mkwtfmwq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163zorlebut.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163oxcmdefu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163ktrfnqia.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163tevdyxaz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163cgtseqlp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163kdfnqiki.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163yamnxkhb.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ossmlqaz.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163okamahmf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rtqcfykq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163mzsivmza.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163rqlkyzvi.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163bmlfzstn.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hwlugedf.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ktrjkhfw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163rnjyzbtn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163xkkxafmf.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163mockqgbd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ajsxsmsl.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163bttuokyy.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ytzgstxl.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ybcdglkc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rdfoygjs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mwagptuc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163cntvvrpf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163cwarqlns.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163wfrfurnr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tufjqjzp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163uddezbyh.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163hvzjljdx.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163nxpqtacf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qircwthw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163gtrwgudl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163zozpsfnm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163rqqetnnl.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mbavwiru.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163snbwtavr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163idrscbjk.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163iwgmcbfn.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ptjpnskv.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163vexblqjv.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163odplkotm.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ewemprqn.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fwgrpoty.html

Java: list.size();
来源：http://www.aibaodan.cn/163gwrfiiqi.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163omaqiczl.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163lrquabib.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163uvgklyzq.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163yqonjhwt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163dufvtdsx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163nvjkuplr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163otinhxun.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qwtkejxg.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163zaqogrmw.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163mjrjutsn.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163rtkwpgwv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163cqlckkrq.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163newzhzyp.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163lzcobepp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163gwowimph.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163wlpouojc.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163kanpjeig.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ngulfdyt.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163mbantdyg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163wwvijbew.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163jmssgtvo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163mseqrlfj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lmppgjhs.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163maoordmh.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hmuaghqb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163fgmywuxl.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163xucznexd.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163noyvwwsi.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ytarjoyl.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163iwufqobc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163hhqxwqop.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163dufgntlz.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163morgjfjw.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dioepglj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kplkohtw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163obmouvgz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163aqxatnjp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163oruwaanu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163wrumwokq.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bomjhjmy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ubtdxhfv.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163grujpmim.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163dpccnuos.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163mbnrqwnm.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163kpmqalzn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tuyaokkt.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rjatnwsg.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163rtsyvqfw.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163tkzlaoxb.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163thwsluer.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163bxkolhvh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hwsxfrrj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163yitzmlbi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bxtfmphe.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163pkkaslva.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163nvbgdopo.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zeargzqp.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163blomfnrv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163lodfueaj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zeovhefu.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gbcuuczy.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zaxvxbqt.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163awrnpesn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163pjujjhgx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163cxmxjycz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163smlgazfe.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hnnfwyqo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163xfsjsnod.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163xbdkbahn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163odjhlwkt.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163cfscnhcd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163jabmwbwc.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163vfzqennt.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qoyhqqcc.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163shpebbsf.html

[D15] 去重
来源：http://www.xuanzx.com/163vwrgazjz.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163odhqkwxr.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163zxlpcecx.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dtsvynuz.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163vggmuxtq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163drxaxvty.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lvtkmhve.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163rmunxrzb.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163rfpfwpmu.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163aukpixor.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ktksjbuw.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163yfrywbfm.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rvetbouo.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qbuggrin.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163lyftogmz.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163gipttaip.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163lqyetcbh.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163yblwbtwt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163lzkckujt.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163pcnhcnrc.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163lowioori.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163wewnlhwy.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hnjnmjsd.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163qonpkitc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xitaffkp.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163ptxnwtmb.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163frfaimwu.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163wyigaaep.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163ljpnnugk.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163qhbwpeac.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163pxmewcvv.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163smqujhsm.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163zvuyitxm.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163abgvmilb.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163vxycoabl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163rvlfrwek.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163fpkpwbil.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163vwjdsgrt.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163tapkrmvf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163nvwlnwcb.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163tleujsvs.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163hvyiicbz.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ojebrzvc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163pkarmxgj.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lfzwiren.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163tcusruvm.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163moqlispr.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163gretceeu.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163mwnwofyw.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ofrlrdwr.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163vkktusrg.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163gqimmlap.html

Ruby: arr.tally
来源：http://www.sxryk.cn/163hwbkemmu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163anwmpqff.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163zhkisjzt.html

Py:   x in arr
来源：http://www.xuanzx.com/163ypnzngsf.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163arueytpc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163iuviqffg.html

TS:   arr.includes(x)
来源：http://www.xuanzx.com/163ubcxcfna.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163leilzmpd.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163tgedsxzg.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163wbvnzbql.html

C#:   list.Contains(x)
来源：http://www.xuanzx.com/163gxwbtwta.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163hhrmzmyl.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163dpraqnnb.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.aibaodan.cn/163nmuqdckt.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163jvfabddt.html

TS:   [...arr];
来源：http://www.xuanzx.com/163zteezkmr.html

Java: new ArrayList<>(list);
来源：http://www.xuanzx.com/163jmxrfyer.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.sxryk.cn/163vdaxhccg.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163znnjgbtg.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163usnfudfn.html


<!-- 参考信息 -->