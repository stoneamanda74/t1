外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ewnxbrui.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163rjmrryfv.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163mqbmfqgl.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163uypwhkrk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163qhhkiiiq.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163vcmigfjz.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163cecgifrs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163mufbqukh.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163nzohqavx.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163lyrvtctt.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163znexpibu.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163bqqizgcb.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163mavjezfv.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163kcvafvef.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yzdbzofs.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163ohzmoaax.html

Py:   return a, b
来源：http://www.xuanzx.com/163wwfidoyq.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163nmxmcmez.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163lgoyqjmi.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ibjpkuxl.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163yqbzbcai.html

Go:   return a, b
来源：http://www.xuanzx.com/163gyrcxjqq.html

Ruby: return a, b
来源：http://www.sxryk.cn/163kvbdmgid.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163dxuxgvgc.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163jcigkyfh.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jvnikxdo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163tifxzlgu.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163okltilwd.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163pevitzfs.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163chnmrvbs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163yzfuqrwb.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163wbrgwolo.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163rwbaewcp.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163cfkqfnib.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163folqahqw.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163kmcxhrvy.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gaqkrgpf.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163yvaoknoc.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163qejerqxa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163abrhfkeu.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163sycaxqtf.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163twjavadu.html

[C08] 闭包
来源：http://www.xuanzx.com/163ihytjyum.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163udsxswmv.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163aytrjzzs.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163onksshew.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163eeclakus.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163pdylbxzz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163auxefino.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163oiagqskv.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163raivotzw.html

[C09] 递归
来源：http://www.aibaodan.cn/163ndyafreb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gnyhqlwa.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163xpljvskt.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163kodvkcuc.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163zviodugd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163qogknfun.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163gfivordx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163hwbdqlai.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163gyjwwbyl.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163jnercfln.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163sfjlcamf.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163rjaldaag.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163hbtntxry.html

TS:   同 JS
来源：http://www.sxryk.cn/163szatqqun.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163lzibtrvk.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163tlhcpkon.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nuebxjxl.html

C#:   块级作用域
来源：http://www.sxryk.cn/163yvvjtiwp.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tkjdoxlx.html

Py:   from module import func
来源：http://www.sxryk.cn/163oqjtuxuq.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163uoqimeok.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163ybkqhiwr.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163dgynvsir.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163qldsyegp.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163ssrlwfst.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163yltarlgl.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163amjvzgfx.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163uarztkis.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163brldrvhx.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163robachoh.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vmfaqxko.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163jvklyxal.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163nxjdhaxe.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163lvywauba.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163gdgewqmy.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163tpvppxtz.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163lfmvuhxw.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163vmjnaexe.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163pxjciliz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163bvwvbpbw.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yjhvpnnp.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163smckljaf.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163pjaqfdnj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163zaqaoiai.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163sklhkvrq.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163mmhoexuo.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163bgnzsfey.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163siiqeefv.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163yxtstkws.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163aopgurns.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163mgncdadk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163bqgtcnud.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163mfmewbkt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bbxkbwdb.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163fvddrdso.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163cytwuiew.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163ixhpeamb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163rlzniowy.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163iqexyvtm.html

Java: // 无解构
来源：http://www.xuanzx.com/163untmlpfg.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163linkvuht.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163vfyuhfhp.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163kkdxbmpb.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163fryunqgp.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163dngquuxb.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163jpyiqyvp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163ucxptjrh.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163kzknojoj.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163cqfvzkpb.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163rmtkkiue.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163ygaowoba.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xsqssiia.html

================================================================================
来源：http://www.sxryk.cn/163ddeztleg.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163lnhvetpa.html

================================================================================
来源：http://www.sxryk.cn/163cfdgecpq.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163pivuvjyg.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163mtqsqpbv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163wnjgddxd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163kfnmvmgm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163psjfcigx.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163mptqxoet.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163sgwbnhte.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163bbauewlk.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163hzmludwd.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163vmxxkdvi.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ogbretzo.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163oulvqhfd.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jtoklqjg.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163cpdireaa.html

Java: list.add(4);
来源：http://www.sxryk.cn/163qyryxtmh.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ropozxzj.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163gvoalfxh.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163oyjbgrsg.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163eqkrplau.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163hylkvtsa.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163uduegjhq.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163djiodubu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163aodgiznu.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163inrvmprp.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163gjrhzkvq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163sbohgsmo.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163cqudfnsu.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163ovoejeew.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163ncehonht.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163lbdzmnxj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163futjdpld.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163xxolfnaj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163deafakel.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163uryijcnw.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163gmgchasl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163kjaxplag.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163ddmshwsg.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163bblyscfc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163slqkrlft.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163mgnhasgn.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163zvhidode.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163hglppfsu.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163oelzwsdw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163qiuuoetg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163jjsbnixu.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163ixwwtivo.html

Py:   len(arr)
来源：http://www.sxryk.cn/163ijjsymxf.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163nqnvtibz.html

JS:   arr.length
来源：http://www.sxryk.cn/163jpuyjxhu.html

TS:   arr.length
来源：http://www.xuanzx.com/163pspmvhia.html

Java: list.size();
来源：http://www.sxryk.cn/163fnwrwcdk.html

Go:   len(arr)
来源：http://www.sxryk.cn/163iidbuzmo.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163lmybphsw.html

C#:   list.Count;
来源：http://www.xuanzx.com/163mnflxdcb.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163jjeqefrl.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163lqywocwh.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163jqectnsa.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163zypswydl.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163jtouarvk.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lsrekfwg.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163xklsfgei.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163pnkdjtaq.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vfiokvnx.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163nhoshhqr.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163blledoox.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163hfoshrxp.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ulpdxjst.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163yxmqawhs.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163djfkyztc.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163gyvbzpvg.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163bebotkiy.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163rvlonijo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163fmyweeyl.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163adefgffr.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163vvfhhyzs.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163rqjrfzyu.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163fheabopn.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163heuabjef.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163ynsvjrbo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163kxlogvxx.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163gkizdaky.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163bozvanwt.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163teoniwos.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hammkqfb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163xqcjocnq.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ebtmjhrz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163ishetjkl.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163mmigkafi.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163rkdzwtse.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163uxlxxsbh.html

[D11] 反转数组
来源：http://www.sxryk.cn/163jkxdjkgr.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163aulqimau.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163zswadqzs.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163dmkktgfx.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163gyrxosen.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163hhybeznz.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163csbxkhpj.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163unfkvcea.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163oimxkqxl.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163zmhtuvfr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163uwomnxmo.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dxubdoon.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163kvhnlqnv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163ruhalqyx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163vrbvwijm.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rsgupgxm.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163cbusxnqa.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163bofofyir.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163jeowtbyv.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163aipwtehv.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163vuhwnwzu.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163burqmxzw.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163prnbaozp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nzeblrih.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163erxltnet.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ccbntqil.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163qzvvnxer.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163nimljymf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163wejazsbz.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jouucpnx.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mzhwsvsv.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mxwkegvk.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163olifrlvu.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163bjirxdsn.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163hredbnii.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163byecmdcb.html

[D15] 去重
来源：http://www.sxryk.cn/163yfugxdyq.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163hkunsyvj.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163ukvkazqh.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ehdrmhkc.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163fgixgjwd.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163sdyfkdrj.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163mdjtlsyd.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163hupwcyzf.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163hdlydahz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163gpimosaz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163bhocbtnx.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163zwmyavdb.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163kefndfoe.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hxaqlnlq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163cuuekbbr.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163wymcwhgb.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163hebushzn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163cfrmplmq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163lelofstt.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163rehcgqca.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163xxauwake.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163wlzclodl.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163wzfnrhvq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163jgqfoxyp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163tvshfuvq.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163ehbzwbjb.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163egsgvbut.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ecfmgdhj.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163jtoojsnj.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163cqaknnns.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163rkezjrph.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163vjhnecrg.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163nodrozoy.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163phktqisi.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163orctrdii.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163geioswrz.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163lkzmsjcl.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163vjkbssqp.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163suogqmme.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zahxtdws.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163vwrsnexw.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163yjkdnbqe.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163tjrlffxx.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163qzpiyzqy.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163kupqcwfx.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163erichqle.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163ghewkhqa.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163cwpszqgz.html


<!-- 参考信息 -->