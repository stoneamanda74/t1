外链999!wailian999！

Java: if (data == null) return;
来源：http://www.sxryk.cn/163fuqbgmkw.html

Go:   if data == nil { return }
来源：http://www.sxryk.cn/163ydijnrye.html

Ruby: return if data.nil?
来源：http://www.aibaodan.cn/163jvwheiob.html

C#:   if (data == null) return;
来源：http://www.sxryk.cn/163bumoqhmu.html

================================================================================
来源：http://www.aibaodan.cn/163fhaaatcm.html

C. 函数与作用域
来源：http://www.aibaodan.cn/163jypcsvjz.html

================================================================================
来源：http://www.sxryk.cn/163hkpdosok.html

[C01] 定义函数
来源：http://www.xuanzx.com/163onhwnlou.html

Py:   def add(a, b): return a + b
来源：http://www.sxryk.cn/163bbgkfbtk.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163hpkajvpw.html

JS:   function add(a, b) { return a + b; }
来源：http://www.aibaodan.cn/163xhnrtzhf.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.xuanzx.com/163iczqufuk.html

Java: static int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163tnwbhlqj.html

Go:   func add(a, b int) int { return a + b }
来源：http://www.aibaodan.cn/163crxxdsiq.html

Ruby: def add(a, b); a + b; end
来源：http://www.xuanzx.com/163euwlgumq.html

C#:   static int Add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163vtkhiing.html

[C02] 默认参数
来源：http://www.aibaodan.cn/163pnefdvfp.html

Py:   def greet(name="World"): return name
来源：http://www.xuanzx.com/163rabfrlyh.html

PHP:  function greet($name = "World") { return $name; }
来源：http://www.sxryk.cn/163rgzbgumq.html

JS:   function greet(name = "World") { return name; }
来源：http://www.sxryk.cn/163nbhuoyxw.html

TS:   function greet(name: string = "World") { return name; }
来源：http://www.aibaodan.cn/163dpokiiyv.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163xisohipn.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.xuanzx.com/163mthiekcg.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163hgmahgxz.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163ezqyzmqd.html

[C03] 可变参数
来源：http://www.sxryk.cn/163hruenyhd.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163qgvuqgfu.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.xuanzx.com/163broizkvw.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163bidudvpr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163vjtownib.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163fyvuvjqi.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163xususisd.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.aibaodan.cn/163lxfcnttm.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163yaeovsdf.html

[C04] 命名参数 / 关键字参数
来源：http://www.aibaodan.cn/163nirgskix.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.xuanzx.com/163fesodyxc.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163gwqnuraq.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.xuanzx.com/163hkmuaiey.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163iepocrqm.html

Java: // 无：用 Builder 模式或 record
来源：http://www.sxryk.cn/163nhdjtuud.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163gtqtiouf.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163csfhxjfd.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163bkmmjpau.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163oozvxemh.html

Py:   return a, b
来源：http://www.sxryk.cn/163gbytwncu.html

PHP:  return [$a, $b];
来源：http://www.sxryk.cn/163tvxqihrh.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.xuanzx.com/163glfyibjl.html

TS:   return { a, b };
来源：http://www.sxryk.cn/163oxjatpyh.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163blmqklij.html

Go:   return a, b
来源：http://www.aibaodan.cn/163cmwfmfux.html

Ruby: return a, b
来源：http://www.xuanzx.com/163vlzebtui.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163vbwolkox.html

[C06] 匿名函数 / lambda
来源：http://www.xuanzx.com/163essvkyzk.html

Py:   square = lambda x: x * x
来源：http://www.sxryk.cn/163ohjqfcim.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163jipwplzd.html

JS:   const square = x => x * x;
来源：http://www.xuanzx.com/163nzzqanre.html

TS:   const square = (x: number): number => x * x;
来源：http://www.xuanzx.com/163kggkazca.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.aibaodan.cn/163mobnrbnt.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163ezttwuim.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163lvkkpsxm.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163pehvjjny.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163leiltijv.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.xuanzx.com/163wyvcapoo.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163koyovkph.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163zuqohyiu.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163hwyaorvn.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163tfwtuyuk.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163kqnqzsga.html

Ruby: arr.map(&:upcase)
来源：http://www.aibaodan.cn/163slghmcfg.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163mdygmjqk.html

[C08] 闭包
来源：http://www.aibaodan.cn/163oeaglpfr.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163ymqzhcay.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.sxryk.cn/163uidhpxzh.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163ponswzwr.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163ielyyvts.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163mzbxghwa.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163gsrkeqyh.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.sxryk.cn/163ibauwprk.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163awlflmrv.html

[C09] 递归
来源：http://www.sxryk.cn/163vdoorwhe.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163gpxibsuy.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163rydzvhhq.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.sxryk.cn/163wiyuuyxq.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163olkxrufd.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.aibaodan.cn/163ecytjgdn.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.aibaodan.cn/163cxzyygiw.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.sxryk.cn/163wewlubmo.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163dkltetkm.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163iohcagaq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163gikxpzvk.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.aibaodan.cn/163zkdguuhk.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163sttcyzsh.html

TS:   同 JS
来源：http://www.xuanzx.com/163unqmufci.html

Java: 方法内为块级作用域
来源：http://www.xuanzx.com/163hogclpiw.html

Go:   花括号块级作用域
来源：http://www.sxryk.cn/163yrzilwgr.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163wmxxjfdk.html

C#:   块级作用域
来源：http://www.xuanzx.com/163dugotqnf.html

[C11] 模块导入与导出
来源：http://www.sxryk.cn/163sppebycd.html

Py:   from module import func
来源：http://www.xuanzx.com/163pfxdejsi.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163cwzistul.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.xuanzx.com/163zmrcrlfu.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163hgecdtvu.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163wfxjjtft.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163spnvxpep.html

Ruby: require "json"; require_relative "./util"
来源：http://www.sxryk.cn/163ibrjfleh.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163qyxnjezd.html

[C12] 立即执行函数 IIFE
来源：http://www.aibaodan.cn/163cgcdmhep.html

Py:   (lambda: print("run"))()
来源：http://www.sxryk.cn/163rsxfpqce.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163gtftufmr.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163biufbuze.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163lnfxwohl.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.xuanzx.com/163ugicwfsg.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163ffdvnfda.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163xjcbrxrh.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163fwqbsytt.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163snwbomvv.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.aibaodan.cn/163rnsleght.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fvgyxpxh.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163uswgtbij.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163zrqspmff.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.aibaodan.cn/163ifwtfcxy.html

Go:   func add(a, b int) int
来源：http://www.sxryk.cn/163ralqvopz.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163dqagktcb.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163prsoeite.html

[C14] 泛型函数
来源：http://www.xuanzx.com/163kttscwzq.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.aibaodan.cn/163fbraulgw.html

PHP:  // 无泛型
来源：http://www.xuanzx.com/163ahmxxcko.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163aakxmieq.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jkdqmzpp.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.sxryk.cn/163tyvywuai.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163ejsyuhzi.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163etlnbuwa.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.aibaodan.cn/163lomsrvno.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163awotxndh.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.aibaodan.cn/163davlqtnu.html

PHP:  [$a, $b] = $pair;
来源：http://www.sxryk.cn/163gvsafqkq.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163nvwaeajc.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163aeashtas.html

Java: // 无解构
来源：http://www.xuanzx.com/163eaiqydpb.html

Go:   // 无解构
来源：http://www.xuanzx.com/163mqfyewem.html

Ruby: a, b = pair
来源：http://www.xuanzx.com/163lyrdlkos.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163qeuuyheg.html

[C16] 函数 / 方法重载
来源：http://www.sxryk.cn/163ggytyqxo.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163lctdrcrw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163edllckkl.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163tifzetua.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163fufgxlwa.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163ddtiblgb.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163cscdomgg.html

Ruby: # 无重载：靠动态参数
来源：http://www.sxryk.cn/163svzaooor.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163zfhjigkb.html

================================================================================
来源：http://www.aibaodan.cn/163ewcscynf.html

D. 数组 / 列表 / 集合
来源：http://www.sxryk.cn/163myirrrfl.html

================================================================================
来源：http://www.xuanzx.com/163hpqmzxqy.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163vxtmfvjx.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163qerrtsyw.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.aibaodan.cn/163nladxlag.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.xuanzx.com/163oqatthrl.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163umxknflr.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163skrgptbe.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163pllzubcc.html

Ruby: arr = [1, 2, 3]
来源：http://www.xuanzx.com/163kmkllkao.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163rvkfsffd.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163edfxobiu.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.xuanzx.com/163rytzsuqh.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.aibaodan.cn/163jijuyblw.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163shyrdrhj.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163wveeyvho.html

Java: list.add(4);
来源：http://www.xuanzx.com/163tdrthwep.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163nxuabkyd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163igwpmpjs.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163tegxmjjb.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163lhdnehjl.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163pvurpskz.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163owvotuio.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.sxryk.cn/163tsmeqjld.html

TS:   arr.splice(0, 0, 0);
来源：http://www.aibaodan.cn/163sdzydjnl.html

Java: list.add(0, 0);
来源：http://www.sxryk.cn/163twixlyzh.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.xuanzx.com/163qgtijncj.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163ncahvdgx.html

C#:   list.Insert(0, 0);
来源：http://www.xuanzx.com/163gpbrlwew.html

[D04] 删除元素
来源：http://www.xuanzx.com/163nexvtbqd.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163wuhfaezg.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.xuanzx.com/163yrtmmwus.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.xuanzx.com/163ptnvbnlk.html

TS:   arr.splice(0, 1);
来源：http://www.aibaodan.cn/163decxvmjg.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163nzvxpddj.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.aibaodan.cn/163gejngmmu.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.aibaodan.cn/163hulymhrk.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163ozjiotry.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163kwennbho.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.aibaodan.cn/163psojsitq.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163ctjqlqlj.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163lmnpyxtx.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163iqmxrppp.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163kdmuwxnk.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163beqabhpg.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163mjccxsft.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.xuanzx.com/163gpqdvgtz.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163zhrcygjv.html

Py:   len(arr)
来源：http://www.aibaodan.cn/163bipftrox.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163enknswsa.html

JS:   arr.length
来源：http://www.aibaodan.cn/163jepvegdc.html

TS:   arr.length
来源：http://www.sxryk.cn/163imcbgbrt.html

Java: list.size();
来源：http://www.xuanzx.com/163sbgipdil.html

Go:   len(arr)
来源：http://www.aibaodan.cn/163gzqsodoc.html

Ruby: arr.length; arr.size
来源：http://www.sxryk.cn/163jicllkso.html

C#:   list.Count;
来源：http://www.sxryk.cn/163uryxzyxx.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163nqrsqknh.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.aibaodan.cn/163ihfffelf.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.sxryk.cn/163agakzxov.html

JS:   arr.slice(1, 4);
来源：http://www.sxryk.cn/163frerwblu.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163eldkvyap.html

Java: list.subList(1, 4);
来源：http://www.xuanzx.com/163fblxidqn.html

Go:   arr[1:4]
来源：http://www.sxryk.cn/163wbpeyyfx.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163kxpfyqjv.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163plfuzhru.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163dhxfdmyj.html

Py:   a + b;  a.extend(b)
来源：http://www.sxryk.cn/163bhiyxqhy.html

PHP:  array_merge($a, $b);
来源：http://www.xuanzx.com/163huigljpo.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163pdgqmgko.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163btbolzlw.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.sxryk.cn/163hdethadh.html

Go:   append(a, b...)
来源：http://www.xuanzx.com/163puijvyrh.html

Ruby: a + b;  a.concat(b)
来源：http://www.aibaodan.cn/163prgpyttq.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163djmaogjg.html

[D09] 排序（升序）
来源：http://www.aibaodan.cn/163yxlpsbos.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163vxbwrylc.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163meyernoc.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163rydebgjo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163fajqzren.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.sxryk.cn/163gaprvnsf.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163ongutqzv.html

Ruby: arr.sort
来源：http://www.sxryk.cn/163uhitqevt.html

C#:   list.Sort();
来源：http://www.xuanzx.com/163hoeqvbqp.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163aweozkhg.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163kweokwlx.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163ouylrzle.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163gycvxszc.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163azpkairr.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163fjwmqwif.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163esomljop.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163mggekltp.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.xuanzx.com/163zlxksavq.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163yjqgnbtj.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.aibaodan.cn/163axzcgsib.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163gofyhwvy.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163jpaonoxf.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163kkbavidi.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163vqpbhaun.html

Go:   slices.Reverse(arr)
来源：http://www.aibaodan.cn/163hezjrqrr.html

Ruby: arr.reverse
来源：http://www.aibaodan.cn/163tbzhplkh.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163umnshjfr.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163oalauzqk.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163jbqynvrx.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.sxryk.cn/163ixtgbobi.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163owfhocfd.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163pnuzmgej.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163fhxqtsnj.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163qcmpnadp.html

Ruby: arr.index(x)
来源：http://www.aibaodan.cn/163sdicsder.html

C#:   list.IndexOf(x);
来源：http://www.aibaodan.cn/163btaootyn.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163axfmkvbe.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163xrefbpem.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.sxryk.cn/163bvarmdjo.html

JS:   arr.filter(x => x > 3)
来源：http://www.sxryk.cn/163qvjiztxq.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163jsuumvty.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163xalhydjj.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163ewwsiroo.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.sxryk.cn/163myagzkoj.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163pcjhmvdw.html

[D14] 映射转换（每个元素变形）
来源：http://www.aibaodan.cn/163yjspghxy.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.aibaodan.cn/163ayohgdyb.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.aibaodan.cn/163lqmfuywh.html

JS:   arr.map(x => x * 2)
来源：http://www.aibaodan.cn/163lsyeoxkd.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163hiwzdcue.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.aibaodan.cn/163vloobdfa.html

Go:   // 手写循环
来源：http://www.aibaodan.cn/163blbdzdrx.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.xuanzx.com/163fxaigpir.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163dkyecmza.html

[D15] 去重
来源：http://www.sxryk.cn/163rxphiicw.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163lbcoxecq.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ktnpvzjg.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163cwephjmg.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163onuscisw.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.xuanzx.com/163pqirjpdf.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.sxryk.cn/163kwpzncye.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163dxahgxhn.html

C#:   list.Distinct().ToList()
来源：http://www.xuanzx.com/163aoxyqkjk.html

[D16] 求和与平均值
来源：http://www.aibaodan.cn/163ilsrvgpl.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163nzmmukwh.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163swhelpjw.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163zrajdmca.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163rjsxrxrq.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163jwykatob.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163vnynrtri.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.xuanzx.com/163apdiphnt.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163beiuzyje.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163pqprneux.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163kgswegyh.html


<!-- 参考信息 -->