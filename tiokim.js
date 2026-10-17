外链999!wailian999！

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163fvgtjgof.html

Go:   return a, b
来源：http://www.sxryk.cn/163ntltfruy.html

Ruby: return a, b
来源：http://www.xuanzx.com/163niiommuk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163tnyjezwe.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163dfofeppz.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ntzhzlzw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163myuwyglc.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163uyakenbb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163wzcvhvjl.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163ymdeuwbu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163kmoonoby.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zxkmkzhq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bjdaqssz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163rlaeoqcm.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qzjsvsga.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163xqomrqrv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163ogdsgztj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ropbabvk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163knhtwmaj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163nzutcjno.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163cffwlsgq.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jgsnvblu.html

[C08] 闭包
来源：http://www.aibaodan.cn/163nkbpgrxm.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163xxjgrooa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163aslbyzsg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ohrdhizc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163yokrwnwp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163yfvhmoae.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163hxuvfbnh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jqtosvwj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ezvlgqid.html

[C09] 递归
来源：http://www.xuanzx.com/163qphiidfj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163snlwbxmu.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163pfggucmj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mvgyswgq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zopafkgg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163wyqkhrkw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163alolixqv.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163lhmfsfpk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163przitcgd.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163yagitsor.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163tyleebem.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163nkzpvzkm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163dmdedale.html

TS:   同 JS
来源：http://www.sxryk.cn/163shopclpk.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163vgbciwek.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163bcfhouhm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163jstisgjt.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163qezserck.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163ctakcphe.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gntsogop.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163buhyefeu.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163rrqxuted.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163jzkiqjho.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163obhmtipo.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ygftailh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xawyjdad.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163skamttba.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163vkvwghap.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ajqgzxix.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ouxctfzj.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qcjxhqgv.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qusmkysr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163bewwrhwl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163kwawvdfn.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163blogzwob.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163jurksrcb.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bkkgympa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163wzvsgdip.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vrbekhfi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163trrhvrxz.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ggxcgeqc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163sniydqac.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163dnrvglko.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163urhxiymq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163hkxofglq.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163yiewoded.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163etohdrud.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wdoxecqg.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163psanqnqv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163dueidhlj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163fpgcnslz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163seuclflh.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163loiinbip.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163gilsthyp.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163locywjgr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vzvliyzl.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163gsdgwacd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ijqjsaud.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163arlnyqhs.html

Java: // 无解构
来源：http://www.xuanzx.com/163pfgilxzo.html

Go:   // 无解构
来源：http://www.xuanzx.com/163txxnbion.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163emzqmunl.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163bvlehxkq.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163vucrofli.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ymfjvggo.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163muqipnel.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163toqcrpkw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vuuydiwr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163ftncyvjb.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163zzsmwfdb.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163styznfse.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xehhjofz.html

================================================================================
来源：http://www.xuanzx.com/163yydidrtq.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163qgdixeey.html

================================================================================
来源：http://www.sxryk.cn/163fokrclim.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ihatqkfn.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163xotbaboy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ocxbaisp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163umzujddy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163zpmxanvt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163kazslvli.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163hztrclrv.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163afdayqvf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163qpekixna.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163blpckwtr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163bmbaflzk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163nxxsfmpb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163brliavmk.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ubzrxblm.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163nkkevczw.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xyaweykf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163uzbmoluz.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163jqkeodnq.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163elccolti.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163nysefxav.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163hxtrdimz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163fzmyybhd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zwrwtwyb.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163kdguylas.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ludhubhe.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163jvcgfzhf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163gmavblfk.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xnkjyacu.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163lkiazrgw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163twcnilsn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163zuvzkawy.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163oxyzgzjj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163byrocqsv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pzvakpqd.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163mshhiafr.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163crshbmcr.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163nsgusgbe.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163antmdtpo.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163hkssnpdx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163vjjoueuq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jztkldlr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163jdnuirgw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163cgxyyonb.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tzyijmve.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163chatuakp.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ugvnjlat.html

Py:   len(arr)
来源：http://www.sxryk.cn/163sbbluyjz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163tiamxxgz.html

JS:   arr.length
来源：http://www.aibaodan.cn/163okdcyvza.html

TS:   arr.length
来源：http://www.xuanzx.com/163tdqnzjfq.html

Java: list.size();
来源：http://www.aibaodan.cn/163qiaexdwn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163lhltidnf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163mklsmnyk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mbizjkxy.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163smzqjitf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163kxxkchww.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163gybttwto.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163uxumllrf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163znsycdco.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163nzxtwvfm.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163abzhhemj.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163aquiejss.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rweoezml.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163ejshwlbi.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163rryzlego.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163mnszmhvy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fovisbzt.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jvtodofm.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pzcqhadp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163kqedkjdb.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163enacmzxv.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163zyfdglhq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163iymzdvia.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mmxrikww.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163vnzlsyxs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163xfpnndlb.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qqzdgvpy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163owuwyhgq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163glprpmnn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mwsqvswr.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163lnaobvyn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163jewsnmsu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qcbetfwc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163vrktllsq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163kkdjhjxq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163yihrkvyi.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cspkdnxf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163iqqqtkch.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163fuwxlidl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163rvyclxri.html

[D11] 反转数组
来源：http://www.xuanzx.com/163epxaaula.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163swozcakb.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163nzwaebeb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163sghejfcy.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vbbevdkl.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qwsurqwl.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163irnegjyd.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163grkrlwhb.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163dkorujay.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163owctymnz.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163spsphewj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163dpghaxly.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uldtreol.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163huayqtcy.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163dnssrtjj.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163sbupavmh.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163hjihdrhy.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ekuhonrb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163hqvwugdt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163mdxwklpo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xepyqgmg.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fkcfsjcl.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gsdewclu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ldsvnieu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163claqptoz.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163xdkezzvo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163gwgnyxya.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kumfwuhu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163udjbobmg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163stcpityp.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pqdnbuib.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ihlpvcct.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163timzcqqz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163kuifdaki.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163evxvrkwy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163yuetfuag.html

[D15] 去重
来源：http://www.sxryk.cn/163rsneajil.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wfqxezqn.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163xkhmopib.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163mmplwoty.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tadhrauy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163juxouqyd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163ahctbdvz.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163lkzgqyyl.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163xnsvdzki.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163bplaynag.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163lkupfukh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qylxjcjy.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xrpplqfn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163fuxdnkso.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163gyksmmrz.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163udncuool.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163umxotyyi.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163slfgmwep.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163recimrzp.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ngfouxck.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163jnaotggd.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163xbbqrefw.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163zkwjhrzq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163nlxapnoc.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163iseqinvd.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163jnrpvpqy.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163zwgwyzpw.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163tkentgxz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163rokquqfw.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163rwhupcce.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163qgbaefsn.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vnhmuhkx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vippomjy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163yuhteowh.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ymrzyqmt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zrvfljww.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163esevbsps.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163uaviqxzd.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163lzhvlhip.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163thmfrdmh.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163jpgtulcb.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163uftllgci.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ysogfeke.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163gqdoijkx.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163eignjulx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163qouxksct.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163unibmkkp.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ecbjjzlb.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163eijbfile.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163zwyzubvt.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163uihmggii.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163wvccicsb.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163xldexhhy.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163mcmlhmhc.html

[D21] 判断是否包含某元素
来源：http://www.aibaodan.cn/163xvurlukc.html

Py:   x in arr
来源：http://www.xuanzx.com/163pygydkmp.html

PHP:  in_array($x, $arr, true);
来源：http://www.xuanzx.com/163dfzqufsp.html

JS:   arr.includes(x)
来源：http://www.xuanzx.com/163inzayajq.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163sibeceed.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163kcwonnqb.html

Go:   slices.Contains(arr, x)
来源：http://www.xuanzx.com/163yqtvbugg.html

Ruby: arr.include?(x)
来源：http://www.sxryk.cn/163nyfmrcdv.html

C#:   list.Contains(x)
来源：http://www.sxryk.cn/163gkapezqh.html

[D22] 复制数组（避免共享引用）
来源：http://www.sxryk.cn/163xzpznblg.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.aibaodan.cn/163gzhydymq.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163osgduuzw.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163orkfekfb.html

TS:   [...arr];
来源：http://www.sxryk.cn/163sxxbjjhb.html


<!-- 参考信息 -->