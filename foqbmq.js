外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163igapgtyb.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163xkbfqtll.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163qybpprpa.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163atxpxuof.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163crzwgbdf.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.sxryk.cn/163ggnzyfjv.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163tmuwbonc.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163eencaxez.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163tosbnoli.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163nocfubhy.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163szpxvxrs.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163ldjpqaae.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163hhrfwzvc.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pzpondfn.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163pbrhigau.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163mpqwtofl.html

Py:   return a, b
来源：http://www.sxryk.cn/163yuosdmof.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163cibacmqw.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163wbvlfvlf.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163naxccnpw.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163rsqehglq.html

Go:   return a, b
来源：http://www.xuanzx.com/163xibkeqhw.html

Ruby: return a, b
来源：http://www.xuanzx.com/163mjazfzhd.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163ngxcaozm.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163fqfymdwc.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163gazbyoae.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163wsxlmsrp.html

JS:   const square = x => x * x;
来源：http://www.sxryk.cn/163ygtwkvqa.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163vygbrwcu.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163hfeaqlnd.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163yliunvza.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163qakbaswk.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163xlwxczaj.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163bwjyvcde.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163oyisytzh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163suumhbbf.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163gflxmokm.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ulfzoavk.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163yvfoffya.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xwpeyviv.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163vqwdsdnz.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163ooheuozl.html

[C08] 闭包
来源：http://www.sxryk.cn/163ieujgrlu.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163ohdczoia.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163sxgnnmpz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163lxrgmgce.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eretyuzi.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163oxenhans.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163yqlsjgrb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163mcaodpfz.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163tjnjvzsy.html

[C09] 递归
来源：http://www.aibaodan.cn/163ikwxcqon.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.aibaodan.cn/163jaikxcci.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163aysxbxzj.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163orlxobet.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163sfehwlom.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163xzmvqvml.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163mljdvorx.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163avbcojhe.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163zomdrklf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163uyoanpdh.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163icndkuao.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163xblnhqni.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163vkgbsfwp.html

TS:   同 JS
来源：http://www.xuanzx.com/163bcichzru.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163pdhffghj.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163bkjuqjey.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163nuigmplx.html

C#:   块级作用域
来源：http://www.sxryk.cn/163erqzjjsy.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163xygqkadq.html

Py:   from module import func
来源：http://www.sxryk.cn/163rhrujusz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163avqposbr.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163zxhfyhvi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hugbjetc.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163tyltkzad.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.aibaodan.cn/163pzdoulwm.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163etzinvka.html

C#:   using System.Text;
来源：http://www.aibaodan.cn/163dpiezuxi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163bvpphhcf.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163lradjthe.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163szrzaypi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163ugkggeny.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163kjnubinu.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163xjrqqtzj.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163movpthto.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163jlzikpco.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163givysfkj.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163rnjhkhom.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ojulbpah.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163qongphhb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163iuzfgjyu.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163yavcoxlc.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163trufjhgo.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163tyqrxqfm.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163ropwrsto.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163pnsncehc.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163khmckjzd.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163cikidhjj.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163uerkfqwr.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163avnwofqd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163zyidbeat.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163qycriawe.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163sciejhzi.html

Ruby: # 无泛型
来源：http://www.sxryk.cn/163lxytptvm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163husnxfet.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163istvzihq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163srsruicx.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163fpvwvpbv.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163hnwvwrzw.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163hzvpcaib.html

Java: // 无解构
来源：http://www.sxryk.cn/163qnmdjgre.html

Go:   // 无解构
来源：http://www.sxryk.cn/163uhbjfifk.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163astsxbhz.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163zmjyoice.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163szmxscxv.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163uxkdjvbr.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163hmspyeln.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163gsocoifm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163xndnfuta.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163gzhvbamo.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163yumluoff.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163qmbadbxk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.xuanzx.com/163hrjrwcnf.html

================================================================================
来源：http://www.aibaodan.cn/163ngdonkdr.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163oooxbdbb.html

================================================================================
来源：http://www.xuanzx.com/163iypibbuv.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163kxjlyjop.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.sxryk.cn/163akemxkbw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163pafexepb.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163xemtuntl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163ncxlkwaq.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163jtjwqspr.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163twtzrvow.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163eurqfzch.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163egqtuquw.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163kztumpom.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163akcwejjl.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ayofqlwe.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163umvrqtgs.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163olywimeg.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163tfohcwtp.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163zkufjtyl.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163prvhhbml.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163mfrdaqmf.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163vkobkcwy.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163hmlqxfcz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163vjxqhrpx.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163vugstgiv.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163bkwezhse.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163hicfmirx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163ywqmxtdn.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163zuzcfoyf.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163mkqkwtiq.html

[D04] 删除元素
来源：http://www.aibaodan.cn/163qtdgiapf.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163gnurilgk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163jjfbwwkp.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163tjvacfvi.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163qbubltgm.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163itamovxt.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163qvdlsven.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163izwdzyup.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163smuvwxnq.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163zifjubpj.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pwpyavkd.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163siinywqf.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163djbdajlu.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163sbsfhxdn.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163bohbhvnf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163wlsptpwo.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163ivsyxgut.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163jozmkxea.html

[D06] 数组长度
来源：http://www.sxryk.cn/163fvjsjhbd.html

Py:   len(arr)
来源：http://www.sxryk.cn/163wotokpxm.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163ugfzddmo.html

JS:   arr.length
来源：http://www.aibaodan.cn/163cfjpwtti.html

TS:   arr.length
来源：http://www.sxryk.cn/163umctrqlp.html

Java: list.size();
来源：http://www.sxryk.cn/163epzbzvwo.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163emvjfimz.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163usxmjcfy.html

C#:   list.Count;
来源：http://www.xuanzx.com/163xixbmgbq.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163wmrflgin.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163uzzkglru.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163khsjpvxq.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163qiqrbbdn.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163hjlbvcxs.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163mgwidmfr.html

Go:   arr[1:4]
来源：http://www.xuanzx.com/163qusvwesr.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163jxvvsvuj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163rlqcsajr.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163uxzongji.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163jtckzncd.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163ghvydsrd.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163enbqdrqz.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163qkhdxemi.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163uiquvgou.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163espzystk.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163npnvycdr.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163bhcyavws.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163qnqwdune.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163gcrabklb.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163zcugsrwe.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163uimaubky.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163jursndjb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163oykrvntv.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163oanffjxr.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163nyjdwgfg.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163aqiexjsi.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163cbdmzxmx.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163ovdreepg.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163hhdrklkf.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163ytgbzlji.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163snqqfytd.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163mcwydejv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163spggzhsq.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163rqkfcvrp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163fvykveeq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163flxrstja.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163aycexrhx.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163vticsmna.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163ldpjfanl.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163aiwhxgnf.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163hfkzaeqo.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163ncmqhooc.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163dhrqwkrf.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zgpdckwu.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163edrgiylz.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163hdiocfvd.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163ucyxvkpx.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163roijkxuj.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163waqqdlqh.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163eefsizmk.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163hliovtau.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mptpkfvn.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163tcvorxoy.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163ndcrvybf.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163uyvtirwi.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163ewjdgzts.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163ouuqrjce.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163gzfuzywi.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163qodlkyjx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163qmqbzoex.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163fqydqslz.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163yrzlugco.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163ryekhsyd.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163jvfcscxt.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163emkiliqx.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163dadaiioq.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163juyyrnww.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ggrgorhl.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163jqkuarrl.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163rcqsjcdd.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163buqooiex.html

[D15] 去重
来源：http://www.xuanzx.com/163twpdmvtl.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tbcrvvnh.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163orphjoeh.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163kqluzljd.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163ohzwzufo.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163vldbzafo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163mykaqzxd.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163hclttiyj.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163esidzgsr.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163onrzgdsj.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163vxeyjdzv.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163gjeksbmh.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163lojbyzdr.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163mpgoicqt.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163zjgkfthy.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163einyrrrt.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163qyfoaxob.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163obxxghlj.html

[D17] 最大值与最小值
来源：http://www.xuanzx.com/163zrhdrbmk.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163hpsyecgn.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163knmzyvco.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163vjebvfkg.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163nmkxjpwn.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163pidhwjiv.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163pfxolwqy.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163jpanxfyh.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163lbqoxdka.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163mwpumgbg.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163oldrdwoo.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163rmkqvcsx.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163agzeuytr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163kwpujlcp.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163vzmcydom.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163gnqskips.html

Ruby: nested.flatten
来源：http://www.sxryk.cn/163oyukhqol.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163jabntxyt.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163owpvuoat.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163agiuches.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163fwtaqgjq.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163aslouzop.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163exgennhi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163fkybtzan.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163pcdfnlmp.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163kgqkvvpw.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.xuanzx.com/163uyrzrznk.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163grynzgab.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163qoyoiqul.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163mqpkcfih.html


<!-- 参考信息 -->