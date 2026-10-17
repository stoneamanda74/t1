外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163bsffiibw.html

Java: x instanceof Number
来源：http://www.xuanzx.com/163vaxffsgs.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.xuanzx.com/163nbwcgfcg.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163qvjudzrc.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163ienspsup.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rgkttkyl.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.xuanzx.com/163qhwtcwep.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.xuanzx.com/163mhkxhqvb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163ceuxluyr.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163syyaqigj.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163ekltsafz.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163zgsxebyq.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163xkwiphzq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163osmompnf.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163mgqxyvnn.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163sgfbcgqf.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163nqdrpfjw.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163mbokrmvg.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163txciprcn.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ioxqfqth.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163oynrtngk.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163opayevfh.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163qfiwnoiz.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163pdzstygr.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163qyojayra.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163wxkzishj.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ispjttiq.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163mwqkuljz.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163kodaykau.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163eachatbb.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163rjtyzbno.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163kvzllxzh.html

================================================================================
来源：http://www.xuanzx.com/163fuerrfjj.html

C. 函数与作用域
来源：http://www.xuanzx.com/163lkrqnysd.html

================================================================================
来源：http://www.sxryk.cn/163jwqgqwif.html

[C01] 定义函数
来源：http://www.sxryk.cn/163wnuypufc.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163unnguikv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163dpetajdy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163cnewilrn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163efxxcsuf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163yaherrzb.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163iwrnasbg.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163xgqntmgg.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ecuvuuiy.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163eylziwjk.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163bxnwjxmv.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163jshyfocc.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163bcpnujue.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163dxmsdiox.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163ebjvottr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163mudbqxii.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163cekdkkti.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163yfxpzxlk.html

[C03] 可变参数
来源：http://www.sxryk.cn/163vkwrzznn.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ghjojhax.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163phrdjpdd.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163xabjeuym.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ivrppsww.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163suorjptf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163qsxbrvfk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163eetqqsfy.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163krcsvnqi.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ebfucava.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xkoxkguu.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163dptjkhor.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163tyiyjdgx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163izcevehp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163fhpfulja.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163yujeqmbu.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163rgginwpi.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dsllzaal.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163odfhbdym.html

Py:   return a, b
来源：http://www.xuanzx.com/163ivslyful.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163zjdfjkll.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163ptkkxiar.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163waqibzbj.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163gsnfnbjo.html

Go:   return a, b
来源：http://www.sxryk.cn/163tmblgywe.html

Ruby: return a, b
来源：http://www.sxryk.cn/163yxijpodr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163wluutiyt.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163hkjdhtcx.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163flrucsnn.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163npnojzql.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xadwmuqt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vhtpmkfp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dcrkjgew.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163hekrqglq.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163tcxbhhow.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163qpslhvdm.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163yjhdknqy.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163uqqbjlmz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163vaquzhyd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163bonaioha.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163zypdkfnq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163iyksfyqq.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163vxwsitsd.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163cynyrcrz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163axpzoqmb.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dsahvdgu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163fpsuhjrh.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163kyczbccs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zwfkygqc.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163jmlfvsut.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163epeuegbh.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163rbyhwvjx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163cqypwypc.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dmgurjzl.html

[C09] 递归
来源：http://www.aibaodan.cn/163lvixenvr.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163dulbcoez.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rpkfnmis.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163kpqbvwro.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ppnmeoxq.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163izmakymr.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163yifughix.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ixmojlle.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163niswqykj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ymvcdqia.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163aobpdqic.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163bqucsmsm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163gvcruswe.html

TS:   同 JS
来源：http://www.xuanzx.com/163nukiyyzm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163ykffditb.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163nywvqgao.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163luxcuwpr.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163dbbhtlql.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163pfuoglta.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ruruzavf.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163amcgvamj.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163rmmaiskk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163rtfnbsvq.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163shxdzpcn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ttxuoncu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cpigbimt.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163uyzmlkit.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uwaezzxy.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qrhitgwa.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163kohcpfrc.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163dpkpgozb.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163opgvsuxf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163ohrhouve.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ikrbpktu.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163qwuizcnc.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163omrgsaho.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lhuguyma.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163xhknenej.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ceibwtlu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163qisupcih.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cjeorwup.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lukqdftv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163cbgapehj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163hxovbzxq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bynnyczp.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163khxigcga.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vloyibka.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163gevcvjqa.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163nnqtqbbs.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163wyjyoidr.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bstrvdke.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163geydbrwk.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163deszcltt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163aiqvhrnm.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163igvwmghi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163qwpjabiq.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ovzaarac.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163yhhlidst.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163fkjyuiqz.html

Java: // 无解构
来源：http://www.aibaodan.cn/163xuykesoi.html

Go:   // 无解构
来源：http://www.sxryk.cn/163euizsziq.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163qcdhunou.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163rkaanfbe.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163mmjlcmqz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163iwhmfkvi.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163yxbjlwrn.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163uqzranrw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163uvjniplv.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163dhwwdygn.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163hkzxwjrb.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zevmfhua.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163sgnwnokc.html

================================================================================
来源：http://www.sxryk.cn/163mgceivmx.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163ngyuldzh.html

================================================================================
来源：http://www.sxryk.cn/163abmbhzhu.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163qjxqwwwm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163arbfdebt.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163vxokhlxa.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163tmmbauli.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163itznhidx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163jzkcymqn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163cqjnitbg.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rywefucd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163nkapoxrp.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163oarxxsuh.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163qccpxflh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163teoutprc.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163vptyxjck.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163lgvvhlqb.html

Java: list.add(4);
来源：http://www.xuanzx.com/163viqhzbuq.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bofqvjfp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163mzpaujpr.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163oglhugtr.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ymnznpdw.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163dyiyycst.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163odlxdqgl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163cegqjqnf.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163pcwjdsdj.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rvtukxod.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163pkfodjpv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163lfacrapb.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163vnbtkdli.html

[D04] 删除元素
来源：http://www.xuanzx.com/163oftyvzzz.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163eepnpnym.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163asetzzup.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163zimabmdv.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163uzrbbkoo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gxoxlhtl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163lfavilkk.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163abheejff.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163btjszfzh.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163pwkbmoqy.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bwbbgivv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163hcejbzcq.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163koztquuc.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gqpdlbfc.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163btahpdfo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163bvgoejzn.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163errxhpke.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163vxszcebn.html

[D06] 数组长度
来源：http://www.sxryk.cn/163wkvrnfzl.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163rtlfboor.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163czkofewb.html

JS:   arr.length
来源：http://www.sxryk.cn/163uwrnzcxn.html

TS:   arr.length
来源：http://www.aibaodan.cn/163tinhscop.html

Java: list.size();
来源：http://www.xuanzx.com/163picxkhtd.html

Go:   len(arr)
来源：http://www.xuanzx.com/163mirajcji.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163joahlyrh.html

C#:   list.Count;
来源：http://www.xuanzx.com/163grgkgdsw.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163bquhrfud.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163alwvrdxi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163hkeaerns.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163nxxsbmig.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163gsqnjxpc.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163nocefzkz.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163riexphfv.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163vwsdebrp.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163bozficvv.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163pxsmjlli.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163xeuxdezp.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163ajnhedaa.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163rcwqjaxa.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163ddirmtds.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163gwabvwxo.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163usibital.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163nvsagahf.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163mtqyjmlb.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163luphszwi.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163ykyzwevt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163dkmjgsmk.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163cvkvicim.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163shqkzojm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163wmmcpetv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jrsaowpj.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163dliirujo.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163idguacoi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163vjgdmwqm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163wawjuoam.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163ysnzxsji.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163limytasc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163uzldworx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qsxjnedb.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163atyztnvq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163zodjxfgu.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163jzscstdx.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163mdiavocx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163wafmjkiy.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163wdtpkrvs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163kdggrhba.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ftrvlcyi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163tzathkfz.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163tiauewns.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163vheyqnkn.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163gwokgnlf.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163pagwtcro.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163oyjyudxg.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163saswtvnw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163uxlywxnw.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163cpuatgqp.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vbrxyvgh.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163othotclp.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163iltxavnq.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163ipsbrlqh.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ynlvwino.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163wrrcshdf.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163mznmybsf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163dlijrapk.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vjxauyty.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163msshcxwm.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163jftsfaey.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163zxntkgst.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163efsvampf.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163tpqhpeiq.html


<!-- 参考信息 -->