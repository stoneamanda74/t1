外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163fvyofpct.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163camrtvsl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163sajuljln.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163klvsarux.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gujsgooy.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xtlsmgks.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163zhmyvehy.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ywsfldpt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163qmjdsqhs.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163upkmezvt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163dansjhjk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kvlxxxrc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vfqdxuyx.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163iqdwdmnj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163nvfomsjc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163ajkkrbgv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163fclwaiwk.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dcprkpms.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163mupkoqoq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163axcmfjlx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163kceevcjd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mqtdlmrd.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163grlbvvza.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163bwbsdqoe.html

Py:   return a, b
来源：http://www.aibaodan.cn/163dtxpline.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pttdtuzu.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163laullywi.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163vkxqrxhx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163abbfsbwv.html

Go:   return a, b
来源：http://www.sxryk.cn/163frvrwffb.html

Ruby: return a, b
来源：http://www.sxryk.cn/163iueyzbbe.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163dlynprgr.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163njcekdjp.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ijtehadk.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163uwliphoe.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163estnzalp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163pvkksbut.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bxhqguoq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163wtwzpcbd.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jwuygnhb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163wruakzjp.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163opiklapx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wbnommji.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ozmovbiw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wqskewfc.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163evszsvis.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163iywipgmj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fvbcchpt.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ofmtiukx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163iewqidbl.html

[C08] 闭包
来源：http://www.sxryk.cn/163ixwaedap.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163mqcsuowm.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163stwrepzn.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163zuglldgc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xydlbeuc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163hejnliwb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163grkjzyxs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163wkwetxsz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nqnvlwpg.html

[C09] 递归
来源：http://www.aibaodan.cn/163hdseuakn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163lueuzgqp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163wtlyjpmn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163pmzadexh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zplspkcn.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163yvhkmanr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163alrztkhf.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163lytwqstp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163skoqdyka.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163rootboqp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xrhsgcjc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163moklntce.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163cntinaro.html

TS:   同 JS
来源：http://www.sxryk.cn/163toljbaxv.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163fweyoewn.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163lvbifkna.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163chrbbfmc.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mtonrvua.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163gbgqguij.html

Py:   from module import func
来源：http://www.xuanzx.com/163gbrhnvqu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163eguhgjll.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163qlckpoag.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163kyigrxfp.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ufyeldks.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163vlyvctcc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163fikrkedd.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ccopenci.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163yskbhuwl.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cefhrvqy.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ctnddfek.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kijituaw.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163oxfyqsdl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163qyruhqds.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163mjunmmhx.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163fxtzvnkh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vehxwqwr.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hanjsqub.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163asfouhzj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163alrsassh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ofccycnd.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163qdfsdvju.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163hmygdmbm.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163pjdukjld.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163fohcnczy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163hkrbqxku.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163fyujxoiu.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163uenusblw.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163thlgjdmu.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163inmmfcgj.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163wwlyzydi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ohpphnyk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163bzjajkwq.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kvqdpczr.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163dsxygikr.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163esqtgesu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163fvgsraqh.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ksofaeom.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163uwaaifcb.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163bfkyfvaj.html

Java: // 无解构
来源：http://www.aibaodan.cn/163aijccmvv.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dsqserio.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ascjfrfq.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163zxmtgvex.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ykgpblcv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ftzlimqs.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163vaxrmmit.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163tzyeosqg.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kghgeolc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nlnkefgl.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xakobaju.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163fneoolnv.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163zlansggs.html

================================================================================
来源：http://www.aibaodan.cn/163dwvgctiz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163rkjtrwcy.html

================================================================================
来源：http://www.xuanzx.com/163gqoqoypa.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vtinpoaq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ufafrtww.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163dkhmxmzi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163kaklgqoh.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163qnmpxnlp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163gfkyoqul.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163prvdothn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kaonekjr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vrfubptk.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163veyxmjuf.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163gomysqmb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163flbsaihp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163emdzusri.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163srabzuet.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ivcyrqnj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ckfvfwtk.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163ylxjtkja.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hlftzxah.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163aqgkdkpe.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163fwvtrkaq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163gkllyfqo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ulorxxvr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163fjbgnreg.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163dvhysusb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163etttlvqk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163gbgjlyeo.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163eqwevldh.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ecxucbrc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ognapews.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163bpumuhqf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163njevcgoq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tvowkfqe.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163dgvmjnik.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163buwsflto.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163wlkezsrn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163wkqfxyjz.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ejzgtlko.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ctudwuil.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163vqwrebtl.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163mybffsei.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mlkkzitt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hbgrnwmg.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163tkmjyrqr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163zgdtkwok.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163wyavusoy.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ffcjmddv.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ucptvlve.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163ystybttu.html

JS:   arr.length
来源：http://www.sxryk.cn/163syzktcom.html

TS:   arr.length
来源：http://www.xuanzx.com/163axzhuqrd.html

Java: list.size();
来源：http://www.sxryk.cn/163puaxwniv.html

Go:   len(arr)
来源：http://www.sxryk.cn/163nofsgcjw.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163nxrqoqjf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163waeqhhyh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163axkrseya.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163cdzorzch.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163jakiznft.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163iktjuzas.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163pravcllq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163igucufwp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163rnjvkesb.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163fpykfwoi.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163jnahffnu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163bbxkxxgu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163cfnifkio.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163jlxizdne.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163ffxgtflk.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163edrjkjua.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hhgadetk.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163fqzsywai.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ilwrzhqo.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163sdvrwtlq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163wcoeikee.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163lnjxquak.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163sirurnku.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163tgittvak.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163dsqcdzzv.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163pxwrdfox.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163nlrjcecz.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vujypevp.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163zwglpxkh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163kkzmionu.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163oonrsaef.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hkvzxcao.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qynpmrjr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jfsuggfx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163goporuvn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163aogpskxx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163jczfoevu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163rnyihvar.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ntfazgbq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163rywldwtr.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gmukwhkl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163uvudsosu.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wwujsusu.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qsmpgwol.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163gufoghkg.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ylmirexd.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163vwodsyha.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163pfaudvmj.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163wblvckkg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163rasxxctx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163nwarcnil.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ybseugdf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163pjuejuuj.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163sjidhxxb.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163twttxchd.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163uoybznyt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163bmtkuafk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163ggszihyh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163fnevdsjh.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163sfxgvsug.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vswvswpj.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wnazzndo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163xhrxnyog.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163hlcjqsap.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ggxjgepc.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163bgotfwcu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163smyspski.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163cvqeketo.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163wmbejdmo.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ddjbpmun.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163gflhbusl.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163jjlxyrtu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163veanjuvu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163olrykqrb.html

[D15] 去重
来源：http://www.sxryk.cn/163yidczlto.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163audlpsis.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163omirfkuh.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163spibiouj.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163gkddaoca.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163vcmxopoj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ervghzcg.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163paskyxia.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163fwnssldm.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163otjadnqw.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163bfkyfygt.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ghlatjux.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163olabnuuf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163otpospxu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ljyznnof.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163qvfayhgs.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163xrcpjotp.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163njbwmutn.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wmnuheop.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163smzlwqmv.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163dykvsasq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vwosfuxd.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163alzttrsr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163fhaazxtp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163lxxbjdus.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163djkltchg.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163lzgsubhs.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163spsvlbxl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jykncppr.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163wqtsttsc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bcplkrxg.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vinomaex.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163vrdysyeu.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163tygppyvm.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163mfhivtet.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163bspmidmd.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163znjhhzdd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163hyygzbal.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163tajtnjvo.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jmekamnz.html


<!-- 参考信息 -->