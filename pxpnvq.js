外链999!wailian999！

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163yqtfdrgm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163obnexlju.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163tjsbuitr.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zzijsrsv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163cpvmpgnt.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ftjafsdb.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163dckcfkkx.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163izswsmrd.html

[C02] 默认参数
来源：http://www.sxryk.cn/163cmqyvviv.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163cfcrsmmq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163zlzihsil.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163crkaacbb.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163ycmdkegw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163foxvpfmz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163glczsidz.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163zgpbtfsy.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ohjptpeo.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163ufkphanl.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163jkrivoyl.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163ctunlfci.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163webcvxtu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163oaawgxte.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163dcqlkvyb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163pdbxlfvx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163potoofnq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163mvmgxljn.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163wjijwtzb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163amauwosj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163qobdxnea.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163jznmxddi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163fkidbmzg.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163ngrcuuog.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163iavlnvtt.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rauyraxs.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ewmybuvt.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163ddqvjmog.html

Py:   return a, b
来源：http://www.aibaodan.cn/163qaznmfxg.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163fdemndaz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163jrpdgofw.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163bumrrodm.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rcaokbcp.html

Go:   return a, b
来源：http://www.xuanzx.com/163fopgtuck.html

Ruby: return a, b
来源：http://www.sxryk.cn/163ossiapha.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163djovcnmf.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163levvnsix.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163xxujxvzq.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163sqyprzuh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163uxalybuk.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163msuhovgj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163heyaipys.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163nfqfhczw.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163zsfdtlfb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ijnejmmx.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163ioagnwny.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163felohjle.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163djnqbhym.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jsbhalfn.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163pssjctfc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163cftnvbgm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163qsgdxsil.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163weareapm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zurhigfw.html

[C08] 闭包
来源：http://www.xuanzx.com/163syqiwwsq.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163qmccsmrd.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163qomjvqhp.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wcstafjw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163irvtqkhv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163vwbgigqr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163toaqopmc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163yexdepza.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163asgdrgzl.html

[C09] 递归
来源：http://www.sxryk.cn/163qzonzrvn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ttjnrash.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163lxgbnufs.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163gutmrrzd.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wvsomxek.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163kxtdoouf.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163waepdupu.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163zslydxdg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163pgcuqqrm.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163lzvzjyee.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163osvhqdcz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163yhsddlos.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163cmooxnva.html

TS:   同 JS
来源：http://www.aibaodan.cn/163jvdrfyfg.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163abjcdhgt.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163dqrgsrxx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163mfhloaug.html

C#:   块级作用域
来源：http://www.sxryk.cn/163gmyrowjl.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163yvahjewo.html

Py:   from module import func
来源：http://www.sxryk.cn/163lonousqr.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163kqndebop.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163bfhkhysx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163agrscpvw.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163xmishvmg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163rdleofmt.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163faufeebx.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163kckrxyuh.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163xxrfvvnq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163tnwettvd.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kcvsqcky.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hltacpvb.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wjszcbzd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163gohozbns.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163fvxnqoid.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lmvbjmbk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163lopecggm.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163dxtyscjn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163eofcmyxb.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eieusvce.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163guexoxxn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163awyvbjcj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xdixovpc.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163gwxroabn.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163kzxeipaf.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ixvjgpob.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kzdxnsoq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ctizwfoy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163yrzhpxfl.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163zljaqbju.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163dfqcznii.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163upihzdps.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xqqkqssm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163axbrnpqn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163ereszriq.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163mpqbgkny.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163sfeymeqx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163wpdmpwbd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163obyasldg.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163wsdlgend.html

Java: // 无解构
来源：http://www.xuanzx.com/163gmyiwnwu.html

Go:   // 无解构
来源：http://www.xuanzx.com/163ddwpattk.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163vcdtpoyo.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163thxmmxps.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163gdyumumj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163lajhydip.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163kpsmshkf.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163ciqymgsx.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ykxmxdrc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163gsxpwrvg.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xndrbawt.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163nvzoakna.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163tomvynrw.html

================================================================================
来源：http://www.xuanzx.com/163cjyixslf.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163pduxruvi.html

================================================================================
来源：http://www.sxryk.cn/163jdkadzyx.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163esbbifxf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ullnrjnl.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163rudysakj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163qottxfvw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163vrcqekxe.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163kjinoszg.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163cqzjthis.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163vjztonnz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163qztutwxv.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163llruufto.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163sktzsyjm.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163igulckst.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163oiomsffk.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163bcniwleg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163cuoinxqg.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ipqiroli.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ewjznzzu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163oivukzab.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163saazzfdw.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163yarljrez.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163hsdngnlr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ouyszyav.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163cddoqfft.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163zmmzlmkk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163oamglxft.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163aqfwmvkz.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163acekbqse.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163vhzvulvp.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163nhgoxltx.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163fqqycoan.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163axjnkjom.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163dyvdumjg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163dabbkpjm.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163irsumqma.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163iezwhvbf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163tsunokff.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163wetrgpbs.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163lzfgvaut.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163nkrqamij.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163hxhjqdyz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163mnfzuxzh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nfomwpvr.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163hrwienbr.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163yjbepcdf.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163uqgrlvrf.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163yxswasvr.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163dalmuabf.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163pveuvtpf.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ndbhkqpz.html

TS:   arr.length
来源：http://www.aibaodan.cn/163zecesxmo.html

Java: list.size();
来源：http://www.xuanzx.com/163wbpxhmnl.html

Go:   len(arr)
来源：http://www.xuanzx.com/163eyknxjeu.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ueudrguc.html

C#:   list.Count;
来源：http://www.xuanzx.com/163yayofknb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163mnyucrdn.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163jhirtnge.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163ivvbkngm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fiylbgaa.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jjzqxdkl.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163vymafigp.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163asbhptmv.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163uwnfsnos.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rrfeojwk.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163icqgipxw.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163isdfrlhf.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163huszfuvt.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163rtqsdatu.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163eekqbcbz.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163hykvivwc.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163wpcmizud.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xjczkmer.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163srokeejf.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163qgsdpkaf.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lmvkfost.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163ovrygcen.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ohtlmrhd.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163wqriznfy.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163pzorectv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163jbtwcxkx.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163oqrlqbzt.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163tzkfdlri.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163shbpwstd.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163iftpmxxb.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kfykygti.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163cevgavya.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163hwrgubfw.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163jhgedoec.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163mtjbbaiz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ngeotuvw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ouivnctw.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163loabbftr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163vtbwkoiv.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163aczqlvzf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vrgvttgn.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ftbvoocx.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163baiyvxqx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163zmfummhr.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hfjpciaj.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163gwaghtrz.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163fwvzgmdv.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163kprrcilf.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163veeecapu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bsesxfta.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163awvtqlvj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163bmmcvyae.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163onfpumhf.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163surcyskf.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163hzfgcqpq.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163zzbdojta.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163alrzxewf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ibjnmdxr.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ovhzpvyp.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163rqhkdbfo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163waqphhma.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163manimtpx.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163lhdjlhlz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163kuenrzby.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163edrplxxc.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163damuvhxd.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163gtdisvdh.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163frqbaewn.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163jlgwipmf.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163iueqoyqm.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163rrmokxwx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163nyyxmnay.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163hjeirzrt.html

[D15] 去重
来源：http://www.sxryk.cn/163rgqjnemf.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163plorhbqd.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163pfnbbdls.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163tmuvmolm.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163xlivmfyx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163gljdnulm.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163sacqgcng.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163znogioco.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163fqvcvokl.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163kliwrory.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ztocqsak.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163wplhsurj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rrealjrq.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rhyafuam.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163criosmfl.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163pojwxcov.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163lsotzqxu.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163fsxfvudl.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163ccjxjvtd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163dnjeusdd.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163souirbxc.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163pkgfbxwp.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163dybgsaxb.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163yeclmeaz.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163upchtocp.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163thdixldz.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163deuabafs.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163qwabznrj.html


<!-- 参考信息 -->