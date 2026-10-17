外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ohcjzesw.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163awvfjnlu.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163tbeuqixm.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163tzdzlyls.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163wvlzsxtn.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163uoetozpv.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163tdicfiem.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163ogzxoeua.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163pitihuyq.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163hlzbivip.html

TS:   a && b || !c
来源：http://www.xuanzx.com/163wrwuexid.html

Java: a && b || !c
来源：http://www.aibaodan.cn/163lbzbcrml.html

Go:   a && b || !c
来源：http://www.aibaodan.cn/163jzhrdazq.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163oixshghg.html

C#:   a && b || !c
来源：http://www.aibaodan.cn/163nfrwdfdp.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163nyarqwjz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163afxaupgp.html

PHP:  if (!$data) { return; }
来源：http://www.aibaodan.cn/163lfinrxmb.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163cvxlvgbt.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163ronxghhr.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163mttikuwy.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163jwdfryic.html

Ruby: return if data.nil?
来源：http://www.sxryk.cn/163tmjqqqyr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163wbysnsit.html

================================================================================
来源：http://www.aibaodan.cn/163fyvxdryf.html

C. 函数与作用域
来源：http://www.sxryk.cn/163egbxjrrg.html

================================================================================
来源：http://www.sxryk.cn/163trxmnecj.html

[C01] 定义函数
来源：http://www.sxryk.cn/163qpaxevge.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163chwpcsxn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xcvtdhxy.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163mhinvwox.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163zegcjylm.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163wpiwpisz.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163twwkgwwv.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163gjhlvtun.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163odsmxazx.html

[C02] 默认参数
来源：http://www.xuanzx.com/163gtdtdewi.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163dvlhvnii.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163zgioxbrf.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ujfqwipg.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163empjkvyj.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163tctmyiln.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163mercrcqi.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163pedaqkia.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163ehaoqbjc.html

[C03] 可变参数
来源：http://www.sxryk.cn/163rhnepjwy.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163xpngufmf.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163qbjttxqq.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qslodxdj.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ujbsolia.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163dhqldbve.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163anegrtxo.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163haknxdbd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ncpjepie.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163diwnyxyc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163tdfzwppc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163ceovcqtr.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163lireeskh.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163akszxayy.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163bquznltw.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163kdqygihn.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163uvvnbhrj.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163cdtxvciy.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163jbnoajpo.html

Py:   return a, b
来源：http://www.sxryk.cn/163ugwrvlba.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163dvfthsij.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163chapzspn.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163qxxxotiu.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163jalzbmfv.html

Go:   return a, b
来源：http://www.sxryk.cn/163sguvaajd.html

Ruby: return a, b
来源：http://www.sxryk.cn/163pozydrtq.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163xdtkfikr.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163qogbprmj.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163ssvzynau.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163mwtuxagk.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163rkznszkd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163fztikqby.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163umsvdtpu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163gzkbeptv.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163dtxrrhyv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163yllrdokx.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163lvttypso.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163ilwblmco.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163nffdfmkf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163wsqidkiu.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163nseepgwm.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163pfzvwsfw.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163enuorobp.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163arbrjndz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163blcrtsaq.html

[C08] 闭包
来源：http://www.sxryk.cn/163kcrlodcg.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163wouvmuba.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163vyvofiio.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163cfgyccoo.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pcrpbsda.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163wqxkrqox.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163cyeyxrth.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163uwsqtqoe.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163pudasghq.html

[C09] 递归
来源：http://www.xuanzx.com/163spjpcmev.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163bdtuyrzz.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163nokhcmiu.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163yalrfagp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163zyvfduaj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163tajgwnqm.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163slpigidw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163rpvkflpg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163jpejobvl.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163rtfuhmoq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163wtlvybal.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163zjohunul.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163rglzdune.html

TS:   同 JS
来源：http://www.aibaodan.cn/163sehsbqjm.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163zszfeqvj.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163amfqbwax.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163wexsqxmo.html

C#:   块级作用域
来源：http://www.sxryk.cn/163arsaijvx.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163mrinwskf.html

Py:   from module import func
来源：http://www.aibaodan.cn/163nztowxlv.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163falvxdus.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163sithknvk.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163acpgrhuf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163tzqvwlox.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163uewkfqqc.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163vqyebavn.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163pfnqjpji.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163hfizbxyq.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163ezhmboou.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163fgmvjmyd.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163ryrnoicx.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163hexwzgnk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163errtjtgy.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ekdabnke.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163aczrepur.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163ubrrhmfz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163bkikndyp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163sjfbvcqe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163fekzvnmr.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163xyaxxdpx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163opqibgsh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bhtsusdv.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ufudplrd.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163msjopuzy.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jmpynfep.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163bhxsxpxl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163uucnvrsn.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163vsgbrufq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163zdwqgwao.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163ndwifsee.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163cqzplmvc.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163hlzcwwjb.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163khjewjsy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163phspvttg.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163nxyujrpn.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163gpxihuhs.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163svalfrgg.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163lnluywsa.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163nhjchduz.html

Java: // 无解构
来源：http://www.xuanzx.com/163kamtzmeh.html

Go:   // 无解构
来源：http://www.xuanzx.com/163qaupxkwz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163wyuvnpch.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163ywffheex.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lzuclzqo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163kmwjkfzx.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qytdkrcy.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163atkgekjp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163styhiplc.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163zrzotxwy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163satbgefd.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163zdhdxtfc.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163ngjkncqo.html

================================================================================
来源：http://www.sxryk.cn/163jcitivym.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163eatvicsh.html

================================================================================
来源：http://www.sxryk.cn/163tlxzirls.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163mdkjjmaf.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163djntrveh.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163qxzdueel.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163vlgvocth.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163enpvqxxr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ysxdbbix.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vkmoarwg.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163dnrgnnsu.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163auwhscdb.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163poypznul.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163nrdkjhaa.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163pnceykop.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163fjtjolfv.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163ughuhpjp.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163cksnwqwm.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163wlkcoemj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163fgnwqshx.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163hrbqbrkw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163zibhpgcw.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163wpydamws.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163xyadpbus.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163cyeftsxy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163avrdzbiv.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163uckgseml.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163wdwgrayp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163xycytmti.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163sjxlnjhw.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163roltuzgy.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163hbqpgsbc.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163vfgfvvjf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163fxszeeab.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163rkfwmeiw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163jrezvsmd.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163dbocwzax.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163xtpumdnz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163zxvazrwe.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163htvjosom.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163tekzzbrx.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163gwensocc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163yivghzfl.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163jyotoheu.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163brpjrxoq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163elzcfwvc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163wtrjyeuq.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163gklwltsq.html

[D06] 数组长度
来源：http://www.xuanzx.com/163joxaxnto.html

Py:   len(arr)
来源：http://www.xuanzx.com/163uvzoavyh.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163iuxtlolw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163tqfpznli.html

TS:   arr.length
来源：http://www.xuanzx.com/163dftcncal.html

Java: list.size();
来源：http://www.aibaodan.cn/163lidzsdaq.html

Go:   len(arr)
来源：http://www.xuanzx.com/163czthbfbj.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163biwsbiav.html

C#:   list.Count;
来源：http://www.xuanzx.com/163qahbbvkn.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163nnfpcxtv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gkumextl.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163zqvwcuay.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ktujoqbc.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163dtqbtayx.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163dyyksrch.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163uvmhjtkx.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163uspjqser.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163thjxigit.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163uudrmxjt.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163sudyzpkm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163aykaqste.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163uslokign.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jllzyypj.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163tzstgjzf.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ybuytkdd.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163cvoikgta.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163domjchch.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163pimushur.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163szsxnhaj.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163mbinccak.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163tghtdtgf.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ykomidjb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163vdbqtysw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ydbyegol.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163plyzktje.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ajnknrhu.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163slzhbipk.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163fzpoqful.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jwcsspgs.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163aumfqqnb.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163mcozulth.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163nvnwtszm.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163erhklkpn.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xqnhqcgz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163gppsorys.html

[D11] 反转数组
来源：http://www.xuanzx.com/163yjswkzls.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163suunusxf.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163erfksxyl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163quadnuzk.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163wbkfxuxr.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163shhmqxnm.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163scorjlje.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163gmwfztqj.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163xaxlkaun.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163gihypins.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163qydnrxvz.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163rhnkzccs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163yujnvbcx.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ecbdcutq.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163pdasnnje.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163ziagdvjc.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163dgkardyx.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163jbbvxocs.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ihcllkqh.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163klfmadhc.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163zdfwqyhl.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vteantab.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163vbhtiodn.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163vxcrypmz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163poqamztw.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jjrxgnvx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163tzblzdob.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163kicrgroh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zmvshpnu.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163sjoimejz.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163fwtimnum.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mlxaelqm.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dpagvppq.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163qfkuxhig.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163cahbklbt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163abgwmvwu.html


<!-- 参考信息 -->