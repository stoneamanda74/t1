外链999!wailian999！

Java: outer: for (...) { for (...) { break outer; } }
来源：http://www.sxryk.cn/163vxvflyqm.html

Go:   # 无标签：用布尔标志或抽成函数
来源：http://www.xuanzx.com/163wnxqancr.html

Ruby: # 无标签：用 catch/throw 或方法返回
来源：http://www.sxryk.cn/163xyecpzdk.html

C#:   # 无标签：用 goto label 或布尔标志
来源：http://www.aibaodan.cn/163aiplkzwb.html

[B13] 判断是否为数字
来源：http://www.sxryk.cn/163veokagww.html

Py:   isinstance(x, (int, float))
来源：http://www.aibaodan.cn/163kdzxzwcj.html

PHP:  is_numeric($x)
来源：http://www.sxryk.cn/163rupsitzy.html

JS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163sqmrdtyk.html

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.aibaodan.cn/163flkqfssf.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163lohuinkd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.aibaodan.cn/163qclfreok.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163xmklhtan.html

C#:   x is int or double or decimal
来源：http://www.sxryk.cn/163bsmrmdbt.html

[B14] 判断值是否在集合内
来源：http://www.sxryk.cn/163xgwmsihp.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.aibaodan.cn/163ygqkoduv.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163vnkjqojc.html

JS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163dejppwnv.html

TS:   [1, 2, 3].includes(x)
来源：http://www.aibaodan.cn/163ocwnsgbz.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.aibaodan.cn/163uoakfyqt.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163tbslvuee.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163amihzzqp.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.xuanzx.com/163phhhugwf.html

[B15] 布尔运算与取反
来源：http://www.sxryk.cn/163gufsgfhe.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163bagauesu.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163qdecgqdo.html

JS:   a && b || !c
来源：http://www.aibaodan.cn/163ykgtcrch.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163swapjwxm.html

Java: a && b || !c
来源：http://www.xuanzx.com/163wncoqyyb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163hkvdtrjx.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163gjypjtxo.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163baznvfcu.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163zewrpuhn.html

Py:   if not data: return
来源：http://www.sxryk.cn/163tcdmqekt.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163smqocyfh.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163paaptyng.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163cquiaxxp.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163emfnjdnh.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163jhneyipj.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ucufestf.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163ydzngcxk.html

================================================================================
来源：http://www.sxryk.cn/163awkmkcae.html

C. 函数与作用域
来源：http://www.xuanzx.com/163osujjadu.html

================================================================================
来源：http://www.sxryk.cn/163rovlaugq.html

[C01] 定义函数
来源：http://www.xuanzx.com/163oqyziysu.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163esmuugdv.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ctwweedn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.xuanzx.com/163uowwsqqx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163khtrfjou.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163kkerxlry.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163biztflir.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163mrvxeevw.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163anbagftf.html

[C02] 默认参数
来源：http://www.sxryk.cn/163kxfkuara.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163nqzypkdz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163jgcqbfhe.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163jetpguyq.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163hxnentry.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163omufnwqj.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163slzhhhgk.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163bnebjwvr.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163tanxkyjc.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163gobhysxe.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163shxcruta.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163qrysmtyr.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ifqdurhy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163nuyiksoq.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kmcnysqw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163seynjerp.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163zucnugju.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163hetfvjhr.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163xrwynwxq.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163xxqkdghs.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163uhxjczvq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163cyuqulvw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163nexsdvqm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163mocuykrx.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163vmuffeyu.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163euovleen.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pbxnwbyr.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163qayrmbtj.html

Py:   return a, b
来源：http://www.aibaodan.cn/163rhsggeqp.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gfszzbhj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163liuezjzy.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163lyltnrge.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163kieyzjmo.html

Go:   return a, b
来源：http://www.sxryk.cn/163wbrvuixx.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163jqqvoyok.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jtchblmd.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163hvctxsvv.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ytonpkic.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163firiqhbk.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163hfoauzpu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163vybavtpg.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163xjfebhva.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qxqrnzxh.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163hodepuyb.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163fiyjrfgd.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163nzkzgqiz.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163kzdazvtc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163locrbrwh.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163jpoghzto.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163rcqwzhus.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163ojczhqpg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163fjnmjeeo.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163iocfezzx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163pdecdkdh.html

[C08] 闭包
来源：http://www.aibaodan.cn/163pgzapego.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163thwzmjaa.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163benslwha.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163knzfyyqx.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fjtsgvod.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163alzmqlhn.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163lmjgavre.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ydylzejw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sfmxbxso.html

[C09] 递归
来源：http://www.aibaodan.cn/163euaflnts.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163zbabvtrd.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163bmynsqqk.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163copkjmlh.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163bhqcsbsr.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163jbjnnqps.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163iuixiczh.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163cvsiuvwe.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163jsbpslzc.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dmtfsdyg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163gskdzqit.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rvhklouh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163oxtwwjnu.html

TS:   同 JS
来源：http://www.sxryk.cn/163nrjjabjc.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163duelgmrb.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163zeonluzb.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163tsulwvyv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163octrmotw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163otkeuudr.html

Py:   from module import func
来源：http://www.xuanzx.com/163inboffjy.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zqxtexwi.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163aiubpbby.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163ehgaxqab.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163haylbhlg.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163cvxyoiwq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163atgzgdag.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163aswfuyiu.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163eneobyqy.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163juobcanj.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163tsaayrjq.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163oqvswnlr.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163hiixljtx.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163brfojuhr.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ajtuaryy.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163vrkcvlaz.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163nshqwote.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163wzdcwcwu.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163asijitfc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163vobpldix.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163etbplmbo.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163cwxtteiy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ibkubyzf.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163mkmrvxnf.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163einzmtxk.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163mpuutrco.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163jdjqsfie.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163iozipica.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163zpmvdtih.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163pjqarcdn.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163apswaapa.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163sfxgmnko.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163zaupeoso.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163sznqhasj.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163omamzyqs.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163uxpggntb.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163usxleqha.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163lykflzra.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163certhliq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ajikxrss.html

Java: // 无解构
来源：http://www.sxryk.cn/163oarmlbqf.html

Go:   // 无解构
来源：http://www.xuanzx.com/163cfhqyuac.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163ohmavdxe.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163sjarjmux.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163pfsndbyz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163wonqmogn.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163hqxflgqq.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ioxycley.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zynacghp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163vdyockzc.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163awcqfotd.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163muikqrhi.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163andtpntp.html

================================================================================
来源：http://www.sxryk.cn/163bqljpsdk.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163uoccxrti.html

================================================================================
来源：http://www.aibaodan.cn/163zjkihtup.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163iwsynwot.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163hzdtjjty.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163mtwpbvrs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ypdlqdoy.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163hnnbmhkk.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163qnlzhotx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163srkbhemw.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163blmyiqtw.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163mblvrsna.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163bjubzyhk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ztznlsrw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163omogejfw.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163hqnqjfag.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163swfyhckg.html

Java: list.add(4);
来源：http://www.xuanzx.com/163cvcpslbj.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163knlgwpov.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163smkiwjot.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163flrylgiv.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163hxzlhrbg.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163tvlazmoo.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163kbsjousw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fiqjmzue.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163zgjlznbq.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ycefhmhm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163voyscwfp.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163gcbltqii.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163maskddhw.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tmuublxr.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163vxnmnvsb.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163wxfpaaxq.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pbcflqui.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163achkflql.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163egelnbcu.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163ruqpoymb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163ypcpkkpc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163ffbdoiyj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163bzivvswp.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163hygournb.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163kftwsjyv.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163dinfmuca.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163cwhnotit.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163nvqkrqvn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163arvxhicv.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163avzkckpv.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163sppfahhi.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163rahawkoc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163yexhpskr.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163iiksecvo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163qbfioxft.html

TS:   arr.length
来源：http://www.xuanzx.com/163nyqtykjb.html

Java: list.size();
来源：http://www.xuanzx.com/163phnooocs.html

Go:   len(arr)
来源：http://www.xuanzx.com/163bfjgxkkh.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rsxtfrvr.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163jhnheaad.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163ftoeztxd.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163ydbggdzc.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ncpemvvx.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jfvwewoj.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rnnzflzq.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163xeririky.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163isekctfe.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163pfndexoa.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163leqaxabl.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163ghdroivt.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ebkorhwc.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163pflscspb.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163pnaatrpm.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163yxcudewf.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163dxgvxzeu.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163glpzqbxf.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163spyqeoww.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163dvhmxxlb.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lrzyigmg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163yfgfrbpc.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163eupowtye.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163orjbwaji.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nsqaaoaj.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163gcfiaopl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ajvpctqx.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163xplhztgy.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163jolchoki.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163nkhfcsow.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163otxysrit.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163qnkzlnzf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163hdzjtqce.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163vgllhsks.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163qkjwuuqx.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163xtbvzgel.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163dlaytdos.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163kgwiehed.html

[D11] 反转数组
来源：http://www.xuanzx.com/163wlizdbcb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163nondxplv.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163wucwibjq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163svttvwdg.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163qnsuvdhj.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163uskpavgx.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163qecmrdqq.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163rxpfaoaw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163kkbkwlrj.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163ugtxiihb.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163yrmdqgzc.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163gqchvgry.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163xeonjcuu.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163ftkrvlqx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163fbyjlmhf.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163djhoahmw.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163gruikdlv.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163mzaovklt.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163rqxmktuv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163nthmkqwg.html


<!-- 参考信息 -->