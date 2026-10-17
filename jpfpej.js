外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163pxhchfcz.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163uxnxswxp.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163tlnabfzx.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163hfrhtnbr.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ipclpydv.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163zgltoxsa.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163befpkflj.html

Java: a && b || !c
来源：http://www.xuanzx.com/163unrnxodk.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163cacokuvs.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163frmxnkcx.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163ymxmmdxb.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163gcnublgd.html

Py:   if not data: return
来源：http://www.sxryk.cn/163umnjeroe.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163turwkzep.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163bwjxgrzy.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163djpajkpl.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vlnrvahn.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163vpgcagke.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163akwesoyf.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163syvierqf.html

================================================================================
来源：http://www.xuanzx.com/163ixwegayu.html

C. 函数与作用域
来源：http://www.sxryk.cn/163tnkojybn.html

================================================================================
来源：http://www.sxryk.cn/163ermbijrk.html

[C01] 定义函数
来源：http://www.aibaodan.cn/163vvelmfqp.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163qoekoxvq.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163qlxffzhj.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163dtvmlhjc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ajwtxryo.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ncdlkoae.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163frsktufx.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163mznufoyz.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rlyeesmj.html

[C02] 默认参数
来源：http://www.xuanzx.com/163avzqttqb.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163pezoguyp.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zavbtdep.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163xjxpncft.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163hewkchsv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163xbntntwh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163kpdaqszo.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163fyqdfraa.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163fbbsyoqy.html

[C03] 可变参数
来源：http://www.xuanzx.com/163tuozmrsj.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163irnjwrhh.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163ogqghmom.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163yyroupwg.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163djkzlqza.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163gggpaybm.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163xgbtvrue.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163yffrrhgl.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163vedslnxa.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163cmzhlxkw.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163anqvvhzo.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163mwxmykfg.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163bdrdmzng.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163bvumacay.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163rnciwxjf.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163dsseibvv.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163xkjhxote.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163offytapx.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163cnsrddyf.html

Py:   return a, b
来源：http://www.xuanzx.com/163xmhjyloj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163uipttmph.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ctfaqeul.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163yahzzehg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163vzfigscp.html

Go:   return a, b
来源：http://www.xuanzx.com/163eotcfkik.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fojdepto.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ouyapxmi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163afitmmbf.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ipcgblww.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xaktuhlp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xnvhlgkf.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163tgccfzbs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163gliefspm.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163bxeedest.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163vpgdocfg.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163tlxgewrl.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163xwjvngxn.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163rhwmxlny.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163lqhnevju.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jsgvyftv.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163hbofnwib.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163xunpnvhr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163lrgyogmy.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163qztakpxx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163faaxbqmy.html

[C08] 闭包
来源：http://www.sxryk.cn/163rewetslw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ozllknah.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163ewpwnody.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qgqadnrj.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ktwwckyc.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163picxgprk.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163wcfyqlea.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163oycmnaeh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163nnfekcyp.html

[C09] 递归
来源：http://www.sxryk.cn/163vaasogsi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163igtitjru.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ndblrbmd.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163wewxgbii.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163leynhtra.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163cxyeybwb.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163hratxhom.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163imokxscu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163ntupacim.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163kecxbqmw.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163zdesnywi.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163yxemhuwd.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163lxmoinoc.html

TS:   同 JS
来源：http://www.xuanzx.com/163wlesufwv.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163oaascaba.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163utjulwva.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163avunbqqd.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163rgwdjlkr.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163tkenjwut.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nycjfglw.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163tqpfpnwf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163wvhfmqqj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163wwyhaaia.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jjvjzndf.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163mlqistxm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163licdobly.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163yjzboshl.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163yiujdtdw.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163sleitidt.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163koxnppit.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163pbkyibho.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163wftoqgkr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163nhamxrji.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163inqcgvde.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163bprntpcn.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163jahxkixx.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163vpoawtws.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163kuulgsul.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xyxxmrmm.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ihcmjebw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163phbezhrc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163jtvevgac.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163loypdecm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dafyehyg.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xbvrtamb.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163iplplvvv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163ufyvohmh.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163bpnzypnq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163aqirwcsd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ckivysdc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163bewyhnop.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163rhxmmhcm.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163alwftvfa.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163qecbonuf.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163nlimjsyi.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163ytxbfnrc.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ksgtbibe.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nihifoli.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163foxlxutt.html

Java: // 无解构
来源：http://www.xuanzx.com/163plpmqzsm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163xskuuqhq.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163aysmpolb.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163yixnjqws.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163ffyrvrca.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163ncdvhrml.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163evnjdxip.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163qvokdmuk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163nigukoyw.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163glhwbfya.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163vhnlvzsj.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163usouxtos.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163nqmhajfv.html

================================================================================
来源：http://www.xuanzx.com/163owngkngf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xycysqib.html

================================================================================
来源：http://www.aibaodan.cn/163kjzhwhxr.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163hzrdxhwh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163swjjxxui.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163rjualoii.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ydrvihwc.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163xapqnaaj.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163coaamtew.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163pjyfftou.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163frkblzsb.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163umtsgbts.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163pxxyyovu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163kfgigakr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163jdzvqrkn.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163otolnted.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163isebzwpi.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163zdgjxukp.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163wpjvfqmt.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163wudrvqms.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163zdkezbuy.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163nyjaufib.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163stxwvmcs.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163plmgwbrs.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163sevvfewp.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163mbciflro.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163wdczozcq.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163safnbqup.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ruxrlkpf.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163nrsnuodk.html

[D04] 删除元素
来源：http://www.sxryk.cn/163yuqnvjhl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163amxjcwog.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163sfzzdxtj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163eesnqvqk.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163tslxgeio.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163xmzmqjty.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163icrlyfey.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163unfvxtjf.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163nnoqtwfs.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163iqxiewrn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qwxmolur.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163jfccpdyb.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163kahunrmj.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163whutvkrt.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163nnvaltao.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163yjgrfyxv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163rmbxyrmt.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163eejycpfu.html

[D06] 数组长度
来源：http://www.sxryk.cn/163cceqetku.html

Py:   len(arr)
来源：http://www.sxryk.cn/163xsywpfbk.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163kyjelhsc.html

JS:   arr.length
来源：http://www.sxryk.cn/163iwstfuul.html

TS:   arr.length
来源：http://www.aibaodan.cn/163arzyfbbi.html

Java: list.size();
来源：http://www.aibaodan.cn/163ifnedbkf.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163kvcqueyz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163haiqrxph.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hoptfbeo.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163aiiexpzz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163tithrkjp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163qkbixmey.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163utraeaxh.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gshrhbgm.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163niiqrjio.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163etwkkyhj.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163qvpoysnn.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163fhudzxuz.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163bmrnpmnc.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163fmztitwz.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163zzilgmio.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163yvhnbzhr.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163htvihjhb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163kpolmaje.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ekhvvzmc.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zlzbfbve.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163aogfvkbs.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163ljtkyeyh.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163czpckwxx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163qvncxone.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163exelhtcs.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163sligwvmm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163emziprqt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163parhxxjj.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163jfyiiihn.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ijehtaim.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163yqfodmss.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hnmxwrgk.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163zvsgxqqt.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qzcvgjng.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163idiljydo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163bcykfmpv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163ehgtrmvx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ubquutch.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163knyuylas.html

[D11] 反转数组
来源：http://www.sxryk.cn/163vbuozwei.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163xhwendiz.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163ynspcmpi.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163gdtkzfxc.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163yqjlleqg.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163hdqxiare.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163yvcfyqar.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163jdawcteb.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ovaxkohd.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ukpqlokb.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163tekbralp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163krqhmngu.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163kntwbauo.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163muijtiie.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163enzwouab.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163fcaruexf.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163wonossyv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163uhrfoodn.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163nfoixsfq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163eqjkdjiy.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xsndqtdj.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163xrjapvty.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gilahwtr.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163hnfxctyy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163llbjhitl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163puuriylw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163mnksgimj.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ncrjzyja.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163medvaghz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163fwgbqgtz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kpuctcib.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163zmexmhce.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163owvenimr.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163uhsxupbg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163smbjudoi.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163ndcnvaae.html

[D15] 去重
来源：http://www.aibaodan.cn/163htditvbi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mqtyjodz.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163nuvfhmug.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163wbrqyzeb.html


<!-- 参考信息 -->