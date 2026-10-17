外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163wntqqvgu.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163jtdcxnww.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163pvfkpcbm.html

Ruby: def greet(name = "World") = name
来源：http://www.aibaodan.cn/163fhvzmwxn.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163cbdvyler.html

[C03] 可变参数
来源：http://www.sxryk.cn/163uaoacvsm.html

Py:   def total(*args): return sum(args)
来源：http://www.sxryk.cn/163mclhssop.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163xapbqjxu.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163yencqhap.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vwpyueyk.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163kcucjwyx.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.xuanzx.com/163dqfyyzkk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163scbplihz.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163kmyinnjk.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163xgzblmeb.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.aibaodan.cn/163amgaombt.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163ggnorzhi.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163tixnlosw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163iczcmupl.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163tdwtsedy.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163xbrtmxcz.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mhrsirml.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163loogpeuk.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163igjpxwde.html

Py:   return a, b
来源：http://www.aibaodan.cn/163sztpkbmw.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163vtlipalt.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163nnnbbmhf.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163ayrwyxph.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163nalxmnra.html

Go:   return a, b
来源：http://www.xuanzx.com/163epelkbrc.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163qhhncbhe.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163pwmjdmuk.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163nkdiqsmx.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163ngzczwer.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163apbnhqkz.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163bepgmjal.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163enrwzixy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163vogbrnot.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163gcpalapu.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163nhspqejt.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163zzspwamd.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163gnivfgbg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163zvouptqo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163mvdvrrje.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163ngnwrvce.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163gsvfjtys.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.xuanzx.com/163epykbvam.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163wtplxqia.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163rmsdkncu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.aibaodan.cn/163fcyvkojo.html

[C08] 闭包
来源：http://www.sxryk.cn/163cuvibqli.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163usrlpvei.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163yzqkwvbr.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163mydwnwbw.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kevqhbwl.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.aibaodan.cn/163mtygpwwu.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163edsmduxo.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163ngwjkdwa.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ofavlzby.html

[C09] 递归
来源：http://www.sxryk.cn/163cfntvigg.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163clfeismq.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163vvnknxns.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163cbagbaam.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163gvmqmfmj.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163vuluwywv.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163fjindxes.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163bfnjerre.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.xuanzx.com/163xhxojfgv.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163uwlabhhx.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163miojmhuj.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163pxsqmcsz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.xuanzx.com/163asrzfdig.html

TS:   同 JS
来源：http://www.xuanzx.com/163xcfbtsnf.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163hzqzfumf.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163kpfozcwm.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163sguqmhkb.html

C#:   块级作用域
来源：http://www.xuanzx.com/163anllxggu.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163ximqkphp.html

Py:   from module import func
来源：http://www.aibaodan.cn/163aqkzbahz.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163zijsvyik.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163dsghgiji.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163seadgnym.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wqghhaxs.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163huhukxhd.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163cpyzezvh.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ixzjohrb.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163xtbsocvd.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163cebnkhgy.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163upvqdrqr.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163rhqrtfxs.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163oxtxlryp.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163xvwtnczm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163dwisaeum.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163mdwbfwsh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163glsiknzx.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163yizgljzm.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.xuanzx.com/163ohuxlziw.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163hevszrkd.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163neztkkdc.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hexjyavj.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163omdfvmsb.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163xamkawry.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.xuanzx.com/163rlakqpbs.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163lltpymtu.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163dqjsdtrn.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163jtwbflgk.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163gjdzjuhh.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163iilzpzkd.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163btrrfjsi.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163prazjfjv.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163spyxdasw.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163qcfajqcp.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.xuanzx.com/163nxzxdfbu.html

[C15] 解构 / 展开参数
来源：http://www.sxryk.cn/163chmswfuq.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163fsbfdkpd.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163dvcueqee.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.aibaodan.cn/163tesgxaav.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163nqvvsyok.html

Java: // 无解构
来源：http://www.sxryk.cn/163rbueugmq.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163ixtrnpmf.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163yvmthdbv.html

C#:   var (a, b) = pair;
来源：http://www.aibaodan.cn/163cpdrkaau.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163pzgtwxlu.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163equygkac.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163sgczsbnk.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.sxryk.cn/163bwcvqrxm.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163kdjzwpix.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163svdikrok.html

Go:   // 无重载：用不同函数名
来源：http://www.aibaodan.cn/163aetotgxg.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163bbydchdj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163pztnbojd.html

================================================================================
来源：http://www.xuanzx.com/163trypqukk.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163sdsedsji.html

================================================================================
来源：http://www.aibaodan.cn/163jzzdztle.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163lqlzcbhv.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163bfbisvpp.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163cnshgjdi.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163qkvljiek.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163idypggvm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ifzpfrkf.html

Go:   arr := []int{1, 2, 3}
来源：http://www.xuanzx.com/163ajfyfajl.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163seoudami.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163lyjmdbzk.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163qsbdeaii.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163kswqfwzc.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.xuanzx.com/163cduapgwb.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163gpsfhbdw.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163gdfgobzj.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163resdxdpu.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163rvvwvlvy.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163oouoexiy.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163kdujchis.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163djeospjj.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163etwjuwxj.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.aibaodan.cn/163zxpcizqh.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163anzerqec.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163kguxkohe.html

Java: list.add(0, 0);
来源：http://www.xuanzx.com/163ouwmtmey.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163jowsbqym.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163dlexxwys.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163xytbikkq.html

[D04] 删除元素
来源：http://www.sxryk.cn/163xdetfuih.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163hnrufyme.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163mroyaihw.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163mwmvrmrl.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163uqehuyzu.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163ikcedicq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163fyjgyifq.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163veogwuqn.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163zkkgdest.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163siryilss.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163ympwqvjm.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163tcjpgyjz.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163tbcfzfzs.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163ariemujb.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163yljqjttf.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163dyumpmyx.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163dhfnliyg.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163fvjbnkvk.html

[D06] 数组长度
来源：http://www.xuanzx.com/163inbsdvbv.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163dzqystdw.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163uweyqpio.html

JS:   arr.length
来源：http://www.xuanzx.com/163wwltmcvl.html

TS:   arr.length
来源：http://www.sxryk.cn/163nbgelkxc.html

Java: list.size();
来源：http://www.xuanzx.com/163dcescftf.html

Go:   len(arr)
来源：http://www.xuanzx.com/163pkmxkdvu.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163fytayjar.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163hkiqioqx.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163wjjlgrdo.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163ffdmngxi.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163zliczjqk.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ruzylffu.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163pmbfykus.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163duqkhunn.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163qxzsowlp.html

Ruby: arr[1, 3]
来源：http://www.xuanzx.com/163yiegilop.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vsqjbgmv.html

[D08] 合并两个数组
来源：http://www.xuanzx.com/163eoqalake.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163lsgtzgtm.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163zcjedkih.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163royynnjo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jfvzolko.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163oxiyidfp.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163czuzvbdp.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163wkauguat.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163ixuilavn.html

[D09] 排序（升序）
来源：http://www.xuanzx.com/163ozzritzk.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163byhzcyhw.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163oimyofhr.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.xuanzx.com/163airzcwmr.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163pzynlryb.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163xghfgunu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163rlqqqoot.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163lrhzfqef.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163nopscjsh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163snyffvyh.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163kebyvpbu.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163kmgalprk.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163ouodklgk.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163akifxjjm.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163fkzbmemu.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163scarhebc.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.sxryk.cn/163iovsgaud.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163iouopiyg.html

[D11] 反转数组
来源：http://www.xuanzx.com/163rekdsgph.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163ypjplpha.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163xfafuzte.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163zoiigrhb.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163uwwnvbnb.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163vbzgqguq.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163joyozujv.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163srynqlcf.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163osrlwwhj.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163mdvkdful.html

Py:   arr.index(x);  x in arr
来源：http://www.xuanzx.com/163mraljcdv.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163hizltfze.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163sgrecgaz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163vpcboxsn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163zcraookw.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163syhcqncu.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163kunzwcjh.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163nomrnqls.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163qfoqovme.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163rwidsics.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163axlqqlhp.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tjdykutb.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163iahsesfx.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.aibaodan.cn/163ifccoehx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163bxexymbj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163ktruqlpe.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163ktfnnelx.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163mjvaaoaf.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163cihjsrvg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163jgqnydgu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163gyvzagal.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163mihmuask.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163nrcdnovi.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163ojpofpce.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163yvmqczov.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163nwflvmvs.html

[D15] 去重
来源：http://www.aibaodan.cn/163qwfcgvuv.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wwgrcrdr.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163dbiklllg.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163olnahuqi.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163hvrcguuq.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163aogbrfor.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163gltzuqeu.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163cukabrjf.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163jryvvfbq.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163exyvkxrp.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163azovkoed.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163jnfhbwbl.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163ulwsockd.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163neqbwmhd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163emmtbdpe.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163obwggbki.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163icpkgdkw.html

C#:   list.Sum();  list.Average()
来源：http://www.sxryk.cn/163wvsdcqsb.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163bffjlypd.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163kcfmpequ.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163tmroueye.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163xafdmmwx.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163lxkyzoor.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163mwzzbfws.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163fdfsghox.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163sigpdlwe.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163irfrgibg.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163ebkdwdqf.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163xjkoxibx.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163ldsqfslk.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163isoddihb.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163idlcyylh.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163wbqeuawq.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163xtljhhkp.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163bfgessuc.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163drjjkket.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163uyeulsgf.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163fwoxtfco.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163aseykcio.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163btgizmml.html


<!-- 参考信息 -->