外链999!wailian999！

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163iqsczgrb.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163pvtlkadm.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163xpbuwgqu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163cpryfftv.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163qlsjytck.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163maryzusn.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163tehuknkg.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163rtupqnry.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163qbxajufs.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163mlonvymj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163rcnnxdsf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163krjnvyql.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163cuzjuewi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ywfiqthq.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dmpcpfpm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163anklyhzt.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163bpfblblj.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ctpszltr.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163njmolnus.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163jemudwem.html

Py:   return a, b
来源：http://www.aibaodan.cn/163urtqtyjd.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163vibgbcse.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163jgfozmdv.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163ikzrxphn.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163qryuymru.html

Go:   return a, b
来源：http://www.xuanzx.com/163iguwrmuc.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163irszytuc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163wvjykjdh.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163fwbbswye.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163cvputivo.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163bemqwzcs.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163rvdhdnfb.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163zrbdvihh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163vfoqvkhz.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163raegeikm.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163pligsxbu.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xwvrswgk.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163nwyszwmc.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163uxvnciwp.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163bmtjvxag.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163cxwcvyli.html

TS:   arr.map(String)
来源：http://www.xuanzx.com/163qqbfvuwt.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163oqoprdmi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163yhdeiytd.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163igbykqng.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163cypqosrt.html

[C08] 闭包
来源：http://www.sxryk.cn/163pqhqmasd.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163uuemjull.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163hyehrrpo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163sknhaucu.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kfqogikw.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163dgxeyzbp.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163wzalrjdq.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163tjdmldlu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163fwbasidi.html

[C09] 递归
来源：http://www.aibaodan.cn/163wzpqpilp.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163tmtdjyzo.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163icnvhujg.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163wwimswyp.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163tmfhelgt.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163bfdviohz.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163rmkyhhyy.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163mxjglgld.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163haohdzpw.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163ugucdsdv.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163zkukzemb.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163mmzkbmho.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vphvnkcu.html

TS:   同 JS
来源：http://www.xuanzx.com/163llyhsvef.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163qmenibcd.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163uyeuddlq.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163rmnyeesw.html

C#:   块级作用域
来源：http://www.xuanzx.com/163icfotsbg.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163tdudiuxj.html

Py:   from module import func
来源：http://www.aibaodan.cn/163zkowoyln.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163jlhyycfb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163ozwwgyri.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hdgecwup.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wmsdfrit.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163vouboghq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163zciceunp.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163ccxpcmfe.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163htacdiud.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163tznalahw.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163yhkjobxl.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163axadauqu.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163cobyxjws.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163koohielz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163aryeidaw.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163rudzkisl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163xypivobr.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163qatgobiz.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ztjuyzpj.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163bchyywjx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163yiqkrbii.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ormjnbkn.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163rvuvvzuw.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163irtzxtjc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163dcqxaqnz.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163hponivlr.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163iqllgomy.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163krmyzvmo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163floksnkt.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163cpvifxhx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163grniiitg.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163rjnebqjt.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163dnqmexbk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163znuulkvt.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163pbogbloo.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163fnteroga.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163nagffvjo.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ztddogbb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163vylqulri.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163smwcyjxa.html

Java: // 无解构
来源：http://www.sxryk.cn/163guegldmn.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163sjdzshrl.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163rijzvwtn.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163oqbruoay.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163nmwoijrj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163vlhmgtna.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163qohhngra.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163zvafbibb.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163igkaelok.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163jcbnyjyd.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163jpzcwhhq.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163tinhahco.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163xzcmgker.html

================================================================================
来源：http://www.xuanzx.com/163gwjopozt.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163sbofqulf.html

================================================================================
来源：http://www.sxryk.cn/163qpxpgrif.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163tbzekqyk.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163iietuztg.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163xveptryh.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163ydgvabkk.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163nermrgmr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163iuiclboe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163kbfriddz.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163wxzkdemd.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163xoesahju.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163uxphbvdw.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163dnrxgvhk.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163awovcvif.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163egnhxhcs.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163tmbdixfh.html

Java: list.add(4);
来源：http://www.sxryk.cn/163vhrypofh.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163bvaforlf.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163rzayohtm.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163ghxdyqlj.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163rujqtgkm.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163gmbfnfyx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163uiwqvosj.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163vzssnupw.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163bsmsfajl.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163svqegdib.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163fvtiflmg.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163hkyhmvvu.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163epgnqayp.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163uowwvhvd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mowzkgxr.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163uafbuehw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wtiwozpu.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163xtpincxa.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ecvvmqep.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163vgalkbjb.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163hltniklz.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163lhjfiwkh.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163vgriusoo.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163dipfdfhe.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163uyxrqwcj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163avhrjpaf.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163gzooysyw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163qrvhfbua.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163esosumwp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163rwbbhqxu.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vmqcvfyb.html

[D06] 数组长度
来源：http://www.xuanzx.com/163skgywanh.html

Py:   len(arr)
来源：http://www.sxryk.cn/163aznkybvl.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ejklmden.html

JS:   arr.length
来源：http://www.aibaodan.cn/163prneotea.html

TS:   arr.length
来源：http://www.sxryk.cn/163wjfplnei.html

Java: list.size();
来源：http://www.xuanzx.com/163cfwdylay.html

Go:   len(arr)
来源：http://www.sxryk.cn/163vbormzvu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163rgsezbnc.html

C#:   list.Count;
来源：http://www.xuanzx.com/163ujfjivha.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163kbynkpoe.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163xfyzudlf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163bypfywzx.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163xtxtzmhd.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163nhcfbgxf.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163mywbqyyd.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163kebjxyos.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163sxlpsafa.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163xnczrqwr.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163gjosxtmn.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163nabsjgbl.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163rzqbppuy.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163vqnfjbwh.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163mgnleeoi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163mvfpbtov.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163fnkbzfcj.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163izpwkoij.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163gmhmqzor.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163hevztezt.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163kodwyell.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163pzrglfjr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163fiegxtjw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163npuimvdq.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163snwscguq.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163rhpaenmf.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163slkuyqah.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163junhuhzj.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163esvqghdm.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163xybtbemm.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163meohndoc.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163duvvjfwf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163nojtkqnl.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163czdhwotp.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163naemxaxh.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163hvmjywnz.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163gvutzcct.html

[D11] 反转数组
来源：http://www.sxryk.cn/163yjeniqnw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163htbgvlpn.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163zrvdkcfh.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163anejxfog.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163xajfptml.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163wtxsfzxg.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163dojnpafh.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163ukaiblyh.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163sakrkdhr.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xtvmxvvr.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mbkklowr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163zbtwmjoj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163jgdclkhz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163bwyctmfg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163wbofdvyx.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163yyacvhtm.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163fjgydvic.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163kbrtztfe.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163slwhrjic.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163lfwoeqpx.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163uebedjxc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nrcypxse.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wquwwxkv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163voejiuwf.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163xykfaeuv.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163conmvpfm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163iwyvrfdc.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163kfdxbjij.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163nzpuebaw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163zmphxfhl.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163kphtrjnd.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mdxidgqx.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163vewzmqwd.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163xqgvrcpz.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163buexkkjn.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163gbwsnrce.html

[D15] 去重
来源：http://www.sxryk.cn/163hjpttzgd.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cosvgbkf.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163syskmogm.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163bgdoedne.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163hdaomgwl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163yihpdkca.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163tqcxdbdn.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163dzuatbrk.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163ofktmrlc.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163pmwloqju.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163flseybuj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163mjdciupu.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163cojpywyh.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163mqyznnit.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163mkpqvmwg.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163cwqsyxyn.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163cvpwzwxa.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163whniadey.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163fwezcyom.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163ozcbepch.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163lhlykbzn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163dxkyoefi.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163hwnctmyw.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163nfgjqsfk.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163xtunxpgm.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163hxtniblc.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163wjlzbfch.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163jdyeuhlm.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163yftetleu.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163qobilgcv.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163dcphpnca.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163olhfdhgk.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163zdctmfon.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ourvciaw.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163mcbzbvvt.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163nwftsnts.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163msfnkkyn.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163xknsynbh.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163armtvvvq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163bkadqpeo.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163nmuqgomy.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.aibaodan.cn/163gmchxhks.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163afigjgeq.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163nzvvtgzr.html


<!-- 参考信息 -->