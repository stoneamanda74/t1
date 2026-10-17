外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163zfskdtga.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jvzjurrb.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.xuanzx.com/163bwzrxdcw.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163fwthtlww.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163hpqqyxfd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163cyefniqf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163iaocjohf.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163vvfrlwet.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163xpexcwwi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163rqfrhgwx.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163bnizmcfz.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163nqdplowl.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163gbwbgohz.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ddvlnfmt.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163hixcoarq.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163xyqnfrej.html

Py:   return a, b
来源：http://www.aibaodan.cn/163hllohwcj.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163gpplimlz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163siuyyxqk.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163okdalrpx.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163unxhsjnb.html

Go:   return a, b
来源：http://www.aibaodan.cn/163ciohgbnm.html

Ruby: return a, b
来源：http://www.xuanzx.com/163lgihckhb.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163itskyohh.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163qhgqssmx.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163qpaptrhx.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163lawdpzwo.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163tawgqqbq.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163kdaffgvm.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163luedsrhn.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163wubnjmfa.html

Ruby: square = ->(x) { x * x }
来源：http://www.sxryk.cn/163mlsvifui.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163iloiucum.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163cwcsywne.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163jmnoyrsj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163ivfagclx.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ofccbsut.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163pdozdfwy.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163czzlkkhi.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rwifotyk.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163ougbgtal.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163ofzmpjzc.html

[C08] 闭包
来源：http://www.sxryk.cn/163uemppepn.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163gwqwtskg.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163ikeudorv.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kfxboikh.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163qhfuktfa.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163sswuytjl.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.aibaodan.cn/163blcwvmbj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163mxdfspkt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163rjcduhmm.html

[C09] 递归
来源：http://www.xuanzx.com/163kaxijksi.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163vhpxgbwr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163ekjeakbq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163dvhosuyf.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163xoczykav.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163hmijuxsx.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163yxackhce.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163eofsjlnw.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ywvllqaw.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163ldxcmuzc.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163jrduoyuj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163xbppestc.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163xevszggf.html

TS:   同 JS
来源：http://www.xuanzx.com/163svydfyro.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163fheuuklh.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163trfrpttn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.xuanzx.com/163gvrizwpg.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163dkkotspd.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163dffoiohc.html

Py:   from module import func
来源：http://www.sxryk.cn/163kbhrwhkd.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163nenadvgh.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163embwbwqf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ltsccmum.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163nagbdkfw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163bmysixwn.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163sydicpri.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163nfhzsibp.html

[C12] 立即执行函数 IIFE
来源：http://www.sxryk.cn/163awdhbxyc.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163dkzozate.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163xghbrvmb.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163zcijjdgm.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163hgzgccgj.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163wxwzslvb.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163zwmgmbxa.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163judfqbir.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163ydyaaqgd.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163dxfhntds.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163hxnjyehc.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163zowdowzh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163jajgrktb.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163svnsasyk.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163qmkpkmyv.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163hdwkrxmg.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ltszfmyv.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163tvgfxoes.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163hrqnbsei.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163otadnnjy.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163btzxibfb.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163seruetkb.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163lyfsvkvm.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163dnlezmwz.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163akvjdbgx.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163rvuzbdca.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bhfqagud.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163vmppqrjk.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163cnjwvjde.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163dfoycnis.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163vhgtusjk.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163jptheobp.html

Java: // 无解构
来源：http://www.sxryk.cn/163gpvlnygn.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163rkypssag.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163sdjighli.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163qhhqtsjy.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163brktaphh.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163uqhptvfw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163lkugagdr.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163hnmvcsnw.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163fhyhqubk.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163htzswoal.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xukvckja.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163mwnikswp.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163cqtiknsl.html

================================================================================
来源：http://www.sxryk.cn/163oowrrwfo.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163komdzqqk.html

================================================================================
来源：http://www.xuanzx.com/163euyoifcu.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163qbqilhjp.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163duuzduhj.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163dpntckvx.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163cnaorltg.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163lwrdisxv.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163pzxlbsnn.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163tnknndmw.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163grsdtxqh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163kacydgzk.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163xpyixxya.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163sfbbjkjj.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163wimrkxlm.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163kakigklr.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163antzqxtg.html

Java: list.add(4);
来源：http://www.sxryk.cn/163emfoyyvq.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163qciumngd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163slwzwngx.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163klclqlxd.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ejphkonb.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163uciqowrx.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163mapfqgkt.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163cgkuydcy.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163awcrnvwo.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163rgximoik.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163hqintvtv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163cjcyygtr.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163mewcnqsh.html

[D04] 删除元素
来源：http://www.sxryk.cn/163kryrmwnl.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163qirxuhfv.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163chqfzclz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163wvrabhar.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163woxjjtzw.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163imqvydcj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163pupbjwbx.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163amudmots.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163kpkcffyy.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163nmtdxgxn.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163aywszmvc.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163hiduzsxg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163qwnwxkxq.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163wrvjuaov.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163zomqzgvb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163livvapom.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163judlwgem.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163xqpqyoez.html

[D06] 数组长度
来源：http://www.sxryk.cn/163hirzmgzc.html

Py:   len(arr)
来源：http://www.xuanzx.com/163mpvoozxy.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163xrngmkdc.html

JS:   arr.length
来源：http://www.xuanzx.com/163aeshumjx.html

TS:   arr.length
来源：http://www.xuanzx.com/163nlkxvgmu.html

Java: list.size();
来源：http://www.xuanzx.com/163eqqeckub.html

Go:   len(arr)
来源：http://www.xuanzx.com/163srlgkbvx.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163zpgytcjm.html

C#:   list.Count;
来源：http://www.xuanzx.com/163wzoxsehl.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163dooijnxt.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163iuhdflud.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163mftfyihp.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163egjjkjvk.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fhcemcrj.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163urylrzlp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163kuptybul.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163xlurfscw.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163kiqzampu.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163dtshxmlf.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163aakfhzdc.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163cvxeqocq.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163aoijltvs.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163jcsklsrk.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163pzvvxyyo.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163yurlsyxa.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163vdwoahss.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163ncegebgu.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163lwwwnnyv.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163lwbvflji.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163brzbnzej.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163blbzhmrn.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163uogsgncc.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163gqloweke.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163xhvaickc.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163fyawakgb.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ifxpfhjk.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163rjxwxfes.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163yscgrefr.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163hwejcatb.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163clmsqnsu.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163kgwkswst.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163zhltbnik.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163vaejturc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163gtovwxbw.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163immpvyjd.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163zyvxtulz.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163squlcyea.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163qmgiqinu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163sjbhenmw.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163hhbcowwi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163sibarbrj.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ygbeoknu.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163epdzknah.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163ubaqjonf.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163xkfjwxfw.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ylhrnviy.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vxqurnxx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163gvflnyjn.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163qipuqpdm.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163zaihhvap.html

Go:   slices.Index(arr, x)
来源：http://www.aibaodan.cn/163rpswnevj.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163yxdgvjxq.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163xpzcucry.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163zcntpcsf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163hvwqjgmn.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163ojszcbes.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163wqkvqzie.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163sgxlyexp.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163lpcsffjx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163yjqtrxqp.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163xcqbhuae.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163bsmrrlzd.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163ngrrbssk.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163byjuywpv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163wbbtpgss.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163vkvjuycf.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163yipbnbhe.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xjttbebt.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163luvenbxr.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163zhgiqtbr.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163nqslmpkm.html

[D15] 去重
来源：http://www.xuanzx.com/163sqiwrysa.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lqqhceni.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163sitsltvz.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163wxfwzjjr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163xhqdfgmi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163fxkcsepi.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163ujrxmxfu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163nniibvzr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163ygygxngk.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163sfshqrdz.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163kqvxqblb.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163edkcysbs.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163vuftvwls.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163dwiaxviz.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163eqgekuve.html

Go:   // 手写循环累加
来源：http://www.aibaodan.cn/163athwwnjp.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163exzrrxeq.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163gpibkrbe.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163rkloilqb.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ckyvoglj.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163ajweeupa.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163fzxepoba.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163sfrleutv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163iyqrboup.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.aibaodan.cn/163qtartsad.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163dyritoam.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163ynrlrbkx.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ubkojtsz.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163xkcvenrv.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163ejzxspey.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163pyeoogcs.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163bghhbmiv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163yvqcwzhj.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163zrpdpldz.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163ldhzstdz.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163prbaeyig.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163hbfqcaiy.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163yxvfaodn.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163gnnwygfm.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163oxswywup.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163hgaabdyc.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163dttvixky.html

Go:   // 手写 map[string][]T
来源：http://www.xuanzx.com/163ibavhyjp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163phgcuema.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163wocczgkx.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163bqioybiw.html

Py:   Counter(arr)
来源：http://www.sxryk.cn/163dcqowudu.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163rsatmbzb.html


<!-- 参考信息 -->