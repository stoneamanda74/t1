外链999!wailian999！

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163xxyxzgzj.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ybzdghrb.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163qwhnqiss.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163psgzaumm.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163raqilpnw.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nnhzxbhp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163bcbzdzkb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163eanahsld.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163feseobwo.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163iayfyguc.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163gaylrbuc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163ihcrmdkw.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163vwebqwjp.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163qdfvooqh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163jbbokerd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dqcoppur.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163nlkgukzu.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163hodojcow.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163phsegsan.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163vqagfjah.html

Py:   return a, b
来源：http://www.xuanzx.com/163uyeouxil.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163hhkxjiua.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163falwustq.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163tbvgneak.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rpjzxgov.html

Go:   return a, b
来源：http://www.aibaodan.cn/163aeyinwkm.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163gpmgqwqr.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163bzmszhqw.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163bdhvslbf.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163csddxheu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163mhgqnyds.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163wpedwxlp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163plrtfrix.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163wthvjnuk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163blhlhmwm.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163fkkbxjnv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163ctcujbic.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163nkgjtbkl.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163gtffitss.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163pcczunjz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163hhxsjkhm.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163razbqvkh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163jubltvxd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163szeztrsm.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163qrgscbet.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163wxqlstit.html

[C08] 闭包
来源：http://www.xuanzx.com/163yckietpo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163jqcklqfb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fjctejdq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ipfevoic.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dffmwrbh.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163thrkigrj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163avhtnuqz.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163yeosgyxy.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ivktrgvp.html

[C09] 递归
来源：http://www.sxryk.cn/163fsjwhhyx.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163aqqpupso.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163guubdopn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163sggcyobb.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163utiihkrf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163prosqeoj.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163wialvzut.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163iewrkelv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163gixuciey.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163nddqirfu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163rarfoskr.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163vljkbgoc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163fvdhwbgs.html

TS:   同 JS
来源：http://www.sxryk.cn/163hfagpaju.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qafqjjjt.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163aquddrbu.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163uznadobd.html

C#:   块级作用域
来源：http://www.xuanzx.com/163tgiihzge.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163xasqpjmi.html

Py:   from module import func
来源：http://www.aibaodan.cn/163kytgdrgh.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163aloclcbh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163qbimlcfr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163ppinljcs.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163qyvjgdyl.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163zovetamw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163zggyhico.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163nuweblhb.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163sjmrmpau.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163upbxuyxf.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163dugxtnny.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vujuafqk.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kqvktxdf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163bxtbcjkv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ozlupbcb.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163sosmbnwp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163rikpnksx.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nfnebxlo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163xbxjxlns.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jugfaomu.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163scbjesnq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mcfrnbuz.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163oonfjfyt.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163snonmzgu.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dhyqffjc.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163fwwnheon.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163mnpolijq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163kxhjkmcm.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dnmzvdfm.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163qboeermz.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163icdllpgd.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163drficsel.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163qlhjxbyn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163vdzepkdz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163opacqctd.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163deejehfq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163wzdwvnqx.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163dznapmvi.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163mtuouhuq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163ovccjkkm.html

Java: // 无解构
来源：http://www.sxryk.cn/163vpioxbsm.html

Go:   // 无解构
来源：http://www.sxryk.cn/163bsydurmf.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163cmdhkvlj.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163liultdce.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163cerzvimi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ddgvryce.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163rdfkqpci.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163uljzilzp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163vnaimcwp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163uqihudzr.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163uieozvbx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ikbfnibl.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163yxkjchtv.html

================================================================================
来源：http://www.xuanzx.com/163guskyfuz.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163rshipomc.html

================================================================================
来源：http://www.xuanzx.com/163ejxryzbj.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163lvosymzm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163naddtscc.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163wuqmavvx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163rhdybyvg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163hjjqjlrk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163icpleuoc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163hkgdmnrw.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163xqxbircw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ahytgmpm.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lszmmkul.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163mdjwzmyl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163lldrbtgy.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163kgxoiyqw.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163gnomzuid.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163yadtyycf.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163tqqbkiwv.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163pgyywfkh.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163woxdkone.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163biqhoyec.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163nnjuhlkm.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163pwefvkgg.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163oapcwfiv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163kxoulzyv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ssbgbtxf.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163guoruolu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163jmczawuw.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163havskndt.html

[D04] 删除元素
来源：http://www.xuanzx.com/163auaeazez.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163jolqpeya.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163gryjjekc.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163flkjjroj.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163yphogywz.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163dlwdygpa.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163zstmjjmp.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163dyyililz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163wufencev.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163rjtlgzaa.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qxndtodl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163gbtpnjzc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163viuczwzp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zrpzznlk.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163xbkmdycj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163oshsbznd.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163scoffjoo.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163rtiznrkr.html

[D06] 数组长度
来源：http://www.xuanzx.com/163bwealwbe.html

Py:   len(arr)
来源：http://www.sxryk.cn/163hylamhkc.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163sjlwgpdm.html

JS:   arr.length
来源：http://www.sxryk.cn/163hhbwwhws.html

TS:   arr.length
来源：http://www.xuanzx.com/163muipdhre.html

Java: list.size();
来源：http://www.sxryk.cn/163rnjmxrly.html

Go:   len(arr)
来源：http://www.xuanzx.com/163uzvcvpwz.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163yoxikndm.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hoodhoqk.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163qcabimgz.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163qgftaisl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163czgcftdn.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ldezokrt.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ytbnkrmu.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163ggbihxbm.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163anysekal.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163gayfhuft.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163isyqjxux.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163acinyowu.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ecyosgdm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163jjtuxgjm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163vaqmiyln.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163xkeklwbj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mablgami.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163moawcwao.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163rrknowuw.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163acssezoc.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163doxlnghm.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163nnbakyjr.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163imnzbbef.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163ezctbfox.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163lgykzvui.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163hzenaikl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163wiwjpmme.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163hoyainmu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163euknlifc.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163pjymzdub.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163tujfnhwl.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163zgavtets.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cqtksyxz.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163zstllwwf.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163vvrymgwh.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163slardeuv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163wpukctwi.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163cvvydryf.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bpeiweoy.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163vtznpuch.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dhdgcumh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nriqoewv.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163lcaavlsn.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163cpokweie.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163iclawjjs.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163uxknujne.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ytfusbwy.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163iyziktfh.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163htrpaoac.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rsxdeqaa.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ehkiirio.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163wysqdzga.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163hwxszlyv.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163kqhvptly.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163novnawsq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163uodkrwhc.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163dvqemmlo.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163tguswthk.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163farbcghe.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163npyirqho.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zsbxqsxx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163poczmxlo.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163kyojhfzo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163mtdobtvo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163jprcsvvr.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163qwndmeem.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163lpcutkxu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163hxxcnzaz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163usutirnp.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xxsfdnke.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163iddhcyah.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163avmattki.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163hdsdvlzz.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163owcwowdl.html

[D15] 去重
来源：http://www.aibaodan.cn/163vyillktt.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163nqwlkodi.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163hazdvihc.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163udrywsnh.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163kpajbmcy.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163plzhboqy.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163hccqmory.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163izusyajs.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163saoebxqu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163qadwpoej.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163ctllmdso.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163ommkszdg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hykxrfdj.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163tcuvuohn.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163lcbrqcoa.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163tfluhyzr.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163evhgmggj.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163wcpgatbm.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163onvlnmiv.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163nzdptwav.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163zpfhfhlo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163pbcsgmbc.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163dxkpbtxn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163jlcfnwgt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163lpicuclc.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163dqurntho.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163rqcgvetm.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163breqnhvh.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163gsrfxpnp.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ivjasrqc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163bvpvsprq.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163oxpbxelq.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163iwdzbwav.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163fvjzaxwv.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163ghrtatww.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zeurvvkj.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163tpldurzw.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163uemtrrku.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fttglcbt.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163vmcenymw.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163qodguqip.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163bwuzfuly.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163vypcmclx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.xuanzx.com/163hjjhjkjx.html


<!-- 参考信息 -->