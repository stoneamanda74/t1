外链999!wailian999！

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163kgjzasyd.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bvaupsrq.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163asecxtuf.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163jvehsniv.html

Py:   return a, b
来源：http://www.xuanzx.com/163ztkdisch.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mkjcajsz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wgtzcmrp.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163hqjocfdg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163gvcaahmc.html

Go:   return a, b
来源：http://www.sxryk.cn/163ffmgougl.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xvlvyzlr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163wuklqdul.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163eicvamen.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163uhippypn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mnruoxtp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163xpjatgja.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163nydzjzhy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zjdaobpx.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163oyzduozj.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ihxbpvaz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163abxnaxwd.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163neayeogz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nntnveyv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163iogcqbeb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163gogjyywx.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163avceamsl.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163hijpiuvk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163nncesbde.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163xjfmnwjj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163zmvwtjnd.html

[C08] 闭包
来源：http://www.xuanzx.com/163osyempyu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qjwstzgq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163brckjybg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163meduxace.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mylgxzeq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163gpafdmdb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163osjenqiq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163czjhlegt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qgjchlqy.html

[C09] 递归
来源：http://www.aibaodan.cn/163wzcjquai.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163qwpwkdhm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pxsdlmwn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fmipnicw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163asdtarcu.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163edpbjzcc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163arxftaza.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163oxfrdgjx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qxsbdifn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163comnwvog.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ycxcyvru.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ddkthzyd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xqfekaev.html

TS:   同 JS
来源：http://www.aibaodan.cn/163gkswsstd.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163jhhcywug.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163rykewlfh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163gdemtfqd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163efyzkzzp.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163wpuajxuq.html

Py:   from module import func
来源：http://www.sxryk.cn/163uxevwxzr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163vrzymfck.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163puoeyeqj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163pbfpndwg.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163rnaoynbd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163okqxkqeh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163sgliiqrp.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ufabxujk.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163anmiplyd.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163dfectfpn.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163cjpzzhvf.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163wjyhjyge.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mjzjzxdn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163asbfojpz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vfkphoha.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dgbmhsxm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163rzibcsfu.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rjzggjgd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163dfamfzvs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kpykqnml.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hcmiplii.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ihglejmg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wbplbhxm.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163rxaxlmzx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163ixqjugrt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163fmfwojme.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163hdozuiyl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163juytamqo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ngiehaqt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163oovaprle.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163kouoelzk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lqnuwwxe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163cnqptrxc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163uknjnpdb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163xutbcuwt.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163xbpqisth.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163hmhrlvld.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jppcrlhk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163sqdqdiwu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163kazzhzdg.html

Java: // 无解构
来源：http://www.aibaodan.cn/163xtispbtd.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ftmkdqtd.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163xtawbmhs.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163bathruwc.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163fxsnwamw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163rbnkusqd.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qujvjhtl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163ikuttxhc.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163bkwfplow.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nehopgsw.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163egznhkbm.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163yqlgkkhn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163rqygpolr.html

================================================================================
来源：http://www.sxryk.cn/163ctfdwwzf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163qzlrgzgo.html

================================================================================
来源：http://www.aibaodan.cn/163egapqcuw.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163tjccfory.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163ofamdqsz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163ivrjzkby.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ouhwcedp.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ftcvtyrs.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163dlruunvi.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wmqtxeyp.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163ofbojnuv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163oyhxudba.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163ffdmacdn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163tmhzmazj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163siszadfa.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163fjhojgdv.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vcwmjmdp.html

Java: list.add(4);
来源：http://www.sxryk.cn/163lupzotsb.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163gxzmisco.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163rvkmoprg.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163fozqoaip.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163iqxuszzg.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163dfwgdcel.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163svydasju.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163owjvnwsz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163puhtdhhh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163woqnsjer.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163xuhzuefh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163etwtacfy.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163hjnvwwpt.html

[D04] 删除元素
来源：http://www.sxryk.cn/163yyscvmzz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163wxndrcia.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163qfimishz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163ykdjkhew.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ajxbquvb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163yukefihh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163xgbyjsys.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163bjtzxwev.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163wggiaubh.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163leubkxot.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163pxfeskyu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163bnzfqeup.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163oxeusion.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163cxcgcbmu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163simxyvre.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163evdiwubo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ijcglnkt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163tbtekocv.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163kcwizilk.html

Py:   len(arr)
来源：http://www.xuanzx.com/163wqvcnbvh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163fjioawot.html

JS:   arr.length
来源：http://www.sxryk.cn/163gstoqxcs.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rggsnflv.html

Java: list.size();
来源：http://www.xuanzx.com/163ozogetrx.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163mpwllkit.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163uycokonu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wkynafxj.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163kvxcqapz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163hfgqqhat.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163duzkhpav.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ubsrfqsg.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ykdezshn.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163oqqqtqyv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zvhpppru.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163yezywuko.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163pznddweg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ezyxtscq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pqoyosyp.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163sivdxqcb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163fjomscea.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163iywlopij.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ubwujjqp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163goniydkn.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rxfldzhu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163gjlnxcak.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163knqyhkyv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ddoxlqdm.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163orgzfdng.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163jtvurfep.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163rrzmjpix.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163hndtrqsx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163shbncvuc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vojpilgk.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163gibsjgeb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163wnovfrjw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163matamrne.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xvbvynam.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kgazpgqy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zlmpdmyf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xsvipgqp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163hklklkjg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xdjtvqwl.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ssddfprr.html

[D11] 反转数组
来源：http://www.sxryk.cn/163seiurahv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163tlaowfuy.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163phpxldep.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ibjivgrz.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163lxnfdfsu.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ibtqxbrt.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163otrmgfqr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163zwzynuwx.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163krwvdshe.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163tlqhukfd.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163gsfzcgxr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163biucsgqo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163eoflguiz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uvnssttc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163spvxewok.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163nbiaasyl.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163wudzvlkw.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163lnxtdhjp.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jkaincyx.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hqmmnjke.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163oiubsybg.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163zxbvmccr.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163iyavuoas.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ssatkcpm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163jpyvmmxj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lltuikyj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163npcrjwzv.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zsrztwvo.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163uddsxlpc.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ksgigacv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163smnlekqk.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163qywbfoav.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qphklvxs.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hvwtpjeh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163irhubjmv.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163oujfbgjf.html

[D15] 去重
来源：http://www.xuanzx.com/163ytzpkjym.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163gxdwyrkp.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163cqxlaumu.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lgluegbb.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163qxhmrhgm.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163mukqtnyb.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163neffwscy.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163aezmjjxh.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163mzislpng.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163ypovetlu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ptvrhpqy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163pzdnwtff.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163xgfmqybn.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gzhkfvyc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163iaqttlur.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163qnjgseqy.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ekxczmyn.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163dbnbihij.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163hisaszqw.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163dbmrfclf.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163nxiqkvme.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vyabqqid.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163kfcirlzw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163quelxeuu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163xmlrqnpn.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163ktelyyyy.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163nnhzlslx.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163rgdoidnj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jkybiqbw.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163ugmglucw.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163tohxqkaj.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163igbxasor.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163orvhzvld.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163tnydxiki.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ptjbnvce.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163ekhgbchx.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163emtzikbt.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163nmfnohfk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163shvwrzsz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163pdprcgje.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163cqvtryjg.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163nnusjppd.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163jxjnzqet.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163obxjvydm.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163jyzcbene.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163nflnescf.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163jvdchbty.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163iepbdkec.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dribogmf.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163exdslkkv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.aibaodan.cn/163xrevazpr.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163ekacbjms.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163lqufjnur.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.xuanzx.com/163xnufziqd.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163wiooksff.html

Py:   x in arr
来源：http://www.aibaodan.cn/163dmdqdfwk.html

PHP:  in_array($x, $arr, true);
来源：http://www.sxryk.cn/163cejohxrt.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163qrtzqlrg.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163wjxormhk.html

Java: list.contains(x)
来源：http://www.sxryk.cn/163wtmriuop.html


<!-- 参考信息 -->