外链999!wailian999！

TS:   function greet(name: string = "World") { return name; }
来源：http://www.sxryk.cn/163plzdjnrc.html

Java: // 无默认参数：方法重载或 Optional
来源：http://www.sxryk.cn/163fpjfbriv.html

Go:   // 无默认参数：传零值或另写一个包装函数
来源：http://www.sxryk.cn/163dmhheale.html

Ruby: def greet(name = "World") = name
来源：http://www.xuanzx.com/163xfdlbpig.html

C#:   string Greet(string name = "World") => name;
来源：http://www.aibaodan.cn/163uxcoujvb.html

[C03] 可变参数
来源：http://www.xuanzx.com/163sgkqtigu.html

Py:   def total(*args): return sum(args)
来源：http://www.xuanzx.com/163folrpycs.html

PHP:  function total(...$nums) { return array_sum($nums); }
来源：http://www.sxryk.cn/163mozdelop.html

JS:   function total(...nums) { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.xuanzx.com/163kwrucjgr.html

TS:   function total(...nums: number[]): number { return nums.reduce((a, b) => a + b, 0); }
来源：http://www.aibaodan.cn/163krgmbcra.html

Java: static int total(int... nums) { return Arrays.stream(nums).sum(); }
来源：http://www.sxryk.cn/163cjrahvxz.html

Go:   func total(nums ...int) int { s := 0; for _, n := range nums { s += n }; return s }
来源：http://www.sxryk.cn/163kmsoyqsb.html

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163wcqexhzk.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.xuanzx.com/163eygozymj.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163gpijmwwx.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163hsqwfhtm.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.xuanzx.com/163twoimjlv.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163jxukkplr.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.xuanzx.com/163zphosjgf.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163eaxfxeqz.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163czhfvcdy.html

Ruby: f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163ltwlxqdu.html

C#:   f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vgtuzlww.html

[C05] 返回多个值
来源：http://www.sxryk.cn/163opxoyeby.html

Py:   return a, b
来源：http://www.aibaodan.cn/163rdwawelh.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163seasldne.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163elmgbvuo.html

TS:   return { a, b };
来源：http://www.xuanzx.com/163spisyfcb.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.sxryk.cn/163uqfnpdrl.html

Go:   return a, b
来源：http://www.sxryk.cn/163atcntiuz.html

Ruby: return a, b
来源：http://www.aibaodan.cn/163bwaebark.html

C#:   return (a, b);              // ValueTuple
来源：http://www.sxryk.cn/163xnmwmpli.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163jfaesjlk.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163etsmirrz.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.sxryk.cn/163mluabire.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163whyqqazn.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163lzerfihf.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163efmqvrtl.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.xuanzx.com/163migisnam.html

Ruby: square = ->(x) { x * x }
来源：http://www.xuanzx.com/163cfzhstit.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.aibaodan.cn/163wekktbcv.html

[C07] 把函数作为参数传入
来源：http://www.xuanzx.com/163jbiyftna.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.sxryk.cn/163izolnnpj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163fqzyyipm.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.aibaodan.cn/163cfbuoopf.html

TS:   arr.map(String)
来源：http://www.aibaodan.cn/163povhpoaa.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163yirxgpbm.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.xuanzx.com/163jefyiypu.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163emorqkbw.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163hqocittz.html

[C08] 闭包
来源：http://www.xuanzx.com/163nhdtfuur.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163sxqfqzxq.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163dcuatdud.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dduufbhp.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.sxryk.cn/163gkvvrysy.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.xuanzx.com/163whxfrjqi.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.sxryk.cn/163xncmujlj.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.xuanzx.com/163lknntycu.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163kjhqxjmo.html

[C09] 递归
来源：http://www.aibaodan.cn/163ejyrtbib.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163mezhxdmr.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.aibaodan.cn/163xeffatpo.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163tmzwsuqs.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163ceapanwc.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.sxryk.cn/163famuawlg.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.sxryk.cn/163xoxoyiif.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.xuanzx.com/163uwekikzl.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.aibaodan.cn/163vqawhgxf.html

[C10] 变量作用域
来源：http://www.sxryk.cn/163tqcakpwq.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.xuanzx.com/163kpqcdthq.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163huchzome.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163eqgnixdd.html

TS:   同 JS
来源：http://www.xuanzx.com/163tvfislpm.html

Java: 方法内为块级作用域
来源：http://www.aibaodan.cn/163fbsfvhcf.html

Go:   花括号块级作用域
来源：http://www.xuanzx.com/163ljmmemyi.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163yxfwaqlo.html

C#:   块级作用域
来源：http://www.aibaodan.cn/163gscjntaq.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163hqroiael.html

Py:   from module import func
来源：http://www.xuanzx.com/163dezrqcxm.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163adrkgtbq.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.sxryk.cn/163xzjnxjdw.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.aibaodan.cn/163rctvhjgh.html

Java: import java.util.List;
来源：http://www.sxryk.cn/163ziaecxsn.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.xuanzx.com/163ajrqbuws.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163xmvpvejx.html

C#:   using System.Text;
来源：http://www.sxryk.cn/163sknpznwz.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163dqiiheyd.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163zhacokym.html

PHP:  (function () { echo "run"; })();
来源：http://www.xuanzx.com/163khafnfgl.html

JS:   (() => { console.log("run"); })();
来源：http://www.xuanzx.com/163rznweerg.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163mkdnkjjy.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.aibaodan.cn/163sjbqdzwa.html

Go:   func() { fmt.Println("run") }()
来源：http://www.aibaodan.cn/163gwuwqxyz.html

Ruby: -> { puts "run" }.call
来源：http://www.sxryk.cn/163fkqzbtjp.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163mwpomgni.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163pmxctqph.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163mitjbzug.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163dsgcmali.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163qsfkfiam.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163gqhysdtg.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.xuanzx.com/163zvggdqmp.html

Go:   func add(a, b int) int
来源：http://www.aibaodan.cn/163fwxvhfxq.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163prvwifla.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.xuanzx.com/163sjwogqvg.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163xgpfdtnf.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163fjsobsvo.html

PHP:  // 无泛型
来源：http://www.sxryk.cn/163ruiwbjrt.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163sdemdvny.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.aibaodan.cn/163jjbvtohk.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.aibaodan.cn/163lippqnqg.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163sdatqtkr.html

Ruby: # 无泛型
来源：http://www.xuanzx.com/163szaqwyhv.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163lhwyqnzs.html

[C15] 解构 / 展开参数
来源：http://www.xuanzx.com/163mibcovsc.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163czzzdkkd.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163lvhqeair.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163eyqlmiev.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.aibaodan.cn/163sdpdylat.html

Java: // 无解构
来源：http://www.xuanzx.com/163lbxnevks.html

Go:   // 无解构
来源：http://www.sxryk.cn/163ycjbebod.html

Ruby: a, b = pair
来源：http://www.aibaodan.cn/163ehnenpln.html

C#:   var (a, b) = pair;
来源：http://www.sxryk.cn/163txtfirmb.html

[C16] 函数 / 方法重载
来源：http://www.xuanzx.com/163hpdtupyi.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163mtyjfqvw.html

PHP:  // 无重载
来源：http://www.aibaodan.cn/163hxzgrojb.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163baxdyzlt.html

TS:   // 用联合类型或重载签名声明
来源：http://www.aibaodan.cn/163aqdzfyrx.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.xuanzx.com/163stpiizvi.html

Go:   // 无重载：用不同函数名
来源：http://www.sxryk.cn/163znqytoui.html

Ruby: # 无重载：靠动态参数
来源：http://www.xuanzx.com/163uovbromg.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.aibaodan.cn/163krvzriam.html

================================================================================
来源：http://www.xuanzx.com/163fougtobg.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163gxyozauo.html

================================================================================
来源：http://www.xuanzx.com/163dpkpmokf.html

[D01] 创建数组 / 列表
来源：http://www.aibaodan.cn/163dlwsihfm.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.aibaodan.cn/163uocgdpvy.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163essiynwc.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.aibaodan.cn/163mickcaws.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163dwukzguu.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.sxryk.cn/163qolinstx.html

Go:   arr := []int{1, 2, 3}
来源：http://www.aibaodan.cn/163uzlsspoc.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163jiiflroh.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.sxryk.cn/163cafrxcvo.html

[D02] 追加元素到末尾
来源：http://www.sxryk.cn/163nbhxmbol.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163lffpgudw.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163axaobbzm.html

JS:   arr.push(4);
来源：http://www.xuanzx.com/163ftnmaesq.html

TS:   arr.push(4);
来源：http://www.aibaodan.cn/163ridvfysf.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163whagqdrg.html

Go:   arr = append(arr, 4)
来源：http://www.xuanzx.com/163ukdbdwvn.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163dwgvwzan.html

C#:   list.Add(4);
来源：http://www.xuanzx.com/163xkgxsgon.html

[D03] 在指定位置插入元素
来源：http://www.aibaodan.cn/163spadvfan.html

Py:   arr.insert(0, 0)
来源：http://www.sxryk.cn/163ohdmklnt.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.xuanzx.com/163ttdalaez.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163imbbakxn.html

TS:   arr.splice(0, 0, 0);
来源：http://www.xuanzx.com/163jrltkgtg.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163iceklaxm.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.sxryk.cn/163nvhgincf.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.sxryk.cn/163afoeocuf.html

C#:   list.Insert(0, 0);
来源：http://www.aibaodan.cn/163ppyidnza.html

[D04] 删除元素
来源：http://www.xuanzx.com/163pwqqxjhj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.aibaodan.cn/163mdpdrwrs.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163mtouhzsl.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.sxryk.cn/163mxcugbfk.html

TS:   arr.splice(0, 1);
来源：http://www.sxryk.cn/163zbgmarew.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.xuanzx.com/163itinsrrl.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163anzltjca.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.sxryk.cn/163neincdhv.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.aibaodan.cn/163dmxifmzk.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163glvtwzaw.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163ckqenwka.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.xuanzx.com/163hofeubwc.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.sxryk.cn/163dhqdmuak.html

TS:   arr[0]; arr.at(-1);
来源：http://www.xuanzx.com/163bmuivkjs.html

Java: list.get(0); list.set(0, 9);
来源：http://www.aibaodan.cn/163khqcrwbl.html

Go:   arr[0]; arr[0] = 9
来源：http://www.xuanzx.com/163xbmbzrxf.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.xuanzx.com/163jlbyvouj.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163gvotnkbf.html

[D06] 数组长度
来源：http://www.sxryk.cn/163plhzgxua.html

Py:   len(arr)
来源：http://www.sxryk.cn/163vaarhprj.html

PHP:  count($arr);
来源：http://www.aibaodan.cn/163fuwkzupk.html

JS:   arr.length
来源：http://www.aibaodan.cn/163xufiqcxe.html

TS:   arr.length
来源：http://www.aibaodan.cn/163pmahjums.html

Java: list.size();
来源：http://www.xuanzx.com/163jofbfplq.html

Go:   len(arr)
来源：http://www.sxryk.cn/163pzxpcqis.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163cxwmhtzk.html

C#:   list.Count;
来源：http://www.xuanzx.com/163aelmdmag.html

[D07] 切片 / 取子数组
来源：http://www.xuanzx.com/163nhbqsuco.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.sxryk.cn/163pzgdxzss.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163qlaikskj.html

JS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163dkodwplt.html

TS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163soaagxib.html

Java: list.subList(1, 4);
来源：http://www.aibaodan.cn/163riuywxyp.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163iuodyhnw.html

Ruby: arr[1, 3]
来源：http://www.aibaodan.cn/163ggilaluf.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163cprndgsd.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163vfvscioy.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163bcjipgsn.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163jbfxoltw.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.aibaodan.cn/163wzcpjhiv.html

TS:   [...a, ...b];
来源：http://www.xuanzx.com/163lmcpltap.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.aibaodan.cn/163pkwjjxrr.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163vlpfautr.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163malokpwx.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163fuppltyc.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163ynukfomx.html

Py:   sorted(arr);  arr.sort()
来源：http://www.sxryk.cn/163myshozsx.html

PHP:  sort($arr);
来源：http://www.sxryk.cn/163kxpcsvyn.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163jroukhmh.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.xuanzx.com/163dyaahwye.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163bbissxbt.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163jbpdheoc.html

Ruby: arr.sort
来源：http://www.aibaodan.cn/163fyqsvzpm.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163qmtehkot.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.sxryk.cn/163nthlfiaw.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163iegdhuws.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163uhkwvrzi.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.sxryk.cn/163stokkiau.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163fpokwirh.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.sxryk.cn/163dxsinkjs.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.sxryk.cn/163twhsehzb.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.xuanzx.com/163vadybftj.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163qcadojuu.html

[D11] 反转数组
来源：http://www.aibaodan.cn/163pgqfclix.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163hijacqzp.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163kajlfxow.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163ktugnqof.html

TS:   [...arr].reverse();
来源：http://www.xuanzx.com/163mvpesojl.html

Java: Collections.reverse(list);
来源：http://www.sxryk.cn/163anfmthom.html

Go:   slices.Reverse(arr)
来源：http://www.sxryk.cn/163eljyrmdg.html

Ruby: arr.reverse
来源：http://www.xuanzx.com/163txipybxb.html

C#:   list.Reverse();
来源：http://www.aibaodan.cn/163dkbiqsyx.html

[D12] 查找元素下标
来源：http://www.aibaodan.cn/163mtyjiscq.html

Py:   arr.index(x);  x in arr
来源：http://www.aibaodan.cn/163mdzajtqm.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.xuanzx.com/163jfoibfvy.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163aqhebngf.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.sxryk.cn/163urtqezkk.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.sxryk.cn/163dibzapgy.html

Go:   slices.Index(arr, x)
来源：http://www.xuanzx.com/163iextpokz.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163mmnknxqe.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163lgnijpai.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163mgblrhti.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.sxryk.cn/163vrhzlibj.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.xuanzx.com/163ajkulfiu.html

JS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163tncndiop.html

TS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163nsleroxo.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163wqlgbezn.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.aibaodan.cn/163etauvppb.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.xuanzx.com/163arpozqiv.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.aibaodan.cn/163xbuvzpge.html

[D14] 映射转换（每个元素变形）
来源：http://www.sxryk.cn/163wlfzfhnh.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.xuanzx.com/163bxaszxqs.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163zjrwpcdn.html

JS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163ucahkkmc.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163pxqefjsd.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.sxryk.cn/163tmdkkfaj.html

Go:   // 手写循环
来源：http://www.xuanzx.com/163cplfmgey.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.sxryk.cn/163kxgwdlap.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.aibaodan.cn/163jkiccqya.html

[D15] 去重
来源：http://www.aibaodan.cn/163zirfctav.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163cpkwqxht.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163ugsxxtbe.html

JS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163peffjllv.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163rraldzfi.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.aibaodan.cn/163aebvadqx.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.xuanzx.com/163yypbvbib.html

Ruby: arr.uniq
来源：http://www.xuanzx.com/163ertludxf.html

C#:   list.Distinct().ToList()
来源：http://www.sxryk.cn/163hurrzido.html

[D16] 求和与平均值
来源：http://www.sxryk.cn/163msrlcyip.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.aibaodan.cn/163trhjlpiq.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.aibaodan.cn/163ydvkgqqt.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163hqodrnpz.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.sxryk.cn/163drmhomoi.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.xuanzx.com/163ermzuxvp.html

Go:   // 手写循环累加
来源：http://www.sxryk.cn/163afjdylkk.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.sxryk.cn/163ubpbrotb.html

C#:   list.Sum();  list.Average()
来源：http://www.aibaodan.cn/163qilhvgbz.html

[D17] 最大值与最小值
来源：http://www.sxryk.cn/163npnjqusq.html

Py:   max(arr);  min(arr)
来源：http://www.aibaodan.cn/163wpiyejkp.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163mglczodn.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.sxryk.cn/163felkdnpu.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163kwswponl.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163tlgdovdm.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.xuanzx.com/163llxpzdlo.html

Ruby: arr.max;  arr.min
来源：http://www.aibaodan.cn/163scthuixo.html

C#:   list.Max();  list.Min()
来源：http://www.sxryk.cn/163uvatozvt.html

[D18] 扁平化嵌套数组
来源：http://www.sxryk.cn/163wvurisju.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.sxryk.cn/163yowerlud.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163qfxhjnyu.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.sxryk.cn/163lurfabkr.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163gywzuuaj.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.aibaodan.cn/163ceyhkwpe.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163pisupwoh.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163tbujwwpp.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.xuanzx.com/163wwgzlfxp.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163wqbycjhi.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.sxryk.cn/163kjlzxvki.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.sxryk.cn/163eghlxafy.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.xuanzx.com/163jyzogpxv.html


<!-- 参考信息 -->