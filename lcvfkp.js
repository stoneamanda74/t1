外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163qdkqgayk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163nmldtbtg.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163wimsbhvm.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163qftywllj.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163yjlxtaab.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163fzxsqjze.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163ndsbtgvf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163wqevzaxb.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163sjruahdt.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163gvfyonoa.html

C#:   f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bpweqkix.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163wijqbcww.html

Py:   return a, b
来源：http://www.xuanzx.com/163bpoozfpv.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163mgbntbrn.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.sxryk.cn/163vaekbrjq.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163tkbtgvwr.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163sivzthhn.html

Go:   return a, b
来源：http://www.aibaodan.cn/163xaowlszw.html

Ruby: return a, b
来源：http://www.sxryk.cn/163xcvaalkk.html

C#:   return (a, b);              // ValueTuple
来源：http://www.aibaodan.cn/163jvmhtnlw.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163ttrotbbs.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163iuzhlern.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.aibaodan.cn/163dajwzltd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163ancatpjy.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163hpspadlh.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163aystuezk.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163fjkgtwvb.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163ozknmesa.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163gguljzed.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163cjwhrieg.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163lpecazii.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.aibaodan.cn/163cnozsoie.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163dfyozuuk.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163mxbzuoqd.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163enqeawro.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163xcxwypof.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163zxtjnzvt.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163wysrsfkr.html

[C08] 闭包
来源：http://www.aibaodan.cn/163ztmzwjlj.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163bycybnwl.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163bfpdhwwd.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163kviqyfbs.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lkenmlmf.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163xzfuuzli.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163vnwaqenb.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163aaangqjp.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ipicrjis.html

[C09] 递归
来源：http://www.sxryk.cn/163phuxhdwu.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163ijcpcbpp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163gfokjvon.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163yalyuxzs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163hojwvsay.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163zuthwzgd.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163armxjmbc.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163juzxpwwp.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163ypacpclj.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qbspqptg.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163zufnqcdx.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163ncumgray.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163zplndkzs.html

TS:   同 JS
来源：http://www.xuanzx.com/163uwgcuzku.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163syyvnmhe.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163haubxihy.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163zavqtpdp.html

C#:   块级作用域
来源：http://www.sxryk.cn/163qmceqfdo.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163uppolwcn.html

Py:   from module import func
来源：http://www.aibaodan.cn/163rizckmyg.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.xuanzx.com/163fqnaxrlg.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163kwmiebzn.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163lzqalayf.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163ztvricps.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163lgifuqth.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163piyyipcz.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163yemddxnr.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163ffnhsusa.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163fautjtxe.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163peyaepjg.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163xpiuyelm.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163fuymwyqb.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163muasrdae.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163rkomylrq.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163nhkdgbti.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163dtkbkiaf.html

[C13] 类型声明 / 类型注解
来源：http://www.xuanzx.com/163gbqijcgp.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163lmiofxbm.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163hgtqmygt.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.xuanzx.com/163ubbcesel.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.aibaodan.cn/163hiaklwnu.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163pwdnmxvy.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163onpaluok.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163unlukxnx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163jgmmcygz.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163oxcmcyif.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163txkyrsit.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163kpymjgjv.html

JS:   // 无泛型
来源：http://www.aibaodan.cn/163eogzpeqo.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163ssztrhcy.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163xapkzfsj.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163nrxapadl.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163bsruovwx.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163fbdfszcq.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163opodfxgc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163crkovayo.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163tdetebyz.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163csveidpc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163hpbqekfp.html

Java: // 无解构
来源：http://www.aibaodan.cn/163cpjmnypa.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163kvrvacvt.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163hlhznata.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163jbdvwkzm.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163qgoizpaj.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163rnwhgtbg.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163bwmqifkx.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163yhzjyrjz.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163oudvjovb.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.aibaodan.cn/163nlwfwiwn.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163kxawmjng.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163hfmocvkz.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163owsrxzdn.html

================================================================================
来源：http://www.aibaodan.cn/163jwnqhhlk.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163wtoywzwj.html

================================================================================
来源：http://www.sxryk.cn/163eyxenwgc.html

[D01] 创建数组 / 列表
来源：http://www.xuanzx.com/163vrhyddie.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163wjwpllso.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163pvogjjry.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163fdeoqpqm.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163vroiiikm.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.aibaodan.cn/163prafrkov.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163vtdrylcp.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163hbnqatgl.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ayzuzypa.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163zpkqstvp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163lmmpebkw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163lqheuesr.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163pbrpmqdq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163iomobjkk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163rmmokgkx.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163yrfdrbka.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163tqndbgjt.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163cdngtimh.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163wgqempwg.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163whwhdmqk.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163jdmfzcko.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.xuanzx.com/163kzkhcyoz.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163xnyvtxcc.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163fktczhww.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163jpuaeybx.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163joslsirg.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163iumjhigd.html

[D04] 删除元素
来源：http://www.sxryk.cn/163qjehazav.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mzrnzuwk.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163rdujrxhj.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ykkzqohs.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163cvxhmklo.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163jvwaivkq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.sxryk.cn/163trccdlly.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163uysmdhyb.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163qscwxdph.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163apolvxbf.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163shquadmz.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163nbxerqsg.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.xuanzx.com/163xhcstkpx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.sxryk.cn/163thasilky.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163sebojqwn.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163zsdkatfp.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163itgkkvyr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163vxiptslf.html

[D06] 数组长度
来源：http://www.xuanzx.com/163mhulsqib.html

Py:   len(arr)
来源：http://www.xuanzx.com/163pcrnzspq.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163tzxsypjv.html

JS:   arr.length
来源：http://www.aibaodan.cn/163wemcfyxj.html

TS:   arr.length
来源：http://www.xuanzx.com/163tnsmompq.html

Java: list.size();
来源：http://www.aibaodan.cn/163adufoqdy.html

Go:   len(arr)
来源：http://www.xuanzx.com/163oprzcbje.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163rmrwdsos.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163ihfdlhnl.html

[D07] 切片 / 取子数组
来源：http://www.aibaodan.cn/163sqcwdfuf.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163llbguctd.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163lqeiinbd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163fzytsmdf.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163ueewykcx.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163sjodsqmy.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163nzkeireh.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163zcrmowkj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163tpubqvxw.html

[D08] 合并两个数组
来源：http://www.sxryk.cn/163gckdqjxk.html

Py:   a + b;  a.extend(b)
来源：http://www.aibaodan.cn/163vmpmnrbr.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163tmlfzkmv.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163piwaqfez.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163jiifgtxx.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163nkdqckls.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163lszfnhmo.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163ckqcyepn.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163pbnscpxc.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163biwlrdta.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163lvnyddjp.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163obctlbyq.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163ziyexinj.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163nmvcihcs.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163zlcmvdnw.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.xuanzx.com/163sbvszgeu.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163adyqyxvu.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163klmazioa.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163rqmulwje.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163jpmwajri.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163gjjwwkfo.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163nyaexbkg.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163oeqgllpx.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163aueujmcn.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.xuanzx.com/163lwdjnxrf.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163cptiywrm.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163csxutsio.html

[D11] 反转数组
来源：http://www.sxryk.cn/163rijjlaql.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.sxryk.cn/163cjslwhce.html

PHP:  array_reverse($arr);
来源：http://www.sxryk.cn/163trwzyxsq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163nkonjqez.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163zuktwjfk.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163mrqcgleu.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163isfeewqk.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163zimhqhtw.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163gmazrabl.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163blqiyvxo.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163klyouhvt.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163bfbnqefm.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163wiljpbpg.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163jtsrnrvn.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163lwxkvnnw.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163shxnlobp.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163xozzoufj.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163eruasjmi.html

[D13] 过滤（保留满足条件的）
来源：http://www.xuanzx.com/163sgberxdd.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163cbiswtcq.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163yjyalmmc.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163gqdpzkkz.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163cnctabxc.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163nwavbzme.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163dvpnicdl.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163jesvtrjx.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163ulmsxrtq.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163ciqcnmfp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163mczfrjsh.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163vdcejzgu.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163elzqemle.html

TS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163ddfxxyer.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163afhzixaf.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163tetfzfdw.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163fpyripvm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163xjmuxobd.html

[D15] 去重
来源：http://www.aibaodan.cn/163auhasovs.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163twbsbbem.html

PHP:  array_unique($arr);
来源：http://www.sxryk.cn/163yyxhzwom.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163wxpybtbc.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163erpbrdpx.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163ilhncuoo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163qtniqdqe.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163jfkncrov.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163pkzgeetj.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163dbkqmpcu.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163vyebvhgh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163nuhawbbx.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163hpqyptpb.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163apshkyfd.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163espnjmuh.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163aeatovzz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163wcsjaxzg.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jtkjlaax.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163yjufiecm.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163adxwypbj.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163xdmxebih.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163azwtvxel.html

TS:   Math.max(...arr);
来源：http://www.sxryk.cn/163hwdxftpq.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.sxryk.cn/163jubfdjij.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163pakxhpgo.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163vejutptw.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163qakgbfmv.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163nomodqcn.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163zgnlhdyt.html

PHP:  array_merge(...$nested);
来源：http://www.sxryk.cn/163folmthxr.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.aibaodan.cn/163guyjmnuy.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163wbjjhzre.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ugzzxkna.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ncnpxhfs.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163irwnemmr.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.aibaodan.cn/163pdfjbtnl.html

[D19] 按字段分组
来源：http://www.sxryk.cn/163pnphjyfd.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163tdqhhaio.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163eufvdcgk.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163imjqwyfi.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163vbdiuxik.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163dxxsfuqy.html

Go:   // 手写 map[string][]T
来源：http://www.sxryk.cn/163oxnmtqzf.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.aibaodan.cn/163xwlogigg.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163vkhiehct.html

[D20] 统计每个元素出现次数
来源：http://www.aibaodan.cn/163popxbuho.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163cntxxtfq.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163aqfsblsa.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163mdeffezu.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163kcsqtstv.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163wwrekhme.html

Go:   // 手写 map[T]int
来源：http://www.sxryk.cn/163owqcafuq.html


<!-- 参考信息 -->