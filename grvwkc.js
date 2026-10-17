外链999!wailian999！

Ruby: def total(*nums); nums.sum; end
来源：http://www.xuanzx.com/163shomlrif.html

C#:   static int Total(params int[] nums) => nums.Sum();
来源：http://www.aibaodan.cn/163oztplkwc.html

[C04] 命名参数 / 关键字参数
来源：http://www.xuanzx.com/163ysomnqis.html

Py:   def f(a, b, *, c=0): ...    # 调用 f(1, 2, c=3)
来源：http://www.sxryk.cn/163bmnejyrx.html

PHP:  f(a: 1, b: 2)             // PHP 8 命名参数
来源：http://www.sxryk.cn/163doxvmikc.html

JS:   // 无命名参数：传配置对象 function f({ a, b }) {}
来源：http://www.sxryk.cn/163vnatmkyv.html

TS:   f({ a: 1, b: 2 })          // 同上
来源：http://www.aibaodan.cn/163dfehxphk.html

Java: // 无：用 Builder 模式或 record
来源：http://www.xuanzx.com/163koxmdmzc.html

Go:   // 无：用配置结构体参数
来源：http://www.xuanzx.com/163agryedte.html

Ruby: f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ztbvimdp.html

C#:   f(a: 1, b: 2)
来源：http://www.xuanzx.com/163mhywieez.html

[C05] 返回多个值
来源：http://www.aibaodan.cn/163igvkwhsl.html

Py:   return a, b
来源：http://www.aibaodan.cn/163skgtwqbs.html

PHP:  return [$a, $b];
来源：http://www.aibaodan.cn/163opzybkvg.html

JS:   return [a, b];             // 或 return { a, b };
来源：http://www.aibaodan.cn/163xtbvwhid.html

TS:   return { a, b };
来源：http://www.aibaodan.cn/163ijbqlvag.html

Java: record Pair(int a, int b) {}  // 或 return new int[]{a, b};
来源：http://www.aibaodan.cn/163goutzlis.html

Go:   return a, b
来源：http://www.sxryk.cn/163wmnzdkio.html

Ruby: return a, b
来源：http://www.sxryk.cn/163feqmanpx.html

C#:   return (a, b);              // ValueTuple
来源：http://www.xuanzx.com/163ezyozken.html

[C06] 匿名函数 / lambda
来源：http://www.aibaodan.cn/163ajgwznxs.html

Py:   square = lambda x: x * x
来源：http://www.aibaodan.cn/163mjmbawas.html

PHP:  $square = fn($x) => $x * $x;
来源：http://www.xuanzx.com/163notvfnpy.html

JS:   const square = x => x * x;
来源：http://www.aibaodan.cn/163dsskhrlr.html

TS:   const square = (x: number): number => x * x;
来源：http://www.sxryk.cn/163jjyzvijy.html

Java: Function<Integer, Integer> sq = x -> x * x;
来源：http://www.sxryk.cn/163pwuvcogp.html

Go:   sq := func(x int) int { return x * x }
来源：http://www.sxryk.cn/163ohqjowjs.html

Ruby: square = ->(x) { x * x }
来源：http://www.aibaodan.cn/163tepjpscp.html

C#:   Func<int, int> square = x => x * x;
来源：http://www.xuanzx.com/163msctunng.html

[C07] 把函数作为参数传入
来源：http://www.sxryk.cn/163inhvjdls.html

Py:   list(map(str.upper, arr)); sorted(arr, key=len)
来源：http://www.aibaodan.cn/163epssoibj.html

PHP:  array_map("strtoupper", $arr);
来源：http://www.sxryk.cn/163wxfldnbs.html

JS:   arr.map(String).sort((a, b) => a.length - b.length)
来源：http://www.xuanzx.com/163mbfucjsa.html

TS:   arr.map(String)
来源：http://www.sxryk.cn/163kmetqupr.html

Java: arr.stream().map(String::toUpperCase).toList()
来源：http://www.aibaodan.cn/163euztwwnt.html

Go:   // 无 map 内置：手写循环或用 golang.org/x/exp/slices
来源：http://www.aibaodan.cn/163mdozxzip.html

Ruby: arr.map(&:upcase)
来源：http://www.sxryk.cn/163kxcxqpzx.html

C#:   arr.Select(s => s.ToUpper())
来源：http://www.xuanzx.com/163qfhporjo.html

[C08] 闭包
来源：http://www.sxryk.cn/163snhwbryh.html

Py:   from itertools import count; inc = lambda c=count(1): next(c)   # 计数器
来源：http://www.sxryk.cn/163yrppdodc.html

PHP:  function counter() { $n = 0; return function () use (&$n) { return ++$n; }; }
来源：http://www.xuanzx.com/163vkbtxspj.html

JS:   function counter() { let n = 0; return () => ++n; }
来源：http://www.aibaodan.cn/163lkmntbna.html

TS:   function counter(): () => number { let n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163qroexirg.html

Java: // 只能捕获 effectively final：用 int[] 或 AtomicInteger
来源：http://www.sxryk.cn/163luiigkkj.html

Go:   func counter() func() int { n := 0; return func() int { n++; return n } }
来源：http://www.xuanzx.com/163bktoycoc.html

Ruby: def counter; n = 0; -> { n += 1 }; end
来源：http://www.aibaodan.cn/163fszyuinx.html

C#:   static Func<int> Counter() { int n = 0; return () => ++n; }
来源：http://www.xuanzx.com/163dzvdhkhy.html

[C09] 递归
来源：http://www.aibaodan.cn/163afmtryou.html

Py:   def fact(n): return 1 if n <= 1 else n * fact(n - 1)
来源：http://www.sxryk.cn/163hnefyxya.html

PHP:  function fact(int $n): int { return $n <= 1 ? 1 : $n * fact($n - 1); }
来源：http://www.sxryk.cn/163gqbgdlug.html

JS:   const fact = n => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.aibaodan.cn/163vleyvzob.html

TS:   const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
来源：http://www.xuanzx.com/163njcyfyor.html

Java: static int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
来源：http://www.xuanzx.com/163cjxlxsym.html

Go:   func fact(n int) int { if n <= 1 { return 1 }; return n * fact(n-1) }
来源：http://www.xuanzx.com/163vyitpatp.html

Ruby: def fact(n) = n <= 1 ? 1 : n * fact(n - 1)
来源：http://www.aibaodan.cn/163wgpfkvmg.html

C#:   static int Fact(int n) => n <= 1 ? 1 : n * Fact(n - 1);
来源：http://www.sxryk.cn/163pmafthok.html

[C10] 变量作用域
来源：http://www.aibaodan.cn/163qqlwakky.html

Py:   函数内赋值即局部；改外层需 global / nonlocal
来源：http://www.sxryk.cn/163xgxgfrdg.html

PHP:  函数内默认看不到外部变量，需 global 或 use
来源：http://www.xuanzx.com/163sergzqcx.html

JS:   let/const 块级作用域，var 函数级作用域
来源：http://www.aibaodan.cn/163hxnvgkbz.html

TS:   同 JS
来源：http://www.sxryk.cn/163ttfhlnxq.html

Java: 方法内为块级作用域
来源：http://www.sxryk.cn/163pkiojmov.html

Go:   花括号块级作用域
来源：http://www.aibaodan.cn/163sxkhqvnc.html

Ruby: 局部变量 / @实例 / @@类 / $全局
来源：http://www.sxryk.cn/163nduofkmq.html

C#:   块级作用域
来源：http://www.xuanzx.com/163skuegrur.html

[C11] 模块导入与导出
来源：http://www.xuanzx.com/163orgmulvs.html

Py:   from module import func
来源：http://www.aibaodan.cn/163jtruzcoo.html

PHP:  require "file.php";  或 use App\Service;
来源：http://www.aibaodan.cn/163cjzmqjcf.html

JS:   export default function f() {};  import f from "./m.js";
来源：http://www.aibaodan.cn/163dldneoue.html

TS:   export function f(): void {};  import { f } from "./m";
来源：http://www.sxryk.cn/163ocogxkwp.html

Java: import java.util.List;
来源：http://www.xuanzx.com/163cuaotdod.html

Go:   import "fmt"          // 之后用 fmt.Println
来源：http://www.sxryk.cn/163dgqvcmbk.html

Ruby: require "json"; require_relative "./util"
来源：http://www.aibaodan.cn/163hieorzbi.html

C#:   using System.Text;
来源：http://www.xuanzx.com/163wcvcnkzx.html

[C12] 立即执行函数 IIFE
来源：http://www.xuanzx.com/163npuuaodn.html

Py:   (lambda: print("run"))()
来源：http://www.aibaodan.cn/163ongwbgwe.html

PHP:  (function () { echo "run"; })();
来源：http://www.sxryk.cn/163ooqpoggb.html

JS:   (() => { console.log("run"); })();
来源：http://www.sxryk.cn/163uvykyzpe.html

TS:   (() => { console.log("run"); })();
来源：http://www.aibaodan.cn/163jcljwocr.html

Java: // 无 IIFE：用 static { } 静态初始化块
来源：http://www.sxryk.cn/163fsycwfnm.html

Go:   func() { fmt.Println("run") }()
来源：http://www.xuanzx.com/163moilwgoh.html

Ruby: -> { puts "run" }.call
来源：http://www.aibaodan.cn/163mmhoeoul.html

C#:   // 无 IIFE：用静态构造函数
来源：http://www.xuanzx.com/163iznnvcue.html

[C13] 类型声明 / 类型注解
来源：http://www.sxryk.cn/163kzpdstmd.html

Py:   def add(a: int, b: int) -> int: return a + b
来源：http://www.sxryk.cn/163ikpbunvh.html

PHP:  function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163loectkhi.html

JS:   // 无类型（可用 JSDoc 注释）
来源：http://www.aibaodan.cn/163ienrjwqx.html

TS:   function add(a: number, b: number): number { return a + b; }
来源：http://www.sxryk.cn/163vvhdlony.html

Java: int add(int a, int b) { return a + b; }
来源：http://www.sxryk.cn/163mxicubzq.html

Go:   func add(a, b int) int
来源：http://www.xuanzx.com/163ijeohccr.html

Ruby: # 无类型（可选用 Sorbet / RBS）
来源：http://www.aibaodan.cn/163pidxekwj.html

C#:   int Add(int a, int b) => a + b;
来源：http://www.sxryk.cn/163xpyrhfni.html

[C14] 泛型函数
来源：http://www.aibaodan.cn/163ryshnsxr.html

Py:   from typing import TypeVar; T = TypeVar("T"); def first(items: list[T]) -> T: ...
来源：http://www.xuanzx.com/163oghfkscy.html

PHP:  // 无泛型
来源：http://www.aibaodan.cn/163lurqyjit.html

JS:   // 无泛型
来源：http://www.sxryk.cn/163cjkckrcm.html

TS:   function first<T>(items: T[]): T | undefined { return items[0]; }
来源：http://www.xuanzx.com/163jtxccgkf.html

Java: static <T> T first(List<T> items) { return items.get(0); }
来源：http://www.xuanzx.com/163iojzkspd.html

Go:   func First[T any](items []T) T { return items[0] }
来源：http://www.xuanzx.com/163reeitnvn.html

Ruby: # 无泛型
来源：http://www.aibaodan.cn/163kulrlbyl.html

C#:   static T First<T>(List<T> items) => items[0];
来源：http://www.sxryk.cn/163wfbscvep.html

[C15] 解构 / 展开参数
来源：http://www.aibaodan.cn/163ogysdxhy.html

Py:   def f(a, b): ...;  f(*[1, 2]);  f(**{"a": 1, "b": 2})
来源：http://www.xuanzx.com/163lcfdtzax.html

PHP:  [$a, $b] = $pair;
来源：http://www.xuanzx.com/163zsdqyvhb.html

JS:   const { a, b } = obj;  function f({ a, b }) {}
来源：http://www.xuanzx.com/163qalljfys.html

TS:   function f({ a, b }: { a: number; b: number }) {}
来源：http://www.xuanzx.com/163xlboersi.html

Java: // 无解构
来源：http://www.aibaodan.cn/163xfqlerta.html

Go:   // 无解构
来源：http://www.sxryk.cn/163kaghftod.html

Ruby: a, b = pair
来源：http://www.sxryk.cn/163dgwkgktf.html

C#:   var (a, b) = pair;
来源：http://www.xuanzx.com/163nklxnbkt.html

[C16] 函数 / 方法重载
来源：http://www.aibaodan.cn/163irzmrrpk.html

Py:   # 无重载：用默认参数或 *args 变通
来源：http://www.aibaodan.cn/163hbllufaw.html

PHP:  // 无重载
来源：http://www.xuanzx.com/163lpvyaidm.html

JS:   // 无重载：靠 arguments.length 分支
来源：http://www.aibaodan.cn/163uryrtglv.html

TS:   // 用联合类型或重载签名声明
来源：http://www.xuanzx.com/163gbizsjpd.html

Java: void f(int a) {}  void f(String a) {}
来源：http://www.sxryk.cn/163atumdhyz.html

Go:   // 无重载：用不同函数名
来源：http://www.xuanzx.com/163nyeufffw.html

Ruby: # 无重载：靠动态参数
来源：http://www.aibaodan.cn/163qcdqsuqj.html

C#:   void F(int a) {}  void F(string a) {}
来源：http://www.sxryk.cn/163gtlgwghc.html

================================================================================
来源：http://www.sxryk.cn/163xdiossbl.html

D. 数组 / 列表 / 集合
来源：http://www.aibaodan.cn/163ckvviiat.html

================================================================================
来源：http://www.aibaodan.cn/163vmxzceib.html

[D01] 创建数组 / 列表
来源：http://www.sxryk.cn/163pcuknkoh.html

Py:   arr = [1, 2, 3];  empty = []
来源：http://www.xuanzx.com/163osjzyxay.html

PHP:  $arr = [1, 2, 3];  $empty = [];
来源：http://www.sxryk.cn/163ltewtvxs.html

JS:   const arr = [1, 2, 3];  const empty = [];
来源：http://www.sxryk.cn/163lfwrjhvw.html

TS:   const arr: number[] = [1, 2, 3];
来源：http://www.sxryk.cn/163sqkybssd.html

Java: var arr = new int[]{1, 2, 3};  var list = new ArrayList<>(List.of(1, 2, 3));
来源：http://www.xuanzx.com/163ibiasrij.html

Go:   arr := []int{1, 2, 3}
来源：http://www.sxryk.cn/163xxxqdswo.html

Ruby: arr = [1, 2, 3]
来源：http://www.aibaodan.cn/163rkcriywa.html

C#:   var arr = new[] { 1, 2, 3 };  var list = new List<int> { 1, 2, 3 };
来源：http://www.xuanzx.com/163zsmgrbct.html

[D02] 追加元素到末尾
来源：http://www.aibaodan.cn/163dmqvpeac.html

Py:   arr.append(4); arr.extend([5, 6])
来源：http://www.sxryk.cn/163sagbyllv.html

PHP:  $arr[] = 4; array_push($arr, 5);
来源：http://www.sxryk.cn/163ixvwatww.html

JS:   arr.push(4);
来源：http://www.sxryk.cn/163uihufbbq.html

TS:   arr.push(4);
来源：http://www.xuanzx.com/163aaapdksk.html

Java: list.add(4);
来源：http://www.aibaodan.cn/163dujqnbez.html

Go:   arr = append(arr, 4)
来源：http://www.sxryk.cn/163vmdrghcd.html

Ruby: arr << 4; arr.push(5)
来源：http://www.aibaodan.cn/163yffxtvut.html

C#:   list.Add(4);
来源：http://www.aibaodan.cn/163qxufrrkq.html

[D03] 在指定位置插入元素
来源：http://www.xuanzx.com/163ixhtvoje.html

Py:   arr.insert(0, 0)
来源：http://www.aibaodan.cn/163xmchomcy.html

PHP:  array_splice($arr, 0, 0, [0]);
来源：http://www.sxryk.cn/163eynvrfoy.html

JS:   arr.splice(0, 0, 0);  arr.unshift(0)   // 插到头部
来源：http://www.aibaodan.cn/163bvafovbt.html

TS:   arr.splice(0, 0, 0);
来源：http://www.sxryk.cn/163ydoorzwj.html

Java: list.add(0, 0);
来源：http://www.aibaodan.cn/163vuemfqzx.html

Go:   arr = append([]int{0}, arr...)
来源：http://www.aibaodan.cn/163kjjixezv.html

Ruby: arr.insert(0, 0); arr.unshift(0)
来源：http://www.xuanzx.com/163jblctaya.html

C#:   list.Insert(0, 0);
来源：http://www.sxryk.cn/163shypmowb.html

[D04] 删除元素
来源：http://www.xuanzx.com/163tnvjcogj.html

Py:   del arr[0]; arr.pop(); arr.remove(3)
来源：http://www.sxryk.cn/163eluxgrqm.html

PHP:  array_splice($arr, 0, 1); array_pop($arr);
来源：http://www.aibaodan.cn/163hsotjwbz.html

JS:   arr.splice(0, 1); arr.pop(); arr.shift();
来源：http://www.aibaodan.cn/163pyoasavw.html

TS:   arr.splice(0, 1);
来源：http://www.xuanzx.com/163wrmycmiv.html

Java: list.remove(0); list.removeIf(x -> x == 3);
来源：http://www.aibaodan.cn/163laegaepz.html

Go:   arr = append(arr[:0], arr[1:]...)
来源：http://www.xuanzx.com/163pzovdpat.html

Ruby: arr.delete_at(0); arr.delete(3)
来源：http://www.xuanzx.com/163qbyscwqp.html

C#:   list.RemoveAt(0); list.Remove(3);
来源：http://www.sxryk.cn/163lmljxdng.html

[D05] 访问与修改元素
来源：http://www.sxryk.cn/163rbziasvb.html

Py:   arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163xgzxbufv.html

PHP:  $arr[0]; end($arr); $arr[0] = 9;
来源：http://www.aibaodan.cn/163ztbaqadr.html

JS:   arr[0]; arr.at(-1); arr[0] = 9;
来源：http://www.aibaodan.cn/163pafcxgem.html

TS:   arr[0]; arr.at(-1);
来源：http://www.aibaodan.cn/163sdczdpzw.html

Java: list.get(0); list.set(0, 9);
来源：http://www.sxryk.cn/163zxaoftiq.html

Go:   arr[0]; arr[0] = 9
来源：http://www.sxryk.cn/163floaqrdl.html

Ruby: arr[0]; arr[-1]; arr[0] = 9
来源：http://www.sxryk.cn/163nbaqycyr.html

C#:   list[0]; list[^1]; list[0] = 9;
来源：http://www.aibaodan.cn/163yalhbmrc.html

[D06] 数组长度
来源：http://www.aibaodan.cn/163qujklmsn.html

Py:   len(arr)
来源：http://www.sxryk.cn/163uxptocwc.html

PHP:  count($arr);
来源：http://www.sxryk.cn/163ooywlnym.html

JS:   arr.length
来源：http://www.xuanzx.com/163bbgxugtt.html

TS:   arr.length
来源：http://www.aibaodan.cn/163vwslykie.html

Java: list.size();
来源：http://www.xuanzx.com/163aqlakgev.html

Go:   len(arr)
来源：http://www.xuanzx.com/163svaqiqur.html

Ruby: arr.length; arr.size
来源：http://www.aibaodan.cn/163uigpgvzf.html

C#:   list.Count;
来源：http://www.aibaodan.cn/163eqarrhvi.html

[D07] 切片 / 取子数组
来源：http://www.sxryk.cn/163fkdbngva.html

Py:   arr[1:4]; arr[:3]; arr[::2]
来源：http://www.xuanzx.com/163quelqthk.html

PHP:  array_slice($arr, 1, 3);
来源：http://www.aibaodan.cn/163xfbpebbx.html

JS:   arr.slice(1, 4);
来源：http://www.xuanzx.com/163rfuzyexj.html

TS:   arr.slice(1, 4);
来源：http://www.aibaodan.cn/163wllnjjdj.html

Java: list.subList(1, 4);
来源：http://www.sxryk.cn/163ftstikio.html

Go:   arr[1:4]
来源：http://www.aibaodan.cn/163kkfubpwq.html

Ruby: arr[1, 3]
来源：http://www.sxryk.cn/163fcciyzft.html

C#:   list.GetRange(1, 3);
来源：http://www.aibaodan.cn/163tohhxcwn.html

[D08] 合并两个数组
来源：http://www.aibaodan.cn/163qipjptqy.html

Py:   a + b;  a.extend(b)
来源：http://www.xuanzx.com/163zuqknuip.html

PHP:  array_merge($a, $b);
来源：http://www.aibaodan.cn/163osrqybij.html

JS:   [...a, ...b];  a.concat(b);
来源：http://www.xuanzx.com/163hxxhtgmw.html

TS:   [...a, ...b];
来源：http://www.aibaodan.cn/163dpnkharh.html

Java: Stream.concat(a.stream(), b.stream()).toList()
来源：http://www.xuanzx.com/163rxfuhvqd.html

Go:   append(a, b...)
来源：http://www.sxryk.cn/163havadobo.html

Ruby: a + b;  a.concat(b)
来源：http://www.xuanzx.com/163vszlkuha.html

C#:   a.Concat(b).ToList()
来源：http://www.xuanzx.com/163noewtfah.html

[D09] 排序（升序）
来源：http://www.sxryk.cn/163pxleimzn.html

Py:   sorted(arr);  arr.sort()
来源：http://www.xuanzx.com/163ltshjqum.html

PHP:  sort($arr);
来源：http://www.xuanzx.com/163tdcijena.html

JS:   [...arr].sort((x, y) => x - y)     // 默认按字符串比较，数字必须给比较器
来源：http://www.sxryk.cn/163zipkpauo.html

TS:   [...arr].sort((x, y) => x - y);
来源：http://www.aibaodan.cn/163xhmbhfjm.html

Java: Collections.sort(list);  list.sort(null);
来源：http://www.xuanzx.com/163ivwtibds.html

Go:   sort.Ints(arr);  slices.Sort(arr)
来源：http://www.aibaodan.cn/163aiduchdq.html

Ruby: arr.sort
来源：http://www.xuanzx.com/163khjykndv.html

C#:   list.Sort();
来源：http://www.sxryk.cn/163psefxmzh.html

[D10] 自定义排序（按字段 / 多条件）
来源：http://www.aibaodan.cn/163eruukoqe.html

Py:   arr.sort(key=lambda x: x["age"]);  sorted(arr, key=len, reverse=True)
来源：http://www.xuanzx.com/163hvenctqs.html

PHP:  usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163snodcgpn.html

JS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.aibaodan.cn/163qrcsbuxh.html

TS:   arr.sort((a, b) => a.age - b.age)
来源：http://www.xuanzx.com/163pdbyazzp.html

Java: list.sort(Comparator.comparing(Person::age));
来源：http://www.aibaodan.cn/163cyqudmaf.html

Go:   sort.Slice(items, func(i, j int) bool { return items[i].Age < items[j].Age })
来源：http://www.aibaodan.cn/163ksrlcbqg.html

Ruby: arr.sort_by { |x| x[:age] }
来源：http://www.aibaodan.cn/163tcdwlema.html

C#:   list.Sort((a, b) => a.Age.CompareTo(b.Age));
来源：http://www.sxryk.cn/163aqvqoqli.html

[D11] 反转数组
来源：http://www.sxryk.cn/163cbuzzddp.html

Py:   arr[::-1];  arr.reverse()
来源：http://www.xuanzx.com/163zziqbhhx.html

PHP:  array_reverse($arr);
来源：http://www.aibaodan.cn/163omiibntf.html

JS:   [...arr].reverse();  arr.toReversed()
来源：http://www.aibaodan.cn/163dwgrondd.html

TS:   [...arr].reverse();
来源：http://www.sxryk.cn/163tmqefbua.html

Java: Collections.reverse(list);
来源：http://www.xuanzx.com/163ktwueeev.html

Go:   slices.Reverse(arr)
来源：http://www.xuanzx.com/163psyypgbl.html

Ruby: arr.reverse
来源：http://www.sxryk.cn/163mfdlhqrz.html

C#:   list.Reverse();
来源：http://www.xuanzx.com/163bikxjdby.html

[D12] 查找元素下标
来源：http://www.sxryk.cn/163ilhekhlf.html

Py:   arr.index(x);  x in arr
来源：http://www.sxryk.cn/163iserkhqh.html

PHP:  array_search($x, $arr);  in_array($x, $arr);
来源：http://www.aibaodan.cn/163vfvsrbxv.html

JS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.xuanzx.com/163qsnuvtrz.html

TS:   arr.indexOf(x);  arr.findIndex(v => v > 3)
来源：http://www.aibaodan.cn/163ffcvlvqs.html

Java: list.indexOf(x);  IntStream.range(0, list.size()).filter(i -> list.get(i) > 3).findFirst()
来源：http://www.xuanzx.com/163pwrvkmct.html

Go:   slices.Index(arr, x)
来源：http://www.sxryk.cn/163liktohci.html

Ruby: arr.index(x)
来源：http://www.sxryk.cn/163dhiibree.html

C#:   list.IndexOf(x);
来源：http://www.xuanzx.com/163orvohfmd.html

[D13] 过滤（保留满足条件的）
来源：http://www.aibaodan.cn/163ewkmjeyy.html

Py:   [x for x in arr if x > 3];  list(filter(lambda x: x > 3, arr))
来源：http://www.xuanzx.com/163sjbjhywz.html

PHP:  array_filter($arr, fn($x) => $x > 3);
来源：http://www.aibaodan.cn/163xodraxqd.html

JS:   arr.filter(x => x > 3)
来源：http://www.aibaodan.cn/163zdqbaeyk.html

TS:   arr.filter(x => x > 3)
来源：http://www.xuanzx.com/163vsryqsbv.html

Java: list.stream().filter(x -> x > 3).toList()
来源：http://www.xuanzx.com/163rlpwwxyx.html

Go:   // 手写循环，把满足条件的 append 到新切片
来源：http://www.xuanzx.com/163mgdoeopa.html

Ruby: arr.select { |x| x > 3 }
来源：http://www.aibaodan.cn/163lqntaeaq.html

C#:   list.Where(x => x > 3).ToList()
来源：http://www.xuanzx.com/163golvrwjn.html

[D14] 映射转换（每个元素变形）
来源：http://www.xuanzx.com/163uzierzet.html

Py:   [x * 2 for x in arr];  list(map(lambda x: x * 2, arr))
来源：http://www.sxryk.cn/163imnhlxbg.html

PHP:  array_map(fn($x) => $x * 2, $arr);
来源：http://www.xuanzx.com/163kuxcwemo.html

JS:   arr.map(x => x * 2)
来源：http://www.sxryk.cn/163olbbwhvj.html

TS:   arr.map(x => x * 2)
来源：http://www.xuanzx.com/163xcdvtmik.html

Java: list.stream().map(x -> x * 2).toList()
来源：http://www.xuanzx.com/163ytyyfhei.html

Go:   // 手写循环
来源：http://www.sxryk.cn/163ujrpxwfa.html

Ruby: arr.map { |x| x * 2 }
来源：http://www.aibaodan.cn/163nqscdxsw.html

C#:   list.Select(x => x * 2).ToList()
来源：http://www.sxryk.cn/163wjcvkfbj.html

[D15] 去重
来源：http://www.sxryk.cn/163tyqykust.html

Py:   list(set(arr))        # 不保序；保序用 list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163oytuzccb.html

PHP:  array_unique($arr);
来源：http://www.xuanzx.com/163xvfbddno.html

JS:   [...new Set(arr)]
来源：http://www.xuanzx.com/163dzdzxbyw.html

TS:   [...new Set(arr)]
来源：http://www.aibaodan.cn/163cuuntrwb.html

Java: new ArrayList<>(new LinkedHashSet<>(list))
来源：http://www.sxryk.cn/163nwcjwsbr.html

Go:   // 用 map[T]struct{} 手写
来源：http://www.aibaodan.cn/163eknfarhh.html

Ruby: arr.uniq
来源：http://www.aibaodan.cn/163iedfcrbl.html

C#:   list.Distinct().ToList()
来源：http://www.aibaodan.cn/163ysdaywcq.html

[D16] 求和与平均值
来源：http://www.xuanzx.com/163mqdjathb.html

Py:   sum(arr);  sum(arr) / len(arr)
来源：http://www.sxryk.cn/163jhvvzjnp.html

PHP:  array_sum($arr);  array_sum($arr) / count($arr);
来源：http://www.xuanzx.com/163ygvvaugg.html

JS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163vkuxxiwf.html

TS:   arr.reduce((a, b) => a + b, 0)
来源：http://www.xuanzx.com/163usnitatb.html

Java: list.stream().mapToInt(Integer::intValue).sum()
来源：http://www.aibaodan.cn/163dunnuiaj.html

Go:   // 手写循环累加
来源：http://www.xuanzx.com/163pkadxrie.html

Ruby: arr.sum;  arr.sum.to_f / arr.size
来源：http://www.aibaodan.cn/163dnmkdndn.html

C#:   list.Sum();  list.Average()
来源：http://www.xuanzx.com/163srhmymvr.html

[D17] 最大值与最小值
来源：http://www.aibaodan.cn/163bgwefexn.html

Py:   max(arr);  min(arr)
来源：http://www.sxryk.cn/163osxxwmzd.html

PHP:  max($arr);  min($arr);
来源：http://www.aibaodan.cn/163fdulavpx.html

JS:   Math.max(...arr);  Math.min(...arr)
来源：http://www.aibaodan.cn/163absfkqqq.html

TS:   Math.max(...arr);
来源：http://www.xuanzx.com/163qbvaskar.html

Java: Collections.max(list);  Collections.min(list);
来源：http://www.xuanzx.com/163ixloogqp.html

Go:   slices.Max(arr);  slices.Min(arr)
来源：http://www.sxryk.cn/163cdpybddv.html

Ruby: arr.max;  arr.min
来源：http://www.xuanzx.com/163eovvembn.html

C#:   list.Max();  list.Min()
来源：http://www.aibaodan.cn/163tfmugwtt.html

[D18] 扁平化嵌套数组
来源：http://www.xuanzx.com/163ryjfzzjk.html

Py:   [y for xs in nested for y in xs];  sum(nested, [])
来源：http://www.aibaodan.cn/163qzekhqji.html

PHP:  array_merge(...$nested);
来源：http://www.aibaodan.cn/163wcmfmwcd.html

JS:   nested.flat();  nested.flat(Infinity)
来源：http://www.xuanzx.com/163gptypikf.html

TS:   nested.flat();
来源：http://www.sxryk.cn/163xffmksbx.html

Java: nested.stream().flatMap(List::stream).toList()
来源：http://www.xuanzx.com/163udthcuvq.html

Go:   // 手写双层循环
来源：http://www.sxryk.cn/163qghbclmw.html

Ruby: nested.flatten
来源：http://www.aibaodan.cn/163smoplvjs.html

C#:   nested.SelectMany(x => x).ToList()
来源：http://www.sxryk.cn/163bnygpzeq.html

[D19] 按字段分组
来源：http://www.aibaodan.cn/163gvlubdkm.html

Py:   defaultdict(list)：for x in arr: groups[x["type"]].append(x)
来源：http://www.xuanzx.com/163whdjdxwk.html

PHP:  // 手写 foreach，归入 $groups[$key][]
来源：http://www.aibaodan.cn/163msoihseu.html

JS:   Object.groupBy(arr, x => x.type)    // ES2024；旧环境手写 reduce
来源：http://www.sxryk.cn/163cxttbqsp.html

TS:   Object.groupBy(arr, x => x.type)
来源：http://www.xuanzx.com/163xfkkvzus.html

Java: list.stream().collect(Collectors.groupingBy(Person::type))
来源：http://www.sxryk.cn/163erkmgwzh.html

Go:   // 手写 map[string][]T
来源：http://www.aibaodan.cn/163wbhnlyyu.html

Ruby: arr.group_by { |x| x[:type] }
来源：http://www.sxryk.cn/163zndzsjwf.html

C#:   list.GroupBy(x => x.Type).ToDictionary(g => g.Key, g => g.ToList())
来源：http://www.aibaodan.cn/163yjzubcis.html

[D20] 统计每个元素出现次数
来源：http://www.sxryk.cn/163jisonfyb.html

Py:   Counter(arr)
来源：http://www.aibaodan.cn/163avsssfup.html

PHP:  array_count_values($arr);
来源：http://www.sxryk.cn/163ldncmvhf.html

JS:   arr.reduce((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163zntlnztk.html

TS:   arr.reduce<Record<string, number>>((m, x) => (m[x] = (m[x] || 0) + 1, m), {})
来源：http://www.aibaodan.cn/163gpimymbg.html

Java: list.stream().collect(Collectors.groupingBy(x -> x, Collectors.counting()))
来源：http://www.xuanzx.com/163owerypdl.html

Go:   // 手写 map[T]int
来源：http://www.aibaodan.cn/163cvbbnsqe.html


<!-- 参考信息 -->