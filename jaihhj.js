外链999!wailian999！

Go:   a && b || !c
来源：http://www.aibaodan.cn/163zgdwlkjd.html

Ruby: a && b || !c
来源：http://www.sxryk.cn/163tlxniwxa.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163ppuyliqd.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163rpqtbgei.html

Py:   if not data: return
来源：http://www.sxryk.cn/163xxxeivqb.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163pbgeywgy.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163xdaglebe.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163evcvcqxo.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163orlktvpn.html

Go:   if data == nil { return }
来源：http://www.xuanzx.com/163dkysqwbv.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163gxebrzof.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163lzzljkqb.html

================================================================================
来源：http://www.aibaodan.cn/163uiawkfpj.html

C. 函数与作用域
来源：http://www.sxryk.cn/163jljpcfuv.html

================================================================================
来源：http://www.xuanzx.com/163trqcwabk.html

[C01] 定义函数
来源：http://www.sxryk.cn/163vsbawioz.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163yhrrvuap.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hnuvpnqm.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163ibbkyjnp.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qpjhideq.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163goqsjwoe.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163cmydysoo.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163kiloxawq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163xaqwtiio.html

[C02] 默认参数
来源：http://www.sxryk.cn/163qnqhgngs.html

Py:   def greet(name="World"): return name
来源：http://www.sxryk.cn/163kkqygjbc.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163hbvhsygw.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163zcwrbxfc.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163nnvrqfcf.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163inyapumc.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163dnvawqfb.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163yycaxxia.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163xksmralr.html

[C03] 可变参数
来源：http://www.sxryk.cn/163pherdsao.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163dlhrpeww.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163hcfmxeoj.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163hhuoanvm.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pwbkzvny.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163hrwdvwsf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163ypsmkbch.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qdszkbmc.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163eednjxnj.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163hmgcilos.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163mqkcbskx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163mhzykpln.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163uejelalq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163pkxanlac.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ywcsjwbo.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163zrlemueh.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163dwfxxyrn.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163vxjhmkni.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163usbwlerd.html

Py:   return a, b
来源：http://www.aibaodan.cn/163wpgedsyz.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163hnkzouky.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ptxxphmr.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163pwrxtmnn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163dspgqmwi.html

Go:   return a, b
来源：http://www.sxryk.cn/163vwbcbyhq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163stxbrtte.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163mnkmlxsi.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163nnvjenrh.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163lcskbhlt.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163moldcnyy.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163xgkywaio.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163nqyqtmyx.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163ybkcwjsc.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ihosltzp.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163zxeovdod.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163kpsuqluq.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163olrdegfk.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163fdijdygt.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ivfajcjm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163nrrjahqp.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163fpxzvjqs.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tkcqprvb.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163eimgmsrm.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163ujzxeeba.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rigmwsxq.html

[C08] 闭包
来源：http://www.sxryk.cn/163ugrxacoo.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163harffuxw.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163hwvgnzpz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gqoytyem.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163smiwnbpl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163kvojavmq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163gbjkholw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163vhdjlgqo.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163tzsanjgv.html

[C09] 递归
来源：http://www.xuanzx.com/163aoiyqhbo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163urqfamfk.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bbslosbb.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163mtykqfdl.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yvnqkwlw.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163usuidkmv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163mcqcxzzl.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163fsapvdak.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163yxpbvswt.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163thqwnpsc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xruhuwzv.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163mqtvnqsm.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163iggovyva.html

TS:   同 JS
来源：http://www.xuanzx.com/163rwldolro.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163sccyaxln.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163jmelwanb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163tmupithi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163kwxrvwot.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163jxhauujq.html

Py:   from module import func
来源：http://www.xuanzx.com/163uupklbdg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163pqtfqmmf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163kpeisaga.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163wmbnyynn.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nmesztdb.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163qsjmnxsk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163rmgegdyr.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163ovjtibry.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163qcgeswjo.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163djlkudcc.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163cplqxcqi.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vuurabce.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163yefjyeel.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163fjdzlhsz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163rhiahxyr.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163pqbgymur.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ufqdwzze.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163odcwyoby.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163aelggcnl.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ncqcufzt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ooearbmv.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163cwbpkfbh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ydhkdtoa.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163lfzaskle.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163sdubvoqq.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163gizducnc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163vgfqcayr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163jodibbgm.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ryhniwcq.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163yisumocl.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163aibqbnch.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163qbnmayes.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163mapdbkgr.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qcnrusfk.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163wcerxdyz.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163sdguapos.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163kzinxmwz.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163scyvfplv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163mfyzwnzz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163snsftgrn.html

Java: // 无解构
来源：http://www.xuanzx.com/163ugypfzml.html

Go:   // 无解构
来源：http://www.sxryk.cn/163nehxrogh.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163xjpfwtad.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163uekpauyr.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bvdwzyqi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ptljhqaq.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163sdataakp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163whczhkjk.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163ufmqlohj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ksggbaig.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163knelgrdi.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163laksjfmo.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163fkbhaoux.html

================================================================================
来源：http://www.xuanzx.com/163rnunsrup.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163nopgkvms.html

================================================================================
来源：http://www.sxryk.cn/163avuqhwzz.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163xopskypg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163rpvihujj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163uokyfwdx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ekoxkcna.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163wlosfltp.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163kawwzkju.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163baghkxfs.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163vrzojvoo.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163esqrnjqg.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163jxfkknnn.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163cdcxykil.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163wrtonjoa.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163qmfretds.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163gbthuwkg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163ygxuhlsc.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163wsuifwmm.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wjobjozg.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163lhsfxprk.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163dnipglht.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163cesvwbyc.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ixbpjwul.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163tutmkcaq.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jzyngeas.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ydtdtozg.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jtccfcfz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163zrgoqpji.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163elhznxma.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qumnmatv.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ntreccgz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163tiwcptxx.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163deznmdpa.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xngtwpsk.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163tedormwt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163quaazekl.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163jdpvqmwu.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mszrsueq.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163rovfbxgo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163lxjlrleh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163lsjhkxdi.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163qzpwwsct.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163percumcj.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hbdztjvb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163mejxkkzy.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wbypaipz.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163gscdkzjj.html

[D06] 数组长度
来源：http://www.sxryk.cn/163javrlekw.html

Py:   len(arr)
来源：http://www.xuanzx.com/163csrtnede.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163bqtgpnvg.html

JS:   arr.length
来源：http://www.sxryk.cn/163obtaayme.html

TS:   arr.length
来源：http://www.xuanzx.com/163cjvdcdpe.html

Java: list.size();
来源：http://www.sxryk.cn/163xuylqkyg.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hncfpqjr.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163iazqmwud.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163efmncatl.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gbbpbhoh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163nrnmjyut.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163vygokajp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lnymokki.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jyiqbtvw.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163ekmpjabm.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163kectuzrn.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163ocltprsc.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163pcxdyyuj.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163xuzbxaqn.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163itqwiokb.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163sqaiurcy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163saqaxvvy.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163ixxsphuh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pltdxhgh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163poloarfx.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163leldayci.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163tkqlahpd.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163pcunidbx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ohsfpwwi.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163bsvkkfjs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163tpnhejll.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163bzmyxyvs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163lsjdgemo.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163nilswbsw.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163ryxcwxsk.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163ynusvcmp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163ewkzaolb.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163hsvtdlve.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163sosgpmmy.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163eiiqdwdh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163xhlxhvsg.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163nuvrrgmf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163oonuylvs.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163hptnhioh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163nlcntegv.html

[D11] 反转数组
来源：http://www.xuanzx.com/163kcsgoldi.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163orufrnoa.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163orcoatui.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163oiospduf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163yfylfyrh.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mdlkgptb.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163gcgvmsqb.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163hgncawcy.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163tpoceneh.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163fzdcworv.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163xfhslrwi.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163wxepjsmc.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gtqtwxep.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163vafidush.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lwxpwcmv.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163geztcdfs.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mhdjuvzl.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163tvuekhtq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163qvlwtzlu.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163oefvtpnw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163gxujwbzu.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163fwinlecl.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163qxrygvom.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nciagjga.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bvglsadv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163hfwciwuw.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163akwkhgmq.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zsohtpiu.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163ztkkhnbs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163sjgrhake.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163wjforqon.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nzdkyocs.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163pdrhczyi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163excmvtde.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163bnoqgkes.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163ovgbwhol.html

[D15] 去重
来源：http://www.aibaodan.cn/163wzyuragi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xthhbbxq.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163vsjzbfrk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163hybzhova.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dprijvlv.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163zwjkfpaa.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163ueiuxwqe.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163wqoupwof.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163hjqdwgav.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163yxoenfwx.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163iodkkmtj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163txgqmnrs.html


<!-- 参考信息 -->