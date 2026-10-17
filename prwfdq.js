外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163otsiposq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163bgfvqjpr.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163fhctsbjl.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163kduhaskm.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ynkrvlsv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163jfarjbdz.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163lizymkcp.html

Java: a && b || !c
来源：http://www.sxryk.cn/163mrvepbob.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163ppgwvrqp.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163xqpfgjch.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163jdlovvla.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163wzvhgtyg.html

Py:   if not data: return
来源：http://www.xuanzx.com/163znixgogr.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163duktreqi.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163gpmveahs.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163xuoxchjz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zabdplvv.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163sazlizcv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163ufrkfube.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163xmixkndz.html

================================================================================
来源：http://www.aibaodan.cn/163utixagfa.html

C. 函数与作用域
来源：http://www.xuanzx.com/163layeoezz.html

================================================================================
来源：http://www.sxryk.cn/163bdrrzhcx.html

[C01] 定义函数
来源：http://www.sxryk.cn/163osahcoes.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163pltelgls.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163vnrptqmc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163kireknod.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163wvuucaxv.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ancxznri.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163yukscees.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163ulkroeqy.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vddfhbul.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wlyphkli.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163pjbcrpdu.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163epmxbsly.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163hlgrdiyh.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163lxrmahdn.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163hyalwfef.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163londjjfx.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163qddgoycg.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163iqisdthv.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163zukwydmb.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xicsmubb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163zeirimik.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163vnmsfynt.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163sbgfnabw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163qjyxgeol.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163pxrhdpvg.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163mivuwbpw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163lrftefsp.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163jhqdwxfr.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163nqfjfgod.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163zeyfsugf.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tzunabqy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zuiqbqhn.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163xkadeyov.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163mhdgcvpp.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zwmbevjp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dmsgxwli.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163uhwnkhhl.html

Py:   return a, b
来源：http://www.xuanzx.com/163xdvbezzr.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163hdqluuau.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163entzadok.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163puusjsfu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ykedlypp.html

Go:   return a, b
来源：http://www.aibaodan.cn/163mhuhzghh.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163cfzncpzo.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163oxonvrzs.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ejvndtuh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163jgnccnzz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163tkdqjtlz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163cfoauynp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kfdwxaqi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163fqkrglks.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163zidwueay.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163xugfmfnk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tpxzpajy.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163kiwgkuiw.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163fzvlumlh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163yqopxbuf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163vnnbgklw.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163aksveyse.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163abutygeo.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163dbfpyino.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ksgubwub.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163zbkwduqz.html

[C08] 闭包
来源：http://www.xuanzx.com/163zbhiustv.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ootdvenw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163bgeseode.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163bapjzuci.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qeligkxv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163tigvgdpd.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ebggnahs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163pdfkuens.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xolcvwgb.html

[C09] 递归
来源：http://www.aibaodan.cn/163cxsjjumu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163ftukxzyi.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163lvhvwwnt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bssmrehe.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ktsuknlp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ucxypvnx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ddmpftrh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163slczgpjd.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163cxlilqvg.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rxzonoxr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163iwsvpnpj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163inewebhp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163yrfbycnl.html

TS:   同 JS
来源：http://www.sxryk.cn/163psjnbsvx.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163xwtlqpjx.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163sxjsbwkc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vhcynhtf.html

C#:   块级作用域
来源：http://www.sxryk.cn/163rkbumjbz.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163vgjbthoc.html

Py:   from module import func
来源：http://www.sxryk.cn/163uhqxdmtj.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163xmnbwxpn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163dxnadrsw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ccmoxmih.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163yddqubvu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163cveajcud.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163pxhxgkuf.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ycpdnllv.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ngwhupcx.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163axnuqhyu.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163cnirjwah.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mxwimnrv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163nasesrdu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fxmtjpfl.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163jomcwqrn.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qmudlyhr.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163pzyihnbv.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ptouprac.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hgbpvnln.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dtrccvuq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163dkkrsddn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163nzpquswr.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163wrmbfqbj.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163lwupgvob.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163sgrtomye.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163svtznmdx.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wmzmwyaf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163aslifzpe.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163hbgdupxx.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163zmpdsvfl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163coqtsixk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163tokgwaqn.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163brlydjdd.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163vlmngowj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163mguoyxie.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163kctsskrz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163qaxyfgtc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163hnejdjms.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163tlskniqx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163bgawpyrd.html

Java: // 无解构
来源：http://www.aibaodan.cn/163bgbsjggf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163trcuxxbq.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163mwlltcue.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163cwocyeqo.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163nifpgkei.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163xmgpavgw.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163syickoxl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163yilevkni.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163kwidbzal.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vbdmolpq.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163mocjgwpl.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163dvfjjzml.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163sgnoafvy.html

================================================================================
来源：http://www.xuanzx.com/163iloqzsoy.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gxuxxuqp.html

================================================================================
来源：http://www.sxryk.cn/163mvvcekgo.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ddrknfvh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163psxatlxz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163chzdsoea.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163sxabjcpq.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163tdocqfnp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bqhkjysl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163wfpydzaf.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163lhwatwhy.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163kumogxcg.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163kvzpddgz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163enwfzytl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163mrphgjmu.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163eefavcyq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163rwhobdhv.html

Java: list.add(4);
来源：http://www.sxryk.cn/163brfcbwll.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163escnwuje.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163hkwbzkja.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163wwuxjgpw.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163pfpkbwzq.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163uqypilam.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163glhenzcj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163dntxqmwh.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163mtwscuuj.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163sqzpiqfk.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163wrogsdkq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163pebaefpp.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kseuecgy.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163kzgnzixf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163zvmtaury.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163fkushpjo.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163oqeuyadh.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163genovjfi.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163nzrwmkkw.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163upflwxof.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163occsinzg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163yigzcard.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163zmlxmphl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qwmmrhap.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163shmwrcea.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ymhoqnig.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163gvjjrwpo.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163vgkebuvl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gnjjnugs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163piosnpwz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163ajyhdkws.html

[D06] 数组长度
来源：http://www.sxryk.cn/163tbzqrybe.html

Py:   len(arr)
来源：http://www.xuanzx.com/163acoghngd.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163njupyezl.html

JS:   arr.length
来源：http://www.sxryk.cn/163zwuvbddt.html

TS:   arr.length
来源：http://www.sxryk.cn/163uejhwkpx.html

Java: list.size();
来源：http://www.aibaodan.cn/163thgwskpz.html

Go:   len(arr)
来源：http://www.sxryk.cn/163sjiaapsq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163pyqfdtyd.html

C#:   list.Count;
来源：http://www.xuanzx.com/163dcvmjvcg.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163gjvfhmkg.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163yuurpltz.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163nszgtnkv.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163utuapvld.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163yxrbmhpn.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nevsgued.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163trjyvtid.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163gapzkhtv.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163wbvvmbmg.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163awvrwyap.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163kflizhnt.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163jnlrefhk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163jsuuyteb.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163nwoipxtl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163cylzqzhg.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163qajbjvwg.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163emdwwrkd.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163zhqzaccw.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163jkdtvrbt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ssvtoohz.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xltqriui.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163gyjsdybv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163zxhnyuib.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163mzybicrh.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163hqpepkfa.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163txnlekky.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163kzjeebas.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163cjchpchq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163mfulyyxy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163azkczpfq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dwxrjtbl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mfiktahm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163vbbrodrf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163daycpbep.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163isegfgrm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163mlktyrzp.html

[D11] 反转数组
来源：http://www.sxryk.cn/163igyinvin.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163trysqifd.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vskkazgt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163usuzleqq.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163vmaqtaih.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163arjamzib.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ooymwxdu.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163uevmmjdg.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163olvqjvdz.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163kzpanoem.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163sriphgbq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163uekkmctt.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163alxzmwul.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163nholaouz.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163lcfqhcgu.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163egnxsqkt.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163sjgzketx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163oeoegeae.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163pdrtxlqz.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163bkesllex.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163skxzagfa.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rocnggsv.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163yqicjlev.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xdodkiez.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163rgbnxyxa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163yssovgwf.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163gszheztz.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163xxljlmcr.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163hhyzxnnu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hbzfppfx.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163bzpupiic.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163sxhsisha.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xcwuloil.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163hrpmfqhk.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163ertcpebs.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163opetqmdg.html

[D15] 去重
来源：http://www.aibaodan.cn/163jvsmordy.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163szlzbvzd.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163bzrlllss.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163khhdfutm.html


<!-- 参考信息 -->