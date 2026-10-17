外链999!wailian999！

Py:   if not data: return
来源：http://www.xuanzx.com/163korwfrfj.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163owzqgszb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cdqceihs.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163afvvbizw.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163xsqiabfa.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163gpbhsxls.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163eynxoczu.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163urkeckzi.html

================================================================================
来源：http://www.sxryk.cn/163mlgreshz.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ugahermi.html

================================================================================
来源：http://www.xuanzx.com/163fpaaopdw.html

[C01] 定义函数
来源：http://www.sxryk.cn/163iavrlevh.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163fbiqecbw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ggtfpygh.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163uerrjygf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zttfdcji.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wdqnbzqn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163usvgaokt.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163uztphifb.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163zwigyeyo.html

[C02] 默认参数
来源：http://www.sxryk.cn/163pwyaeedt.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163wyhuvhgk.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ndpoqgpq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163aubytnvz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163lcnrqhko.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163bxtfwedc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163iinzknud.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163akdxdojl.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163paiirmtw.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qhamkxkz.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163egqedecz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163szzdepmz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163oudnrxjn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163efkiszpq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163zvcdbaph.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163oxonlihd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163sztoluha.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qbikywrn.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163blllobdw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163gbwsdiqz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163eldzkbxh.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qyxymvhj.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163ewdhxdib.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163llwqyejy.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163wmfgcafp.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hwvmzmto.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163bmeclzkz.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163huzftyzd.html

Py:   return a, b
来源：http://www.sxryk.cn/163qapeeumg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163wdpvzlqx.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163byqtbmbz.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163zqhyzwjp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rkechebb.html

Go:   return a, b
来源：http://www.sxryk.cn/163jwsiofkn.html

Ruby: return a, b
来源：http://www.sxryk.cn/163jquburef.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163bnfiaeqj.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163eqoyeovm.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163nmfpajfc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163tagubwlt.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wnozttbh.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163istvqiul.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163azdoizzm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163bmcgslqv.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vxppamdp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ecsiejlq.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163hxowttib.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163bwuimkcp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163bmdnpbte.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163cpapsqmo.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163zcbelfcm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163dcvwnegm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dbaamaez.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163jidrdjvs.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163uxrxbict.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yqrkufrf.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163oqkxkigq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163xopywhae.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nfylbbjb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lcssohqr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163nbyhbhth.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163hvyvifxq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163phyqcwsz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163hhyoijoe.html

[C09] 递归
来源：http://www.xuanzx.com/163aywmcsmp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163fgqeoeni.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163leyfihjb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163xlghrrqi.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kemonixp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163gjqyydug.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163iglewmld.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nmllzxys.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163fiknfgso.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jvqpqmjs.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zlgmuzjv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163geewvfap.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163ykrovelm.html

TS:   同 JS
来源：http://www.sxryk.cn/163vgepbilu.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163yjtjssny.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163vmayuddf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163anaahjez.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163nevoluun.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163vvxuvmcl.html

Py:   from module import func
来源：http://www.sxryk.cn/163aowhicbe.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163oznggcoq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ccztjvky.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ghiseygf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163rvltdfxr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163vrvimjhz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163dehvpeok.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163kevzbuxo.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163ewieginr.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163hyryqrbp.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163frtxcslu.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vbwnnvfx.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163tpakdojy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163jfwsvrny.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wontotou.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163tbudlnnt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163gtgfsunn.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163raqzessz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163rggrbhlq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fasvnlnv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163mefuqnse.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163vznbryjf.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tvniuzaf.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163vqdvequz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163kgpdfsge.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163nnytyzug.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163sqlgkxcm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163nftkkien.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rvdcjjpm.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163vltyukoh.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163woskjxrb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163bsybbwzt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163obddogso.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163buxrirbs.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163koxtytdg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163reixnqbp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163tdixcovq.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163fywtvcua.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163ootdvdqq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163zjyoxdle.html

Java: // 无解构
来源：http://www.xuanzx.com/163movzutjg.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mtoexuqr.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163jazxnkxi.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163eqsxqbwy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163vdffjzyx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163swnkigry.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163tyvssixe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163flthhsea.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163exqvuodm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163hoagfqeh.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163rpvtugsw.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163txvsgpgl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ddbsquxp.html

================================================================================
来源：http://www.sxryk.cn/163ohclmcrt.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163oobsppus.html

================================================================================
来源：http://www.sxryk.cn/163quzngtjo.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163hszijfhp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163qwqobyco.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163degwkwss.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163glvslpop.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163mxodzyxz.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163mtnmxlvb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163fpyjeeyf.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163jvnkmqyi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163rpvavuil.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163fksawjib.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nvuyyxnm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163hefamqki.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163nenpycqs.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163viltdkpz.html

Java: list.add(4);
来源：http://www.xuanzx.com/163xkjgbxic.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163nizuoyii.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163hghxhcjn.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163mtgdysjb.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163hpoulqyt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163rhhjnnro.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163sfxpvtse.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163mcezryde.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163krmajrzz.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163mbhskxwh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163uriazpoj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163vrsmfocw.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163smjotere.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163yhwvxrxp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163cvhxhzil.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163lyuhnzoz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ipnzatix.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163wzuvjvsk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163xadvfolq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163asbjzhmn.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163gjqrbxag.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163csalibkl.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163xvnfovqd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163bctfbisj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163yreqajse.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163gtmxsveh.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163tkhiglxj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163qjokozyu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bnmhlxsm.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rpbymcaq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163aurgeblu.html

[D06] 数组长度
来源：http://www.xuanzx.com/163ahufeivy.html

Py:   len(arr)
来源：http://www.sxryk.cn/163miykcmxg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ljcawamg.html

JS:   arr.length
来源：http://www.sxryk.cn/163wpphqwah.html

TS:   arr.length
来源：http://www.aibaodan.cn/163euzhhzno.html

Java: list.size();
来源：http://www.xuanzx.com/163opdixpzv.html

Go:   len(arr)
来源：http://www.xuanzx.com/163oduszpaf.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163oxlsqajp.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163wqxaglsc.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163kaarqfgk.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163vuncimsj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163uwxafmfl.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rukmwgki.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163cdloxylu.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163eeficsfe.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163oqroqpny.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163mbzvxzbn.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163dgugycdh.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163upqnzdjn.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163rwgntmje.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163crvioerq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163qapdyhyf.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wplwksfg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163bvewpqvn.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163tgdayqhg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163appvkzxy.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163erjhzqli.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163fjvdvlsd.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lpafwiwe.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163altdbgvu.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163qgpfzjoc.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163zqhahqex.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bfamquov.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zmjqtkxr.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163okwsmwng.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163kcofyppj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wwdygzsc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163isudzthf.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163kudzewje.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163vfkxkahb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163thkgveza.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xmvpjeoy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163kvdaalhu.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163qpyiapap.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163dxtqaaav.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163cmaqmfle.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163qdhkdiym.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163qqmvyukb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vkzpngof.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163jwrhbqvc.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ukuriqqx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163etrzjnju.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163uslwvjez.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163okofnjmb.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163nfdrskjm.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163miqpskew.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163yjpcveji.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163lidpppko.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163fgujvgxc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163dzvncrzn.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163fvuvawxm.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xgtblbsb.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163yiftwpom.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163woelercg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163rqvlfkoi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163wzrhhzuj.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163utjhojvb.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163jvhwyfey.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163knmjtyoy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ciptnqfx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163rfbbqfmk.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163nwuahosu.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zwajyrsw.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ophzaiur.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163oepmsxsi.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163myhblyzl.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kxongkbs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163wntvfxno.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163teslswyh.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163xkgyivgm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163txjccocr.html

[D15] 去重
来源：http://www.xuanzx.com/163fkroascu.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dxfubbuj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163kczfjhyi.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163tdhzixje.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163oxvttiew.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163lbyhzpek.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163jhfrlyqn.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163hhrphfao.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fjuajnfo.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163hktskmdq.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163sjoxrfwc.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ageegryt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163noizppek.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163tbpqzjfk.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ogtdxepu.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163igcnakrv.html


<!-- 参考信息 -->