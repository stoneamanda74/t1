外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163uewebqoi.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eukpnuze.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163wratjcwb.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163utzkptdu.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163aqlyqdlr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163zwdsagfn.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163zujfjwig.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163oxjfxzuz.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163cppeyyrd.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ltzsdvgj.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163lbeljzzq.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163xppaepvd.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163rcgekazv.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163xskyvxed.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163bdvfskdw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163rqdwkwve.html

Py:   if not data: return
来源：http://www.sxryk.cn/163ensfqgcf.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163sdipbgow.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163jqsxsgbr.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163woywicdo.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163zlrqobsp.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163uhisbtsz.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163ibdhirrb.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163hinpjkrn.html

================================================================================
来源：http://www.sxryk.cn/163qdxattvk.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163whbqzwoc.html

================================================================================
来源：http://www.aibaodan.cn/163ltvnapsl.html

[C01] 定义函数
来源：http://www.sxryk.cn/163jbjgfoyl.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163bjrgckgv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163ioepenzm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163mozbnhof.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163blxoufhm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163xqqpbuia.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163ffecehfu.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163tvwhzvak.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163usrckgco.html

[C02] 默认参数
来源：http://www.xuanzx.com/163hohdwtum.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163lpwvquar.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163uryjshuz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163waqqggir.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163otxzqpqp.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163qmxgtdmp.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163ejdcduhp.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163ftpnhdmq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163nnuciopp.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163xnliyhwz.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163kyjupxwj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163nhnmrmmr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163ewiceiga.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nfnraezi.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163tkkbjvjh.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163fkxxepss.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163suoujidw.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ntmvppvj.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163swlxpmia.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163rmeodenr.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xkrmardl.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163qlilxfns.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163varpyozb.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kpnqlfab.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163leiflbuy.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163umygaccj.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bwrlcple.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163wpnsmqkj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163oyjwiman.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163clfnfeky.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163evnoodxy.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tpmuaoii.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163hnycburd.html

Go:   return a, b
来源：http://www.xuanzx.com/163paqifkwj.html

Ruby: return a, b
来源：http://www.sxryk.cn/163dqefoxmh.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163rkxggqkk.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163vvxjiues.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163uzlgossu.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163iexttvum.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163sgrtqblt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163xtdhdhrj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163pfycbcdh.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163mvokxnqe.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ughsjogz.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163ktqfytbe.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163qvylgeai.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163zmucksec.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163xowxucie.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163zzhmnqko.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163fzaziyrh.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163foihuibx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163nievwjsc.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ozauaksj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163mrasngns.html

[C08] 闭包
来源：http://www.xuanzx.com/163vvogfjcj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163opwwibyr.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163rrpazbob.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163lqhybgcm.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163yjpubgio.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ajklvsmn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163yjqrgzsd.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163rqhoaeoz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163jtvgsodu.html

[C09] 递归
来源：http://www.sxryk.cn/163vxtpiset.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163xjggdtnm.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163dzkatazl.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163cvjgjrzk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yhpjpadc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vrxlrbvs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163trbrdhoj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163jbdxtcox.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dumcwdjp.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163raaruzls.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163pjxufmhc.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163wozjjzro.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163bphadewa.html

TS:   同 JS
来源：http://www.aibaodan.cn/163giutprav.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163lenohbyf.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163ipgzeztx.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163vpjggnrr.html

C#:   块级作用域
来源：http://www.sxryk.cn/163prhqbrek.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163lznzczij.html

Py:   from module import func
来源：http://www.aibaodan.cn/163gctjwjhm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163mbswtlfz.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163sjmzsgrz.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163mpqtrdyk.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163poixwukx.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163ypnbbmyq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163ejfmnynz.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ekajvicm.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163xezphdqj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163cigayuoy.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163baqlbxhn.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ynwjprht.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163zrancsuf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163aevjfims.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163aoacpmfp.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163bjlpipis.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vslmobvq.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163nwiwtqoy.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163otiligxr.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ziwquwyb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163hftgiihc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163ozgtpsgt.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163rqzknghs.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163tisncmcz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163uheimvhr.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sxusoaxc.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163twqwhbza.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163lxebfyly.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163vkqcotjr.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163ckxqixtw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163tgqlxhzv.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163yhovtwux.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163elohuihj.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163fvxbxovi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163mgosttna.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163mkmlryla.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163vlfoujpf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163thqvhihm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wbvqrdyd.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163owsspbnv.html

Java: // 无解构
来源：http://www.sxryk.cn/163avsyrgmo.html

Go:   // 无解构
来源：http://www.sxryk.cn/163khoygjhp.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ivarmzhl.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163edaqnctf.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163ksynxdto.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163fnkrjvhi.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163nxdlpfiu.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163vciuszps.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163asqytowb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ywupqfre.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163vvufdulw.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163bjqgjium.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163tlmyjgwb.html

================================================================================
来源：http://www.xuanzx.com/163dpcumhyb.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163vvulurdo.html

================================================================================
来源：http://www.xuanzx.com/163kmggpkwh.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163ggjmiquh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163czrzgfwv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163tkzjoziv.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163mqpgjrhu.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163ikhptvoc.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163eqmhwhns.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163plqpayqt.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163mdhctent.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163tpiacmkp.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163xtkpphpg.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163mscgeyqc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163yronjecy.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ucgborux.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163qqmtmzgk.html

Java: list.add(4);
来源：http://www.xuanzx.com/163ruaohudy.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163jearsdhx.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xabkqaqq.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163qktkcfdk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163jgiobhkd.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163xieugtpl.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163xdldlggm.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lyqkfrxm.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163moijbjdz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163obqqprgb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163yryqfaru.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163fzpsowcf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mwlsaxqg.html

[D04] 删除元素
来源：http://www.xuanzx.com/163otcgflbf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163dtikqoyn.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163fbwyvnwu.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163errvebya.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zmdfmxjd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163gpvjcxoz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163opfdhrga.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163dwkwkerg.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163njgcofje.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ynzwahux.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163jmiuqwtb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163edwbfrlm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163rlqknfjs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163euyatwmq.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ikoybzsj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163cgctptki.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163jlusrcnr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163dyipzukb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hzbffmkz.html

Py:   len(arr)
来源：http://www.sxryk.cn/163kgylnfdr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ppepotul.html

JS:   arr.length
来源：http://www.sxryk.cn/163azrxxlzo.html

TS:   arr.length
来源：http://www.aibaodan.cn/163fexpjlmq.html

Java: list.size();
来源：http://www.xuanzx.com/163ezqzdlqz.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163nlphvlan.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163srsvuanq.html

C#:   list.Count;
来源：http://www.sxryk.cn/163mkdhaktl.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163yjpjtvyj.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163fgzxitjm.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163topcwzlk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163kjacilfx.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163hxgdlbck.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163olxkjpya.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163grqcdltz.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163jlujityf.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163awhsavma.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163mfbygfgv.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163qgteuqja.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163uyrxpfss.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163uithiftx.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163sijkmede.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163jlropxtn.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163qucddksg.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zdkjeean.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163gblcykbu.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163itpsjaqu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163chygsptf.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163xkkspzby.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163rkharumk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vnzphvce.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163lccjuwox.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163onyzjxai.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ygspxfzf.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163umjhwjvj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163rsljenxy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163nowetjox.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163ccbubugg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163gteqenli.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163fwftmpii.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qxjdiucu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163dqdaizpm.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163gnhvlcrc.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163iprfsjht.html

[D11] 反转数组
来源：http://www.xuanzx.com/163jfcvrysw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163fexqafrj.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gxslimqx.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163esquymka.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163cldvvopc.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163firomqjx.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ivoibqdd.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163jkoeglwi.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163mhmeuibg.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163omaqljgy.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163qmmhsnxa.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163bbgutjlh.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163hpuktzfq.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163aekbbzpi.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ybtdbfob.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163xhlguzul.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163lctccrsl.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ngauhatj.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163pmqcwncg.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163zhydqjac.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163pdolctvv.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163iuqxnkqn.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163mhrzdmsu.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163miacsajs.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163cvszmgqh.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163fxxaucgo.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163lmptybrc.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mmarcdif.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mejcvval.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163qbobaflb.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163xgohllhu.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gsgjcrwz.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163kcdjtpgz.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163zhsoufon.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163gmbwbfat.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dpwsafyv.html


<!-- 参考信息 -->