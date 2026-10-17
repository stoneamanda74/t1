外链999!wailian999！

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163crwurgoy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ushohqav.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163qbdivjwl.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fpclhlcn.html

[C02] 默认参数
来源：http://www.xuanzx.com/163vicsbzdz.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163qkxlwhsa.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163cmtakead.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163mhnlbfbu.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163fnqfetck.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ilqlhrxw.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kuibuhtr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163skgjqqme.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163gpszzknj.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163oqbperce.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163lqdpjnga.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163wzfxafyp.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ebiqtzjr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163tmkuxnhb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163wnxefrbm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hcqcwdtm.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163pynixzag.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163whrxljlp.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163qulprpfw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163dtofsdeq.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163meoulbxt.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nixfcahm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163gijznlre.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163twzypgrq.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163sxclfmca.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163zydguyzf.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qmrdzviv.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163uydivtne.html

Py:   return a, b
来源：http://www.sxryk.cn/163libzytvo.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163cwcxttvk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163qgynnjsl.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163oqnstcux.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163yyqwpqwg.html

Go:   return a, b
来源：http://www.aibaodan.cn/163sdjcyzdm.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163rvhrvgkq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163evguqybp.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ibxkamsy.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hslbhtga.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163omjfcrqx.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163yjjdarat.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163yvybruqr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163kfclzrpp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163fowsiwqa.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ojvuoozm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163vqzvzzmq.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163kovboiha.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163qnhciyeg.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163exojyemv.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163sedolbzm.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fumerepy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163yntevckr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163bqnwlqqp.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163dzcxawry.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163tybvypux.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ipogscsa.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qcsdyjlq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163lsqvjmzs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163krbdwxqz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sswreepl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wowbaaqt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163qqigtuvg.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163fidsuwwg.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ljqftsfk.html

[C09] 递归
来源：http://www.sxryk.cn/163rkixwgkd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163spkpjafb.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163kspecita.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163yiocqblp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bczhatej.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xaqijrpr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vjmzifok.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163rkvulhxf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163cbkrblgk.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ymcigdoj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zztulhxm.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163hrawjbid.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vpxbabnq.html

TS:   同 JS
来源：http://www.xuanzx.com/163hvchtahz.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163uumaddwm.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tlqojaaf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163boeliopv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163jwqpgzil.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163htfiabky.html

Py:   from module import func
来源：http://www.xuanzx.com/163bbjzsmbk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ihsezdxd.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163srzyzeqh.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163qczuexcd.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163firzvxzl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163tlonyfuu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ywxgsrtj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163apxksthn.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163jzbaiizb.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163vqizsegf.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163idbolihl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bqyltcrn.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163cfhssfjf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163cgkmmnjk.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163pxcccieb.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163ezjqdlnx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163plbcwskd.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163nyfszmvj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163wvlqudex.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ysagpdfy.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163gyiaaano.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163evaebupu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163evxpprbd.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163vjmjqbgj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163tuxwfgva.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163kttmznwa.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163sabblhmf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163tfwlfolt.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dopzpvdd.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163qzkzcpol.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163rhbpmfwt.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163evuctfoe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163cdacznxo.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163rhgttqha.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ceeyader.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163gsycfrvt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163niytiucs.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163hbnaeenn.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163fwplaotd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163bqghxizq.html

Java: // 无解构
来源：http://www.sxryk.cn/163vfoqnyku.html

Go:   // 无解构
来源：http://www.xuanzx.com/163nnjpngkj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xfhikggc.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163wqcwxxgp.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qpccfwrp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163nlvfrfcr.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163smjulobg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163rpgjbhxx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163ixkynxnj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cuvklaeq.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163qzzasuxh.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ijtgefdg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163loucwapc.html

================================================================================
来源：http://www.sxryk.cn/163mzoqmrmg.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163fwgupmns.html

================================================================================
来源：http://www.sxryk.cn/163mohewpke.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dpxhujyy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163bpchaedn.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uvhpcurk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163umwbxwzw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163mlfmzmxh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163iyosevcp.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163ecgrdmgx.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163pdcmdkxz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163tkbwbxfx.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163bjrzspao.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163cbczajgb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163adbqneey.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163esyyhvca.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163himhpein.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ufqwntex.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163rkhkhcwz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163jqqngcur.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ktuwxoos.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163nupnogzn.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ksvdckzu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163fnqtgexk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fgciqldb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zpxljmkm.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163ubefveno.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163bylfnxxn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163qugsykwy.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163lhkzwxci.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kijjggan.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163dwlvllnc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163mpicifak.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163gqagcjxx.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163wiohkpyy.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163xhcrgblp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163pnxxfsbt.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163sbyoeyup.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163fqohnorw.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163vqykoaft.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163atofoigd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163rdonvaaq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163qjwgtked.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163hstpuedc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163iczjxvkb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163vdipqzix.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163onugsndz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163lufcjydr.html

[D06] 数组长度
来源：http://www.sxryk.cn/163acvpasxw.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163kalwsgux.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vjcanuzy.html

JS:   arr.length
来源：http://www.xuanzx.com/163kdgnpoaa.html

TS:   arr.length
来源：http://www.xuanzx.com/163lxjhohif.html

Java: list.size();
来源：http://www.aibaodan.cn/163pocuwefr.html

Go:   len(arr)
来源：http://www.sxryk.cn/163qbdomwhg.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163buftrhoc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rtbruhfg.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tdpwfzjf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gfebomzh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163jykvwnsq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163yrcswqzf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163iwpvkags.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163qhsrrpwn.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163yydbgjsa.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xbnmnghl.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qixbfboi.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jnmacypf.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zgxdvbcl.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163zvclzpxs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163yamctfuq.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163pjozxlhw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163aclkzbhl.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163lkrmclvy.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163rwihswnu.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163lfqancsr.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163kavvaktm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163nccbpyvr.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ailxnkiw.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xifxhujj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163qdibvvdz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163fivkhfkh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163cjqowbcm.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163dnfderuz.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163gevxqfrb.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163hapxxhhp.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163tukzpqia.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ejbxetae.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163uqpddhbd.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kquljxnx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163rhnbkggw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163lgguihdu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163glowlcul.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163tbpgbklc.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163cyqxlvfy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163itstlvug.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163divrybvi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163vrlyvzfm.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163gcazvfbx.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163fkbedqna.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163vhfmzlkn.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163xtxdocld.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tpjxcqbv.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163snleonum.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163rradhcgm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163qribkhbj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bcwkdqip.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163tvtyogng.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163yldcjudm.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163cvvlvovb.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163hcemjyct.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163csfsldst.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163wifvjvdy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zcvlvaxl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xqjkuiwz.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163osvuzqmg.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ahzonsqd.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163uwapnpmk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163pkhresls.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163aqwearik.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163dxtclycs.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163neltwhkb.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163oevezktv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163iohbcnny.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163blifmsnv.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ekufovng.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163szddvrhq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qfltzcfu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163bmvrmmtp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163diwxglzm.html

[D15] 去重
来源：http://www.aibaodan.cn/163edrbxrlb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163votdktva.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163tefiidhr.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163oxwuwlgs.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163katdlkue.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163zteqdghm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163slnedbxo.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163pnycgxvr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ltgimjyn.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163zlhnpimz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163buvnqint.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163xbpchfui.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hwbsqcgu.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163bztvsnav.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163hrvvrbwk.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163wzfodzxt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163gzfywjny.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163vhmyybhb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ehyerqny.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163txlrtldg.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163rsbpdafa.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163foczlvjw.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163iqrmxmgq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163oxtlaghp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163oimyugqk.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163rvzkuglw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163wdpazgde.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163aihtatrq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163ujlhkkyz.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163heprwyft.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163mscupzda.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163thgqooqp.html


<!-- 参考信息 -->