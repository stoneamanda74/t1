外链999!wailian999！

Ruby: [1, 2, 3].include?(x)
来源：http://www.aibaodan.cn/163hzykvzpr.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.sxryk.cn/163pvwijxbk.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163sxftvaxp.html

Py:   a and b or not c
来源：http://www.aibaodan.cn/163fgyhcysf.html

PHP:  $a && $b || !$c
来源：http://www.aibaodan.cn/163reaztugi.html

JS:   a && b || !c
来源：http://www.sxryk.cn/163hzoiwocg.html

TS:   a && b || !c
来源：http://www.aibaodan.cn/163nuegapms.html

Java: a && b || !c
来源：http://www.xuanzx.com/163tidsiuhb.html

Go:   a && b || !c
来源：http://www.xuanzx.com/163ggnnnepu.html

Ruby: a && b || !c
来源：http://www.xuanzx.com/163szzxkuln.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163kqwbnxcf.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.sxryk.cn/163ohjwpqfx.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163uvfnqyqi.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163xxgfuyvd.html

JS:   if (!data) return;
来源：http://www.sxryk.cn/163chytvmgu.html

TS:   if (!data) return;
来源：http://www.xuanzx.com/163flvydzqz.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163tkyevcki.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163sivpgoqo.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ulrefpkt.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163hxaszikd.html

================================================================================
来源：http://www.xuanzx.com/163enqduznr.html

C. 函数与作用域
来源：http://www.xuanzx.com/163mbauyndf.html

================================================================================
来源：http://www.aibaodan.cn/163qohvvusx.html

[C01] 定义函数
来源：http://www.xuanzx.com/163wmohwyxr.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163xyqyhyya.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163aakgahco.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ysflnjah.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163oiszzlqp.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163cworsxet.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163jsynptim.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163czbevpow.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163uvrgahyv.html

[C02] 默认参数
来源：http://www.sxryk.cn/163gfxhtkyu.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163uitvouov.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163eaxfblrt.html

JS:   function greet(name = "World") { return name; }
来源：http://www.aibaodan.cn/163nmmyumzy.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163gbnarigq.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163cgbfspno.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163lyujcbsy.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163yjfltjct.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163ajketeew.html

[C03] 可变参数
来源：http://www.sxryk.cn/163ewuzxgxw.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163alxqkszq.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163rwgmbwng.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163nilfencn.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163ztdcrsct.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163edyfaqnc.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163ygfzthxx.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163ozynyfsu.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163jgcabvia.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zzxlfgcj.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163wrqykmdg.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ryihhxyd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163aqtuhmds.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163ethijdlq.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163rsrwdtfv.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163yqaivtyu.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163hcrrckre.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163lfcyattg.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163oxnfejne.html

Py:   return a, b
来源：http://www.xuanzx.com/163cthpycyl.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163irezspta.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163nmzufzfi.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163tuwafcgc.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163avwseeqn.html

Go:   return a, b
来源：http://www.xuanzx.com/163nzeopxlu.html

Ruby: return a, b
来源：http://www.sxryk.cn/163aeboezpg.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163qksjsiex.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163xawpmtsd.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163lkcwqmvz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163josnkbds.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163jcihrqmc.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163tclrwfzr.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163yhcymqbi.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163uwdqeqjm.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163elpdzdon.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163luhzahhf.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163gjxtuhbr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163rawqbafv.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163rnqpnxua.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163jgjzfjfv.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163dufbkpge.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163tfpmmmys.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163yomsxkkj.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163pjknqdsv.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163grtjeejr.html

[C08] 闭包
来源：http://www.sxryk.cn/163jdoibcmw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lelvbyzz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163zsqtniuf.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eyiuzekl.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163wbnpbxuu.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163znxvcccp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163noiaivxt.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163oondjtfi.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163gimccntl.html

[C09] 递归
来源：http://www.aibaodan.cn/163lpteodkn.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163eixhkjkg.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ulytonze.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vgwpodkr.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163pogvrjcv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163qajisexu.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163xzlcubew.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163hbzeudol.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163goyehnxl.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163iremecnu.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163fnbotdyz.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ogbitpqn.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163qkcvmgop.html

TS:   同 JS
来源：http://www.xuanzx.com/163lkqzpnnt.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163vawvdmdl.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163rsdmekbh.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163jsvnpmyv.html

C#:   块级作用域
来源：http://www.sxryk.cn/163mdrdpfjr.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163etwbctbw.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ngomlntu.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163xffjxrlt.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163bjaxnhra.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163iieeetfu.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163jeyxnoma.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163eoivyupw.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163imoiyhda.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163xqepcgkj.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163lvikoqcr.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163dkajhqdd.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163hoditqkr.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163usmussfc.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xlqqfalf.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163vizdcair.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163iyighmir.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163nvumvjqb.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163vubextwn.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163liqxckxm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163rlazrrvd.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163wofynylq.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163qwppgenc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163etwwpcwy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bfxaimrl.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163uezwaihm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ojorswjt.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163xstirgjy.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163htwwlsiv.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163ixvgqekr.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163flzvpekd.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163nucpmirc.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163zabxawed.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163lvczhvmk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163ypsoukbn.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163bplhiniu.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163vdfqocnc.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163hcubuddk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163jrrehmhh.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163shualiys.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163ukpwxjcx.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163qpvrxxyx.html

Java: // 无解构
来源：http://www.sxryk.cn/163oymxhzbf.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163yxddczld.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163hvcwdohv.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163dvljnvks.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163lqepjkqz.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163mmzapvto.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163cbsddhrd.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163akvdbion.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163tizngvoy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163struuxns.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163ojksglux.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163muuhqxvy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163ntymkdiw.html

================================================================================
来源：http://www.sxryk.cn/163xmqstyjf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163gzwejfqf.html

================================================================================
来源：http://www.xuanzx.com/163eafwgnbj.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163notkadft.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163cthbwtqk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163hnwyiztk.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163uuyyjfqw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163eymfzede.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163olfhgscx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163xadlerwc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163oceifjar.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163fabtkjcj.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163jbblgwwc.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163qxjqhvvb.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163cykwzcqs.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kfvelnpk.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163lvxxvmlv.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163zkubsuyp.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163bkuogylg.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163issoxtlu.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163kgtrujwy.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163kriqouyn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163alkhqjqx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163yburofhr.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163gtzlgfrb.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ovevhcmb.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163jqdxpkws.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163qibmwhal.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ixdzjteo.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163jjcgdgue.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163tzzliadb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163azzynnij.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163omygupkn.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163kshjtjiq.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163sjdtmkgt.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163gjlswyns.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163yjbwbqtq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hmfndxjv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163odcvrddz.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163gikngyxc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163octstaeg.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163kocecfxm.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163znrtwcdu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163ehujjsva.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163fftxegrj.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163ijwtkrkg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vylloomg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163pdkbfhqg.html

[D06] 数组长度
来源：http://www.sxryk.cn/163erenrwuw.html

Py:   len(arr)
来源：http://www.sxryk.cn/163mkhzunms.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163gygnjdlr.html

JS:   arr.length
来源：http://www.sxryk.cn/163kpuqplmu.html

TS:   arr.length
来源：http://www.xuanzx.com/163uxiwdrgf.html

Java: list.size();
来源：http://www.aibaodan.cn/163jsxyygfr.html

Go:   len(arr)
来源：http://www.xuanzx.com/163mrvkmiax.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163prxobqmk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163yugetkie.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163gdkluqdm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163fbnzeagx.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163ufktyuuz.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163vpbaoewp.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163anykolhr.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163rcofmzyq.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163fpsyqqpm.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163xrqabgai.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163eredcvso.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163krizswvx.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163ioevrhyk.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163johnggbv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163azejzckt.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163wqhafkys.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163fagnxtjd.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163ophlvkfm.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163jibdqxek.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163wpmtrmvg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163hgmwzjxp.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163bznpegxp.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163bvsuagkb.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163wqhmtdly.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163vybzzzjt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163dckfhpnx.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163zjwggyxi.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163zlaygddf.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163qzcxmrip.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163roawnejs.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163tdjnhjrc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ayqmltqi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163wneknpua.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163fpanilmo.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163emlgrdpw.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163apsgmkmk.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ewvnyvbo.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163vvejlogv.html

[D11] 反转数组
来源：http://www.xuanzx.com/163affetfbv.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163jumxseao.html

PHP:  array_reverse($arr);
来源：http://www.xuanzx.com/163ubciobzz.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163vvbcqivv.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163kubsfjnc.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163lqcsfbqd.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163qfcqbsec.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163ircndsiz.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163smdrsjju.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vzonqtqz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163ncpogjoq.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163edqsmoes.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jdogcioc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163xjhkmxuw.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163nxxcjivu.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163duzsmomi.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qsfmfpgp.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163rimwxgdp.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163cjqrtdha.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163cxxhfaab.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ygsqvigy.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163sbzmoejn.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163rkzxiono.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163kywluhmi.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163mcaqijod.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163udtmdnpp.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163hmhhhlkx.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ojecsttd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163qkopzmvf.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163ujmsmirf.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163nmnsszmm.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163pkkmnvsp.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163modxseug.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jccvbgsu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163rpruqjfr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163uvlugele.html

[D15] 去重
来源：http://www.aibaodan.cn/163arteyxsw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163khqezeny.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163mhydwdwr.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163nwdwszfx.html


<!-- 参考信息 -->