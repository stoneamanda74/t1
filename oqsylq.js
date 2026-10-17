外链999!wailian999！

JS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163obwwspdo.html

TS:   [1, 2, 3].includes(x)
来源：http://www.xuanzx.com/163akpqipra.html

Java: List.of(1, 2, 3).contains(x)
来源：http://www.xuanzx.com/163csqkslir.html

Go:   slices.Contains([]int{1, 2, 3}, x)
来源：http://www.xuanzx.com/163pniuftdk.html

Ruby: [1, 2, 3].include?(x)
来源：http://www.sxryk.cn/163dszigtym.html

C#:   new[] { 1, 2, 3 }.Contains(x)
来源：http://www.aibaodan.cn/163qvkndjqz.html

[B15] 布尔运算与取反
来源：http://www.aibaodan.cn/163rumxjnby.html

Py:   a and b or not c
来源：http://www.sxryk.cn/163luobiomp.html

PHP:  $a && $b || !$c
来源：http://www.xuanzx.com/163mxgbfxnx.html

JS:   a && b || !c
来源：http://www.xuanzx.com/163rhqvmhrq.html

TS:   a && b || !c
来源：http://www.sxryk.cn/163xkjpcurf.html

Java: a && b || !c
来源：http://www.sxryk.cn/163jpsmhswk.html

Go:   a && b || !c
来源：http://www.sxryk.cn/163udkmkpiy.html

Ruby: a && b || !c
来源：http://www.aibaodan.cn/163sqpcdkdm.html

C#:   a && b || !c
来源：http://www.xuanzx.com/163umajbybw.html

[B16] 卫语句：不满足条件提前返回
来源：http://www.xuanzx.com/163btzyogra.html

Py:   if not data: return
来源：http://www.aibaodan.cn/163zhvuhndf.html

PHP:  if (!$data) { return; }
来源：http://www.sxryk.cn/163gsfcpncy.html

JS:   if (!data) return;
来源：http://www.xuanzx.com/163ibizxfzz.html

TS:   if (!data) return;
来源：http://www.sxryk.cn/163fynavxck.html

Java: if (data == null) return;
来源：http://www.aibaodan.cn/163minedjxl.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163grrmnist.html

Ruby: return if data.nil?
来源：http://www.xuanzx.com/163ctakocvr.html

C#:   if (data == null) return;
来源：http://www.xuanzx.com/163fsbyqohc.html

================================================================================
来源：http://www.aibaodan.cn/163gypoqdzo.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jydnhifg.html

================================================================================
来源：http://www.sxryk.cn/163tqrekcpp.html

[C01] 定义函数
来源：http://www.sxryk.cn/163csvpcwzo.html

Py:   def add(a, b): return a + b
来源：http://www.xuanzx.com/163juutvkvn.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163mwrveqfn.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163ilbyrjiq.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163zphklqov.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163tfxckfmy.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.sxryk.cn/163mpvmjlkx.html

Ruby: def add(a, b); a + b; end
来源：http://www.aibaodan.cn/163xzaqksyv.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zzrorkgo.html

[C02] 默认参数
来源：http://www.sxryk.cn/163esugsgfg.html

Py:   def greet(name="World"): return name
来源：http://www.aibaodan.cn/163vubvxkmz.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163qormmmam.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163jabjcbno.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163vlyimdej.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163cisjcbwh.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163hzolsygr.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163decbyorz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.xuanzx.com/163tmhfxnxm.html

[C03] 可变参数
来源：http://www.xuanzx.com/163ilafbgfj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163iqvbwflw.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163tcrrsxxz.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163drklujgu.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163aeeyydgk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163oxkuguaf.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163lgtzbwxn.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163crlggbsq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163pbqnftma.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163mkjuepjm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163nxwevyim.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163ryrlmcsu.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163kttlvsft.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163tqzjuopr.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163dbqjkwzu.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163psiebnlp.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cjocfaio.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163gvhrqiis.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163bpwpanjr.html

Py:   return a, b
来源：http://www.aibaodan.cn/163gypqkqci.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163msynjsgd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163bqiszaqu.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163fghpnemb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163owuzmnuf.html

Go:   return a, b
来源：http://www.xuanzx.com/163mhttkyyv.html

Ruby: return a, b
来源：http://www.sxryk.cn/163fusxgfyw.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ifobphlp.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163gcyuoqfw.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163sdqjfctz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163lrdbfuah.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163wgyztwhu.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163eawzeogp.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163vyumyijj.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163vybbfzhv.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ebajbujl.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163lbrimmhq.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163mtsucmds.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163dgtpsgmi.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ujmwcxkw.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163qypvsetp.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163rwpufwvq.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163hfbeasba.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163zuyfzetw.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163oijjvgab.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ruwipwgc.html

[C08] 闭包
来源：http://www.xuanzx.com/163yamvgyyw.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ccwbcytj.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163ctyqzpju.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163zlazrypz.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163iqjtupwt.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163qkalfcvt.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163cpqjlfcx.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163hmskaxyw.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163tfcqxmge.html

[C09] 递归
来源：http://www.sxryk.cn/163geldlfqk.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163dhsnjita.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163ivquxkiw.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163ddzjhfea.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ftyaupyy.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163nmnqofhs.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163iadleadk.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163hokceabr.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163raqvyryv.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163nariejof.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163qghulcrl.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163lxngecjh.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163hxqphvxk.html

TS:   同 JS
来源：http://www.sxryk.cn/163jeaiejzk.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163pzgnozaa.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163atdozwiw.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163losozvko.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163slugaldw.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163bgincnzl.html

Py:   from module import func
来源：http://www.sxryk.cn/163swobgden.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163mbivizkq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163pjoiviqi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163fhvrnqjf.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163zuvrtoph.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163qrjqtqwj.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163lptuaiej.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qhtxbxcf.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163cmkjhrjx.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163qpsfwfhz.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163iokescwg.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163djcpeskl.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163qgxgwloy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163guhfnhgf.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163nmvgwwhj.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163pukwrugx.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163lnlyrfco.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163rckyshys.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163rztefkay.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pxoigkmv.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163olwryclj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163aooazjfi.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163pkmrkwhi.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163meckvopg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163jimrlitd.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163lkmhszrj.html

[C14] 泛型函数
来源：http://www.sxryk.cn/163gexedqwf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163vljxmbxh.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163gqjfxulo.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163eailjuhm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163rzjpyzsb.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163juuzfzak.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163gceqgylc.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163iossjqsi.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163llfodfkw.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163gacljnhk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163vvknrpsu.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163vlhyyelu.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163udherann.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163mpvxzboq.html

Java: // 无解构
来源：http://www.aibaodan.cn/163glhezoft.html

Go:   // 无解构
来源：http://www.sxryk.cn/163itdmkrfz.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163edxgtavk.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163edwannsa.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fgusjckt.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163ifisrcxq.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163uqnjkujw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163uxgpmzuu.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163zfafgpcm.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163bclpnrcx.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163wfxyiamy.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163xhajymeh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163qysazncq.html

================================================================================
来源：http://www.xuanzx.com/163awgigmcr.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163ptxpvlle.html

================================================================================
来源：http://www.aibaodan.cn/163qrywspfj.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163enhzxjnb.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163dvgkqbtk.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163ytdkgiuj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163biyxvjye.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163pcnfwmya.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163uposacxc.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pjmxkxpc.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163trldjokj.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ojdumjjn.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163ovoxxauz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ykpjhqlr.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163xwixkpwb.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163lngmcicb.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163xdumykwo.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163fxutndvo.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163ionejglq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163mlgrqubu.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163pmvoqfiz.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163fndonkxn.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hvzryekb.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ihejxdoy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ldqtmnsc.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163vnifgcyi.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163clnywwiw.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163yzawlzpz.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jyqsvohr.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163gbzgekzd.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163mrhnatip.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163znrofsvo.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163uumzlyga.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163qiovmalh.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163jpdcmfrh.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163bhajsntc.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ynqdqlmi.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163oejizkay.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163zcbolyfk.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163kbtrtwhr.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ubgpoucy.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163fqoregym.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163wqcnzzii.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163drinvsox.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163flsqhjyu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163coqpizdp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163cheamagp.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163shhmylrs.html

[D06] 数组长度
来源：http://www.sxryk.cn/163yyxpvsxy.html

Py:   len(arr)
来源：http://www.xuanzx.com/163kothdjlz.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163nlbggltf.html

JS:   arr.length
来源：http://www.sxryk.cn/163kemvhzfg.html

TS:   arr.length
来源：http://www.sxryk.cn/163eevuefic.html

Java: list.size();
来源：http://www.aibaodan.cn/163mcekbkhk.html

Go:   len(arr)
来源：http://www.xuanzx.com/163lzzlrjjp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163fyvsludq.html

C#:   list.Count;
来源：http://www.xuanzx.com/163crlxhsmr.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163uiryqhnw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163inmarzzk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163kxrihpqx.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163rbtafxnz.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hznuwszl.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163adoutqhx.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163xnjesyon.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163hqvibdfm.html

C#:   list.GetRange(1, 3);
来源：http://www.sxryk.cn/163goibdggb.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163glbtnshw.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163zuxhybtv.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163pbcrqhmx.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163iaqkphdz.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163cmeolfuk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163qykfvuyx.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163xgjralau.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163xgbfjauq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gzzkdaqa.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163iasqsrmk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163raxlzlva.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163nzybbwrr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163jnibcbin.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pzziytgt.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163nwsqlkwi.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163kdidhrrf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163afaeqoyf.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jlvnmdip.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163amxkggtl.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163zktlpscr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163slosczya.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163npejpmfa.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163azarfomx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163qwlcsato.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163rxntkepq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ijvrqucn.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163sstjxrau.html

[D11] 反转数组
来源：http://www.sxryk.cn/163sqgzxqqm.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163wbuspmgv.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163lkijzabl.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163mdrjtdhv.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163ulziqsxk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163qhcxqccy.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163olhqhiqe.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163lgzxgbzc.html

C#:   list.Reverse();
来源：http://www.sxryk.cn/163ykmmvoie.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163ggtmajvy.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163tekzlqco.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163wtcncnfs.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163uymnbtpr.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163yqmrozod.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163vtmjlqpr.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163vmskagad.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163thxwflco.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163jfxbfqex.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163nxpaehey.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hkpvksmj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163dcurmdmb.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163olellzbb.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163qvapktqb.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163rvyeeroz.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163gybqanrm.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163jgailcsi.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163basugnem.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wdkjletd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163zzcuswjw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163mwwnkdat.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pdqloyyb.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163hnuqbrnv.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163agautoqd.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jbgryolg.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163hbjavwbp.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163earvtynb.html


<!-- 参考信息 -->