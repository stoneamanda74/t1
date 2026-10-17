外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ggisprkb.html

Go:   return a, b
来源：http://www.xuanzx.com/163jllzbkry.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ijlrayxe.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mdagaawq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163vpzqvkky.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163nnvxiejs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163nuqilfqe.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163srocjspq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163yvyygvuf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dauvhwol.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163avenutlz.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163atvjsgyu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ujgyotqi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163cfmxaikg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163tnbkdmrc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ziwtuqmi.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163nwnqawvm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163hpfcnqhq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163bagubogj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163puqnjjtx.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rpkjxnzs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163gbopxvob.html

[C08] 闭包
来源：http://www.aibaodan.cn/163sxgppqql.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qmhythww.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163cezsgnzu.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163uyabdsky.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xryxivyg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ukhrqsyx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163qkjghdrb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163pfcciodf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163upgxussr.html

[C09] 递归
来源：http://www.aibaodan.cn/163dhitfcpy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163yczwsuly.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163vkwrdxor.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163dkedvoeo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ltevoupf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zcsnzlmh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ehvcbpbg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163mjwecwdf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163iejlanrn.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163dubgjyos.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163cyzzrvyc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163jltuniwe.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163hgrmiqjj.html

TS:   同 JS
来源：http://www.sxryk.cn/163kriraftg.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ckeqcccc.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163qqloowsm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163dbsvsfok.html

C#:   块级作用域
来源：http://www.xuanzx.com/163cujztrtv.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163thwpdevy.html

Py:   from module import func
来源：http://www.xuanzx.com/163wbqwancb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163bvotmttv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163syxinwya.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163qbyzlneu.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163drolmvpp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163liyvlypk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163aertvdfo.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163elehdsko.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163yweobgbt.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163veteqojg.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163eyghnkjo.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dedikkjz.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qdqdbjsh.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163uopboccq.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163sgbiijnu.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163webetfgd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mmpcyhfh.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163dtztxkob.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163evzpstks.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jfjthakd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163jjieqwct.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163fcrfgwtt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zkrbiizo.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163digplwde.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163zaofgoqu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sfbebnnu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163ymihclmu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163gbwndiyu.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ievwurgg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163gcofosnx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163fnfdslsg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163hrlyfbvi.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163mrghmqmw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vhftbady.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ncqnuiwi.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ylkpmguq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163pgxhevwi.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163nqwccvpz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163zrukkxit.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163byomcowp.html

Java: // 无解构
来源：http://www.sxryk.cn/163clhxevpi.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mhcnkjxr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lldljneh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163rujlqbln.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163zjzxwtrf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163fxrbtbdt.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163pakyqajb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163mwawrkaw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163rylnjiur.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163aaypgjyv.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xgucoxzz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163tzvvrxcc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163yrjohovy.html

================================================================================
来源：http://www.aibaodan.cn/163uuhlbyae.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163hiwqsoqz.html

================================================================================
来源：http://www.aibaodan.cn/163yuogrish.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163oihwjnwx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163rupxskxb.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163jbgoggfu.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163udcuukzo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163uzqqpmzy.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163svsqmdmr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163jmofwzbb.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163otrmxoag.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mbrdbfso.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163beqhwxij.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163qyuoftjp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163eencucvx.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163loqanlna.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ihzscyol.html

Java: list.add(4);
来源：http://www.xuanzx.com/163offkdfid.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163wfqqjgzk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163dsqzjlyr.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ykzgaued.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rcmlosad.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163pxmabibr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ytjmuhso.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163ruyqphwa.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163azaicads.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ggvdxahp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hdolugop.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163fhmeqvls.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163jdvevmeg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163dwwvnwpc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163qraxedus.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gdncqbwp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qxokzwbf.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163rbuzvpkx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ffihztjp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ltklurht.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163mjdpuhns.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163euiyyxci.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163nbomxqin.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163nqycndyg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163vxjqjuhi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qqdehwte.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163uulelhxo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163krioaxey.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163akjteqyg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wspafvib.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163zibldbao.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163bjnirxhi.html

Py:   len(arr)
来源：http://www.sxryk.cn/163vgpftktc.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163kiywrxnh.html

JS:   arr.length
来源：http://www.xuanzx.com/163vfywjrgd.html

TS:   arr.length
来源：http://www.sxryk.cn/163vijlxryf.html

Java: list.size();
来源：http://www.xuanzx.com/163sirtfavo.html

Go:   len(arr)
来源：http://www.xuanzx.com/163yfwwmphg.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163qrstsfsf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163bqwmgitv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fokmxyte.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163uxoguprx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xfbjxoov.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wfqsnrtq.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163tpptesaw.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163cmtrsrgt.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163zqzhdcyn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163nvpkatbi.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hupvmwwf.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163lznyocge.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163guwopukc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ldclpjiv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163terppbun.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163knykqlef.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163swprilnz.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ejqxnuyd.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163gzbiurmv.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163waltvzkg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163redyghwn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ntslxedu.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163jjkdfxwl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ytegdkzq.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163apslsrll.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163rbbxkqqk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163vqjprdiv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163oxnrtwqb.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163jobybkgn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163lifesnvb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163akbrsdtt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163mlkurcpr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hibtfnbx.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vnnnltij.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163wvqsegti.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163oajgvoih.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163cruqqvxj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163vaikylpv.html

[D11] 反转数组
来源：http://www.sxryk.cn/163oclwovzh.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163nlrhpjfx.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wgkthino.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ujojsbhu.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163kfkgznmp.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163esazstyk.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163rlhcqynu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ratichmx.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163pdoxjufj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163brgemeul.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163pwrlfihp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jdzaanhm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gzkmtghu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163aumpfrhm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163buumzhtj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163braubfwe.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163xkykbcfj.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163cvbmasjw.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ulatpypi.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163hodsmypx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163hxsssjvt.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163trbmyztp.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nchpkspi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163eotkqkmt.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ykujxqzy.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hxsutyim.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163lgdprnks.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163qarzebeh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163slmjnwbd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163xjixqsjm.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mqhtmtnv.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163cccncyqn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163hhhjouxx.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jcfzikby.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163dvrfeskw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163vufwsmpt.html

[D15] 去重
来源：http://www.aibaodan.cn/163lccjubiy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163ujvlzebp.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163pzwfmsnw.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163njyhuotj.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163svyvanxt.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163tidevbgw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163wzzkaypd.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163jtkkpmco.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zlxzeoon.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163zdcvsztv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163tfxrcigp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163safrwica.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163fxtxblcz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163tdezmpor.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163excfqtfl.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163wawkegna.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163eqocmsop.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163kevufrsu.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163evkbycpl.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163xdoinhlk.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163wtjpjwvz.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163frcxphrj.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163uvrqaohz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163ertpykfg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163ryqeiqzt.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163dwoeuiqf.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lfmreqqs.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ycgxhmzo.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163cvdljgue.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163pzadpglg.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163knktvurn.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163dwcoqkka.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mpgvodhp.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163udlevkjn.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163krltlucz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163owpjogpy.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163wdacvyba.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163fmfiegte.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163dwwkcwig.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163gkuzybut.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dljoegys.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163nyntxhba.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163imhzygdb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163tpjxfvmf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163nvlxwzxb.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163dkjatywz.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163goitrbea.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163qhnmwiia.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163ctzhkemh.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163mrvvfjxl.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.sxryk.cn/163yixoslnz.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163qikudvon.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163ryavsbhq.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.sxryk.cn/163bzcgshoq.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163tjqtkomm.html

Py:   x in arr
来源：http://www.xuanzx.com/163cxycrkrm.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163tzvlxkdp.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163stptbail.html

TS:   arr.includes(x)
来源：http://www.sxryk.cn/163zoldpcrh.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163tbhinsyw.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163qcewwyqm.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163zdyebjip.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163zibwerlf.html

[D22] 复制数组（避免共享引用）
来源：http://www.aibaodan.cn/163gwbkfguh.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.xuanzx.com/163gxqvqlie.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163jnxgjnag.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ululwimc.html

TS:   [...arr];
来源：http://www.xuanzx.com/163dlzwvzxg.html


<!-- 参考信息 -->