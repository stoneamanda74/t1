外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163kktlqjsk.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xminsgdp.html

Ruby: return a, b
来源：http://www.xuanzx.com/163lwvwbebi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ctmjgcvr.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163fejwqacc.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163owvegvso.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163czjehemu.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xufsrrmc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163qjfspylr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kwgvqhyl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163wmzwngqe.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lcoejzwa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kwdoemtp.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163alieofta.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163hsifbaky.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163lmaoppls.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163hzyndeeu.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hbkzvcay.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163zcstnkrg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163ybkbjzac.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163uqwjtkwi.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163dyjkkhdj.html

[C08] 闭包
来源：http://www.sxryk.cn/163dzofnxmt.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163zevamasq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163qldiudtb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163jrvwiawv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163nxqkaujq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163xbdansaf.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163hmrwzqbn.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163tzszyqtn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163gitjotls.html

[C09] 递归
来源：http://www.aibaodan.cn/163vjlymzow.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163cpflwvrm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163bxbjetyv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vieckksq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163sbqjwbyg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163irzprzib.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163rmklteva.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ucsijjhq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163mktoixnh.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163mclnzckh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163zbaommeb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rkkhflme.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163garplzsx.html

TS:   同 JS
来源：http://www.xuanzx.com/163xlwhhabu.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163abgpdbrs.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163czidkxpp.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163dzyyffrt.html

C#:   块级作用域
来源：http://www.sxryk.cn/163chwziufs.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163bpsvpicz.html

Py:   from module import func
来源：http://www.xuanzx.com/163ppfzwzbs.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163tcjgouwe.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163zpgdwapd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cnadhbvn.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163jxoilous.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163peegwebt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163pymaxcwo.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163unncswph.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163gsznaplx.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163yratbnie.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hlazrchu.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ntflbgxb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163syqhjldy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jbusbmig.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163hzyusvta.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163zqlmhwoi.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mniukbeb.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163iylcqslu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163baxxanln.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163srpjodks.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163irggjxxi.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163urcpwknr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lihhmkvd.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163wrmywucu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ghvafehd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163cufnxxjc.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163hxwcpwpz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163uoriswni.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163snldmleb.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163tozcdgvs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163brerdqih.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163aactptgo.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163aqxpjsyq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kityufno.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163kypnlfah.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163zgvhewpe.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163pwgunquc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163tqjvwuar.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163nxxtqjbn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163dpmixxhw.html

Java: // 无解构
来源：http://www.aibaodan.cn/163eexiwolb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163gjguxooy.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163rmeyjwmz.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163guqenzcu.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ruktbybc.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163jthxomco.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163kkfgmvhv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163xcrfwwjh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vywkvxga.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163sadiuuah.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ohomjkud.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163circbugj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163josurger.html

================================================================================
来源：http://www.sxryk.cn/163qftlhwri.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163zgtkwpgj.html

================================================================================
来源：http://www.sxryk.cn/163nqmmpoof.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ftgnajnt.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163qjvlzyrk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163shumrfyj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163jctdlyxr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163uluhuwcj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163oselghuh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163euqkkllz.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fakpgrtu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163jsosyqoi.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163tcrdzgor.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163tblpaiuh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163eyaiiiqm.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163mvtltjeo.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163yzrjccds.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ahlbpjmu.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163addwztky.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lkdzxwfl.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163bqxzbwgt.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163fcqccqbb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163kafbcbaa.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163hzgwfhvv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163gzycsbjn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mdocuxyo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163tixntrgf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163iexbafcm.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163njalttya.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163fkvrnzmd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163jwrcqmvg.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mooezbkk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163tkjobfbh.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163ynrvhftl.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163aqtuncdb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ijrhddmj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163tfcryznk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163geiqsrle.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163cylcevdw.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163esvhiaof.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jvqnfbnw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163pcinkkjh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163yiijgtns.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163fkhoagdq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163drficfvz.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163uonrriaj.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gqcwcbcz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163swisdjqb.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163kqbdlxvc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ydsvaqkz.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163fdnibtpz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163pkqrikso.html

TS:   arr.length
来源：http://www.xuanzx.com/163euraerrs.html

Java: list.size();
来源：http://www.sxryk.cn/163rggpetdj.html

Go:   len(arr)
来源：http://www.sxryk.cn/163mvecbnao.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163pgcymjgz.html

C#:   list.Count;
来源：http://www.sxryk.cn/163gjtbkgyw.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163oazjhdhc.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163nsmawfky.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163llefciox.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163oobkalar.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163thxvdvlv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163uqhdsday.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163hoocslam.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163xnbpiucb.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hbodehxg.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dpfksotp.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163sbisdltn.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163kpsrfanp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163xykzfteo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dhqgrhbg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ykngznjj.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163txcyferj.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163krsfmsgm.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qljqbssp.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163rbnxvyot.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163ggfapibv.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163prqbtbmk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ylfacvtg.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jssfgeor.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ubfldrwe.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163foqnqmfb.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163qdjibvhy.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nggswpqy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163zvsdhjqi.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hfswwrii.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163eutdswqh.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163niutmrwg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pzwvlcoo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163xcjzvave.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xznjnoey.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163oprdscql.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163rzcpqjwr.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mvxyekij.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163gpzckyqo.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163fxjolcca.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163cdmfvhsl.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163fjsvbtsb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wpxncinq.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163kxfgkalx.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163rwaboalq.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163okzatjvo.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163phlqgfpx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wyggpklt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163eefskuxr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kittonyv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ildvibub.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163mmcdqavj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163xzucfrnf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163wbsxveko.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kecrprgy.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163zoeuetux.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163zvcdkafu.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ejxufpgq.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vkiulszc.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lmwrcjia.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163lyegturl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bzevphga.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163huddufdk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tsbuaxss.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163cbeytdix.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163hsxovkxh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163alpyevma.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tuncbaeh.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pacgvzfx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qulwabjx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uvodooko.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163fihdowox.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hjavzesp.html

[D15] 去重
来源：http://www.aibaodan.cn/163flyemdst.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qqqgmibe.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vgswhrst.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163helnjgof.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163jufujlgq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163edpenkfa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163bryphqig.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163zvccvwej.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ejqpaclk.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ukwylyay.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163gjfcxlcz.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163wqooxbkw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163eornwger.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ehrpzxxa.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ucynfarz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163zrdnckro.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163tkqbbuml.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163wnyiiwju.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163gbzratwi.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163twxqhevj.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nevozfin.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163wnibqzbi.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163suraiowz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163puvvncjy.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163jvlndktx.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163atltekop.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163qbazxcvi.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163uwkzmhfd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163shyihbkv.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163cjxthjab.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163wolptdjo.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163tbxofexq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163gnlkzkea.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163jocjzqzw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ikqhkbao.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163tegpeawr.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163zbzepylr.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163zlvwwkzv.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163rhywgqjt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163mizeemgw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nqyqfoox.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163egdgqicv.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163yovuteyn.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163jjkvdkss.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163cbcqjebl.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163vvfqmils.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163oixvgkjg.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163ilwufmxz.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163kabdsiuc.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163doewgeck.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163podipytm.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163glecufnt.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163jcntyvxa.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163ohqavnlo.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xopcewrg.html

Py:   x in arr
来源：http://www.sxryk.cn/163aokbqijy.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163llbbzscc.html

JS:   arr.includes(x)
来源：http://www.aibaodan.cn/163vlglotoq.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163kvyfdcgj.html

Java: list.contains(x)
来源：http://www.xuanzx.com/163qiygniey.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163xdylgkqs.html

Ruby: arr.include?(x)
来源：http://www.aibaodan.cn/163encmljix.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163gdfncruu.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163kncrdyup.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163kwlkuaxi.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.xuanzx.com/163iywztfpn.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.xuanzx.com/163ikauegod.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163gmilelqy.html


<!-- 参考信息 -->