外链999!wailian999！

[C02] 默认参数
来源：http://www.xuanzx.com/163elgikbnl.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163lxbjiakh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163bvvscxnf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163naeqibnx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163voorxkag.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163igpntosk.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163txgegkro.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163zloaknsh.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163indbxpya.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163vgsayukg.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163mcmcjwix.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ifzongpu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ynjznjuw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163icxpsclt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163wdjrnlne.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163zrlhcizd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163vuubmgng.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163rwofsdoa.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ldryhivh.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163jakfqmvg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163oxqbkoub.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tbmjdhxb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163rwhnvldw.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163sufwjsjq.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163eebvmail.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dxiotfdo.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xfdkfzzt.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163kloxrxjo.html

Py:   return a, b
来源：http://www.sxryk.cn/163rrsrwanq.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163hakoimfj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163yfxqsatl.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zgnfoqfl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163dtqczbbh.html

Go:   return a, b
来源：http://www.aibaodan.cn/163rhppdgta.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ukraiyrr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163yzciawiv.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163fyofswqg.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163yinhnght.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ypyhdtyf.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163whaybneh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163rzwkekng.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163qdzrrsaj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163xzdftbmb.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163yinxofys.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163hujemdkl.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hmsodsrv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163quuvivvm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163tdfltfwp.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163pqcsgfrh.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lhvovjux.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163wflplqbe.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163heheqpwb.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163wftjftra.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ycwhrnce.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ymghcany.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163jukgnrjz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163nbjujemb.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bxcfqazm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163mgzttodp.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163pcjavpue.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ztffzhwx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163nkxepwtl.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cyaohlnj.html

[C09] 递归
来源：http://www.aibaodan.cn/163nimxgkmk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163wpngkixo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gvcewxir.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163petcbmnz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bpsowmoj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163pddbpvme.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163nghgzpms.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163jywakisx.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ekvoqukm.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163mcuvqqoq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163sjugowet.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163dszhgjxv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ymahpmos.html

TS:   同 JS
来源：http://www.xuanzx.com/163kiccfgfw.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163tjxmsrsn.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tepjurgj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163ihyorseu.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163hbtuhacv.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bfkihqxf.html

Py:   from module import func
来源：http://www.xuanzx.com/163rdxavldk.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163lfwjpzjm.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163oiqpzrhi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dryforjl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163vmxqcnlj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163uifbpuvd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163dbhpkgtd.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163elminvcq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163qdyvkzku.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163tlkuzjia.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ssulqtab.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163kiveltnz.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163uhfeiyie.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163tqzdzytb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gtzuviql.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163crftfnrq.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vthgcxko.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lltpduax.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163jptkzzff.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tizguhsc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163azstbfks.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163bwpvdibz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ovorwnvl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163teifthwq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163gdgonpdn.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163wclvjrwz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163vacsruyk.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163hidbchvb.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163ipodfvru.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163gkucktia.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163ctedxwzi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163ydulqpbs.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163gbukteli.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163bwbnwdiq.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163mathhlgs.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163fmpfxlsi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163idxjvdhr.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163fzfxxmsj.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tezdurwx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163lirnmxnb.html

Java: // 无解构
来源：http://www.sxryk.cn/163zpbkyqam.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ldiyxoer.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qdzaocxz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jiqrgvlr.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163hmkuhdnr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163zymolgur.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163aiqjgwog.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163eiykfmsw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163kifqqali.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ympxybzh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ftlztpzk.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163wwlypqmp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163vppfgmrj.html

================================================================================
来源：http://www.aibaodan.cn/163jtjzdhce.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163lvukvspe.html

================================================================================
来源：http://www.aibaodan.cn/163cztgtpty.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163oxmfxmwb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163laaahwgp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163eyuivfgp.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fxlyumjy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163divxbmqj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163qndynbbc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163rxtrtxee.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163idimhqte.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163vjoyeflu.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163qexpqfid.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163iisnhlmb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163uchqmbdl.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163gnzfdnjz.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163lsjwdzan.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163vnyuuuxq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163hgbrxjnc.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163jcdbryyx.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163pppthpqa.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163evubrzls.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163lbxiiqdx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163wboxwevz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163xsdanamb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163zsqehpwg.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163crtubdsl.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163otpukrof.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163bvtyskki.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163flkmupjg.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vqilnndy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163kuytgjlk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163dmhgfrgz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163hjukvsjd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163epejokju.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163hvyslpns.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ijoymkos.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ippwlryy.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163hatrwhcb.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163htvhhtey.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fxmwoskr.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163cpudcblz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ybjdvwhs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163hkvdtpbr.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163kjdajpyy.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163pezjzkfe.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hnhijlrr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163syvogwtp.html

[D06] 数组长度
来源：http://www.xuanzx.com/163daixfwhu.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pcjgvszs.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163snfdoqwr.html

JS:   arr.length
来源：http://www.sxryk.cn/163bxfyhnai.html

TS:   arr.length
来源：http://www.sxryk.cn/163pbmahtpv.html

Java: list.size();
来源：http://www.sxryk.cn/163achdkkwq.html

Go:   len(arr)
来源：http://www.xuanzx.com/163kncrxyli.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163durpdkuo.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ufbdjcxw.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163ypuookjt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ngprdqmj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163daahriie.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163heayfuzs.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163veimgzdz.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163gtipxphe.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163jnwkimas.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ipvgslqk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163jikfdahy.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qdfxsmcz.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163hymidpep.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163wiklbosy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163cudyjggz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163lifehkab.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163neovpdsc.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ydwatpsl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163vaogqqtp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fraipobu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ninzftuq.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163kkvbccdx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qfkhpfex.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163cjhjxcrc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163wibypgle.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ytxbtirb.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163mioyjxvn.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163buinyiop.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163dhnnczdi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163fnorvsbq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163bnkblqii.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ttjwyamt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mzskoazr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163yxopaakk.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163usrcilax.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163wkzqatcc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hgjgctbc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163nsielbnd.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163ozuerjfg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zyrxmgxf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wlkiccqy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163emnacwol.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vgwjddeg.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163tmsrnwgi.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163yamrllqs.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163prccfcml.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163tqsqjnrt.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163bxoncopc.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163lfkfesxj.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163quucthrl.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163krpmeehg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163idorxjca.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ywmoctfs.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163uhzzpngk.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mfmyvfpu.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163wcrilrbj.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163cjjiysgn.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zvizhwga.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163kclfptqc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163hfgbyujf.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163keifeofb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163uloipwbz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ywynimpd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163aefgasxq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163fmgcttjy.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ltfmmqjf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hpycnpny.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163gcgtqxoo.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163suhaebqx.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ltozufjr.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163cgymheup.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163auzjaxtg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163byfcawmy.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163lkcwxexa.html

[D15] 去重
来源：http://www.sxryk.cn/163ejysdqap.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ezuxtsbr.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163cxhnbwdl.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163puznmopn.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163nvpxsozy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163hnrploje.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163dhpryzti.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163mgozubqj.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163dagjyicr.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163engpxuvf.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163spripvxc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163dsklbtbc.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163njezemer.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bwzyidez.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163jybzxoak.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163bqzydbyc.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163xshplpmy.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163uibhstan.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163wtmoctbq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163nunvgrwg.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163qfsxdgza.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163rfnhhtah.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163vnoexkzn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163sdvjcfeu.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163avykriar.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163jywfwpof.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163weavtwxp.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zvgauoxq.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163wdqtgqsw.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163vdjfrnba.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163waeygjzp.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163esifixqw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163xsusfeal.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163jvmgyicn.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163pvuyoqyp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163njtzkofq.html


<!-- 参考信息 -->