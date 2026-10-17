外链999!wailian999！

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163thdvczdh.html

[C03] 可变参数
来源：http://www.sxryk.cn/163crvpdsvd.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163acxlwreq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163tmsnvfvv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rsblsega.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xoxlnypu.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163uxcdrvbu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163iircntya.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163zwsunlbf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ngkkcnmx.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163dztsqcph.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163lginjdfi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163lrshvihz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ufkuiyij.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163pfobybvy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163tuzvhnhg.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163ytdosish.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gjqcvcbw.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ujokhfsf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ltvqcdrz.html

Py:   return a, b
来源：http://www.aibaodan.cn/163oyalwmid.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163mohsctvh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163tpvsrapy.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163iynhrsgo.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xwevxcmo.html

Go:   return a, b
来源：http://www.xuanzx.com/163czzhpmgq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ffuwqzov.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rtmwthlk.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163nioxctwp.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hhlzjwym.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163tbslecon.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163mwthktfl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jrwogntc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163bxyednfe.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163lxdtzclb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163pjlthmoj.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nvcuulpi.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163fopgsxbo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163gslrzxri.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ensktccz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163zultvext.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163prsyrife.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lxhrahai.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163msjrjekl.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163twwrpwoy.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163sxzkgyzu.html

[C08] 闭包
来源：http://www.sxryk.cn/163pmvubhal.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163onkonxve.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jbjihfbr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163oxuocdqy.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163aygxzyww.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163nfknolci.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163huexbava.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163veqfirku.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163juxvddwn.html

[C09] 递归
来源：http://www.xuanzx.com/163iuesdzui.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163mmsvpnqx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163jkwddffx.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zekdyikw.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xykjajtr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xnbfszyq.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163pwqmnows.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163eyshyyuk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163bjlgrgov.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163zeudvtvs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163grepucxf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163zjaudbxm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163grztmjus.html

TS:   同 JS
来源：http://www.aibaodan.cn/163dafirnns.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163riqtjebw.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163mxuxbqzq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163fknbtlfi.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ymcbhauf.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163endebsul.html

Py:   from module import func
来源：http://www.aibaodan.cn/163fzmgmsgx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163nxjmmexk.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163zktuwovc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ypabnoyq.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163mkxmquhw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qjjxmtnf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163asgzuxrn.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163cjsmlsjz.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163iafrvgin.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dubzmktj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163qzyjpfuh.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163bkzvtcjf.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bhcuzivt.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163qwbuvnvt.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gnovuhjd.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vdooagau.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163zajlsmdk.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163luhhwsrr.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163qpfmfxro.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ebloejko.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163grjwwpbb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zcslvhms.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xdgmcewc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163hydzrjxw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163avytyedj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163fnavream.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163gfrmoqat.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hdptidnh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163yhgwiuwj.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163fzaeqhmh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163tpvwrgxg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163eyxgglbk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vdgdscja.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163kesqzbzb.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163lvvzheox.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163dmnytezt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163gctestfj.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163mhlgmrhw.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163plqnevot.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163saxploba.html

Java: // 无解构
来源：http://www.aibaodan.cn/163drzujbkl.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163aktupmvd.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163aogvsccr.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163jdwgpfth.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cbodxhmk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xpjmhqvb.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163aryryfbc.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163yvfryfez.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ksfzglrk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163pbwptylv.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qkhpprvn.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163nsoexblt.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163brejqqnm.html

================================================================================
来源：http://www.xuanzx.com/163inbgmpfj.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163cptfvevg.html

================================================================================
来源：http://www.aibaodan.cn/163kwxsnrtc.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163vtiqnubf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163jmqeoiqo.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163rwqhdshj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163kgrllalw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163txliqvcu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163bmsrhujx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163hkwuxozu.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163meogqttn.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163trmvnnok.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163tyezdosw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163zkbzblov.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gdumufce.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163rbfkubqx.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163fbismaho.html

Java: list.add(4);
来源：http://www.xuanzx.com/163eaildgee.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163yzmalcvv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163intthowv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163wlfmgred.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163mphqegei.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163gnaniohg.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163fxqtcfqy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163xyyeefhl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163roxzvzlh.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163pmznkcmq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163akkicjzh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163uuagwnwv.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163nrwvsegd.html

[D04] 删除元素
来源：http://www.xuanzx.com/163mgwpnojc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163jglgouhg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163gclxqbyl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163eshjqwdo.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163dsgkstum.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163mwmsmumw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qchwsxix.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163ubgpvxbb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163ouafwhxa.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163bfsjldzt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jhrswkqu.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163klrjzxke.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ahvlmpek.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163nlfmdjjc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163tomlclan.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163geochyua.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163htzdpuek.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163dxbsbgun.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163itjezwgk.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163xuhngpvm.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ttgghpzk.html

JS:   arr.length
来源：http://www.xuanzx.com/163zxwlhwus.html

TS:   arr.length
来源：http://www.aibaodan.cn/163upmftxhp.html

Java: list.size();
来源：http://www.sxryk.cn/163ihkzdpjj.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163ximhrqfe.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163mkiikrnu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qnfvbrpv.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163tfjxwfnx.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ocjkooda.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163npsaatws.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163zhqdcnix.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163qsegwxjm.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lrbiuvoo.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163dsocpnhz.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163dfxccrxm.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ujffnwgq.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163kaxmzgro.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163pxavspgx.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vjnltfrv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163mggfyyyp.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163phbgbirb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163bxbndwed.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163xnxelrks.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163hnboyebs.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163mnarpgiv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163fbqgqfsq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163iktsyvde.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163czsanqbv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hdrranlf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jbyirsks.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163twrhwxpl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163cexivpli.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163ehjetxdk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163mnxxlhym.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163vhxdhpnz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163akfjrstp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mjhvfscx.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163keaggfrk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hbnnkxot.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163hzlaxyfz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163millnyov.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163isodsamc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163uvpfdhem.html

[D11] 反转数组
来源：http://www.xuanzx.com/163oteetuep.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163casagqdb.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163rtarmfha.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163bplpvckv.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163lsmdixgq.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163iyrokvwe.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163jclruqtw.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163mpsydrkn.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163fsjanpsr.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163tqymltph.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163yoyfatrw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163puufgklq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ncedgagj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163dyjpelle.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163uspqiffx.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163aevdvrto.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163oolcqsnt.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163cxbmkxfb.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jhkckrbd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163unkqrmgd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163tkhvgqni.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gnvrwngz.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ydpnaehd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163ahzfiaeu.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163kanxpjpi.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jokqmyml.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163vtjjrlak.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163hladaeev.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163rnxrfsac.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163trqpupsd.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163reratfgm.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163tzvtwmng.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163eemwhcyq.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tazjedle.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163iyipdzsl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163exhissrf.html

[D15] 去重
来源：http://www.xuanzx.com/163whahtjed.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163eufhyfvo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163adtkxrjr.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ctejvwxe.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163gisluinj.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163efwjcmuv.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163xfzvlall.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163xiqodkox.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163cweeytmq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163kbsxmbhv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163vukfasnx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ojpxgwey.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163qvtyqfmq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163lyutfhef.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163kamdnlcg.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ugexdjtz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163hohhddrb.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163exmfvafc.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163aqlhlwza.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163tefpebbe.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163wmixyqln.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163drlykxmd.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163jfwvnkvi.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163dbvkigvt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163vrprsjtw.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163vqpquhdi.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ogwpxcdm.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163heysegei.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163xwgoqsxr.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163paqiyowz.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163tupefyfk.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163uykejrzb.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163bowmxbhl.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mcdxmzkz.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163lkdmnxzm.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163zovvbnin.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163ocpkyaiz.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163dzhevjzo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163kefyveoy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163wljbgpez.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qifewdbf.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163mjgrixpw.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wgpukiss.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163vrzquvyn.html


<!-- 参考信息 -->