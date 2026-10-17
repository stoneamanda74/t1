外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163duentkuu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163wekhukaf.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ohafiuut.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ldbhccjt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163lagpdciq.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zlbrunse.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163swokclvz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163afbnqdib.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ifuymilt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fhmatbpr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gtyffssv.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gotorqid.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ruoyzbpc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163dezoccvc.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163jcgtvbfg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163cnenfjrt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163rqzoahaf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ypgwljeq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163yebjtirh.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vcufvfuz.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163zioiynub.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tmmdjlrq.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163khzxjbhz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xcwvarjh.html

Py:   return a, b
来源：http://www.xuanzx.com/163rspvzfcn.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163lhcseicz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163mfocjtgu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jvotzknc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163igayrokv.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rrnvowrb.html

Ruby: return a, b
来源：http://www.sxryk.cn/163zqnnpsuc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xpwpagaq.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163persjefd.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163fxqcibgx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163juiwfoiz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163rbrjfiho.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163birspmnu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163xysbeagz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163jjuwnybh.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pmrzavci.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jhjxwisz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163farjqggd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163rchfuhfu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163mxygpsae.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163afjaxhlo.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163nxjlcbtn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163nrhjtxnd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163caoxwsfd.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163stjjbgeu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wonvmcef.html

[C08] 闭包
来源：http://www.xuanzx.com/163ouhhitiz.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ytrshgwp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163athcrmbo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163etkekyhd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bwocmkwg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163mvyycjwx.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163xrbpqigk.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163pfqptzir.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163zdvlqjlg.html

[C09] 递归
来源：http://www.aibaodan.cn/163fecvbluf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163viiodgpo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163tauswakr.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ldiggwod.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ccmnvvsz.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163bfduwyid.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wbcihvkp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bacwidxk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163ebhucfyn.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163nysuzpmt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163ubglcikb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163qozjqilh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163eilrapcm.html

TS:   同 JS
来源：http://www.xuanzx.com/163qdxekiyd.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163rochejaq.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163poiiybyk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163trnjkrdi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163uabizqlb.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163otcsalju.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nyxikkok.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ynwlojpd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163jipllxgs.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mmqpebpq.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zwloastm.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163tmjqxqux.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dgxdlhyz.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163vchcahmu.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163ydwtucap.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163otnpuotf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163mflikxto.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163woqrmabo.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163zznhdgop.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163hwqjfcem.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163wfdoekch.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163uvcijtvz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163covuorlb.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163vawapdyh.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163aflvedzf.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163lxemzitp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163yxbosrib.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wyszxfic.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ueqyukfv.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163lavanrhx.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163zraeozun.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163krfbagnd.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163oqnxggvc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163rjxilvud.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163tnclfxct.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ucwhgcja.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163aftpysks.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163jjbflrzu.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163odfbprhq.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ramqnmvt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dcvzajqm.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163yymcuxpj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163byooutuo.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163owfhycpa.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163khnujyvs.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163fftofkbn.html

Java: // 无解构
来源：http://www.xuanzx.com/163nsgfflla.html

Go:   // 无解构
来源：http://www.sxryk.cn/163mmxxgfur.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163nwevituz.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163wtcuniov.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hwmkuvwa.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163dwoqvmsw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vwlvlyke.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bethbsmp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163rnznjuvx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163mlfuxjsl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163gufmulut.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163jvblbadu.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ydxmmsda.html

================================================================================
来源：http://www.sxryk.cn/163eujvlklh.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163tqvwhczz.html

================================================================================
来源：http://www.sxryk.cn/163csorhsov.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ovlxjftp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163mvkwmcgz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wvifadug.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163cdzdevwb.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163ghfjynkg.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163fealxdus.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163voclmrna.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163oxzvvept.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163zrofrnra.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ppklyjzb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163hhvrybfk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xgziplww.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163rdbqjotl.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163eproaryq.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163qmrnztnf.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163fxzhphio.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163xhmmslgv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163eahltwwq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163uwftmuun.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163yhdaybew.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163dreskbde.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zsqwphra.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ignyzton.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163osldlzil.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163xtbpxlgy.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163iescjxmn.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163cpydxgma.html

[D04] 删除元素
来源：http://www.sxryk.cn/163euqnxowh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163xhvpnkfs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163icfzgpho.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163zrtfxtla.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163heosnyab.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163eirsrost.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163qrphefyh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163myydwtjx.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163iyxhjgud.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163erfangqj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rnnqppjx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163odabvbsb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163qkutrfnb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ecqvsmzb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163nayvqnlh.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dnlusgco.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163baqxuxhd.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163uvuphaxg.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163edonscel.html

Py:   len(arr)
来源：http://www.xuanzx.com/163hmrfhhgk.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ttgjhpvj.html

JS:   arr.length
来源：http://www.sxryk.cn/163byinuxcn.html

TS:   arr.length
来源：http://www.xuanzx.com/163ldffjapr.html

Java: list.size();
来源：http://www.xuanzx.com/163qjtrucdy.html

Go:   len(arr)
来源：http://www.sxryk.cn/163ezisinqf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163ghmgvqyc.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163zeuyfjxl.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163pfpjqrzm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163givqjbay.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163sixowvdq.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ijgsvdcg.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163bpmfrddg.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163kfsthcuo.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163nvwlyflx.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163flebcesr.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163goazwfwr.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163lnqsikvd.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bjsjripn.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163bphswchm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163xtjvhlyg.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163clcrgscl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163fjbszepw.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bqugwlod.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163bbjhsxhx.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163clqiyuzf.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ydgqdtbx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163twmvtgcd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163oviwcugd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163oudzhffo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163gdbuzyix.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ihezoxya.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163lhrziaxh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fqheceto.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163irypmdcd.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rephetla.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qdczkppq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163luuqlvkz.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pplezoqp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163rldglqfm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163crobbwit.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163vmuafjwa.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163walqpagr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163uahcmosg.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163gythyuon.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163abbirpzu.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ctfctryq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jcyllylp.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163uofedkru.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ulnozsmr.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163obxouyer.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163qtgwqjei.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163mdvjjklp.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163hmgtneyp.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163dtvabbvk.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163zwebmcbf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hnygcoen.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163opqxyzqe.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163kjiwlujx.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rrwiwquw.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163panmqfax.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163btdnivvo.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163dcyejosb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163etacxgyv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163eftwcmjp.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ewtimiba.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163nontvxsj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163qujcqinw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163oijumfkk.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163pnzinyce.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163aflcjakf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163naczeglt.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163bgovoqde.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163rtsryzdc.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163sfndwhzg.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ehgggpyz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163yrpspoyx.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jbgsotpn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163yphddqae.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163jfrxhpsw.html

[D15] 去重
来源：http://www.xuanzx.com/163igwmwxlb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wygbptoh.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163qboqzbef.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163rmdgdeln.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163susmciry.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163rbkxlksa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163vdcdqxze.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163vnldgfxu.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163crgyuvwf.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163rwcjwxmc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ravunaip.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163isslnzav.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vxmqdnyk.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163chrgrekv.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163sqsvpvmh.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163aenlvbty.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163wlbpbktk.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163nboqvfvr.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163keksvllk.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kipbjudy.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hzmizppe.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163bhogtuvw.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163hkdvgkia.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hkejrazd.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163afaincga.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163zwxmqgwx.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163pjnxauhq.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163purweobp.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bzyoeeyb.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163xzrilkvf.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163ddywrulc.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163jfybdohr.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163mndvmotu.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tawhlqoy.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163sqedvtij.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163uwabeqii.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gwyyafnh.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163gsqczbad.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163plqlulam.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163mhujjiqi.html


<!-- 参考信息 -->