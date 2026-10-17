外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163ssozafaw.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.xuanzx.com/163scnooqek.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.aibaodan.cn/163cutcgtvg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163zrzqftrv.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ikavlalk.html

[C03] 可变参数
来源：http://www.aibaodan.cn/163bcuupfzj.html

Py:   def total(*args): return sum(args)
来源：http://www.aibaodan.cn/163ymlypior.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.aibaodan.cn/163ajbfkhpw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163edflmolp.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.sxryk.cn/163jtxiodqw.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.aibaodan.cn/163sgifnlmu.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163drecbgpk.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.sxryk.cn/163xxfjrwpd.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163oblgjqnx.html

[C04] 命名参数 / 关键字参数
来源：http://www.sxryk.cn/163oskzkbbg.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163vadfqtcc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.aibaodan.cn/163nssikvvc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163khejqosi.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.sxryk.cn/163sraxfjbd.html

Java: // 无：用 Builder 模式或 record
来源：http://www.aibaodan.cn/163llzwdupx.html

Go:   // 无：用配置结构体参数
来源：http://www.sxryk.cn/163bunawdyv.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vyfjefaa.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163zwhqzacd.html

[C05] 返回多个值
来源：http://www.xuanzx.com/163jgrpgdzl.html

Py:   return a, b
来源：http://www.sxryk.cn/163zqyxunuh.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tcgjdtgh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163blhxishl.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163jznpgufp.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163gagidivf.html

Go:   return a, b
来源：http://www.xuanzx.com/163etydwtjg.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163fopnflpc.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ltgfmrso.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163eqldyruu.html

Py:   square = lambda x: x * x
来源：http://www.xuanzx.com/163wsvdhsmp.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163arkkrfcz.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163jcfnaday.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163imnzxtxj.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.xuanzx.com/163uvqvdwep.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163kauvxmws.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163mqngieoq.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163cpoluonz.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163svjmyege.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163pexgfkeh.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163ltjzcklz.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.sxryk.cn/163hrviwdvs.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163knsvuobx.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163buvrrtak.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.sxryk.cn/163rjxlknyv.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163cvgdyqzm.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.sxryk.cn/163quzhyorq.html

[C08] 闭包
来源：http://www.xuanzx.com/163pvhzycjb.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.xuanzx.com/163lwrkbnko.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163sfxbkpeo.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163mvmfsjip.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163hfcydtqr.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163sqyfwxxm.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163ufytukoa.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163asvipzac.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163eqjnaqfn.html

[C09] 递归
来源：http://www.xuanzx.com/163lmhhfdmd.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.xuanzx.com/163qdeiudlp.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163fteydvud.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163duldqbpn.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wtbgobxa.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163znteaowc.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163pwiltgsj.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163dtrfkmsf.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163zdznmrcj.html

[C10] 变量作用域
来源：http://www.xuanzx.com/163dqdnuusj.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.aibaodan.cn/163bkbojafd.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163qzekfumf.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.sxryk.cn/163xbtgirrj.html

TS:   同 JS
来源：http://www.sxryk.cn/163nfcctlhi.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163nwtooogv.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163klqsqpye.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.aibaodan.cn/163aufwcqvw.html

C#:   块级作用域
来源：http://www.sxryk.cn/163upposxca.html

[C11] 模块导入与导出
来源：http://www.aibaodan.cn/163egeppxnb.html

Py:   from module import func
来源：http://www.sxryk.cn/163pjodslxp.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.sxryk.cn/163gctjjfoq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163yiwwlmaj.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163eajfwcbl.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163oifdpfvj.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163eflmwwld.html

Ruby: require "json"; require_relative "./util"
来源：http://www.xuanzx.com/163fkicdlsy.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163xkfxiqnv.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163kssduaxb.html

Py:   (lambda: print("run"))()
来源：http://www.xuanzx.com/163mqipfiem.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163ltpniogf.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nclobhmz.html

TS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163nwzlxkgd.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163zhdfqphu.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163wgdqrity.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163fjlixpir.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.sxryk.cn/163fugvezov.html

[C13] 类型声明 / 类型注解
来源：http://www.aibaodan.cn/163ivkdjsxq.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163usjpnhsh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163mzvdtxjx.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163mjdkvptj.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163onzlmbkh.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zyuczxud.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163aqeixobj.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.sxryk.cn/163nbsqevfx.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163opxuelaz.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ksjetbzj.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.sxryk.cn/163xmlwdcao.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163gmfyfrsv.html

JS:   // 无泛型
来源：http://www.xuanzx.com/163wxfdwqpx.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.sxryk.cn/163wvbicdnh.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163wtkdctxk.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.sxryk.cn/163gbzmbvab.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163sxoxbinm.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163bwyblzsa.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163qppidxil.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.sxryk.cn/163fssplynp.html

PHP:  [$a, $b] = $pair;
来源：http://www.aibaodan.cn/163lmsvytgb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.sxryk.cn/163eayyjiio.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163vxemkpks.html

Java: // 无解构
来源：http://www.xuanzx.com/163dhwfurjl.html

Go:   // 无解构
来源：http://www.xuanzx.com/163vnlkgniu.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163dbliptxp.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163quvgjryj.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163obfbafbr.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.xuanzx.com/163vztjclmc.html

PHP:  // 无重载
来源：http://www.sxryk.cn/163mzdgyzhp.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163omioyjrp.html

TS:   // 用联合类型或重载签名声明
来源：http://www.sxryk.cn/163azqaokvy.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163yfjcuoqy.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163jvzgjuxx.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163mtjdagrx.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163wytljclh.html

================================================================================
来源：http://www.aibaodan.cn/163uowwthjo.html

D. 数组 / 列表 / 集合
来源：http://www.xuanzx.com/163tilyirib.html

================================================================================
来源：http://www.aibaodan.cn/163ipqsqogk.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163mfcneidm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163vhxoagjz.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.xuanzx.com/163epbjbxnq.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163axgteeun.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.aibaodan.cn/163mzyqsqie.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163fteehpca.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163gajjooyn.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163oazzfmyf.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163ffbgydwc.html

[D02] 追加元素到末尾
来源：http://www.xuanzx.com/163edlczfwp.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.aibaodan.cn/163xbpuztig.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163rbxuxlve.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163zrtnkuuj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163yztcvhug.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163wbyzwpkl.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163tfhmbunn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.sxryk.cn/163xfmdiezv.html

C#:   list.Add(4);
来源：http://www.sxryk.cn/163whyjkrzh.html

[D03] 在指定位置插入元素
来源：http://www.sxryk.cn/163lpxkwazf.html

Py:   arr.insert(0, 0)
来源：http://www.xuanzx.com/163hsuobrkw.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163cqvhfucw.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163lptmwldd.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163ziicsazz.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163agikoezb.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163hvujlmuq.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163kvfxbzuh.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163verstznl.html

[D04] 删除元素
来源：http://www.xuanzx.com/163eqpqhyqa.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163pcdcmkhz.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163etjgvfof.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163cnsyppmw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wbjahlnl.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.sxryk.cn/163yxhrrguq.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163duapborm.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163ueemunkc.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163infyyche.html

[D05] 访问与修改元素
来源：http://www.xuanzx.com/163ddfzciax.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163rwlyarrj.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.sxryk.cn/163adsvnywo.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163drvkasza.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163jjysujow.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163jmaqdgyo.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163pwsssxwf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163pcfoqsce.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.sxryk.cn/163ziytpria.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163jxdkugdj.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163dluduamt.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163zafggbxw.html

JS:   arr.length
来源：http://www.aibaodan.cn/163kgxqhzwz.html

TS:   arr.length
来源：http://www.xuanzx.com/163nkfdffai.html

Java: list.size();
来源：http://www.sxryk.cn/163epuyyizd.html

Go:   len(arr)
来源：http://www.sxryk.cn/163txxtkbnp.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163psqzuttf.html

C#:   list.Count;
来源：http://www.sxryk.cn/163mztbzryr.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163xdalupxv.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163otrekmog.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163dsagxhif.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163jwygyslo.html

TS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163wzqvhlxq.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163hcktlrxv.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163brefehfg.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fnsvbmtk.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163vwcwipah.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163vuzmczus.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163rqypnnpb.html

PHP:  array_merge($a, $b);
来源：http://www.sxryk.cn/163ppflsxrr.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163zwoxwodo.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163isdkhiqe.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163qezdobix.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163orasyfgg.html

Ruby: a + b;  a.concat(b)
来源：http://www.sxryk.cn/163wviylhtx.html

C#:   a.Concat(b).ToList()
来源：http://www.sxryk.cn/163syuqwstq.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163jocpgjvb.html

Py:   sorted(arr);  arr.sort()
来源：http://www.aibaodan.cn/163sgtysvmb.html

PHP:  sort($arr);
来源：http://www.aibaodan.cn/163nkmxclca.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.aibaodan.cn/163idnnzxug.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163apwewngu.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.aibaodan.cn/163zqebnkeu.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.sxryk.cn/163grxkbjli.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163vwhummwb.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163ucrxklkh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.xuanzx.com/163isgaynya.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.aibaodan.cn/163nsawosyj.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163vrxepyrq.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163dsgmjixl.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163xcoktoqt.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163klpndshv.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163rmwgohqp.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163hgknulfg.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.aibaodan.cn/163jkdjpazo.html

[D11] 反转数组
来源：http://www.sxryk.cn/163xdxphxzj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163ttyoclrh.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163ooqygwiu.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.xuanzx.com/163vfamusqg.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163nulsghgx.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163gkhvdhrf.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163ogcgqpba.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163utupiagj.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163zxdkqefl.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163vmvfbhib.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163snjelrvr.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163fxcpuwqj.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163erzmzgfa.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163yjruccry.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.aibaodan.cn/163faiihekm.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163feodaxqe.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163hsgkdxmk.html

C#:   list.IndexOf(x);
来源：http://www.sxryk.cn/163togcmahx.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ncfglvpt.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.aibaodan.cn/163xlnhmtsw.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163hiiskfxf.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163eacklumr.html

TS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163jwuvvbtz.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163qlaucdki.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163ujmpwude.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163vzrgqvlj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.sxryk.cn/163iavrwxht.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163yxnxacso.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163nbngsmot.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163premzqxr.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163mvpqencf.html

TS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163vyjmvgco.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163abnqtlcn.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163djusgqci.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163qvbefwcm.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163xbvzidti.html

[D15] 去重
来源：http://www.sxryk.cn/163aynakfqm.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163rvlvnqkk.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163jfjvsruc.html

JS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163jfvvfufr.html

TS:   [...new Set(arr)]
来源：http://www.sxryk.cn/163qetcpqnz.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163samggnbo.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163fokpntiq.html

Ruby: arr.uniq
来源：http://www.sxryk.cn/163wqqcckxz.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163lvytagcu.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163gzdykcyg.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.xuanzx.com/163mgubtzyj.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.sxryk.cn/163tyndrnbk.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.aibaodan.cn/163yvynotun.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163qudzfktc.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163uouozmpp.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163gmonkcho.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163bshihojt.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163jqsjpryg.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163gqtjgfkb.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163gowjopso.html

PHP:  max($arr);  min($arr);
来源：http://www.sxryk.cn/163nmslsrdt.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163ukumccct.html

TS:   Math.max(...arr);
来源：http://www.aibaodan.cn/163kkvxztyz.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.aibaodan.cn/163emwqnevt.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163iwxouhft.html

Ruby: arr.max;  arr.min
来源：http://www.sxryk.cn/163qcrqhsbv.html

C#:   list.Max();  list.Min()
来源：http://www.xuanzx.com/163cvdbptuf.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163kplxlvco.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163yhfsikqk.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163fgrbqhcc.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163kbgoobyw.html

TS:   nested.flat();
来源：http://www.aibaodan.cn/163fmmijpxw.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.sxryk.cn/163ccgbxtut.html

Go:   // 手写双层循环
来源：http://www.aibaodan.cn/163ktajzibr.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163jmvvcmcw.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163zprefimi.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163smfwrhez.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.aibaodan.cn/163brehtyyz.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163bpnvwsxd.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.aibaodan.cn/163cgxiuydy.html


<!-- 参考信息 -->