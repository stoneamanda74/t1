外链999!wailian999！

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qaiukyld.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163suxifbng.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163zpfedtua.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.aibaodan.cn/163mrfwerld.html

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163eahbuebk.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dfyfjmwn.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163bflektma.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163wmrjmxol.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.xuanzx.com/163kpgalchf.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163mjwlhjim.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163supiback.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163ponnmodv.html

PHP:  $a && $b || !$c
来源：http://www.sxryk.cn/163ygiolpdw.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163wtvexmjd.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163hoxtenda.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163nowxucth.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163hksxegzt.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163ocqrorwo.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163lvebqtcy.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.aibaodan.cn/163zjtwexak.html

Py:   if not data: return
来源：http://www.sxryk.cn/163miyzqbgh.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163jfvruqqy.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163ybkawdwf.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163olzhjpav.html

Java: if (data == null) return;
来源：http://www.xuanzx.com/163vpqggzhw.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163ibdtpaza.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163nednzkdb.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163ijgnbtxf.html

================================================================================
来源：http://www.sxryk.cn/163shgqrwny.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163wcimbsre.html

================================================================================
来源：http://www.xuanzx.com/163licqnhfa.html

[C01] 定义函数
来源：http://www.xuanzx.com/163lvmxdbad.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163sjtrekeu.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163heevfyjs.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ighqcfrf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163demeidah.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ylnigbsw.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163nngjqsue.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163ukukfbwc.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uanileki.html

[C02] 默认参数
来源：http://www.sxryk.cn/163uxwesbyf.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163afskuqrf.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163mvedknva.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163enotwzqw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wzpswsia.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163gbgbckjl.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163bxvohtso.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163yftjlrhp.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163kahmcmvl.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163kapaphlk.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163ohlzlefv.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163kasaopvz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mxpuqare.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163fhinjbcp.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163jqdajnyg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163tjushjmq.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163xcmxxcru.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163uecbsdgb.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163lmxhtsdy.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163czoldedf.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163gjqdcinr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163rfrmtezu.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163furzgaxt.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163gzeqlzlh.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163jlbveslw.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163xpjezbhd.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ejziglqc.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163yuvfcwhj.html

Py:   return a, b
来源：http://www.xuanzx.com/163izygkqwm.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163pdgnudme.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163avwnpwcs.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163akhkvbpx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163ditbwncj.html

Go:   return a, b
来源：http://www.aibaodan.cn/163fiujyvpk.html

Ruby: return a, b
来源：http://www.xuanzx.com/163jhhtbeot.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163dmzvbwfl.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163jhtoiwwb.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163pwrcuztj.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163xmstnncp.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163lgfujsep.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163ptxhfvww.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163inwajtbo.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163btgtksok.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163ggmcfjqi.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fobqzivh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163tzmqhkmd.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163ztherozz.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163jfvbhpao.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163haybjqeq.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ughwhmtg.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163eyoteujx.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163uxbjgzth.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ohkobqxn.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163vcxogeoa.html

[C08] 闭包
来源：http://www.aibaodan.cn/163qyevgeqy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163nehbeziv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163fydpjlmo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163ffjextow.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rguvhilk.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163smpspewr.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163ozwllytr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163wxvmabqk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lneysufg.html

[C09] 递归
来源：http://www.xuanzx.com/163uhebaveb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163hfqfkkjl.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163mlzjrmsm.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yqwqyshk.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163mnvdlawm.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xulxsvvp.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163jiasrtca.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163czexyjpv.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163flvwphuz.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163qextmbzu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163yflsoiex.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163tihdmvcx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163pcnoybcx.html

TS:   同 JS
来源：http://www.aibaodan.cn/163lixnyept.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163nqveiypj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163mbynmagj.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163pqazniaa.html

C#:   块级作用域
来源：http://www.xuanzx.com/163sbkedapv.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163vgnfddyy.html

Py:   from module import func
来源：http://www.aibaodan.cn/163qghxftlp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163sgrzwgku.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zadnhwbq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163incejhfs.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ivfaglks.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163vijewael.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163bfqppbph.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163pcscieuq.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163roazmici.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163yyvjeffq.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163blcfpibo.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163domqfasp.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163eonudyac.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163knatdjcf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163krpaqgyl.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lpqydwik.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163dzvfemfo.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163rcpusdeq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163nezsvapk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eivqpdhq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163kwgehmiu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163mtkmjkfb.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163haxwtqhy.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163wxeujnzw.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163gabcyffk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163ziwuvrpn.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163mympaopb.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163lohapxew.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163sglykecg.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163endcdihv.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163kdnxvrzn.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163dnsjrjgz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163gjgjuiea.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163ljntknyv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dxnwcptz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jjaedujz.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163bnzlshdj.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163zrficshk.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163vipklydi.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163wmahuspn.html

Java: // 无解构
来源：http://www.aibaodan.cn/163ngyfsllp.html

Go:   // 无解构
来源：http://www.xuanzx.com/163lrfsyima.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wdaadtzg.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163dlsjzkbr.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163bumelupw.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163syfxkztw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163idxjnskh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163tkcyrfds.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ioswmxvr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163wepyrzgu.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163qynqtacy.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163zsiwvimh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dxwtozqn.html

================================================================================
来源：http://www.aibaodan.cn/163hporzokv.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163gvoaphbm.html

================================================================================
来源：http://www.xuanzx.com/163bzkimrlz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163dfmkzsdz.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vrxokjdw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ifqhicvd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163jsfrbrwe.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163jnpyfpsr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163hivfuyvw.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ityxtvyf.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163vzmzpwet.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163vqyqbosc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qfhfvbxb.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163grjxldbd.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163ktkndyne.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163uelxcqho.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163brxnnzuf.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163innwngqr.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163qkjhzlde.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163xgctojfs.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163osdqgxbx.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163emvmhgdl.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163tkpjmaft.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163igfaytbo.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163aavzjpwt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163vnjtnjfw.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163kascpzki.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163awppjmdo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163fpbtnssg.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163mvrxmegy.html

[D04] 删除元素
来源：http://www.xuanzx.com/163scywsfwe.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rcwaffau.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163xmfoadog.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163zcbempnw.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163ujpvbdyo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163tiawvjtc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163mageksvi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163tquuanew.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163oikxkqix.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163odfvmgkl.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163eerypyao.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163csahblhe.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163heoclsmm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163vyhpydwm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163ptsurjmq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gizfkaku.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163semsbgju.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163ervinlbm.html

[D06] 数组长度
来源：http://www.sxryk.cn/163gswhrbxc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163jzuokbis.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163midibyqx.html

JS:   arr.length
来源：http://www.sxryk.cn/163lwoytdcn.html

TS:   arr.length
来源：http://www.aibaodan.cn/163iwfvnljv.html

Java: list.size();
来源：http://www.sxryk.cn/163jlpwlbar.html

Go:   len(arr)
来源：http://www.sxryk.cn/163xgjncgeg.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163buxyubbu.html

C#:   list.Count;
来源：http://www.xuanzx.com/163fbopjqkc.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163rmgvxddh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163iblxkbzk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163duqkrotx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ohqkrrlw.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163elwvhfph.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163gflmjqot.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163yviydjoq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163pkacwwre.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163csjtfgxq.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163vsidbyig.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163qmxzdnrs.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163vcmentxd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163xyiktukz.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163qjuzjevb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163ijxpowqv.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163owkpfllp.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wpvrmxrs.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163rashbtvv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163seoiisdu.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163cgzemazd.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vvjugxri.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163epxwptdt.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163jpwnwmxr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163opllhjff.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zslznqnd.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163usmqbwwo.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163dwfxfvkx.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163lznmxekw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163dziehumx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163vjdpdykg.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qetfildn.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163inpjcucp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163jpahabwy.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163kgkfpvdv.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mhzwpgco.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163ofhwngyv.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163nwopucqx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163yybcjtkg.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163dqqnhaai.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ezglgrsc.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163qwupulsw.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163susiodtr.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163lbotyddx.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163skpukyib.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163zsxrstub.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163alefxcal.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163qjaidiwh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163hxsiyqul.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163eziecybh.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163dbfwszlv.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163pgxesmbe.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163hwfhsrjc.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163vkygzedf.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163defgllvt.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163hivevmeq.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wbletmqd.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163hisriqls.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163eizjidcy.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163totzefvp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163vzihclte.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163nivdkkls.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163esqvnxoi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163hcxklvxt.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163wxxsznax.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163edzgwazi.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163sijevoxh.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163pylzhvux.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xqgteyki.html


<!-- 参考信息 -->