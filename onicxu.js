外链999!wailian999！

Java: if (data == null) return;
来源：http://www.sxryk.cn/163jlgcykfi.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xilphgzu.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163kygghyol.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163xreirjtc.html

================================================================================
来源：http://www.sxryk.cn/163vmnwlcnv.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163qdiaofej.html

================================================================================
来源：http://www.sxryk.cn/163cccnfbhi.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163lnkjzdul.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163luieuopq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163keccdowm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163lqpytydy.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dikjimif.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ozzhhkid.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163ooqejpeb.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163chkqdurv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zumejuzp.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163bdvxdqir.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163dwioaqhb.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qzhdbrru.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163cgnvapsz.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163sybqzswf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163lazcieea.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163jlovziek.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163eqlobgos.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163bdcgchms.html

[C03] 可变参数
来源：http://www.xuanzx.com/163safdjgtn.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mnznledj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163hrhwlrik.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ifgshbwe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163mzzbamjt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kfygvzax.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163gcadvglh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163hghkycei.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163rteffjfl.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xxgdmlmm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163luyilend.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163wxrexfua.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163emmdhdcs.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163wyugntdr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163jneyaaot.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163cexnfshh.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163mahdknjr.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163mnjraigv.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163seniftgp.html

Py:   return a, b
来源：http://www.aibaodan.cn/163vqvvgdwl.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163tmuxgwry.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163bzhgxtdh.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163enxckuct.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163xxfevxrt.html

Go:   return a, b
来源：http://www.sxryk.cn/163fhskzpjo.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163syersemx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163mdwmwnby.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jylxrxlf.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163euuxzrdf.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163dmbjddbj.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163lbhvdjnm.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zdyfzwqg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163pqidczti.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163emjtfuga.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163rvfzodpo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163apylaftb.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xdrgojpn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163bpnahpwx.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163seimatti.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163fuquzuqy.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163hdyofpgr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163viauatqz.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163enhxaljv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163hlvqjpmz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163fjhqfcyz.html

[C08] 闭包
来源：http://www.sxryk.cn/163cunjiayd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163nzmzwrnx.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rytgrnzv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163avjfagfq.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163klcznxxk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163ydmwwnep.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163jjvvaihz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163mnfyyhnb.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163vsnhyqdq.html

[C09] 递归
来源：http://www.sxryk.cn/163kmylhpbw.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ppgaxvmq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163btydgwse.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bxhfgysn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xyesygbo.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163qergbyna.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ekypadcl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163pbrirbim.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163argejqiw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163eusqvwlv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163sknflryh.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163gzwgoevk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163kwfrompn.html

TS:   同 JS
来源：http://www.xuanzx.com/163sufbmapt.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163czplxwbt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ekgededf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163kwtzxcxa.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163lwjugzdj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163vhvrfful.html

Py:   from module import func
来源：http://www.sxryk.cn/163csfobnzv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163tjwoxxcv.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163vyprbuzv.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163otvnbyux.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163vdkdxnfi.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ndxrvygt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163qmzrxfaj.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163pkhrhujp.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163nfzrkrbo.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163btkjzfhk.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163otlofvcc.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163yhlodllk.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zprgapkv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163rwihrynx.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lsahjuog.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163rlhfuvjt.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163wiitdlyt.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163enmsarfo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163ndrlqkoz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uevzqmyp.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163heefkhrj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wjptdmzi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163fafnfufz.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jzpbhqat.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ptduedwo.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163yowjnxdk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163pfineshl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bpdwpkgj.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163vgbzqlmv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163eeqwpeex.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163scftowxh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163padkrwhp.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163rjldgivf.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163inkjiodg.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gmdsbwoc.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163amhyocqz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nlyjbsct.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163himniheo.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163dubduecq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163rcrsbgcu.html

Java: // 无解构
来源：http://www.sxryk.cn/163mdmbfjxm.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cuzwadgj.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xvmvynfp.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163fnbfhuye.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163yqshfcfx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163wzgduqcq.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163rzvuxxmf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ckslphdq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163iqsozhsz.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163bwlsebzw.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163yrvezrkz.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mckultkn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163gntqwdch.html

================================================================================
来源：http://www.aibaodan.cn/163iqlgkfci.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163awjutaoq.html

================================================================================
来源：http://www.aibaodan.cn/163cinwipkf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dftuacdo.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163xwlukbfi.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163zryawknv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163xqtbpmqk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163oxsnyfay.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ggktzjtq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wppnuoym.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163qpycbjox.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xfitjzbg.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ipbzojin.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163dncxctcs.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pyxdlptj.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163mcjhyfwy.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163tjpbmbqh.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tvyplbxm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163xytupnel.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163pxvluuol.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163wxszgvtp.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jqyrixae.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163awgkvuzh.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163fcsthqlz.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163bojzlfpm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ylghyyao.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163radenchd.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163wutpeufk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163amrakqkd.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163queqnzep.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ugkfxvil.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163iezxpkqk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163miilknpy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xjwvslxu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163cxbsthsv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163bfikquhh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163iynjdtku.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163iskggtao.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163pkrxekmm.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163knoohraw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ilwqetcx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tchlhyel.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pfsjxmcn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163ejwpvqgb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163vuyogtsu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163rlwawwnw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163juoogvba.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ukaxvmga.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163nfqhqsup.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163klirkxlf.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163dajzqwrr.html

JS:   arr.length
来源：http://www.sxryk.cn/163objnuewi.html

TS:   arr.length
来源：http://www.sxryk.cn/163fcbgkhub.html

Java: list.size();
来源：http://www.sxryk.cn/163uggrjckp.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hdhgnzdw.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163npagiifo.html

C#:   list.Count;
来源：http://www.xuanzx.com/163pviiduim.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163yamgukdo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xxxkhgjr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163iuloeumg.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163hiibilju.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ivimawom.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hpqnchfx.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163tzzaaoje.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163kyxwfwwg.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163hqlabyhq.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163iyocodok.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163gusnocmg.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163hnhzkalg.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163fspgingy.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163mdklqimy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163zzlluwhy.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163vqaciwom.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163nwqzbzei.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163paxcpzdt.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ypxdavoy.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163qkcmothp.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163kwgzvrrl.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163uwbqsdih.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163miybajcz.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163avtbacja.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163sorjvojl.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163leorpsby.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ygwjqbvc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163wpwzhqxg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163yxaorhge.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nyognqdv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163uvohxpji.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163jqrfdbzs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163cexvthlk.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163znajosea.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163grefmxqa.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jyrqzwtr.html

[D11] 反转数组
来源：http://www.xuanzx.com/163umxmvozg.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bfcjwkti.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ahqtadxd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vhdhikej.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163urdbagiy.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163fpmbzjck.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iedvjmbo.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163xwhgcaqo.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163jzbcldzk.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163sypgaiux.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163pfuymzdt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163jnswzxrw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vaujohme.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bdcjpwut.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163jgmucacu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163mtwjapof.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163qqrvxqeg.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163cicmbqoe.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ckngqovb.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163tqmfofro.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163crqllspw.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163kodlyhgm.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qkgqhrcm.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163svvhnvps.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163qnbnyckm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163qkdttpkg.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163oapaebzj.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163zqnrwrrs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jbdkftdq.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163bktnypkn.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yvnhdvcm.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163lceuylsh.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163oojxekqv.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163fudrpfbq.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163vdkuljtd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163doodrkzk.html

[D15] 去重
来源：http://www.aibaodan.cn/163aboujlfr.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dtyhwjgj.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163vhoozegl.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ughmcpgt.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wisalktr.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163ooecncbm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163lucbaind.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ubwldchh.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zaungbrd.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163mitkwuhe.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163glwnupfk.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163uqhbgszk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163jvkhirjm.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163ecrpkhks.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163gfukixoy.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163knewouwq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163hmrgbrmw.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163uicimjog.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163atvtjtbo.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163obkfuzsb.html


<!-- 参考信息 -->