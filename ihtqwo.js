外链999!wailian999！

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163pbbmespj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xdulczqr.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163wzdvxhiv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163bggppcuo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163dofmkwxm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163dbkcmxno.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163zsibokuu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163jkfnwwwk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163fagftqpq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163svszveut.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163vonthunw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163zqqwpvfc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163kajntptz.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163liefwzvn.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163hilqbyvw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163nbooacuw.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163bbbtnfws.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163wujgrqfr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163prrbyguu.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163hnwhaepg.html

Py:   return a, b
来源：http://www.sxryk.cn/163lceyxokr.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163rmfyspjz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wkivubeh.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163rlrgaibp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163orlpbfed.html

Go:   return a, b
来源：http://www.xuanzx.com/163gaynafse.html

Ruby: return a, b
来源：http://www.sxryk.cn/163jopeulus.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163nuaiixnn.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163qhotcxfn.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163shvalcyz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163oshcxigf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163kkatlsbs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163xayjonsj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fpywcwrd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163mseojdqh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163vwpdjqqx.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163clejitnq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163sxladtmf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wmnnxemq.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ozrvfldl.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163wnmkrffd.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163xginecyi.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163juipnmih.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163vvcmuojd.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ncnfafxd.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163wincdwbo.html

[C08] 闭包
来源：http://www.aibaodan.cn/163jrndlyyr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163zwspdqfb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ostaqwqp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ohdtghju.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ebbukchz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163jevhtfyw.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ghhesxjf.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mcxjaydl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163bzgexuqz.html

[C09] 递归
来源：http://www.xuanzx.com/163wizgiuvd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163akhyuosf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163onedsfzb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qzawkgow.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163axkpobev.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lbkkmvkw.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163mvequlpa.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hcnofykh.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vhdsxfjd.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ztiejovc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163pukaommb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163pbyhvses.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163tzgenstb.html

TS:   同 JS
来源：http://www.xuanzx.com/163cpknbzgl.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163thgfagdr.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163jgrtpfjm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163mvcegngz.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163yixpagcu.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163pgwyafin.html

Py:   from module import func
来源：http://www.aibaodan.cn/163rjpajnxb.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163tigherlp.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pxwxmltw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163foctjlwx.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163gnoarxdl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163dumzegcw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cvibdsfo.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163libyftka.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xfdnixup.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ihgquvao.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163lhovmgca.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pbbpspru.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163yyldslti.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163orjdpfoe.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jximmmwc.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163ojtqlilu.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163htwltiqd.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163dqcoxdpa.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163zhjrpsiw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dnvcmiyv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mtawzyuj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163fwbymdeu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ielllwgl.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163wnyuhipp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jacvhree.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163uhcnqxyg.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163rbltnvqa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163dpbuywws.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163trditqpg.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ntoefzxg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zjzsaaaj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163ayjnbuzg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xuptpqqt.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163ugtxohbl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vwvcgbon.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163efcmeyzm.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163ocdolzac.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163kkkqxmci.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163onzvbulg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163vphezunn.html

Java: // 无解构
来源：http://www.xuanzx.com/163nnkomlkb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163gkdwvfzv.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163nnuewemr.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163oxedcwel.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163cjmvtsuz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163dgjlddxu.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163tnzqxhvs.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163gfubaofo.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163qzwqjmac.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163cputianj.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163vbqwfvhl.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163aotadatm.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163kjktgbxd.html

================================================================================
来源：http://www.sxryk.cn/163icvipwlq.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163mnfwdrar.html

================================================================================
来源：http://www.xuanzx.com/163kzarkoix.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163hhummpdq.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163uqvczola.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163swktnqtm.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163dnxlfdvo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163fkveslly.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mrbxctoz.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163aawygjym.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jilqmnni.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163afvggcay.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kzrpnsei.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163oxzpgvkj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163xurmzmrk.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163vqahgrki.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163eruhwjus.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ruszxtle.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ukcfmfta.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163avrrrhmw.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163pbqxjzbs.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163tzyysxpv.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jihxcjwi.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163dmvfdutk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163azcnjncc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163aiokpxar.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163govolzeq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163lrjpdrcw.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163nslojvfx.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163lceltwjh.html

[D04] 删除元素
来源：http://www.xuanzx.com/163ehfxzuny.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163lmnrllbu.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163vlksvurm.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163fjknypso.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163ospzyfcl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163vagpoqzp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163unrbjqza.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163zebweuud.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163egkxqsqe.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ragmvcpl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163tykxmppc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163zegbsohx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163hexhgryb.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163eoqbuwzz.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mwfjoboy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163fakmveln.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163gnpjbvpq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163nvxarmqh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163lhxrtuip.html

Py:   len(arr)
来源：http://www.xuanzx.com/163usscvzew.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163kdfsslub.html

JS:   arr.length
来源：http://www.sxryk.cn/163saujicnd.html

TS:   arr.length
来源：http://www.aibaodan.cn/163elwxaeer.html

Java: list.size();
来源：http://www.sxryk.cn/163djnlelke.html

Go:   len(arr)
来源：http://www.xuanzx.com/163srzycvne.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163hdbvrdqo.html

C#:   list.Count;
来源：http://www.sxryk.cn/163qcxankej.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163vegvppnj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163fhxefczw.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163fyqhypvs.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163dnununle.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ohlqxrva.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163oinvvrpt.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163lbrhrxqh.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163szoybkoq.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163rucexeku.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163opnbhdof.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163ubtqeiru.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ccewvqva.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163nctoplty.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163myzfwqav.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163ggswbkhm.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163dtnfewly.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163tzzlzkpv.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163ucjgxveg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163xnoflvba.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163yosoaphd.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163wyddgalm.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163uiloladi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163jiumxttr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163qtmtwqnv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163jgjswceg.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163hpgbquiy.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163julstzvm.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163jklczatc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163dvjldxcm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163wabdgynv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163sibthcap.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nqucsotf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163kwbxvnfx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rqockkui.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163efrhbuza.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163lzzsxizo.html

[D11] 反转数组
来源：http://www.sxryk.cn/163ofifnwqk.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163xrblpkot.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ndqsmsbs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163bjdtbxfb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jrmbrdup.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163qupkgrcs.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163sbncpmqz.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163cbmkvrsn.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163davgkpgt.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163pjjonadx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163nbedxnko.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163mqooceue.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163apicnkso.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163thlbhfyo.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zhmmqwny.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163qiqssjwh.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163wnnnevfd.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163nndbjwww.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163nhfeqvxt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wxdveskm.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163djpefrrf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dwuufvrc.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163evepqdkp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ekrklhan.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163notbbszu.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163kazymgxf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163kcbqyols.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163bvlfxuzd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163aaqnnizs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163stmhdfjf.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163jhfeeuml.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fskhnmvc.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163glgopqqb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163reiybycd.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163chxqlkqf.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163uybtaccc.html

[D15] 去重
来源：http://www.sxryk.cn/163zhhzrwto.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163citlxoxl.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163llgcasum.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163subxipdy.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wbifgovh.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163pmtrdmio.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mupqznsa.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hlmbqeig.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ycgwlofv.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163mgexfnzk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163wnbsxcgh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163sxasvofk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nczhaouy.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163nmpfcmbu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163jeyvdutg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163footocxi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163mwkcfwac.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163xckqsayw.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ffjqbdbo.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163talmyrfc.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163awdaypqn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163wsbbrele.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163mntclrun.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163yinwdpce.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163jkuguwzy.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163lqlruktr.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163ehbaqhet.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ncfzdehd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163yohugfyr.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163lgryzefk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wlqvtnul.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163vhepitfv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163lbypbcsg.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163tanzuspu.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163tvmhljln.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nticoync.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163wouolqds.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163lcpihfid.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163wvuylvdf.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163dcskefmo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163ocedhotu.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163tkjshmlg.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163yaljadoc.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nkgjfnju.html


<!-- 参考信息 -->