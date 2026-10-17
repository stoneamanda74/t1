外链999!wailian999！

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163eaewrihr.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163sdjcbstl.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163dzojwxro.html

Java: a && b || !c
来源：http://www.xuanzx.com/163ivvlfoai.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jhkdujpo.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163bpkkufen.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163xcchrctf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163qsggrylt.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163erhytqar.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163aybtpisg.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163rotaezlf.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ojkqebxw.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163owacbmdr.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163pamsemtu.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163clwoyitz.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163elydodtt.html

================================================================================
来源：http://www.sxryk.cn/163vrfegboj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lgvyamxy.html

================================================================================
来源：http://www.xuanzx.com/163wwqpzzma.html

[C01] 定义函数
来源：http://www.sxryk.cn/163hvzujejr.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163govlaioa.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vtodjcra.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163nokjbmla.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163bklgiclc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163rgotgrsn.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163rurkygos.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163mwetbxoi.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163dypmfomq.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163wdxsazsz.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163ehwaiwrg.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163nftudjsj.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163yasdrrqe.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163kjlnmktx.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163ybvltbya.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163mukbndxa.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163sexxhotc.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163gomigojk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163kgtmpyui.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163twyghcln.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163szecahud.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163orydousx.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163stbaifrm.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163taduupxc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163hjrdpjym.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163ifldyuzh.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163sooyxqwi.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163zlzyejfd.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ezlgaypx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163qqopwjiq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163bvrlewqg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163fnnfzbni.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163xwnruhcv.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163qobyphyn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rtkhxbpt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163shspjoou.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163lqulfkbj.html

Py:   return a, b
来源：http://www.xuanzx.com/163tkpsdxfq.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163ouesqwui.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163idpuzfmc.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163txoodduk.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rabknstx.html

Go:   return a, b
来源：http://www.aibaodan.cn/163arnluflb.html

Ruby: return a, b
来源：http://www.xuanzx.com/163bcgylsug.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163eitafrpq.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163qyrtjokb.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163vopousue.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163eqtupste.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163tkwumfpr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163jdtxzbie.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163rjnlvkqh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163vudlkwws.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163feededta.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163ynftrbna.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163sjhiffnh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163nctnkqok.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163euvnxsex.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163yaptkpjj.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cwdzzpms.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163sujjfnyw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163krtzpwnr.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163rwzkexrj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163uhxqgosk.html

[C08] 闭包
来源：http://www.xuanzx.com/163jisgpvjn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163swhnqpxn.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163adzanbkq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xehxjghv.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163wjkjqmqb.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163lxahajek.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163iuxkjefj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163fbrvokyj.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163emruesng.html

[C09] 递归
来源：http://www.aibaodan.cn/163qionzgoe.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163dhpvzoiy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163ejyngtfc.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ajkbsbun.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163xphzxxhg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163helnczwh.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163lnjyslgw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163ucqysthk.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163qkrmatgw.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163sqgspbgu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163glsxksbv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163boluunnu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163eirkoqei.html

TS:   同 JS
来源：http://www.aibaodan.cn/163chkstbck.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163omhvbfqw.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163pjevrubf.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163imkovwtc.html

C#:   块级作用域
来源：http://www.xuanzx.com/163tbrsydgu.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163hemosyao.html

Py:   from module import func
来源：http://www.xuanzx.com/163uoykwdpo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163eydzeegn.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163kiywfkld.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163adfcwdtd.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ykgzkrzg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163totbxxlh.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163smrjykvm.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zstllddm.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163qmbvzxcu.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163sfqojehc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163jrvdjqrl.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163eysawboh.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ihyzgiwo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163luuoavme.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163cmvngpds.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163iafriodl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163zlexdubm.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163gzduaegd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hgtxecst.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163yemhegcw.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163shaycdun.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iuvgkbeb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163mownckvw.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163qdznmhao.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163nolaeerp.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163csrupauo.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163cmbgcysl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163zeprimvh.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ftxjqial.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163xtgwsihp.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163luocxofa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163evqruhan.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163abhtfkkv.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163hbnpafzy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163gzqurrzy.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163snvgvypq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163cxielcix.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163afdfaqzr.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163essdqjsn.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nhilwvup.html

Java: // 无解构
来源：http://www.xuanzx.com/163hqszdgmb.html

Go:   // 无解构
来源：http://www.xuanzx.com/163pdeegmwj.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163mczdtgry.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rkedfpwg.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163toxkjfwp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ufwgjkvc.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163zpiomysa.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qvcghxps.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163budyptfu.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163qmupjkjo.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163rrjhoafg.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163nafzpmrn.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163katibjfn.html

================================================================================
来源：http://www.xuanzx.com/163sglkrnuz.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163rebpolfj.html

================================================================================
来源：http://www.xuanzx.com/163vqnzywbv.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163bzkjtsmw.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ecnracbg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163jtfpsmeb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163xfxmrebo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163bxbqykjc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163movgvsrn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ukvlviys.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bwiwotby.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163bslomvfg.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163mavkztmr.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ajgvuddu.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163grwuxtes.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ntiloysy.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163stajmcfa.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tvqyuehq.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163rgmjciqy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163tifcudnd.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163bskelxus.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ykuwbvqf.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163eqqjybyc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163huedmytj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163berxnkpl.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jpznmxuw.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163amyvmvst.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163swakkfsp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163tmlwaopc.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163rbbdemxv.html

[D04] 删除元素
来源：http://www.xuanzx.com/163tkyarchh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163adkollek.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163ltnynbnt.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163jxqwkmgt.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163biiqqiqd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163ebqzodhh.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163jqunhmmh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163yljnynol.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163vbryqmzl.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163vhmwssus.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163nhrgbnva.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163mvceqefo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163ztjrcurk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163brfejcyt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mntexhjv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163tpjjcefh.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163yrjzplwb.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163wzfxbkjr.html

[D06] 数组长度
来源：http://www.sxryk.cn/163wnwkvheb.html

Py:   len(arr)
来源：http://www.sxryk.cn/163tzrsrrwv.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163zwsxsdhx.html

JS:   arr.length
来源：http://www.sxryk.cn/163udoxnbie.html

TS:   arr.length
来源：http://www.sxryk.cn/163falfhfuw.html

Java: list.size();
来源：http://www.sxryk.cn/163zrwsmtbq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163doybwrhg.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163eanxnvni.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qfjsmzzp.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163dpxviyvo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163nezcfjii.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163brfkdfkr.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163wolahwhv.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qgcoswss.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163yggwpytw.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163ykfaawjw.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163rkslzanr.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163ideogybs.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163njcqlsqv.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163tssvgpdd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163toxldzzw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163palvjygq.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163wvviolao.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163hgmtcmlu.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163pqqeezjo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163mpzzqifp.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163azfdhnnm.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163fashxysg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163pspktgff.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163unxncyua.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hvkqwvrp.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pcaqidok.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ghqzheuz.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163gzvjnpmy.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163symbksvf.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163dwwwaqpn.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163ylkeazrq.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ckxjluag.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163oeljnrhv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ufdxqzju.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qrnjtgvz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163aiktawnm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163gnvzdzcx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163zcmxvglq.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163cnqehaub.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163buvhpmzw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163eggglyao.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163panpctuj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163pelncxxj.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163jtwiawad.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163vqysytsn.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ptvdlfir.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jhlpszcx.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163iyeyjhlm.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163kdlzqhbr.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163gsvafgdy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163eooelnvs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qfoaczpb.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163gkinwlvj.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163ahrnwopq.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163totgijxa.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163rhkpuzho.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163ppnlxhat.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163amhjfhyq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163bwtvbjbn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163mzbwgppb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163nbeoowsz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163htluvzte.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163jbwyjejm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163uavyqvjb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163wghbpmvw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163iuhfpxqz.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163jinxupca.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163mhdmvqds.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163feirtzwo.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163kvlpkbeg.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163twtbljgm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163pnykfcim.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163aupbyzvr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163qskrpmvz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ysrfqyja.html

[D15] 去重
来源：http://www.xuanzx.com/163qqneodxd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163owizvgbo.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163gaycwhrm.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163aytseqga.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kofhojty.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163qguevege.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qzjfcapo.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qpbamexj.html


<!-- 参考信息 -->