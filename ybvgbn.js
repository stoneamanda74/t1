外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163mpbrwzvc.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163zmyrjsiq.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163lrcaucib.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163awgsdbth.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163mltconit.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wshopoqb.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163rmxyjxpx.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163ueyoxxdp.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163coaormlu.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163ccsunidr.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163pnrmqwfq.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bilngwhc.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163kzulnzni.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ptkqipak.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163oakfcyco.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163prghihmc.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163zkvxrqwo.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163otfmccfg.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163bktkxcbd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163djraggxu.html

Py:   if not data: return
来源：http://www.sxryk.cn/163qlrgqmmt.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163vrmjpbyp.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163cjqakfpi.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163irkzwjqb.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163loeyqxla.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163nhyootbw.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163opflvxcz.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163woegmrbb.html

================================================================================
来源：http://www.xuanzx.com/163ouwvcbah.html

C. 函数与作用域
来源：http://www.xuanzx.com/163hcrxwvoa.html

================================================================================
来源：http://www.sxryk.cn/163vrqubnrl.html

[C01] 定义函数
来源：http://www.xuanzx.com/163faxupcag.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163budjqayo.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rizgfsyd.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cdyajhkt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gozkrdag.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ovpsgtrh.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163muxglrug.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163qacyvxaw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163vrlikpvt.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163dctlhumv.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163ykrrvlia.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163euxsrdne.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163cfoewmsc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163proghvvo.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qeevsejz.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163rgvbtrvx.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163gskbccwr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163klzxboni.html

[C03] 可变参数
来源：http://www.sxryk.cn/163yqrlnwca.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163fzkskizs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163lyydqtsm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163obcyiutw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163reyyeqzn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163skqqkflq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kxbsyxls.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163bmbatfdz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ahkumqfi.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163lbrokatg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163qnspyssm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163jdhnlcxw.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163glxorjpw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163baouaonm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163iiyzobbd.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163lfefvpig.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163fueckszt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163uqkfmczw.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163esknavib.html

Py:   return a, b
来源：http://www.sxryk.cn/163rsxptnxx.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tkjdujon.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163oshdqtgy.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163vmmfsmsk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163afttndjx.html

Go:   return a, b
来源：http://www.sxryk.cn/163pjmfwcor.html

Ruby: return a, b
来源：http://www.xuanzx.com/163dxgpyyvh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163fdjpsdkp.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163dhtuashj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ucwkeiok.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163rlgrsdop.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163nsjesvqi.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163xdlxpxic.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163ylepreup.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163sobdgciz.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zyphahow.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163embeanhz.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163muuiqoyo.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163kgmdwxis.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163dvrhhibn.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163igmevayo.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163pazlkifa.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163wcubrbed.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163edbdbett.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163lvvolzfr.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163jwnfvvlz.html

[C08] 闭包
来源：http://www.aibaodan.cn/163yvlggush.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163rzvrhczu.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ebfwgijv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163dbkgagqc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163coeadarh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163iirtfnmz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163yvkmrvgl.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163boowtzie.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rqyoicwi.html

[C09] 递归
来源：http://www.aibaodan.cn/163fwhtxrag.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163kvymzmxs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163afthscug.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vosqahuk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163evzvcbma.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163guyflupm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ufdeihvn.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163xgqfidup.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163tbmkbchc.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163pfktofxg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163mpzmadug.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163ljgilexb.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163wsnchabz.html

TS:   同 JS
来源：http://www.xuanzx.com/163lnbcbqrh.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163weuuscwo.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ebacbhwz.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163uznxiddi.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ethjikct.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163dobyzrmf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163pnplisul.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163rowetglf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163snhnzpyk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163gloqbjis.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163exysuebc.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163jdetpjsf.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163gxyuvqhp.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163kopvaqdf.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163vduqpezn.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163rukihdwj.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ddsqsizv.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163lopniymi.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163cjctxwzv.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163nqqdfhij.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ugpsuuwg.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163yhfkbiuv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163hknrfwdm.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hmqbacpl.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163whtykusq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163cqsdufae.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hhijnixe.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gytxnakw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jsruwexh.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163ypzkoiat.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163xtqbptck.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hznyejun.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163xkewtocj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163cgofcyrv.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163tyuaevuh.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163yllrnvey.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zrfqoxxj.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163pxdlogdw.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163cyjtnhwi.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163sacuvmts.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163fsapczva.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163kwwfaxtl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163clokokmb.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163jxyrwezq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qhswgbhd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163pxpwgmek.html

Java: // 无解构
来源：http://www.xuanzx.com/163wdocdzmi.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163dlqtfhda.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163kfasugyx.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163eyrniwae.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163opghyfmg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163sprapumy.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163jtxglwzd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163imiebfpe.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163xuvzxkzx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163kxalymtl.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163kqimqpqj.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163zzmgpqpc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163ekzyvarh.html

================================================================================
来源：http://www.xuanzx.com/163nxfsscxy.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163fjllgypi.html

================================================================================
来源：http://www.aibaodan.cn/163lhepylxv.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163xdoqgunc.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163gbjlgfsd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163tlnlxmtk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163dypihsja.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ttnusdsh.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163immpshow.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vrvquyrd.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163xuseliln.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163qpkecpwk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163midarhkb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xjoehwqn.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pccmzvrc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163vfrgzzvf.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163tylttidi.html

Java: list.add(4);
来源：http://www.xuanzx.com/163pyeopabz.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163woixuufm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ueidklnz.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163dqkmjngu.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163nuqjvdvd.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163ytzkevuw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163axiemzqu.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163yzvxvawm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jnfsopji.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163cyriwvoo.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163bysnmtcq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163brlebdac.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163fbudzsbr.html

[D04] 删除元素
来源：http://www.sxryk.cn/163choavbgv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ecehhwzi.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vlejitmz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163rlxeewut.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163rudycwhp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163rumcvkzi.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163hoxityqe.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163nqjohaan.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163lhijgrty.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163tbemzhlp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ifjzjtvj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163xozhgxyz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163jkskqcbq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163cukbfucj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163gweoiujv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gmwpjktl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163zjucqftc.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163qzgclfkn.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163jtatxzed.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mbksoiqq.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163kvhrobsw.html

JS:   arr.length
来源：http://www.sxryk.cn/163wxxizwoa.html

TS:   arr.length
来源：http://www.sxryk.cn/163jjxklywe.html

Java: list.size();
来源：http://www.aibaodan.cn/163tfqhrxvt.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163qsvgubsh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163ksiqbpjs.html

C#:   list.Count;
来源：http://www.xuanzx.com/163tgponqvh.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163qtfahvug.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163xljakoqn.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163sseecwhd.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wpqmoulw.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163mvuseogt.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163sfocqiwr.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163exjlranc.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163wdxabzoo.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163zummgskt.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163owfeclno.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163dnwamgrl.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163jkyptixr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163aiyrphyg.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163gxttfwvd.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163ttdabyxs.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163oupvgvyk.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163omfzeytk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163czshtjwt.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163uhdsuuyj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163uzwggwdb.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163jvmuvmsv.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163kfdhlfzn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163xdsjmxif.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163bkzkcorf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163lfmvsuth.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163cjqqropz.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qhrcaktp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163zvsiibzc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163dahcvify.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163dyogbeyy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zkyntwbn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163uqajbwqf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163ytlfooft.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jnhaphkb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gwyddrcd.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163qqbajzmk.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163smgvdsbq.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ijvkhoxc.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wnyfexoy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163vpugczma.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ekqbrkwg.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163amlpeiig.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ldvtmypy.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163hgorkkue.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163otveesok.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163axzgaugh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163leoqcabh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163lqahtwrm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163bjncfowq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hszxtuuv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163xejexhpa.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ezstnrxb.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163plpwgioq.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mtdafoap.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163mdwcgbjw.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163aowonshh.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163bzobvnmv.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wkodniex.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163awlzykai.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163yayayxbl.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163cjmxslgh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163qypgrvai.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163cebhigjq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ftwyajpq.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jjlsnnlx.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163jqoniqyl.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vkzqbrss.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hsupqxxl.html


<!-- 参考信息 -->