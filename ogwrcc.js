外链999!wailian999！

TS:   typeof x === "number" && !Number.isNaN(x)
来源：http://www.sxryk.cn/163iyejdeue.html

Java: x instanceof Number
来源：http://www.sxryk.cn/163qcocezbd.html

Go:   if _, err := strconv.Atoi(s); err == nil { ok = true }
来源：http://www.sxryk.cn/163vvpowwtk.html

Ruby: x.is_a?(Numeric)
来源：http://www.xuanzx.com/163coefaktj.html

C#:   x is int or double or decimal
来源：http://www.xuanzx.com/163qemhpiri.html

[B14] 判断值是否在集合内
来源：http://www.xuanzx.com/163rjqgozbj.html

Py:   x in [1, 2, 3]; x in {"a", "b"}
来源：http://www.sxryk.cn/163rfepnhdq.html

PHP:  in_array($x, [1, 2, 3], true)
来源：http://www.sxryk.cn/163subafluu.html

JS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163slpyakze.html

TS:   [1, 2, 3].includes(x)
来源：http://www.sxryk.cn/163huayuawc.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.sxryk.cn/163yhdzcnbw.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.aibaodan.cn/163qimlmqio.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163sfabcksw.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163mmaifrdu.html

[B15] 布尔运算与取反
来源：http://www.xuanzx.com/163whxbuymo.html

Py:   a and b or not c
来源：http://www.xuanzx.com/163cfqmgwwy.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163jueqzybg.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163mhitxjhl.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163eesfhenn.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tltfjzep.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163jiynqjll.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163mbvhzems.html

C#:   a && b || !c
来源：http://www.sxryk.cn/163cydvyuna.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163gpxhrdoz.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163rddtkzar.html

PHP:  if (!$data) { return; }
来源：http://www.xuanzx.com/163bqkszzep.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163meduuquq.html

TS:   if (!data) return;
来源：http://www.aibaodan.cn/163iahlnzob.html

Java: if (data == null) return;
来源：http://www.sxryk.cn/163gfayiknh.html

Go:   if data == nil { return }
来源：http://www.aibaodan.cn/163wsygyvbd.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163teywcdel.html

C#:   if (data == null) return;
来源：http://www.aibaodan.cn/163gnbixfwx.html

================================================================================
来源：http://www.xuanzx.com/163ddmrlzol.html

C. 函数与作用域
来源：http://www.sxryk.cn/163zibzedfj.html

================================================================================
来源：http://www.aibaodan.cn/163rxijjpbh.html

[C01] 定义函数
来源：http://www.sxryk.cn/163fdaqzmvc.html

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163ccdimmsh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163kxjsboks.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163rttcwqhx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163dzqwmcpf.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qxdpiaxi.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.xuanzx.com/163lwvrmatv.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163vxyccqhd.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163arsqeuau.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163sypofzlw.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163pfulvtlq.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.aibaodan.cn/163uekoisnq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163wtxzestx.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.xuanzx.com/163ahdddicc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jseybhkt.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163cniwlbny.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163kjijjayx.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163pkpymvzm.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163wevsylyz.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163ytrkjwyj.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163musfmdrk.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163exsmjrjb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163slygsknr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163zuvekgvy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163uyrdbule.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163vrrlkyfm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163emgwlwpn.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163vmjpdwed.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hxpywvzv.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163tytququd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vcfxckza.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bggmtobr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163kgzaqupy.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163lszrfoyh.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gjjipvvy.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163sbwmgbgf.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163occiqcbx.html

Py:   return a, b
来源：http://www.aibaodan.cn/163yoqqyftb.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163jmsnqzut.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163obpezilo.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163lpiixntn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163swhhomnr.html

Go:   return a, b
来源：http://www.sxryk.cn/163hpipjewc.html

Ruby: return a, b
来源：http://www.xuanzx.com/163cusdflsu.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163jkjiuffm.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ymlokdxl.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ttjncxnp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163phitgpyh.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163smoceiqd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163ckxpnmrb.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163pbqtgyud.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163exdypxqd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163puckuhxv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xtrbyzdi.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163vtkwiekh.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163maftfrjm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163udclygag.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xmrkaigf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163oslaoizw.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163jptexqxv.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163dswfeeny.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163uhyilini.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163yngntwlg.html

[C08] 闭包
来源：http://www.xuanzx.com/163xfijfpoy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163yjzesqrb.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163sgwtxtzs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163trcbllhf.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kclcaymg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163tsjxqzvo.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163judkltlw.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163kpgjurpx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163bpzwdvig.html

[C09] 递归
来源：http://www.sxryk.cn/163zhtidctn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163qxatjvah.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163kqwzcasn.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dqdfqjfg.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163fpedftfc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163lwhzvgzk.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163zlecrtip.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163sunfidri.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163xyqdkbdn.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163oveokcib.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zbzsrmgw.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163oljeibqf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163mjqrksol.html

TS:   同 JS
来源：http://www.xuanzx.com/163jzbsjwmd.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163zenpahnx.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163tjfmcvtk.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163vytsrdjl.html

C#:   块级作用域
来源：http://www.xuanzx.com/163dzcgriwd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163foiufufr.html

Py:   from module import func
来源：http://www.sxryk.cn/163vrlgxyrx.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163wclzmgix.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163vcbeonvq.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163wlybmyvh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163lythhvgu.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163llejaoxv.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163viaztawi.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163nkyqhpaj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163csedbmbv.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163phenvbpo.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163hmynwora.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163vgwuusyl.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163ciagxwgd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163shvnvyjp.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163aodpzcru.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163xmlyvhsf.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163mxdhvdyx.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hudnfdgd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163dqvvhaqt.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163ndviorks.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163abgydpju.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163tcjczkvn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163pofshfum.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163qtdxqtef.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163jjgmayrd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163nqumzydv.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163anogyfkl.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163bwmigtxr.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163wnihxovw.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163eyiouzxd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163hczopxpc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163tnjzytow.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163xwmcwwuz.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163sxiwnskl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163dmewcusb.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163ruexjakt.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163kaipdfrc.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163vyaegrkd.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163kbrdiuat.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163ymlhwmry.html

Java: // 无解构
来源：http://www.aibaodan.cn/163eogqrufb.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kgeblyea.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163dexupdea.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163yxnewchj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163bxeymhdg.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163nvthgdwk.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163mtgonmbh.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163pqruwaeq.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163uqyyxwhe.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163flmwrfki.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163pzkwisni.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qngayrly.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163dewmdfak.html

================================================================================
来源：http://www.sxryk.cn/163mgowrgrz.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163mcajdkfk.html

================================================================================
来源：http://www.sxryk.cn/163gfidkxgx.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163skxwbzcs.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163onjfqcmk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163odkglsbe.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163dfnwidgr.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pxycxocq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163bbibbfmm.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163jftvyvwe.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wgbdoxxl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163imdtklzd.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163lrssqvef.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163txwdylxc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163pklewcoj.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jrxymwrq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163vtnbrygr.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vqouaylm.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163zpiwvlfu.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163sfnfbybd.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163grlxezhf.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qvcvaryg.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163adntkkkq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163izkkklzl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163ydlwiiax.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163atbmuqpq.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fbreyuoh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163mqzxhgsh.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163ujjhzpry.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163vbefvdgj.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163wslvernh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163ncwolryh.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rqkfiewp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wjjxgjex.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163oqvajnwx.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163fjjijbad.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163geaghjja.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163exffmjjp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163arrsbgpn.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vlpydhfa.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163knlgfquq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163lcleafbo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163csqjbibp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163nvddjqia.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163mkxolbpv.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163xckyaeov.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163wonfxdki.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163akobkmqz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163hivzqdlm.html

Py:   len(arr)
来源：http://www.sxryk.cn/163viqzqhfx.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ylugczcp.html

JS:   arr.length
来源：http://www.aibaodan.cn/163ragjtzqa.html

TS:   arr.length
来源：http://www.sxryk.cn/163ynvuatpu.html

Java: list.size();
来源：http://www.aibaodan.cn/163qgekklnz.html

Go:   len(arr)
来源：http://www.xuanzx.com/163uqqncabd.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163isbsslpt.html

C#:   list.Count;
来源：http://www.xuanzx.com/163vghmihmc.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vcdbedte.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163gafifiqs.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163lxpqwnzg.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163jxytrnha.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163bdpdklwt.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163dffddkmq.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163vxvrnflr.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163zpiquxjq.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163vfwytmtr.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163jezzhmwc.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163memugrnb.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163nuuovwqs.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163yqyvucog.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163cbvbkaez.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163xfrsengk.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163unobfprh.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163tymeooay.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163hcwszava.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163bukdweeg.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163kutnieuj.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163gnsjyisf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163aesbhhqi.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163alwylbdg.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163kcznsbwc.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163dfpxycan.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ixgzgyxv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163yrrtluca.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163ctajkdvt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jljyrlxq.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163eqyxbiqc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wjdzbiqv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163cimlvodb.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163xxiiutsf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163ahklzhlk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163wttrbwrr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163muugaibg.html

[D11] 反转数组
来源：http://www.sxryk.cn/163mvwhmvkr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ydvdcqhm.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163fpqqqppt.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163hojvbdwb.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163hoywnjgt.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163bllsalyv.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163wkdykjrf.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163kstzruwe.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163xqtldedg.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163beigvlaj.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163pctixylw.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163tdiabnxj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bobluutr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wpxaxqhf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163pwuczpez.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163jlfpwhmv.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163jigqqdkk.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tukwfmgj.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163jytnbohk.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163piubvctj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ypmkrspm.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gejscmok.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163ojnsyceg.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163vwogqune.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163cfmtsbvj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163qmooqlkj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163litmvbcy.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163mgimhmrh.html


<!-- 参考信息 -->