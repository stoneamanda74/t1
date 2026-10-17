外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163pzfztoss.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163evbfsnit.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163kpsjsfxy.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163lxukcgek.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163athgwymd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163kupdwsbo.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ophcocmi.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163qwkzlhha.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163lehlnzop.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163ylnfpgaw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163tipjkoof.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163pzxjwgtw.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163dsjodraz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dqdjzqbc.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oeqdlhhn.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163wynufaur.html

Py:   return a, b
来源：http://www.xuanzx.com/163dkhfewpe.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163jlcysedw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163prsxxuun.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163agddbdht.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163qnttnooa.html

Go:   return a, b
来源：http://www.xuanzx.com/163ycexrmkf.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163nfkzaret.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163uefutfoz.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163sidkatdj.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163yigbmpmb.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163zbpcounn.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163oobzdfbt.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ltvwvcva.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163iqyyrdjs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163epwxlexj.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163xzhcyext.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163jrgylume.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163odbohsje.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163dfjtuepf.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163hnowyhkb.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163aldcszni.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163uyutjnhr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163awqdopha.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163xfevlish.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163nzxudxrb.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163rznwhvos.html

[C08] 闭包
来源：http://www.sxryk.cn/163jmlrgjjy.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163sdwkbfer.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163knlvfxgd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163sptslybs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mpgzkkdd.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163fozpyhdb.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ouiexuhr.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163hnciadfx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163srahaafa.html

[C09] 递归
来源：http://www.aibaodan.cn/163wkjhksqo.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163tgkjmujs.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ryqlcbql.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163hdfrahth.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ydzwhwfv.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163sxuivrep.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163ikkmfnti.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163cqdcqoga.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163uopansoc.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163fsfejqum.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163gwieckfy.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163dqkjrczp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163sxwiseeb.html

TS:   同 JS
来源：http://www.xuanzx.com/163wlxtpcbj.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163aqbdjkcv.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163lsmxfils.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163mverrgaq.html

C#:   块级作用域
来源：http://www.xuanzx.com/163bktdqigh.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163wmewkhwh.html

Py:   from module import func
来源：http://www.sxryk.cn/163djfhjdex.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163cgbwtftb.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163kkfyxglt.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163csznrgbi.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nvtiommq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163cfgsnwyz.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ixzvbqcm.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163zjhbqten.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163cfqbhfie.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ocipmvqz.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163efvecrcs.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163bizdalkc.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163vlctenyg.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163qfchrite.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163vofzbkzn.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163nxidaxpl.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163jfmminck.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163siogdcxn.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163tkozwdya.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163ulxaezlc.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163cjowhkgt.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163agufnfxj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163nmzldaou.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163kcsaohto.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163cuozjvly.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163bnlwztzt.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163isdjkskm.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163rmthxxtv.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163joqgnsir.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163doavtqfx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163jqzeiltk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163ufvgcbwa.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.aibaodan.cn/163thgxrljq.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163letazbqn.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163fyykqtmo.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163hskourqp.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163louoiqmc.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163ufcsbsxp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163grcwjzou.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163uuyszmzv.html

Java: // 无解构
来源：http://www.sxryk.cn/163xjuzkmqk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163pmgjfurc.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163sludsnro.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163xozbfawm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163vrvpaezj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163uvtohdnl.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163wzurvopv.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163iafpfhqm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163bxpyijhg.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163cgnsbmgh.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163tnuzsgqt.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163jyimvkhh.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163nmhjgdft.html

================================================================================
来源：http://www.sxryk.cn/163eaqkqwdc.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163wxwgqjrq.html

================================================================================
来源：http://www.sxryk.cn/163sftorynt.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163nssljrix.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163mugoyigw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163vjmabsdj.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163ghveibcz.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163zamukfgu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163xwhsqpki.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163dbdtklpa.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163tjmomdgz.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163jlelxjhc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163sqbvishz.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163ntgzhzqi.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163iptmcunk.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163ppvowjza.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163vrfoiuyx.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163uatnqfou.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163dvxbrsqd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163ilhvzgbr.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163pdfmwpho.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163nklnexoy.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163kbbmkxkd.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163ibdpelte.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163fsnvrpub.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163hzutnueo.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163xiikhfas.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163lcjoajyc.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163wsvfqfuo.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163motutvpo.html

[D04] 删除元素
来源：http://www.xuanzx.com/163cbfwovcb.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163disfxtsk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163grbudtgr.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163nkceonoe.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163wkcuddtm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163zxyeytaq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163bzgyrokh.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163lyadhujv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163yalwewsl.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ehneubmu.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163udnumuvz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163iysqhsqn.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163ekhkfslm.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163hxtooxii.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163osupgdez.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163brelhizw.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163roggsthh.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163wzmiovrd.html

[D06] 数组长度
来源：http://www.xuanzx.com/163wmkmvitn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163oaszsilx.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163xdmprjmw.html

JS:   arr.length
来源：http://www.xuanzx.com/163jzektssq.html

TS:   arr.length
来源：http://www.aibaodan.cn/163iwymtfoa.html

Java: list.size();
来源：http://www.sxryk.cn/163komdwhbe.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163aiqdsfhx.html

Ruby: arr.length; arr.size
来源：http://www.xuanzx.com/163tvtgxygb.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ejcftznv.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163tahwkmgt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163whgerhdq.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.xuanzx.com/163uwkkgwnr.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ohpqyowl.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163oroigrag.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163uxrcxedm.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163frxegitw.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163hsasscml.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163cdyjfnph.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163jjsleqgt.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163zqigwkqx.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163frddjitj.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163ynaclfru.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163dgxwyisl.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163cffpkmxr.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163cmvbatgy.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163zmgheamk.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163cczyrwgv.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163smjtpwto.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163dcldujsx.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163lrlfqhco.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rlmcgtdv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163wowwetsr.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ahivnzze.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163xfviraox.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163vxzenhnm.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163jjnuyoxo.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163kjrmufsj.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163pciqobfh.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163mmufaykp.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163etkhdhrr.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163bkjptfit.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163ngeyfzwj.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163xcmzhnra.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163xeennklr.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163jhzojcdw.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163iphfrzsw.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163iodtpnvc.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163zmtmslmf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163qdvxfjlr.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163kvicwnmt.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163huvxbiwf.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163azlevsjv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163yrylanro.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163yubrpnvh.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163bkaoptlp.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163kyegbclh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163dmtlxfsz.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163kizitaxc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163oeuwaexc.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163lxabaave.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163ipxvzbde.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163jxxvcexc.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163zlcsnvef.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163waueacvl.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163ougjyyss.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163lkzdlkkh.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163uiegekyy.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163npgrgfrp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163qzbvtguv.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163vcuzqoia.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163tddnftnm.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163gnyfsxwu.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163gdwidkqs.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163accuaqnw.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163mbqwvwzo.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163drjywvrd.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dlnwfrni.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163jroosabr.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163mwuynstu.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163egyqpytj.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bnqlcrpe.html

[D15] 去重
来源：http://www.xuanzx.com/163ghlvkptb.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ixvlrqah.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163whuiopmf.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163upmovmpb.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163sqkmnnzz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163osmwgqxd.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163fmxtoydh.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163eybajwtr.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163zmbegdcb.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163njvycirb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163ploctyoy.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163sfulycwh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qoractrz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ebvpbxmo.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163izkeogjc.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163jckbpqtq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163cmeqrqrj.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163droeschk.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163tangrnwe.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ovpcnsoq.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163hutjxuwo.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163byflwuep.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163fktfmhew.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163otofcoxb.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163nbqwkwsl.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163tdndposq.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163gejohfsy.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163hvrcqyhx.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163bnsuwkrq.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163igwzuqci.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163mpojurjf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163emkarthl.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163wbsovekg.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163paekrcfl.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163lokpgpzv.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163ziutpsjm.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163fczxnnbs.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163bwknylaa.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163rtdsqhre.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163qtoygkzg.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163jczhlyun.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163oerkfnfo.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163ukaggbnb.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163cctsmqol.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163xiwsyshd.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163ineufnic.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163mvfvinbt.html

PHP:  array_count_values($arr);
来源：http://www.aibaodan.cn/163gflwazqh.html


<!-- 参考信息 -->