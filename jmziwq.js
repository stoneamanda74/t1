外链999!wailian999！

Py:   if not data: return
来源：http://www.aibaodan.cn/163glkjyzaa.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163hkfwqtvv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163acpoudsl.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163rmpaldoc.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163aaoilkga.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163rjkjunqq.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163wowssdqg.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163mxqczzrn.html

================================================================================
来源：http://www.xuanzx.com/163aafkxzxe.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163evitcoig.html

================================================================================
来源：http://www.aibaodan.cn/163ngjmeypp.html

[C01] 定义函数
来源：http://www.xuanzx.com/163qffkgsun.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163ghzuzohj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163twgpmrla.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163dgrjimhl.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163dkcfompz.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163nddvyrwf.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163lfyntzoh.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163edmtxjag.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zkgxsvra.html

[C02] 默认参数
来源：http://www.sxryk.cn/163sqwydunv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163gdvpskvm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163nhlsbrws.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163duvwfltf.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163raoatlxd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163ffanqstb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163zohiblys.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163soetsrlj.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ynvyocls.html

[C03] 可变参数
来源：http://www.sxryk.cn/163eorhzawv.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163xvolhxjn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163pvovxttt.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163qlkzfddu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xbpcajos.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kqxclkxa.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163ekaqlvbc.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163kgefrpil.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163xbznmmim.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163mnjbydzd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163skfhhsbz.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163rvazxcls.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163pnflchbv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163plimwqzj.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ktnhgddc.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163xhlmutiy.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rfkpwtmi.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163clmwivls.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ngvlgkou.html

Py:   return a, b
来源：http://www.xuanzx.com/163duybdrld.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163hybwxdag.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163rhvjzucq.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163yjfbmgck.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163dtseavht.html

Go:   return a, b
来源：http://www.xuanzx.com/163ygnahgws.html

Ruby: return a, b
来源：http://www.xuanzx.com/163ifckdsts.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163konwirxw.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163vripncpy.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163hrmlplwc.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163qklfdkxz.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xosxnnzm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jncmolxc.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wlffcsog.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163raqsdszt.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tkgzpifp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bgdjwhfd.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163mwtxgves.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wkcumhrx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163nfdhildq.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163plkxdevh.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ntsgsxvm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163upbgfszg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mzzlfnka.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163atmfbdoo.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163dfcenaxo.html

[C08] 闭包
来源：http://www.aibaodan.cn/163wotrexmy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163vzwcmwhe.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163shxkstca.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rclkbctw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yqbxxcmg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163dwyeprnk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163siokjtha.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163jxpiidby.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rtzhigap.html

[C09] 递归
来源：http://www.sxryk.cn/163jsbucutn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163wyhmwlxp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163tkcqecqa.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163tcumzyyx.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163prmbgckb.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163tnzrlpsa.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163spekfxhd.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163jdbyxqay.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163hkomrlvc.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jenafujz.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163njuqwknu.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163etweuetv.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163vsqmnhxb.html

TS:   同 JS
来源：http://www.xuanzx.com/163uwgwfmio.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163nltpilli.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163blrbljhi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hptikphi.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163brpvicbm.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163uaxhdpgv.html

Py:   from module import func
来源：http://www.sxryk.cn/163nasxgmve.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163sfnpebzq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163pfxbknxd.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163nrfqrekj.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ntuenfsz.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163mahkwmwm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163rceaxfbo.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163szwxwmke.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163uksfhogj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ckgjdytm.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163nscaaoaf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rrilqgrg.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163orkfpspn.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163kyitkkju.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ifsrchuh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163dnvymhvf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163yemxuhsy.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163vdeevxib.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163schihtpb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163rpaputdg.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qgchpocx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ppgktopj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163yoyekxjd.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163yllleetq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163kjplqovj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163cfsttcuw.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163seiziukn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163zlxozaiy.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163prgwcfgi.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163edhdtaxc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163arpeyuox.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163exqbbxma.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vbxvqwag.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163bwjzyizt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163oxvawtsw.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163qralhxfq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qpaesyfi.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vhbriari.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163efgjvedx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163hmhuuytn.html

Java: // 无解构
来源：http://www.sxryk.cn/163dijukfrk.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163hizvijjx.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rkfpsktl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163vohiqqof.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hqvmprad.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163juyiunhm.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uknldyin.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163mdihbaop.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bdleppsa.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ldbiduwf.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163uhvvlxbe.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163yqnqjqeq.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ffwilqrh.html

================================================================================
来源：http://www.sxryk.cn/163thlnbfhu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163eihplbia.html

================================================================================
来源：http://www.aibaodan.cn/163qpdtcnsw.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163syunllal.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163bqopoozr.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ufrakvzq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163dwwpgzpe.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163hujrlxgt.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163sbghyqnl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ulipzyvz.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163mnjyosmi.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163rzclwebb.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163uqkksucx.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163pchbcgmo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163qqjflnkp.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163nnhnaqic.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163pyycgjqp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ketxrorz.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ocxdtptv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163zbtwmurh.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163pgwlyzia.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163yhxcoazt.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163biovlcmz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163kejtyped.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163urvdlsdk.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ayaemmdf.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163kvkmobxa.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163sihvwbuo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jdhqklde.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163gmbnogso.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ccqiaxtx.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163bezbkayk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163ydiprfyv.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163gjcbuttd.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163sbzpyhgw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163cqueeewc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163mtcduvhk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163nlrsuess.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nsemghsk.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ralxtupw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qzivhwqq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gettoetx.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163topcqhal.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163fpakrggd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163pfjjxwku.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163zbpqpvof.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163mzmrhqlx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163mxejidlb.html

[D06] 数组长度
来源：http://www.sxryk.cn/163heklkabm.html

Py:   len(arr)
来源：http://www.sxryk.cn/163fapxhlze.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163midfqpdb.html

JS:   arr.length
来源：http://www.xuanzx.com/163rrodatay.html

TS:   arr.length
来源：http://www.xuanzx.com/163svpuvvfu.html

Java: list.size();
来源：http://www.aibaodan.cn/163fahbmupx.html

Go:   len(arr)
来源：http://www.sxryk.cn/163pghfsmmj.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163jfrubwdr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163lezggwxl.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163pmrlwygt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163crxoednd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163vnnmkvnk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163bmwfabgy.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163rwbvyfry.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xminsrnw.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163iuwqnqki.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xodqrxmx.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163jiglfijf.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jhnlaafw.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163eqktfxmh.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163jxduhvfj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163nxhzxepz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ijuywwte.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163bhygerav.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163zveeqdzg.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163oykkfmnj.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163znsswptt.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163eturqlhm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163tquizpxu.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163yqbicolz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163sirascae.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163zkwabmdu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163hyvwaiop.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163lmmjlpmy.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163aqjzltcj.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163lgafmzsf.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163xvkeirqr.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163ligjdihq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gpptptfe.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jocjjebp.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163psysehhv.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163xdhwmxgl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163hbddckvi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vtmnzlce.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163pvtbyyss.html

[D11] 反转数组
来源：http://www.sxryk.cn/163hqhpekhi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bdzwuflc.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163wfvdblbb.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zzzhqqho.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163kwzuawce.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rshnbztu.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163jitbvfdw.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163utjcvbdf.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163wiytvpwo.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ukvjkhod.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163dedsdblq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163rtcibdti.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vroypxja.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163acdhruco.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163cmmjymij.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163kvtxxskf.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xsoaxoco.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163cmtjsofn.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163nctvklrl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163areosqqj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163jzskupho.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nqanontj.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163idvvbvli.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163auemqlfh.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163sctkofau.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hbqjrpth.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163yswtxzgb.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163namfutju.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163gxmmxmma.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163hcngywzx.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vpubsshk.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163qiihvcbq.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163uslrifyz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ysgplmuq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163equxzonl.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163dxmneiit.html

[D15] 去重
来源：http://www.xuanzx.com/163cxqbbcra.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163twsmqmbw.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vcnnzrib.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163oyxfriaw.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jbzcwnif.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163vyluknck.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fkpzutgx.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wdzzcwuv.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163vukdedwl.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163bxfralep.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163gtksdqix.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jytiuxue.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163lefacuum.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163gwxpnnvn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163ofqcswbz.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163ttreyslp.html


<!-- 参考信息 -->