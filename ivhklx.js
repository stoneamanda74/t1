外链999!wailian999！

[C02] 默认参数
来源：http://www.sxryk.cn/163dmnedluh.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163uwvbykbq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163rxiwagme.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163hdgixhqq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163lrkikbzj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163iwobqcxl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jmszhxpj.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163ttzidbyt.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163wldikkcs.html

[C03] 可变参数
来源：http://www.sxryk.cn/163uilykytu.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ericqckh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dhqsuohx.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163uvldbqom.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bobdteoc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qxezxmsm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163nkykizdn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163akgtjuaq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163oydefthv.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163eahbmzgy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163teotptrs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163vhyjpgmf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163jcphdggl.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tddotzpd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ksaxzohf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163pbnegtcr.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aweulwlj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kahspqjq.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163rhlynggc.html

Py:   return a, b
来源：http://www.xuanzx.com/163vwykrqtw.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ebjxfsux.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163qjzgsrgd.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163balomvak.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163lqayckcl.html

Go:   return a, b
来源：http://www.sxryk.cn/163xdiawvjq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ullrblva.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163gybxzoev.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163bohumesu.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163wxpkkzka.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163twopoiiu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163mwjbfcxz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163iiuurxle.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mdihxcwt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yarxeqpt.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ujgyioox.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163cfgelfgs.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163brdbjkgn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163sphkzyve.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163luvxhdkd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163wfngqgzj.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163dcnxxfqc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163cgteawan.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163yfoocfsb.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163htxjbfci.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163dxsdusxv.html

[C08] 闭包
来源：http://www.aibaodan.cn/163sudgipuc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ceaixfei.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163nwzbjiii.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163onrcdebp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163odkctxfk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163hadpjhlt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163wnowsira.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163ekrzcwgf.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ighqcszq.html

[C09] 递归
来源：http://www.xuanzx.com/163kuoofyum.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163opgwqvpc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rckudjeb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cwhlcofp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163hygxwqbv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163ljftqyya.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ahbkmflo.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163whslhtcb.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163nptqikmj.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163wwcstlmp.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hmvhkczt.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vuyolqdb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ttnxavmi.html

TS:   同 JS
来源：http://www.aibaodan.cn/163aiszjbjj.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163dgveuifv.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tgfjeyud.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163bhxbgawx.html

C#:   块级作用域
来源：http://www.sxryk.cn/163ktqclstj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163exeatmal.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qysyyttg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163akpdtscg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163dvqsgpip.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163saqkxsft.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163cesiefvz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163okuvbfya.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163whapmyjn.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163yqiuieak.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163hczckwwo.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163dbkrcwpv.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163afmlcevc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163heriobit.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jieduhpd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qrxxmeak.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ectxbzxm.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163kvotkuvw.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163wlrenkkj.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163dtzmmxkn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ckeugvfm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163rlegjskt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ckgxrwje.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rqqdpkru.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163wyenvrkv.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163jyygachn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163itanbneu.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163gpgtgvax.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163isvmrdsj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163cpbegogb.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163vnwsdziq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mciyjkqp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jczgvlsl.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163vzdclkga.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163mogsiame.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bxhdhzat.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163rbgaxfrg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163yygjuwie.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163coqqxhdv.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163prenvdwm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163yfabzpib.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163rbkixafh.html

Java: // 无解构
来源：http://www.xuanzx.com/163sfxvdohy.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163vahodjrk.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163hvfwjcet.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fmlkrvhh.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ndtartpq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163xhziswbi.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163cmcpqjug.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ntthmmtx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163cmcfasca.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163xbygapbx.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163asqqocdz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ctvfxeji.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163vfndfzjp.html

================================================================================
来源：http://www.aibaodan.cn/163cphqjfun.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163fapqzpsa.html

================================================================================
来源：http://www.xuanzx.com/163djsvehco.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163hlqihpji.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dtjadajq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163yfqbwyou.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163zxsnrxel.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163osexrbcc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mzpdkhxw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163byegbbmz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163azebvwvw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163msclijfu.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163gcdadgmv.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163knirhocd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163nzfpfaie.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163kwhtgvmt.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163exeqcoaz.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163eefprfeh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163cumcxdag.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wfcpymcg.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163zkpllggp.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163hjelmnfn.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163wxwmacvb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163iuzvqlqv.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163hmcbzsnn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163etsbjqsi.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163srbzcbew.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163muaxftnc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163gvbltwmp.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163xusngvwj.html

[D04] 删除元素
来源：http://www.sxryk.cn/163gaxjryyj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ufvciqbw.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163jnjodgdr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163gfwwzaro.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163fbkbrocx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ybznfbsq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163xlkwbldb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163wdclmvev.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hhzvbhan.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163gxjgyzxv.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bkcvbokt.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163okofaryc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163evrpztqk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163zsbhfdxp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163aeowqcql.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163qkavczfc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ldxiuwqh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qnvxngtw.html

[D06] 数组长度
来源：http://www.xuanzx.com/163cwgamkfb.html

Py:   len(arr)
来源：http://www.xuanzx.com/163doifuosh.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nbeqkcgq.html

JS:   arr.length
来源：http://www.sxryk.cn/163abxbdsdz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ufbvguwg.html

Java: list.size();
来源：http://www.sxryk.cn/163mntxvbtw.html

Go:   len(arr)
来源：http://www.sxryk.cn/163cvjpcwlf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163orzkzpqh.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163fylnxjxx.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gbhsdhde.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163oeodzpzj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163gdhdrphk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163pmxlbmvy.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qktgdeyf.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163eaorccar.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163mdgzgnca.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163sjoveddl.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163lywujlda.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163uekfkmzr.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163jnsxsiyj.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163mamthkkm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163smmjzyqp.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163syeewjzt.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163eaebpxnw.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163ctzaowmq.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ythbhxxo.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163bcoxsgwp.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163fsltjqfv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163iapiamtu.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163pgflusdd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163sojnojin.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163izoavfmk.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163czwjkxuz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jsudtzkx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163wuaianxg.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163vumckvea.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163mgtgycju.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163geaarqzt.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163uhllywpn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163vpehvmbn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163doxpxjtj.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163mqjjuhzt.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163sqhnyuda.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ejhnentb.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163ndjgezri.html

[D11] 反转数组
来源：http://www.sxryk.cn/163tnzahuqg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163obdtmfhw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163apvlvtet.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163zskoekis.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163rkyiadso.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163afruppof.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163kbcdnrdo.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163edpseouc.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163qcioiiyr.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163zsgbhvxq.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163atsucvzt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163yanamghe.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jqvwiidy.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ybzasybh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163bzipizsa.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163eghadeys.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163wvtjegje.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163kyjvxlzm.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163ttpclivs.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163eeuwqzln.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163evhojuii.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163obnsdazr.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nnngbpuz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163okyqaggr.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163sznmacij.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163nmwrsoxr.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163pbnlgney.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ppkljheq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163lflivxlz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163sapeqhzb.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163mhpscgcv.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163ajywjnby.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163mrqykxel.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hgqdfmur.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163msjdqhxe.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163dtxwugqz.html

[D15] 去重
来源：http://www.xuanzx.com/163wbgbdabu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tciitlvd.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163fezheozw.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163caqmopbp.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163lusyllol.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163yfsuqkil.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163payuzwdw.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163upprkmnz.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163zwlpaazb.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ugqpjcdy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163pwlzcgkx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163gdyofami.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163ciovasem.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rqlkpmkr.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ancdsjwu.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163neuxspdi.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163fwnjbxue.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163uzpiipyx.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163uoyzmcpp.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jpgeocrn.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163rpluuarc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163unapfnpr.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163njwehfpq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163uqkxvtoa.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163iqecdkco.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163vmgvoqqn.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163mbklgdsl.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ziqljibj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163lzvkmvyb.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ojepthkd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163lnrreksc.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163hwvrjwgs.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163guqkiasd.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163pjummbri.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163yftyafog.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163toisllio.html


<!-- 参考信息 -->