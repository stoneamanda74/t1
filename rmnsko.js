外链999!wailian999！

Go:   for i := 0; i < 10; i += 2 { }   // 无区间生成器
来源：http://www.xuanzx.com/163sxxozvhx.html

Ruby: (0...10).step(2).to_a
来源：http://www.xuanzx.com/163pctbpcpo.html

C#:   Enumerable.Range(0, 10).Where(i => i % 2 == 0)
来源：http://www.aibaodan.cn/163xhvhdttf.html

[B12] 跳出多层循环
来源：http://www.sxryk.cn/163znoqxtot.html

Py:   # 无标签跳转：抽成函数用 return
来源：http://www.xuanzx.com/163hvujtojn.html

PHP:  # 无标签：用 goto 或函数返回
来源：http://www.xuanzx.com/163njwqyzfd.html

JS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163zkmfuldo.html

TS:   outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163iezpupdf.html

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.xuanzx.com/163pijqhbal.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.sxryk.cn/163volyjpkr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.aibaodan.cn/163hhtckptr.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.sxryk.cn/163fhcqudpa.html

[B13] 判断是否为数字
来源：http://www.xuanzx.com/163xlencchs.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163aasdlhsy.html

PHP:  is_numeric($x)
来源：http://www.aibaodan.cn/163omjuzgje.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163nylxnrhr.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163uptkefhq.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163pawacjxr.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163zvmsfdqn.html

Ruby: x.is_a?(Numeric)
来源：http://www.aibaodan.cn/163dpkahdyl.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163wrgvckfp.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163dmedoydu.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163cossnube.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163tsvphkdb.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163wgdydlpl.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163tprzscvv.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163nonqzmet.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.sxryk.cn/163suvlalal.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163vjwcijcq.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163oifghfty.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163kghglkpw.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163bspleuxa.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163bgsjkmmu.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163uygfmcep.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163qnfiadub.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163ecthalii.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163enhtdolv.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163zyrqocey.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163gkhofqew.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163uvdpvjhn.html

Py:   if not data: return
来源：http://www.xuanzx.com/163jqmbvoid.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163uakiaglr.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163kvitfmol.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163bdplpoas.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163adkmaxcz.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163emaogiuk.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ijtmcoes.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163cimsunub.html

================================================================================
来源：http://www.sxryk.cn/163fejsjmon.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jbataxid.html

================================================================================
来源：http://www.aibaodan.cn/163jfuuadbu.html

[C01] 定义函数
来源：http://www.xuanzx.com/163aiekbwow.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163kgtltppd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163xkxigdam.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163owlgykzv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163upomyazc.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163kyuvohrp.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163gancrjjw.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163druugrnk.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163ummgowne.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163hwswgcsu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163phenkxoy.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163fxyaghpz.html

JS:   function greet(name = "World") { return name; }
来源：http://www.xuanzx.com/163nottygma.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163fkyafdar.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fajorfax.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163zlptdtqk.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163bbwzaiaq.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163wvumuaox.html

[C03] 可变参数
来源：http://www.sxryk.cn/163qoqlpdbs.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163xwwafakc.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163fvwoswhl.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hljpjwtp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163smhlimad.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163mpfigoio.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163fxhvkqrs.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163wgjyuxgg.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163vpxpdvni.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163spcriafq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163omxjezgk.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163iabmhwab.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163afukyrnt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163hrnvawdq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163nrioijet.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163jixxihyn.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ogcxlegz.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dyuwisix.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163gkzftaec.html

Py:   return a, b
来源：http://www.xuanzx.com/163ofwwebfg.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163iufjbedn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vrrswbkk.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163jugmanvf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163grgftrbz.html

Go:   return a, b
来源：http://www.xuanzx.com/163pzimlsxo.html

Ruby: return a, b
来源：http://www.sxryk.cn/163bzpsvtam.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163rwmegnic.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hlogxdum.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163sdmxcaih.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163rmxbscjs.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163pjqgbnma.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163intkjgud.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163qqgvmksq.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163aesriuud.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163pgztivcw.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163dezrxrnx.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ztdxulmh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qjjrmoex.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ojemnimr.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163vnrrehti.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163cftgonxz.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163eropwkkv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fellonjr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kslorpvj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mzmvoynt.html

[C08] 闭包
来源：http://www.sxryk.cn/163ggkmypra.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163lxvfzwmp.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163yrallcxg.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163psqcklls.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163xxeekqoj.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163sudzyxyi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163oncvddrj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163bfqddbnv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hxalsfbc.html

[C09] 递归
来源：http://www.xuanzx.com/163ziltxyzy.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163thnaszjc.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163rovvjkqa.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hrnmprny.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163djprcotg.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163fspxqcym.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ypughrdc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163ifjcpkbw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dausdudk.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163pquolirr.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163ucfbsibz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163cztruyuk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163teszsgze.html

TS:   同 JS
来源：http://www.aibaodan.cn/163eajzppok.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163wlomfspl.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163ybwzbmxr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163oiygowst.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163ndbmnwia.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163vlbmjsaa.html

Py:   from module import func
来源：http://www.aibaodan.cn/163mqvrtwdm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163tedthrak.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163tuongpdg.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163qlvucpzu.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163mgtcewkd.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ewhlgkvu.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163wfwiwfvt.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ozewmvpb.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163swiwzexp.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163lzgrwybv.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163yqfjazuq.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163egfbkjci.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jcmdlowq.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163sstrfclb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163nvpavlns.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163gbykabrl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163awblfprc.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163vabjhgkz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163pyqbjhwz.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163rdyofele.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163otchlbui.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163rzygotjj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ktqxhrkq.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163qbvtsnqp.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163wchjwuqk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163pvkmduzu.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163wcvfksuz.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163bsnccflk.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163dsycefyw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163keakukqc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163vrczzqai.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pepeqdfv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163wtbfwqmr.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163mtcfhtmw.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163zzlivrqb.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163yldjvybu.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163tmarwven.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163czcphgol.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163szcflkrp.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163myzhewug.html

Java: // 无解构
来源：http://www.xuanzx.com/163bcmtsaof.html

Go:   // 无解构
来源：http://www.xuanzx.com/163tredshgc.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163axuggynf.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fhqsvgri.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163hebqcfjx.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163govjewea.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163vtuveiqq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163dhhxiamy.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163vghdrkyo.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163zaxmpvcg.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163xshzgiph.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163hvocdwdf.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qyvfqske.html

================================================================================
来源：http://www.sxryk.cn/163jxvkwwic.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163xqwlajkx.html

================================================================================
来源：http://www.aibaodan.cn/163pfixfjka.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163xvddwdll.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163ysrwzoms.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163xebdpkmg.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163patpmgfj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163onpnnetu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163imolpbtq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163awupyslp.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163tsfearoa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163goysfoli.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lcmoovwd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163utrqwiox.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163ysxalszo.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163tmumnpmg.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163fawhsdis.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tgqlwfwa.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163tylsyshs.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163kmpuudhw.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163bkvzxqhx.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163qjgedmvs.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163fcyaaenu.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163muxcxhiy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163trqwlkzr.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163zgtqhxpz.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163estobghy.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163diongadu.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163msuvjoql.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ukujawda.html

[D04] 删除元素
来源：http://www.sxryk.cn/163tarrwlnk.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163bgnmbutk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163oqyvfahi.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163gagestco.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163uhlnxoke.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163dagytabv.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163qxibrulo.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163kvhmhrzn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163igejnava.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163mrpeorjt.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163fxsoreod.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163cbnceqoc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163dovmmfzi.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163igcryvru.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163anofogth.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163oaltveup.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163qfmelvcw.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163lnqbzzqg.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mefxcrzh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163vltttdib.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163uxvlyyqv.html

JS:   arr.length
来源：http://www.xuanzx.com/163qcesudvd.html

TS:   arr.length
来源：http://www.aibaodan.cn/163qbpegvui.html

Java: list.size();
来源：http://www.xuanzx.com/163qfhvxqyl.html

Go:   len(arr)
来源：http://www.xuanzx.com/163jplwsemk.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163nrskklrn.html

C#:   list.Count;
来源：http://www.sxryk.cn/163ibmhqujt.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163fjuivwji.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163zpsgnqjj.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163wcthziwr.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163adfppdqy.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xruuhwow.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163edwflllb.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163byduwtet.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163gcrvznhd.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163yhptarxj.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fopuzspj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163akflonyj.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vigzgxvi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ihktlfhm.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163bzznfola.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163hldxpjam.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163nyjkvytk.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163nzovzdxk.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rnbqrzco.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ipbeenxa.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163mreqbyjs.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163gsvjbjmy.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163itucmdno.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163xjuyftah.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163romithsk.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ebvxvzww.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163duydrtpc.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ermcegev.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ldzjllmy.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163krinqhgy.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163jylapkyj.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163dhgzagaj.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xbsllchs.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fsbsnmmv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163vyckwbmx.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163kkncbgkg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163sntepmkl.html

[D11] 反转数组
来源：http://www.sxryk.cn/163yapjgyvd.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163ftgzjywm.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163gplocvrc.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163uamzdkjs.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163airnkezo.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163wtfzokhz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163kqqycifr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163bmbgnwzi.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163lsrxegwj.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163vfgbeqgk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163ifwumjzu.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163xzbmklof.html


<!-- 参考信息 -->