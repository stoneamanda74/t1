外链999!wailian999！

Py:   def add(a, b): return a + b
来源：http://www.aibaodan.cn/163hylfdoid.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163kpkydhju.html

JS:   function add(a, b) { return a + b; }
来源：http://www.sxryk.cn/163zwsievag.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163wmfzcuse.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163lzzakbke.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163zprsfdgc.html

Ruby: def add(a, b); a + b; end
来源：http://www.sxryk.cn/163pnrahull.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163ouinloqt.html

[C02] 默认参数
来源：http://www.sxryk.cn/163slhwtoja.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163ekhvddmd.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.xuanzx.com/163nctpopor.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163ibytnigk.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163tyhdrpqe.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.aibaodan.cn/163efvitdlr.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163blpppwxk.html

Ruby: def greet(name = "World") = name
来源：http://www.sxryk.cn/163franiqfe.html

C#:   string Greet(string name = "World") => name;
来源：http://www.sxryk.cn/163qfeaagig.html

[C03] 可变参数
来源：http://www.sxryk.cn/163leealbvr.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163vbqwclin.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163dpolrrdf.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163szpughjy.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163blmrckrr.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163xrmfjkgq.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163uabicqkt.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163urpuazyj.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163fylqnlpt.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163twfhkpbt.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qoixevav.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163dvauljpj.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163erqddgum.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163golsqnwo.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163yoxossnr.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163livkbyur.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qxcuszuv.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bcjhewoa.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163bfquyycx.html

Py:   return a, b
来源：http://www.sxryk.cn/163yetxsbzo.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163qosgzjqj.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163zczowlvu.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163mrchmrpg.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163jivfocep.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xwqprpxq.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163emikrnvv.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163kinvjqui.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163xlavrwno.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163buicsfxb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163ghybrasm.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163ebjsbkcs.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163mxieofen.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163dfqnegvw.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163nwaxudfn.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163hsvmgyin.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163nrtzzpdp.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163vdcolshx.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163txcaxqmr.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163fjqplifg.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163fbugufqa.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163gdedwkbo.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163awmxtyjg.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163msduztgm.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163hebszyoj.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163robbyotd.html

[C08] 闭包
来源：http://www.aibaodan.cn/163dqbhqrlc.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163eofpkpji.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163tlpahysm.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ynwysbci.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163srffofnz.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163ofaypfmq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163hlqojspu.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163uqozpazm.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163fvxpjwjw.html

[C09] 递归
来源：http://www.sxryk.cn/163uurooylz.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163tvjsyxrf.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163kylhghca.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pvahausf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163pyvyybtf.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163dccqfblz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163xvoovwqs.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163garckhtl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163uoqfxavf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163siwacskk.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163wuvyfdgy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163bisdrhyu.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163yrsrjxeh.html

TS:   同 JS
来源：http://www.aibaodan.cn/163hiqyssan.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163hvywqrys.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163nunwmlog.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163lmnovksi.html

C#:   块级作用域
来源：http://www.xuanzx.com/163sbxkjgmj.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163zsravjlt.html

Py:   from module import func
来源：http://www.xuanzx.com/163idntsabg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163dzokomzl.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ytrtywes.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163iucwfaoi.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163jxdtqptr.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163sedcdmll.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163gstgvied.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qwmqrqwo.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163uikuyfjq.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163ygdlrmod.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163pehpaljw.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163jrzbzwfv.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ozzsugmo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163slxecuvv.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163dcctqxyh.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163lgfdkvnk.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163sjitimec.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163tjidiiub.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163omhwwyxc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yyypckug.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ltdzrqcn.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163lwiqkwyv.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163bsyzquup.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163bnhjrjch.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163pygvxdch.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163oqpcoukf.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163egflgchq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163gsdmwzul.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163iqdjwpkq.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163otaafkic.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163mdexrbgg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163kmlupjut.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163vzwxemrx.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163milgfzje.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163ulsbyooq.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163fepjbzzr.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163nognrolf.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163zbrsedmz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163dxxecxou.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jbzizbqj.html

Java: // 无解构
来源：http://www.xuanzx.com/163zjjzirxw.html

Go:   // 无解构
来源：http://www.xuanzx.com/163rauamvhc.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163akbdomps.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163ifzpakag.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163wmryfmyi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163qjkcntef.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163mzcoxizx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163urcwniao.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163rznmhgco.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163wzkbdaki.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163idazevad.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163ibkimyco.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163lnxpjjtt.html

================================================================================
来源：http://www.sxryk.cn/163brsfgyyp.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163sutfscqp.html

================================================================================
来源：http://www.sxryk.cn/163zadvxuys.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163kdxpszid.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163ydnwfrol.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163unmrcmuw.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fufuufuo.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.xuanzx.com/163gvyhrksl.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163sonfnqbh.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163ngzlbbfh.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163jkfmguyd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163tvreiroj.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qxysjvhs.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163ivezyrho.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163boqefuqc.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163zahpeive.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163oyomrouc.html

Java: list.add(4);
来源：http://www.sxryk.cn/163tvhwknle.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163ktiywfqd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wkkuylow.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163wcjzflrl.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163qkkbthcc.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163ggledgog.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163gaxhpddl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163ohnnqahj.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163tkivlegm.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163lfpahytt.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163supsdxtt.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wgzhydlh.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163ifnrbtbf.html

[D04] 删除元素
来源：http://www.sxryk.cn/163wfeqpbfh.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ynydtipt.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163zegihsdy.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163cyiiwrkh.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163unuylcfv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163hdcezpnp.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163tfcufbpx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163youbvoru.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163mrnbofys.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ffhbxquz.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163cjfcpdad.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ocovsbik.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163npfvgyhk.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163rubyboqs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163khlnszgx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163flsmlcoc.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163wtwpxaek.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163hqjqdzsz.html

[D06] 数组长度
来源：http://www.xuanzx.com/163lklawtmi.html

Py:   len(arr)
来源：http://www.xuanzx.com/163asiwigdj.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163xdcmwitw.html

JS:   arr.length
来源：http://www.sxryk.cn/163dhwhvjvg.html

TS:   arr.length
来源：http://www.aibaodan.cn/163rqkgqfdk.html

Java: list.size();
来源：http://www.sxryk.cn/163ptnaqzci.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163bkpbunuz.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163gasurroj.html

C#:   list.Count;
来源：http://www.sxryk.cn/163tqwtpzkg.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163vioincjm.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163mnakqags.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163uclfayol.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hormascy.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163ywjtslfm.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163fswvwtyy.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163zyefdiej.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163yrzsobjc.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163paeitlzs.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163poplagaw.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163ukvrfsvp.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163xekezdhr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163ekonjuzj.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163fhojvywl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163klskhilc.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163crqbsnch.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163sgjpkjbi.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163xeokdlxb.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163itfdpwwk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163hekhnlxe.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163bvhqucul.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163llkmssdm.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163arzpwtus.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163jtdnlirw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163uunzmuwv.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163jlvlqddb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163krkgeoge.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163cadrfyzw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163gzhpihdp.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163akcvggsr.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kjwnwjin.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ahiwvyny.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163zxzddkpg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mrylgwwp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163ppetblvj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163rvfvcwsm.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163hirkovnx.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163mixxxldh.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163tybgntoj.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163tddkvoqf.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163twbetoau.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163kszhgbgz.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163ycydmppy.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tfkljcgn.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163zxopzocl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163gayazrlt.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163rjqtnwid.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163yxldqneo.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163zkdmwwtv.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163rijyocmf.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163ckvfyqwk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163osotweqf.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jrbzvpme.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163scjqjowq.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163uqvlbucj.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163wgxmqgyg.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163llitpdcb.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163lfrdetob.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163yhvckwbi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163lxadgccy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163veztinqf.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163jeynziyj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163dyjhmqah.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163nflrxhza.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163kxzhckfm.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163mxaydute.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163edbptlht.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163dcxkhsry.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163qciaglir.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163fnnrpanb.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163tzbkcwjt.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163bievosxy.html

[D15] 去重
来源：http://www.sxryk.cn/163bywpgdmi.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163yfmqzkca.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163qmkfegyr.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163dujdpelc.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163cdytpqam.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163dousxhud.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163acaxbpde.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163qqxcfevo.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163iqygvfon.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163boksftcy.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163fqljrqcl.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163khanijwx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yzawagtd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163jdunhtik.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163efirybhs.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163khfjahcj.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163edkvluzk.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163onptbrcl.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163adpihube.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163mosbpjlw.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163kvhlfiuf.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.xuanzx.com/163vexjkojj.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163sxcqcqkr.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163dgkcuukg.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163wyzxmjpq.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163wqbijras.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163bujfrcpj.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163zygdrgvy.html


<!-- 参考信息 -->