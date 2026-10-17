外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163dxakbqus.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163mmooiiwy.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163bdsymcyx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163wztbrthh.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xyjiuvdr.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163ddvrnmag.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163zilvlsif.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163skovkash.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163xrxdskqc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163ggryjhzg.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163qatfxeyp.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163gymbibdu.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163cnlfjifo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zoknqyhn.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163umogwsco.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163vlwrjwwu.html

Py:   return a, b
来源：http://www.xuanzx.com/163laxpjaen.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163fjhvgqyf.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163nrlkjsws.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163mvcxuzdq.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163yvgtfgbb.html

Go:   return a, b
来源：http://www.xuanzx.com/163pmuavfgk.html

Ruby: return a, b
来源：http://www.xuanzx.com/163rexnwiwb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xxdqwubl.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163hxzdlfms.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163dhtstbku.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163ebamqalz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163dibscxkw.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163vkejjdvj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163zyeipprk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.aibaodan.cn/163qcdhndfd.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163iqiqqukh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163xbrtttzg.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163yooxzudq.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163rgzmivtm.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163eobitazd.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163xzdoqbds.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163vrsafbnk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163cqzhaowa.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163txxdrlyr.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163dgwybkmb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ubqnbhim.html

[C08] 闭包
来源：http://www.xuanzx.com/163prpcekte.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163eovapnjc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163hpftnkru.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rmcoirof.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163srcdhmhv.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163kkkqgspq.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163pefvqzgs.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163smxeeorh.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163effuutnf.html

[C09] 递归
来源：http://www.sxryk.cn/163qviaokgb.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163brceakei.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163bkcqcnbq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ywagqtmm.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163qlcmasow.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163zkruwkds.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163ucqxjdew.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163nwiytxzq.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163epeamqlz.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163bvxiboom.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163xxedsdft.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.sxryk.cn/163nxeyawim.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163uydsclmp.html

TS:   同 JS
来源：http://www.aibaodan.cn/163fcaehkis.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163bhkfqurr.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163setfeste.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163hxtxzcoa.html

C#:   块级作用域
来源：http://www.xuanzx.com/163nwezbqtk.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163zubpagkw.html

Py:   from module import func
来源：http://www.xuanzx.com/163dkvlrkmn.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163ksejhcte.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163axkjkkxc.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163rqhvvxuz.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163mbjzrzom.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163uiowivex.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163amshasai.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163rvoifmct.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163qegiqxlk.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163rtqpoqnx.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163burszaye.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163eekndhhi.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vdrnjbzo.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163unrhsizi.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163gpiivsqr.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163iqrjiltm.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163jklkgbre.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163qkwblncm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163hmzjysjh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163xzgniftl.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163dzdqpvzx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163awabjijg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tehgbfpk.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163mdbdrryc.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163fjlhbjle.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.aibaodan.cn/163kaqktjoh.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163xruboxpc.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163vwxyktzg.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163nfqflztv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163lfytrreg.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163urscoxfw.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163qqxikxzm.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163xsnpdohl.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163zclgqkig.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163nayygcsu.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ciehuivl.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163fiatwkfo.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163voxfnylm.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163wekrlcno.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163sufcsvpo.html

Java: // 无解构
来源：http://www.xuanzx.com/163soeiczhd.html

Go:   // 无解构
来源：http://www.xuanzx.com/163evawkqit.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163nwaggjmq.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163rvplejsx.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163txrniegd.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163yrbqdtnz.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163zpioexby.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163euyplmlp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163gjniemia.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163oqukqejg.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163ihvupxyt.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163nquyhmns.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163yklmxilw.html

================================================================================
来源：http://www.aibaodan.cn/163swlqvcom.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163aqmzfbhs.html

================================================================================
来源：http://www.xuanzx.com/163xfawhssf.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163ccnwryry.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163yyxmwiwv.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163uqiwytwf.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163dmhyntru.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163yntpsjei.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163sorqrfrb.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163iyeihims.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163ujpyutax.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163qegovrlr.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163spvxutvk.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163ziroyenc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163hunadisn.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163tnzydguz.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ieljzeac.html

Java: list.add(4);
来源：http://www.xuanzx.com/163jlghilgg.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163zlhkmfwq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163bvupnogv.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vyawuujw.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163nwqqwvrd.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163xlpdwscw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163yrwgtcmd.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163jcemayqv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163wlwhjftl.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163dcveepte.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ndoxxdkk.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163pkzaxyyg.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163bjenavpj.html

[D04] 删除元素
来源：http://www.sxryk.cn/163prlhurli.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163rfctuihl.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163fzfdvdus.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163xzsbszmy.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163awrotepd.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163tkzllhrr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163nhvllucr.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163coupgnan.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163cjyvoolj.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163bvcinisc.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163okwyqqjl.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163yttdvoxh.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163gpzptdfy.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163fbgjbadm.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163dbykrrum.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163kjcrviem.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163xnrhcdpx.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xevfppcp.html

[D06] 数组长度
来源：http://www.xuanzx.com/163lgaulrza.html

Py:   len(arr)
来源：http://www.sxryk.cn/163oavjeqcs.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zsutrggc.html

JS:   arr.length
来源：http://www.sxryk.cn/163lnykcbou.html

TS:   arr.length
来源：http://www.sxryk.cn/163dlnhytnw.html

Java: list.size();
来源：http://www.aibaodan.cn/163wuffglfx.html

Go:   len(arr)
来源：http://www.xuanzx.com/163aulojjsx.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163tewfvqrl.html

C#:   list.Count;
来源：http://www.sxryk.cn/163revhkurn.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163myfkpizb.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163eyxdmemp.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163slvgpwtt.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163frfonreu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163lslzyzqm.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163yekigmuf.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163cwyxmorw.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ueuildjg.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163orllojbi.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163cpejxyaq.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163mkecxuvi.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163uaigrohm.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163fenzrsrr.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ssebzujb.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163yaomkcmh.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163bvuzsfmn.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163iwikegtp.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163smpmwdjg.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163lemhjnax.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lnejbjjt.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163ogwgljad.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163hwmcxjuk.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163yzmuttmf.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163ldvlykpl.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163hpmidhcc.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163mbkrutij.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163verrfpqh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163tysvjmoc.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163imyzisgg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163stfimekn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163ybvlqvwf.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163jqkviahz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163zkwfazwd.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163jbvtedgb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163bwijeeds.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163mdfgltxb.html

[D11] 反转数组
来源：http://www.xuanzx.com/163bchhosfb.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163bfkdjmxw.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ysajgpyd.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163flhcvmbg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163avmnlkzo.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163zrnibddh.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163tqzxvhbn.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163nhhseind.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gvnspdjz.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163nnmepnnq.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163rmfdvxkh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163ozvxkeop.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163onnoosji.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163puolvyus.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163otxbhoge.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163arkwqvju.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163qvwpjapu.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163fissqvro.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163nlpjiute.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163onpkqdll.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163qrkwnvmg.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163wacdcsiq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163ommyubqh.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nmbuyydw.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163nfqzwzme.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163wygqfxsb.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163tayaygfk.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163fxxehyup.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163tusbbhei.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163wzzsqsid.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163elrrgqna.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rrchkayn.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163joubzmvr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163nllccuma.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163haqxlhdu.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163csjwyphy.html

[D15] 去重
来源：http://www.aibaodan.cn/163ibartjfb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163mnejwsbt.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163cdfeolzl.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163muzvzkvl.html

TS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163ubqvhzfz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163alvtqzzw.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163wwacpnvh.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163vmspmyws.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163wlewihsh.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163jakbxfqk.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163ywgdyxyv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163tdvajybn.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dsddgngz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163krjqmbht.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163vpvrszmp.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163ummtgpys.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163cmnsdqlm.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163muibqnqq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gymbxiqh.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163jnfjbjam.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163jlztvcos.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163hjucxnri.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163qkzdaluh.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163qvhjnvtx.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163vgpcrrut.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163qanrpujy.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163ypyxhbgj.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163rdmzeoaa.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163tdkjovfo.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163puhtkahk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163wskoklat.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163myiojowd.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163itldqwny.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163mwveycqj.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163tqenvqzr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163qybvroej.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163dqcpfbuo.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163lapwsheo.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.xuanzx.com/163xawyulxc.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163zmxlegab.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163piovwrmj.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163iocwflqa.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163dufwmbko.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163fozzmjbe.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163osouhaqx.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163gtxvbevj.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163fxsklanz.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163sgmmurhq.html


<!-- 参考信息 -->