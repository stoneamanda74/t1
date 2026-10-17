外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ouugtvmd.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163etkrwesu.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163bdkhsrkm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163dkjgrytc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163druniqnq.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ylqnmdzx.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163gffofkvz.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163wjfnmgkk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163bqhrudsg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163hdzncdlc.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163wtoblthn.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163qxervsrh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163xsbqpqag.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163qksnrojg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ohytvxyx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163criobudi.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163kjfaxlaa.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163yaarmzrm.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rziprpag.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163pnimncom.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163lwakocnd.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lznasmma.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163qpxfqliu.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163igjrdijv.html

Py:   return a, b
来源：http://www.xuanzx.com/163xsesgrqw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163rvpvqyms.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163xwxuqvwl.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163gckvggvn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163bfmvgjjv.html

Go:   return a, b
来源：http://www.sxryk.cn/163guosmyvo.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xyghjivl.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163tibilusw.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163haiolrhc.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163noercvuy.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163ybhhhavi.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163zohcqrcy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163gbueryah.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163dsshiyuw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163krahzydy.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163cwladlcd.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163bviqlksw.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163clkptnfg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ykfjjdgf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163jnfnigmh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163nxehpflq.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163tmklvwok.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163dllckkaf.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163gmbvvabn.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163gqvehjnm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163jsckigji.html

[C08] 闭包
来源：http://www.xuanzx.com/163ljlcbcwj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qlzxrqsz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163lupxueep.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163vsrqhpna.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163avwcjrqe.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qtykjnvp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163uhzxxrwz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mwxueznn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ywupzbaz.html

[C09] 递归
来源：http://www.xuanzx.com/163samybqib.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163tqqmnxdx.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163hjnkohbs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kasizunk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163olxxwfpl.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163krwuukax.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ykbtnscj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163hewobqtq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163vssrqnnd.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163aarfdbqd.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163grumxwwe.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163oderruxo.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163wssmnfxp.html

TS:   同 JS
来源：http://www.sxryk.cn/163dfyxfczy.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ehtnbfbd.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163kurpjdwl.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163duvpubmo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163wwsukwku.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163iwdvqimp.html

Py:   from module import func
来源：http://www.xuanzx.com/163plrgstpj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163ishlzdxx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163rcuyjxhb.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163cmvlqade.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163vmqtdjcg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163zqckagig.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163ssoitluo.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163azhvdgju.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163mzadbnia.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ricctymv.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163fjqmapwc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163qhuodeys.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wiiiwexi.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163uwilhyvb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163hkorbdyj.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163gxqxzajm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163vzipesqw.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163nrsgydvv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163rqxfjstg.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163nbhjnskp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ehbypuie.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163pnwkwfnj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xbdniqqu.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jmdljuab.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163uxwutvtx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163iefgdula.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163zhvyeort.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163hzwhftyy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163jbwnhzbo.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163mxwucrls.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163bcsjuwez.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163pbqhyoba.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ylbymlay.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163dmgvsprx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rxmyigpb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ahykrpdj.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163pbfzcnxb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163nddibnhg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163yvavqawu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163okbjajrp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163csdgcgqh.html

Go:   // 无解构
来源：http://www.sxryk.cn/163whdstmga.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kgetlysm.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163afdgfiuy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163mlplptuw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163waqpydmh.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163xwtckrzn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163clhxedrx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163swcvoaet.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163wkkyxaje.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163dduslisn.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163sbjvpzht.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163gbewskkb.html

================================================================================
来源：http://www.xuanzx.com/163qbqawopv.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ufnmmgbx.html

================================================================================
来源：http://www.sxryk.cn/163zvgxwisw.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163xxrtxhkz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163elzzpltt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163snqodjwd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vchszjsx.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163sxbenmrp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163fuyqnwan.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163wgsxhxej.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163sspmgypg.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163vurlvfnf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163yihzgtlz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mbubgeqh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xfytzycy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163quftebcu.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ikilwdji.html

Java: list.add(4);
来源：http://www.xuanzx.com/163vvfbbcuv.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163qhkgssoz.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163hblcklmt.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163ryptjaml.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163tntflvog.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163vmibxchl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ddsceucf.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kxsgdttd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163zhhewdqp.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163kydoiinr.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163nntvlrjx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163srnjgjhh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163uaoebdio.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163gpsxnxuc.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163rovfsusv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163qljfiukn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wskwzdzb.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163jqhgqbmb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163hymbigqk.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163tkkvmmjr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163muupbtbj.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163piisdtcs.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163jkcrnukc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163cfyithtz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163uodwawlk.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ohkbimrk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163heffrnkc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163tvustybu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ovhwrnug.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mrcgafyz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vxxbzify.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163wgpxeyij.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163qixvceuw.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163vegtqutf.html

JS:   arr.length
来源：http://www.xuanzx.com/163bzdvccuj.html

TS:   arr.length
来源：http://www.xuanzx.com/163xftmgdxt.html

Java: list.size();
来源：http://www.aibaodan.cn/163bjgsxlau.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bkhkzvwq.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163kvsfsuvs.html

C#:   list.Count;
来源：http://www.sxryk.cn/163zbhmprfx.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163qzwztksu.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163gpilsqja.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163xcsgqkon.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163evjrudyv.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163njfifmfn.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163boplzwtw.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163ryvpshry.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163hbnaamrw.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163tjvrweue.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163hviftnau.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163njbwefkh.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vhmbazgq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163nunmdnym.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163xgbfymcr.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163fpsmvzil.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163pyjnmszb.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163ktqgwqxb.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163qurmgktb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163brkohawr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163psxmkpup.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163obqbygco.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163xgjqpwld.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163dtewlyym.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163bhyajday.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163inzqegqn.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163brmrnguf.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163brtsaxxh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ohtqfsub.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163artpuqbu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ubtuceov.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163lnewftlg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xedoyjfd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163wmhuhfea.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163nymwucne.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163iihhnewo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163qteakeag.html

[D11] 反转数组
来源：http://www.xuanzx.com/163lffkygtr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ffoqqdxf.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163sbykgufp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163ejfpokeg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163bredbtmt.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163rsyqupwr.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163lddqbzfr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163ldddafkn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ilqmyzqt.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163gexsnypx.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qrsviyrd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ujvobgmj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xrrgjwfi.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163mjegwtwt.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163femoajci.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163iigmwdqj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163tiqodokz.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163uyeerfdj.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163mtexpnqm.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163xopvvrxo.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163omqppgwh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163oxufkgtq.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163fyhmqqis.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ahvgltmj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163hsyybwfp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163zofxxosw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163pvkhqdut.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163cluyiria.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163wbxgshbt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qmncnjde.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gamekvtg.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163hcepbfyk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163anedajfb.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163gdogczsp.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163rnxytqzt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163lmppqhde.html

[D15] 去重
来源：http://www.sxryk.cn/163otjmrcua.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163appowkpg.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163coxghumf.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wzcbkfjk.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bsxdxqux.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163vqddyunq.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163evnvknuf.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163mfjtenbp.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163odpslkkj.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jkcpcuqv.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163odlmsxeo.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163lnxiplnk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163xwuxvcmr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163bbdezfaj.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163ulerhqbq.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163kfrxikiz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163gusieeir.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163lmjpnzyl.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163tudhiuql.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ocrbxwgg.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163ardofxuq.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163wifolzhd.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163cfwlshnn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163udzmhaaf.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163nnannrbi.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163cxxfzwqv.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163peohouxn.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mgcuhjbd.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163nebeslxo.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163syrcgsgv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163yrbnzqiz.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163dxajbvck.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163apymiwtt.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163rtsgtsxj.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163gpphtbnl.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163obbumfte.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163kpoyxvuk.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163poxjttcf.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163hxaedyer.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cgapjuzn.html


<!-- 参考信息 -->