外链999!wailian999！

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163qrrdclyb.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163rhxnqfqw.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163fzbrjlph.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163mbbcguat.html

Go:   // 无：用配置结构体参数
来源：http://www.aibaodan.cn/163idakryvo.html

Ruby: f(a: 1, b: 2)
来源：http://www.xuanzx.com/163toommrur.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163ddfwimnd.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163xfwvpvql.html

Py:   return a, b
来源：http://www.xuanzx.com/163praqukfb.html

PHP:  return [$a, $b];
来源：http://www.xuanzx.com/163xcmagjxd.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163bppwvlxb.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163cvsmketp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.xuanzx.com/163rmzgpylw.html

Go:   return a, b
来源：http://www.sxryk.cn/163xscwmxso.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163sevontdi.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vkjjfsks.html

[C06] 匿名函数 / lambda
来源：http://www.sxryk.cn/163eafkgliw.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163hxjqekrs.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163bbpyuaei.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163wvkspnlp.html

TS:   const square = (x: number): number => x * x;
来源：http://www.aibaodan.cn/163ugjihvdi.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163hnnkkqvs.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163uqknznba.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163mdtwxwqh.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.sxryk.cn/163trhakeyx.html

[C07] 把函数作为参数传入
来源：http://www.aibaodan.cn/163arluzgcf.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163qpcmubkc.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.xuanzx.com/163pmdlpxum.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163zlpwriup.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163ptbqlwnf.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.sxryk.cn/163tofmnncd.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163lbvhbftj.html

Ruby: arr.map(&:upcase)
来源：http://www.xuanzx.com/163ikldmuwu.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163lolyyepw.html

[C08] 闭包
来源：http://www.sxryk.cn/163gnfppgye.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.aibaodan.cn/163lkqoufze.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.aibaodan.cn/163bzqphjsz.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163xcyctlbg.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163cgqcogth.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163twgcownm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163ejemsqqj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163cdpfxndt.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qpysvbwv.html

[C09] 递归
来源：http://www.sxryk.cn/163fjpizkyj.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163uuyxgsui.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.xuanzx.com/163dnvlfddv.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163ebbuljpz.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163fmsxmlet.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163nzigbcvo.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163moqcoerr.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163dbfzkqtu.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163apeiorch.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163scljexeb.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163dfyoqajg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163afzcspgz.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xmqogbdv.html

TS:   同 JS
来源：http://www.aibaodan.cn/163pwfeujfp.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163igobgaij.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163zfymnkxn.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163whbspwrh.html

C#:   块级作用域
来源：http://www.xuanzx.com/163jrtubgne.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163sxltbavp.html

Py:   from module import func
来源：http://www.xuanzx.com/163ijafktme.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163rkizdsiq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163zilvhqbf.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.xuanzx.com/163fvpgrqai.html

Java: import java.util.List;
来源：http://www.aibaodan.cn/163adhzwnmw.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163klspwqlx.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ecwssgop.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163ebttanoi.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163axepzrfu.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163mcgqndjw.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ilcbkzsi.html

JS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163oinpvlfa.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163qhnbnnic.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163trbggzhg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.sxryk.cn/163ufrfclsr.html

Ruby: -> { puts "run" }.call
来源：http://www.xuanzx.com/163bgpwvvmg.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.aibaodan.cn/163tpeanjfd.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163fioozaxo.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ldwpbfar.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163uncetooz.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.sxryk.cn/163hefbdnox.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163qipaauoy.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163lvpdupey.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ymiwpyio.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163mupyfnst.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163scerhnea.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163iegnyjxa.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163iqksyksg.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163zksurawa.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163vkgjccha.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163zwbpgquc.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163pmiowmgf.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163hffyxegk.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163jkiuqnmz.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163stztudjq.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163wtcdhhzv.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163tuivahcr.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163yflhospp.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qwvsjonz.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163lgllbnxb.html

Java: // 无解构
来源：http://www.aibaodan.cn/163nzpznraw.html

Go:   // 无解构
来源：http://www.aibaodan.cn/163urpejvxn.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163zkfxuoik.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163danxypei.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163qgpzxjja.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.sxryk.cn/163sbmadehe.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163orlpqdbo.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163pbrkhvtn.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163qmwhmrfp.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163ugmquupe.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163htizwcsz.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qczzssfy.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163heumcqhx.html

================================================================================
来源：http://www.sxryk.cn/163ciqmtcwv.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163clikbuov.html

================================================================================
来源：http://www.aibaodan.cn/163pvfmcmii.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163yhmtstji.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163kebmdrta.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163awncrdfd.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163wtbrzogj.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163rhjpmezr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163rcpgfkkq.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163hswrzqzn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163zsqsmkzh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.aibaodan.cn/163ogxcyjah.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163hvhzswtd.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163xfwwwiek.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163gujixoqr.html

JS:   arr.push(4);
来源：http://www.aibaodan.cn/163lcynvwin.html

TS:   arr.push(4);
来源：http://www.sxryk.cn/163ilzexwdo.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163dsslskle.html

Go:   arr = append(arr, 4)
来源：http://www.aibaodan.cn/163lzsglktq.html

Ruby: arr << 4; arr.push(5)
来源：http://www.xuanzx.com/163wasydlwk.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163tzjhvrjt.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163ffgdbpos.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163jsjtzqwq.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ykwwmmgl.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163zepiiini.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163tkoptvvn.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163sxnbrgcz.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163ajuwglyi.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.aibaodan.cn/163edaoadwr.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163tqidcyea.html

[D04] 删除元素
来源：http://www.xuanzx.com/163xidpzkig.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.xuanzx.com/163uzfvtwog.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.sxryk.cn/163tpjyugto.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163takvqhwc.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163znlbpjoj.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163poyhhpcr.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163ifslzame.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163fpwzecrl.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.xuanzx.com/163wvbxrvuw.html

[D05] 访问与修改元素
来源：http://www.aibaodan.cn/163ditnggkm.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163orevmrpf.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ganvxlff.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163rzxofclp.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163zwfrrqmw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.xuanzx.com/163joeslfvb.html

Go:   arr[0]; arr[0] = 9
来源：http://www.aibaodan.cn/163migfrdue.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rqevjoge.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163tjbhzeny.html

[D06] 数组长度
来源：http://www.sxryk.cn/163rfonkzud.html

Py:   len(arr)
来源：http://www.xuanzx.com/163qeuwbttp.html

PHP:  count($arr);
来源：http://www.xuanzx.com/163baunzyar.html

JS:   arr.length
来源：http://www.sxryk.cn/163ctoqeujs.html

TS:   arr.length
来源：http://www.aibaodan.cn/163njgabqjd.html

Java: list.size();
来源：http://www.sxryk.cn/163ifxnatdr.html

Go:   len(arr)
来源：http://www.xuanzx.com/163wwkocost.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163vqdgofqx.html

C#:   list.Count;
来源：http://www.sxryk.cn/163rfvkwydp.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163gdobujss.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ezeluwpa.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163qqehogbd.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163gfxwmrid.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163zzkhoiaq.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163czbhjuyo.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163hylvxdbj.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163uioqmjkj.html

C#:   list.GetRange(1, 3);
来源：http://www.xuanzx.com/163wsrtwxep.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163fnanpylk.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163fpsodhan.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163pngikpzi.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.sxryk.cn/163uafmhppy.html

TS:   [...a, ...b];
来源：http://www.sxryk.cn/163kryyhagg.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163umnumyai.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163qxrfxmmv.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163cxczcocz.html

C#:   a.Concat(b).ToList()
来源：http://www.aibaodan.cn/163qictqvjq.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163atcdubej.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163epjcmnon.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163xhinkzju.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163pgxndtfw.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.sxryk.cn/163luzlfova.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163kdgmlcfs.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163aslyongo.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163ckjhrpgw.html

C#:   list.Sort();
来源：http://www.aibaodan.cn/163xbrxrjcy.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163wjypszob.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.sxryk.cn/163couuuppc.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wibpfbrq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xdxrhkwy.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163wrobyjtu.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.xuanzx.com/163yychwzxg.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163mxkefjdz.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163ueswvnic.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163smpqvfwu.html

[D11] 反转数组
来源：http://www.xuanzx.com/163zpktzuom.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163lfptyepg.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163berrnfnq.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163tylnfvfz.html

TS:   [...arr].reverse();
来源：http://www.aibaodan.cn/163mdoyrbak.html

Java: Collections.reverse(list);
来源：http://www.aibaodan.cn/163hxnolqpo.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163qvnzbbas.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163wfatnhwz.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bxufyjhv.html

[D12] 查找元素下标
来源：http://www.xuanzx.com/163srhuooaa.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163mohgcufp.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163osfbfmxw.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163frvjxvup.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163uodlmcpg.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163rhjpvfrj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163gmoaulkp.html

Ruby: arr.index(x)
来源：http://www.xuanzx.com/163dtjxazde.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163ipgiqsdt.html

[D13] 过滤（保留满足条件的）
来源：http://www.sxryk.cn/163esoxwfni.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163begltchb.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163srscnbnz.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163guryrcib.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163midwzfua.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163zyixhucy.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.sxryk.cn/163spmgkhyj.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163urtzjlku.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163riboaxwz.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163zeumzffp.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163dwvwokbn.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.sxryk.cn/163ifkuzlux.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163vrryczhe.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163rpwmvned.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163dzunfwgo.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163xzubuosc.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163qljkiwqh.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.xuanzx.com/163skadrark.html

[D15] 去重
来源：http://www.xuanzx.com/163fecupblp.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163grpolqqy.html

PHP:  array_unique($arr);
来源：http://www.aibaodan.cn/163oswgdmhk.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163copoxgjz.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163bxvpeolc.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163fmrmnnyt.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163sgapaaps.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163cqjojhal.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163uhvrhsyz.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163wpxmjtdn.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163bfnpiciu.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163euzxignj.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163xktqfgwv.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163rnpaymbu.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.sxryk.cn/163kozawozm.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163rqohajdz.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163qvxekbde.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163rweocnpt.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163ihacbuyd.html

Py:   max(arr);  min(arr)
来源：http://www.xuanzx.com/163ohysblqk.html

PHP:  max($arr);  min($arr);
来源：http://www.xuanzx.com/163gofqmixa.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163tikgtjdf.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163vdhchdhv.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163quqeuppq.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163klghgywv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163qqhwwbwa.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163kiyrmowt.html

[D18] 扁平化嵌套数组
来源：http://www.aibaodan.cn/163oxwiosdl.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.xuanzx.com/163aoaikmfz.html

PHP:  array_merge(...$nested);
来源：http://www.xuanzx.com/163sobmciqm.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163dngvjzvo.html

TS:   nested.flat();
来源：http://www.xuanzx.com/163bfqyubfi.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163mruxxlur.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163mqblwydj.html

Ruby: nested.flatten
来源：http://www.xuanzx.com/163ddrugzzg.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163glynybov.html

[D19] 按字段分组
来源：http://www.xuanzx.com/163dfbnpdld.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163shpaxtsg.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163pfhsnqxz.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163ciflinzj.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.aibaodan.cn/163qmurnxfi.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.xuanzx.com/163rqwjvlju.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163gwsixtyj.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163drmgkjlp.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.sxryk.cn/163lnsqysya.html

[D20] 统计每个元素出现次数
来源：http://www.xuanzx.com/163qpnqnlaf.html

Py:   Counter(arr)
来源：http://www.xuanzx.com/163ebedapps.html

PHP:  array_count_values($arr);
来源：http://www.xuanzx.com/163cmpgyamq.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163cnhimjjm.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.sxryk.cn/163uqhtrhqb.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163rfyspweq.html

Go:   // 手写 map[T]int
来源：http://www.xuanzx.com/163ysptsbwb.html

Ruby: arr.tally
来源：http://www.aibaodan.cn/163gnjcrlqu.html

C#:   list.GroupBy(x => x).ToDictionary(g => g.Key, g => g.Count())
来源：http://www.aibaodan.cn/163zbyunekl.html

[D21] 判断是否包含某元素
来源：http://www.sxryk.cn/163nqplqejr.html

Py:   x in arr
来源：http://www.sxryk.cn/163vpfeyxtt.html


<!-- 参考信息 -->