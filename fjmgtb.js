外链999!wailian999！

PHP:  range(0, 10, 2);
来源：http://www.aibaodan.cn/163yxpyicvm.html

JS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.sxryk.cn/163pokprgte.html

TS:   Array.from({ length: 5 }, (_, i) => i * 2);
来源：http://www.xuanzx.com/163nfigsytc.html

Java: IntStream.range(0, 10).boxed().toList()
来源：http://www.aibaodan.cn/163nogqtwmq.html

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163aumetqxg.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163vzyddrnv.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.sxryk.cn/163jkaeswkw.html

[B12] 跳出多层循环
来源：http://www.xuanzx.com/163ndybjick.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163wfhnqtpv.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163gpwpozyj.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163tucwfhnj.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ptbtursj.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.aibaodan.cn/163qanydqvf.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163lxmdjuah.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163bsildmtu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163frphhabh.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163eksaxeme.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163tkymzalo.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163revuxahl.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.xuanzx.com/163kmzkscdu.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163kkhtjidn.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163ynhpklvu.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163zvvynnsi.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163oobwjgjm.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163onopxdwa.html

[B14] 判断值是否在集合内
来源：http://www.aibaodan.cn/163ivwjwwzm.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163mhcsnxyy.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163inqvwbzq.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163leyzjodo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163joahqhkp.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163qnysgwjl.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ifvzbyel.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163wvlnxnlj.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163zadwakru.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163hopwlilb.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163znmtyazr.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163nntkjakc.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163vuqlngdo.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163xdypbgcd.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163aujgeuuk.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163jqflkyeb.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163kfdjqzre.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163qditgecr.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163foknnwta.html

Py:   if not data: return
来源：http://www.sxryk.cn/163lsmwaung.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163xmtampoh.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163jzxkonbk.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163mfvnhply.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163ldzypiwj.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163xqlegjwr.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163fdbahuol.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163kndyzfsf.html

================================================================================
来源：http://www.sxryk.cn/163ofzxdovm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163ptjcvdbp.html

================================================================================
来源：http://www.aibaodan.cn/163wizrftac.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qxzhnhkj.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163pubsrdzj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fbafgnzc.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163wbzxgtjs.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163xsncxpsf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gxrurzwh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163amepezwt.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163oirilfni.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bzhcknse.html

[C02] 默认参数
来源：http://www.xuanzx.com/163ojhwcsbn.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ciylmulm.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163rtnkslxz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163djnlkgtq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163gwyatltc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163mkokluqz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163tauojwbu.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163rtfcjbfp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163djjheknl.html

[C03] 可变参数
来源：http://www.xuanzx.com/163npsinyxi.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163avvdkgxb.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163vepmlesi.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163giqdoiij.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bbbttifi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163hrmgseng.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lsijncpr.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163myabvsft.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ulehsxla.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163doqbcdho.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ygarwwsl.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163dvxdhsnw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163kbjwsakb.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163pondnevc.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163obqkbeft.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163syizoupt.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tijkccqp.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sxazjyxb.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163pxhicnkk.html

Py:   return a, b
来源：http://www.xuanzx.com/163ntadpezb.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163mxhdukmk.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ezjnbwju.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163guvndckx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163ojtwzzkw.html

Go:   return a, b
来源：http://www.sxryk.cn/163dnfpaoof.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163tmkpxwtf.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xabkyxdl.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163phswxork.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163pviqjdjw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163dyfiyotj.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163kgopxovl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163nbkxswlr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163thpwtonv.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163dhurywmb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163jwbbjxve.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163jmbxerrv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163pphcaoet.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163dwtrhdcu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163qwyusfkk.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163vycznupm.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163mgeuzjpq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163chlbxpkk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vjxqnqhv.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163mjvtssrl.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163kghwoxwa.html

[C08] 闭包
来源：http://www.sxryk.cn/163wbuimxat.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163hdyejrmp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163pmcrultk.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qhvduive.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163luivvvau.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163ldqbmlzh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163frafprrt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163knqrdnbs.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163yqzgjibw.html

[C09] 递归
来源：http://www.xuanzx.com/163mvkkmmyf.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163cvwvcviv.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163tyzopwlw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hufbmwqh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xvamlhhr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163elmxdkro.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163ncdugkwg.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163qvmqmgub.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163qtqgmbez.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163yejgvsre.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gespopqy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163qyrmxvud.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163ecgcnjnz.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hhtoidio.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jjabespz.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163bbufzbxe.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163jvqsdtuu.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jtgagorl.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163eqwrwluu.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mxigxkxu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163ppklnezr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163qwisgjnk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163zwhlhrqv.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ahhamtwl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163iudnquim.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163woucjdal.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ruzgwlqr.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ikdjiroa.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163zxjzbjpj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163afqdhuut.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163dpicogfc.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kljolugj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xiggufmh.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163gsuoeaab.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163msrmnwgy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163uwcvdeou.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163jfsdosom.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163zhvstwko.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vfcenvoi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163pdknziwq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zuzaqhra.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163dwhcrjzm.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163nroeipgd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163mjbxbyeb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163afggovgk.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xmbsebjb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163lvvhlome.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163rimevqmx.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163vxzdenif.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163huupjimb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163oorahxar.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163zahvdfzw.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163nmtfoarn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163ryencaeb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163lbxaszfz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163vmxfaavt.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jzeghdgs.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tjckyodu.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qbinxxja.html

Java: // 无解构
来源：http://www.xuanzx.com/163zahdqzbs.html

Go:   // 无解构
来源：http://www.sxryk.cn/163fwizbsxs.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163mpthmlty.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jhxndwoo.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163uygnsjkf.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163hpunekjp.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163lurifpfj.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163iyffpgrj.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163jtigykvd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vgigbycc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163gpgdhkkx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zzaghucl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163sijmcdli.html

================================================================================
来源：http://www.aibaodan.cn/163agutpqcc.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163onthwzrh.html

================================================================================
来源：http://www.sxryk.cn/163wwcitnwp.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163zwrexchy.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163jkdjvjfq.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163xwhgbbeo.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163gzryptcs.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ztugxnzn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163nbplnclq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163drfryezl.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163fjsgeoib.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163cjvyreii.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163auineyts.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rxspvciy.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163hwqonioa.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163aplrbgvo.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vdmsoiin.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vavuqart.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163hlwmrbkw.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163expvyvwl.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163iwlpnmvd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ztpcxeig.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hhnaggjx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ssfsmtcp.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163fsmnqtvg.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163djhikggw.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163viiclahe.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163xtjlppxx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163dbyekjup.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163kkyvuhfp.html

[D04] 删除元素
来源：http://www.sxryk.cn/163zicsfjva.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163rulddxlv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zerdybwi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163jyxtlgbk.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163myhtxerv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163tzundegr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qanpfues.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163usbkiebo.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163jkgcfloq.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163fjbedfhj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zyrtzamz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163epdckoul.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163uisrydqx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163zcmcfeji.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163dcvvxlok.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xwdtonot.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163fjfdovkj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163bvwlwvuq.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163lkbxvflz.html

Py:   len(arr)
来源：http://www.xuanzx.com/163ysxorzcg.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163nxfywkft.html

JS:   arr.length
来源：http://www.aibaodan.cn/163prwxolth.html

TS:   arr.length
来源：http://www.sxryk.cn/163domnmqvk.html

Java: list.size();
来源：http://www.aibaodan.cn/163jxhbwixi.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lmsiixhu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163hcxxsqmg.html

C#:   list.Count;
来源：http://www.xuanzx.com/163pcrwntzu.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163qmcdbsve.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163lqzbkzms.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163rbswkpao.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fklvlcid.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wuticorv.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163nbluykus.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163texcjzbj.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163bvxbbdvp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163qczoiuly.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163rhekjphj.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dneuxuxm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163rklmgbeu.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163rrollztn.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163eclcfmvo.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163rjbwagkl.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163vxdcyjxl.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163zwbuzocu.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163rxhbbmij.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163efxljziz.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ibmjexdx.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vmiwflyz.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163krreycwx.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163prapxosq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163qsbhvibs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163qvseqrwt.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163nrxfaars.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163vmxfjher.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163uoqyfhmb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163grzequgy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163hqzbyqxb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163porvkfpv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163zahzkshc.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163dekjepkl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163pttptcbg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163exuwrwak.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163wawnfrxg.html

[D11] 反转数组
来源：http://www.xuanzx.com/163udwmqgvt.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ttpybtbr.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163pckgjegn.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163tleizndt.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163qdxqfpfh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163xowoktpc.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163bnsxhmfb.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163szygytnq.html


<!-- 参考信息 -->