外链999!wailian999！

[B13] 判断是否为数字
来源：http://www.aibaodan.cn/163svtpzjwx.html

Py:   isinstance(x, (int, float))
来源：http://www.sxryk.cn/163askfddvg.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163suyavmyt.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163estjtjtj.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163cqffpubi.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163mtifgfjo.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163xvgjftbj.html

Ruby: x.is_a?(Numeric)
来源：http://www.sxryk.cn/163lxtfymhq.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163mananqbl.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163cxnvicme.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163hycjslos.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163slvandoz.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163rqkvlaom.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163tnwcanvz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163njtjvewt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163fexpzqvk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163jyaiygrz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163oummveec.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163usrmfntr.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163dyshgwxa.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163wnwjovff.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163sjfijehd.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163npmuhlis.html

Java: a && b || !c
来源：http://www.xuanzx.com/163avxuuiyx.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163yjqfpnys.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163wkxvwunr.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163izmrfbzv.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163scipnouq.html

Py:   if not data: return
来源：http://www.xuanzx.com/163ncsmoyjn.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163fnuwyilj.html

JS:   if (!data) return;
来源：http://www.aibaodan.cn/163pyhvrjzf.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163dyjiganz.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163dnpjdamj.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163cjrwxknb.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163cdeexazr.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ihvwopxa.html

================================================================================
来源：http://www.sxryk.cn/163qtypjpln.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163vxvmrnpl.html

================================================================================
来源：http://www.sxryk.cn/163epvraqzb.html

[C01] 定义函数
来源：http://www.sxryk.cn/163luyelkds.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163tfnucoxn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ffuywlij.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163hretfmmq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163ygleecse.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163lbkpexey.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163kwnvadcu.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163vjpxwyiu.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163gqprvgjy.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163vwtkuvlp.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163lzdpnzxs.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163llklcvwi.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163bgacqzro.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ndrfwhck.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163bmcevnvb.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lpckexzm.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163vvxwpjlk.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163udwjwbdw.html

[C03] 可变参数
来源：http://www.xuanzx.com/163iclipvmo.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163kubzpxit.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163nlduvghg.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163aumbzdbq.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xwtlulkt.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163redbihln.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163vdhucpay.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163sjfiklth.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163krxrmiqg.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ibdamxev.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163hgihgezk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163uskirhca.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163havdtcvv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163rypzvjmf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ockofldq.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163cpxieigx.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aospmlrp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163aymzflnf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163qslqseem.html

Py:   return a, b
来源：http://www.sxryk.cn/163yaflbauk.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163pxnnbmcd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163rzbdqyez.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163qpqragpj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163ltsggzsw.html

Go:   return a, b
来源：http://www.sxryk.cn/163yqawppvr.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163tiymmcbv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163qoxizbxh.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163yqihyblo.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163svycsgch.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163lizyweeb.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163tlajtcge.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ltmxbawz.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163apdqgego.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163zdfdaswk.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163uanvysue.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ssxwtobk.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163pzpmrpuk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163wxbimdfb.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163gnrkcxre.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163pbsdvjql.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163dsoomgdd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163lnxjpfpi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163ivcjeonz.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163zjosnlus.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163enhggdir.html

[C08] 闭包
来源：http://www.xuanzx.com/163kzvjopjp.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163qlrdhmul.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163jdcsimbt.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163xtsfrczl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163umbfdlld.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163shtcraxg.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163vspaweqz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163xvqjrwdt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163rdgxweof.html

[C09] 递归
来源：http://www.aibaodan.cn/163gnnpbpkt.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163huqkuiqr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163tfiszmhb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163aguzgsgp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163iugvypxp.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163mquzawui.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ddyuufpc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163zgqlnbpo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163rzkkdtva.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163klmrsovf.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163hduwyhwo.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wpwenebm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163iyhvqria.html

TS:   同 JS
来源：http://www.xuanzx.com/163mfcjscve.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163jmzotntz.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ccbezckf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163xooxrvue.html

C#:   块级作用域
来源：http://www.xuanzx.com/163qpvwofje.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ngddndrn.html

Py:   from module import func
来源：http://www.xuanzx.com/163fgrsxugh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163yqmhbxwt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163atlmktmx.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163vovyvxae.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163zskefrmk.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163fkchlmsl.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ktafhipm.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ibbfksln.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163gbiqajka.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163izrfpnbx.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163hmprlkif.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ewxscndr.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163phculprr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163tryrkjws.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163capbomcy.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163ejkdcbkd.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163cwpqhnik.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163xeqpibyk.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163lwxpoacn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ikvnyloo.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163whmnipip.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ftzsjjiw.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163hkhdilwa.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xlczamdb.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163kzzlawph.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163srywuxoo.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163pvdaerjx.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vdbyragp.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163jmnuesnc.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163kifhsnag.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ghvwjomk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163czsrbzvy.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163uakbxovo.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163ymvpdwll.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ijczmxiz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163bqujvlib.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163yvxggazi.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163wgaemuqf.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163tclrkkxk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163aihwxycj.html

Java: // 无解构
来源：http://www.sxryk.cn/163wgknovfx.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kybmcziy.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163pibhmkiz.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163hmxhkpra.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163xetvurqt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163anjucogc.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163yvsqpzfe.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163brloaine.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163vkstpqwv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163vghtpufy.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163vkbzxekk.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163aoibixqe.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163qodpihll.html

================================================================================
来源：http://www.aibaodan.cn/163dqazdneu.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163kspbcdjo.html

================================================================================
来源：http://www.aibaodan.cn/163ljfcxyym.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163xfvwoygu.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ohqjucbd.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163udqtoxqz.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163tlpajkbm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163cghfaaig.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163qddauyyk.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163dcmfkqic.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163uiewvrqq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jjqyjyzf.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bslbhiuz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163srotsalr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163paygheew.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163yhyughpj.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163drxpbqyv.html

Java: list.add(4);
来源：http://www.sxryk.cn/163ehixnuap.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163bixwwgia.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163lojsinvo.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163gdjgihni.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163rvxkifeb.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163qoucibjw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163yjgmutzi.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163iarsptxz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163oacrvenv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163egbggjrj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163prbnhneo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163yyzpqfuy.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163zsdsrldk.html

[D04] 删除元素
来源：http://www.xuanzx.com/163vgbvvvmq.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163qmevrgjg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163wohltpap.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ceueiivg.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163msrryvmp.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163ixagfpqs.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163xibigsyl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163cuyfyxtp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163xghetibi.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163spalvztg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163pysgsuoz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163ctmornmw.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ctbrphxq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163osrlfukh.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163sbytghjl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163swjqvnrs.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cgiqpgqm.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163nvtazvia.html

[D06] 数组长度
来源：http://www.xuanzx.com/163cumytlxo.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mukjpkly.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163neuyyaki.html

JS:   arr.length
来源：http://www.aibaodan.cn/163aswwmhuq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163ylbldeor.html

Java: list.size();
来源：http://www.sxryk.cn/163nrnfliik.html

Go:   len(arr)
来源：http://www.sxryk.cn/163wlqlrfjo.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163mjcmprnj.html

C#:   list.Count;
来源：http://www.xuanzx.com/163uxyustrm.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163ceclnsjw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mrlbfvif.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163aenglnbd.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163llshocsc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ipcnnmwv.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163egoyyxbn.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163gqtioonm.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163ycunghkg.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163fzspbcbx.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gnaswjbq.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163nfxeazia.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163jjeehcxk.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zumavyyg.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qcmwoeoy.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jyhjizpc.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163pdeymaua.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163qhloyhhp.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163pfetplez.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163poaubxhj.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163dawafzcm.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163pfilwbfd.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163wkriinol.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xnsxnnfs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bmlfumrt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163gcyymrks.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163txftechh.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163cejnxzli.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ssjojadq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163kgncurqg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163kyilxxut.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163kijfcjto.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fxbyqnmp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163sgfkoliz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163prfiqaej.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163oalhncwh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163uitjuymw.html

[D11] 反转数组
来源：http://www.xuanzx.com/163pgbmfhbc.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163udzjhghl.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163uzjntioo.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163pvldecqt.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ukocaqyd.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163xltkgney.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163lqyeeyeo.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163piymijed.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163amahijar.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163niisfcyx.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ylnpxgoe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163odchjywa.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163hpgjcexs.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163exsqxhcg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163tvuuwmiw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163piyofxjd.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xgbfmdjx.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tsnpuotw.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163gjwxrkru.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zttwuhzl.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163wbsyexos.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ucrgyyxk.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163naobclgv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163ipdxziso.html


<!-- 参考信息 -->