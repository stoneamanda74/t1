外链999!wailian999！

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vthahtwe.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163ahkyfivf.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163dcuyioqb.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.aibaodan.cn/163xthztikd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163adtfxvqz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163ecaseqha.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163ccawnpvs.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163cnultdzj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163housvjnd.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.aibaodan.cn/163hcaufrsv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163bclcgvcx.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163witajfxa.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163lnqshyrr.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163tcxizrlf.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163rhvjxgyh.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163kzlsjafz.html

Py:   return a, b
来源：http://www.xuanzx.com/163nyavkcqn.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163fomojoqz.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163ewfzuzcu.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ivioypcf.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163shwhpctq.html

Go:   return a, b
来源：http://www.xuanzx.com/163bvcfcjpx.html

Ruby: return a, b
来源：http://www.sxryk.cn/163eggivuac.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163mzpydnxj.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163uhcprybc.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163jwldftqa.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163jmuukojc.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163uwcvimkz.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163mploswiq.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163fjluzsvu.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163frhpnhze.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163ekkvaesv.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163qljnwvxh.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163ycekjnmr.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163pumqpkpu.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163llogxeop.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163fqenjbis.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163jruzrwvr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163nuqhvhrr.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163frkphoec.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163rausxjod.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163oaldvsef.html

[C08] 闭包
来源：http://www.aibaodan.cn/163oftlqwse.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163dbshfutz.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163gjgljpfq.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163izzohvtd.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cpallria.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163dgphkdvz.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163damcemik.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163jqaefvzn.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163nyjfmkla.html

[C09] 递归
来源：http://www.sxryk.cn/163eumglgus.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163znswtqto.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dhxlrsav.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163jsnvgkku.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163bqeugwui.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163xeiivzgi.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163idocakcq.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163uozoggff.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163uppueqma.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163dgeqhepb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163vxszqbub.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163hyurxtjp.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163hequwdjz.html

TS:   同 JS
来源：http://www.sxryk.cn/163zdiszvuu.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163bwruqkne.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163dgxmrydg.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163sfangzcv.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163waaezpwk.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163ryainpfl.html

Py:   from module import func
来源：http://www.aibaodan.cn/163ggxpjllt.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163bpweykbx.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163lnxpetyi.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163zekpskyl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163zlzhrpjq.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163xozwzxgq.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163nwuwqwwf.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163dxovhnsq.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163bylyaabj.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163tvsblewb.html

PHP:  (function () { echo "run"; })();
来源：http://www.aibaodan.cn/163ksjnzzeb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163uwdbbbfu.html

TS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163rpltvtvk.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163odpyyijz.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163plgfliig.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163wevijqmv.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163rmibzcgt.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163hpqzdnla.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163mkygngcs.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163krinehrb.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163otbwvbif.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163ysagxpiu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163bglqxeqs.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163jldepogr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163hfgkmtjs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163anymuleg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163vemiypxn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163wlziabnx.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163hzdxcptt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163zilqpetw.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163lscjovac.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163mtvwdrpk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163owpfyotl.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163byayiuwy.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163rtltucax.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163jybxiiwh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163eygerhvd.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163ubuccizh.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163slovaitq.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.sxryk.cn/163csstmbce.html

Java: // 无解构
来源：http://www.sxryk.cn/163wtbuuzdk.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kuauajgf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163kwvoktve.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163fsxeaegp.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163mjldptko.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163sdmdherc.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163ofbkmtpw.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.xuanzx.com/163nejvqnyt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163ejakeqxr.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163tmacwlwn.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163xpowpyzx.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163jgbjletk.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163soazmljf.html

================================================================================
来源：http://www.xuanzx.com/163zrpqsult.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163wfphupnv.html

================================================================================
来源：http://www.xuanzx.com/163uykumoqs.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163ehobvlnv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163yjqqjlil.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163mkgzgqsd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163njicazsv.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163cbhmpbne.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163ntejmfke.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163lgwmbujk.html

Ruby: arr = [1, 2, 3]
来源：http://www.sxryk.cn/163gvylrqiq.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163bsraocwl.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163oluujvop.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163kggxckho.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163mjwqaadt.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163jgfoxuux.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163vbaafsue.html

Java: list.add(4);
来源：http://www.xuanzx.com/163qfwjnihd.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163dfqzyrvp.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163qqahcgff.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163vlxdmuni.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163wzlmccjh.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163bwtzjijr.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163ofaieypk.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163olvjuedu.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163jeuqjvwv.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ovscrgzj.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163mjtzqlyo.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163lujagnhe.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163eabakgod.html

[D04] 删除元素
来源：http://www.xuanzx.com/163fwobrpms.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163ijfkadht.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163rsbupvdf.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163wvymxzdc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163etdolakb.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163pesofugr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163cmzgvlza.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163vqipeucd.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163filskqaa.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163mohwprpk.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163tinjvtzh.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ratiwuxd.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163xxqeaqif.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163imorutmd.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163epspmcgx.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163gznucvcp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163vrwgmugr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163cwenchyh.html

[D06] 数组长度
来源：http://www.sxryk.cn/163ieggwqbo.html

Py:   len(arr)
来源：http://www.xuanzx.com/163xchlhmhj.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163qgydujbk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163bngxdglt.html

TS:   arr.length
来源：http://www.sxryk.cn/163blpddupm.html

Java: list.size();
来源：http://www.sxryk.cn/163stmddldn.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163hsciudkm.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163iloxaytc.html

C#:   list.Count;
来源：http://www.sxryk.cn/163pbecoria.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163wuibytuw.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163gzffiysr.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163ehjkhodh.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163maiffdmp.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163ufizltxf.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163lboooyav.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163fktgmhcy.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163hozedvqv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163iclntjxg.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163eqzslbzn.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163hwyqengf.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163dsqafipf.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163rgaahpir.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163ownplskw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163fvhtqpoq.html

Go:   append(a, b...)
来源：http://www.aibaodan.cn/163xsanfdsa.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163iiakcbko.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163vrbdwpoo.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163bcdydwwr.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163efmrckey.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163vykdiugf.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163hqqafypv.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163ryqnblem.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ogmvpiwp.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jcrfhndb.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163wkhrigru.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163ezypykda.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163nwuuvuqh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163dlwweaqa.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163nixemhhv.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163qcpxtpxv.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163athqzgmz.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dublitiz.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163kwwiruaf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163vgllxneh.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163cukhldio.html

[D11] 反转数组
来源：http://www.sxryk.cn/163hhzmtcug.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163lfzmfydq.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163klvfyyqp.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.sxryk.cn/163eufnxium.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163halrigvg.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163yqaiqwbc.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163haelzhcl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163txwjpxcw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163chkhomtb.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163xtqhkoea.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163ntgfnxxe.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fqltiyeq.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163owoaupmc.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wqngbprx.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zcealrjq.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qwrknesk.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163gfhmtsmc.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163bfacckcd.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163vohtrjon.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163bjmectte.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163waijdybv.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163pzfztpon.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163auukmndc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.sxryk.cn/163taosdnnk.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ehzvqjyd.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163bpeqzrvs.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163tsjzydka.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163abldtnrv.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163jnnhoovv.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163wgfqrcqv.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163rffcnlix.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ngppjtsj.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163xiayxubl.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163prpmhgmw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163rtonvojm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163bcbseuvf.html

[D15] 去重
来源：http://www.aibaodan.cn/163krppfdun.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tzoskgpw.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163knljxrbo.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163xrptlzsl.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163flmujpvl.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163bzmphikt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163dsormvpk.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163vsxesdkr.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163hxufvhcd.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163wkkfvpuc.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163edprtgce.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163lvdkncen.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163djvtjtvx.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163iysqronw.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163xveenwwb.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163zyqmstrq.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163nvulxfqt.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163unhlmjlq.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163hxcyhoed.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163vlldyfjf.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163hprdntms.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163xachxqft.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163yqekkdtv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163hlazaxug.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163bjokvggs.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163veuoqkvk.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163nlurmvcg.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163pfdzexzb.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163rztvdkbc.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163zoqygban.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163bfwhwnfr.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163rsxpueiv.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163lmvsdrvz.html

Go:   // 手写双层循环
来源：http://www.xuanzx.com/163tepksnma.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163irenvhyh.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163jssyewyj.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163rhpbwovp.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163vxvbufqi.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163cafcedxa.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163fpuqoziu.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.sxryk.cn/163dnoxpmte.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163pifneabx.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163mwihlwus.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163fuuigowd.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163rqtgvhji.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163lkjygnsc.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163rveicyio.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163olmgmvpd.html


<!-- 参考信息 -->