外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.sxryk.cn/163frsulkfz.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163xcqkzsxu.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163czqwwssy.html

[B12] 跳出多层循环
来源：http://www.aibaodan.cn/163qqenrjun.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.aibaodan.cn/163kiehoewh.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.sxryk.cn/163ymtvgmov.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163btcitbqm.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163epnjenip.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163ztdbrkmv.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.aibaodan.cn/163jjmmqlaw.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.xuanzx.com/163vrkscmeu.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163oggknrlc.html

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163klypcyag.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kuvjxjcc.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163nbrtbial.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bterqxye.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163yaljfbmp.html

Java: x instanceof Number
来源：http://www.aibaodan.cn/163emzysmgb.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163cuygayfb.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163dkogcavg.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163iefkfsns.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163dpjhovjc.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163fsbskzzr.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163ehsqjikz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163vuqzuzph.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163nbzrbthx.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163dpjhwmkb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163apfkkztr.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163veujfzob.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163vdipquwa.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163vbwcftmn.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163umcjxspm.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163naqoolyw.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163htowdhjv.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163jkffagci.html

Java: a && b || !c
来源：http://www.xuanzx.com/163twylflkj.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163mmjgrnna.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163cftpjxdy.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163fbdqzuie.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163acmpcdfp.html

Py:   if not data: return
来源：http://www.xuanzx.com/163rkjxcuyr.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163febtitkv.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163wbadmehe.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163xigrsoah.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gdmxfhhp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163kfnyelpv.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163asiysama.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gcmaaoqw.html

================================================================================
来源：http://www.aibaodan.cn/163lxyogncl.html

C. 函数与作用域
来源：http://www.sxryk.cn/163cpqoqmlo.html

================================================================================
来源：http://www.sxryk.cn/163wkooigjd.html

[C01] 定义函数
来源：http://www.xuanzx.com/163phrneesx.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163pkdbdumu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hjoaypkf.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163nvggdgot.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qxylkdnb.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pugnzkqb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163xqueluat.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163aultrkhe.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ewjopeea.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163nhmxjtqy.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163vbstxjyz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163ozgeqznk.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163coaohuro.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dujinkxt.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163jmbztbah.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dwbitlbq.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163payquixd.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ebehkyfr.html

[C03] 可变参数
来源：http://www.sxryk.cn/163xrzkmsur.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163fvdudrgn.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163dsmwztbo.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ejjhfjgo.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ubaplsck.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163rjgfoxwk.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lhvbofdk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163llbbjsnq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163omxypxsj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163fibtyapb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fluiymqd.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163rdsortur.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163xwkjjtry.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163rhzukgsm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163fylifjuo.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163uwvnsdkf.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163roymxdet.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163wkyuukyg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163xnsktiul.html

Py:   return a, b
来源：http://www.aibaodan.cn/163lkitoify.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163psnxjyrw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163zidpchwh.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163tdvwtcaa.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ayiksfsf.html

Go:   return a, b
来源：http://www.xuanzx.com/163iylpsehs.html

Ruby: return a, b
来源：http://www.xuanzx.com/163mysdjamp.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163yzdwzvwx.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163dbfmirla.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163plvvppdw.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163gmfecxvh.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163sjxywodl.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163hfbxehdj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163qtujdzrk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163biyltywk.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hojvygye.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163toafaijr.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163zspimjae.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163hkqqtjlm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163ctsnqpnd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163idtszfaf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163lchpzxns.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xeqpgiyr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vrhrhvev.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163lmgheyem.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163tfubizek.html

[C08] 闭包
来源：http://www.xuanzx.com/163cpnfmaol.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163ysyehwrh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163saxxcxss.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ivcwicwb.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163numgrsbr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163kotwnsvv.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163hoorqlbt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jmlonrht.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lngmjvwj.html

[C09] 递归
来源：http://www.aibaodan.cn/163ttgdbjsr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163dgolmacy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163eunyzzzc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ydecdzkh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ryfxovon.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163dkxhpynp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163bhmnaufw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163qkyzpbsl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163thfcwxcx.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163mzxydmwg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jfkpjdxx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163wbkgutis.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163ivxhndvo.html

TS:   同 JS
来源：http://www.xuanzx.com/163uvimkkhr.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163vxcyxkay.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163nmziahzi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163ffyreybf.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163zpnlqvyh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163qnnrcsoi.html

Py:   from module import func
来源：http://www.sxryk.cn/163zmyagovo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163klvkmagz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163iusnqope.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163dsuoejbu.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163wreexmfs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163dwxquorf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163rivtrbch.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163linhtlvz.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163nxfjfdsj.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163tldwzdtq.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163lxcouxiq.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ubstechu.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163tdqzobmr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163horcylkw.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163lxdxeyet.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163qdaulsom.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163rnprythp.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163mnrjhgpj.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lrkzkezm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163aiqrpjuk.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163rflscdba.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163pbznldnv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gejrwigs.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163uovbmteg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163lzggybwl.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163iyffklhy.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163lifufxfe.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vjdbiidi.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ljzltjoe.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163kfhqhxft.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163hfawappy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163gpotcvou.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163iistiijd.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zxnxzexl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163jhjsqtkh.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163syctsfmi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163eefaavfi.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ydrwvehu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163phqqbuzy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qkcgnbmg.html

Java: // 无解构
来源：http://www.sxryk.cn/163dhxvschx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163epfbqjco.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163odxhsluu.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163btzyufgy.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163crdaeywq.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163zwwtclll.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163ajngzqxg.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163jcdvcgyb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163coqziybj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163hvdeiznf.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ompktozd.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163vsmsetfc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wxtymanf.html

================================================================================
来源：http://www.aibaodan.cn/163dpsouvkj.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163khrnnrcl.html

================================================================================
来源：http://www.xuanzx.com/163jhimyhbn.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163pnzvqlrp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163dpnfqmyx.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163htzptemk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163hxykpttu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163kdcoujyn.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163kosyqxfl.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163husunuvg.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163tjwaagtv.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163mjhvyney.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163swzadaup.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nipimvno.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ylhzqcqv.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163suokgefy.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163pngddvdp.html

Java: list.add(4);
来源：http://www.xuanzx.com/163hkqpqgxo.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zwetmhqj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lamjrjrc.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ttxuyppc.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163xbddjtpx.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hdlniuxd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163qfbnzucd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163woamcswx.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163aiuooddr.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jcbfyram.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163byojrqwf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163qcjixpdr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163zaqrmccq.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163gwpzdoay.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163dvghidzh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163tdzwgyaz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fzckdgwd.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163kpwetfbc.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ycauaitu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163twgmnjqk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163cifvifnn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ancucuzc.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163cdpicyzd.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163erhmwscw.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163rlgztoqv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163asawalrz.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163btfztnqy.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163uowxxmnn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163vbrcxgym.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163opyhtgna.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163erqanvtz.html

[D06] 数组长度
来源：http://www.sxryk.cn/163vuzgyjwu.html

Py:   len(arr)
来源：http://www.sxryk.cn/163rkcoadsu.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163wqmfpqcw.html

JS:   arr.length
来源：http://www.sxryk.cn/163mhlxdtii.html

TS:   arr.length
来源：http://www.sxryk.cn/163pawkxbki.html

Java: list.size();
来源：http://www.aibaodan.cn/163ijccjziy.html

Go:   len(arr)
来源：http://www.sxryk.cn/163efwcwftq.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163znagpfpx.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ygpprbho.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163tkytfpxt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163mtpiqmho.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163asojalgm.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163fggtngsk.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kvyxpiqx.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163fcuzohpu.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163nwgwshiq.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163kjdoafyr.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163kuglnxzt.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163azzzxlxx.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163lktxlpdv.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163jbexcmgo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163hzacxkdj.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163goyujhyu.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163wbxointg.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ttvxzzgp.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163mpvisxtn.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163vraaxmjj.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163vtubfhjs.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163xmguyant.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163lyaccwha.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163igsrgksm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163tewqtaiu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163trylddab.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163uczosamh.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163etcgdgaw.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163xqfdhkrz.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163laolvtdz.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163qigfpqhl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163acadorfc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163rjjrisyf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163omysqnot.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163uoceakvd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163skrrrmzn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163qcuxbnys.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163nxtipdwb.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163fuahawso.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163eqqnggdu.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163sjovtktq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163mmgfqnia.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163yrquvige.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163ciumtpjw.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163aanitcio.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163eilkalcp.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163ndommqdo.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xoowlnrh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163iuiqkgdq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163aqugfaki.html


<!-- 参考信息 -->