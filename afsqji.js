外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pampwphv.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ysgrolgh.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163tgtipwvp.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163acjhugqr.html

[C02] 默认参数
来源：http://www.xuanzx.com/163mahngboo.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163iskgityd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jxvjymfk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163xzttvtfy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163riitgvhp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163rppqtsuu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163dypeefns.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zpfpvrum.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163gexqhlyd.html

[C03] 可变参数
来源：http://www.sxryk.cn/163boytiqpj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163puviwlbm.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163vwqnqgop.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ixvlppty.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163fkbzacfd.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163ksdmtguc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xkxpvhuf.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xqxhpgui.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163lcclwxrs.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163bprwrsor.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qwpcassj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163zkavcpwc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hpeacsfs.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163lkiljwfo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163vnouqcyj.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163jlmfjrmw.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163adrgidqv.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163glxnxxtn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163ggjtgust.html

Py:   return a, b
来源：http://www.xuanzx.com/163saosvovp.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163iweutgwd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163qgvlxiup.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tsntoofg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163orgozans.html

Go:   return a, b
来源：http://www.xuanzx.com/163dsiegask.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163klgffarw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163cbsnedmy.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163rztedvjc.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163aprbzkaq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163yrmyetlj.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ghxqzdqj.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zwpnjtjt.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163vbcxwgki.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zbcyfvzx.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jkqlbojn.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163jttwdvch.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163jeiptsdw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wjzicqxn.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163bzuiohms.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163xjqkwqhj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rvzzlvid.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163biawhpzj.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163lpmnjspj.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163kwtquxza.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163xpwphdks.html

[C08] 闭包
来源：http://www.sxryk.cn/163odbmqyzh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bnalrfub.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rvuizzfa.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cungbave.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pigmasph.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163eqxgdgsk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qboupmap.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163opfppmvl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ymxexige.html

[C09] 递归
来源：http://www.xuanzx.com/163yvjraowd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163deadzzpp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163pzkxmcye.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hqedbxpo.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xdfprxes.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tdtkoqwt.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163yyaveqpm.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163rpcypvrb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163votvercw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163eiarwyvs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163mxkgomxt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qarmezmh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zgvseqov.html

TS:   同 JS
来源：http://www.aibaodan.cn/163wavzyjir.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jgovobef.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163rueqbzdh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163lbsxaftr.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163serojfot.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163mawhsczj.html

Py:   from module import func
来源：http://www.xuanzx.com/163adgqkuhl.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wilofxve.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163hhcotfmy.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mocwvvqi.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163borrzlrx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ifhtpeor.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lymvfpff.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ktxcrhmm.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163gccdfojz.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163uxxqqwlu.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163gtjiolvc.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tltpwxhq.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ptsrrbnb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163pqgsjcos.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163svwropym.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163iuqtuiyf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ebbkmzbq.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163lhjrxgle.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zsioipkw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163iztfamdy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163jrcligvn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163frkuorku.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163kuhzhjtx.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163dhvedflb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ujoxbdox.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163unnqprcv.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163hddrrwns.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ddwsynrf.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163atyinkfn.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163yytwywrk.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163aauauwsi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163btxeztrx.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163ebxyvxkw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163cnltifaq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163soptqzur.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163mtstcjmc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163uaidpwdq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163rmpfgasg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163uowugaej.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163bgtqfwxd.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ouqfsqqx.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dmpydvkk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lyyrrzmh.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163lnvthyuo.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lrbnifff.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163unttbbzy.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163iimgtgvj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163lykoqwwm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163nfpxllri.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163kqwvudzw.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jaznfhhv.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ahyomuph.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163jxyuhfkv.html

================================================================================
来源：http://www.xuanzx.com/163sgtvbilg.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163euocexde.html

================================================================================
来源：http://www.aibaodan.cn/163fvoqopat.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163oivgmybf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163iabpldjt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163trsnqsfb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163njzxwxef.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163gdwlzcun.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ksgnejis.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163byzyvmpm.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ebbqemdr.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163wtgoralm.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163iutofere.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163imtijlxp.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163urmznlfc.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163bwquaoxd.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163jpydundn.html

Java: list.add(4);
来源：http://www.sxryk.cn/163fnsjjvav.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163adgtrwfi.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163cntwbtfu.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ynjlraml.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ahelxyif.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163taurftci.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163phurylpe.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163vjttvudb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jwsnxfmo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fentrxmp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163wtbfyzhu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163wysptmif.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163nrkyyjho.html

[D04] 删除元素
来源：http://www.sxryk.cn/163ogdcnkai.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163zqqxxjqm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163hgphykcd.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163anfsbjeo.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163ngkiegjs.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rquyktji.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163oeaqpopv.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163plxcpycg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163uuxcpblx.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zqqramub.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163hbgjvnqg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ouwrobbd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163tkrhfluw.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tqqynurh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163wkwrkzha.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163jpcycrou.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163gbhmczvo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163vszqsaog.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163vdannazg.html

Py:   len(arr)
来源：http://www.sxryk.cn/163idqxelyl.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163jgubdkcw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163fnhenhzi.html

TS:   arr.length
来源：http://www.aibaodan.cn/163cgxrbhit.html

Java: list.size();
来源：http://www.aibaodan.cn/163soaucjzu.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163puyaalcu.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163qyvdqlad.html

C#:   list.Count;
来源：http://www.xuanzx.com/163lgjqmoyk.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163kxemkjle.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163czdndepr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bvvxscjt.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mrriisla.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hzkklksj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163oustycks.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163qqgphclk.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ailyrikf.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163eiygbyhy.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gbcdrwcu.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163yvqvnogd.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163amqvthrq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163vumxkyaa.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ympvwenq.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163mpzvxvzj.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163rtdsdjfh.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163tpasiuiz.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ajytyxrq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163fibgmhos.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ihiojcyx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163sbyrztjn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163ovuhtabm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nwjzvfhw.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163tdrwsnue.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ezeihoru.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163iybxnehe.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163wyhkcanj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163gsimbpjv.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163whizvisd.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163oxwulmfv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163qpdrucmv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ksecvtfl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vfktjqpn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163dqdnrziz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163amnroezp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163jjlxqbgs.html

[D11] 反转数组
来源：http://www.xuanzx.com/163dwvhrtrf.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163jqorlrnh.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163efytxlmf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163jqmwsliw.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163pcpugcci.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163rvniouef.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163xsgscqwf.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163rkyidppx.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163jbbojapj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163bxrdzhlx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163umnwblby.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163aofbmnhf.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gzbcxfae.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163dhsujson.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163tcdcttfl.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163smuurbja.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163tuhscsyi.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163diiyrgyq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163pjscinab.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ppumugzk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163uczrraws.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qilxygzr.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163mlxnwuvi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163xgyznhry.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163hkhtgyrn.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ubjdivqk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163bjyyzogs.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xifxolan.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163yjgttisp.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163rgrrhnmt.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pqgicmsy.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163emewnmmi.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163xticnfge.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163rzgnqbdx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163zpljkcot.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hvgfuzas.html

[D15] 去重
来源：http://www.sxryk.cn/163gkwtjxza.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ccjftjnc.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163yhnllhha.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163izslunhb.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xbxbcwvr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163emsivpmx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163bzgyedun.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hvldikpx.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dizarlve.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ybzguqzv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163wuoqtubk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163qwwkphgl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163utbhrijg.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163rcedrwlj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163lmctkytu.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163tkrxovjb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163msyuyklk.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163zkoywifj.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163anltjhrw.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163pgzikjqm.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163kxilmiov.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163tuztfijx.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163corqvqwq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163dnvuuqpq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163heracznh.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163uixatqbg.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163pyoqtucp.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163vvlzvcrz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163sdyyxgey.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ytgpynqj.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kjuwyjih.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163wylnvqdw.html


<!-- 参考信息 -->