外链999!wailian999！

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163yvswfmrr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rgdtdibe.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163duxhveuq.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163bnldygrh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163frydfsoa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ttopyjyx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163rotdaysn.html

[C09] 递归
来源：http://www.sxryk.cn/163pgondenb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163lbsblgpj.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rxpolrix.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yeodycia.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tccooexa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163wydbqcaz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163awdmrduh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163pptjskng.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163uawtgiep.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163detmyrwt.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163myxnqoxq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163glsyddfe.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163yrtiguwl.html

TS:   同 JS
来源：http://www.xuanzx.com/163cwuflbfp.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163sycmjqfl.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163yvjquudo.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163jzupdhln.html

C#:   块级作用域
来源：http://www.sxryk.cn/163pwaoyapt.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163yvknvqyp.html

Py:   from module import func
来源：http://www.sxryk.cn/163kmtxbnwi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163volfzlsl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163kbmgcbcr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163zxddwmdj.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163gnhwqytc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163jcwecdsa.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ddefvplg.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163qpcfwwrj.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163pecjjcpj.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163cdzzjmou.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163borwonhd.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163sdqvnhjd.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163bqqjzgmx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163zhkibsce.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163crjhhmek.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163tafccisn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163smosthrh.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163hfpcflxq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163fetojpyh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163jncsesko.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163quukgdny.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hjrizzdb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163bocxslbi.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163nrtiijxr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163eedsxezs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163gsqzmmoi.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163vfiouzmf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163dqdtsblo.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163pdhrrjrh.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ylumdzgj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163zyjgldpq.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wglhgnno.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163fykxdqtx.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163adwpzuql.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vznrhtvt.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163wrymgdsm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163hykhzhfw.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163iojymoqx.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163gcwarohn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163uhztfjfn.html

Java: // 无解构
来源：http://www.sxryk.cn/163zcounaqx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163wvppgndl.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163iutbwlec.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163qihbekna.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ndwturws.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163rvgizhkr.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163fquihydj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163iyhajtkl.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ubjzwckc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163shmzinkz.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163krczafsk.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163wyzeggwa.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ekfatpcq.html

================================================================================
来源：http://www.sxryk.cn/163wyzcmsyc.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163yxnwpiwx.html

================================================================================
来源：http://www.sxryk.cn/163bkqcglnl.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163sfqiqneo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wekhbkhp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163qrzrfmlz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163ceyegzyy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163xtrgcgzd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163vrktoscv.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163tftjyuwn.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163uaurbviw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ufraxlzb.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163jphywlgu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163szhhpuvm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163hahhzqpo.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163enrduisq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163jhdiwoug.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163uqwgltcn.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163qgmwpcsn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163pazdeaza.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163ojunduqh.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163diryvllf.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163oucjtagx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163syrpdprt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163azpkuqzx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163fzshwori.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163asocbhtl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gprraqop.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163rysqpwwi.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163btsuzvmb.html

[D04] 删除元素
来源：http://www.sxryk.cn/163irahnsum.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163vjlcroyi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163nwekdqkr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163binelwyp.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ctdfutjj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163weitckhd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xskmfrtw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163pjbymeir.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qtpwcfpg.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163njbhhymr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tkhizgqy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163nrihxkoz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163dlugfbck.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163rbnajcvf.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163dyivoagw.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163yprqiutc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qbswzlaz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163abxhuwsx.html

[D06] 数组长度
来源：http://www.xuanzx.com/163dmhaowgn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163dizqqypr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163iseniyja.html

JS:   arr.length
来源：http://www.sxryk.cn/163zdiyrhgl.html

TS:   arr.length
来源：http://www.aibaodan.cn/163sptqhlfv.html

Java: list.size();
来源：http://www.sxryk.cn/163fbyzgztn.html

Go:   len(arr)
来源：http://www.sxryk.cn/163cbphyuhd.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163scdbadfq.html

C#:   list.Count;
来源：http://www.xuanzx.com/163tbejkwsw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kiygohlw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163bzjoafwc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163atjsbfxd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ytoedkbs.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wklmkbpe.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163annrcjgm.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rfqtxgif.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xtofyuwh.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163vxxwpfhu.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163bwzvottr.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163vvkviqod.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ghabxrsx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163tpoihmqg.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163yrowjdtu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hmyqevve.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163cqusrcdz.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163omfmrfpb.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ivzzojfx.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163kwfvtiyl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bzpciqnq.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ldeagdep.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163vtlzuixa.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163ilrzjcpk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163leqkzewq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163xobjfvyv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163xzcsbwzj.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163aghfvnos.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163xdlidyuk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163sezcssli.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gnythdgs.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163pupxohto.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ldcpkdro.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163hlrvtzps.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163bniwgtth.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qojnhvdp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163uxdaevtn.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163nugtyimk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163wcmxcbgg.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ydbboxii.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163erwytgbf.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163bauslbdz.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163bgrphayl.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ibrvwynv.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163wvkjfzkb.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163yiuwgptc.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163vzdswksg.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163alhudunh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ycpptorr.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qvlkjtsm.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mkecakhw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jfizpewn.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163fokosamx.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163pnqbniqh.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163dofarmch.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163pbextmdo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wnbhhpdp.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163dtcqtioe.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wceagekt.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163pwswppde.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163qmriklej.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163qkcnxdjg.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163umzhsxwi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163bqcrdsfy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163tjjhquxa.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163dwvnwoto.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cseyrgzu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163tstpuwce.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163fbxqjaxw.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163wfizaemz.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jzowhoxq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rvmbeggl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163djiqwcsy.html

[D15] 去重
来源：http://www.xuanzx.com/163qcqezhgx.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163bkwuvbux.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163flblpist.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jbkizbdi.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qjmqosha.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163xhjlroau.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163uctjocpi.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163irapstmm.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163vtglukxk.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dnhwveik.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163nwmtphky.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163gajsybpi.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163itpxjxzl.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qdrnpgzu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ufgtsmwg.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163hworhrns.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163ygrcvuhk.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163xhediuyu.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163aqrpqpyq.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163uqoaelcu.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163pzrjzhyj.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163bywphvvr.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163tggequpo.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163nsuncekm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163ikdsdycw.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163blmaraxk.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163dalvkmzh.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163lwabgqqk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163bwxoczib.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163kjuptxqc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163luqpyffo.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vvaefmhl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163kyarlghy.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163llsnzkpu.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163cvwmdgun.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163iatiuntf.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163sfqixwoo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163zgbwgdzi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163oohtocsb.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163jbzapgcp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163nrrmkcwv.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163zqcamayu.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163xohaejgk.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163bhtsabmc.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163ylbiyxpa.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163yuvszkgv.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163krbugsmp.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163ucixqfbs.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.xuanzx.com/163lrxgdlcg.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163dvpbjetf.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163ieawdywc.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163esckctsi.html

Ruby: arr.tally
来源：http://www.xuanzx.com/163lkbutpbd.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163hydyzkdi.html

[D21] 判断是否包含某元素
来源：http://www.xuanzx.com/163lknxroxj.html

Py:   x in arr
来源：http://www.sxryk.cn/163lixkmvkx.html

PHP:  in_array($x, $arr, true);
来源：http://www.aibaodan.cn/163yshntxwl.html

JS:   arr.includes(x)
来源：http://www.sxryk.cn/163hsthoscl.html

TS:   arr.includes(x)
来源：http://www.aibaodan.cn/163ldjptxyy.html

Java: list.contains(x)
来源：http://www.aibaodan.cn/163irvcyfps.html

Go:   slices.Contains(arr, x)
来源：http://www.sxryk.cn/163ewqqjeou.html

Ruby: arr.include?(x)
来源：http://www.xuanzx.com/163bklkaixf.html

C#:   list.Contains(x)
来源：http://www.aibaodan.cn/163rbsdywkk.html

[D22] 复制数组（避免共享引用）
来源：http://www.xuanzx.com/163smdatozc.html

Py:   arr.copy();  arr[:];  list(arr)
来源：http://www.sxryk.cn/163pyyqkpky.html

PHP:  $copy = $arr;        // 数组是值类型，赋值即复制
来源：http://www.sxryk.cn/163wjnhffyy.html

JS:   [...arr];  arr.slice();  structuredClone(arr)
来源：http://www.sxryk.cn/163ycupmbup.html

TS:   [...arr];
来源：http://www.aibaodan.cn/163wiitobcv.html

Java: new ArrayList<>(list);
来源：http://www.sxryk.cn/163yybrxzep.html

Go:   copied := append([]int(nil), arr...)
来源：http://www.aibaodan.cn/163epbuabwz.html

Ruby: arr.dup;  arr.clone
来源：http://www.xuanzx.com/163rviplaza.html

C#:   new List<int>(list);
来源：http://www.aibaodan.cn/163xfhbnmxk.html

[D23] reduce 累积计算
来源：http://www.aibaodan.cn/163vrokbilk.html

Py:   functools.reduce(lambda a, b: a + b, arr, 0)
来源：http://www.sxryk.cn/163mdeeduqe.html

PHP:  array_reduce($arr, fn($carry, $x) => $carry + $x, 0);
来源：http://www.xuanzx.com/163obxjsfdo.html

JS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.sxryk.cn/163cotnkjna.html

TS:   arr.reduce((acc, x) => acc + x, 0)
来源：http://www.aibaodan.cn/163ewjiyvpf.html

Java: list.stream().reduce(0, Integer::sum)
来源：http://www.aibaodan.cn/163ealkzyvl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jhacahsi.html

Ruby: arr.reduce(0) { |acc, x| acc + x };  arr.sum
来源：http://www.aibaodan.cn/163daraujxq.html

C#:   list.Aggregate(0, (acc, x) => acc + x)
来源：http://www.xuanzx.com/163zrunytsz.html

[D24] 字典 / Map 基本操作
来源：http://www.sxryk.cn/163xcbdkolq.html

Py:   d["k"] = 1;  d.get("k");  "k" in d;  d.pop("k")
来源：http://www.sxryk.cn/163linoxhrx.html

PHP:  $d["k"] = 1;  $d["k"] ?? null;  isset($d["k"]);  unset($d["k"]);
来源：http://www.sxryk.cn/163zoyygtgu.html

JS:   obj.k = 1;  "k" in obj;  delete obj.k;  new Map().set("k", 1)
来源：http://www.aibaodan.cn/163xfdpyeco.html

TS:   const d: Record<string, number> = {};  d["k"] = 1;
来源：http://www.sxryk.cn/163pcerrgvo.html

Java: map.put("k", 1);  map.get("k");  map.containsKey("k");  map.remove("k")
来源：http://www.aibaodan.cn/163okihqbct.html

Go:   m := map[string]int{};  m["k"] = 1;  v, ok := m["k"];  delete(m, "k")
来源：http://www.sxryk.cn/163gkrjeltp.html

Ruby: h["k"] = 1;  h["k"];  h.key?("k");  h.delete("k")
来源：http://www.aibaodan.cn/163jwthlxro.html

C#:   dict["k"] = 1;  dict.TryGetValue("k", out var v);  dict.Remove("k");
来源：http://www.xuanzx.com/163gxedahzy.html

[D25] Set 集合去重与交并差
来源：http://www.xuanzx.com/163mqwxetcs.html

Py:   s = {1, 2, 3};  s | {3, 4};  s & {2};  s - {1}
来源：http://www.sxryk.cn/163epjfducz.html


<!-- 参考信息 -->